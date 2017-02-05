const assert = require('assert');
const quoted = require('../');

const tests = [
	{
		destringion: 'finds single quoted text',
		string: '\'foo\'',
		texts: ['foo']
	},
	{
		destringion: 'finds double quoted text',
		string: '\"foo\"',
		texts: ['foo']
	},
	{
		destringion: 'finds single quoted text with double quotes',
		string: '\'fo"o"\'',
		texts: [
			'fo"o"'
		]
	},
	{
		destringion: 'finds double quoted text with single quotes',
		string: '"fo\'o\'"',
		texts: [
			'fo\'o\''
		]
	},
	{
		destringion: 'finds quoted text with escaped characters',
		string: '"foo\\bar"',
		texts: [
			'foo\\bar'
		]
	},
	{
		destringion: 'finds both single and double quoted text in string',
		string: '/* "foo" */const bar=\'bar\'',
		texts: ['foo', 'bar']
	},
	{
		destringion: 'does not find empty strings',
		string: '""',
		texts: []
	}
];

describe('quoted', () => {
	tests.forEach(test => {
		it(test.destringion, () => {
			const actual = Array.from(quoted(test.string));
			const expected = test.texts;

			assert.deepEqual(actual, expected);
		});
	});
});
