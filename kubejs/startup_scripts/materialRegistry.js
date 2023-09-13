// Elements
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('omnium', 130, 234, -1, null, 'Nm', false)
    event.create('draconium', 149, 234, -1, null, 'Dc', false)
    event.create('awakened_draconium', 149, 264, -1, null, 'Dc*', false)
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


})


// Chemical Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('butanol')
        .fluid()
        .element(GTElements.get("butanol"))
        .color(0xc7af2e)
        .iconSet('butanol')
        .components(GTMaterials.Carbon, 4, GTMaterials.Hydrogen, 10, GTMaterials.Oxygen, 1)

    event.create('phosphorus_trichloride')
        .fluid()
        .element(GTElements.get("phosphorus_trichloride"))
        .color(0xe8c474)
        .iconSet('phosphorus_trichloride')
        .components(GTMaterials.Phosphorus, 1, GTMaterials.Chlorine, 3)

    event.create('tributyl_phosphate')
        .fluid()
        .element(GTElements.get("tributyl_phosphate"))
        .color(0xe8c474)
        .iconSet('tributyl_phosphate')
        .components(GTMaterials.Carbon, 12, GTMaterials.Hydrogen, 27, GTMaterials.Oxygen, 4, GTMaterials.Phosphorus, 1)

    event.create('phosphoryl_chloride')
        .fluid()
        .element(GTElements.get("phosphoryl_chloride"))
        .color(0xe8bb5b)
        .iconSet('phosphoryl_chloride')
        .components(GTMaterials.Phosphorus, 1, GTMaterials.Oxygen, 1, GTMaterials.Chlorine, 3)

})


// Taranium Line Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('hexafluorosilicic_acid')
        .fluid()
        .element(GTElements.get("hexafluorosilicic_acid"))
        .color(0xd00010)
        .iconSet('hexafluorosilicic_acid')
        .components(GTMaterials.Hydrogen, 2, GTMaterials.Silicon, 1, GTMaterials.Fluorine, 6)

    event.create('ultraacidic_residue')
        .fluid()
        .element(GTElements.get("ultraacidic_residue"))
        .color(0xb0babf)
        .iconSet('ultraacidic_residue')

    event.create('dirty_hexafluorosilicic_acid')
        .fluid()
        .element(GTElements.get("dirty_hexafluorosilicic_acid"))
        .color(0xd00010)
        .iconSet('dirty_hexafluorosilicic_acid')
        .components(GTMaterials.Hydrogen, 2, GTMaterials.Silicon, 1, GTMaterials.Fluorine, 6)

    event.create('xenic_acid')
        .fluid()
        .element(GTElements.get("xenic_acid"))
        .color(0xa567db)
        .iconSet('xenic_acid')

    event.create('dusty_helium')
        .fluid()
        .element(GTElements.get("dusty_helium"))
        .color(0xa040af)
        .iconSet('dusty_helium')

    event.create('taranium_enriched_helium')
        .fluid()
        .element(GTElements.get("taranium_enriched_helium"))
        .color(0x10c050)
        .iconSet('taranium_enriched_helium')

    event.create('taranium_depleted_helium')
        .fluid()
        .element(GTElements.get("taranium_enriched_helium"))
        .color(0x006010)
        .iconSet('taranium_enriched_helium')

    event.create('tritium_hydride')
        .fluid()
        .element(GTElements.get("tritium_hydride"))
        .color(0xd01010)
        .iconSet('tritium_hydride')
        .components(GTMaterials.Tritium, 1, GTMaterials.Hydrogen, 1, )

    event.create('dioxygen_difluoride')
        .fluid()
        .element(GTElements.get("dioxygen_difluoride"))
        .color(0xFFFFFF)
        .iconSet('dioxygen_difluoride')
        .components(GTMaterials.Oxygen, 2, GTMaterials.Fluorine, 2, )

    event.create('helium_hydride')
        .fluid()
        .element(GTElements.get("helium_hydride"))
        .color(0xe6d62e)
        .iconSet('helium_hydride')
})

