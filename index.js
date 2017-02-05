'use strict';
module.exports = quoted;
module.exports.regExp = quotedRegExp;

function quoted (string) {
	const backslash = '\\';
	const doubleQuote = '\"';
	const singleQuote = '\'';
	const emptyString = '';
	const texts = [];
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
						texts.push(text);
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

function quotedRegExp (string) {
	const expression = /(["'])(?:(?=(\\?))\2.)*?\1/gm;
	const texts = [];
	const emptyString = '';
	var match;
	while (match = expression.exec(string)) {
		const text = match[0].slice(1, -1);
		if (text !== emptyString) {
			texts.push(text);
		}
	}

	return texts;
}