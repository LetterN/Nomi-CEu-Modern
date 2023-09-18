// THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE

ServerEvents.recipes(event => {

    //snad
    event.remove({ output: ["snad:snad", "snad:red_snad"] })
    event.shapeless('snad:snad', ['compressium:sand_2', 'compressium:sand_2'])
    event.shapeless('snad:red_snad', ['compressium:redsand_2', 'compressium:redsand_2'])

    //TODO check remaining nether star recipes
    event.shaped(
        'minecraft:nether_star', [
            ' A ',
            'DEB',
            ' C '
        ], {
            A: 'kubejs:nether_star_north',
            B: 'kubejs:nether_star_east',
            C: 'kubejs:nether_star_south',
            D: 'kubejs:nether_star_west',
            E: 'kubejs:nether_star_center'
        }
    )
})