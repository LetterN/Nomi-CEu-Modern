// priority: 9999
//! This script loads first before the other startup scripts
// put your util or patches here so that you can access them at other scripts


/**
 * # DO NOT USE THIS!!!!
 * @private
 * @param {string} char 0 - 6
 * @param {number} idx
 * @returns {Internal.MutableComponent}
 */
const ____rainbowify_idx_to_color = (char, idx) => {
	switch (idx) {
		case 0:
			return Text.red(char);
		case 1:
			return Text.gold(char); // orange
		case 2:
			return Text.yellow(char);
		case 3:
			return Text.green(char);
		case 4:
			return Text.aqua(char);
		case 5:
			return Text.blue(char);
		case 6:
			return Text.lightPurple(char);
		default:
			return char;
	}
}

/**
 * Rainbowify text
 * @param {string} text
 * @param {number} offset
 * @returns {Internal.MutableComponent}
 */
const rainbowify = (text, offset) => {
	const components = [];
	let idx = 0 + (offset || 0);
	for (const char of text) {
		idx++;
		components.push(____rainbowify_idx_to_color(char, (idx % 7)));
	}
	return Text.join(components);
}
