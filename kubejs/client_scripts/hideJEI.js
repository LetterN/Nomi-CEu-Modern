REIEvents.hideItems(event => {
    //Hides useless items
    event.hide(['ae2:vibration_chamber', 'hammerlib:gears/netherite', 'hammerlib:gears/gold', 'hammerlib:gears/copper'])


})

REIEvents.removeCategories(event => {
    //FIXME HELP
    event.yeet('minecraft:plugins/tag')
})

REIEvents.groupEntries(event => {

    //FIXME Im gonna cry
    const useNbt = ['chiselsandbits:block_bit']

    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.name, item)
    })


})

//I hate compressium


REIEvents.hideItems(event => {


    const baseElementNames = ['compressium:granite_']


    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    for (const baseElementName of baseElementNames) {

        for (const number of numbers) {
            const elementName = `${baseElementName}${number}`

            event.hide(elementName)
        }
    }


})