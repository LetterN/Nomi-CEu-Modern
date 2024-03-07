    // For some unholy reason watercondenser refuses to work with loottables, so I gotta fight jank with jank
    BlockEvents.broken(event =>{
        if (event.block.id != 'watercondenser:watercondenser') return
        let wc = event.block.createEntity('item')
        wc.item = Item.of('watercondenser:watercondenser')
        wc.item.count = 1
        wc.spawn()
    })