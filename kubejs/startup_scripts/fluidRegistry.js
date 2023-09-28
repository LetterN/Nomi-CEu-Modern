StartupEvents.registry('fluid', event => {
    //Add Missing Thermal Fluids

    event.create('molten_pyrotheum').bucketColor(0xf7db3a).displayName('\u00A76Blazing Pyrotheum').stillTexture('kubejs:block/pyrotheum_still').flowingTexture('kubejs:block/pyrotheum_flow')
    event.create('molten_cryotheum').bucketColor(0x43f4f7).displayName('\u00A7bGelid Cryotheum').stillTexture('kubejs:block/cryotheum_still').flowingTexture('kubejs:block/cryotheum_flow')
    event.create('molten_petrotheum').bucketColor(0x1a1310).displayName('\u00A78Tectonic Petrotheum').stillTexture('kubejs:block/petrotheum_still').flowingTexture('kubejs:block/petrotheum_flow')
    event.create('molten_aerotheum').bucketColor(0xc8da94).displayName('\u00A77Zephyrean Aerotheum').stillTexture('kubejs:block/aerotheum_still').flowingTexture('kubejs:block/aerotheum_flow')
    event.create("molten_primal_mana").displayName("\u00A7dPrimal Mana").stillTexture('kubejs:block/mana_still').flowingTexture('kubejs:block/mana_flow').bucketColor(0x004870)
    event.create('resonant_ender').bucketColor(0x2b4f4f).displayName('Resonant Ender').stillTexture('kubejs:block/ender_still').flowingTexture('kubejs:block/ender_flow')




})