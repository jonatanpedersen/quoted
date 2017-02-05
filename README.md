# quoted
Finds single and double quoted text in a string.

[![Build Status](https://travis-ci.org/jonatanpedersen/quoted.svg?branch=master)](https://travis-ci.org/jonatanpedersen/quoted)
[![NPM Version](https://img.shields.io/npm/v/quoted.svg)](https://www.npmjs.com/package/quoted)
[![NSP Status](https://nodesecurity.io/orgs/jonatanpedersen/projects/66f2431f-ab56-45b3-83e4-0d3fac2040ee/badge)](https://nodesecurity.io/orgs/jonatanpedersen/projects/66f2431f-ab56-45b3-83e4-0d3fac2040ee)
[![Greenkeeper badge](https://badges.greenkeeper.io/jonatanpedersen/quoted.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/jonatanpedersen/quoted/badge.svg)](https://coveralls.io/github/jonatanpedersen/quoted)

## Install
``` bash
$ npm install quoted
```

## Usage

``` javascript
const quoted = require('quoted');

const text = '"foo", "bar"';
console.log(quoted(text));
// ['foo', 'bar']
```

There are no options.

## Contributing
Pull requests are welcome.

Clone repository:
``` bash
$ git clone git@github.com:jonatanpedersen/quoted.git
```

Install dependencies:
``` bash
$ npm install
```

### Test
[mocha](https://github.com/mochajs/mocha) is used to describe and run tests.

Run tests:
``` bash
$ npm test
```

### Coverage
[istanbul](https://github.com/gotwarlost/istanbul) and [mocha](https://github.com/mochajs/mocha) are used to capture coverage data. 

Run coverage:
``` bash
$ npm run cover
```

Coverage data is written to `./coverage/` and a html report is written to `./coverage/lcov-report/index.html`.

### Continuous Integration
All pull requests and commits are built for the latest versions of node 4, 5, 6 and 7 by [travis-ci](https://travis-ci.org/), and coverage is reported to [coveralls.io](https://travis-ci.org/).

## Licence
The MIT License (MIT)

Copyright (c) 2017 [Jonatan Pedersen](https://www.jonatanpedersen.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
