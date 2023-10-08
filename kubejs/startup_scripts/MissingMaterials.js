//Missing ingots
const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')

GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.Lutetium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Einsteinium.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Berkelium.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Californium.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Neptunium.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Curium.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.NetherStar.setProperty($PropertyKey.FLUID, new $FluidProperty())
})