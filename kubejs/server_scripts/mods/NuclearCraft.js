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

    
    function decompdepleted(name, inputdepletedufuel, out, out2, out3, out4) {
        event.recipes.gtceu.centrifuge(name + "decompdepleted")
            .itemInputs(inputdepletedufuel)
            .itemOutputs(out,out2,out3,out4)
            .chancedOutput((out,out2,out3,out4), 5000, 500)
            .chancedOutput((out,out2,out3,out4), 5000, 500)
            .duration(3200)
            .EUt(48)
    }
    
    
    decompdepleted('depleted_californium_hecf_251','nuclearcraft:depleted_fuel_californium_hecf_251','2x nuclearcraft:californium_251','2x nuclearcraft:californium_252','2x nuclearcraft:californium_252','2x nuclearcraft:californium_252')
    decompdepleted('depleted_neptunium_len_236','nuclearcraft:depleted_fuel_neptunium_len_236','nuclearcraft:neptunium_237','4x nuclearcraft:plutonium_242','nuclearcraft:americium_242','3x nuclearcraft:americium_243')
    decompdepleted('depleted_thorium_tbu','nuclearcraft:depleted_fuel_thorium_tbu','2x nuclearcraft:uranium_233','8x gtceu:uranium_235_nugget','nuclearcraft:neptunium_236','4x nuclearcraft:neptunium_237')
    decompdepleted('depleted_uranium_leu_233','nuclearcraft:depleted_fuel_uranium_leu_233','4x nuclearcraft:plutonium_242','4x gtceu:plutonium_nugget','4x gtceu:plutonium_241_nugget','3x nuclearcraft:americium_243')
    decompdepleted('depleted_uranium_heu_233','nuclearcraft:depleted_fuel_uranium_heu_233','4x nuclearcraft:neptunium_236','nuclearcraft:neptunium_237','2x nuclearcraft:plutonium_242','nuclearcraft:americium_243')
    decompdepleted('depleted_uranium_leu_235','nuclearcraft:depleted_fuel_uranium_leu_235','nuclearcraft:neptunium_237','40x gtceu:uranium_nugget','8x gtceu:plutonium_nugget','8x gtceu:plutonium_241_nugget')
    decompdepleted('depleted_uranium_heu_235','nuclearcraft:depleted_fuel_uranium_heu_235','2x nuclearcraft:neptunium_237','20x gtceu:uranium_nugget','4x gtceu:plutonium_nugget','3x nuclearcraft:plutonium_242')
    decompdepleted('depleted_neptunium_hen_236','nuclearcraft:depleted_fuel_neptunium_hen_236','nuclearcraft:plutonium_238','16x gtceu:uranium_nugget','8x gtceu:plutonium_nugget','4x nuclearcraft:plutonium_242')
    decompdepleted('depleted_plutonium_lep_239','nuclearcraft:depleted_fuel_plutonium_lep_239','3x nuclearcraft:plutonium_242','nuclearcraft:curium_243','8x gtceu:plutonium_nugget','3x nuclearcraft:curium_246')
    decompdepleted('depleted_plutonium_hep_239','nuclearcraft:depleted_fuel_plutonium_hep_239','nuclearcraft:americium_241','3x nuclearcraft:americium_242','nuclearcraft:curium_245','3x nuclearcraft:curium_246')
    decompdepleted('depleted_plutonium_lep_241','nuclearcraft:depleted_fuel_plutonium_lep_241','nuclearcraft:plutonium_242','nuclearcraft:plutonium_242','nuclearcraft:americium_243','6x nuclearcraft:curium_246')
    decompdepleted('depleted_plutonium_hep_241','nuclearcraft:depleted_fuel_plutonium_hep_241','nuclearcraft:americium_241','nuclearcraft:curium_245','3x nuclearcraft:curium_246','3x nuclearcraft:curium_247')
    decompdepleted('depleted_americium_lea_242','nuclearcraft:depleted_fuel_americium_lea_242','nuclearcraft:curium_243','nuclearcraft:curium_245','5x nuclearcraft:curium_246','nuclearcraft:curium_247')
    decompdepleted('depleted_americium_hea_242','nuclearcraft:depleted_fuel_americium_hea_242','2x nuclearcraft:curium_245','4x nuclearcraft:curium_246','nuclearcraft:curium_247','nuclearcraft:berkelium_247')
    decompdepleted('depleted_curium_lecm_243','nuclearcraft:depleted_fuel_curium_lecm_243','4x nuclearcraft:curium_246','2x nuclearcraft:berkelium_247','nuclearcraft:berkelium_248','nuclearcraft:californium_249')
    decompdepleted('depleted_curium_hecm_243','nuclearcraft:depleted_fuel_curium_hecm_243','3x nuclearcraft:curium_246','3x nuclearcraft:berkelium_247','nuclearcraft:berkelium_248','nuclearcraft:californium_249')
    decompdepleted('depleted_curium_lecm_245','nuclearcraft:depleted_fuel_curium_lecm_245','5x nuclearcraft:berkelium_247','nuclearcraft:berkelium_248','nuclearcraft:californium_249','2x nuclearcraft:californium_252')
    decompdepleted('depleted_curium_hecm_245','nuclearcraft:depleted_fuel_curium_hecm_245','6x nuclearcraft:berkelium_247','nuclearcraft:berkelium_248','nuclearcraft:californium_249','nuclearcraft:californium_251')
    decompdepleted('depleted_curium_lecm_247','nuclearcraft:depleted_fuel_curium_lecm_247','3x nuclearcraft:berkelium_247','nuclearcraft:berkelium_248','nuclearcraft:californium_251','4x nuclearcraft:californium_252')
    decompdepleted('depleted_curium_hecm_247','nuclearcraft:depleted_fuel_curium_hecm_247','nuclearcraft:berkelium_248','nuclearcraft:californium_249','3x nuclearcraft:californium_251','3x nuclearcraft:californium_252')
    decompdepleted('depleted_berkelium_leb_248','nuclearcraft:depleted_fuel_berkelium_leb_248','nuclearcraft:californium_249','nuclearcraft:californium_251','3x nuclearcraft:californium_252','3x nuclearcraft:californium_252')
    decompdepleted('depleted_berkelium_heb_248','nuclearcraft:depleted_fuel_berkelium_heb_248','nuclearcraft:californium_250','nuclearcraft:californium_251','3x nuclearcraft:californium_252','3x nuclearcraft:californium_252')
    decompdepleted('depleted_californium_lecf_249','nuclearcraft:depleted_fuel_californium_lecf_249','2x nuclearcraft:californium_250','nuclearcraft:californium_251','2x nuclearcraft:californium_252','2x nuclearcraft:californium_252')
    decompdepleted('deplered_californium_hecf_249','nuclearcraft:depleted_fuel_californium_hecf_249','4x nuclearcraft:californium_250','2x nuclearcraft:californium_251','nuclearcraft:californium_252','nuclearcraft:californium_252')
    decompdepleted('depleted_californium_lecf_251','nuclearcraft:depleted_fuel_californium_lecf_251','nuclearcraft:californium_251','2x nuclearcraft:californium_252','2x nuclearcraft:californium_252','2x nuclearcraft:californium_252')
    
    })

// I feel like theres a more interesting way to do nuclear reprocessing without upsetting the balance of the pack, but if we don"t, just use the above function and edit it a little

// 