//Doesnt work for some reason, ive tried multiple ways.
//TODO: Remove NC ores

WorldgenEvents.remove(event => {
    event.removeFeatureById('underground_ores', [
        'nuclearcraft:lithium_ore',
        'nuclearcraft:thorium_ore',
        'nuclearcraft:tin_ore',
        'nuclearcraft:cobalt_deepslate_ore',
        'nuclearcraft:silver_ore',
        'nuclearcraft:uranium_ore',
        'nuclearcraft:zinc_ore',
        'nuclearcraft:boron_ore',
        'nuclearcraft:lithium_deepslate_ore',
        'nuclearcraft:magnesium_deepslate_ore',
        'nuclearcraft:thorium_deepslate_ore',
        'nuclearcraft:uranium_deepslate_ore',
        'nuclearcraft:magnesium_ore',
        'nuclearcraft:boron_deepslate_ore',
        'nuclearcraft:cobalt_ore',
        'nuclearcraft:platinum_deepslate_ore',
        'nuclearcraft:silver_deepslate_ore',
        'nuclearcraft:lead_ore',
        'miniutilities:overworld_ender_ore',
        'armorplus:ore_lava_crystal',
        'armorplus:ore_lava_crystal_stone',
        'armorplus:ore_lava_crystal_obsidian'
    ])
})