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
        .outputFluids(Fluid.of('water', 6000))
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
})