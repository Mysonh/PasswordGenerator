// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL= []
for(let letter of lettersU){
  lettersL.push(letter.toLowerCase());
}
console.log(lettersU, lettersL);

function generatePassword(){

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length = 8){
  var lower="qwertyuioplkjhgfdsazxcvbnm";
  var upper="QWERTYUIOPLKJHGFDSAZXCVBNM";
  var numbers="1234567890";
  var special="!@#$%&";

 

  var length= prompt("How Many Characters do  you want the password?")
if(length < 8 || length > 120) {
  alert("Length must be between 8 and 120 characters")
  return
}

 var uppertrue= confirm("Do you want uppercase letters?")
 var specialtrue= confirm("Do you want special characters?")
 var numberstrue= confirm("Do you want numbers?")
 console.log(uppertrue,length)
console.log(specialtrue,numberstrue)

var password=""
for(var i = 0; i < length; i++){
  var num=Math.floor(Math.random()*lower.length)
var char=lower[num]
password+=char
var char1=upper[num]
password+=char1
var char2=numbers[num]
password+=char2
var char3=special[num]
password+=char3
}

return password;



}