// DOM elements
const $lengthInput = document.querySelector('.length')
const $includeLowercase = document.querySelector('.include-lowercase')
const $includeUppercase = document.querySelector('.include-uppercase')
const $includeNumbers = document.querySelector('.include-numbers')
const $includeSymbols = document.querySelector('.include-symbols')
const $generatePassButton = document.querySelector('.generate-password')
const $passwordDisplay = document.querySelector('.password-display')
const $copyButton = document.querySelector('.copy-password')

// Character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChars = '0123456789'
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?'
