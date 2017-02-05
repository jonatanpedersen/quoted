'use strict';
module.exports = quoted;

function quoted (string) {
	const backslash = '\\';
	const doubleQuote = '\"';
	const singleQuote = '\'';
	const emptyString = '';
	const texts = new Set();
	var quote;
	var escaping;
	var recording;
	var text;

	for (var i = 0; i < string.length; i++) {
		const char = string[i];

		escaping = char === backslash && !escaping;
		
		if (!escaping) {
			if (!recording) {
				if (char === singleQuote || char === doubleQuote) {
					quote = char;
					recording = true;
					text = emptyString;
				}
			} else {
				if (char === quote) {
					quote = emptyString;
					recording = false;
					
					if (text !== emptyString) {
						texts.add(text);
					}
				} else {
					text += char;
				}
			}
		} else {
			text += char;
		}
	}

	return texts;
}