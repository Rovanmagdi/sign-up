var form2=document.getElementById("myModal2");
var signup=document.getElementById("signup");
var form1=document.getElementById("exampleModal");
var login=document.getElementById("login");

login.addEventListener("click",getformdata1);
function getformdata1(e){
    e.preventDefault();
    var formdata=new FormData(form1);
    console.log(formdata.get('namefeild')  + " - " +formdata.get('passfeild'));
}

signup.addEventListener("click",getformdata);
function getformdata(e){
    e.preventDefault();
    var formdata=new FormData(form2);
    console.log(formdata.get('namefeild') + " - " +formdata.get('emailfeild') + " - " +formdata.get('passfeild') + " - " +formdata.get('verifypassfeild'));
}
// //////////////////////////////////
var password = document.getElementById("password")
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;






