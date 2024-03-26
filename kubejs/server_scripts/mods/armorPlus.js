ServerEvents.recipes(event => {
    event.smelting('gtceu:sticky_resin', 'thermal:tar');

    event.remove({ output: 'armorplus:redstone_helmet' });
    event.remove({ output: 'armorplus:redstone_chestplate' });
    event.remove({ output: 'armorplus:redstone_leggings' });
    event.remove({ output: 'armorplus:redstone_boots' });

    event.remove({ output: 'armorplus:lapis_helmet' });
    event.remove({ output: 'armorplus:lapis_chestplate' });
    event.remove({ output: 'armorplus:lapis_leggings' });
    event.remove({ output: 'armorplus:lapis_boots' });

    let materials = [
        "redstone",
        'lapis',
        'manyullyn',
        'cobalt',
        'ardite'
    ];


    materials.forEach(material => {
        event.shaped('armorplus:' + material + "_helmet",
        ['   ',
        'AAA',
        'A A'], {
        A: 'gtceu:' + material + "_plate"
        });
    });

    materials.forEach(material => {
        event.shaped('armorplus:' + material + "_chestplate",
        ['AAA',
        'AAA',
        'A A'], {
        A: 'gtceu:' + material + "_plate"
        });
    });

    materials.forEach(material => {
        event.shaped('armorplus:' + material + "_leggings",
        ['AAA',
        'A A',
        'A A'], {
        A: 'gtceu:' + material + "_plate"
        });
    });

    materials.forEach(material => {
        event.shaped('armorplus:' + material + "_boots",
        ['   ',
        'A A',
        'A A'], {
        A: 'gtceu:' + material + "_plate"
        });
    });

    event.shaped('armorplus:knight_slime_helmet',
        ['AAA',
        'ABA',
        '   '],
        {
            A: "gtceu:titanium_carbide_plate",
            B: "minecraft:slime_block"
        });

    event.shaped('armorplus:knight_slime_chestplate',
        ['ABA',
        'AAA',
        'AAA'],
        {
            A: "gtceu:titanium_carbide_plate",
            B: "minecraft:slime_block"
        });

    event.shaped('armorplus:knight_slime_leggings',
        ['AAA',
        'ABA',
        'A A'],
        {
            A: "gtceu:titanium_carbide_plate",
            B: "minecraft:slime_block"
        });

    event.shaped('armorplus:knight_slime_boots',
        ['ABA',
        'A A',
        '   '],
        {
            A: "gtceu:titanium_carbide_plate",
            B: "minecraft:slime_block"
        });

    // Fix buggy recipes
    event.remove( { id: 'armorplus:crafting/shapeless/storage/infused_frost_crystal_to_item' } )
    event.remove( { id: 'armorplus:crafting/shapeless/storage/block_infused_frost_crystal_to_item' } )

    // Lava Crystal
    event.recipes.gtceu.chemical_reactor("infused_lava_crystal")
        .itemInputs('minecraft:quartz')
        .inputFluids('minecraft:lava 1000')
        .itemOutputs('armorplus:infused_lava_crystal')
        .duration(100)
        .EUt(15)

    // Ultimate Material
    event.recipes.gtceu.assembly_line("ultimate_material")
        .itemInputs('draconicevolution:dragon_heart', '4x armorplus:guardian_scale', '8x armorplus:wither_bone', '12x armorplus:ender_dragon_scale')
        .itemOutputs('armorplus:the_ultimate_material')
        .duration(600)
        .EUt(491520)
});
