ServerEvents.recipes(event => {


    event.shapeless('5x kubejs:nomi_penny', 'kubejs:nomi_nickel')

    event.shaped(

        Item.of('kubejs:nomi_nickel', 1), [
            ' A ',
            'AAA',
            ' A '
        ], {
            A: 'kubejs:nomi_penny'
        }
    )

    event.shapeless('5x kubejs:nomi_nickel', 'kubejs:nomi_quarter')

    event.shaped(

        Item.of('kubejs:nomi_quarter', 1), [
            ' A ',
            'AAA',
            ' A '
        ], {
            A: 'kubejs:nomi_nickel'
        }
    )

    event.shapeless('4x kubejs:nomi_quarter', 'kubejs:nomidollar')

    event.shaped(

        Item.of('kubejs:nomi_dollar', 1), [
            'A A',
            '   ',
            'A A'
        ], {
            A: 'kubejs:nomi_quarter'
        }
    )

})