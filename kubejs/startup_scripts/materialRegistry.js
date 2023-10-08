// Elements
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('omnium', 130, 234, -1, null, 'Nm', false)
    event.create('draconium', 149, 234, -1, null, 'Dc', false)
    event.create('awakened_draconium', 149, 264, -1, null, 'Dc*', false)
    event.create('taranium', 149, 264, -1, null, 'Tn', false)
})


// Elemental materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("draconium")
        .ingot().fluid().ore()
        .element(GTElements.get("draconium"))
        .color(0xbe49ed)
        .iconSet('metallic')
        .blastTemp(6800)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE)
        .cableProperties('524288', '1', '0', true);

    event.create("awakened_draconium")
        .ingot().fluid()
        .element(GTElements.get("awakened_draconium"))
        .color(0xf58742)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)

    event.create("omnium")
        .ingot().fluid()
        .element(GTElements.get("omnium"))
        .color(0x414751)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties('2147483647', '64', '0', true);

    event.create('taranium')
        .element(GTElements.get("taranium"))
        .ingot()
        .fluid()
        .color(0xff00ff)
        .iconSet("bright")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)

})



// Chemical Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('butanol')
        .fluid()
        .color(0xc7af2e)
        .iconSet('butanol')
        .components(GTMaterials.Carbon, 4, GTMaterials.Hydrogen, 10, GTMaterials.Oxygen, 1)

    event.create('phosphorus_trichloride')
        .fluid()
        .color(0xe8c474)
        .iconSet('phosphorus_trichloride')
        .components(GTMaterials.Phosphorus, 1, GTMaterials.Chlorine, 3)

    event.create('tributyl_phosphate')
        .fluid()
        .color(0xe8c474)
        .iconSet('tributyl_phosphate')
        .components(GTMaterials.Carbon, 12, GTMaterials.Hydrogen, 27, GTMaterials.Oxygen, 4, GTMaterials.Phosphorus, 1)

    event.create('phosphoryl_chloride')
        .fluid()
        .color(0xe8bb5b)
        .iconSet('phosphoryl_chloride')
        .components(GTMaterials.Phosphorus, 1, GTMaterials.Oxygen, 1, GTMaterials.Chlorine, 3)

})


// Taranium Line Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('hexafluorosilicic_acid')
        .fluid()
        .color(0xd00010)
        .iconSet('hexafluorosilicic_acid')
        .components(GTMaterials.Hydrogen, 2, GTMaterials.Silicon, 1, GTMaterials.Fluorine, 6)

    event.create('ultraacidic_residue')
        .fluid()
        .color(0xb0babf)
        .iconSet('ultraacidic_residue')

    event.create('dirty_hexafluorosilicic_acid')
        .fluid()
        .color(0xd00010)
        .iconSet('dirty_hexafluorosilicic_acid')
        .components(GTMaterials.Hydrogen, 2, GTMaterials.Silicon, 1, GTMaterials.Fluorine, 6)

    event.create('xenic_acid')
        .fluid()
        .color(0xa567db)
        .iconSet('xenic_acid')

    event.create('dusty_helium')
        .fluid()
        .color(0xa040af)
        .iconSet('dusty_helium')

    event.create('taranium_enriched_helium')
        .fluid()
        .color(0x10c050)
        .iconSet('taranium_enriched_helium')

    event.create('taranium_depleted_helium')
        .fluid()
        .color(0x006010)
        .iconSet('taranium_enriched_helium')

    event.create('tritium_hydride')
        .fluid()
        .color(0xd01010)
        .iconSet('tritium_hydride')
        .components(GTMaterials.Tritium, 1, GTMaterials.Hydrogen, 1, )

    event.create('dioxygen_difluoride')
        .fluid()
        .color(0xFFFFFF)
        .iconSet('dioxygen_difluoride')
        .components(GTMaterials.Oxygen, 2, GTMaterials.Fluorine, 2, )

    event.create('helium_hydride')
        .fluid()
        .color(0xe6d62e)
        .iconSet('helium_hydride')
})

