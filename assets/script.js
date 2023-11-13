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
  
  var passObj ={
   passwordLength: "",
    passwordSym: "",
    passwordUpp: "",
    passwordNum: "",
    passworkLow: "",
    pass:"",
    lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    upperCase: ['A', 'B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    symbols: ['!','"','#','$','%','&',"'",'(',')','*','+','-', '.', ',', '/', ':', `;`, `<`, `=`, `>`, `?`, `@`, "[", `]`, `^`, `_`, `{`, `}`, `~`],
    numbers: ['0','1','2','3','4','5','6','7','8','9'],
    pass: "",
    passBank:[],
  }

  passObj.passwordLength = prompt("How long do you want your password?", "Pass Length");
  if (!!(passObj.passwordLength < 8 || passObj.passwordLength >128 || (passObj.passwordLength % 1) != 0)) {
    return "Password length must be a number between 8 and 128.";
  } 

  passObj.passwordSym = confirm("Click OK for symbols in your password");
  passObj.passwordUpp = confirm("Click OK for capital letters in your password");
  passObj.passwordNum = confirm("Click OK for numbers in your password");
  passObj.passwordLow = confirm("Click OK for lower case letters in your password");

  if(!passObj.passwordSym && !passObj.passwordUpp && !passObj.passwordNum && !passObj.passwordLow){
    return "Password must use at least 1 set of characters.";
  } 

return randomPassGen(passObj);
}

function randomPassGen(passObj){
  passObj.pass = "";
  passObj.passBank = [];

  if (passObj.passwordLow){
    passObj.passBank = passObj.passBank.concat(passObj.lowerCase);
  }
  if (passObj.passwordSym){
    passObj.passBank = passObj.passBank.concat(passObj.symbols);
  }
  if (passObj.passwordUpp){
    passObj.passBank = passObj.passBank.concat(passObj.upperCase);
  }
  if (passObj.passwordNum){
    passObj.passBank = passObj.passBank.concat(passObj.numbers);
  }
  for (let i=0;i<passObj.passwordLength;i++){
    passObj.pass = passObj.pass + passObj.passBank[Math.floor(Math.random()*passObj.passBank.length)];
  }
  return passChecker(passObj);
}
function passChecker(passObj){
  var passChar ="";
  var lowCheck = 0;
  var upperCheck = 0;
  var symbolCheck = 0;
  var numCheck = 0;
  
  for (let j=0; j<passObj.passwordLength;j++){
    passChar = passObj.pass.substring(j,j+1);
    if(passObj.lowerCase.includes(passChar)){
      lowCheck = 1;
    }
    if(passObj.upperCase.includes(passChar)){
      upperCheck = 1;
    }
    if(passObj.symbols.includes(passChar)){
      symbolCheck = 1;
    }
    if(passObj.numbers.includes(passChar)){
      numCheck = 1;
    }
  }

  if (!!(passObj.passwordLow && lowCheck == 0)){
    return randomPassGen(passObj);
  }
  if (!!(passObj.passwordSym && symbolCheck==0)){
    return randomPassGen(passObj);
  }
  if (!!(passObj.passwordUpp && upperCheck==0)){
    return randomPassGen(passObj);
  }
  if (!!(passObj.passwordNum && numCheck==0)){
    return randomPassGen(passObj);
  }
  
  return passObj.pass;
}
