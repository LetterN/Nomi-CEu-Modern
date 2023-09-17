ServerEvents.recipes(event => {
    //remove dml iems
    event.remove({ output: ['hostilenetworks:blank_data_model', 'hostilenetworks:deep_learner', 'hostilenetworks:loot_fabricator', 'hostilenetworks:sim_chamber'] })

    event.shaped(
        'hostilenetworks:blank_data_model', [
            'BBA',
            'DCA',
            'BBA'
        ], {
            A: 'gtceu:gold_fine_wire',
            B: 'gtceu:electrical_steel_plate',
            C: '#forge:circuits/lv',
            D: 'kubejs:pulsating_mesh'
        }
    )

    event.shaped(
        'kubejs:dark_steel_machine_hull', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:lv_machine_hull'
        }
    )

    event.shaped(
        'hostilenetworks:sim_chamber', [
            'ACA',
            'BDB',
            'ABA'
        ], {
            A: 'kubejs:pulsating_mesh',
            B: '#forge:circuits/lv',
            C: 'minecraft:glass_pane',
            D: 'kubejs:dark_steel_machine_hull'
        }
    )

    event.shaped(
        'hostilenetworks:loot_fabricator', [
            'ACA',
            'BDB',
            'AHA'
        ], {
            A: 'gtceu:energetic_alloy_plate',
            B: '#forge:circuits/mv',
            C: 'minecraft:glass_pane',
            D: 'kubejs:dark_steel_machine_hull',
            H: 'minecraft:hopper'
        }
    )


})