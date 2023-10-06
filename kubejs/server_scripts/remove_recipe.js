ServerEvents.recipes(event => {

    event.remove({ output: ['ae2:vibration_chamber', 'hammerlib:gears/copper'] })
    event.remove({ id: 'avaritia:neutronium_nugget' })
    event.remove({ type: "ad_astra:compressing" })
    event.remove({ type: "ad_astra:cryo_fuel_conversion" })
    event.remove({ type: "ad_astra:fuel_conversion" })
    event.remove({ id: "ad_astra:recipes/steel_ingot_from_blasting_iron_ingot" })

    //Extended Crafting
    event.remove({ output: [Item.of('extendedcrafting:recipe_maker', '{Shapeless:0b,Type:"CraftTweaker"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze"}')] })

    //Avaritia
    event.remove({ output: ['avaritia:emerald_singularity', 'avaritia:netherite_singularity', 'avaritia:diamond_singularity', 'avaritia:quartz_singularity', 'avaritia:copper_singularity', 'avaritia:redstone_singularity', 'avaritia:lapis_singularity', 'avaritia:gold_singularity', 'avaritia:iron_singularity', 'avaritia:amethyst_singularity'] })

    //GT
    event.remove({ id: "gtceu:shapeless/fireclay_dust" })
        //FIXME will get fixed
    event.remove({ id: "gtceu:centrifuge/decomposition_centrifuging__fireclay" })
})