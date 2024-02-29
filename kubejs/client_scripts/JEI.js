// /kjs inventory will be your friend.

JEIEvents.hideItems(event => {
    //Hides useless items
    event.hide(['ae2:vibration_chamber', 'hammerlib:gears/netherite', 'hammerlib:gears/gold', 'hammerlib:gears/copper'])

    //i really hate these kind of mods
    event.hide('ironfurnaces:million_furnace')
    event.hide(['ironfurnaces:crystal_furnace', 'ironfurnaces:emerald_furnace', 'ironfurnaces:item_spooky', 'ironfurnaces:item_xmas', 'ironfurnaces:item_copy', 'ironfurnaces:item_linker', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating', 'ironfurnaces:rainbow_coal', 'ironfurnaces:upgrade_iron', 'ironfurnaces:upgrade_gold', 'ironfurnaces:upgrade_diamond', 'ironfurnaces:upgrade_emerald', 'ironfurnaces:upgrade_obsidian', 'ironfurnaces:upgrade_crystal', 'ironfurnaces:upgrade_netherite', 'ironfurnaces:upgrade_copper', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_silver', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_iron2', 'ironfurnaces:upgrade_gold2', 'ironfurnaces:upgrade_silver2', 'ironfurnaces:allthemodium_furnace', 'ironfurnaces:vibranium_furnace', 'ironfurnaces:unobtainium_furnace', 'ironfurnaces:upgrade_allthemodium', 'ironfurnaces:upgrade_vibranium', 'ironfurnaces:upgrade_unobtainium', 'ironfurnaces:item_heater', 'ironfurnaces:augment_blasting', 'ironfurnaces:augment_smoking', 'ironfurnaces:heater', 'ironfurnaces:augment_generator'])

    //literally compressium
    event.hide(['compressium:netherite_1', 'compressium:dirt_1', 'compressium:redstone_1', 'compressium:andesite_1', 'compressium:diorite_1', 'compressium:copper_1', 'compressium:granite_1', 'compressium:stone_1', 'compressium:netherrack_1', 'compressium:soulsand_1', 'compressium:iron_1', 'compressium:gravel_1', 'compressium:snow_1', 'compressium:gold_1', 'compressium:diamond_1', 'compressium:emerald_1', 'compressium:clay_1', 'compressium:coal_1', 'compressium:endstone_1', 'compressium:obsidian_1', 'compressium:lapis_1', 'compressium:quartz_1'])

    //dml
    event.hide(['hostilenetworks:twilight_prediction'])

    //Extended Crafting
    event.hide([Item.of('extendedcrafting:recipe_maker', '{Shapeless:0b,Type:"CraftTweaker"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze"}')])
    event.hide(['extendedcrafting:enhanced_ender_catalyst', 'extendedcrafting:enhanced_redstone_catalyst', 'extendedcrafting:enhanced_redstone_component', 'extendedcrafting:enhanced_ender_component', 'extendedcrafting:ender_component', 'extendedcrafting:black_iron_block', 'extendedcrafting:black_iron_ingot', 'extendedcrafting:redstone_ingot_block', 'extendedcrafting:redstone_ingot', 'extendedcrafting:enhanced_redstone_ingot_block', 'extendedcrafting:enhanced_redstone_ingot', 'extendedcrafting:ender_ingot_block', 'extendedcrafting:ender_ingot', 'extendedcrafting:enhanced_ender_ingot_block', 'extendedcrafting:enhanced_ender_ingot', 'extendedcrafting:ender_star_block', 'extendedcrafting:ender_star', 'extendedcrafting:flux_star_block', 'extendedcrafting:flux_star', 'extendedcrafting:frame', 'extendedcrafting:basic_table', 'extendedcrafting:basic_auto_table', 'extendedcrafting:compressor', 'extendedcrafting:ender_alternator', 'extendedcrafting:ender_crafter', 'extendedcrafting:auto_ender_crafter', 'extendedcrafting:flux_alternator', 'extendedcrafting:flux_crafter', 'extendedcrafting:auto_flux_crafter', 'extendedcrafting:black_iron_slate', 'extendedcrafting:ender_catalyst'])
    event.hide(['extendedcrafting:black_iron_nugget', 'extendedcrafting:redstone_nugget', 'extendedcrafting:enhanced_redstone_nugget', 'extendedcrafting:ender_nugget', 'extendedcrafting:enhanced_ender_nugget'])
        //Avaritia
    event.hide(['avaritia:emerald_singularity', 'avaritia:netherite_singularity', 'avaritia:diamond_singularity', 'avaritia:quartz_singularity', 'avaritia:copper_singularity', 'avaritia:redstone_singularity', 'avaritia:lapis_singularity', 'avaritia:gold_singularity', 'avaritia:iron_singularity', 'avaritia:amethyst_singularity'])

    //Thermal
    event.hide(['thermal:dynamo_gourmand', 'thermal:dynamo_disenchantment', 'thermal:dynamo_lapidary', 'systeams:numismatic_boiler', 'systeams:magmatic_boiler', 'systeams:compression_boiler', 'systeams:gourmand_boiler', 'systeams:lapidary_boiler', 'systeams:disenchantment_boiler'])

    //EnderIO
    event.hide(['enderio:energy_conduit', 'enderio:plant_matter_green', 'enderio:plant_matter_brown', 'enderio:clayed_glowstone', 'enderio:flour', 'enderio:organic_green_dye', 'enderio:organic_brown_dye', 'enderio:industrial_insulation_block'])

    //EnderIO (grinding balls) haha grind my balls -clown
    event.hide(['enderio:soularium_grinding_ball', 'enderio:conductive_alloy_grinding_ball', 'enderio:pulsating_alloy_grinding_ball', 'enderio:redstone_alloy_grinding_ball', 'enderio:energetic_alloy_grinding_ball', 'enderio:vibrant_alloy_grinding_ball', 'enderio:copper_alloy_grinding_ball', 'enderio:dark_steel_grinding_ball', 'enderio:end_steel_grinding_ball'])

    //GT Steam Age
    var gtMachines = ['extractor', 'macerator', 'compressor', 'forge_hammer', 'furnace', 'alloy_smelter']

    gtMachines.forEach(machine => {
        event.hide(['gtceu:lp_steam_' + machine, 'gtceu:hp_steam_' + machine])
    })

    //TelePastries
    event.hide(['telepastries:lost_city_cake', 'telepastries:custom_cake2', 'telepastries:custom_cake3', 'telepastries:twilight_cake'])

    //Jetpacks
    event.hide([Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:dark_soularium"}').strongNBT(), Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:Fluxed"}').strongNBT(), 'ironjetpacks:capacitor', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}').strongNBT()])
    event.hide(['ironjetpacks:basic_coil', 'ironjetpacks:advanced_coil', 'ironjetpacks:elite_coil', 'ironjetpacks:ultimate_coil'])

    event.hide([/antiblocksrechiseled:.*?pressure_plate\S*/g, /antiblocksrechiseled:.*?button\S*/g, /antiblocksrechiseled:.*?stair\S*/g, /antiblocksrechiseled:.*?slab\S*/g, /antiblocksrechiseled:.*?border\b/g, /antiblocksrechiseled:.*?wool\S*/g])

    event.hide('chiselandbits:block_bit')
})

JEIEvents.removeCategories(event => {
    event.remove('minecraft:plugins/tag')
    event.remove(['thermal:gourmand_fuel', 'thermal:disenchantement_fuel', 'thermal:lapidary_fuel'])
    event.remove(['enderio:alloy_smelting', 'thermal:furnace'])
})

/*JEIEvents.groupEntries(event => {

    const useNbt = ['chiselsandbits:block_bit']

    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:jei_groups/${namespace}/${path}`, item.name, item)
    })


})*/