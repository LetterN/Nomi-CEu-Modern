ServerEvents.recipes(event => {
    //FIXME Broken recipe and needs tier 2
    event.custom({
        "type": "extendedcrafting:shaped_table",
        // "tier": "2",
        // this is really gross but it's not my fault someone put 'E' twice in the original recipe
        "pattern": [
            "A  B  C",
            " D E F ",
            "  GHI  ",
            "JKLYMNO",
            "  PQR  ",
            " S T U ",
            "V  W  X"
        ],
        "key": {
            "A": {
                "item": "gtceu:nichrome_ingot"
            },
            "B": {
                "item": "gtceu:red_steel_ingot"
            },
            "C": {
                "item": "gtceu:kanthal_ingot"
            },
            "D": {
                "item": "gtceu:magnalium_ingot"
            },
            "E": {
                "item": "gtceu:mana_infused_metal_ingot"
            },
            "F": {
                "item": "gtceu:manyullyn_ingot"
            },
            "G": {
                "item": "gtceu:enderium_ingot"
            },
            "H": {
                "item": "gtceu:blue_steel_ingot"
            },
            "I": {
                "item": "gtceu:microversium_ingot"
            },
            "J": {
                "item": "gtceu:vanadium_steel_ingot"
            },
            "K": {
                "item": "gtceu:rhodium_plated_palladium_ingot"
            },
            "L": {
                "item": "gtceu:electrum_flux_ingot"
            },
            "M": {
                "item": "avaritia:crystal_matrix_ingot"
            },
            "N": {
                "item": "gtceu:end_steel_ingot"
            },
            "O": {
                "item": "gtceu:electrical_steel_ingot"
            },
            "P": {
                "item": "gtceu:signalum_ingot"
            },
            "Q": {
                "item": "gtceu:vibrant_alloy_ingot"
            },
            "R": {
                "item": "gtceu:soularium_ingot"
            },
            "S": {
                "item": "gtceu:hsse_ingot"
            },
            "T": {
                "item": "gtceu:dark_steel_ingot"
            },
            "U": {
                "item": "gtceu:hssg_ingot"
            },
            "V": {
                "item": "gtceu:ruridit_ingot"
            },
            "W": {
                "item": "gtceu:hsss_ingot"
            },
            "X": {
                "item": "gtceu:energetic_alloy_ingot"
            },
            "Y": {
                "item": "gtceu:dark_soularium_ingot"
            }
        },
        "result": {
            "item": "kubejs:exotic_materials_catalyst"
        }
    })


})

// Vacuum Freezer

// Draconic Superconductor Wire
ServerEvents.recipes(event => {
    event.recipes.gtceu.vacuum_freezer("draconic_superconductor_wire")
        .itemInputs('gtceu:draconium_single_wire')
        .itemOutputs('gtceu:draconic_superconductor_single_wire')
        .inputFluids(Fluid.of('gtceu:nether_star', 144))
        .duration(100)
        .EUt(6000)
})

// Draconium Dust

ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor("draconium_dust")
        .itemInputs('gtceu:manyullyn_dust', 'minecraft:dragon_breath')
        .itemOutputs('gtceu:draconium_dust')
        .duration(500)
        .EUt(2000)
})