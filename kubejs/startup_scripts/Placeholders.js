StartupEvents.registry('item', event => {

    function UpperCaseFirst(str) {
        if (typeof str == "string" && str.split("_").length == 1) {return str.substring(0, 1).toUpperCase() + str.substring(1, str.length)}
        if (typeof str == "string") {
            let name_t = str.split("_");
            let temp = [];
            name_t.forEach(part => {
                temp.push(part.substring(0, 1).toUpperCase() + part.substring(1, str.length));
            })
            return temp;
        }
        return null;
    }

    function placeHolder(name) {
        event.create(name).texture('kubejs:item/barrier').displayName("\u00A7eT. B. I. \u00A7r- \u00A7d" + UpperCaseFirst(name).join(" "));
    }

    //placeHolder("conductive_iron_thruster");
    placeHolder("creative_rf_source");
    placeHolder("draconic_evolution_energy_core");
    placeHolder("draconic_evolution_energy_pylon");
    placeHolder("draconic_evolution_particle_generator");
    placeHolder("draconic_evolution_energy_core_stabilizer");
    placeHolder("draconic_evolution_reactor_stabilizer");
    placeHolder("draconic_evolution_reactor_core");
    placeHolder("draconic_evolution_draconic_core");
    placeHolder("draconic_evolution_wyvern_core");
    placeHolder("draconic_evolution_awakened_core");
    placeHolder("draconic_evolution_chaotic_core");
    placeHolder("draconic_evolution_ender_energy_manipulator");
    placeHolder("advanced_rocketry_warp_core");
    placeHolder("advanced_rocketry_warp_controller");
    placeHolder("nuclearcraft_fission_reactor");
    placeHolder("nuclearcraft_fission_reactor_port");
    placeHolder("ender_star");
    placeHolder("endest_star");
    placeHolder("ultimate_generator"); // TODO: I hate this.
})

Platform.mods.kubejs.name = "Nomi Labs"