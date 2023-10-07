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

        event.replaceInput({ id: "hostilenetworks:living_matter/nether_to_ender" }, 'minecraft:end_stone', 'minecraft:ender_pearl')


        //PPC
        event.remove({ output: 'hostilenetworks:prediction_matrix' })

        event.recipes.gtceu.alloy_smelter('pulsating_polymer_clay')
            .itemInputs(['kubejs:pulsating_dust', 'minecraft:clay'])
            .itemOutputs('4x hostilenetworks:prediction_matrix')
            .duration(240)
            .EUt(7)

        event.recipes.minecraft.smelting('kubejs:pulsating_dust', ['gtceu:uraninite_dust', 'kubejs:resonant_clathrate'])

        event.recipes.gtceu.extractor('resonant_ender')
            .itemInputs('minecraft:ender_pearl')
            .outputFluids(Fluid.of('kubejs:resonant_ender', 250))
            .duration(40)
            .EUt(30)

        event.recipes.gtceu.chemical_reactor('resonant_clathrate')
            .itemInputs('minecraft:quartz')
            .inputFluids(Fluid.of('kubejs:resonant_ender', 250))
            .itemOutputs('kubejs:resonant_clathrate')
            .duration(120)
            .EUt(75)

        event.recipes.gtceu.electrolyzer('gt_quartz')
            .itemInputs('4x minecraft:glass')
            .itemOutputs('minecraft:quartz')
            .duration(100)
            .EUt(20)

        event.recipes.gtceu.forge_hammer('dust')
            .itemInputs('minecraft:sand')
            .itemOutputs('kubejs:dust')
            .duration(16)
            .EUt(10)

        event.recipes.gtceu.chemical_reactor('gt_clay')
            .itemInputs('kubejs:dust')
            .itemOutputs('minecraft:clay')
            .inputFluids('water')
            .duration(20)
            .EUt(15)
    })
    //FIXME If ArmorPlus ever gets added, add the remaining items
    //TODO Thermal Elemental Matters

ItemEvents.rightClicked(event => {
    if (event.item.id === 'hostilenetworks:overworld_prediction') {
        event.player.xp += 10
        event.item.count--
    }
    if (event.item.id === 'hostilenetworks:nether_prediction') {
        event.player.xp += 20
        event.item.count--
    }
    if (event.item.id === 'hostilenetworks:end_prediction') {
        event.player.xp += 25
        event.item.count--
    }
})