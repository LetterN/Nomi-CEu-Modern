//alloys go brrr - ima go insane :)

ServerEvents.recipes(event => {
    
    function getModName(str) {
        let a = str.split(":")[0];
        a = a.split(" ");
        if (a.length == 2) {
            return a[1];
        }
        if (a.length == 1) {
            return a[0];
        }
    }

    /**
    * @param {string} name name: The generated name will be {name}_{i}, where i is the iteration number (max 3)
    * @param {int} voltage 
    * @param {float} duration Duration: Input the seconds for the recipe
    * @param {string} ing1 ing1: First recipe Ingredient
    * @param {string} ing2 ing2: Second recipe Ingredient
    * @param {string} out out: The recipe output will remain constant
    */
   
    function alloy_smelter(name, voltage, duration, ing1, ing2, out) {
        let i = 0;
        let ing_list = [];
        let ing_list2 = [];
        if ((getModName(ing1) == "gtceu") && (ing1.split(":")[1].split("_")[ing1.split(":")[1].split("_").length - 1] == "ingot")) {
            ing_list = [ing1];
            let a = ing1.split(":")[0];
            let b = ing1.split(":")[1];
            b = b.split("_");
            b[b.length - 1] = "dust";
            b = b.join("_");
            ing_list.push((a + ":" + b));
        } else {ing_list = [ing1]}

        if ((getModName(ing2) == "gtceu") && (ing2.split(":")[1].split("_")[ing2.split(":")[1].split("_").length - 1] == "ingot")) {
            ing_list2 = [ing2];
            let a = ing2.split(":")[0];
            let b = ing2.split(":")[1];
            b = b.split("_");
            b[b.length - 1] = "dust";
            b = b.join("_");
            ing_list2.push((a + ":" + b));
        } else {ing_list2 = [ing2]}

        ing_list.forEach(ing1 => {
            ing_list2.forEach(ing2 => {
                i++;
                event.recipes.gtceu.alloy_smelter(name + "_" + i)
                    .itemInputs(ing1, ing2)
                    .itemOutputs(out)
                    .duration(duration * 20)
                    .EUt(voltage)
            })
        })
    }

    function alloy_smelter_simple(name, input, input2, voltage, duration, out) {
        event.recipes.gtceu.alloy_smelter(name)
            .itemInputs(input, input2)
            .itemOutputs(out)
            .duration(duration * 20)
            .EUt(voltage)
    }

    alloy_smelter("dark_steel", 16, 12, "gtceu:steel_ingot", "minecraft:obsidian", "gtceu:dark_steel_ingot");
    alloy_smelter("dark_steel_obs_dust", 16, 12, "gtceu:steel_ingot", "gtceu:obsidian_dust", "gtceu:dark_steel_ingot");
    alloy_smelter("conductive_iron", 16, 7.5, "minecraft:iron_ingot", "minecraft:redstone", "gtceu:conductive_alloy_ingot");
    alloy_smelter("conductive_iron_iron_dust", 16, 7.5, "gtceu:iron_dust", "minecraft:redstone", "gtceu:conductive_alloy_ingot");
    alloy_smelter("pulsating_iron", 16, 7.5, "minecraft:iron_ingot", "kubejs:pulsating_dust", "gtceu:pulsating_alloy_ingot");
    alloy_smelter("pulsating_iron_iron_dust", 16, 7.5, "gtceu:iron_dust", "kubejs:pulsating_dust", "gtceu:pulsating_alloy_ingot");
    alloy_smelter("red_alloy", 16, 2.5, "minecraft:copper_ingot", "4x minecraft:redstone_dust", "gtceu:red_alloy_ingot");
    alloy_smelter("red_alloy_annealed", 16, 2.5, "gtceu:annealed_copper_ingot", "4x minecraft:redstone", "gtceu:red_alloy_ingot");
    alloy_smelter("red_alloy_cu_dust", 16, 2.5, "gtceu:copper_dust", "4x minecraft:redstone", "gtceu:red_alloy_ingot");
    alloy_smelter("electrical_steel", 16, 6, "gtceu:steel_ingot", "gtceu:silicon_dust", "gtceu:electrical_steel_ingot");
    alloy_smelter("endsteel", 120, 15, "gtceu:dark_steel_ingot", "minecraft:end_stone", "gtceu:end_steel_ingot");
    alloy_smelter("endsteel_endstone_dust", 120, 15, "gtceu:dark_steel_ingot", "gtceu:endstone_dust", "gtceu:end_steel_ingot");
    //alloy_smelter("stellar_alloy", 2000, 10, "gtceu:end_steel_ingot", "8x enderio:infinity_dust", "enderio:stellar_alloy_ingot");
})