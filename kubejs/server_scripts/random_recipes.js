// THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE

ServerEvents.recipes(event => {

    event.remove({ output: ["snad:snad", "snad:red_snad"] })

    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
                "item": "minecraft:sand"
            },
            {
                "item": "minecraft:sand"
            }
        ],
        "result": {
            "item": "snad:snad",
            "count": 1
        }
    })

})