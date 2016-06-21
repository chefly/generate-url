'use strict'

/**
 * Generate a URL with spaces replaced by underscores (SEO Friendly).
 * @param {string} name - Text to transform in a URL.
 * @return {string} The URL generated.
 */
function generateURL (name) {
  return name
    .toLowerCase()
    .split('')
    .map(letter => (letter === ' ') ? '-' : letter)
    .join('')
}

module.exports = generateURL
