#!/usr/bin/env node
/**
* Build script for nomifactory-modern
*
* This script uses Juke Build, read the docs here:
* https://github.com/stylemistake/juke-build
*/

import fs from 'fs';
import { resolve } from 'path';
import { env } from 'process';
import Juke from './juke/index.js';
import { DownloadCF, GetModInfo, UploadCF } from './lib/curseforge.js';

Juke.chdir('../..', import.meta.url);
Juke.setup({ file: import.meta.url }).then((code) => {
  // We're using the currently available quirk in Juke Build, which
  // prevents it from exiting on Windows, to wait on errors.
  if (code !== 0 && process.argv.includes('--wait-on-error')) {
    Juke.logger.error('Please inspect the error and close the window.');
    return;
  }
});

const includeList = [
  "config",
  "defaultconfigs",
  "kubejs",
  "mods",
  "LICENSE.md"
]

async function packMod(group) {
  Juke.rm(`dist/.tmp/${group}`, { recursive: true });
  // copy dir to dist/.tmp
  fs.mkdirSync(`dist/.tmp/${group}`, { recursive: true })
  fs.cpSync(`dist/${group}`, `dist/.tmp/${group}/overrides`, { recursive: true, force: true })
  fs.copyFileSync('manifest.json', `dist/.tmp/${group}/manifest.json`)
  fs.copyFileSync('dist/modlist.html', `dist/.tmp/${group}/modlist.html`)

  try {
    let hasZipCmd = false;
    try {
      await Juke.exec('zip', ['--help'], { silent: true });
      hasZipCmd = true;
    } catch { /* noop */ }

    if (hasZipCmd) {
      await Juke.exec('tools/zip-stuff', [
        `dist/.tmp/${group}`,
        `dist/${group}.zip`,
        'overrides',
        'manifest.json',
        'modlist.html'
      ])
      return;
    }

    if (process.platform === 'win32') {
      await Juke.exec('powershell', [
        'Compress-Archive',
        `-Path "${resolve(`dist\\.tmp\\${group}\\overrides`)}","${resolve(`dist\\.tmp\\${group}\\manifest.json`)}","${resolve(`dist\\.tmp\\${group}\\modlist.html`)}"`,
        `-DestinationPath "${resolve(`dist\\${group}.zip`)}"`,
      ])
    }

  } catch (error) {
    Juke.logger.error(error);
    throw new Juke.ExitCode(1);
  } finally {
    Juke.rm(`dist/.tmp/${group}`, { recursive: true });
  }
}

// add --check if you want the modjars to be rebuilt
export const CheckParameter = new Juke.Parameter({
  type: "boolean",
  alias: 'c',
})

// for --mode=beta/release
export const ModeParameter = new Juke.Parameter({
  type: 'string'
})

export const BuildModlistTarget = new Juke.Target({
  inputs: ['manifest.json'],
  outputs: ['dist/modlist.html'],
  executes: async () => {
    if (!env.CFCORE_API_TOKEN) {
      Juke.logger.error('CFCORE_API_TOKEN env var is required for downloading mods.');
      throw new Juke.ExitCode(1);
    }
    const jsonData = JSON.parse(fs.readFileSync('manifest.json', 'utf-8'));
    let html = '<ul>\n'
    for (const key in jsonData.files) {
      const file = jsonData.files[key];
      const modInfo = await GetModInfo(env.CFCORE_API_TOKEN, file.projectID);
      html += `<li><a href=${modInfo.links.websiteUrl}>${modInfo.name} (by ${modInfo.authors[0].name})</a></li>\n`;
    }
    html += '</ul>'
    fs.writeFileSync(resolve('dist/modlist.html'), html);
  }
})

export const DownloadModsTarget = new Juke.Target({
  parameters: [CheckParameter],
  inputs: ['manifest.json'],
  outputs: ({ get }) => (
    get(CheckParameter) ? [] : ['dist/modcache/']
  ),
  executes: async () => {
    if (!env.CFCORE_API_TOKEN) {
      Juke.logger.error('CFCORE_API_TOKEN env var is required for downloading mods.');
      throw new Juke.ExitCode(1);
    }
    const jsonData = JSON.parse(fs.readFileSync('manifest.json', 'utf-8'));

    fs.mkdirSync("dist/modcache", { recursive: true })

    const max_conc_download = 3;
    let await_bucket = [];
    for (const key in jsonData.files) {
      const file = jsonData.files[key];
      await_bucket.push(DownloadCF(env.CFCORE_API_TOKEN, {
        modID: file.projectID,
        modFileID: file.fileID
      }, `dist/modcache/`));

      if (await_bucket.length <= max_conc_download) {
        await Promise.all(await_bucket)
        await_bucket = [];
      }
    }
  }
});

