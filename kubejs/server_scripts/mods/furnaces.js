ServerEvents.recipes(event => {

    // ME Controller
    event.remove({ output: ['ironfurnaces:augment_factory', 'ironfurnaces:iron_furnace', 'ironfurnaces:silver_furnace', 'ironfurnaces:copper_furnace', 'ironfurnaces:gold_furnace', 'ironfurnaces:diamond_furnace', 'ironfurnaces:obsidian_furnace', 'ironfurnaces:netherite_furnace'] })
    event.shaped(
        'ironfurnaces:iron_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:furnace'
        }
    )

    event.shaped(
        'ironfurnaces:copper_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:copper_ingot',
            B: 'ironfurnaces:iron_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:silver_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'gtceu:silver_ingot',
            B: 'ironfurnaces:copper_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:gold_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:gold_ingot',
            B: 'ironfurnaces:silver_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:diamond_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:diamond',
            B: 'ironfurnaces:gold_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:obsidian_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:obsidian',
            B: 'ironfurnaces:diamond_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:netherite_furnace', [
            'ACA',
            'BDB',
            'AEA'
        ], {
            A: 'compressium:cobblestone_2',
            B: 'minecraft:netherite_ingot',
            C: 'minecraft:magma_block',
            D: 'ironfurnaces:obsidian_furnace',
            E: 'minecraft:magma_cream'
        }
    )

    event.shaped(
        'ironfurnaces:augment_factory', [
            'ACA',
            'BDB',
            'ACA'
        ], {
            A: 'gtceu:green_sapphire_plate',
            B: 'ironfurnaces:obsidian_furnace',
            C: '#forge:circuits/lv',
            D: 'gtceu:steel_gear'
        }
    )

})