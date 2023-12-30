// priority: 0

ServerEvents.recipes(event => {

    event.shaped(
        'watercondenser:watercondenser', [
            'AAA',
            'B B',
            'AAA'
        ], {
            A: 'gtceu:wrought_iron_plate',
            B: 'minecraft:water_bucket'
        }
    )

})