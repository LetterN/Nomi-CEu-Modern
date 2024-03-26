// tag builder for quests
ServerEvents.tags('item', event => {
	// Creates a tag group 'nomi_quest:backpack'
	const bps = event.get('curios:back').getObjectIds()
	const isOwnedByTheBackpackMod = Ingredient.of(/.*sophisticatedbackpacks.*/)
	bps.forEach(myBP => {
		if (isOwnedByTheBackpackMod.test(myBP))
			event.add('nomi_quest:backpack', myBP);
	})
})

// timer for cake
FTBQuestsEvents.customTask('138B92A597D63C12', event => {
	event.setMaxProgress(60*cake_reset_time);
	event.setCheckTimer(20);
	event.check = (task) => {
		task.addProgress(1);
	}
})
FTBQuestsEvents.customReward('24FE5D5A412EA666', event => {
	// auto complete when you unlock genisis (free cake custom trigger)
	FTBQuests.getServerDataFromPlayer(event.getPlayer()).complete('138B92A597D63C12')
})
