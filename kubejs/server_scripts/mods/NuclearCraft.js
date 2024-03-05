// priority: 0

ServerEvents.recipes(event => {

    event.remove({ id: 'watercondenser:watercondenser' })

    event.shaped(
        'watercondenser:watercondenser', [
            'AAA',
            'B B',
            'AAA'
        ], {
            A: 'gtceu:wrought_iron_plate',
            B: 'minecraft:water_bucket'
        }
    )

    //HUGE REWORK NUCLEARCRAFT
    event.remove({ output: ['nuclearcraft:supercooler', 'nuclearcraft:rock_crusher', 'nuclearcraft:decay_hastener', 'nuclearcraft:irradiator', 'nuclearcraft:nuclear_furnace', 'nuclearcraft:extractor', 'nuclearcraft:electrolyzer', 'nuclearcraft:pressurizer', 'nuclearcraft:alloy_smelter', 'nuclearcraft:centrifuge', 'nuclearcraft:manufactory', 'nuclearcraft:gas_scrubber', 'nuclearcraft:fluid_enricher', 'nuclearcraft:isotope_separator', 'nuclearcraft:fluid_infuser', 'nuclearcraft:chemical_reactor', 'nuclearcraft:analyzer', 'nuclearcraft:ingot_former', 'nuclearcraft:pump', 'nuclearcraft:fuel_reprocessor', 'nuclearcraft:leacher', 'nuclearcraft:crystallizer', 'nuclearcraft:assembler', 'nuclearcraft:steam_turbine', 'nuclearcraft:melter'] })
    event.remove({ output: ['nuclearcraft:nitrogen_collector', 'nuclearcraft:compact_nitrogen_collector', 'nuclearcraft:lava_collector', 'nuclearcraft:dense_nitrogen_collector', 'nuclearcraft:compact_helium_collector', 'nuclearcraft:helium_collector', 'nuclearcraft:dense_helium_collector'] })
    event.remove({ output: ['nuclearcraft:foursmore', 'nuclearcraft:evenmoresmore', 'nuclearcraft:moresmore', 'nuclearcraft:smore'] })
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

    decomp("curium_hecm_243", "nuclearcraft:fuel_curium_hecm_243", "3x nuclearcraft:curium_243", "6x nuclearcraft:curium_246");
    decomp("curium_lecm_243", "nuclearcraft:fuel_curium_lecm_243", "nuclearcraft:curium_243", "8x nuclearcraft:curium_246");
    decomp("curium_hecm_245", "nuclearcraft:fuel_curium_hecm_245", "3x nuclearcraft:curium_245", "6x nuclearcraft:curium_246");
    decomp("curium_lecm_245", "nuclearcraft:fuel_curium_lecm_245", "nuclearcraft:curium_245", "8x nuclearcraft:curium_246");
    decomp("fuel_curium_hecm_247", "nuclearcraft:fuel_curium_hecm_247", "3x nuclearcraft:curium_247", "6x nuclearcraft:curium_246");
    decomp("fuel_curium_lecm_247", "nuclearcraft:fuel_curium_lecm_247", "nuclearcraft:curium_247", "8x nuclearcraft:curium_246");
    decomp("americium_hea_242", "nuclearcraft:fuel_americium_hea_242", "3x nuclearcraft:americium_242", "6x nuclearcraft:americium_243");
    decomp("americium_lea_242", "nuclearcraft:fuel_americium_lea_242", "nuclearcraft:americium_242", "8x nuclearcraft:americium_243");
    decomp("berkelium_heb_248", "nuclearcraft:fuel_berkelium_heb_248", "3x nuclearcraft:berkelium_248", "6x nuclearcraft:berkelium_247");
    decomp("berkelium_leb_248", "nuclearcraft:fuel_berkelium_heb_248", "2x nuclearcraft:berkelium_248", "8x nuclearcraft:berkelium_247");
    //TODO: finish
})

// I feel like theres a more interesting way to do nuclear reprocessing without upsetting the balance of the pack, but if we don't, just use the above function and edit it a little
