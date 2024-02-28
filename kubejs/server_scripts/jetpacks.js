ServerEvents.recipes(event => {
    //
    // Thrusters
    //

    // Thermal

    // Generate thermal thruster recipes
    var thermalType = [
        ['Leadstone', 'lead', 'lead', 'thermal:dynamo_stirling'],
        ['Hardened', 'invar', 'invar', 'thermal:dynamo_magmatic'],
        ['Reinforced', 'aluminium', 'electrum', 'kubejs:reactant_dynamo'],
        ['Resonant', 'enderium', 'enderium', 'thermal:dynamo_numismatic']
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
        ['conductive_iron', 'conductive_alloy', 'conductive', 'gtceu:resonating_redstone_gem', 'gtceu:red_alloy_plate'],
        ['electrical_steel', 'electrical_steel', 'conductive', 'enderio:pulsating_crystal', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:conductive_iron"}').strongNBT()],
        ['Energetic', 'energetic_alloy', 'energetic', 'enderio:vibrant_crystal', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrical_steel"}').strongNBT()],
        ['Vibrant', 'vibrant_alloy', 'vibrant', 'enderio:prescient_crystal', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:Energetic"}').strongNBT()]
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
        T:  Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:Vibrant"}').strongNBT()
    })

    // Fluxed
    event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:Fluxed"}'), [
        ' P ',
        'PGP',
        'STS'
    ], {
        P: 'redstone_arsenal:flux_plating',
        G: 'kubejs:glowstone_elevation_unit',
        S: 'gtceu:signalum_plate',
        T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:Resonant"}').strongNBT()
    })

    //
    // Jetpacks
    //

    var jetpackRecipe = [
        ['Leadstone', 'ironjetpacks:strap', 'lead', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:Leadstone"}').strongNBT()],
        ['Hardened', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:Leadstone"}').strongNBT(), 'invar', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:Hardened"}').strongNBT()],
        ['Reinforced', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:Hardened"}').strongNBT(), 'electrum', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:Reinforced"}').strongNBT()],
        ['Resonant', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:Reinforced"}').strongNBT(), 'enderium', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:Resonant"}').strongNBT()],
        ['conductive_iron', 'ironjetpacks:strap', 'conductive_alloy', 'enderio:basic_capacitor'],
        ['electrical_steel', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:conductive_iron"}').strongNBT(), 'electrical_steel', 'enderio:double_layer_capacitor'],
        ['Energetic', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrical_steel"}').strongNBT(), 'energetic_alloy', 'enderio:octadic_capacitor'],
        ['Vibrant', Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:Energetic"}').strongNBT(), 'vibrant_alloy', 'kubejs:compressed_octadic_capacitor']
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
        .itemInputs('minecraft:redstone_block', 'gtceu:ender_shard_gem')
        .itemOutputs('gtceu:resonating_redstone_gem')
        .duration(180)
        .EUt(16)
    
    event.recipes.gtceu.alloy_smelter('resonating_restonia')
        .itemInputs('gtceu:restonia_gem', 'gtceu:ender_shard_gem')
        .itemOutputs('gtceu:resonating_redstone_gem')
        .duration(180)
        .EUt(16)

    event.shapeless('8x gtceu:ender_shard_gem', ['minecraft:ender_pearl'])

    // Battery chain
    // TODO
})