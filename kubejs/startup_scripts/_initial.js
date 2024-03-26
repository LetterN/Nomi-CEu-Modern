// priority: 9999
//! This script loads first before the other startup scripts
// put your util or patches here so that you can access them at other scripts

// fake our name
Platform.mods.kubejs.name = "Nomi Labs"

/**
 * Capitalizes the first char of the string
 * @param {string} word
 * @returns
 */
const capitalize = (word) => (word[0].toUpperCase() + word.substring(1));

/**
 * Creates a placeholder item
 * @param {Registry.Item} registry
 * @param {ResourceLocation_ | string} name - item (id)
 */
const placeHolder = (registry, name) => {
	registry.create(name).texture('kubejs:item/barrier').displayName(`§eT. B. I. §r- §d${name.split('_').map(v => capitalize(v))}`);
}
