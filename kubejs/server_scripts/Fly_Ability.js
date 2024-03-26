PlayerEvents.tick(event => {
    const { player } = event;

    if (event.player.age % 20 != 0) return

    const glitchArmorEquipped = player.headArmorItem === 'kubejs:glitch_infused_helmet' &&
        player.chestArmorItem === 'kubejs:glitch_infused_chestplate' &&
        player.legsArmorItem === 'kubejs:glitch_infused_leggings' &&
        player.feetArmorItem === 'kubejs:glitch_infused_boots'

    if (glitchArmorEquipped || player.isCreative()) {
        player.abilities.mayfly = true
        player.onUpdateAbilities()
    } else {
        if (player.abilities.mayfly || !player.isCreative()) {
            player.abilities.mayfly = false
            player.abilities.flying = false
            player.onUpdateAbilities()
        }
    }

})
