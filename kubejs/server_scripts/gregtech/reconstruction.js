let reconstructedItems = [
    ['minecraft:redstone', 'gtceu:redstonia_gem', 'redstonia'],
    ['minecraft:iron_ingot', 'gtceu:enori_gem', 'enori'],
    ['minecraft:coal', 'gtceu:void_gem', 'void'],
    ['minecraft:lapis_lazuli', 'gtceu:palis_gem', 'palis'],
    ['minecraft:diamond', 'gtceu:diamatine_gem', 'diamatine'],
    ['minecraft:emerald', 'gtceu:emeradic_gem', 'emeradic']
]

ServerEvents.recipes(event => {
    reconstructedItems.forEach(itemPair => {
        event.recipes.gtceu.atomic_reconstruction(itemPair[2])
            .itemInputs(itemPair[0])
            .itemOutputs(itemPair[1])
            .duration(20)
            .EUt(128)
    })
})