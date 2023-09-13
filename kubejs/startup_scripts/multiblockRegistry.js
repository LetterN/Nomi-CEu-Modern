// Small Microverse Projector Recipe Type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('basic_microverse')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 16, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	    .setSound(GTSoundEntries.COOLING);
})

// Small Microverse
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('basic_microverse_projector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CMC", "CVC", "CCC")
            .aisle("CCC", "GDG", "CCC")
            .aisle("CSC", "CGC", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get()))
            .where('D', Predicates.blocks("minecraft:diamond_block"))
            .where('C', Predicates.blocks("gregtech:microverse_casing"))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()).setExactLimit(3))
            .where('M', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('V', Predicates.abilities(GTBlocks.CASING_GRATE.get())).setExactLimit(1))
            .or(Predicates.autoAbilities(definition.getRecipeType()))
            .recipeType('basic_microverse')
            .build())
        .workableCasingRenderer("gtceu:block/microverse_casing",
            "gtceu:block/multiblock/implosion_compressor", false)
})