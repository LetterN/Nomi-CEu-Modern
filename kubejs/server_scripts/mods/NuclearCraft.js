// priority: 0

ServerEvents.recipes(event => {

    event.remove({ id: 'watercondenser:watercondenser' })

    event.shaped(
        'watercondenser:watercondenser', [
            'AAA',
            'B B',
            'AAA'
        ], {
            A: 'gtceu:wrought_iron_plate',
            B: 'minecraft:water_bucket'
        }
    )

    //HUGE REWORK NUCLEARCRAFT
    event.remove({ output: ['nuclearcraft:supercooler', 'nuclearcraft:rock_crusher', 'nuclearcraft:decay_hastener', 'nuclearcraft:irradiator', 'nuclearcraft:nuclear_furnace', 'nuclearcraft:extractor', 'nuclearcraft:electrolyzer', 'nuclearcraft:pressurizer', 'nuclearcraft:alloy_smelter', 'nuclearcraft:centrifuge', 'nuclearcraft:manufactory', 'nuclearcraft:gas_scrubber', 'nuclearcraft:fluid_enricher', 'nuclearcraft:isotope_separator', 'nuclearcraft:fluid_infuser', 'nuclearcraft:chemical_reactor', 'nuclearcraft:analyzer', 'nuclearcraft:ingot_former', 'nuclearcraft:pump', 'nuclearcraft:fuel_reprocessor', 'nuclearcraft:leacher', 'nuclearcraft:crystallizer', 'nuclearcraft:assembler', 'nuclearcraft:steam_turbine', 'nuclearcraft:melter'] })
    event.remove({ output: ['nuclearcraft:nitrogen_collector', 'nuclearcraft:compact_nitrogen_collector', 'nuclearcraft:lava_collector', 'nuclearcraft:dense_nitrogen_collector', 'nuclearcraft:compact_helium_collector', 'nuclearcraft:helium_collector', 'nuclearcraft:dense_helium_collector'] })
    event.remove({ output: ['nuclearcraft:foursmore', 'nuclearcraft:evenmoresmore', 'nuclearcraft:moresmore', 'nuclearcraft:smore'] })
})