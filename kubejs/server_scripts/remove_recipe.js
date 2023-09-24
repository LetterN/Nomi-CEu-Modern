ServerEvents.recipes(event => {

    event.remove({ output: ['ae2:vibration_chamber', 'hammerlib:gears/copper'] })
    event.remove({ id: 'avaritia:neutronium_nugget' })
    event.remove({ type: "ad_astra:compressing" })
    event.remove({ type: "ad_astra:cryo_fuel_conversion" })
    event.remove({ type: "ad_astra:fuel_conversion" })
})