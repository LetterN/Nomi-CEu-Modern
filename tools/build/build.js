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
import { DownloadCF, GetModInfo } from './lib/curseforge.js';

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
      Juke.chdir(`../../dist/.tmp/${group}`, import.meta.url);
      await Juke.exec('zip', [
        '-rqy',
        `../../${group}.zip`,
        'overrides',
        'manifest.json',
        'modlist.html',
      ])
      Juke.chdir('../..', import.meta.url);
      return;
    }

    if (process.platform === 'win32') {
      await Juke.exec('powershell', [
        'Compress-Archive',
        `-Path ${resolve(`dist\\.tmp\\${group}\\overrides`)},${resolve(`dist\\.tmp\\${group}\\manifest.json`)},${resolve(`dist\\.tmp\\${group}\\modlist.html`)}`,
        `-DestinationPath ${resolve(`dist\\${group}.zip`)}`,
      ])
    }

  } catch (error) {
    Juke.logger.error(error);
    throw new Juke.ExitCode(1);
  } finally {
    Juke.rm(`dist/.tmp/${group}`, { recursive: true });
  }
}

const CheckParameter = new Juke.Parameter({
  type: "boolean",
  alias: 'c',
})

export const BuildModlistTarget = new Juke.Target({
  inputs: [
    'manifest.json',
  ],
  outputs: [
    "dist/modlist.html"
  ],
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
    fs.writeFileSync('dist/modlist.html', html);
  }
})

export const DownloadModsTarget = new Juke.Target({
  parameters: [CheckParameter],
  inputs: [
    'manifest.json',
  ],
  outputs: ({ get }) => {
    if (get(CheckParameter)) {
      return []; // run this target if --check or -c is passed
    }
    return [
      "dist/modcache/"
    ]
  },
  executes: async () => {
    if (!env.CFCORE_API_TOKEN) {
      Juke.logger.error('CFCORE_API_TOKEN env var is required for downloading mods.');
      throw new Juke.ExitCode(1);
    }
    const jsonData = JSON.parse(fs.readFileSync('manifest.json', 'utf-8'));

    fs.mkdirSync("dist/modcache", { recursive: true })

    for (const key in jsonData.files) {
      const file = jsonData.files[key];
      await DownloadCF(env.CFCORE_API_TOKEN, {
        modID: file.projectID,
        modFileID: file.fileID
      }, `dist/modcache/`)
    }
  }
});

export const BuildClientTarget = new Juke.Target({
  dependsOn: [BuildModlistTarget],
  inputs: [
    ...includeList,
    "dist/modlist.html"
  ],
  outputs: () => {
    return [
      "dist/client/",
      "dist/client.zip",
      ...includeList.map(v => `dist/client/${v}`)
    ]
  },
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
  outputs: () => {
    return [
      "dist/server/",
      "dist/server.zip",
      ...includeList.map(v => `dist/server/${v}`)
    ]
  },
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
  outputs: () => {
    return [
      "dist/dev/",
      "dist/.devtmp/",
      "dist/dev.zip",
      ...includeList.map(v => `dist/dev/${v}`)
    ]
  },
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
