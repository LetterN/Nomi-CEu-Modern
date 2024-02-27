// Recipes for micro miners and stuff
// Not to be confused with gregtech/microverse_recipes.js, that defines what is mined, this file defines how to make things

ServerEvents.recipes(event => {

    //
    // Miners
    //

    // T1 Microminer

    event.shaped(
        'kubejs:microminer_t1', [
            ' G ',
            'LAL',
            'TMT'
        ], {
            G: 'kubejs:basic_micro_miner_guidance_system',
            L: 'kubejs:basic_mining_laser',
            A: 'gtceu:lv_field_generator',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:conductive_iron"}').strongNBT(), 
            M: 'gtceu:lv_combustion'
        }
    )

    // T2 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t2', [
            '  G  ',
            ' PAP ',
            'LBFBL',
            'PPCPP',
            ' TTT '
        ], {
            G: 'kubejs:basic_micro_miner_guidance_system',
            P: 'gtceu:double_titanium_plate',
            A: 'gtceu:stainless_steel_crate',
            L: 'kubejs:basic_mining_laser',
            B: 'gtceu:lv_field_generator',
            F: 'thermal:fluid_cell_frame', // TODO: Rename frames
            C: 'gtceu:mv_combustion',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrical_steel"}').strongNBT()
        }, 2
    )

    // T3 Microminer

    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t3', [
            '  G G  ',
            '  PPP  ',
            '  ABA  ',
            ' LPBPL ',
            'PPFBFPP',
            'PPPCPPP',
            '  TTT  '
        ], {
            G: 'kubejs:basic_micro_miner_guidance_system',
            P: 'gtceu:double_tungsten_carbide_plate',
            A: 'gtceu:mv_field_generator',
            B: 'gtceu:titanium_crate',
            L: 'kubejs:reinforced_mining_laser',
            F: 'thermal:fluid_cell_frame',
            C: 'gtceu:hv_combustion',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:Reinforced"}').strongNBT()
        }, 3
    )

    // T4 Microminer

    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t4', [
            '   G   ',
            '  LWL  ',
            ' SAWAS ',
            ' SBWBS ',
            ' SFWFS ',
            ' TDWDT ',
            '  T T  '
        ], {
            G: 'kubejs:basic_micro_miner_guidance_system',
            L: 'kubejs:reinforced_mining_laser',
            W: 'gtceu:double_tungsten_carbide_plate',
            S: 'gtceu:double_signalum_plate',
            A: 'gtceu:tungsten_steel_crate',
            B: 'gtceu:hv_field_generator',
            F: 'thermal:energy_cell_frame',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:Energetic"}').strongNBT(),
            D: 'thermal:dynamo_magmatic' // TODO: replace with reactant dynamo when possible
        }, 3
    )

    // T5 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t5', [
            '  G G  ',
            '  I I  ',
            ' SILIS ',
            'SSABASS',
            ' IFCFI ',
            'IIIPIII',
            '  TTT  '
        ], {
            G: 'kubejs:advanced_micro_miner_guidance_system',
            I: 'gtceu:double_iridium_plate',
            S: 'gtceu:double_signalum_plate',
            L: 'kubejs:supercharged_laser_array',
            A: 'gtceu:ev_field_generator',
            B: 'gtceu:mv_super_chest',
            F: 'thermal:energy_cell_frame',
            C: 'kubejs:nuclearcraft_fission_reactor', // TODO: REPLACE WITH REAL NC COMPONENT
            P: 'kubejs:nuclearcraft_fission_reactor_port', // TODO: REPLACE WITH REAL NC COMPONENT
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:Vibrant"}').strongNBT()
        }, 3
    )

    // T6 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t6', [
            ' LG GL ',
            'LEE EEL',
            'EEEEEEE',
            ' EAFAE ',
            'EBFCFBE',
            ' EPPPE ',
            ' ETTTE '
        ], {
            L: 'kubejs:supercharged_laser_array',
            G: 'kubejs:advanced_micro_miner_guidance_system',
            E: 'gtceu:double_enderium_plate',
            A: 'gtceu:mv_super_chest',
            F: 'thermal:energy_cell_frame', // TODO: this should be a third tier of frame
            B: 'gtceu:iv_field_generator',
            C: 'kubejs:nuclearcraft_fission_reactor', // TODO: REPLACE WITH REAL NC COMPONENT
            P: 'kubejs:nuclearcraft_fission_reactor_port', // TODO: REPLACE WITH REAL NC COMPONENT
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:Resonant"}').strongNBT()
        }, 3
    )

    // T7 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t7', [
            ' L  D  L ',
            ' DDDGDDD ',
            'LDDDDDDDL',
            'DDDDPDDDD',
            'DDDAEADDD',
            'DDDDPDDDD',
            'D DDDDD D',
            'D WW WW D'
        ], {
            L: 'kubejs:supercharged_laser_array',
            D: 'gtceu:double_draconium_plate',
            G: 'kubejs:advanced_micro_miner_guidance_system',
            P: 'kubejs:draconic_evolution_particle_generator', // TODO: REPLACE WITH REAL DE COMPONENT
            A: 'gtceu:luv_field_generator',
            E: 'kubejs:draconic_evolution_ender_energy_manipulator', // TODO: REPLACE WITH REAL DE COMPONENT
            W: 'kubejs:warp_engine'
        }, 4
    )

    // T8 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t8', [
            ' G C C G ',
            ' WCCLCCW ',
            ' WCIIICW ',
            'LCIIIIICL',
            'WCAABAACW',
            'WCWWIWWCW',
            'WDCCICCDW',
            'WMWWIWWMW',
            ' E     E '
        ], {
            G: 'kubejs:advanced_micro_miner_guidance_system',
            C: 'avaritia:crystal_matrix_ingot', // TODO: replace with double plate
            W: 'gtceu:double_tungsten_carbide_plate',
            L: 'kubejs:supercharged_laser_array',
            I: 'gtceu:double_iridium_plate',
            A: 'gtceu:hv_super_chest',
            B: 'gtceu:zpm_field_generator',
            D: 'kubejs:advanced_rocketry_warp_core', // TODO: REPLACE WITH REAL AR COMPONENT
            M: 'kubejs:advanced_rocketry_warp_controller', // TODO: REPLACE WITH REAL AR COMPONENT
            E: 'kubejs:warp_engine'
        }, 4
    )

    // T9 Microminer

    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t9', [
            '    Q    ',
            '   QQQ   ',
            '   QUQ   ',
            '  QQAQQ  ',
            ' QQQQQQQ ',
            'QQBQRQBQQ',
            ' QQQCQQQ ',
            ' QQQQQQQ ',
            'QQ W W QQ'
        ], {
            Q: 'kubejs:quantum_fluxed_eternium_heavy_plating',
            U: 'kubejs:universal_navigator',
            A: 'gtceu:uv_field_generator',
            B: 'gtceu:ev_super_chest',
            R: 'kubejs:draconic_evolution_reactor_stabilizer', // TODO: REPLACE WITH THE REAL DE COMPONENT
            C: 'kubejs:draconic_evolution_reactor_core', // TODO: REPLACE WITH THE REAL DE COMPONENT
            W: 'kubejs:warp_engine'
        }
    )

    // T10 Microminer
    
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t10', [
            '  N   N  ',
            ' NUN NUN ',
            ' NNN NNN ',
            ' NNN NNN ',
            ' NCNNNCN ',
            'PNRN NRNP',
            'NNNNANNNN',
            ' N NNN N ',
            'N  W W  N'
        ], {
            N: 'gtceu:double_neutronium_plate',
            U: 'kubejs:universal_navigator',
            C: 'kubejs:draconic_evolution_reactor_core', // TODO: REPLACE WITH THE REAL DE COMPONENT
            P: 'solarflux:sp_avaritia.neutronium',
            R: 'kubejs:draconic_evolution_reactor_stabilizer', // TODO: REPLACE WITH THE REAL DE COMPONENT
            A: 'gtceu:iv_quantum_chest',
            W: 'kubejs:warp_engine'
        }
    )

    //
    // Miner Components
    //

    // Basic Guidance

    event.shaped(
        'kubejs:basic_micro_miner_guidance_system', [
            'GPG',
            'PCP',
            'CCC'
        ], {
            G: 'minecraft:glass',
            P: 'gtceu:double_steel_plate',
            C: '#gtceu:circuits/mv'
        }
    )

    // Basic laser

    event.shaped(
        'kubejs:basic_mining_laser', [
            ' R ',
            'QGQ',
            'QGQ'
        ], {
            R: 'minecraft:redstone_block',
            Q: 'minecraft:quartz',
            G: 'minecraft:glass'
        }
    )

    // Reinforced Laser
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:reinforced_mining_laser', [
            ' R R ',
            'GAGAG',
            'GAGAG',
            'GBGBG',
            'QCECQ'
        ], {
            R: 'minecraft:redstone_block',
            G: 'minecraft:glass',
            A: 'kubejs:solidified_argon',
            B: 'minecraft:quartz_block',
            Q: 'minecraft:quartz',
            C: '#gtceu:circuits/hv',
            E: 'enderio:advanced_capacitor_bank'
        }
    )

    // Advanced Guidance
    event.shaped(
        'kubejs:advanced_micro_miner_guidance_system', [
            'AWA',
            'WCW',
            'CCC'
        ], {
            A: 'gtceu:ev_sensor',
            W: 'gtceu:double_tungsten_carbide_plate',
            C: '#gtceu:circuits/ev'
        }
    )

    // Warp engine
    event.recipes.gtceu.assembly_line('warp_engine')
    .itemInputs('gtceu:microversium_frame',
                '6x gtceu:enderium_plate',
                'minecraft:bedrock', /* Item dislocation inhibitor */
                'minecraft:bedrock', /* DE Magnet */
                '2x avaritia:crystal_matrix_ingot', /* TODO: replace with plate */
                '2x gtceu:iv_field_generator',
                '2x ironjetpacks:thruster',
                'ironjetpacks:thruster')
    .itemOutputs('kubejs:warp_engine')
    .inputFluids('gtceu:soldering_alloy 1152')
    .duration(1800)
    .EUt(30720)

    // Supercharged laser array
    event.recipes.gtceu.chemical_reactor('supercharged_laser_array')
    .itemInputs('kubejs:reinforced_mining_laser')
    .inputFluids('gtceu:radon 1000')
    .itemOutputs('kubejs:supercharged_laser_array')
    .duration(200)
    .EUt(2000)

    // Universal Navigator
    event.recipes.gtceu.assembly_line('universal_navigator')
    .itemInputs('gtceu:microversium_frame',
                '24x gtceu:microversium_plate',
                'gtceu:gravi_star',
                '2x gtceu:uv_sensor',
                '2x gtceu:uv_robot_arm',
                '#gtceu:circuits/uhv',
                '2x gtceu:dense_naquadah_alloy_plate',
                '4x gtceu:enriched_naquadah_trinium_europium_diuranide_quadruple_wire',
                '64x gtceu:fine_tritanium_wire')
    .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:naquadria 576')
    .itemOutputs('kubejs:universal_navigator')
    .duration(6000)
    .EUt(491520)
})