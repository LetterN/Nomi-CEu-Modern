ServerEvents.recipes(event => {

    event.remove({ output: ['enderio:energy_conduit'] })

    //Conductive Iron
    event.shaped(
        '3x enderio:conductive_conduit', [
            'AAA',
            'BBB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: 'gtceu:conductive_alloy_single_wire'
        }
    )

    event.recipes.gtceu.assembler('conductive_conduit')
        .itemInputs('3x gtceu:conductive_alloy_single_wire', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:conductive_conduit')
        .duration(80)
        .EUt(16)

    //Energetic Alloy
    event.shaped(
        '3x enderio:energetic_conduit', [
            'AAA',
            'BCB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: 'gtceu:energetic_alloy_single_wire',
            C: 'enderio:conductive_conduit'
        }
    )

    event.recipes.gtceu.assembler('energetic_conduit')
        .itemInputs('2x gtceu:energetic_alloy_single_wire', 'enderio:conductive_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:energetic_conduit')
        .duration(80)
        .EUt(16)

    //Vibrant Alloy

    event.shaped(
        '3x enderio:vibrant_conduit', [
            'AAA',
            'BCB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: 'gtceu:vibrant_alloy_single_wire',
            C: 'enderio:energetic_conduit'
        }
    )

    event.recipes.gtceu.assembler('vibrant_conduit')
        .itemInputs('2x gtceu:vibrant_alloy_single_wire', 'enderio:energetic_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:vibrant_conduit')
        .duration(80)
        .EUt(16)

    //Endsteel
    event.recipes.gtceu.assembler('endsteel_conduit')
        .itemInputs('2x gtceu:end_steel_single_wire', 'enderio:vibrant_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:endsteel_conduit')
        .duration(80)
        .EUt(16)

    //Lumium
    event.recipes.gtceu.assembler('lumium_conduit')
        .itemInputs('2x gtceu:lumium_single_wire', 'enderio:endsteel_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:lumium_conduit')
        .duration(80)
        .EUt(16)

    //Signalum
    event.recipes.gtceu.assembler('signalum_conduit')
        .itemInputs('2x gtceu:signalum_single_wire', 'enderio:lumium_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:signalum_conduit')
        .duration(80)
        .EUt(16)

    //Enderium
    event.recipes.gtceu.assembler('enderium_conduit')
        .itemInputs('2x gtceu:enderium_single_wire', 'enderio:signalum_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:enderium_conduit')
        .duration(80)
        .EUt(16)

    //Draconium
    event.recipes.gtceu.assembler('draconium_conduit')
        .itemInputs('2x gtceu:draconium_single_wire', 'enderio:enderium_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:draconium_conduit')
        .duration(80)
        .EUt(16)

    //Draconic Superconductor
    event.recipes.gtceu.assembler('draconic_superconductor_conduit')
        .itemInputs('2x gtceu:draconic_superconductor_single_wire', 'enderio:draconium_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:draconic_superconductor_conduit')
        .duration(80)
        .EUt(16)


    //TODO: BIMETAL GEARS RECIPES

    event.remove({ output: ['enderio:pulsating_crystal', 'enderio:vibrant_crystal'] })

    event.recipes.gtceu.autoclave('green_crystal')
        .itemInputs('minecraft:emerald')
        .inputFluids(Fluid.of('gtceu:pulsating_alloy', 144))
        .itemOutputs('enderio:vibrant_crystal')
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.autoclave('blue_crystal')
        .itemInputs('minecraft:diamond')
        .inputFluids(Fluid.of('gtceu:pulsating_alloy', 144))
        .itemOutputs('enderio:pulsating_crystal')
        .duration(100)
        .EUt(30)

    // Disable EnderIO machinery

    event.remove({ type: 'enderio:primitive_alloy_smelting' })
    event.remove({ type: 'enderio:alloy_smelting' })
    event.remove({ type: 'enderio:sagmilling' })



    //TODO: Conduit Recipe, Capacitor Banks Recipes, Capacitors Recipes, Alloys







})