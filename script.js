// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Alert the results


function generatePassword() {
  var length = prompt("How long do you want your password to be?"),
      charset = prompt("What characters do you want to include in your password?"),
      retVal = "";
      n = charset.length;
  for (var i = 0;  i < length; i++) {
      
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(retVal);
  return retVal;
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
