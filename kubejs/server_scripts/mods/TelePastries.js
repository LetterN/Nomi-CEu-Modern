ServerEvents.recipes(event => {

    event.remove({ output: ["telepastries:nether_cake", 'telepastries:overworld_cake', 'telepastries:end_cake'] })
        // Nether cake
    event.shaped(
        "telepastries:nether_cake", [
            'NNN',
            'OBO',
            'SSS'
        ], {
            N: "gtceu:netherrack_dust",
            O: "minecraft:obsidian",
            B: "enderio:cake_base",
            S: "minecraft:soul_sand"
        }
    )




})