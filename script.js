// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = "";
var passwordSym = "";
var passwordUpp = "";
var passwordNum = "";
var passwordLow = "";
var pass ="";
var upperCase = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbols = ['!','"','#','$','%','&',"'",'(',')','*','+','-', '.', ',', '/', ':', `;`, `<`, `=`, `>`, `?`, `@`, "[", `]`, `^`, `_`, `{`, `|`, `}`, `~`];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var passBank = [];

// Write password to the #password input
function writePassword() {
  pass= "";
  passBank = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate dialog and randomly generate password based on case, numeric or symbol selection.
//selection for password length must be between 8 and 128
function generatePassword(){
  passwordLength = prompt("How long do you want your password?", "Pass Length");
  if (!!(passwordLength < 8 || passwordLength >128 || (passwordLength % 1) != 0)) {
    return "Password length must be a number between 8 and 128.";
  } 

  passwordSym = confirm("Do you want symbols in your password?");
  passwordUpp = confirm("Do you want capital letters in your password?");
  passwordNum = confirm("Do you want numbers in your password?");
  passwordLow = confirm("Do you want lower case letters in your password?");

  if(!passwordSym && !passwordUpp && !passwordNum && !passwordLow){
    return "Password must use at least 1 set of characters.";
  } 

return randomPassGen();
}

function randomPassGen(){
  

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
  return passChecker();
}
function passChecker(){
  var passChar ="";
  var lowCheck = 0;
  var upperCheck = 0;
  var symbolCheck = 0;
  var numCheck = 0;
  
  for (let j=0; j<passwordLength;j++){
    passChar = pass.substring(j,j+1);
    if(lowerCase.includes(passChar)){
      lowCheck = 1;
    }
    if(upperCase.includes(passChar)){
      upperCheck = 1;
    }
    if(symbols.includes(passChar)){
      symbolCheck = 1;
    }
    if(numbers.includes(passChar)){
      numCheck = 1;
    }
  }

  if (!!(passwordLow == true && lowCheck == 0)){
    return "Not all Types Present: "+ pass;
  }
  if (!!(passwordSym == true && symbolCheck==0)){
    return "Not all Types Present: "+ pass;
  }
  if (!!(passwordUpp == true && upperCheck==0)){
    return "Not all Types Present: "+ pass;
  }
  if (!!(passwordNum == true && numCheck==0)){
    return "Not all Types Present: "+ pass;
  }
  
  return pass;
}
