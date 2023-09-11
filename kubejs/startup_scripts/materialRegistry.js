// Elements
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('omnium', 130, 234, -1, null, 'Nm', false)
    event.create('draconium', 149, 234, -1, null, 'Dc', false)
    event.create('awakened_draconium', 149, 264, -1, null, 'Dc*', false)
})


// Chemical Registry
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('butanol', 0, 0, -1, null, '', false)
    event.create('phosphorus_trichloride', 0, 0, -1, null, '', false)
    event.create('phosphoryl_chloride', 0, 0, -1, null, '', false)
    event.create('tributyl_phosphate', 0, 0, -1, null, '', false)
})


// Taranium Line Registry
GTCEuStartupEvents.registry('gtceu:element'), event => {
    event.create('hexafluorosilicic_acid', 0, 0, -1, null, '', false)
    event.create('dirty_hexafluorosilicic_acid', 0, 0, -1, null, '', false)
    event.create('ultraacidic_residue', 0, 0, -1, null, '', false)
    event.create('xenic_acid', 0, 0, -1, null, '', false)
    event.create('dusty_helium', 0, 0, -1, null, '', false)
    event.create('taranium_enriched_helium', 0, 0, -1, null, '', false)
    event.create('taranium_depleted_helium', 0, 0, -1, null, '', false)
    event.create('tritium_hydride', 0, 0, -1, null, '', false)
    event.create('helium_hydride', 0, 0, -1, null, '', false)
    event.create('dioxygen_difluoride', 0, 0, -1, null, '', false)
}


// Platinum Line Registry
GTCEuStartupEvents.registry('gtceu:element'), event => {
    event.create('chloroplatinic_acid', 0, 0, -1, null, '', false)
    event.create('palladium_rich_ammonia', 0, 0, -1, null, '', false)
    event.create('rhodium_sulfate_solution', 0, 0, -1, null, '', false)
    event.create('acidic_iridium_dioxide_solution', 0, 0, -1, null, '', false)
    event.create('platinum_palladium_leachate', 0, 0, -1, null, '', false)
    event.create('methyl_formate', 0, 0, -1, null, '', false)
    event.create('formic_acid', 0, 0, -1, null, '', false)

}

// Microverse Registry
GTCEuStartupEvents.registry('gtceu:element'), event => {
    event.create('microversium', 0, 0, -1, null, '', false)
    event.create('osmiridium8020', 0, 0, -1, null, '', false)
    event.create('iridosmine8020', 0, 0, -1, null, '', false)
    event.create('kaemanite', 0, 0, -1, null, '', false)
    event.create('fluorite', 0, 0, -1, null, '', false)
    event.create('enderium', 0, 0, -1, null, '', false)
    event.create('darmstadtite', 0, 0, -1, null, '', false)
    event.create('dulysite', 0, 0, -1, null, '', false)


// Thermal Registry
GTCEuStartupEvents.registry('gtceu:element'), event => {
    event.create('ardite', 0, 0, -1, null, '', false)
    event.create('mana', 0, 0, -1, null, '', false)
    event.create('manyullyn', 0, 0, -1, null, '', false)
    event.create('signalum', 0, 0, -1, null, '', false)
    event.create('lumiume', 0, 0, -1, null, '', false)
    event.create('enderium', 0, 0, -1, null, '', false)
    event.create('electrum_flux', 0, 0, -1, null, '', false)
    event.create('mythril', 0, 0, -1, null, '', false)
}

// Enderio Registry
GTCEuStartupEvents.registry('gtceu:element'), event => {
event.create('dark_steel', 0, 0, -1, null, '', false)
event.create('conductive_iron', 0, 0, -1, null, '', false)
event.create('energetic_alloy', 0, 0, -1, null, '', false)
event.create('vibrant_alloy', 0, 0, -1, null, '', false)
event.create('pulsating_iron', 0, 0, -1, null, '', false)
event.create('electrical_steel', 0, 0, -1, null, '', false)
event.create('soularium', 0, 0, -1, null, '', false)
event.create('end_steel', 0, 0, -1, null, '', false)
}



// Elemental materials

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("draconium")
        .ingot().fluid().ore()
        .element(GTElements.get("draconium"))
        .color(0xbe49ed).iconSet(GTMaterialIconset.METALLIC)
        .blastTemp(6800)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE)
        .cableProperties('524288', '1', '0', true);

    event.create("awakened_draconium")
        .ingot().fluid()
        .element(GTElements.get("awakened_draconium"))
        .color(0xf58742).iconSet(GTMaterialIconset.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)

    event.create("omnium")
        .ingot().fluid()
        .element(GTElements.get("omnium"))
        .color(0x414751).iconSet(GTMaterialIconset.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties('2147483647', '64', '0', true);


})


