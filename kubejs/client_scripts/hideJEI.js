REIEvents.hideItems(event => {

    event.hide(['ae2:vibration_chamber'])

    //SO ANNOYING
})

REIEvents.removeCategories(event => {
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