ServerEvents.recipes(event => {

event.shaped(

    Item.of('kubejs:nomipenny', 5), 
    [ 
      '   ', 
      ' A ', 
      '   '  
    ],
    {
      A: 'kubejs:nominickel'  
    }
  )

  event.shaped(

    Item.of('kubejs:nominickel', 1), 
    [ 
      ' A ', 
      'AAA', 
      ' A '  
    ],
    {
      A: 'kubejs:nomipenny'  
    }
  )
  
  event.shaped(

    Item.of('kubejs:nominickel', 5), 
    [ 
      '   ', 
      ' A ', 
      '   '  
    ],
    {
      A: 'kubejs:nomiquarter'  
    }
  )

  event.shaped(

    Item.of('kubejs:nomiquarter', 1), 
    [ 
      ' A ', 
      'AAA', 
      ' A '  
    ],
    {
      A: 'kubejs:nominickel'  
    }
  )

  event.shaped(

  Item.of('kubejs:nomiquarter', 4), 
  [ 
    '   ', 
    ' A ', 
    '   '  
  ],
  {
    A: 'kubejs:nomidollar'  
  }
)

event.shaped(

    Item.of('kubejs:nomidollar', 1), 
    [ 
      'A A', 
      '   ', 
      'A A'  
    ],
    {
      A: 'kubejs:nomiquarter'  
    }
  )

})