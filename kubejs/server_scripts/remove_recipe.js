ServerEvents.recipes(event => {

    event.remove({ output: ['ae2:vibration_chamber', 'hammerlib:gears/copper'] })
    event.remove({ id: 'avaritia:neutronium_nugget' })

})