let ores = [
    "redstone_ore",
    'diamond_ore',
    'emerald_ore',
    'gold_ore',
    'lapis_ore',
    'iron_ore',
    'coal_ore',
    'nether_quartz_ore'
]

ServerEvents.recipes(event => {
    function unDensify(name) {
        let normal = "minecraft:" + name;
        let dense = "denseores:dense_" + name;
        event.recipes.gtceu.recipes.chemical_reactor("unDensify_" + normal)
            .itemInputs(dense)
            .itemOutputs('16x ' + normal)
            .inputFluids(Fluid.of("gtceu:nitric_acid"), 1000)
            .duration(200)
            .EUt(500)
    }

    ores.forEach(ore => {
        unDensify(ore);
    })

    event.recipes.gtceu.recipes.chemical_reactor("unDensify_oilsands")
            .itemInputs("kubejs:dense_oilsands_ore")
            .itemOutputs('16x ' + "gtceu:endstone_oilsands_ore")
            .inputFluids(Fluid.of("gtceu:nitric_acid"), 1000)
            .duration(200)
            .EUt(500)
})

ServerEvents.tags('item', event => {
    ores.forEach(ore => {
        event.remove("forge:ores", "denseores:dense_" + ore);
        event.remove('c:ores', "denseores:dense_" + ore);
        event.remove('balm:ores', "denseores:dense_" + ore);
    })
})    

