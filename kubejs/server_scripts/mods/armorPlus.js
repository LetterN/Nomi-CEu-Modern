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
});
