ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.combination(
        "gtceu:restonia_empowered_block",
        "gtceu:restonia_block",
        ["gtceu:red_alloy_ingot", "gtceu:almandine_gem", Item.of('gtceu:glass_vial', '{Fluid:{Amount:1000,FluidName:"gtceu:sulfuric_acid"}}'), "extendedcrafting:the_ultimate_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:diamatine_empowered_block",
        "gtceu:diamatine_block",
        ["extendedcrafting:ender_star", "extendedcrafting:crystaltine_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:nitrogen_dioxide"}}'), "extendedcrafting:crystaltine_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:emeradic_empowered_block",
        "gtceu:emeradic_block",
        ["kubejs:stabilized_uranium", "gtceu:vibrant_alloy_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:argon"}}').strongNBT(), "extendedcrafting:ultimate_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:enori_empowered_block",
        "gtceu:enori_block",
        ["gtceu:apatite_gem", "gtceu:end_steel_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:helium"}}').strongNBT(), "extendedcrafting:basic_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:palis_empowered_block",
        "gtceu:palis_block",
        ["gtceu:sapphire_gem", "minecraft:bedrock", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(), "extendedcrafting:elite_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:void_empowered_block",
        "gtceu:void_block",
        ["gtceu:black_quartz_gem", "gtceu:dark_steel_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:oil"}}').strongNBT(), "extendedcrafting:advanced_component"],
        4000000, 400000
    )
})