// Chemical Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('butanol')
        .fluid()
        .element(GTElements.get("butanol"))
        .color(0xc7af2e).iconSet('butanol')
        .components(GTMaterials.Carbon, 4, GTMaterials.Hydrogen, 10, GTMaterials.Oxygen, 1)

    event.create('phosphorus_trichloride')
        .fluid()
        .element(GTElements.get("phosphorus_trichloride"))
        .color(0xe8c474).iconSet('phosphorus_trichloride')
        .components(GTMaterials.Phosphorus, 1, GTMaterials.Chlorine, 3)

    event.create('tributyl_phosphate')
        .fluid()
        .element(GTElements.get("tributyl_phosphate"))
        .color(0xe8c474).iconSet('tributyl_phosphate')
        .components(GTMaterials.Carbon, 12, GTMaterials.Hydrogen, 27, GTMaterials.Oxygen, 4, GTMaterials.Phosphorus, 1)

    event.create('phosphoryl_chloride')
        .fluid()
        .element(GTElements.get("phosphoryl_chloride"))
        .color((0xe8bb5b).iconSet('phosphoryl_chloride')
            .components(GTMaterials.Phosphorus, 1, GTMaterials.Oxygen, 1, GTMaterials.Chlorine, 3))

})


// Taranium Line Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('hexafluorosilicic_acid')
        .fluid()
        .element(GTElements.get("hexafluorosilicic_acid"))
        .color((0xd00010).iconSet('hexafluorosilicic_acid')
            .components(GTMaterials.Hydrogen, 2, GTMaterials.Silcion, 1, GTMaterials.Fluorine, 6))

    event.create('ultraacidic_residue')
        .fluid()
        .element(GTElements.get("ultraacidic_residue"))
        .color((0xb0babf).iconSet('ultraacidic_residue'))

    event.create('dirty_hexafluorosilicic_acid')
        .fluid()
        .element(GTElements.get("dirty_hexafluorosilicic_acid"))
        .color((0xd00010).iconSet('dirty_hexafluorosilicic_acid')
            .components(GTMaterials.Hydrogen, 2, GTMaterials.Silcion, 1, GTMaterials.Fluorine, 6, GTMaterials.Rare_Earth, 1))

    event.create('xenic_acid')
        .fluid()
        .element(GTElements.get("xenic_acid"))
        .color((0xa567db).iconSet('xenic_acid'))

    event.create('dusty_helium')
        .fluid(GTFluidTypes.GAS)
        .element(GTElements.get("dusty_helium"))
        .color(0xa040af).iconSet('dusty_helium')

    event.create('taranium_enriched_helium')
        .fluidGTFluidTypes.GAS()
        .element(GTElements.get("taranium_enriched_helium"))
        .color(0x10c050).iconSet('taranium_enriched_helium')

    event.create('taranium_depleted_helium')
        .fluid(fluidGTFluidTypes.GAS())
        .element(GTElements.get("taranium_enriched_helium"))
        .color(0x006010).iconSet('taranium_enriched_helium')

    event.create('tritium_hydride')
        .fluid(fluidGTFluidTypes.GAS())
        .element(GTElements.get("tritium_hydride"))
        .color(0xd01010).iconSet('tritium_hydride')
        .components(GTMaterials.Tritium, 1, GTMaterials.Hydrogen, 1,)

    event.create('helium_hydride')
        .fluid(fluidGTFluidTypes.GAS())
        .element(GTElements.get("helium_hydride"))
        .color(0xe6d62e).iconSet('helium_hydride')

    event.create('dioxygen_difluoride')
        .fluid()
        .element(GTElements.get("dioxygen_difluoride"))
        .color(0xFFFFFF).iconSet('dioxygen_difluoride')
        .components(GTMaterials.Oxygen, 2, GTMaterials.Fluorine, 2,)
})

