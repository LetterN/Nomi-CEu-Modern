ServerEvents.recipes(event => {

    // Need some kind of teleportation, this mod will do for now
    event.remove({ output: 'waystones:warp_stone' })
    event.recipes.gtceu.autoclave("warp_stone")
        .itemInputs(["minecraft:chorus_flower"])
        .inputFluids("gtceu:vibrant_alloy 288")
        .itemOutputs('waystones:warp_stone')
        .duration(320)
        .EUt(32)

    event.remove({ output: "thermal:device_water_gen" })
    event.shaped(
            "thermal:device_water_gen", [
                'BBB',
                'BCB',
                'BBB'
            ], {
                B: "enderio:fused_quartz",
                C: "watercondenser:watercondenser"
            }
        )

})