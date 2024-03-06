//Shamelessly stolen from A&B :)
function opposite(face) {
	if (face.equals('down'))
		return 'up'
	if (face.equals('east'))
		return 'west'
	if (face.equals('west'))
		return 'east'
	if (face.equals('north'))
		return 'south'
	if (face.equals('south'))
		return 'north'
	return 'down'
}

BlockEvents.placed(event => {
	let block = event.getBlock()
	// Reverse placed Dynamos on Sneak 
	if (event.getEntity() == null)
		return
	if (block.getId().startsWith('thermal:dynamo') || (block.getId().startsWith('systeams:'))) { //systeams:steam is not a block thankfully
		let properties = block.getProperties()
		if (event.getEntity().isCrouching()) {
			properties['facing'] = opposite(properties['facing'].toString())
			block.set(block.getId(), properties)
		}
	}

	if (block.getId().startsWith('gtceu:')) {
		if (block.getId().endsWith('_energy_converter')) {
			block.mergeEntityData({energyContainer: {feToEu: true}})
		}
	}
})