ServerEvents.recipes(event => {

    event.remove({ output: ['ae2:vibration_chamber', 'hammerlib:gears/copper'] })
    event.remove({ id: 'avaritia:neutronium_nugget' })

    //Extended Crafting
    event.remove({ output: [Item.of('extendedcrafting:recipe_maker', '{Shapeless:0b,Type:"CraftTweaker"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze"}')] })

    //Avaritia
    event.remove({ output: ['avaritia:emerald_singularity', 'avaritia:netherite_singularity', 'avaritia:diamond_singularity', 'avaritia:quartz_singularity', 'avaritia:copper_singularity', 'avaritia:redstone_singularity', 'avaritia:lapis_singularity', 'avaritia:gold_singularity', 'avaritia:iron_singularity', 'avaritia:amethyst_singularity'] })

    //GT
    event.remove({ id: "gtceu:shapeless/fireclay_dust" })
        //FIXME will get fixed
    event.remove({ id: "gtceu:centrifuge/decomposition_centrifuging__fireclay" })

    //Thermal
    event.remove({ output: ['thermal:dynamo_gourmand', 'thermal:dynamo_lapidary', 'thermal:dynamo_disenchantment', 'systeams:numismatic_boiler', 'systeams:magmatic_boiler', 'systeams:compression_boiler', 'systeams:gourmand_boiler', 'systeams:lapidary_boiler', 'systeams:disenchantment_boiler'] })
    event.remove({ id: 'systeams:boilers/stirling' })
		event.remove({ id: /thermal:parts.*_gear/ })

    //ArmorPlus
    event.remove({ output: ["armorplus:the_ultimate_material"] });

    // Misc broken recipes
    event.remove({ id: 'minecraft:netherite_spikes_smithing' })
    event.remove({ id: 'storagedrawers:conversion_upgrade' })

    //AA
    event.remove({ output: ['gtceu:flawless_palis_empowered_gem', 'gtceu:flawless_diamatine_empowered_gem', 'gtceu:flawless_emeradic_empowered_gem', 'gtceu:restonia_empowered_rod', 'gtceu:enori_empowered_rod', 'gtceu:void_empowered_rod', 'gtceu:palis_empowered_rod', 'gtceu:diamatine_empowered_rod', 'gtceu:emeradic_empowered_rod', 'gtceu:restonia_empowered_perfect', 'gtceu:enori_empowered_perfect', 'gtceu:void_empowered_perfect', 'gtceu:palis_empowered_perfect', 'gtceu:diamatine_empowered_perfect', 'gtceu:emeradic_empowered_perfect', 'gtceu:exquisite_restonia_empowered_gem', 'gtceu:exquisite_enori_empowered_gem', 'gtceu:exquisite_void_empowered_gem', 'gtceu:exquisite_palis_empowered_gem', 'gtceu:exquisite_diamatine_empowered_gem', 'gtceu:exquisite_emeradic_empowered_gem', 'gtceu:restonia_empowered_dust', 'gtceu:enori_empowered_dust', 'gtceu:void_empowered_dust', 'gtceu:palis_empowered_dust', 'gtceu:diamatine_empowered_dust', 'gtceu:emeradic_empowered_dust', 'gtceu:tiny_restonia_empowered_dust', 'gtceu:tiny_enori_empowered_dust', 'gtceu:tiny_void_empowered_dust', 'gtceu:tiny_palis_empowered_dust', 'gtceu:tiny_diamatine_empowered_dust', 'gtceu:tiny_emeradic_empowered_dust', 'gtceu:flawless_restonia_empowered_gem', 'gtceu:flawless_enori_empowered_gem', 'gtceu:flawless_void_empowered_gem'] })
    event.remove({ output: ['gtceu:small_emeradic_empowered_dust', 'gtceu:small_diamatine_empowered_dust', 'gtceu:small_palis_empowered_dust', 'gtceu:small_void_empowered_dust', 'gtceu:small_enori_empowered_dust', 'gtceu:small_restonia_empowered_dust'] })
    event.remove({ output: ['gtceu:diamatine_perfect', 'gtceu:exquisite_diamatine_gem', 'gtceu:diamatine_dust', 'gtceu:tiny_diamatine_dust', 'gtceu:flawless_diamatine_gem', 'gtceu:diamatine_rod', 'gtceu:diamatine_plate', 'gtceu:small_diamatine_dust', 'gtceu:void_perfect', 'gtceu:exquisite_void_gem', 'gtceu:void_dust', 'gtceu:tiny_void_dust', 'gtceu:flawless_void_gem', 'gtceu:void_rod', 'gtceu:void_plate', 'gtceu:small_void_dust', 'gtceu:emeradic_perfect', 'gtceu:exquisite_emeradic_gem', 'gtceu:emeradic_dust', 'gtceu:tiny_emeradic_dust', 'gtceu:flawless_emeradic_gem', 'gtceu:emeradic_rod', 'gtceu:emeradic_plate', 'gtceu:small_emeradic_dust', 'gtceu:enori_perfect', 'gtceu:exquisite_enori_gem', 'gtceu:enori_dust', 'gtceu:tiny_enori_dust', 'gtceu:flawless_enori_gem', 'gtceu:enori_rod', 'gtceu:enori_plate', 'gtceu:small_enori_dust'] })
    event.remove({ output: ['gtceu:restonia_perfect', 'gtceu:exquisite_restonia_gem', 'gtceu:restonia_dust', 'gtceu:tiny_restonia_dust', 'gtceu:flawless_restonia_gem', 'gtceu:restonia_rod', 'gtceu:restonia_plate', 'gtceu:small_restonia_dust', 'gtceu:palis_perfect', 'gtceu:exquisite_palis_gem', 'gtceu:palis_dust', 'gtceu:tiny_palis_dust', 'gtceu:flawless_palis_gem', 'gtceu:palis_rod', 'gtceu:palis_plate', 'gtceu:small_palis_dust'] })

    //NC
    event.remove({ output: ["nuclearcraft:hard_carbon_ingot"] });
    event.remove({ output: ["nuclearcraft:tough_alloy_ingot"] });

})