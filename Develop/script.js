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
  let desiredLength = prompt('How many charaters would you like in your new password? (8-128)')

  // Include Lower case?
  let desiredLower = confirm('Include Lowercase Letters?')
  
  // Include Upper case?
  let desiredUpper = confirm('Include Uppercase Letters?')
  
  // Include numbers?
  let desiredNum = confirm('Include Numbers?')
  
  // Include Special Characters?
  let desiredSpChar = confirm('Include Special Characters?')
  
  while (desiredLength < 8 || desiredLength > 128 || isNaN(desiredLength)) {
    desiredLength = prompt('Please enter a number between 8-128')
  }
  var pool = ""

  
  //Creat strings for Charater options
  var allLower = "abcdefghijklmnopqrstuvwxyz"
  var allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var allNum = "1234567890"
  var allSpChar = "!@#$%^&*()_+-=|][{};:<>,./? "

  //creat var (pool) for pool of characters (starts empty)
  
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

  //Add a checker that makes you choose at least 1 set of characters

  
  var pickNumber = Math.floor (desiredLength)
  //creat a forloop to iterate through (desiredLength)
  // console.log(pool[8])
  //code within the forloop will choose random possition from pool
  // console.log(pickNumber)
  // console.log(pool)
  // var fixedPickNumber = pickNumber -1
  var poolLength = pool.length
  console.log(poolLength)
 
  var newPassword = ""

  if (poolLength < 1) {
    alert("***Must Choose at least one set of characters, Please try again***");
  }
  for (var i = 0; i < pickNumber; i++) {
    var randomNumber = Math.floor(Math.random() * poolLength);
    newPassword += pool.substring(randomNumber, randomNumber +1);
  }

  


  return newPassword
  //Math.floor and Math.random ?? (study)
  //math floor rounds down returns whole number intergers
  //math random returns a random number 0-1 but never 1

}


// Add event listener to button
generateBtn.addEventListener("click", writePassword);