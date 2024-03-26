//Anything that is an extended crafting recipe comes here

ServerEvents.recipes(event => {

    //GT CREATIVE EU SOURCE
    event.recipes.extendedcrafting.shaped_table(
        'gtceu:creative_energy', [
            'ABCDEDCBA',
            'BCDEFEDCB',
            'CDEFGFEDC',
            'DEFGHGFED',
            'EFGHIHGFE',
            'DEFGHGFED',
            'CDEFGFEDC',
            'BCDEFEDCB',
            'ABCDEDCBA',
        ], {
            A: 'gtceu:mercury_barium_calcium_cuprate_hex_wire',
            B: 'gtceu:uranium_triplatinum_hex_wire',
            C: 'gtceu:samarium_iron_arsenic_oxide_hex_wire',
            D: 'gtceu:indium_tin_barium_titanium_cuprate_hex_wire',
            E: 'gtceu:uranium_rhodium_dinaquadide_hex_wire',
            F: 'gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire',
            G: 'gtceu:ruthenium_trinium_americium_neutronate_hex_wire',
            H: 'gtceu:omnium_hex_wire',
            I: 'draconicevolution:creative_op_capacitor'
        }, 4
    )

    //ETERNAL CATALYST
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:eternal_catalyst', [
            '    A    ',
            ' A  A  A ',
            '  AAPAA  ',
            '  ARWEA  ',
            'AAVXUYDAA',
            '  AEZRA  ',
            '  AAIAA  ',
            ' A  A  A ',
            '    A    '
        ], {
            A: 'kubejs:mote_of_omnium',
            P: 'gtceu:palis_empowered_gear',
            R: 'gtceu:restonia_empowered_gear',
            V: 'gtceu:void_empowered_gear',
            E: 'gtceu:emeradic_empowered_gear',
            I: 'gtceu:enori_empowered_gear',
            D: 'gtceu:diamatine_empowered_gear',
            W: 'kubejs:ender_star',
            X: 'gtceu:gravi_star',
            Z: 'gtceu:quantum_star',
            Y: 'kubejs:endest_star',
            U: 'armorplus:the_ultimate_material'
        }, 4);

    //INFINITY CATALYST
    event.recipes.extendedcrafting.shaped_table(
        "avaritia:infinity_catalyst", [
            'PPPPEPPPP',
            'PEPPEPPEP',
            'PPEEEEEPP',
            'PPEECEEPP',
            'EEECHCEEE',
            'PPEECEEPP',
            'PPEEEEEPP',
            'PEPPEPPEP',
            'PPPPEPPPP',
        ], {
            P: 'avaritia:pile_of_neutrons',
            E: "kubejs:eternal_catalyst",
            C: 'draconicevolution:chaotic_core',
            H: 'kubejs:heart_of_a_universe'
        }, 4);

    //CREATIVE RF SOURCE
    event.recipes.extendedcrafting.shaped_table(
        'draconicevolution:creative_op_capacitor', [
            "UPPCGCPPU",
            'PPCGSGCPP',
            'PCGSRSGCP',
            'CGSRORSGC',
            'GSROIORSG',
            'CGSRORSGC',
            'PCGSRSGCP',
            'PPCGSGCPP',
            "UPPCGCPPU",
        ], {
            U: 'kubejs:ultimate_generator',
            P: 'draconicevolution:energy_pylon',
            C: 'draconicevolution:energy_core',
            G: 'draconicevolution:particle_generator',
            S: 'draconicevolution:energy_core_stabilizer',
            R: 'draconicevolution:reactor_stabilizer',
            O: 'draconicevolution:reactor_core',
            I: 'avaritia:infinity_catalyst'
        }, 4
    )

    // Creative Chest
    event.recipes.extendedcrafting.shaped_table(
        'gtceu:creative_chest', [
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
            J: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:creative",Throttle:1.0d}').strongNBT(),
            K: "avaritia:infinity_sword",
            L: "avaritia:infinity_leggings",
            M: "avaritia:infinity_boots",
            N: "minecraft:bedrock",
            S: "solarflux:sp_avaritia.infinity",
            T: "gtceu:creative_tank",
            U: "ae2:creative_energy_cell",
            W: "minecraft:bedrock",
            X: "minecraft:bedrock"
        }, 4
    )

    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [{
                "item": "gtceu:tiny_nether_star_dust"
            },
            {
                "item": "kubejs:solidified_hydrogen"
            },
            {
                "item": "kubejs:solidified_helium"
            },
            {
                "item": "gtceu:lithium_dust"
            },
            {
                "item": "gtceu:beryllium_ingot"
            },
            {
                "item": "gtceu:boron_dust"
            },
            {
                "item": "gtceu:carbon_dust"
            },
            {
                "item": "kubejs:solidified_nitrogen"
            },
            {
                "item": "gtceu:tiny_nether_star_dust"
            },
            {
                "item": "kubejs:solidified_oxygen"
            },
            {
                "item": "kubejs:solidified_fluorine"
            },
            {
                "item": "kubejs:solidified_neon"
            },
            {
                "item": "gtceu:sodium_dust"
            },
            {
                "item": "gtceu:magnesium_dust"
            },
            {
                "item": "gtceu:aluminium_ingot"
            },
            {
                "item": "gtceu:silicon_dust"
            },
            {
                "item": "gtceu:phosphorus_dust"
            },
            {
                "item": "gtceu:sulfur_dust"
            },
            {
                "item": "kubejs:solidified_chlorine"
            },
            {
                "item": "kubejs:solidified_argon"
            },
            {
                "item": "gtceu:potassium_dust"
            },
            {
                "item": "gtceu:calcium_dust"
            },
            {
                "item": "gtceu:titanium_ingot"
            },
            {
                "item": "gtceu:vanadium_ingot"
            },
            {
                "item": "gtceu:chromium_ingot"
            },
            {
                "item": "gtceu:manganese_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "gtceu:cobalt_ingot"
            },
            {
                "item": "gtceu:nickel_ingot"
            },
            {
                "item": "minecraft:copper_ingot"
            },
            {
                "item": "gtceu:zinc_ingot"
            },
            {
                "item": "gtceu:gallium_ingot"
            },
            {
                "item": "gtceu:arsenic_dust"
            },
            {
                "item": "kubejs:solidified_krypton"
            },
            {
                "item": "gtceu:yttrium_ingot"
            },
            {
                "item": "gtceu:niobium_ingot"
            },
            {
                "item": "gtceu:molybdenum_ingot"
            },
            {
                "item": "gtceu:ruthenium_ingot"
            },
            {
                "item": "gtceu:rhodium_ingot"
            },
            {
                "item": "gtceu:palladium_ingot"
            },
            {
                "item": "kubejs:exotic_materials_catalyst"
            },
            {
                "item": "gtceu:silver_ingot"
            },
            {
                "item": "gtceu:cadmium_dust"
            },
            {
                "item": "gtceu:indium_ingot"
            },
            {
                "item": "gtceu:tin_ingot"
            },
            {
                "item": "gtceu:antimony_ingot"
            },
            {
                "item": "kubejs:solidified_xenon"
            },
            {
                "item": "gtceu:caesium_dust"
            },
            {
                "item": "gtceu:barium_dust"
            },
            {
                "item": "gtceu:lanthanum_dust"
            },
            {
                "item": "gtceu:cerium_dust"
            },
            {
                "item": "gtceu:neodymium_ingot"
            },
            {
                "item": "gtceu:samarium_ingot"
            },
            {
                "item": "gtceu:europium_ingot"
            },
            {
                "item": "gtceu:lutetium_ingot"
            },
            {
                "item": "gtceu:tantalum_ingot"
            },
            {
                "item": "gtceu:tungsten_ingot"
            },
            {
                "item": "gtceu:osmium_ingot"
            },
            {
                "item": "gtceu:iridium_ingot"
            },
            {
                "item": "gtceu:platinum_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "kubejs:solidified_mercury"
            },
            {
                "item": "gtceu:lead_ingot"
            },
            {
                "item": "kubejs:solidified_radon"
            },
            {
                "item": "gtceu:thorium_ingot"
            },
            {
                "item": "kubejs:stabilized_uranium"
            },
            {
                "item": "kubejs:stabilized_neptunium"
            },
            {
                "item": "kubejs:stabilized_plutonium"
            },
            {
                "item": "gtceu:americium_ingot"
            },
            {
                "item": "kubejs:stabilized_curium"
            },
            {
                "item": "kubejs:stabilized_berkelium"
            },
            {
                "item": "kubejs:stabilized_californium"
            },
            {
                "item": "gtceu:tiny_nether_star_dust"
            },
            {
                "item": "kubejs:stabilized_einsteinium"
            },
            {
                "item": "gtceu:darmstadtium_ingot"
            },
            {
                "item": "gtceu:tritanium_ingot"
            },
            {
                "item": "gtceu:duranium_ingot"
            },
            {
                "item": "gtceu:trinium_ingot"
            },
            {
                "item": "gtceu:draconium_ingot"
            },
            {
                "item": "gtceu:naquadah_ingot"
            },
            {
                "item": "gtceu:tiny_nether_star_dust"
            }
        ],
        "result": {
            "item": "kubejs:mote_of_omnium"

        }
    })

    // Angel Ring
    event.remove({ id: 'miniutilities:angel_ring_crafting' })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            "A B A",
            "AC CA",
            "A B A",
            " AAA "
        ],
        "key": {
            "A": {
                "item": "gtceu:rose_gold_ingot"
            },
            "B": {
                "type": "forge:nbt",
                "item": "ironjetpacks:jetpack",
                "count": 1,
                "nbt": "{Id:\"ironjetpacks:reinforced\",Throttle:1.0d}"
            },
            "C": {
                "type": "forge:nbt",
                "item": "ironjetpacks:jetpack",
                "count": 1,
                "nbt": "{Id:\"ironjetpacks:vibrant\",Throttle:1.0d}"
            }
        },
        "result": {
            "item": "miniutilities:angel_ring"
        }
    })
})