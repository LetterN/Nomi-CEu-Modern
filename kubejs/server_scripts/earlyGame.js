ServerEvents.recipes(event => {
    // Ender Pearls
    event.recipes.gtceu.alloy_smelter("pulsating_ender_pearl")
        .itemInputs("minecraft:diamond", "kubejs:pulsating_dust")
        .itemOutputs("minecraft:ender_pearl")
        .duration(300)
        .EUt(16)

    // May as well remove ender dust usage while we're at it
    event.remove({ input: "miniutilities:ender_dust" })

    var plantMaterial = ["#minecraft:leaves", "#minecraft:saplings", "minecraft:vine"]
    plantMaterial.forEach(ballIngredient => {
        event.shaped(
            "gtceu:plant_ball", [
                'AAA',
                'A A',
                'AAA'
            ], {
                A: ballIngredient
            }
        )
    });

    // Hand-crushing
    event.shapeless("minecraft:gravel", ["minecraft:cobblestone", "#forge:tools/mortars"])
    event.shapeless("minecraft:sand", ["minecraft:gravel", "#forge:tools/hammers"])
    event.shapeless("kubejs:dust", ["minecraft:sand", "#forge:tools/hammers"])

    // EIO Solar
    event.remove({ output: "enderio:photovoltaic_plate" })
    event.recipes.gtceu.alloy_smelter("photovoltaic_plate")
        .itemInputs("2x enderio:photovoltaic_composite", "gtceu:electrical_steel_plate")
        .itemOutputs("enderio:photovoltaic_plate")
        .duration(180)
        .EUt(16)

    // Solar composite
    event.remove({ output: "enderio:photovoltaic_composite" })
    event.shapeless("3x enderio:photovoltaic_composite", ["gtceu:lapis_dust", "gtceu:coal_dust", "gtceu:silicon_dust"])

    // Drawers
    event.remove({ output: "storagedrawers:obsidian_storage_upgrade" })
    event.remove({ output: "storagedrawers:compacting_drawers_3" })
    event.remove({ output: "storagedrawers:controller" })
    event.remove({ output: "storagedrawers:controller_slave" })
    event.shaped(
        "storagedrawers:obsidian_storage_upgrade", [
            'SSS',
            'CUC',
            'SSS'
        ], {
            S: "minecraft:stick",
            C: "minecraft:coal",
            U: "storagedrawers:upgrade_template"
        }
    )
    event.shaped(
        "storagedrawers:compacting_drawers_3", [
            'III',
            'PDP',
            'III'
        ], {
            I: "gtceu:iron_plate",
            P: "gtceu:lv_electric_piston",
            D: "#storagedrawers:drawers"
        }
    )
    event.shaped(
        "storagedrawers:controller_slave", [
            'III',
            'CDC',
            'IEI'
        ], {
            I: "gtceu:iron_plate",
            C: "#gtceu:circuits/lv",
            D: "#storagedrawers:drawers",
            G: "minecraft:gold_block"
        }
    )
    
    var controllerCore = ["minecraft:diamond_block", "minecraft:emerald_block"]
    controllerCore.forEach(coreBlock => {
        event.shaped(
            "storagedrawers:controller", [
                'III',
                'CDC',
                'IEI'
            ], {
                I: "gtceu:iron_plate",
                C: "#gtceu:circuits/lv",
                D: "#storagedrawers:drawers",
                E: coreBlock
            }
        )
    })

    event.remove({ id: 'gtceu:assembler/phenolic_board' })
    event.recipes.gtceu.chemical_reactor('phenolic_board')
        .itemInputs('gtceu:resin_circuit_board')
        .inputFluids('gtceu:phenol 100')
        .itemOutputs('gtceu:phenolic_circuit_board')
        .duration(100)
        .EUt(8)


    //phenol

    event.recipes.gtceu.pyrolyse_oven('phenol_coal')
        .itemInputs('16x minecraft:coal')
        .inputFluids('systeams:steam 4000')
        .itemOutputs('20x gtceu:coke_gem')
        .outputFluids('gtceu:phenol 1000')
        .circuit(14)
        .duration(600)
        .EUt(30)

    event.recipes.gtceu.pyrolyse_oven('phenol_coal_dust')
        .itemInputs('16x gtceu:coal_dust')
        .inputFluids('systeams:steam 4000')
        .itemOutputs('20x gtceu:coke_dust')
        .outputFluids('gtceu:phenol 1000')
        .circuit(14)
        .duration(600)
        .EUt(30)

     // Pyro Oven
     event.remove({ output: 'gtceu:pyrolyse_oven' })
     event.shaped(
        'gtceu:pyrolyse_oven', [
             'PCW',
             'CHC',
             'PUW'
         ], {
             P: 'gtceu:lv_electric_piston',
             C: '#gtceu:circuits/lv',
             U: 'gtceu:lv_electric_pump',
             W: 'gtceu:cupronickel_quadruple_wire',
             H: 'gtceu:ulv_machine_hull'
         }
     )  
})