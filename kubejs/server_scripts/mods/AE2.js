ServerEvents.recipes(event => {

    // Base AE2
    // ME Controller
    event.remove({ output: 'ae2:controller' })
    event.shaped(
        Item.of('ae2:controller'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:fluix_plate',
            C: 'ae2:energy_acceptor'
        }
    )

    // Energy Acceptor
    event.remove({ output: 'ae2:energy_acceptor' })
    event.shaped(
        Item.of('ae2:energy_acceptor'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:electrical_steel_plate',
            B: 'gtceu:fluix_plate',
            C: 'gtceu:lv_machine_hull'
        }
    )

    // ME Chest
    event.remove({ output: 'ae2:chest' })
    event.shaped(
        Item.of('ae2:chest'), [
            'ABA',
            'CDE',
            'FGF'
        ], {
            A: 'ae2:quartz_glass',
            B: '#ae2:illuminated_panel',
            C: 'gtceu:certus_quartz_plate',
            D: 'gtceu:aluminium_crate',
            E: 'gtceu:fluix_plate',
            F: 'gtceu:dark_steel_block',
            G: 'gtceu:nether_quartz_plate'
        }
    )

    // ME Drive
    event.remove({ output: 'ae2:drive' })
    event.shaped(
        Item.of('ae2:drive'), [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_emitter',
            C: '#forge:circuits/lv',
            D: 'ae2:chest',
            E: 'gtceu:mv_sensor'
        }
    )

    // Inscriber
    event.remove({ output: 'ae2:inscriber' })
    event.shaped(
        Item.of('ae2:inscriber'), [
            'ABA',
            'CDA',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:mv_electric_piston',
            C: 'gtceu:fluix_gem',
            D: 'gtceu:mv_machine_hull'
        }
    )

    // Patterns
    event.remove({ output: 'ae2:blank_pattern' })
    event.shaped(
        Item.of('ae2:blank_pattern', 8), [
            'AAA',
            'BCB',
            'BBB'
        ], {
            A: 'gtceu:silver_fine_wire',
            B: 'gtceu:polyethylene_plate',
            C: '#forge:circuits/hv'
        }
    )

    // Pattern Provider
    event.remove({ output: 'ae2:pattern_provider' })
    event.shaped(
        Item.of('ae2:pattern_provider'), [
            'ABA',
            'CDE',
            'AAA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_robot_arm',
            C: 'ae2:annihilation_core',
            D: 'gtceu:mv_machine_hull',
            E: 'ae2:formation_core'
        }
    )

    // Molecular Assembler
    event.remove({ output: 'ae2:molecular_assembler' })
    event.shaped(
        Item.of('ae2:molecular_assembler'), [
            'ABA',
            'CDE',
            'ABA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'ae2:quartz_glass',
            C: 'ae2:annihilation_core',
            D: 'avaritia:compressed_crafting_table',
            E: 'ae2:formation_core'
        }
    )

    // Interface
    event.remove({ output: 'ae2:interface' })
    event.shaped(
        Item.of('ae2:interface'), [
            'ABA',
            'CDE',
            'AAA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_conveyor_module',
            C: 'ae2:annihilation_core',
            D: 'gtceu:mv_machine_hull',
            E: 'ae2:formation_core'
        }
    )

    // Quantum Ring
    event.remove({ output: 'ae2:quantum_ring' })
    event.shaped(
        Item.of('ae2:quantum_ring'), [
            'ABA',
            'DCD',
            'ABA'
        ], {
            A: 'gtceu:stainless_steel_plate',
            B: 'ae2:calculation_processor',
            C: 'gtceu:quantum_star',
            D: 'ae2:engineering_processor'
        }
    )

    // Quantum Link Chamber
    event.remove({ output: 'ae2:quantum_link' })
    event.shaped(
        Item.of('ae2:quantum_link'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'ae2:quartz_glass',
            B: 'ae2:fluix_pearl',
            C: 'gregtech:certus_quartz_plate'
        }
    )

    // Storage Cell Removal
    event.remove({ id: 'ae2:network/cells/item_storage_cell_1k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_4k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_16k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_64k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_256k' })

    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_1k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_4k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_16k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_64k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_256k' })

    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_2_cubed' })
    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_16_cubed' })
    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_128_cubed' })

    event.remove({ id: 'ae2:network/cells/view_cell' })

    // Storage Housing
    event.remove({ output: 'ae2:item_cell_housing' })
    event.shaped(
        Item.of('ae2:item_cell_housing'), [
            'ABA',
            'B B',
            'ABA'
        ], {
            A: 'gtceu:red_alloy_fine_wire',
            B: 'gtceu:electrical_steel_plate'
        }
    )

    event.remove({ output: 'ae2:fluid_cell_housing' })
    event.shaped(
        Item.of('ae2:fluid_cell_housing'), [
            'ABA',
            'B B',
            'ABA'
        ], {
            A: 'gtceu:red_alloy_fine_wire',
            B: 'gtceu:energetic_alloy_plate'
        }
    )

    // CPUs
    event.remove({ output: 'ae2:crafting_unit' })
    event.shaped(
        Item.of('ae2:crafting_unit'), [
            'ABA',
            'CDC',
            'ABA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'ae2:calculation_processor',
            C: 'ae2:fluix_glass_cable',
            D: 'ae2:logic_processor'
        }
    )

    // Charger
    event.remove({ output: 'ae2:charger' })
    event.shaped(
        Item.of('ae2:charger'), [
            'ABA',
            'A  ',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:certus_quartz_plate'
        }
    )

    // Matter Condenser
    event.remove({ output: 'ae2:condenser' })
    event.shaped(
        Item.of('ae2:condenser'), [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'gtceu:titanium_plate',
            B: 'gtceu:quantum_star'
        }
    )

    // Storage Component 1K
    event.remove({ output: 'ae2:cell_component_1k' })
    event.shaped(
        Item.of('ae2:cell_component_1k'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'minecraft:glass',
            B: 'gtceu:red_alloy_plate',
            C: '#forge:circuits/lv'
        }
    )

    // Storage Component 4K
    event.remove({ output: 'ae2:cell_component_4k' })
    event.shaped(
        Item.of('ae2:cell_component_4k'), [
            'ADA',
            'BCB',
            'ABA'
        ], {
            A: 'minecraft:glass',
            B: 'ae2:cell_component_1k',
            C: '#forge:circuits/mv',
            D: 'ae2:calculation_processor'
        }
    )

    // Storage Component 16K
    event.remove({ output: 'ae2:cell_component_16k' })
    event.shaped(
        Item.of('ae2:cell_component_16k'), [
            'ADA',
            'BCB',
            'ABA'
        ], {
            A: 'minecraft:glass',
            B: 'ae2:cell_component_4k',
            C: '#forge:circuits/hv',
            D: 'ae2:engineering_processor'
        }
    )

    // Storage Component 64K
    event.remove({ output: 'ae2:cell_component_64k' })
    event.shaped(
        Item.of('ae2:cell_component_64k'), [
            'ADA',
            'BCB',
            'ABA'
        ], {
            A: 'ae2:logic_processor',
            B: 'ae2:cell_component_16k',
            C: '#forge:circuits/ev',
            D: 'ae2:engineering_processor'
        }
    )

    // Storage Component 256K
    event.remove({ output: 'ae2:cell_component_256k' })
    event.shaped(
        Item.of('ae2:cell_component_256k'), [
            'ADA',
            'BCB',
            'ABA'
        ], {
            A: 'ae2:logic_processor',
            B: 'ae2:cell_component_64k',
            C: '#forge:circuits/iv',
            D: 'ae2:engineering_processor'
        }
    )

    // Wireless Receiver
    event.remove({ output: 'ae2:wireless_receiver' })
    event.shaped(
        Item.of('ae2:wireless_receiver'), [
            ' A ',
            'BCB',
            ' B '
        ], {
            A: 'gtceu:iv_emitter',
            B: 'gtceu:titanium_plate',
            C: 'ae2:fluix_pearl'
        }
    )

    // AE2 Cards
    event.remove({ output: ['ae2:basic_card', 'ae2:advanced_card', 'ae2:memory_card'] })
    event.shaped(
        'ae2:basic_card', [
            'AB ',
            'ACB',
            'AB '
        ], {
            A: 'gtceu:copper_fine_wire',
            B: 'gtceu:iron_plate',
            C: 'ae2:calculation_processor'
        }
    )
    event.shaped(
        'ae2:advanced_card', [
            'AB ',
            'ACB',
            'AB '
        ], {
            A: 'gtceu:aluminium_fine_wire',
            B: 'gtceu:electrical_steel_plate',
            C: 'ae2:calculation_processor'
        }
    )

    event.shapeless('ae2:memory_card', ['#forge:circuits/hv', 'ae2:basic_card'])



    //Level Emitter
    event.remove({ output: ['ae2:level_emitter'] })
    event.shaped(
        'ae2:level_emitter', [
            'AB ',
            'CD ',
            '   '
        ], {
            A: 'minecraft:redstone_torch',
            B: 'gtceu:aluminium_plate',
            C: 'ae2:calculation_processor',
            D: '#forge:rods/stainless_steel'
        })

    // Network Tool (SET RECIPE IF AE2 GLITCH IS FIXED)
    event.remove({ output: 'ae2:network_tool' })
    event.shaped(
        'ae2:network_tool', [
            'AB ',
            'CD ',
            '   '
        ], {
            A: 'enderio:yeta_wrench',
            B: '#forge:circuits/ev',
            C: 'ae2:calculation_processor',
            D: 'ae2:terminal'
        })


    // Big Drive
    event.remove({ output: 'expatternprovider:ex_drive' })
    event.shaped(
        Item.of('expatternprovider:ex_drive'), [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: 'gtceu:fluix_plate',
            B: 'ae2:capacity_card',
            C: 'ae2:spatial_pylon',
            D: 'ae2:drive',
            E: 'gtceu:ev_machine_hull'
        }
    )

    //TODO Big Pattern Provider/Interface (MAKE IN HV ASSEMBLER)


    //TODO Big I/O (MAKE IN IV ASSEMBLY LINE)


    //TODO AE2WT


    //Infinite Cobble/Water cell
    event.replaceInput({ output: Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}') }, 'minecraft:water_bucket', 'gtceu:infinite_water_cover')
    event.replaceInput({ output: Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}') }, 'minecraft:diamond', 'gtceu:diamond_plate')

    //Processors
    event.remove({ output: ['ae2:printed_silicon', 'ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor'] })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "tag": "gtceu:silicon_plate"
            },
            "top": {
                "item": "ae2:silicon_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "item": "ae2:printed_silicon"
        }
    })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "forge:circuits/lv"
            },
            "top": {
                "item": "ae2:printed_logic_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:logic_processor"
        }
    })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "forge:circuits/lv"
            },
            "top": {
                "item": "ae2:printed_calculation_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:calculation_processor"
        }
    })

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "forge:circuits/lv"
            },
            "top": {
                "item": "ae2:printed_engineering_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:engineering_processor"
        }
    })

    //Storage bus
    event.remove({ output: 'ae2:storage_bus' })
    event.shapeless('ae2:storage_bus', ['ae2:interface', 'gtceu:mv_electric_piston', 'gtceu:mv_electric_pump'])

    //busses
    event.remove({ output: ['ae2:import_bus', 'ae2:export_bus'] })
    event.shaped(
        'ae2:export_bus', [
            ' A ',
            'DBD',
            ' C '
        ], {
            A: 'gtceu:mv_electric_pump',
            B: 'ae2:formation_core',
            C: 'gtceu:mv_electric_piston',
            D: 'gtceu:aluminium_plate'
        })
    event.shaped(
        'ae2:import_bus', [
            ' A ',
            'DBD',
            ' C '
        ], {
            A: 'gtceu:mv_electric_pump',
            B: 'ae2:annihilation_core',
            C: 'gtceu:mv_electric_piston',
            D: 'gtceu:aluminium_plate'
        })

    //P2P
    event.remove({ output: 'ae2:me_p2p_tunnel' })
    event.shaped(
        'ae2:me_p2p_tunnel', [
            ' A ',
            'ABA',
            'CCC'
        ], {
            A: 'gtceu:stainless_steel_plate',
            B: 'ae2:engineering_processor',
            C: 'gtceu:fluix_plate'
        })

    //cables

    event.remove({ output: ['ae2:quartz_fiber'] })
    event.remove({ id: 'gtceu:shapeless/gem_to_gem_flawedgem_nether_quartz' })
    event.remove({ id: "ae2:network/cables/glass_fluix" })

    event.recipes.gtceu.wiremill('quartz_fiber')
        .itemInputs('gtceu:nether_quartz_flawed_gem')
        .itemOutputs('ae2:quartz_fiber')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter('fluix_cable')
        .itemInputs(['gtceu:fluix_dust', 'ae2:quartz_fiber'])
        .itemOutputs('2x ae2:fluix_glass_cable')
        .duration(50)
        .EUt(16)









































})