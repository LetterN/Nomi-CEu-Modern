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

    //End Cake

    event.shaped(
        'telepastries:end_cake', [
            'NNN',
            'OBO',
            'SSS'
        ], {
            N: 'gtceu:endstone_dust',
            O: 'minecraft:ender_eye',
            B: "enderio:cake_base",
            S: 'gtceu:black_steel_plate'
        }
    )



})