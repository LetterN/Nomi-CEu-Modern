ServerEvents.tags('item', event => {
    event.add('forge:ingots/neutronium', 'avaritia:neutronium_ingot')
    event.add('forge:nuggets/neutronium', 'avaritia:neutronium_nugget')
    event.add('forge:storage_blocks/neutronium', 'avaritia:neutronium_block')
    event.add('forge:dusts/tiny/neutronium', 'avaritia:pile_of_neutrons')
    event.add('ae2:all_fluix', 'gtceu:fluix_gem')
    event.add('forge:singularities/ultimate', 'kubejs:mote_of_omnium')
    event.add('forge:singularities/ultimate', 'extendedcrafting:ultimate_singularity')
    event.add('forge:ingots/the_ultimate', 'kubejs:omnium_ingot')
    event.add('forge:ingots/electrum_flux', 'redstone_arsenal:flux_ingot')
    event.add('forge:dusts/electrum_flux', 'redstone_arsenal:flux_dust')
    event.add('forge:nuggets/electrum_flux', 'redstone_arsenal:flux_nugget')
    event.add('forge:gears/electrum_flux', 'redstone_arsenal:flux_gear')
    event.removeAllTagsFrom('ae2:certus_quartz_crystal')
    event.remove('forge:ingots/aluminum', 'nuclearcraft:aluminum_ingot')
    event.add('forge:ingots/aluminium', 'nuclearcraft:aluminum_ingot')
})

ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', 'forge:glass')
    event.add('minecraft:mineable/pickaxe', 'forge:glass_panes')
})

ServerEvents.tags('fluid', event => {

})

//EMI Hacky Fix   MODS TO FIX: DRACONIC EVOLUTION, THERMAL SERIES, GTCEU NEUTRONIUM, NUCLEARCRAFT
ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(global.unificationPattern)
    event.removeAllTagsFrom(global.manualUnification)
})

ServerEvents.recipes(event => {
    event.remove({ output: global.unificationPattern })
    event.remove({ output: global.manualUnification })
})










// Hacky Drac Reactor stuff
// This will be removed when it becomes a proper post tank multi in favor of just including the injectors in it's recipe or something
ServerEvents.tags('item', event => {
    event.add('nomi:basic_injector_tier', 'draconicevolution:basic_crafting_injector')
    event.add('nomi:basic_injector_tier', 'draconicevolution:wyvern_crafting_injector')
    event.add('nomi:basic_injector_tier', 'draconicevolution:awakened_crafting_injector')
    event.add('nomi:basic_injector_tier', 'draconicevolution:chaotic_crafting_injector')
    event.add('nomi:wyvern_injector_tier', 'draconicevolution:wyvern_crafting_injector')
    event.add('nomi:wyvern_injector_tier', 'draconicevolution:awakened_crafting_injector')
    event.add('nomi:wyvern_injector_tier', 'draconicevolution:chaotic_crafting_injector')
    event.add('nomi:awakened_injector_tier', 'draconicevolution:awakened_crafting_injector')
    event.add('nomi:awakened_injector_tier', 'draconicevolution:chaotic_crafting_injector')
    event.add('nomi:chaotic_injector_tier', 'draconicevolution:chaotic_crafting_injector')
})