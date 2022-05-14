// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // // Length
  // let desiredLength = prompt('How long do you want it?')

  // // Include Lower case?
  // let desiredLower = confirm('Include Lowercase Letters?')

  // // Include Upper case?
  // let desiredUpper = confirm('Include Uppercase Letters?')

  // // Include numbers?
  // let desiredNum = confirm('Include Numbers?')

  // // Include Special Characters?
  // let desiredSpChar = confirm('Include Special Characters?')

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Length
  let desiredLength = prompt('How long do you want it?')

  // Include Lower case?
  let desiredLower = confirm('Include Lowercase Letters?')
  
  // Include Upper case?
  let desiredUpper = confirm('Include Uppercase Letters?')
  
  // Include numbers?
  let desiredNum = confirm('Include Numbers?')
  
  // Include Special Characters?
  let desiredSpChar = confirm('Include Special Characters?')
  
  while (desiredLength < 8 || desiredLength > 124 || isNaN(desiredLength)) {
    desiredLength = prompt('Please enter a number between 8-124')
  }
  
  //Creat strings for Charater options
  var allLower = "abcdefghijklmnopqrstuvwxyz"
  var allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var allNum = "1234567890"
  var allSpChar = "!@#$%^&*()_+-=|][{};:<>,./? "

  //creat var (pool) for pool of characters (starts empty)
  var pool = ""

  //write if statments to to concat strings into pool variable if true
  if (desiredLower) {
  pool = pool.concat(allLower)
  }
  if (desiredUpper) {
    pool = pool.concat(allUpper)
  }
  if (desiredNum) {
    pool = pool.concat(allNum)
  }
  if (desiredSpChar) {
    pool = pool.concat(allSpChar)
  }

  return pool
  console.log(pool)

  //Math.floor and Math.random ?? (study)
  //math floor rounds down returns whole number intergers
  //math random returns a random number 0-1 but never 1

}

// Add event listener to button
generateBtn.addEventListener("click", writePassword);