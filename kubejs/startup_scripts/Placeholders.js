StartupEvents.registry('item', event => {

    function UpperCaseFirst(str) {
        if (typeof str == "string" && str.split("_").length == 1) { return str.substring(0, 1).toUpperCase() + str.substring(1, str.length) }
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

    placeHolder("reactant_dynamo")
    placeHolder("flight_control_unit")
    placeHolder("glowstone_elevation_unit")
})

Platform.mods.kubejs.name = "Nomi Labs"