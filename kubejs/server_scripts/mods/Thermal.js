//TODO: Take care of all Thermal stuff

ServerEvents.recipes(event => {
    event.remove({ output: ['systeams:boiler_pipe', 'thermal:dynamo_fuel_augment', 'thermal:rf_coil'] })
    event.shaped(
        'systeams:boiler_pipe', [
            ' C ',
            'ABA',
            ' D '
        ], {
            A: 'gtceu:copper_plate',
            B: 'minecraft:bucket',
            C: 'gtceu:iron_gear',
            D: '#enderio:fused_quartz'
        }
    )

    event.shaped(
        'thermal:dynamo_fuel_augment', [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:wrought_iron_ingot',
            B: 'gtceu:wrought_iron_plate',
            C: 'thermal:rf_coil'
        }
    )

    event.shaped(
        'thermal:rf_coil', [
            ' BA',
            'BAB',
            'AB '
        ], {
            A: 'gtceu:gold_rod',
            B: 'minecraft:redstone'
        }
    )

})