let password=document.getElementById('password');
let showEye=document.getElementById('showEye');
let hideEye=document.getElementById('hideEye');

function passwordShow(){
  password.type = 'text';
  showEye.style.display= "none";
  hideEye.style.display= "inline";
  password.focus();
}
function passwordHide(){
  password.type = 'password';
  showEye.style.display= "inline";
  hideEye.style.display= "none";
  password.focus();
}