// Platline Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('chloroplatinic_acid')
        .fluid()
        .color(0xfef0c2F)
        .iconSet('chloroplatinic_acid')
        .components(GTMaterials.Hydrogen, 2, GTMaterials.Platinum, 1, GTMaterials.Chlorine, 6)

    event.create('palladium_rich_ammonia')
        .fluid()
        .color(0x808080)
        .iconSet('palladium_rich_ammonia')
        .components(GTMaterials.Ammonia, 2, GTMaterials.Palladium, 1, GTMaterials.Chlorine, 1)

    event.create('rhodium_sulfate_solution')
        .fluid()
        .color(0xffbb66)
        .iconSet('rhodium_sulfate_solution')

    event.create('acidic_iridium_dioxide_solution')
        .fluid()
        .color(0x27284e)
        .iconSet('acidic_iridium_dioxide_solution')

    event.create('platinum_palladium_leachate')
        .fluid()
        .color(0xffffc5)
        .iconSet('platinum_palladium_leachate')

    event.create('methyl_formate')
        .fluid()
        .color(0xffaaaa)
        .iconSet('methyl_formate')
        .components(GTMaterials.Carbon, 2, GTMaterials.Hydrogen, 4, GTMaterials.Oxygen, 2)

    event.create('formic_acid')
        .fluid()
        .color(0xffffc5)
        .iconSet('formic_acid')
        .components(GTMaterials.Carbon, 1, GTMaterials.Hydrogen, 2, GTMaterials.Oxygen, 2)
})


// Microverse Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("microversium")
        .ingot()
        .color(0x9b61b8)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME)

    event.create("osmiridiumyes")
        .dust().ore()
        .components(GTMaterials.Osmium, 8, GTMaterials.Iridium, 2)
        .iconSet('dull')

    event.create("iridosmineyes")
        .dust().ore()
        .components(GTMaterials.Iridium, 8, GTMaterials.Osmium, 2)
        .iconSet('dull')

    event.create("kaemanite")
        .dust().ore()
        .color(0xe7413c)
        .iconSet('bright')

    event.create("fluorite")
        .dust().ore()
        .color(0xFFFC9)
        .iconSet('rough')

    event.create("darmstadtite")
        .dust().ore()
        .iconSet('rough')

    event.create("dulysite")
        .dust().ore()
        .iconSet('rough')
})



// Thermal Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("ardite")
        .ingot().fluid()
        .color(0xad2f05)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("mana")
        .element(GTElements.get("mana"))

    event.create("manyullyn")
        .ingot().fluid()
        .color(0x9949cc)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("signalum")
        .ingot().fluid()
        .color(0xff7f0f)
        .iconSet('shiny')
        .blastTemp(4000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(32768, 1, 0, true)
    event.create("lumium")
        .ingot().fluid()
        .blastTemp(4500)
        .color(0xf6ff99)
        .iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(8192, 1, 0, true)

    event.create("enderium")
        .ingot().fluid()
        .blastTemp(6400)
        .color(0x1f6b62)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(131072, 1, 0, true)

    event.create("electrum_flux")
        .ingot().fluid()
        .blastTemp(1100)
        .color(0xf7be20)
        .iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    event.create("mythril")
        .ingot().fluid()
        .color(0x428fdb)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)


})


// EnderIO Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("dark_steel")
        .ingot().fluid()
        .color(0x414751)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME)

    event.create("conductive_alloy")
        .ingot().fluid()
        .color(0xf7b29b)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(32, 1, 0, true)

    event.create("energetic_alloy")
        .ingot().fluid()
        .color(0xffb545)
        .iconSet('shiny')
        .blastTemp(1250)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(128, 1, 0, true)

    event.create("vibrant_alloy")
        .ingot().fluid()
        .color(0xa4ff70)
        .iconSet('shiny')
        .blastTemp(1350)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW)
        .cableProperties(512, 1, 0, true)

    event.create("pulsating_alloy")
        .ingot().fluid()
        .color(0x6ae26e)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(8, 1, 0, true)

    event.create("electrical_steel")
        .ingot().fluid()
        .color(0xb2c0c1)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    event.create("soularium")
        .ingot().fluid()
        .color(0x7c674d)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("dark_soularium")
        .ingot().fluid()
        .color(0x7c674d)
        .iconSet('metallic')

    event.create("end_steel")
        .ingot().fluid()
        .color(0xd6d980)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(2048, 1, 0, true)



})

// Endgame stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("draconic_superconductor")
        .ingot().fluid()
        .element(GTElements.get("draconic_superconductor"))
        .color(0xffffff)
        .iconSet('shiny')
        .cableProperties(2147483647, 4, 0, true)
})


//AE2 Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('fluix')
        .gem()
        .dust()
        .color(0x7f5bb3)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE)
})

//Ad Astra Materials


GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("desh")
        .ingot().fluid()
        .color(0xff9e42)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)


    event.create("ostrum")
        .ingot().fluid()
        .color(0xa74aff)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)


    event.create("calorite")
        .ingot().fluid()
        .color(0xff0335)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)
})