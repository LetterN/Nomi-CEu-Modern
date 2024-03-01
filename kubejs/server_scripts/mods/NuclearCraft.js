// priority: 0

ServerEvents.recipes(event => {

    event.remove({ id: 'watercondenser:watercondenser' })
    
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