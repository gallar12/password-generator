// Assignment code here
// Characters' Array 
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var  uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"]

function generatePassword () {

  var answerPasswrodLenght = window.prompt ("How long do you want your password to be? (min:8, max:128)");
  var lenght = Number(answerPasswrodLenght);
  if(isNaN(lenght) || lenght<8 || lenght >128) {
    alert("Invalid Input lenght must be between 8 and 128");
    return;
  }
  var charactertypes = []
  var answerUppercaseLetters = window.prompt("Do you want to include uppercase letters? (yes/no)");
  var includesUppercase = answerUppercaseLetters === "yes";
  if (includesUppercase) {
    charactertypes = charactertypes.concat(uppercaseLetters);
  }
  var answerLowecaseLetters = window.prompt("Do you want to include lowercase letters? (yes/no)");
  var includesLowercase = answerLowecaseLetters === "yes";
  if (includesLowercase) {
    charactertypes = charactertypes.concat(lowercaseLetters);
  }
  var answerInteger = window.prompt("Do you want to include numbers? (yes/no)");
  var includesInteger = answerInteger === "yes";
  if (includesInteger) {
    charactertypes = charactertypes.concat(numbers);
  }
  var answerSpecialCharacters = window.prompt("Do you want to include special characters? (yes/no)")
  var includesSpecialCharacters = answerSpecialCharacters === "yes";
  if (includesSpecialCharacters) {
    charactertypes = charactertypes.concat(specialCharacters);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var password = []
  for(let i=0; i<lenght ; i++) {
    var randomNumber = getRandomInt(charactertypes.length -1);
    var nextCharacter = charactertypes[randomNumber];
    password.push(nextCharacter);
  }
  
  return password.join('');

}



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
