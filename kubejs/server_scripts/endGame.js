ServerEvents.recipes(event => {
    //FIXME Broken recipe and needs tier 2
    event.custom({
        "type": "extendedcrafting:shaped_table",
        // "tier": "2",
        "pattern": [
            "A  B  C",
            " D E F ",
            "  GHI  ",
            "JKLEMNO",
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
                "item": "minecraft:barrier"
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
            }
        },
        "result": {
            "item": "kubejs:exotic_materials_catalyst"
        }
    })


})