let ores = [
    "redstone_ore",
    'diamond_ore',
    'emerald_ore',
    'gold_ore',
    'lapis_ore',
    'iron_ore',
    'coal_ore',
    'copper_ore',
    'nether_quartz_ore'
]

REIEvents.hide('item', event => {
    event.hide('denseores:dense_redstone_ore');
    event.hide('denseores:dense_deepslate_redstone_ore');
    event.hide('denseores:dense_nether_quartz_ore');
    event.hide('denseores:ancient_nether_ore');
})

REIEvents.add('item', event => {
    ores.forEach(ore => {
        event.add(Item.of('denseores:dense_' + ore), {test: ore});
        oreDeepslate = "deepslate_" + ore;
        event.add(Item.of('denseores:dense_deepslate' + ore), {test: oreDeepslate});
    })
})

ItemEvents.tooltip(tooltip => {
    ores.forEach(ore => {
        tooltip.add("denseores:dense_" + ore, "\u00A7oI don't recommend placing this down.");
    })
})