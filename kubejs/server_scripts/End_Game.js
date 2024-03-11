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

    // Blacklight
    event.remove({ id: 'gtceu:shaped/blacklight' })
    event.shaped(
        'gtceu:blacklight', [
            'BPB',
            ' S ',
            'CPW'
        ], {
            B: 'gtceu:tungsten_carbide_screw',
            C: '#gtceu:circuits/iv',
            P: 'gtceu:tungsten_carbide_plate',
            S: 'gtceu:hssg_spring',
            W: 'gtceu:platinum_single_cable'
        }
    )

    // Sterilising Filter Casing
    event.remove({ id: 'gtceu:shaped/filter_casing_sterile' })
    event.shaped(
        'gtceu:sterilizing_filter_casing', [
            'PEP',
            'FBF',
            'MSR'
        ], {
            B: 'gtceu:blacklight',
            E: 'gtceu:luv_emitter',
            F: 'gtceu:item_filter',
            M: 'gtceu:luv_electric_motor',
            P: 'gtceu:polybenzimidazole_large_fluid_pipe',
            R: 'gtceu:osmiridium_rotor',
            S: 'gtceu:black_steel_frame'
        }
    )

    // FLux Gem
    event.remove({ id: 'redstone_arsenal:materials/flux_gem' })
    event.recipes.gtceu.autoclave("flux_gem")
        .itemInputs('minecraft:diamond')
        .inputFluids('gtceu:redstone 720')
        .itemOutputs('redstone_arsenal:flux_gem')
        .duration(200)
        .EUt(400)

    // Flux Plating
    event.remove({ id: 'redstone_arsenal:materials/flux_plating' })
    event.shaped(
        '4x redstone_arsenal:flux_plating', [
            ' P ',
            'PGP',
            ' P '
        ], {
            G: 'redstone_arsenal:flux_gem',
            P: 'gtceu:electrum_flux_plate'
        }
    )

    // Vacuum Freezer

    // Draconic Superconductor Wire
    event.recipes.gtceu.vacuum_freezer("draconic_superconductor_wire")
        .itemInputs('gtceu:draconium_single_wire')
        .itemOutputs('gtceu:draconic_superconductor_single_wire')
        .inputFluids(Fluid.of('gtceu:nether_star', 144))
        .duration(100)
        .EUt(6000)

    // Chemical Reactor

    //Draconium Dust
    event.recipes.gtceu.chemical_reactor("draconium_dust")
        .itemInputs('gtceu:manyullyn_dust', 'minecraft:dragon_breath')
        .itemOutputs('gtceu:draconium_dust')
        .duration(500)
        .EUt(2000)

    //Draconic Stem Cells
    event.remove({ id: 'gtceu:chemical_reactor/stem_cells' })
    event.remove({ id: 'gtceu:large_chemical_reactor/stem_cells'})
    event.recipes.gtceu.chemical_reactor("draconic_stem_cells")
        .itemInputs('minecraft:dragon_egg')
        .inputFluids('gtceu:sterilized_growth_medium 500', 'gtceu:bacteria 500')
        .itemOutputs('64x gtceu:stem_cells', '64x gtceu:stem_cells')
        .outputFluids('gtceu:bacterial_sludge 500')
        .duration(6000)
        .EUt(30720)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    //Blast Furnace
    event.recipes.gtceu.electric_blast_furnace("quantum_fluxed_eternium_heavy_plating")
        .itemInputs('10x redstone_arsenal:flux_plating', 'gtceu:awakened_draconium_plate', '16x kubejs:quantum_flux')
        .inputFluids('gtceu:krypton 1000')
        .itemOutputs('kubejs:quantum_fluxed_eternium_heavy_plating')
        .duration(200)
        .EUt(250000)
        .blastFurnaceTemp(9000)
})