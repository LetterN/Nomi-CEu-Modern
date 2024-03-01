// THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE

ServerEvents.recipes(event => {

    //snad
    event.remove({ output: ["snad:snad", "snad:red_snad"] })
    event.shapeless('snad:snad', ['kubejs:double_compressed_sand', 'kubejs:double_compressed_sand'])
    event.shapeless('snad:red_snad', ['kubejs:double_compressed_red_sand', 'kubejs:double_compressed_red_sand'])

    //snaded sand snad
    event.shaped("kubejs:compressed_sand", [
        "AAA",
        "AAA",
        "AAA"
    ], {
        A: "minecraft:sand"
    });

    event.shaped("kubejs:double_compressed_sand", [
        "AAA",
        "AAA",
        "AAA"
    ], {
        A: "kubejs:compressed_sand"
    });

    //red snaded red sand red snad
    event.shaped("kubejs:compressed_red_sand", [
        "AAA",
        "AAA",
        "AAA"
    ], {
        A: "minecraft:red_sand"
    });

    event.shaped("kubejs:double_compressed_red_sand", [
        "AAA",
        "AAA",
        "AAA"
    ], {
        A: "kubejs:compressed_red_sand"
    });

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
    event.replaceInput({ id: "gtceu:shaped/basic_circuit_board" }, 'gtceu:copper_single_wire', 'gtceu:fine_copper_wire')
    event.shapeless('16x gtceu:fireclay_dust', ['gtceu:clay_dust', 'gtceu:brick_dust'])
    event.remove({ id: "gtceu:shapeless/credit_platinum" })
    event.remove({ id: "gtceu:shapeless/credit_platinum_alt" })

    event.recipes.gtceu.extractor('fluid_platinum')
        .outputFluids(Fluid.of('gtceu:platinum', 48))
        .itemInputs('gtceu:platinum_credit')
        .duration(40)
        .EUt(7)

    //Infinity Dust Blocks
    event.recipes.shapeless('9x kubejs:compressed_infinity_dust_block', 'kubejs:double_compressed_infinity_dust_block')
    event.recipes.shapeless('9x kubejs:infinity_dust_block', 'kubejs:compressed_infinity_dust_block')
    event.recipes.shapeless('9x enderio:grains_of_infinity', 'kubejs:infinity_dust_block')

    event.shaped(
        'kubejs:infinity_dust_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'enderio:grains_of_infinity'
        }
    )

    event.shaped(
        'kubejs:compressed_infinity_dust_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'kubejs:infinity_dust_block'
        }
    )

    event.shaped(
        'kubejs:double_compressed_infinity_dust_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'kubejs:compressed_infinity_dust_block'
        }
    )

    //angel ring
    event.remove({ id: 'miniutilities:angel_ring_crafting' })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            "A B A",
            "AC CA",
            "A B A",
            " AAA "
        ],
        "key": {
            "A": {
                "item": "gtceu:rose_gold_ingot"
            },
            "B": {
                "type": "forge:nbt",
                "item": "ironjetpacks:jetpack",
                "count": 1,
                "nbt": "{Id:\"ironjetpacks:Reinforced\",Throttle:1.0d}"
            },
            "C": {
                "type": "forge:nbt",
                "item": "ironjetpacks:jetpack",
                "count": 1,
                "nbt": "{Id:\"ironjetpacks:Vibrant\",Throttle:1.0d}"
            }
        },
        "result": {
            "item": "miniutilities:angel_ring"
        }
    })
})