// Platline Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('chloroplatinic_acid')
        .fluid()
        .element(GTElements.get("chloroplatinic_acid"))
        .color(0xfef0c2F)
        .iconSet('chloroplatinic_acid')
        .components(GTMaterials.Hydrogen, 2, GTMaterials.Platinum, 1, GTMaterials.Chlorine, 6)

    event.create('palladium_rich_ammonia')
        .fluid()
        .element(GTElements.get("palladium_rich_ammonia"))
        .color(0x808080)
        .iconSet('palladium_rich_ammonia')
        .components(GTMaterials.Ammonia, 2, GTMaterials.Palladium, 1, GTMaterials.Chlorine, 1)

    event.create('rhodium_sulfate_solution')
        .fluid()
        .element(GTElements.get("rhodium_sulfate_solution"))
        .color(0xffbb66)
        .iconSet('rhodium_sulfate_solution')

    event.create('acidic_iridium_dioxide_solution')
        .fluid()
        .element(GTElements.get("acidic_iridium_dioxide_solution"))
        .color(0x27284e)
        .iconSet('acidic_iridium_dioxide_solution')

    event.create('platinum_palladium_leachate')
        .fluid()
        .element(GTElements.get("platinum_palladium_leachate"))
        .color(0xffffc5)
        .iconSet('platinum_palladium_leachate')

    event.create('methyl_formate')
        .fluid()
        .element(GTElements.get("methyl_formate"))
        .color(0xffaaaa)
        .iconSet('methyl_formate')
        .components(GTMaterials.Carbon, 2, GTMaterials.Hydrogen, 4, GTMaterials.Oxygen, 2)

    event.create('formic_acid')
        .fluid()
        .element(GTElements.get("formic_acid"))
        .color(0xffffc5)
        .iconSet('formic_acid')
        .components(GTMaterials.Carbon, 1, GTMaterials.Hydrogen, 2, GTMaterials.Oxygen, 2)
})


// Microverse Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("microversium")
        .ingot()
        .element(GTElements.get("microversium"))
        .color(0x9b61b8)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME)

    event.create("osmiridiumyes")
        .dust().ore()
        .element(GTElements.get("osmiridiumyes"))
        .iconSet('dull')

    event.create("iridosmineyes")
        .dust().ore()
        .element(GTElements.get("iridosmineyes"))
        .iconSet('dull')

    event.create("kaemanite")
        .dust().ore()
        .color(0xe7413c)
        .iconSet('bright')
        .element(GTElements.get("kaemanite"))

    event.create("fluorite")
        .dust().ore()
        .color(0xFFFC9)
        .iconSet('rough')
        .element(GTElements.get("fluorite"))

    event.create("darmstadtite")
        .dust().ore()
        .iconSet('rough')
        .element(GTElements.get("darmstadtite"))

    event.create("dulysite")
        .dust().ore()
        .iconSet('rough')
        .element(GTElements.get("dulysite"))
})



// Thermal Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("ardite")
        .ingot().fluid()
        .element(GTElements.get("ardite"))
        .color(0xad2f05)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("mana")
        .element(GTElements.get("mana"))

    event.create("manyullyn")
        .ingot().fluid()
        .element(GTElements.get("manyullyn"))
        .color(0x9949cc)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("signalum")
        .ingot().fluid()
        .element(GTElements.get("signalum"))
        .color(0xff7f0f)
        .iconSet('shiny')
        .blastTemp(4000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(32768, 1, 0, true)
    event.create("lumium")
        .ingot().fluid()
        .element(GTElements.get("lumium"))
        .blastTemp(4500)
        .color(0xf6ff99)
        .iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(8192, 1, 0, true)

    event.create("enderium")
        .ingot().fluid()
        .element(GTElements.get("enderium"))
        .blastTemp(6400)
        .color(0x1f6b62)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(131072, 1, 0, true)

    event.create("electrum_flux")
        .ingot().fluid()
        .element(GTElements.get("electrum_flux"))
        .blastTemp(1100)
        .color(0xf7be20)
        .iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    event.create("mythril")
        .ingot().fluid()
        .element(GTElements.get("mythril"))
        .color(0x428fdb)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)


})


// EnderIO Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("dark_steel")
        .ingot().fluid()
        .element(GTElements.get("dark_steel"))
        .color(0x414751)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME)

    event.create("conductive_alloy")
        .ingot().fluid()
        .element(GTElements.get("conductive_alloy"))
        .color(0xf7b29b)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(32, 1, 0, true)

    event.create("energetic_alloy")
        .ingot().fluid()
        .element(GTElements.get("energetic_alloy"))
        .color(0xffb545)
        .iconSet('shiny')
        .blastTemp(1250)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(128, 1, 0, true)

    event.create("vibrant_alloy")
        .ingot().fluid()
        .element(GTElements.get("vibrant_alloy"))
        .color(0xa4ff70)
        .iconSet('shiny')
        .blastTemp(1350)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW)
        .cableProperties(512, 1, 0, true)

    event.create("pulsating_alloy")
        .ingot().fluid()
        .element(GTElements.get("pulsating_alloy"))
        .color(0x6ae26e)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(8, 1, 0, true)

    event.create("electrical_steel")
        .ingot().fluid()
        .element(GTElements.get("electrical_steel"))
        .color(0xb2c0c1)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    event.create("soularium")
        .ingot().fluid()
        .element(GTElements.get("soularium"))
        .color(0x7c674)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("end_steel")
        .ingot().fluid()
        .element(GTElements.get("end_steel"))
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