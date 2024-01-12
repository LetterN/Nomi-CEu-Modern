ServerEvents.recipes(event => {
    // Ender Pearls
    event.recipes.gtceu.alloy_smelter("pulsating_ender_pearl")
    .itemInputs("minecraft:diamond", "kubejs:pulsating_dust")
    .itemOutputs("minecraft:ender_pearl")
    .duration(300)
    .EUt(16)

    // May as well remove ender dust usage while we're at it
    event.remove({input: "miniutilities:ender_dust"})

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
    event.remove("enderio:photovoltaic_plate")
    event.recipes.gtceu.alloy_smelter("photovoltaic_plate")
    .itemInputs("2x enderio:photovoltaic_composite", "gtceu:electrical_steel_plate")
    .itemOutputs("enderio:photovoltaic_plate")
    .duration(180)
    .EUt(16)

    // Solar composite
    event.remove("enderio:photovoltaic_composite")
    event.shapeless("3x enderio:photovoltaic_composite", ["gtceu:lapis_dust", "gtceu:coal_dust", "gtceu:silicon_dust"])

    // Drawers
    event.remove("storagedrawers:obsidian_storage_upgrade")
    event.remove("storagedrawers:compacting_drawers_3")
    event.remove("storagedrawers:controller")
    event.remove("storagedrawers:controller_slave")
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

    var controllerCore = ["minecraft:diamond_block", "minecraft:emerald_block"]
    controllerCore.forEach(coreBlock => {
        event.shaped(
            "storagedrawers:controller", [
                'III',
                'CDC',
                'IEI'
            ], {
                I: "gtceu:iron_plate",
                C: "#forge:circuits/lv",
                D: "#storagedrawers:drawers",
                E: coreBlock
            }
        )
    })
})