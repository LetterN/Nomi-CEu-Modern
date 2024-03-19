ServerEvents.tags('item', event => {
    event.add('forge:ingots/neutronium', 'avaritia:neutronium_ingot')
    event.add('forge:nuggets/neutronium', 'avaritia:neutronium_nugget')
    event.add('forge:storage_blocks/neutronium', 'avaritia:neutronium_block')
    event.add('forge:dusts/tiny/neutronium', 'avaritia:pile_of_neutrons')
    event.add('ae2:all_fluix', 'gtceu:fluix_gem')
    event.add('forge:singularities/ultimate', 'kubejs:mote_of_omnium')
    event.add('forge:singularities/ultimate', 'extendedcrafting:ultimate_singularity')
    event.add('forge:ingots/the_ultimate', 'kubejs:omnium_ingot')
    event.add('forge:ingots/electrum_flux', 'redstone_arsenal:flux_ingot')
    event.add('forge:dusts/electrum_flux', 'redstone_arsenal:flux_dust')
    event.add('forge:nuggets/electrum_flux', 'redstone_arsenal:flux_nugget')
    event.add('forge:gears/electrum_flux', 'redstone_arsenal:flux_gear')
    event.removeAllTagsFrom('ae2:certus_quartz_crystal')
    event.remove('forge:ingots/aluminum', 'nuclearcraft:aluminum_ingot')
    event.add('forge:ingots/aluminium', 'nuclearcraft:aluminum_ingot')
})

ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', 'watercondenser:watercondenser')
})

ServerEvents.tags('fluid', event => {

})

