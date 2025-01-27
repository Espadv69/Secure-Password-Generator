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
  if (length < 6 || length > 20) {
    return ($p_alert.textContent =
      'Password length must be between 6 and 20 characters')
  }

  // Build the pool of availble characters based on selected options
  let availbleChars = ''
  if (options.lowercase) availbleChars += lowercaseChars // Add lowercase letters if selected
  if (options.uppercase) availbleChars += uppercaseChars // Add uppercase letters if selected
  if (options.numbers) availbleChars += numberChars // Add numbers if selected
  if (options.symbols) availbleChars += symbolChars // Add symbols if selected

  // Generate the password
  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availbleChars.length) // Get a random index
    password += availbleChars[randomIndex] // Append the corresponding character to the password
  }

  $passwordDisplay.textContent = password // Display the generated password in the DOM
}

// Function to copy the password to the clipboard
const copyToClipboard = () => {
  const password = $passwordDisplay.textContent
  if (!password) {
    return ($p_alert.textContent = 'No password to copy!') // Show an error message if there's no password
  }

  navigator.clipboard.writeText(password).then(() => {
    $p_alert.textContent = 'Password copied to clipboard!' // Notify the user that the password was copied
  })
}

// Event listener for the "Generate Password" button
$generatePassButton.addEventListener('click', generatePassword)

// Event listener for the "Copy to clipboard" button
$copyButton.addEventListener('click', copyToClipboard)
