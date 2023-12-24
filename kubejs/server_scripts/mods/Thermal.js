//TODO: Take care of all Thermal stuff

ServerEvents.recipes(event => {
    event.remove({ output: 'systeams:boiler_pipe' })
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

})