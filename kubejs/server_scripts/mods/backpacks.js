ServerEvents.recipes(event => {

    event.remove({ output: 'simplybackpacks:commonbackpack' })
    event.shaped(
        'simplybackpacks:commonbackpack', [
            ' L ',
            'TCT',
            'L L'
        ], {
            L: 'minecraft:leather',
            T: 'gtceu:tin_ingot',
            C: '#forge:chests/wooden'
        })

    event.remove({ output: 'simplybackpacks:uncommonbackpack' })
    event.shaped(
        'simplybackpacks:uncommonbackpack', [
            ' L ',
            'TCT',
            'L L'
        ], {
            L: 'minecraft:gold_nugget',
            T: 'gtceu:invar_ingot',
            C: 'simplybackpacks:commonbackpack'
        })

    event.remove({ output: 'simplybackpacks:rarebackpack' })
    event.shaped(
        'simplybackpacks:rarebackpack', [
            ' L ',
            'TCT',
            'L L'
        ], {
            L: 'gtceu:electrum_nugget',
            T: 'gtceu:aluminium_ingot',
            C: 'simplybackpacks:uncommonbackpack'
        })

    event.remove({ output: 'simplybackpacks:epicbackpack' })
    event.shaped(
        'simplybackpacks:epicbackpack', [
            ' L ',
            'TCT',
            'L L'
        ], {
            L: 'gtceu:electrum_nugget',
            T: 'gtceu:signalum_ingot',
            C: 'simplybackpacks:rarebackpack'
        })

    event.remove({ output: 'simplybackpacks:ultimatebackpack' })
    event.shaped(
        'simplybackpacks:ultimatebackpack', [
            ' L ',
            'TCT',
            'L L'
        ], {
            L: 'gtceu:signalum_nugget',
            T: 'gtceu:enderium_ingot',
            C: 'simplybackpacks:epicbackpack'
        })
})