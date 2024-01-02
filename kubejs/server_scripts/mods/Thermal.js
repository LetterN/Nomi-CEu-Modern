//TODO: Take care of all Thermal stuff

ServerEvents.recipes(event => {
    event.remove({ output: ['systeams:boiler_pipe', 'thermal:dynamo_fuel_augment', 'thermal:rf_coil', 'thermal:dynamo_output_augment'] })
    event.remove({ output: ['thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_3'] })
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

    //Upgrade Kits
    event.shaped(
        Item.of('thermal:upgrade_augment_1', '{AugmentData:{BaseMod:1.5f,Type:"Upgrade"}}'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:invar_gear',
            B: 'gtceu:invar_plate',
            C: 'gtceu:electrical_steel_block'
        }
    )

    event.shaped(
        Item.of('thermal:upgrade_augment_2', '{AugmentData:{BaseMod:2.5f,Type:"Upgrade"}}'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:electrum_gear',
            B: 'gtceu:electrum_plate',
            C: 'thermal:upgrade_augment_1'
        }
    )

    event.shaped(
        Item.of('thermal:upgrade_augment_4', '{AugmentData:{BaseMod:5.0f,Type:"Upgrade"}}'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:restonia_gear',
            B: 'gtceu:signalum_plate',
            C: 'thermal:upgrade_augment_2'
        }
    )

    //FIXME: Temporary Recipe until DE comes out

    event.shaped(
        Item.of('thermal:upgrade_augment_3', '{AugmentData:{BaseMod:10.0f,Type:"Upgrade"}}'), [
            'ABD',
            'BCB',
            'DBA'
        ], {
            A: 'gtceu:draconium_plate',
            B: 'gtceu:enderium_plate',
            C: 'thermal:upgrade_augment_4',
            D: 'gtceu:tungsten_carbide_plate'
        }
    )

    //Power Augment

    //Item.of('thermal:dynamo_output_augment', '{AugmentData:{DynamoPower:3.0f,Type:"Dynamo"}}')

})