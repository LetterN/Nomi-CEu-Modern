ServerEvents.recipes(event => {

    // Need some kind of teleportation, this mod will do for now
    event.remove({ output: 'teleporters:ender_crystal' })
    event.recipes.gtceu.autoclave("teleport_crystal")
        .itemInputs(["minecraft:chorus_flower"])
        .inputFluids("gtceu:vibrant_alloy 288")
        .itemOutputs('teleporters:ender_crystal')
        .duration(320)
        .EUt(32)
})