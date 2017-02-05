const assert = require('assert');
const quoted = require('../');

const tests = [
	{
		description: 'finds single quoted text',
		string: '\'foo\'',
		texts: ['foo']
	},
	{
		description: 'finds double quoted text',
		string: '\"foo\"',
		texts: ['foo']
	},
	{
		description: 'finds single quoted text with double quotes',
		string: '\'fo"o"\'',
		texts: [
			'fo"o"'
		]
	},
	{
		description: 'finds double quoted text with single quotes',
		string: '"fo\'o\'"',
		texts: [
			'fo\'o\''
		]
	},
	{
		description: 'finds quoted text with escaped characters',
		string: '"foo\\bar"',
		texts: [
			'foo\\bar'
		]
	},
	{
		description: 'finds both single and double quoted text in string',
		string: '/* "foo" */const bar=\'bar\'',
		texts: ['foo', 'bar']
	},
	{
		description: 'does not find empty strings',
		string: '""',
		texts: []
	}
];

const performanceTests = [
	{
		description: 'short string with two quoted texts',
		iterations: 100000,
		string: '"foo","bar"',
		expectedWinner: 'quoted'
	},
	{
		description: 'longer string with no quoted texts',
		iterations: 100000,
		string: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis augue ac nunc pharetra ullamcorper at et augue. Curabitur tincidunt urna sit amet odio laoreet, nec bibendum arcu pulvinar. Cras egestas nulla a libero mattis, sed aliquam orci iaculis. Aenean tristique enim non lacus maximus congue. Vivamus volutpat, lacus eu interdum feugiat, urna dolor placerat ligula, nec aliquam ante dui vitae tellus. Donec imperdiet ligula ornare aliquam rutrum. Integer placerat gravida nibh id pharetra. Mauris a lorem tempus, lobortis tortor at, posuere mauris. Morbi aliquam dictum turpis ut volutpat.',
		expectedWinner: 'quotedRegExp'
	}
];

const implementations = {
	quoted: quoted,
	quotedRegExp: quoted.regExp
};

describe('implementations', () => {
	Object.keys(implementations).forEach(implementationName => {
		const implementation = implementations[implementationName];

		describe(implementationName, () => {
			tests.forEach(test => {
				it(test.description, () => {
					const actual = implementation(test.string);
					const expected = test.texts;

					assert.deepEqual(actual, expected);
				});
			});
		});
	});
});

describe('performance', () => {
	performanceTests.forEach(test => {
		const implementationResults = [];
		
		before(() => {
			Object.keys(implementations).forEach(implementationName => {
				const implementation = implementations[implementationName];
				const begun = process.hrtime();
				for (var i = 0; i < test.iterations; i++) {
					implementation(test.string);
				}
				const elapsed = process.hrtime(begun);
				implementationResults.push({
					name: implementationName,
					elapsed: elapsed[0] * 1e9 + elapsed[1]
				});
			});
		});

		it(test.description + ' won by ' + test.expectedWinner, () => {
			implementationResults.sort((a,b) => a.elapsed - b.elapsed);
			const actualWinner = implementationResults[0].name;
			
			assert.equal(actualWinner, test.expectedWinner, JSON.stringify(implementationResults, null, 4));
		});
	});
});