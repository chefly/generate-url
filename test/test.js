'use strict'

const test = require('tape')
const generateURL = require('../')

test('Generate URL from a name', t => {
  t.plan(1)

  let uri = generateURL('Macaroni and cheese')
  t.equals(uri, 'macaroni-and-cheese')
})

test('Generate URL from a name with special characters', t => {
  t.plan(1)

  let uri = generateURL('Créme of Purée')
  t.equals(uri, 'creme-of-puree')
})
