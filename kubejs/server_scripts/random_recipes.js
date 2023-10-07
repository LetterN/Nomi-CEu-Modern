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

    event.replaceInput({ id: "hangglider:glider_framework" }, 'minecraft:iron_ingot', 'gtceu:iron_rod')
    event.replaceInput({ id: "gtceu:shaped/basic_circuit_board" }, 'gtceu:copper_single_wire', 'gtceu:copper_fine_wire')
    event.shapeless('16x gtceu:fireclay_dust', ['gtceu:clay_dust', 'gtceu:brick_dust'])
    event.remove({ id: "gtceu:shapeless/credit_platinum" })
    event.remove({ id: "gtceu:shapeless/credit_platinum_alt" })

    event.recipes.gtceu.extractor('fluid_platinum')
        .outputFluids(Fluid.of('gtceu:platinum', 48))
        .itemInputs('gtceu:platinum_credit')
        .duration(40)
        .EUt(7)
})