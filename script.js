// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = prompt("How long do you want your password?", "Pass Length");
  if (!!(passwordLength < 8 || passwordLength >128 || (passwordLength % 1) != 0)) {
    return "Password length must be a number between 8 and 128";
  } 

  var passwordSym = confirm("Do you want Symbols in your password?");
  var passwordUpp = confirm("Do you want capital letter in your password?");
  var passwordNum = confirm("Do you want numbers in your password?");
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var symbols = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-', '.', '/', ':', `;`, `<`, `=`, `>`, `?`, `@`, "[", `]`, `^`, `_`, `{`, `|`, `}`, `~`];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var pass = lowerCase;

  if (passwordSym = 1){
    pass = pass.concat(symbols);
  }
  if (passwordUpp = 1){
    pass = pass.concat(upperCase);
  }
  if (passwordNum = 1){
    pass = pass.concat(numbers)
  }
  

  

  return pass;

}
