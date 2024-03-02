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

    event.remove({ output: ['enderio:iron_gear', 'enderio:energized_gear', 'enderio:vibrant_gear'] })

    // Infinity Bimetal Gear
    event.recipes.gtceu.alloy_smelter('infinity_gear')
    .itemInputs('gtceu:iron_gear', '2x enderio:grains_of_infinity')
    .itemOutputs('enderio:iron_gear')
    .duration(100)
    .EUt(16)

    // Energized Bimetal Gear
    event.recipes.gtceu.alloy_smelter('energetic_gear')
    .itemInputs('enderio:iron_gear', '4x gtceu:energetic_alloy_ingot')
    .itemOutputs('enderio:energized_gear')
    .duration(150)
    .EUt(16)

    // Vibrant Bimetal Gear
    event.recipes.gtceu.alloy_smelter('vibrant_gear')
    .itemInputs('enderio:energized_gear', '4x gtceu:vibrant_alloy_ingot')
    .itemOutputs('enderio:vibrant_gear')
    .duration(200)
    .EUt(16)


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



    //TODO: Capacitor Banks Recipes
    
    // Capacitors

    event.remove({ output: 'enderio:basic_capacitor' })

    var capacitorCores = [
        ['#gtceu:circuits/ulv', 1],
        ['gtceu:capacitor', 2],
        ['gtceu:smd_capacitor', 3],
        ['gtceu:advanced_smd_capacitor', 12]
    ]

    capacitorCores.forEach(core => {
        event.shaped(
            core[1] + 'x enderio:basic_capacitor', [
                ' N ',
                'NCN',
                'W W'
            ], {
                N: 'gtceu:electrical_steel_nugget',
                C: core[0],
                W: 'gtceu:tin_single_wire'
            }
        )
    })

    // Compressed caps
    event.shaped(
        'kubejs:compressed_octadic_capacitor', [
            'CCC',
            'CCC',
            'CCC'
        ], {
            C: 'enderio:octadic_capacitor'
        }
    )

    event.shaped(
        'kubejs:double_compressed_octadic_capacitor', [
            'CCC',
            'CCC',
            'CCC'
        ], {
            C: 'kubejs:compressed_octadic_capacitor'
        }
    )

    // Fused Quartz
    event.recipes.gtceu.alloy_smelter("fused_quartz")
    .itemInputs('3x minecraft:quartz')
    .notConsumable('gtceu:block_casting_mold')
    .itemOutputs('enderio:fused_quartz')
    .duration(80)
    .EUt(16)

    // Enlightened fused quartz
    event.recipes.gtceu.alloy_smelter("enlightened_fused_quartz")
    .itemInputs('#enderio:fused_quartz', 'minecraft:glowstone')
    .itemOutputs('enderio:fused_quartz_e')
    .duration(160)
    .EUt(16)

    // dark fused quartz (FIXME: replace bedrock with actual AA item, was too lazy to fire up normal nomi to see)
    event.recipes.gtceu.alloy_smelter("dark_fused_quartz")
    .itemInputs('#enderio:fused_quartz', 'minecraft:bedrock')
    .itemOutputs('enderio:fused_quartz_d')
    .duration(200)
    .EUt(32)

    // Enlightened clear glass
    event.recipes.gtceu.alloy_smelter("enlightened_clear_glass")
    .itemInputs('#enderio:clear_glass', 'minecraft:glowstone')
    .itemOutputs('enderio:clear_glass_e')
    .duration(160)
    .EUt(16)

    // dark clear glass
    event.recipes.gtceu.alloy_smelter("dark_clear_glass")
    .itemInputs('#enderio:clear_glass', 'minecraft:bedrock')
    .itemOutputs('enderio:clear_glass_d')
    .duration(200)
    .EUt(32)

    // Stellar Alloy
    event.recipes.gtceu.alloy_smelter('stellar_alloy')
    .itemInputs('gtceu:end_steel_ingot', '8x enderio:grains_of_infinity')
    .itemOutputs('gtceu:stellar_alloy_ingot')
    .duration(200)
    .EUt(2000)

    // Remove useless/op conduit recipes from enderio
    event.remove({ input: '#enderio:fused_quartz', output: 'enderio:pressurized_fluid_conduit' })
    event.remove({ input: 'gtceu:vibrant_alloy_ingot', output: 'enderio:ender_fluid_conduit' })
    event.remove({ input: 'gtceu:pulsating_alloy_nugget', output: 'enderio:item_conduit' })

    // TODO: implement Simple Machine Chassis and add chassis recipe chain

    event.remove({ output: 'enderio:infinity_rod' })
    event.recipes.gtceu.alloy_smelter('infinity_rod')
    .itemInputs('gtceu:dark_steel_rod', 'enderio:grains_of_infinity')
    .itemOutputs('enderio:infinity_rod')
    .duration(200)
    .EUt(30)

    // Enchanter
    event.remove({ output: ['enderio:enchanter'] })
    event.shaped(
        'enderio:enchanter', [
            'DCD',
            'BBB',
            ' A '
        ], {
            A: 'gtceu:void_block',
            B: 'gtceu:dark_steel_ingot',
            C: 'minecraft:book',
            D: 'minecraft:diamond'
        }
    )

    // Enchanter
    event.remove({ output: ['enderio:yeta_wrench'] })
    event.shaped(
        'enderio:yeta_wrench', [
            'I I',
            ' G ',
            ' I '
        ], {
            I: 'minecraft:iron_ingot',
            G: 'gtceu:tin_ingot'
        }
    )
    event.remove({ output: 'enderio:void_chassis' })
})