// priority: 9999
//! This script loads first before the other startup scripts
// put your util or patches here so that you can access them at other scripts

// see quest_scripts.js
const cake_reset_time = 60; // in seconds

/**
 * helper for compressing/decompress crafting
 * @param {Internal.RecipesEventJS} ev
 * @param {string | ResourceLocation_} output output
 * @param {string | Item_} input input
 * @param {Internal.RecipesEventJS} make_uncompacting make uncompacting recipie (default true)
 * @returns {Internal.RecipeTypeFunction}
 */
const comapcting = (ev, output, input, make_uncompacting) => {
	// kubejs doesnt support nullish coalescing :(
	if (make_uncompacting === undefined || make_uncompacting === null) {
		make_uncompacting = true;
	}

	if (make_uncompacting) ev.shapeless(`9x ${input}`, [output]);

	return ev.shaped(output, [
		'aaa',
		'aaa',
		'aaa'
	], { a: input });
}
