StartupEvents.registry("block", (event) => {
    event.create('excitationcoil', 'cardinal').displayName("Excitation Coil").material('metal').renderType('cutout').box(3, 0, 3, 13, 1, 13).tag("mineable/pickaxe").box(4, 1, 4, 12, 9, 12)
    event.create('dust').material('sand').hardness(0.4).resistance(0.4).tag("mineable/shovel").displayName("Dust Block").property(BlockProperties.FALLING)
    event.create("microverse_casing").displayName("Microverse Casing").hardness(2.5).resistance(2.5).requiresTool(true).tagBlock("mineable/pickaxe")
})