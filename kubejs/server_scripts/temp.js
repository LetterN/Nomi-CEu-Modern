ServerEvents.recipes(event => {

    // Need some kind of teleportation, this mod will do for now
    event.remove({ output: 'teleporters:ender_crystal' })
    event.recipes.gtceu.autoclave("teleporter_crystal")
        .itemInputs(["minecraft:chorus_flower"])
        .inputFluids("gtceu:vibrant_alloy 288")
        .itemOutputs('teleporters:ender_crystal')
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