// Assignment Code
var generateBtn = document.querySelector("#generate");


let characterLength = 8;
let characterTypes = [];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numericValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let specialCharacters = [')', '#', '$', '%', '!', '*', '^', '>', ',', '`', '<', '?', '('];



function generatePassword() {
  let password = "";
  for(var i = 0; i < characterLength; i++) {
    let randomDigit = Math.floor(Math.random() * characterTypes.length);
    password = password + characterTypes[randomDigit];
  }
  return password;
}

// Write password to the #password input

function writePassword() {
  let passPrompt = initiatePrompt(); 
  var passwordText = document.querySelector("#password");
  if(passPrompt) {
    var generatedPassword = generatePassword();
    passwordText.value = generatedPassword;
    
  } 
}


function initiatePrompt(){

  characterLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number between 8 and 128");
    return false;
  }

  if (confirm("Do you want to include lowercase letters?")) {
    characterTypes = characterTypes.concat(lowerCase);
  }

  if (confirm("Do you want to include uppercase letters?")) {
    characterTypes = characterTypes.concat(upperCase);
  }

  if (confirm("Do you want to unclude numbers?")) {
    characterTypes = characterTypes.concat(numericValues);
  }

  if (confirm("Do you want to include special characters?")) {
    characterTypes = characterTypes.concat(specialCharacters);
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
