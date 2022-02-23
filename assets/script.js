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

function generatePassword() {

  var password = "";
  var passwordChar = "";
  // First prompt asking for users password length
  while (true) {
    passwordLength = parseInt(prompt("Choose the length of your password. This needs to be between 8 - 128"));
      // least 8 no more than 128 
    if (passwordLength >= 8 && passwordLength <= 128) {
      //break function stops the unending loop 
      break;
    }
  // Else, return this alert and loop back to the start so they can choose a valid number
  alert("Please select a number between 8 - 128");
}
// After used chooses a number it will proceed by asking which elements to add 
symbols = confirm("Press'OK' to add special characters");
numbers = confirm("Press 'OK' to add numbers");
upperchar = confirm("Press 'OK' to add uppercase letters");
lowerchar = confirm("Press 'OK' to add lowercase letters");


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
