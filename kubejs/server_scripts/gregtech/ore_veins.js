GTCEuServerEvents.oreVeins(event => {
    /*
    GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:custom_vein", vein => {
        // Basic vein generation properties
        vein.weight(200) // [*] 
        vein.clusterSize(40) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("deepslate") // [*] 
        vein.dimensions("minecraft:overworld") // 
        vein.biomes("#minecraft:is_overworld") // 

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(-60, 20)
        // Define the vein's generator:
        vein.generator(/* ... *//*) // [*] 
        // Add one or more type of surface indicator to the vein:
        vein.addIndicator(/* ... *//*) 
        })
    })
    */
    event.add("kubejs:overworldurainite", vein => {
        vein.weight(20)
        vein.clusterSize(30)    
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Pitchblende).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Uraninite).size(2, 4))
            )
        )
    })
})


// Remove ore indicators

GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((id, vein) => {
        vein.indicatorGenerators().clear()
    })
})  