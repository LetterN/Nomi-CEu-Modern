ServerEvents.recipes(event => {

    event.remove({ output: ['ae2:vibration_chamber'] })
    event.remove({ id: 'avaritia:neutronium_nugget' })

})