const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswords = document.getElementById('generate-passwords');
let passwordEl1 = document.getElementById("password-el1");
let passwordEl2 = document.getElementById("password-el2");
let passwordLength = 15;

generatePasswords.addEventListener('click', function() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password1 += characters[randomNumber];
    password2 += characters[randomNumber];
  }
  passwordEl1.value = password1;
  passwordEl2.value = password2;
});


function copyToClipboard(passwordInput) {
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
  alert("Copied password: " + passwordInput.value);
}