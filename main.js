// DOM elements
const $lengthInput = document.querySelector('.length')
const $includeLowercase = document.querySelector('.include-lowercase')
const $includeUppercase = document.querySelector('.include-uppercase')
const $includeNumbers = document.querySelector('.include-numbers')
const $includeSymbols = document.querySelector('.include-symbols')
const $p_alert = document.querySelector('.p-alert')
const $generatePassButton = document.querySelector('.generate-password')
const $passwordDisplay = document.querySelector('.password-display')
const $copyButton = document.querySelector('.copy-password')

// Character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChars = '0123456789'
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?'

// Function to generate the password
const generatePassword = () => {
  // Get the desired password length from the input
  const length = parseInt($lengthInput.value)

  const options = {
    lowercase: $includeLowercase.checked, // Check if lowercase letters should be included
    uppercase: $includeUppercase.checked, // Check if uppercase letters should be included
    numbers: $includeNumbers.checked, // Check if numbers should be included
    symbols: $includeSymbols.checked, // Check if symbols should be included
  }

  // Validate that at leats one option is selected
  if (Object.values(options).every((option) => !option)) {
    return ($p_alert.textContent = 'Please select at least one character type')
  }

  // Validate that the length is within the valid range
  if (length < 6 || length > 6) {
    return ($p_alert.textContent =
      'Password length must be between 6 and 20 characters')
  }
}
