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
            B: 'kubejs:fluix_plate',
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
            B: 'kubejs:fluix_plate',
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
            E: 'kubejs:fluix_plate',
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
        Item.of('ae2:drive'), [
            'ABA',
            'CDA',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:mv_electric_piston',
            C: 'ae2:fluix_crystal',
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

    // Molecular Assembler

    // Interface

    // Quantum Ring

    // Quantum Link Chamber

    // Storage Component

    // Storage Housing

    // CPUs
    
// PackagedAuto 
    // Packager

    // Unpackager

    // Packager Extension
    
    // Package Encoder

    // Pauto Pattern

    // Pauto Components

    // 5x5 Pauto Table

    // 7x7 Pauto Table

    // 9x9 Pauto Table

    // Combination Pauto Crafter

    // Marked Pedestal
    
// Extended AE2
    // Big Drive

    // Big Pattern Provider
})
