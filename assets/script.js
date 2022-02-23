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
// After user chooses a number it will proceed by asking which elements to add 
symbols = confirm("Press'OK' to add special characters");
numbers = confirm("Press 'OK' to add numbers");
upperchar = confirm("Press 'OK' to add uppercase letters");
lowerchar = confirm("Press 'OK' to add lowercase letters");


// Function for options of creating an element 
  if (symbols) {
    passwordChar = sym;
  } else if (numbers) {
    passwordChar = num;
  } else if (upperchar) {
    passwordChar = upper;
  } else if (lowercase) {
    passwordChar = lower;
  } else if (symbols && numbers) {
    passwordChar = sym += num;
  } else if (symbols && upperchar) {
    passwordChar = sym += upper;
  } else if (symbols && lowercase) {
    passwordChar = sym += lower;
  } else if (numbers && upperchar) {
    passwordChar = num += upper;
  } else if (numbers && lowercase) {
    passwordChar = num += lower;
  } else if (upperchar && lowercase) {
    passwordChar = upper += lower;
  } else if (symbols && numbers && upperchar) {
    passwordChar = sym += num += upper;
  } else if (symbols && numbers && lowercase) {
    passwordChar = sym += num += lower;
  } else if (symbols && upperchar && lowercase) {
    passwordChar = sym += upper += lower;
  } else if (lowercase && numbers && upperchar) {
    passwordChar = lower += num += upper;
  } else if (symbols && numbers && upperchar && lowercase) {
    passwordChar = sym += num += upper += lower;
  } else if (!symbols && !numbers && !upperchar && !lowercase)
    alert("You must select at least one criterie, please start again!")

    // For loop to select random characters from the criteria strings
    for (var i = 0; i < passwordLength; i++) {
      var password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
    }
  
    return (password);
}