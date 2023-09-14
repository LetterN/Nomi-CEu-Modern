//Microminers
StartupEvents.registry('item', event => {

    event.create('microminer_t1').displayName("\u00A7eSteel Plated Micro Miner [Tier One]").maxStackSize(16)
    event.create('microminer_t2').displayName("\u00A7eTitanium Plated Micro Miner [Tier Two]").maxStackSize(16)
    event.create('microminer_t3').displayName("\u00A7eTungsten Carbide Plated Micro Miner [Tier Three]").maxStackSize(16)
    event.create('microminer_t4').displayName("\u00A7eSignalum Plated Micro Miner [Tier Four]").maxStackSize(16)
    event.create('microminer_t5').displayName("\u00A7bIridium Plated Micro Miner [Tier Five]").maxStackSize(16)
    event.create('microminer_t6').displayName("\u00A7bEnderium Plated Micro Miner [Tier Six]").maxStackSize(16)
    event.create('microminer_t7').displayName("\u00A7bDraconium Plated Micro Dragon Hunter [Tier Seven]").maxStackSize(16)
    event.create('microminer_t8').displayName("\u00A7dCrystal Matrix Plated Micro Leviathan Slayer [Tier Eight]").maxStackSize(16)
    event.create('microminer_t9').displayName("\u00A7dEternium Plated Micro Sun Eater [Tier Nine]").maxStackSize(16)
    event.create('microminer_t10').displayName("\u00A7dNeutronium Plated Micro Universe Harvester [Tier Ten]").maxStackSize(16)

    //Microminer Components

    event.create('basic_mining_laser').displayName("\u00A7eBasic Mining Laser")
    event.create('supercharged_laser_array').displayName("\u00A7eSupercharged Laser Array")
    event.create('basic_micro_miner_guidance_system').displayName("\u00A7eBasic Micro Miner Guidance System")
    event.create('advanced_micro_miner_guidance_system').displayName("\u00A7eAdvanced Micro Miner Guidance System")
    event.create('reinforced_mining_laser').displayName("\u00A7bReinforced Mining Laser")
    event.create('warp_engine').displayName("\u00A7dWarp Engine")
    event.create('universal_navigator').displayName("\u00A7dUniversal Navigator")
    event.create('quantum_fluxed_eternium_heavy_plating').displayName("\u00A7dQuantum Fluxed Eternium Heavy Plating")
    event.create('quantum_flux').displayName("\u00A7dQuantum Flux")
    event.create('gem_sensor').displayName("Gemstone Sensor")

    //Nomi Coins
    event.create('nomi_penny').displayName("Nomipenny [1]")
    event.create('nomi_nickel').displayName("\u00A7eNominickel [5]")
    event.create('nomi_quarter').displayName("\u00A7bNomiquarter [25]")
    event.create('nomi_dollar').displayName("\u00A7dNomidollar [100]")

    //widgets
    event.create('wooden_widget').displayName("Wooden Widget")
    event.create('wooden_widget_left').displayName("Wooden Widget Left Part")
    event.create('wooden_widget_right').displayName("Wooden Widget Right Part")
    event.create('stone_widget').displayName("Stone Widget")
    event.create('stone_widget_up').displayName("Stone Widget Up Side")
    event.create('stone_widget_down').displayName("Stone Widget Down Side")
    event.create('alloy_widget').displayName("Alloy Widget")
    event.create('ender_widget').displayName("Ender Widget")

    //Space Items.  
    event.create('radiation_layer').displayName("Radiaton Layer")
    event.create('pressure_layer').displayName("Pressure Layer")
    event.create('thermal_cloth').displayName("Thermal Cloth")
    event.create('unprepared_space_helmet').displayName("Unprepared Space Helmet")
    event.create('unprepared_space_chestpiece').displayName("Unprepared Space Chestpiece")
    event.create('unprepared_space_leggings').displayName("Unprepared Space Leggings")
    event.create('unprepared_space_boots').displayName("Unprepared Space Boots")

    //Data
    event.create('lair_of_the_chaos_guardian_data').displayName("\u00A7dLair Of The Chaos Guardian Data")
    event.create('stellar_creation_data').displayName("\u00A7bStellar Creation Data")
    event.create('universe_creation_data').displayName("\u00A7dUniverse Creation Data")
    event.create('impossible_realm_data').displayName("\u00A7bImpossible Realm Data")
    event.create('wither_realm_data').displayName("\u00A7dWither Realm Data")
    event.create('dragon_lair_data').displayName("\u00A7dDragon Lair Data")

    //Solidified Items
    event.create('solidified_argon').displayName("Solidified Argon")
    event.create('solidified_chlorine').displayName("Solidified Chlorine")
    event.create('solidified_fluorine').displayName("Solidified Fluorine")
    event.create('solidified_helium').displayName("Solidified Helium")
    event.create('solidified_hydrogen').displayName("Solidified Hydrogen")
    event.create('solidified_krypton').displayName("Solidified Krypton")
    event.create('solidified_mercury').displayName("Solidified Mercury")
    event.create('solidified_neon').displayName("Solidified Neon")
    event.create('solidified_nitrogen').displayName("Solidified Nitrogen")
    event.create('solidified_oxygen').displayName("Solidified Oxygen")
    event.create('solidifie_radon').displayName("Solidified Radon")
    event.create('solidified_xenon').displayName("Solidified Xenon")

    //Stabilized Items
    event.create('stabilized_einsteinium').displayName("\u00A7dStabilized Einsteinium")
    event.create('stabilized_berkelium').displayName("Stabilized Berkelium")
    event.create('stabilized_neptunium').displayName("Stabilized Neptunium")
    event.create('stabilized_plutonium').displayName("Stabilized Plutonium")
    event.create('stabilized_uranium').displayName("Stabilized Uranium")
    event.create('stabilized_curium').displayName("Stabilized Curium")
    event.create('stabilized_californium').displayName("Stabilized Californium")
    event.create('stabilized_americium').displayName("Stabilized Americium")

    //End Game Items
    event.create('heart_of_a_universe').displayName("\u00A7dHeart Of A Universe")
    event.create('creative_portable_tank_mold').displayName("Creative Quantum Tank Data")
    event.create('exotic_materials_catalyst').displayName("Exotic Materials Catalyst")
    event.create('eternal_catalyst').displayName("Eternal Catalyst")
    event.create('ultimate_gem').displayName("\u00A7dUltimate Gem").glow(true)

    //Misc Items
    event.create('grains_of_innocence').displayName("Grains of Innocence")
    event.create('radium_salt').displayName("Radium Salt").rarity('Epic')
    event.create('moon_dust').displayName("Moon Dust")
        //public static ItemBase REDSTONE_ARMOR_PLATE;
        //public static ItemBase CARBON_ARMOR_PLATE;
        //public static ItemBase LAPIS_ARMOR_PLATE;
        //TODO: GIVE CAPACITORS LORE AND NBT FOR THEM TO WORK
    event.create('compressed_octadic_capacitor').displayName("Compressed Octadic Capacitor")
    event.create('double_compressed_octadic_capacitor').displayName("Double Compressed Octadic Capacitor")
        // Core and North are part of the Crafting Nether Star mod.
    event.create('nether_star_north').displayName("Nether Star North Tip")
    event.create('nether_star_south').displayName("Nether Star South Tip")
    event.create('nether_star_east').displayName("Nether Star East Tip")
    event.create('nether_star_west').displayName("Nether Star West Tip")
    event.create('nether_star_center').displayName("Nether Star Center")
        // Hydrogen is part of Solidified Items section.
    event.create('dense_hydrogen').displayName("Dense Hydrogen").rarity('Uncommon')
    event.create('ultra_dense_hydrogen').displayName("Ultra Dense Hydrogen").rarity('Rare')

    //TODO: Add Hand Framing Tool
    event.create('hand_framing_tool').displayName("Hand Framing Tool [W.I.P]")

    //Add Thermal Expansion items that were missing
    event.create('aerotheum_dust').texture('kubejs:item/aerotheum_blend').displayName('\u00A77Aerotheum Dust')
    event.create('cryotheum_dust').texture('kubejs:item/cryotheum_blend').displayName('\u00A7bCryotheum Dust')
    event.create('petrotheum_dust').texture('kubejs:item/petrotheum_blend').displayName('\u00A78Petrotheum Dust')
    event.create('pyrotheum_dust').texture('kubejs:item/pyrotheum_blend').displayName('\u00A76Pyrotheum dust')
    event.create('primal_mana').displayName("Primal Mana Dust").rarity('epic')

    //random AE2 stuff
    event.create('fluix_plate').displayName("Fluix Plate").tag('forge:plates/fluix')

})


Platform.mods.kubejs.name = "Nomi Labs"