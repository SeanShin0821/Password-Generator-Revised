// Assignment code here
// Initial generation for button variable 
var generateBtn = document.querySelector("#generate");

// Inputs (char, num, special ) //
var passwordLength;
var symbols;
var numbers;
var upperchar;
var lowerchar;
// Variable Declaration 
var confirmLength = "";
var confirmsymbols;
var confirmnumbers;
var confirmupperchar;
var confirmlowerchar;// // 

// Source for password generation 
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_", "(", ")", "~", "`"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//function for generating password 

function generatePassword() {

  var password = "";
  var passwordChar = passwordLength;
  // First prompt asking for users password length
  while (true) {
    passwordLength = parseInt(prompt("Choose the length of your password. It needs to be between 8 - 128"));
      // At least 8 no more than 128 
    if (passwordLength >= 8 && passwordLength <= 128) {
      //break function stops the unending loop 
      break;
    }
  alert("Please select a number between 8 - 128");
}
// After user chooses a number it will proceed by asking which elements to add 
symbols = confirm("Press 'OK' to add special characters");
numbers = confirm("Press 'OK' to add numbers");
upperchar = confirm("Press 'OK' to add uppercase letters");
lowerchar = confirm("Press 'OK' to add lowercase letters");



// Function for options of creating an element 
  if (symbols) {
    passwordChar = sym;
    // start with single options (number, upper, lower, symbol)
  } else if (numbers) {
    passwordChar = num;
  } else if (upperchar) {
    passwordChar = upper;
  } else if (lowerchar) {
    passwordChar = lower;
    // Combination of two elements using AND function if one is true other is too 
  } else if (symbols && numbers) {
    passwordChar = sym + num;
  } else if (symbols && upperchar) {
    passwordChar = sym + upper;
  } else if (symbols && lowerchar) {
    passwordChar = sym + lower;
  } else if (numbers && upperchar) {
    passwordChar = num + upper;
  } else if (numbers && lowerchar) {
    passwordChar = num + lower;
  } else if (upperchar && lowerchar) {
    passwordChar = upper + lower;
    // Combination of three elements using AND function if one is true other two.
  } else if (symbols && numbers && upperchar) {
    passwordChar = sym + num + upper;
  } else if (symbols && numbers && lowerchar) {
    passwordChar = sym + num + lower;
  } else if (symbols && upperchar && lowerchar) {
    passwordChar = sym + upper + lower;
  } else if (lowerchar && numbers && upperchar) {
    passwordChar = lower + num + upper;
    // Combination of four elements using AND function of one is true other three is. 
  } else if (symbols && numbers && upperchar && lowerchar) {
    passwordChar = sym + num + upper + lower;
  } else if (!symbols && !numbers && !upperchar && !lowerchar)
    alert("At least choose a single material")

    // FOr loop //
  for (var i = 0; i < passwordLength; i++) {
      var password = passwordChar[Math.floor(Math.random() * password.length)]
  }
  
  return password;
  }



  //original document from here 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);