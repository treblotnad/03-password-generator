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

//function to generate dialog and randomly generate password based on case, numeric or symbol selection.
//selection for password length must be between 8 and 128
function generatePassword(){
  var passwordLength = prompt("How long do you want your password?", "Pass Length");
  if (!!(passwordLength < 8 || passwordLength >128 || (passwordLength % 1) != 0)) {
    return "Password length must be a number between 8 and 128.";
  } 

  var passwordSym = confirm("Do you want symbols in your password?");
  var passwordUpp = confirm("Do you want capital letters in your password?");
  var passwordNum = confirm("Do you want numbers in your password?");
  var passwordLow = confirm("Do you want lower case letters in your password?");

  if(!passwordSym && !passwordUpp && !passwordNum && !passwordLow){
    return "Password must use at least 1 set of characters.";
  } 

  var upperCase = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var symbols = ['!','"','#','$','%','&',"'",'(',')','*','+','-', '.', ',', '/', ':', `;`, `<`, `=`, `>`, `?`, `@`, "[", `]`, `^`, `_`, `{`, `|`, `}`, `~`];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var passBank = [];
  var pass ="";

  if (passwordLow == true){
    passBank = passBank.concat(lowerCase);
  }
  if (passwordSym == true){
    passBank = passBank.concat(symbols);
  }
  if (passwordUpp == true){
    passBank = passBank.concat(upperCase);
  }
  if (passwordNum == true){
    passBank = passBank.concat(numbers);
  }

  for (let i=0;i<passwordLength;i++){
    pass = pass + passBank[Math.floor(Math.random()*passBank.length)];
  }

  return pass;
}
