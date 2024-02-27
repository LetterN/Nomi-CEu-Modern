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
            I: 'kubejs:creative_rf_source'
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
            C: 'kubejs:draconic_evolution_chaotic_core',
            H: 'kubejs:heart_of_a_universe'
        }, 4);

    //CREATIVE RF SOURCE
    event.recipes.extendedcrafting.shaped_table(
        "kubejs:creative_rf_source", [
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
            P: 'kubejs:draconic_evolution_energy_pylon',
            C: 'kubejs:draconic_evolution_energy_core',
            G: 'kubejs:draconic_evolution_particle_generator',
            S: 'kubejs:draconic_evolution_energy_core_stabilizer',
            R: 'kubejs:draconic_evolution_reactor_stabilizer',
            O: 'kubejs:draconic_evolution_reactor_core',
            I: 'avaritia:infinity_catalyst'
        }, 4
    )
})