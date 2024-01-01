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

// Advanced Microverse Projector Recipe Type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('advanced_microverse')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 16, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
})

// Advanced Microverse Projector II Recipe Type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('advanced_microverse_ii')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(8, 16, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
})

// Naquadah Reactor I Recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('naquadah_reactor_i')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
})

// Naqudah Reactor II Recipe Type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('naquadah_reactor_ii')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
})

// Basic Microverse Projector
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('basic_microverse_projector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('basic_microverse')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CMC", "CVC", "CCC")
            .aisle("CCC", "GDG", "CCC")
            .aisle("CSC", "CGC", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks("kubejs:starry_diamond_block"))
            .where('C', Predicates.blocks("kubejs:microverse_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('V', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .build())
        .workableCasingRenderer("kubejs:block/microverse_casing",
            "gtceu:block/multiblock/implosion_compressor", false)

})

// Advanced Microverse Projector
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('advanced_microverse_projector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('advanced_microverse')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "CGGGC", "CGGGC", "CGGGC", "CCCCC")
            .aisle("CVCVC", "GDDDG", "GDDDG", "GDDDG", "CVCVC")
            .aisle("CCCCC", "GDDDG", "GD#DG", "GDDDG", "CCCCC")
            .aisle("CVCVC", "GDDDG", "GDDDG", "GDDDG", "CVCVC")
            .aisle("CCSCC", "CGGGC", "CGGGC", "CGGGC", "CCCCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks("kubejs:starry_diamond_block"))
            .where('C', Predicates.blocks("kubejs:microverse_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('V', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("kubejs:block/microverse_casing",
            "gtceu:block/multiblock/implosion_compressor", false)
})

// Advanced Microverse Projecctor II 
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('advanced_microverse_projector_ii', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('advanced_microverse_ii')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#########", "#########", "##CCCCC##", "##CVCVC##", "##CCCCC##", "##CVCVC##", "##CCCCC##", "#########", "#########")
            .aisle("#########", "##CGGGC##", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "##CGGGC##", "#########")
            .aisle("##CCCCC##", "#CDDDDDC#", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "#CDDDDDC#", "##CCCCC##")
            .aisle("##CGGGC##", "#GDDDDDG#", "CDDDDDDDC", "GDD###DDG", "GDD###DDG", "GDD###DDG", "CDDDDDDDC", "#GDDDDDG#", "##CGGGC##")
            .aisle("##CGGGC##", "#GDDDDDG#", "CDDDDDDDC", "GDD###DDG", "GDD###DDG", "GDD###DDG", "CDDDDDDDC", "#GDDDDDG#", "##CGGGC##")
            .aisle("##CGGGC##", "#GDDDDDG#", "CDDDDDDDC", "GDD###DDG", "GDD###DDG", "GDD###DDG", "CDDDDDDDC", "#GDDDDDG#", "##CGGGC##")
            .aisle("##CCCCC##", "#CDDDDDC#", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "#CDDDDDC#", "##CCCCC##")
            .aisle("#########", "##CGGGC##", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "##CGGGC##", "#########")
            .aisle("#########", "#########", "##CCSCC##", "##CGGGC##", "##CGGGC##", "##CGGGC##", "##CCCCC##", "#########", "#########")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks("kubejs:starry_diamond_block"))
            .where('C', Predicates.blocks("kubejs:microverse_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('V', Predicates.blocks(GTBlocks.CASING_TITANIUM_PIPE.get()))
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("kubejs:block/microverse_casing",
            "gtceu:block/multiblock/implosion_compressor", false)

})

// Naquadah Reactor I
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('naquadah_reactor_i', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('naquadah_reactor_i')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "PGP", "PGP", "PGP", "CCC")
            .aisle("CCC", "GNG", "GNG", "GOG", "CCC")
            .aisle("CSC", "PGP", "PGP", "PGP", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:reaction_safe_mixing_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('P', Predicates.blocks("ae2:spatial_pylon"))
            .where('N', Predicates.blocks("gtceu:duranium_block"))
            .where('O', Predicates.blocks("gtceu:black_steel_block"))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/reaction_safe_mixing_casing",
            "gtceu:block/multiblock/implosion_compressor", false)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('naquadah_reactor_ii', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('naquadah_reactor_ii')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "PGP", "PGP", "PGP", "PGP", "CCC")
            .aisle("CCC", "GNG", "GNG", "GNG", "GOG", "CCC")
            .aisle("CSC", "PGP", "PGP", "PGP", "PGP", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:reaction_safe_mixing_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('P', Predicates.blocks("ae2:spatial_pylon"))
            .where('N', Predicates.blocks("gtceu:taranium_block"))
            .where('O', Predicates.blocks("extendedcrafting:the_ultimate_block"))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/reaction_safe_mixing_casing",
            "gtceu:block/multiblock/implosion_compressor", false)
})