// Platline Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('chloroplatinic_acid')
        .fluid()
        .element(GTElements.get("chloroplatinic_acid"))
        .color(0xfef0c2F).iconSet('chloroplatinic_acid')
        .components(GTMaterials.Hydrogen, 2, GTMaterials.Platinum, 1, GTMaterials.Chlorine, 6)

    event.create('palladium_rich_ammonia')
        .fluid()
        .element(GTElements.get("palladium_rich_ammonia"))
        .color(0x808080).iconSet('palladium_rich_ammonia')
        .components(GTMaterials.Ammonia, 2, GTMaterials.Palladium, 1, GTMaterials.Chlorine, 1)

    event.create('rhodium_sulfate_solution')
        .fluid()
        .element(GTElements.get("rhodium_sulfate_solution"))
        .color(0xffbb66).iconSet('rhodium_sulfate_solution')

    event.create('acidic_iridium_dioxide_solution')
        .fluid()
        .element(GTElements.get("acidic_iridium_dioxide_solution"))
        .color(0x27284e).iconSet('acidic_iridium_dioxide_solution')

    event.create('platinum_palladium_leachate')
        .fluid()
        .element(GTElements.get("platinum_palladium_leachate"))
        .color(0xffffc5).iconSet('platinum_palladium_leachate')

    event.create('methyl_formate')
        .fluid()
        .element(GTElements.get("methyl_formate"))
        .color(0xffaaaa).iconSet('methyl_formate')
        .components(GTMaterials.Carbon, 2, GTMaterials.Hydrogen, 4, GTMaterials.Oxygen, 2)

    event.create('formic_acid')
        .fluid()
        .element(GTElements.get("formic_acid"))
        .color(0xffffc5).iconSet('formic_acid')
        .components(GTMaterials.Carbon, 1, GTMaterials.Hydrogen, 2, GTMaterials.Oxygen, 2)
})

// Microverse Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("microversium")
        .ingot()
        .element(GTElements.get("microversium"))
        .color(0x9b61b8).iconSet(GTMaterialIconset.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_FRAME)

        event.create("osmiridium8020")
        .dust().ore()
        .element(GTElements.get("osmiridium8020"))
        .iconSet(GTMaterialIconset.DULL)

        event.create("iridosmine8020")
        .dust().ore()
        .element(GTElements.get("iridosmine8020"))
        .iconSet(GTMaterialIconset.DULL)

        event.create("kaemanite")
        .dust().ore()
        .color(0xe7413c).iconSet(GTMaterialIconset.BRIGHT)
        .element(GTElements.get("kaemanite"))

        event.create("fluorite")
        .dust().ore()
        .color(0xFFFC9).iconSet(GTMaterialIconset.ROUGH)
        .element(GTElements.get("fluorite"))

        event.create("darmstadtite")
        .dust().ore(2)
        .iconSet(GTMaterialIconset.ROUGH)
        .element(GTElements.get("darmstadtite"))

        event.create("dulysite")
        .dust().ore(2)
        .iconSet(GTMaterialIconset.ROUGH)
        .element(GTElements.get("dulysite"))
})



