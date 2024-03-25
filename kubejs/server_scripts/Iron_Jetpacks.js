ServerEvents.recipes(event => {
    //
    // Thrusters
    //

    // Thermal

    // Generate thermal thruster recipes
    var thermalType = [
        ['leadstone', 'lead', 'lead', 'steamdynamo:steam_dynamo'],
        ['hardened', 'invar', 'invar', 'thermal:dynamo_magmatic'],
        ['reinforced', 'aluminium', 'electrum', 'thermal:dynamo_compression'],
        ['resonant', 'enderium', 'enderium', 'thermal:dynamo_numismatic']
    ]

    thermalType.forEach(material => {
        event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:' + material[0] + '"}'), [
            'PCP',
            'MDM',
            'BBB'
        ], {
            P: '#forge:plates/' + material[1],
            M: '#forge:plates/' + material[2],
            C: 'thermal:rf_coil',
            D: material[3],
            B: 'gtceu:red_alloy_plate'
        })
    })

    // Generate EnderIO thruster recipes
    var EIOType = [
        ['conductive_iron', 'conductive_alloy', 'conductive', 'kubejs:resonating_crystal', 'gtceu:red_alloy_plate'],
        ['electrical_steel', 'electrical_steel', 'conductive', 'enderio:pulsating_crystal', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:conductive_iron"}').strongNBT()],
        ['energetic', 'energetic_alloy', 'energetic', 'enderio:vibrant_crystal', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrical_steel"}').strongNBT()],
        ['vibrant', 'vibrant_alloy', 'vibrant', 'enderio:prescient_crystal', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:energetic"}').strongNBT()]
    ]

    EIOType.forEach(material => {
        event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:' + material[0] + '"}'), [
            'PCP',
            'PRP',
            'BTB'
        ], {
            P: '#forge:plates/' + material[1],
            C: 'enderio:' + material[2] + '_conduit',
            R: material[3],
            T: material[4],
            B: 'gtceu:red_alloy_plate'
        })
    })

    // Special thrusters

    // Dark Soularium
    event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:dark_soularium"}'), [
        'ICI',
        'IFI',
        'TTT'
    ], {
        I: 'gtceu:dark_soularium_ingot',
        C: 'enderio:draconium_conduit',
        F: 'kubejs:flight_control_unit',
        T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:vibrant"}').strongNBT()
    })

    // Fluxed
    event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:fluxed"}'), [
        ' P ',
        'PGP',
        'STS'
    ], {
        P: 'redstone_arsenal:flux_plating',
        G: 'kubejs:glowstone_elevation_unit',
        S: 'gtceu:signalum_plate',
        T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:resonant"}').strongNBT()
    })

    //
    // Jetpacks
    //

    var jetpackRecipe = [
        ['leadstone', 'ironjetpacks:strap', 'lead', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:leadstone"}').strongNBT()],
        ['hardened', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:leadstone"}').strongNBT(), 'invar', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:hardened"}').strongNBT()],
        ['reinforced', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:hardened"}').strongNBT(), 'electrum', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:reinforced"}').strongNBT()],
        ['resonant', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:reinforced"}').strongNBT(), 'enderium', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:resonant"}').strongNBT()],
        ['conductive_iron', 'ironjetpacks:strap', 'conductive_alloy', 'enderio:basic_capacitor'],
        ['electrical_steel', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:conductive_iron"}').strongNBT(), 'electrical_steel', 'enderio:double_layer_capacitor'],
        ['energetic', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrical_steel"}').strongNBT(), 'energetic_alloy', 'enderio:octadic_capacitor'],
        ['vibrant', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:energetic"}').strongNBT(), 'vibrant_alloy', 'kubejs:compressed_octadic_capacitor']
    ]

    jetpackRecipe.forEach(material => {
        event.shaped(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:' + material[0] + '"}'), [
            'PEP',
            'PSP',
            'T T'
        ], {
            P: '#forge:plates/' + material[2],
            E: material[3],
            S: material[1],
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:' + material[0] + '"}').strongNBT()
        })
    })

    //
    // Misc
    //

    event.recipes.gtceu.alloy_smelter('resonating_redstone')
        .itemInputs('minecraft:redstone_block', 'kubejs:ender_shard')
        .itemOutputs('kubejs:resonating_crystal')
        .duration(180)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter('resonating_restonia')
        .itemInputs('gtceu:restonia_gem', 'kubejs:ender_shard')
        .itemOutputs('kubejs:resonating_crystal')
        .duration(180)
        .EUt(16)

    event.shapeless('8x kubejs:ender_shard', ['minecraft:ender_pearl'])

    event.shaped('kubejs:empty_fluxed_jetpack_unit', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:electrum_flux_ingot',
        B: 'gtceu:signalum_ingot',
        C: 'enderio:fused_quartz'
    })

    event.shaped('kubejs:empty_soularium_jetpack_unit', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:dark_soularium_ingot',
        B: 'gtceu:electrical_steel_ingot',
        C: 'enderio:fused_quartz'
    })

    event.recipes.gtceu.alloy_smelter('flight_control_unit')
        .itemInputs('4x minecraft:ghast_tear', 'kubejs:empty_soularium_jetpack_unit')
        .itemOutputs('kubejs:flight_control_unit')
        .duration(100)
        .EUt(2000)

    event.recipes.gtceu.canner('glowstone_elevation_unit')
        .itemInputs('kubejs:empty_fluxed_jetpack_unit')
        .inputFluids('gtceu:glowstone 4032')
        .itemOutputs('kubejs:glowstone_elevation_unit')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.canner('cyrotheum_coolant_unit')
        .itemInputs('kubejs:empty_fluxed_jetpack_unit')
        .inputFluids('kubejs:molten_cryotheum 6000')
        .itemOutputs('kubejs:cryotheum_coolant_unit')
        .duration(100)
        .EUt(7)


    //Cells
    event.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:leadstone"}').strongNBT(), [
        ' A ',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'gtceu:lead_ingot',
        C: 'minecraft:copper_ingot',
        D: 'gtceu:sulfur_dust'
    })

    event.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:hardened"}').strongNBT(), [
        ' A ',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'gtceu:invar_ingot',
        C: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:leadstone"}').strongNBT(),
        D: 'gtceu:tin_ingot'
    })

    event.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:reinforced"}').strongNBT(), [
        ' A ',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'gtceu:electrum_ingot',
        C: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:hardened"}').strongNBT(),
        D: '#enderio:fused_quartz'
    })

    event.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:resonant"}').strongNBT(), [
        ' A ',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'gtceu:enderium_ingot',
        C: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:reinforced"}').strongNBT(),
        D: 'kubejs:pyrotheum_dust'
    })
})