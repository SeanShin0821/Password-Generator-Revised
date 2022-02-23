// Assignment code here
// Initial generation for button variable 
var generateBtn = document.querySelector("#generate");

// Inputs (char, num, special )
var passwordLength;
var symbols;
var numbers;
var upperchar;
var lowerchar;

// Source for password generation 
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_", "(", ")", "~", "`"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//function for generating password 











// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
