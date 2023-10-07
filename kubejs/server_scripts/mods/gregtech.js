ServerEvents.recipes(event => {

    event.shaped(
        'gtceu:red_alloy_dust', [
            'ABB',
            'BB ',
            '   '
        ], {
            A: 'gtceu:copper_dust',
            B: 'minecraft:redstone'
        }
    )

    event.shapeless('gtceu:conductive_alloy_dust', ['minecraft:redstone', 'gtceu:iron_dust'])

    event.recipes.gtceu.extractor('one_experience_fluid')
        .itemInputs('miniutilities:experience_pearl')
        .outputFluids(Fluid.of('enderio:xp_juice', 140))
        .duration(80)
        .EUt(32)

    //DML MATTERS
    event.recipes.gtceu.extractor('overworld_fluid')
        .itemInputs('hostilenetworks:overworld_prediction')
        .outputFluids(Fluid.of('enderio:xp_juice', 200))
        .duration(40)
        .EUt(32)
    event.recipes.gtceu.extractor('nether_experience_fluid')
        .itemInputs('hostilenetworks:nether_prediction')
        .outputFluids(Fluid.of('enderio:xp_juice', 400))
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extractor('ender_experience_fluid')
        .itemInputs('hostilenetworks:end_prediction')
        .outputFluids(Fluid.of('enderio:xp_juice', 500))
        .duration(100)
        .EUt(32)

    event.recipes.gtceu.fluid_solidifier('one_experience_solid')
        .itemOutputs('miniutilities:experience_pearl')
        .inputFluids(Fluid.of('enderio:xp_juice', 140))
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    //IMPOSSIBLE REALM DATA
    event.shaped(
        'kubejs:impossible_realm_data', [
            'ABA',
            'BAB',
            'ABA'
        ], {
            A: 'hostilenetworks:overworld_prediction',
            B: 'miniutilities:experience_pearl'
        }
    )
    event.shaped(
        '2x kubejs:impossible_realm_data', [
            'ABA',
            'BAB',
            'ABA'
        ], {
            A: 'hostilenetworks:nether_prediction',
            B: 'miniutilities:experience_pearl'
        }
    )
    event.shaped(
        '4x kubejs:impossible_realm_data', [
            'ABA',
            'BAB',
            'ABA'
        ], {
            A: 'hostilenetworks:end_prediction',
            B: 'miniutilities:experience_pearl'
        }
    )

    //TODO NETHER STAR RECIPES

})