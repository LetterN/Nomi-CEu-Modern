StartupEvents.registry("block", (event) => {
    event.create('excitationcoil', 'cardinal').displayName("Excitation Coil").soundType('metal').renderType('cutout').box(3, 0, 3, 13, 1, 13).tag("mineable/pickaxe").box(4, 1, 4, 12, 9, 12)
    event.create('dust').soundType('sand').hardness(0.4).resistance(0.4).tag("mineable/shovel").displayName("Dust Block").property(BlockProperties.FALLING)
    event.create("microverse_casing").displayName("Microverse Casing").hardness(2.5).resistance(2.5).requiresTool(true).tagBlock("mineable/pickaxe")
    event.create('starry_diamond_block').displayName("Starry Diamond Block").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true)
    event.create('dark_steel_machine_hull').displayName("Dark Steel Machine Hull").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true)
})