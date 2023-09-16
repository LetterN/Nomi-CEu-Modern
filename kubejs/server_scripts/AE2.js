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

    // Level Emitter

    // Network Tool (SET RECIPE IF AE2 GLITCH IS FIXED)
    event.remove({ output: 'ae2:network_tool' })

    // Extended AE2
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

    // Big Pattern Provider
})

// AE2WT