// Assignment Code
var charArray = [];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // if charArray is empty, then create password
  if (charArray === null) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    // reset array to improve user experience, then create password
    charArray = [];
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randomNumber(length) {
  var index = Math.floor(Math.random() * length);

  return index;
}

/* function to call the methods and generate the password */
function generatePassword() {
  var password = [];
  var length = passwordLength();

  window.alert("You will now be prompted for various inclusions for your generated password. If you select none, you will be defaulted to all allowed for maximum security.");

  if (lowerCaseLetters) {
    lowerCaseLetters();
  }

  if (upperCaseLetters) {
    upperCaseLetters();
  }

  if (numbers) {
    numbers();
  }

  if (specialCharacters) {
    specialCharacters();
  }

  if (!lowerCaseLetters && !upperCaseLetters && !numbers && !specialCharacters) {
    lowerCaseLetters();
    upperCaseLetters();
    numbers();
    specialCharacters();
  }

  for (i = 0; i < length; i++) {
    password.push(charArray[randomNumber(charArray.length)]);
  }

  var passwordString = password.toString().replace(/,/g, '');
  console.log(passwordString);
  console.log(charArray);

  return passwordString;
}



/* function to determine the length of the password */
function passwordLength() {
  var length = window.prompt("Length of password? (between 8 and 128 characters)");

  if (length < 8 || length > 128) {
    window.alert("Sorry, please choose and appropriate password length.")
    return passwordLength();
  } else {
    return length;
  }
}

/* add lower case letters to the password generator character pool */
function lowerCaseLetters() {
  var lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","y","w","x","y","z"];
  var lowerCaseConfirm = window.confirm("Would you like to include lower case letters?");

  if (lowerCaseConfirm) {
    // iterate through lowerCaseChars array
    // and add to charArray for password generation
    for (var i = 0; i < lowerCaseChars.length; i++) {
      charArray.push(lowerCaseChars[i]);
    }
    return true;
  } else {
    return false;
  }
}

/* add upper case letters to the password generator character pool */
function upperCaseLetters() {
  // copy & paste from previous function, to reduce redundancy
  var lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","y","w","x","y","z"];
  var upperCaseConfirm = window.confirm("Would you like to include upper case letters?");

  if (upperCaseConfirm) {
    // iterate through lowerCaseChars array
    // and add to charArray for password generation
    for (var i = 0; i < lowerCaseChars.length; i++) {
      // convert lower case array to upper case
      charArray.push(lowerCaseChars[i].toUpperCase());
    }
    return true;
  } else {
    return false;
    }
  }

/* add numbers to the password generator character pool */
function numbers() {
  var numberChars = ["1","2","3","4","5","6","7","8","9","0"];
  var numberCharConfirm =  window.confirm("Would you like to include numbers?");

  if (numberCharConfirm) {
    // iterate through numberChars array
    // and add to charArray for password generation
    for (var i = 0; i < numberChars.length; i++) {
      charArray.push(numberChars[i]);
    }
    return true;
  } else {
    return false;
  }
}

function specialCharacters () {
  var specialChars = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",  "\\" , "]", "^", "_", "`", "{", "|", "}", "~"];
  var specialCharsConfirm = window.confirm("Would you like to include special characters?");

  if (specialCharsConfirm) {
    // iterate through specialChars array
    // amd add to char Array for password generation
    for(var i = 0; i < specialChars.length; i++) {
      charArray.push(specialChars[i]);
    }
    return true;
  } else {
    return false;
  }
}


