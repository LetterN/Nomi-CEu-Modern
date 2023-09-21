ServerEvents.recipes(event => {

    //stabilized stuff

    //einsteinium

    //FIXME Fusion Recipes Energy to Start

    event.recipes.gtceu.fusion_reactor('einsteinium_fusion')
        .inputFluids(Fluid.of('gtceu:berkelium', 16), Fluid.of('gtceu:californium', 16))
        .outputFluids(Fluid.of('gtceu:einsteinium', 16))
        .duration(100)
        .EUt(15360)

})