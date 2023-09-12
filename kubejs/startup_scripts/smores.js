StartupEvents.registry('item', event => {
    //Smores
    let smoreLang = [
        `S'more S'mingot`,
        `MoreS'more DoubleS'mingot`,
        `FourS'more QuadS'mingot`,
        `EightS'more OctoS'mingot`,
        `SixteenS'more HexadecaS'mingot`,
        `Half-stack-o'-S'more TriacontadyoS'mingot`,
        `Stack-o'-S'more HexecontatessaraS'mingot`
    ];

    let smoreHunger = [
        4, 10, 22, 46, 94, 190, 382
    ]
    let smoreSaturation = [
        12, 76, 379, 1675, 7032, 28805, 116587
    ]
    let effDuration = 300;
/*
Duration starts at 15s at smore_1
<potion:minecraft:absorption>,
        <potion:minecraft:speed>,
        <potion:minecraft:haste>,
        <potion:minecraft:saturation>,
        <potion:minecraft:health_boost>
*/



    for (let i = 0; i <= 6; i++) {

        event.create(`smore_${2**i}`).food(food => {
            food.hunger(smoreHunger[i]*2);
            food.saturation(smoreSaturation[i]/(1+4*smoreHunger[i]) * 2);
            food.effect("absorption", effDuration, 1, 1);
            food.effect("speed", effDuration, 1, 1);
            food.effect("haste", effDuration, 1, 1);
            
            if (i > 2) {
                food.effect("saturation", effDuration, 1, 1);
                food.effect("health_boost", effDuration, 1, 1);
            }

            food.alwaysEdible();

        }).displayName(smoreLang[i]).maxStackSize(64);

        effDuration = effDuration*2;
    
    }  



});