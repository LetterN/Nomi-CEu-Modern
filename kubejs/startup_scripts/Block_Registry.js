StartupEvents.registry("block", (event) => {
    event.create('excitationcoil', 'cardinal').displayName("Excitation Coil").soundType('metal').renderType('cutout').box(3, 0, 3, 13, 1, 13).tag("mineable/pickaxe").box(4, 1, 4, 12, 9, 12)
    event.create('dust', 'falling').soundType('sand').hardness(0.4).resistance(0.4).tag("mineable/shovel").displayName("Dust Block").property(BlockProperties.FALLING)
    event.create("microverse_casing").displayName("Microverse Casing").hardness(2.5).resistance(2.5).requiresTool(true).tagBlock("mineable/pickaxe")
    event.create('starry_diamond_block').displayName("Starry Diamond Block").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true)
    event.create('dark_steel_machine_hull').displayName("Dark Steel Machine Hull").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true)
    event.create('infinity_dust_block', 'falling').displayName('Infinity Dust Block').soundType('sand').resistance(6).hardness(5).tagBlock("mineable/shovel").requiresTool(true)
    event.create('compressed_infinity_dust_block', 'falling').displayName('Compressed Infinity Dust Block').soundType('sand').resistance(6).hardness(5).tagBlock("mineable/shovel").requiresTool(true)
    event.create('double_compressed_infinity_dust_block', 'falling').displayName('Double Compressed Infinity Dust Block').soundType('sand').resistance(6).hardness(5).tagBlock("mineable/shovel").requiresTool(true)
    event.create('dense_oilsands_ore').displayName('Dense Oilsands Ore').soundType('stone').resistance(6).hardness(5).tagBlock("mineable/shovel").requiresTool(true)
    event.create('empowerer_casing').displayName("Empowerer Casing").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true)
    event.create('compressed_sand').displayName("Compressed Sand").soundType('sand').resistance(1).hardness(1).tagBlock("mineable/shovel").requiresTool(true).property(BlockProperties.FALLING)
    event.create('double_compressed_sand').displayName("Double Compressed Sand").soundType('sand').resistance(2).hardness(2).tagBlock("mineable/shovel").requiresTool(true).property(BlockProperties.FALLING)
    event.create('compressed_red_sand').displayName("Compressed Red Sand").soundType('sand').resistance(1).hardness(1).tagBlock("mineable/shovel").requiresTool(true).property(BlockProperties.FALLING)
    event.create('double_compressed_red_sand').displayName("Double Compressed Red Sand").soundType('sand').resistance(2).hardness(2).tagBlock("mineable/shovel").requiresTool(true).property(BlockProperties.FALLING)

    //Dense Ores
    let ores = [
        "redstone_ore",
        'diamond_ore',
        'emerald_ore',
        'gold_ore',
        'lapis_ore',
        'iron_ore',
        'coal_ore',
        'nether_quartz_ore',
        'copper_ore'
    ]

    function Capitalize(word) {
        return (word[0].toUpperCase() + word.substring(1));
    }

    ores.forEach(ore => {
        let oreArr = ore.split("_");
        for (let i = 0; i < oreArr.length; i++) {
            oreArr[i] = Capitalize(oreArr[i]);
        }
        let displayName = "Dense " + oreArr.join(" ");
        event.create('dense_' + ore).displayName(displayName).soundType('stone').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true);
    })



    //EMERGENCY FIX
    event.create('gtceu:dilithium_ore').soundType('stone').hardness(2).resistance(2).tagBlock("mineable/pickaxe").requiresTool()

})

// StartupEvents.registry('block', event => {
//     event.create('small_storage_crate')
//         .property(BlockProperties.CHEST_TYPE)
//         .resistance(2)
//         .soundType('oak_plank')
//         .blockEntity(entityInfo => {
//             entityInfo.inventory(13, 9)
//             entityInfo.rightClickOpensInventory()
//         })
// })