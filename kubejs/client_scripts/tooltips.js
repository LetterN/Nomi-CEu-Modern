ItemEvents.tooltip(tooltip => {


    //Microminers
    tooltip.add('kubejs:microminer_t1', '\u00A7oHarvests Titanium and other light metals from asteroids in the microverse.')
    tooltip.add('kubejs:microminer_t2', '\u00A7oHarvests Tungsten and other heavy metals from asteroids in the microverse.')
    tooltip.add('kubejs:microminer_t3', '\u00A7oHarvests ultra hot metals and gems from Nether microverses.')
    tooltip.add('kubejs:microminer_t4', '\u00A7oHarvests ultra cold materials from the deepest parts of empty space.')
    tooltip.add('kubejs:microminer_t5', '\u00A7oHarvests strange materials from End microverses.')
    tooltip.add('kubejs:microminer_t6', '\u00A7oHarvests extremely rare materials from every concievable reality.')
    tooltip.add('kubejs:microminer_t7', '\u00A7oHunts Wyrms and End Dragons from the microverse')
    tooltip.add('kubejs:microminer_t7', '\u00A7oand returns with parts from their carapaces.')
    tooltip.add('kubejs:microminer_t8', '\u00A7oHunts inconcievable monstrosities from beyond the End')
    tooltip.add('kubejs:microminer_t8', '\u00A7oand returns with bizzare trinkets.')
    tooltip.add('kubejs:microminer_t9', '\u00A7oCollapses microverse stars and harvests their delicious neutronium cores.')
    tooltip.add('kubejs:microminer_t10', '\u00A7oCollapses an entire microverse and harvests it whole.')
    tooltip.add('kubejs:microminer_t10', '\u00A7oTry to aim for uninhabited ones.')

    //Microminer Components
    tooltip.add('universal_navigator', '\u00A79See You Later, navigator!')


    //Endgame Items
    tooltip.add('ultimate_gem', '\u00A7eRecipe is shapeless.')

    //DML Matters
    tooltip.add('hostilenetworks:overworld_prediction', '\u00A77Experience per item: 10')
    tooltip.add('hostilenetworks:nether_prediction', '\u00A77Experience per item: 20')
    tooltip.add('hostilenetworks:end_prediction', '\u00A77Experience per item: 25')

    //Hand Framing Tool

    //Conduits
    tooltip.add('enderio:conductive_conduit', '\u00A77Max Output 512 RF/t')
    tooltip.add('enderio:energetic_conduit', '\u00A77Max Output 2,048 RF/t')
    tooltip.add('enderio:vibrant_conduit', '\u00A77Max Output 8,192 RF/t')
    tooltip.add('enderio:endsteel_conduit', '\u00A77Max Output 32,768 RF/t')
    tooltip.add('enderio:lumium_conduit', '\u00A77Max Output 131,072 RF/t')
    tooltip.add('enderio:signalum_conduit', '\u00A77Max Output 524,288 RF/t')
    tooltip.add('enderio:enderium_conduit', '\u00A77Max Output 2,097,152 RF/t')
    tooltip.add('enderio:draconium_conduit', '\u00A77Max Output 8,388,608 RF/t')
    tooltip.add('enderio:draconic_superconductor_conduit', '\u00A77Max Output 134,217,728 RF/t')

    tooltip.add("thermal:device_rock_gen", "\u00A77Must be placed next to lava and water to produce cobblestone.")
    tooltip.add("thermal:device_water_gen", "\u00A77Must be placed next to two water source blocks to work.")

    tooltip.add(['thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_4', 'thermal:upgrade_augment_3', 'thermal:dynamo_output_augment'], '\u00A7aDo not take the items from JEI !, use the crafting recipe to get the NBT data.')


    // Backpacks, this extra bit of code will made it so that this line will be the first line displayed after the item name (if curios didn't exist lol)
    tooltip.addAdvanced(/simplybackpacks:/, (item, advanced, text) => {
        text.add(1, [Text.of('Deprecated, switch out for a sophisticated backpack.').red()])
    })

    tooltip.addAdvanced(/sophisticatedbackpacks:backpack/, (item, advanced, text) => {
        text.add(1, [Text.of('Items and upgrades in backpack will be lost if upgraded!').red()])
    })

    tooltip.addAdvanced(/sophisticatedbackpacks:[A-Za-z]+_backpack/, (item, advanced, text) => {
        text.add(1, [Text.of('Items in backpack will be lost if upgraded!').red()])
    })
})