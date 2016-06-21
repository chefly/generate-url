'use strict'

const test = require('tape')
const generateURL = require('../')

test('Generate Url from name', t => {
  t.plan(1)

  let uri = generateURL('Macaroni and cheese')
  t.equals(uri, 'macaroni-and-cheese')
})