//EMI Hacky Fix
ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(['thermal:bronze_nugget', 'thermal:bronze_block', 'thermal:bronze_ingot', 'nuclearcraft:aluminum_ingot', 'thermal:electrum_plate', 'thermal:electrum_gear', 'thermal:enderium_gear', 'thermal:enderium_plate', 'nuclearcraft:enderium_dust', 'nuclearcraft:lead_dust', 'thermal:nickel_gear', 'thermal:nickel_plate', 'thermal:lumium_block', 'thermal:lumium_ingot', 'thermal:ruby_block', 'thermal:ruby_dust', 'nuclearcraft:platinum_plate', 'nuclearcraft:platinum_nugget', 'thermal:lumium_gear', 'thermal:lumium_plate', 'thermal:lead_gear', 'nuclearcraft:fluorite_dust', 'nuclearcraft:fluorite_gem', 'thermal:enderium_ingot', 'thermal:enderium_block', 'thermal:enderium_nugget', 'thermal:enderium_dust', 'thermal:electrum_dust', 'thermal:electrum_nugget', 'thermal:electrum_ingot', 'nuclearcraft:electrum_ingot', 'thermal:bronze_plate', 'nuclearcraft:nichrome_ingot', 'nuclearcraft:cobalt_ingot', 'thermal:bronze_gear', 'thermal:bronze_dust'])
    event.removeAllTagsFrom(['thermal:invar_gear', 'thermal:invar_dust', 'nuclearcraft:osmiridium_ingot', 'thermal:invar_nugget', 'thermal:invar_ingot', 'thermal:invar_block', 'nuclearcraft:graphite_dust', 'thermal:lead_block', 'thermal:lead_ingot', 'thermal:silver_ingot', 'thermal:silver_block', 'thermal:tin_dust', 'thermal:tin_gear', 'thermal:sulfur_block', 'thermal:sulfur', 'thermal:sulfur_dust', 'nuclearcraft:sulfur_dust', 'nuclearcraft:hsla_steel_dust', 'nuclearcraft:steel_dust', 'nuclearcraft:hsla_steel_ingot', 'thermal:sapphire_block', 'nuclearcraft:platinum_dust', 'nuclearcraft:osmium_ingot', 'nuclearcraft:lead_plate', 'thermal:nickel_dust', 'thermal:nickel_nugget', 'thermal:nickel_ingot', 'thermal:nickel_block', 'nuclearcraft:osmium_dust', 'thermal:lead_nugget', 'thermal:lumium_dust', 'thermal:lumium_nugget', 'nuclearcraft:lead_ingot', 'thermal:lead_plate', 'thermal:lead_dust', 'thermal:invar_plate'])
    event.removeAllTagsFrom(['thermal:signalum_plate', 'thermal:signalum_gear', 'thermal:signalum_dust', 'thermal:signalum_nugget', 'thermal:signalum_ingot', 'thermal:signalum_block', 'thermal:sapphire_gear', 'thermal:sapphire_dust', 'thermal:sapphire', 'thermal:tin_plate', 'nuclearcraft:steel_block', 'nuclearcraft:stainless_steel_ingot', 'nuclearcraft:steel_ingot', 'thermal:tin_block', 'nuclearcraft:zinc_block', 'nuclearcraft:zinc_dust', 'nuclearcraft:zinc_nugget', 'nuclearcraft:zinc_plate', 'nuclearcraft:tungsten_ingot', 'nuclearcraft:tungsten_dust', 'gtceu:tungsten_nugget', 'gtceu:tungsten_carbide_nugget', 'nuclearcraft:zinc_ingot', 'nuclearcraft:uranium_dust', 'nuclearcraft:uranium_block', 'thermal:tin_ingot', 'thermal:silver_plate', 'thermal:tin_nugget', 'thermal:silver_gear', 'thermal:silver_dust', 'thermal:silver_nugget', 'nuclearcraft:hsla_steel_plate', 'nuclearcraft:steel_plate', 'nuclearcraft:steel_nugget', 'nuclearcraft:platinum_ingot', 'nuclearcraft:platinum_block'])
    event.removeAllTagsFrom(['draconicevolution:awakened_draconium_dust', 'nuclearcraft:chromium_ingot', 'nuclearcraft:hsla_steel_plate', 'nuclearcraft:hsla_steel_ingot', 'nuclearcraft:osmiridium_ingot', 'nuclearcraft:chromium_dust', 'nuclearcraft:manganese_plate', 'draconicevolution:draconium_ingot', 'nuclearcraft:yttrium_dust', 'nuclearcraft:beryllium_ingot', 'nuclearcraft:beryllium_block', 'nuclearcraft:palladium_dust', 'nuclearcraft:palladium_plate', 'enderio:end_steel_ingot', 'nuclearcraft:thorium_block', 'nuclearcraft:thorium_plate', 'nuclearcraft:thorium_nugget', 'enderio:end_steel_nugget', 'nuclearcraft:thorium_ingot', 'nuclearcraft:thorium_dust', 'nuclearcraft:palladium_ingot', 'nuclearcraft:niobium_titanium_ingot', 'nuclearcraft:titanium_dust', 'nuclearcraft:titanium_ingot', 'nuclearcraft:aluminum_block', 'nuclearcraft:aluminum_dust', 'nuclearcraft:aluminum_ingot', 'nuclearcraft:yttrium_ingot', 'nuclearcraft:hsla_steel_dust', 'nuclearcraft:aluminum_nugget', 'nuclearcraft:manganese_ingot', 'nuclearcraft:manganese_dust', 'draconicevolution:draconium_dust', 'draconicevolution:draconium_nugget', 'draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_nugget'])
    event.removeAllTagsFrom(['enderio:conductive_alloy_nugget', 'enderio:conductive_alloy_block', 'enderio:soularium_nugget', 'enderio:soularium_ingot', 'enderio:soularium_block', 'enderio:end_steel_block', 'nuclearcraft:beryllium_plate', 'nuclearcraft:beryllium_nugget', 'nuclearcraft:beryllium_dust', 'enderio:conductive_alloy_ingot', 'enderio:energetic_alloy_nugget', 'enderio:energetic_alloy_block', 'enderio:energetic_alloy_ingot', 'gtceu:neutronium_block', 'gtceu:neutronium_ingot', 'nuclearcraft:uranium_ingot', 'nuclearcraft:tungsten_carbide_ingot', 'enderio:dark_steel_block', 'enderio:dark_steel_nugget', 'enderio:dark_steel_ingot', 'gtceu:neutronium_nugget', 'enderio:pulsating_alloy_nugget', 'enderio:pulsating_alloy_ingot', 'enderio:pulsating_alloy_block', 'enderio:vibrant_alloy_ingot', 'enderio:vibrant_alloy_nugget', 'enderio:vibrant_alloy_block'])
})