ServerEvents.recipes(event => {


    event.shapeless('5x kubejs:nomipenny', 'kubejs:nominickel')

    event.shaped(

        Item.of('kubejs:nominickel', 1), [
            ' A ',
            'AAA',
            ' A '
        ], {
            A: 'kubejs:nomipenny'
        }
    )

    event.shapeless('5x kubejs:nominickel', 'kubejs:nomiquarter')

    event.shaped(

        Item.of('kubejs:nomiquarter', 1), [
            ' A ',
            'AAA',
            ' A '
        ], {
            A: 'kubejs:nominickel'
        }
    )

    event.shapeless('4x kubejs:nomiquarter', 'kubejs:nomidollar')

    event.shaped(

        Item.of('kubejs:nomidollar', 1), [
            'A A',
            '   ',
            'A A'
        ], {
            A: 'kubejs:nomiquarter'
        }
    )

})