export const BuildClientTarget = new Juke.Target({
  dependsOn: [BuildModlistTarget],
  inputs: [
    ...includeList,
    "dist/modlist.html"
  ],
  outputs: () => ([
    "dist/client/",
    "dist/client.zip",
    ...includeList.map(v => `dist/client/${v}`)
  ]),
  executes: async () => {
    fs.mkdirSync("dist/client", { recursive: true })
    for (const folders of includeList) {
      fs.cpSync(folders, `dist/client/${folders}`, { recursive: true })
    }

    await packMod("client");
  }
})

export const BuildServerTarget = new Juke.Target({
  dependsOn: [BuildModlistTarget, DownloadModsTarget],
  inputs: [
    ...includeList,
    "dist/modlist.html"
  ],
  outputs: () => ([
    "dist/server/",
    "dist/server.zip",
    ...includeList.map(v => `dist/server/${v}`)
  ]),
  executes: async () => {
    fs.mkdirSync("dist/server", { recursive: true })
    for (const folders of includeList) {
      fs.cpSync(folders, `dist/server/${folders}`, { recursive: true })
    }
    // mods
    fs.cpSync('dist/modcache', 'dist/server/mods', { recursive: true, force: true })

    await packMod("server");
  }
})

export const BuildDevTarget = new Juke.Target({
  dependsOn: [BuildModlistTarget, DownloadModsTarget],
  inputs: [
    ...includeList,
    "dist/modlist.html"
  ],
  outputs: () => ([
    "dist/dev/",
    "dist/.devtmp/",
    "dist/dev.zip",
    ...includeList.map(v => `dist/dev/${v}`)
  ]),
  executes: async () => {
    fs.mkdirSync("dist/dev", { recursive: true });
    fs.mkdirSync("dist/.devtmp", { recursive: true });
    for (const folders of includeList.filter(v => (v !== "mods"))) {
      fs.symlinkSync(resolve(folders), resolve(`dist/dev/${folders}`));
    }

    // "merge" both mod folders
    fs.cpSync('dist/modcache', 'dist/.devtmp', { recursive: true });
    fs.cpSync('mods', 'dist/.devtmp', { recursive: true, force: true });
    fs.symlinkSync(resolve('dist/.devtmp'), resolve('dist/dev/mods'));

    await packMod("dev");
  }
})

export const BuildAllTarget = new Juke.Target({
  dependsOn: [BuildServerTarget, BuildClientTarget]
})

export const UploadTarget = new Juke.Target({
  dependsOn: [BuildAllTarget],
  parameters: [ModeParameter],
  inputs: [
    "dist/client.zip",
    "dist/server.zip",
  ],
  executes: async ({ get }) => {
    if (!env.CFCORE_API_TOKEN) {
      Juke.logger.error('CFCORE_API_TOKEN env var is required for downloading mods.');
      throw new Juke.ExitCode(1);
    }
    const rt = get(ModeParameter);
    const clientUploadResponse = await UploadCF(env.CFCORE_API_TOKEN, {
      mcVersion: '1.20.1',
      file: 'dist/client.zip',
      displayName: 'client',
      projectID: 123, //! CHANGE THIS
      releaseType: rt, // default beta
      // TODO changelog
    });

    await UploadCF(env.CFCORE_API_TOKEN, {
      parentFileID: clientUploadResponse.id,
      file: 'dist/server.zip',
      displayName: 'server',
      projectID: 123, //! CHANGE THIS
      releaseType: rt, // default beta
      // TODO changelog
    });
  },
})

export const CleanCacheTarget = new Juke.Target({
  executes: async () => {
    Juke.rm('dist/modcache', { recursive: true });
    Juke.rm('dist/modlist.html');
  },
})

export const CleanBuildTarget = new Juke.Target({
  executes: async () => {
    Juke.rm('dist/client', { recursive: true });
    Juke.rm('dist/dev', { recursive: true });
    Juke.rm('dist/server', { recursive: true });
    Juke.rm('dist/.devtmp', { recursive: true });
    Juke.rm('dist/.tmp', { recursive: true });
    Juke.rm('dist/*.zip');
  },
})

export const CleanAllTarget = new Juke.Target({
  dependsOn: [CleanCacheTarget, CleanBuildTarget],
});

export default BuildDevTarget;
