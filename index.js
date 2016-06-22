'use strict'

const specials = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüû:'
const mapped = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuu '

/**
 * Generate a URL with spaces replaced by underscores and
 * special characters with normal letters (SEO Friendly).
 * @param {string} name - Text to transform in a URL.
 * @return {string} The URL generated.
 */
function generateURL (name) {
  return name
    .toLowerCase()
    .split('')
    .map(char => {
      if (char === ' ') return '-'
      if (specials.includes(char)) return mapped[ specials.indexOf(char) ]
      return char
    })
    .join('')
}

module.exports = generateURL
