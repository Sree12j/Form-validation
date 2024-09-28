let nameError=document.getElementById("name-error");
let emailError=document.getElementById("email-error");
let phnError=document.getElementById("phn-error");
let msgError=document.getElementById("msg-error");
let submitError=document.getElementById("submit-error");
function validateName(){
    var name=document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML="name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        nameError.innerHTML="write full name";
        return false;
    }
   nameError.innerHTML='valid';
   nameError.style.color="green";
   return true;
}
function validatePhn(){
    var phn=document.getElementById("contact-phn").value;
    if(phn.length==0){
        phnError.innerHTML=" Phone number is required";
        return false;
    }
    if(phn.length!=10){
        phnError.innerHTML=" Phone number  should be 10 digit";
        return false;
    }
    if(!phn.match(/^[0-9]{10}$/)){
        phnError.innerHTML=" Phone number  is required";
        return false;
    }
    phnError.innerHTML='valid';
    phnError.style.color="green";
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,7}$/)){
        emailError.innerHTML = "Email invalid";
        return false;
    }
    emailError.innerHTML = 'valid';
    emailError.style.color = "green";
    return true;
}

function validateMsg(){
    var msg=document.getElementById("contact-msg").value;
    var required=30;
    var left=required-msg.length;

    if(left>0){
        msgError.innerHTML=left+"more charachers required";
        return false;
    }
msgError.innerHTML='valid';
msgError.style.color="green";
return true;

}
function validateForm(){
    if(!validateName() || !validateEmail()|| !validatePhn()|| !validateMsg()){
        submitError.style.display='block';
        submitError.innerHTML="please fill the form correctly";
        setTimeout(function(){submitError.style.display='none';},3000)
        return false;
    }
}