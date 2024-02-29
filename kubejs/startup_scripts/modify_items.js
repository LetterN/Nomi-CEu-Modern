ItemEvents.modification(event => {
    event.modify('minecraft:sugar_cane', item => {item.burnTime = 300})
    // event.modify('gtceu:dark_soularium_ingot', item => { item.glow(true)})
    // event.modify('/empowered/', item => { item.glow(true)})
})