// Thermal Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("ardite")
        .ingot().fluid()
        .element(GTElements.get("ardite"))
        .color(0xad2f05).iconSet(GTMaterialIconset.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("mana")
        .element(GTElements.get("mana"))

    event.create("manyullyn")
        .ingot().fluid()
        .element(GTElements.get("manyullyn"))
        .color(0x9949cc).iconSet(GTMaterialIconset.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("signalum")
        .ingot().fluid()
        .element(GTElements.get("signalum"))
        .color(0x9949cc).iconSet(GTMaterialIconset.METALLIC)
        .blastTemp(4000)
        .flags(GTMaterialFlags.GENERATE_PLATE).iconSet(GTMaterialIconset.SHINY, GTMaterialIconset.GENERATE_DENSE, GTMaterialIconset.GENERATE_ROD, GTMaterialIconset.GENERATE_GEAR)

    event.create("lumium")
        .ingot().fluid()
        .element(GTElements.get("lumium"))
        .blastTemp(4500)
        .color(0xf6ff99).iconSet(GTMaterialIconset.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR, GTMaterialIconset.GENERATE_FINE_WIRE)
        .cableProperties(8192, 1, 0, true)

    event.create("enderium")
        .ingot().fluid()
        .element(GTElements.get("enderium"))
        .blastTemp(6400)
        .color(0x1f6b62).iconSet(GTMaterialIconset.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR, GTMaterialIconset.GENERATE_FINE_WIRE)
        .cableProperties(131072, 1, 0, true)

    event.create("electrum_flux")
        .ingot().fluid()
        .element(GTElements.get("electrum_flux"))
        .blastTemp(1100)
        .color(0xf7be20).iconSet(GTMaterialIconset.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR)

    event.create("mythril")
        .ingot().fluid()
        .element(GTElements.get("mythril"))
        .color(0x428fdb).iconSet(GTMaterialIconset.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR)


})

// EnderIO Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("dark_steel")
        .ingot().fluid()
        .element(GTElements.get("dark_steel"))
        .color(0x414751).iconSet(GTMaterialIconset.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR, GTMaterialIconset.GENERATE_FRAME)

        event.create("dark_steel")
        .ingot().fluid()
        .element(GTElements.get("dark_steel"))
        .color(0xf7b29b).iconSet(GTMaterialIconset.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR)
        .cableProperties(32, 1, 0, true)

        event.create("energetic_alloy")
        .ingot().fluid()
        .element(GTElements.get("energetic_alloy"))
        .color(0xffb545).iconSet(GTMaterialIconset.SHINY)
        .blastTemp(1250)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR)
        .cableProperties(128, 1, 0, true)

        event.create("vibrant_alloy")
        .ingot().fluid()
        .element(GTElements.get("vibrant_alloy"))
        .color(0xa4ff70).iconSet(GTMaterialIconset.SHINY)
        .blastTemp(1350)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR, GTMaterialIconset.GENERATE_BOLT_SCREW)
        .cableProperties(512, 1, 0, true)

        event.create("pulsating_iron")
        .ingot().fluid()
        .element(GTElements.get("pulsating_iron"))
        .color(0x6ae26e).iconSet(GTMaterialIconset.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR)
        .cableProperties(8, 1, 0, true)

        event.create("electrical_steel")
        .ingot().fluid()
        .element(GTElements.get("electrical_steel"))
        .color(0xb2c0c1).iconSet(GTMaterialIconset.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR)

        event.create("soularium")
        .ingot().fluid()
        .element(GTElements.get("soularium"))
        .color(0x7c674).iconSet(GTMaterialIconset.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE)

        event.create("end_steel")
        .ingot().fluid()
        .element(GTElements.get("end_steel"))
        .color(0xd6d980).iconSet(GTMaterialIconset.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialIconset.GENERATE_GEAR)
        .cableProperties(2048, 1, 0, true)

})