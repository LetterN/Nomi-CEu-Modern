// priority: 0

ServerEvents.recipes(event => {

    event.remove({ id: "watercondenser:watercondenser" })

    event.shaped(
        "watercondenser:watercondenser", [
            "AAA",
            "B B",
            "AAA"
        ], {
            A: "gtceu:wrought_iron_plate",
            B: "minecraft:water_bucket"
        }
    )

    //HUGE REWORK NUCLEARCRAFT
    event.remove({ output: ["nuclearcraft:supercooler", "nuclearcraft:rock_crusher", "nuclearcraft:decay_hastener", "nuclearcraft:irradiator", "nuclearcraft:nuclear_furnace", "nuclearcraft:extractor", "nuclearcraft:electrolyzer", "nuclearcraft:pressurizer", "nuclearcraft:alloy_smelter", "nuclearcraft:centrifuge", "nuclearcraft:manufactory", "nuclearcraft:gas_scrubber", "nuclearcraft:fluid_enricher", "nuclearcraft:isotope_separator", "nuclearcraft:fluid_infuser", "nuclearcraft:chemical_reactor", "nuclearcraft:analyzer", "nuclearcraft:ingot_former", "nuclearcraft:pump", "nuclearcraft:fuel_reprocessor", "nuclearcraft:leacher", "nuclearcraft:crystallizer", "nuclearcraft:assembler", "nuclearcraft:steam_turbine", "nuclearcraft:melter"] })
    event.remove({ output: ["nuclearcraft:nitrogen_collector", "nuclearcraft:compact_nitrogen_collector", "nuclearcraft:lava_collector", "nuclearcraft:dense_nitrogen_collector", "nuclearcraft:compact_helium_collector", "nuclearcraft:helium_collector", "nuclearcraft:dense_helium_collector"] })
    event.remove({ output: ["nuclearcraft:foursmore", "nuclearcraft:evenmoresmore", "nuclearcraft:moresmore", "nuclearcraft:smore"] })
})

// Live Fuel decomp
// Could also use this to change how these fuels are created? 
ServerEvents.recipes(event => {

    function decomp(name, fuel, ing1, ing2) {
        event.recipes.gtceu.thermal_centrifuge(name + "decomp")
            .itemInputs(fuel)
            .itemOutputs(ing1, ing2)
            .duration(3200)
            .EUt(48)
    }

        function decomp_single(name, fuel, ing) {
        event.recipes.gtceu.thermal_centrifuge(name + "decomp")
            .itemInputs(fuel)
            .itemOutputs(ing)
            .duration(3200)
            .EUt(48)
    }
	
	decomp_single("thorium_tbu_232", "nuclearcraft:fuel_thorium_tbu", "9x nuclearcraft:thorium_232");
	decomp("uranium_leu_233", "nuclearcraft:fuel_uranium_leu_233", "8x gtceu:uranium_dust", "nuclearcraft:uranium_233");
	decomp("uranium_heu_233", "nuclearcraft:fuel_uranium_heu_233", "5x gtceu:uranium_dust", "4x nuclearcraft:uranium_233");
	decomp("uranium_leu_235", "nuclearcraft:fuel_uranium_leu_235", "8x gtceu:uranium_dust", "gtceu:uranium_235_dust");
	decomp("uranium_heu_235", "nuclearcraft:fuel_uranium_heu_235", "5x gtceu:uranium_dust", "4x gtceu:uranium_235_dust");
	decomp("neptunium_len_236", "nuclearcraft:fuel_neptunium_len_236", "8x nuclearcraft:neptunium_237", "nuclearcraft:neptunium_236");
	decomp("neptunium_hen_236", "nuclearcraft:fuel_neptunium_hen_236", "5x nuclearcraft:neptunium_237", "4x nuclearcraft:neptunium_236");
	decomp("plutonium_lep_239", "nuclearcraft:fuel_plutonium_lep_239", "8x nuclearcraft:plutonium_242", "gtceu:plutonium_dust");
	decomp("plutonium_hep_239", "nuclearcraft:fuel_plutonium_hep_239", "5x nuclearcraft:plutonium_242", "4x gtceu:plutonium_dust");
	decomp("plutonium_lep_241", "nuclearcraft:fuel_plutonium_lep_241", "8x nuclearcraft:plutonium_242", "gtceu:plutonium_241_dust");
	decomp("plutonium_hep_241", "nuclearcraft:fuel_plutonium_hep_241", "5x nuclearcraft:plutonium_242", "4x gtceu:plutonium_241_dust");
	decomp("americium_lea_242", "nuclearcraft:fuel_americium_lea_242", "8x nuclearcraft:americium_243", "nuclearcraft:americium_242");
	decomp("americium_hea_242", "nuclearcraft:fuel_americium_hea_242", "5x nuclearcraft:americium_243", "4x nuclearcraft:americium_242");
	decomp("curium_lecm_243", "nuclearcraft:fuel_curium_lecm_243", "8x nuclearcraft:curium_246", "nuclearcraft:curium_243");
	decomp("curium_hecm_243", "nuclearcraft:fuel_curium_hecm_243", "5x nuclearcraft:curium_246", "4x nuclearcraft:curium_243");
	decomp("curium_lecm_245", "nuclearcraft:fuel_curium_lecm_245", "8x nuclearcraft:curium_246", "nuclearcraft:curium_245");
	decomp("curium_hecm_245", "nuclearcraft:fuel_curium_hecm_245", "5x nuclearcraft:curium_246", "4x nuclearcraft:curium_245");
	decomp("curium_lecm_247", "nuclearcraft:fuel_curium_lecm_247", "8x nuclearcraft:curium_246", "nuclearcraft:curium_247");
	decomp("curium_hecm_247", "nuclearcraft:fuel_curium_hecm_247", "5x nuclearcraft:curium_246", "4x nuclearcraft:curium_247");
	decomp("berkelium_leb_248", "nuclearcraft:fuel_berkelium_leb_248", "8x nuclearcraft:berkelium_247", "nuclearcraft:berkelium_248");
	decomp("berkelium_heb_248", "nuclearcraft:fuel_berkelium_heb_248", "5x nuclearcraft:berkelium_247", "4x nuclearcraft:berkelium_248");
	decomp("californium_lecf_249", "nuclearcraft:fuel_californium_lecf_249", "8x nuclearcraft:californium_252", "nuclearcraft:californium_249");
	decomp("californium_hecf_249", "nuclearcraft:fuel_californium_hecf_249", "5x nuclearcraft:californium_252", "4x nuclearcraft:californium_249");
	decomp("californium_lecf_251", "nuclearcraft:fuel_californium_lecf_251", "8x nuclearcraft:californium_252", "nuclearcraft:californium_251");
	decomp("californium_hecf_251", "nuclearcraft:fuel_californium_hecf_251", "5x nuclearcraft:californium_252", "4x nuclearcraft:californium_251");
})

// I feel like theres a more interesting way to do nuclear reprocessing without upsetting the balance of the pack, but if we don"t, just use the above function and edit it a little

// 