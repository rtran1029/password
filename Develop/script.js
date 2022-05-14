// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Length
  prompt('How long do you want it?')

  // Include Lower case?
  confirm('Include Lowercase Letters?')

  // Include Upper case?
  confirm('Include Uppercase Letters?')

  // Include numbers?
  confirm('Include Numbers?')

  // Include Special Characters?
  confirm('Include Special Characters?')

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to button
generateBtn.addEventListener("click", writePassword);