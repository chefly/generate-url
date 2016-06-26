[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/Chefly/generate-url.svg?branch=master)](https://travis-ci.org/Chefly/generate-url)
[![npm version](https://badge.fury.io/js/generate-url.svg)](https://badge.fury.io/js/generate-url)

# generate-url
Generate a SEO-friendly URL from a name

## Motivation
Designed for use in projects RESTful API. It can be used to create a new resource and use their URL for indexing instead of self-generated ID database or a random generator IDs.

## Instalation
```
$ npm install generate-url
```

## Usage
```js
const generateUrl = require('generate-url')

return generateUrl('Macaroni and cheese')
// macaroni-and-cheese
return geneateUrl('Créme of Puréé')
// creme-of-puree
```

## License
The MIT License (MIT)

Copyright (c) 2016 Chefly Food Sharing, S.L.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
