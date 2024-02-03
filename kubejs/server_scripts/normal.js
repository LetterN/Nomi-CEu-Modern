/*
    So basically for context, this file is porting most of normalmode.zs which has not been ported yet
    TODO: Maybe rearranging this later would be wise
*/

// CleanroomType = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType")

ServerEvents.recipes(event => {

    // Nether cake
    event.remove({ output: "telepastries:nether_cake" })
    event.shaped(
            "telepastries:nether_cake", [
                'NNN',
                'OBO',
                'SSS'
            ], {
                N: "gtceu:netherrack_dust",
                O: "minecraft:obsidian",
                B: "enderio:cake_base",
                S: "minecraft:soul_sand"
            }
        )
        // Nomi Steel
    event.remove({ type: "gtceu:electric_blast_furnace", output: "gtceu:steel_ingot" })

    var carbonSources = ["gtceu:coal_dust", "gtceu:charcoal_dust", "gtceu:carbon_dust"]

    // Alloy smelter steel
    carbonSources.forEach(carbonSource => {
        event.recipes.gtceu.alloy_smelter("steel_" + carbonSource.replace(/\W/g, '')) // The replace line removes non alphanumeric chars, regex is magic
            .itemInputs("#forge:ingots/wrought_iron", carbonSource)
            .itemOutputs("gtceu:steel_ingot")
            .duration(150)
            .EUt(16)
    })

    // Wrought iron per ingot
    event.remove({ type: "minecraft:smelting", output: "gtceu:wrought_iron_nugget" })
    event.recipes.minecraft.smelting("gtceu:wrought_iron_ingot", "minecraft:iron_ingot")

    // Dust hydration
    event.shapeless("minecraft:clay", ["kubejs:dust", "minecraft:water_bucket"])

    // Make clay electrolysis an LV recipe
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_clay" })
    event.recipes.gtceu.electrolyzer("clay_electrolysis_lv")
        .itemInputs("13x gtceu:clay_dust")
        .itemOutputs("2x gtceu:sodium_dust", "2x gtceu:silicon_dust", "gtceu:lithium_dust", "2x gtceu:aluminium_dust")
        .outputFluids("minecraft:water 6000")
        .duration(364)
        .EUt(15)

    // Change recipes for LV and MV macerators
    event.remove({ output: "gtceu:lv_macerator" })
    event.remove({ output: "gtceu:mv_macerator" })

    event.shaped(
        "gtceu:lv_macerator", [
            'PMB',
            'WWH',
            'CCW'
        ], {
            P: "gtceu:lv_electric_piston",
            M: "gtceu:lv_electric_motor",
            B: "gtceu:wrought_iron_buzz_saw_blade",
            W: "gtceu:tin_single_cable",
            H: "gtceu:lv_machine_hull",
            C: "#forge:circuits/lv"
        }
    )

    event.shaped(
        "gtceu:mv_macerator", [
            'PMB',
            'WWH',
            'CCW'
        ], {
            P: "gtceu:mv_electric_piston",
            M: "gtceu:mv_electric_motor",
            B: "gtceu:steel_buzz_saw_blade",
            W: "gtceu:copper_single_cable",
            H: "gtceu:mv_machine_hull",
            C: "#forge:circuits/mv"
        }
    )

    // Alternative LV piston recipe
    event.shaped(
        "gtceu:lv_electric_piston", [
            'PPP',
            'CRR',
            'CMG'
        ], {
            P: "gtceu:wrought_iron_plate",
            C: "gtceu:tin_single_cable",
            R: "gtceu:wrought_iron_rod",
            M: "gtceu:lv_electric_motor",
            G: "gtceu:wrought_iron_gear"
        }
    )

    // Make lowest tier fluid conduit pressurized
    event.remove({ output: "enderio:fluid_conduit" })
    event.shaped(
        "4x enderio:pressurized_fluid_conduit", [
            'BBB',
            'GGG',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            G: "minecraft:glass"
        }
    )

    // Steam oven & grinder
    event.remove({ output: "gtceu:steam_oven" })
    event.shaped(
        "gtceu:steam_oven", [
            'BGB',
            'FCF',
            'BGB'
        ], {
            B: "gtceu:steam_machine_casing",
            G: "gtceu:invar_gear",
            F: "gtceu:bronze_firebox_casing",
            C: "ironfurnaces:copper_furnace"
        }
    )

    event.remove({ output: "gtceu:steam_grinder" })
    event.shaped(
        "gtceu:steam_grinder", [
            'BGB',
            'BDB',
            'BGB'
        ], {
            B: "gtceu:steam_machine_casing",
            G: "gtceu:potin_gear",
            D: "minecraft:diamond"
        }
    )

    // nomi-style firebricks
    event.remove({ type: "minecraft:smelting", output: "gtceu:firebrick" })
    event.recipes.minecraft.smelting("gtceu:firebrick", "gtceu:fireclay_dust")

    // Complete PBF recipe replacement
    event.remove({ type: "gtceu:primitive_blast_furnace" })

    // Table with various burn time lengths
    var pbfTimes = [
        ["wrought_iron", "coal", 400],
        ["wrought_iron", "charcoal", 400],
        ["wrought_iron", "coke", 600],
        ["iron", "coal", 900],
        ["iron", "charcoal", 900],
        ["iron", "coke", 1500]
    ]


    // TODO: Make coal show up
    pbfTimes.forEach(recipeInfo => {
        var efficent = recipeInfo[1] == "coke"

        // Ingot form
        event.recipes.gtceu.primitive_blast_furnace("pbf_" + recipeInfo[0] + "_" + recipeInfo[1])
            .itemInputs((efficent ? "2x " : "") + "#forge:ingots/" + recipeInfo[0], ["#forge:gems/" + recipeInfo[1], "#forge:dusts/" + recipeInfo[1]])
            .itemOutputs((efficent ? "2x " : "") + "gtceu:steel_ingot", "gtceu:tiny_" + (efficent ? "" : "dark_") + "ash_dust")
            .duration(recipeInfo[2])

        // Block form
        event.recipes.gtceu.primitive_blast_furnace("pbf_block_" + recipeInfo[0] + "_" + recipeInfo[1])
            .itemInputs((efficent ? "2x " : "") + "#forge:storage_blocks/" + recipeInfo[0], "#forge:storage_blocks/" + recipeInfo[1])
            .itemOutputs((efficent ? "2x " : "") + "gtceu:steel_block", "gtceu:" + (efficent ? "" : "dark_") + "ash_dust")
            .duration(recipeInfo[2] * 9)
    })

    // data stuff
    event.recipes.gtceu.extractor("tank_data")
        .itemInputs("kubejs:heart_of_a_universe")
        .itemOutputs("kubejs:creative_portable_tank_mold")
        .duration(1000)
        .EUt(180000)

    // Handmade rubber - no match for the power of the factory
    event.shaped(
        "gtceu:rubber_plate", [
            ' H ',
            ' R ',
            ' R '
        ], {
            H: "#forge:tools/hammers",
            R: "gtceu:sticky_resin"
        }
    )

    // Compressor rubber - better, but not perfect - that's chemical reactor rubber
    event.recipes.gtceu.compressor("compressor_rubber_sheet")
        .itemInputs("gtceu:sticky_resin")
        .itemOutputs("gtceu:rubber_plate")
        .duration(20)
        .EUt(8)

    // Conduits

    // Manual item conduit
    event.shaped(
        "4x enderio:item_conduit", [
            'BBB',
            'WWW',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            W: "gtceu:pulsating_alloy_single_wire"
        }
    )

    // Manual ender fluid conduit
    event.shaped(
        "4x enderio:ender_fluid_conduit", [
            'BBB',
            'WPW',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            W: "gtceu:vibrant_alloy_single_wire",
            P: "enderio:pressurized_fluid_conduit"
        }
    )

    // Assembler item conduit
    event.recipes.gtceu.assembler("efficent_item_conduit")
        .itemInputs("6x enderio:conduit_binder", "3x gtceu:pulsating_alloy_single_wire")
        .itemOutputs("8x enderio:item_conduit")
        .duration(80)
        .EUt(16)

    // Assembler ender fluid conduit
    event.recipes.gtceu.assembler("efficent_ender_conduit")
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:vibrant_alloy_single_wire", "enderio:pressurized_fluid_conduit")
        .itemOutputs("8x enderio:ender_fluid_conduit")
        .duration(80)
        .EUt(16)

    // Nomify LV motors
    event.remove({ output: "gtceu:lv_electric_motor" })

    event.shaped(
        "gtceu:lv_electric_motor", [
            'CWR',
            'WMW',
            'RWC'
        ], {
            C: "gtceu:tin_single_cable",
            W: "gtceu:copper_fine_wire",
            R: "gtceu:iron_rod",
            M: "gtceu:magnetic_iron_rod"
        }
    )

    event.recipes.gtceu.assembler("lv_motor")
        .itemInputs("2x gtceu:tin_single_cable", "2x gtceu:iron_rod", "gtceu:magnetic_iron_rod", "4x gtceu:copper_fine_wire")
        .itemOutputs("gtceu:lv_electric_motor")
        .duration(100)
        .EUt(30)

    // Glass tube
    event.shaped(
        "gtceu:glass_tube", [
            '   ',
            'PPP',
            'PPP'
        ], {
            P: "minecraft:glass_pane"
        }
    )

    /*
        Creative shit, not needed at this stage of dev but admittedly im copying line by line lmao, expect a lotta missing items/substitutes
    */

    event.recipes.extendedcrafting.shaped_table(
        "ae2:creative_item_cell", [
            'ABBBBBBBA',
            'BCTEDETCB',
            'BFSGHGSFB',
            'BUJXIXJUB',
            'BNSWKWSNB',
            'BUJXLXJUB',
            'BFSGMGSFB',
            'BCTEDETCB',
            'ABBBBBBBA'
        ], {
            A: "storagedrawers:creative_storage_upgrade",
            B: "avaritia:infinity_ingot",
            C: "enderio:creative_power",
            D: "minecraft:bedrock",
            E: "minecraft:bedrock",
            F: "minecraft:bedrock",
            G: "minecraft:bedrock",
            H: "avaritia:infinity_helmet",
            I: "avaritia:infinity_chestplate",
            J: "minecraft:bedrock",
            K: "avaritia:infinity_sword",
            L: "avaritia:infinity_leggings",
            M: "avaritia:infinity_boots",
            N: "minecraft:bedrock",
            S: "solarflux:sp_avaritia.infinity",
            T: "ae2:creative_fluid_cell",
            U: "ae2:creative_energy_cell",
            W: "minecraft:bedrock",
            X: "minecraft:bedrock"
        }, 4
    )

    // Drum'd go here if we had it lol

    // crystal chip shit

    event.recipes.gtceu.autoclave("starter_enderium_chip")
        .itemInputs(["gtceu:olivine_exquisite_gem", "gtceu:emerald_exquisite_gem"])
        .inputFluids("gtceu:enderium 144")
        .chancedOutput("gtceu:raw_crystal_chip", 900, 1800)
        .duration(12000)
        .EUt(320)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.autoclave("enderium_chip")
        .itemInputs("gtceu:raw_crystal_chip_parts")
        .inputFluids("gtceu:enderium 144")
        .chancedOutput("gtceu:raw_crystal_chip", 900, 250)
        .duration(12000)
        .EUt(320)
        .cleanroom(CleanroomType.CLEANROOM)

    // Drawer templates lower yield
    event.remove({ output: "storagedrawers:upgrade_template" })
    event.shaped(
        "2x storagedrawers:upgrade_template", [
            'SSS',
            'SDS',
            'SSS'
        ], {
            S: "minecraft:stick",
            D: "#storagedrawers:drawers"
        }
    )

    // NC cobble gen replaced with thermal for now, make buckets empty but indicate how it must be placed, also remove easy auto deepslate and friends
    event.remove({ type: "thermal:rock_gen", not: { output: "minecraft:cobblestone" } })
    event.remove({ output: "thermal:device_rock_gen" })
    event.shaped(
        "thermal:device_rock_gen", [
            'PPP',
            'B B',
            'PPP'
        ], {
            P: "gtceu:steel_plate",
            B: "minecraft:bucket"
        }
    )

    // AE2 crystal growth accelerator goes here

    // Nomified distill tower
    event.remove({ output: "gtceu:distillation_tower" })
    event.shaped(
        "gtceu:distillation_tower", [
            'LPL',
            'CHC',
            'LPL'
        ], {
            L: "gtceu:stainless_steel_large_fluid_pipe",
            P: "gtceu:hv_electric_pump",
            C: "#forge:circuits/hv",
            H: "gtceu:hv_machine_hull"
        }
    )

    event.remove({ output: "gtceu:draconium_hot_ingot" })

    // Implement draconium smelting
    var draconiumFuels = [
        [2000, "gtceu:cetane_boosted_diesel"],
        [2000, "gtceu:gasoline"],
        [500, "gtceu:high_octane_gasoline"]
    ]

    draconiumFuels.forEach(fuelType => {
        event.recipes.gtceu.electric_blast_furnace("draconium_" + fuelType[1].replace(/\W/g, ''))
            .itemInputs("gtceu:draconium_dust")
            .inputFluids(fuelType[1] + " " + fuelType[0])
            .itemOutputs("gtceu:hot_draconium_ingot")
            .duration(10000)
            .blastFurnaceTemp(6800)
            .EUt(120)

        event.recipes.gtceu.electric_blast_furnace("draconium_scale_" + fuelType[1].replace(/\W/g, ''))
            .itemInputs("4x armorplus:ender_dragon_scale")
            .inputFluids(fuelType[1] + " " + fuelType[0] * 4)
            .itemOutputs("2x gtceu:hot_draconium_ingot")
            .duration(20000)
            .blastFurnaceTemp(6800)
            .EUt(120)
    })

    // Diamond -> carbon
    event.recipes.gtceu.electrolyzer("diamond_decomposition")
        .itemInputs("gtceu:diamond_dust")
        .itemOutputs("16x gtceu:carbon_dust")
        .duration(768)
        .EUt(30)

    // Alternative hv cutter
    event.shaped(
        "gtceu:hv_cutter", [
            'WCG',
            'DHS',
            'CGM'
        ], {
            W: "gtceu:gold_single_cable",
            C: "#forge:circuits/hv",
            G: "gtceu:tempered_glass",
            D: "gtceu:hv_conveyor_module",
            H: "gtceu:hv_machine_hull",
            S: "gtceu:end_steel_gear", // TODO: FIX (likely requires registering end steel as a tool material, and idk how to do that)
            M: "gtceu:hv_electric_motor"
        }
    )

    // Blacklight & sterile filter
    event.remove({ output: "gtceu:blacklight" })
    event.shaped(
        "gtceu:blacklight", [
            'SPS',
            ' H ',
            'CPW'
        ], {
            S: "gtceu:tungsten_carbide_screw",
            P: "gtceu:tungsten_carbide_plate",
            H: "gtceu:hssg_spring",
            C: "#forge:circuits/iv",
            W: "gtceu:platinum_single_cable"
        }
    )

    event.remove({ output: "gtceu:sterilizing_filter_casing" })
    event.shaped(
        "gtceu:sterilizing_filter_casing", [
            'PEP',
            'FBF',
            'MSR'
        ], {
            P: "gtceu:polybenzimidazole_large_fluid_pipe",
            E: "gtceu:luv_emitter",
            F: "gtceu:item_filter",
            B: "gtceu:blacklight",
            M: "gtceu:luv_electric_motor",
            S: "gtceu:black_steel_frame",
            R: "gtceu:osmiridium_rotor" //  TODO: replace with iridium
        }
    )

    // Prevent cleanroom casings from being usable for free resources
    event.remove({ input: "gtceu:sterilizing_filter_casing" })
    event.recipes.gtceu.arc_furnace("sterile_filter_recycling")
        .itemInputs("gtceu:sterilizing_filter_casing")
        .inputFluids("gtceu:oxygen 1265")
        .itemOutputs("4x gtceu:iridium_ingot", "2x gtceu:black_steel_ingot", "6x gtceu:small_ash_dust")
        .duration(691)
        .EUt(30)

    event.recipes.gtceu.macerator("sterile_filter_crushing")
        .itemInputs("gtceu:sterilizing_filter_casing")
        .itemOutputs("12x gtceu:polybenzimidazole_dust", "4x gtceu:iridium_dust", "2x gtceu:black_steel_dust")
        .duration(696)
        .EUt(32)

    // Tantalum-catalysed ethanol->butadiene
    event.recipes.gtceu.large_chemical_reactor("ethanol_to_butadiene")
        .notConsumable("gtceu:tantalum_dust")
        .inputFluids("gtceu:ethanol 2000")
        .outputFluids("gtceu:butadiene 1000")
        .circuit(25)
        .duration(300)
        .EUt(7680)

    // Ass control casing
    event.remove({ output: "gtceu:assembly_line_unit" })
    event.shaped(
        "4x gtceu:assembly_line_unit", [
            'CHC',
            'SFE',
            'CMC'
        ], {
            C: "#forge:circuits/luv",
            H: "gtceu:hpic_chip",
            S: "gtceu:iv_sensor",
            F: "gtceu:tungsten_steel_frame",
            E: "gtceu:iv_emitter",
            M: "gtceu:iv_electric_motor"
        }
    )

    // Mixer naquadah enrichment
    event.recipes.gtceu.mixer("mixer_enriched_naquadah")
        .itemInputs("2x gtceu:naquadah_dust", "4x enderio:grains_of_infinity", "kubejs:grains_of_innocence", "enderio:pulsating_powder")
        .inputFluids("gtceu:pulsating_alloy 576", "gtceu:neptunium 144")
        .itemOutputs("gtceu:enriched_naquadah_dust")
        .duration(400)
        .EUt(8000)

    event.recipes.gtceu.mixer("mixer_naquadria")
        .itemInputs("2x gtceu:naquadah_dust", "enderio:prescient_powder", "4x enderio:vibrant_powder", "enderio:ender_crystal_powder")
        .inputFluids("gtceu:enderium 576", "gtceu:curium 144")
        .itemOutputs("gtceu:naquadria_dust")
        .duration(400)
        .EUt(30000)

    //
    // Recycling below here
    //

    // RHF
    event.remove({ input: "gtceu:mega_blast_furnace" })
    event.recipes.gtceu.arc_furnace("rhf_recycling")
        .itemInputs("gtceu:mega_blast_furnace")
        .inputFluids("gtceu:oxygen 20786")
        .itemOutputs("20x gtceu:naquadah_alloy_ingot", "4x gtceu:invar_ingot", "2x gtceu:uranium_rhodium_dinaquadide_ingot", "gtceu:tin_ingot")
        .duration(20786)
        .EUt(30)

    event.recipes.gtceu.macerator("rhf_crushing")
        .itemInputs("gtceu:mega_blast_furnace")
        .itemOutputs("24x gtceu:stone_dust", "20x gtceu:naquadah_alloy_dust", "4x gtceu:invar_dust", "2x gtceu:rubber_dust")
        .duration(20786)
        .EUt(30)

    // BBC
    event.remove({ input: "gtceu:mega_vaccum_freezer" })
    event.recipes.gtceu.arc_furnace("bbc_recycling")
        .itemInputs("gtceu:mega_vaccum_freezer")
        .inputFluids("gtceu:oxygen 26976")
        .itemOutputs("18x gtceu:naquadah_alloy_ingot", "12x gtceu:stainless_steel_ingot", "12x gtceu:electrum_ingot", "gtceu:steel_block")
        .duration(26976)
        .EUt(30)

    event.recipes.gtceu.macerator("bbc_crushing")
        .itemInputs("gtceu:mega_vaccum_freezer")
        .itemOutputs("18x gtceu:naquadah_alloy_dust", "50x gtceu:small_rubber_dust", "49x gtceu:small_steel_dust", "12x gtceu:stainless_steel_dust")
        .duration(25408)
        .EUt(302)
})