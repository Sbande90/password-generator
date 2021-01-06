window.addEventListener('load', function(){
// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperAndLower = false;
var userInput = "";
var userNumeric = "";
var userCharacters = "";
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+:?";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

}

function generatePassword() {

 upperAndLower = confirm("would you like to use upper and lowercase?");
 console.log(upperAndLower);
 userInput = prompt("how would you like the password to be?", "8");
 console.log(userInput);
 
 userNumeric = confirm("would you like to use a numeric ?");
 userCharacters = confirm("would you like to use a special characters?");
 if(userInput>=8 && userInput<=128){
  createPassword();
}else{
 validatedUserInput();
}
}

function validatedUserInput(){
  userInput = prompt("password must be at least 8 characters and no more than 128 characters", "8");
  if(userInput>=8 && userInput<=128){
    createPassword();
  }else{
   validatedUserInput();
  }
}

function createPassword (){
  var password = "";
  var base = alpha; 
  if (userNumeric==true){
    base = base+numeric

  }
  if (userCharacters==true){
    base = base+special
  }
  var length = base.length-1;
  for(var i = 0 ; i<Number(userInput);i++){
    var index = Math.floor(Math.random() * length)
    password = password+base[index]
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}, false )




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```