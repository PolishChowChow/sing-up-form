const passwordField1 = document.querySelector("#Password");
const passwordField2 = document.querySelector("#confPassword");
const errorSpan1 = document.querySelector("#error1");
const errorSpan2 = document.querySelector("#error2");
const inputs = document.querySelectorAll("input[type='password']");
let password1 = document.querySelector("#password").value;
let password2 = document.querySelector("#confPassword").value;
inputs[0].addEventListener("change",function(){
        after();
});
inputs[1].addEventListener("change",function(){
    after();
});
window.addEventListener("load",function(){
    checkOnLoad();
})
function checkOnLoad(){
    if(password1 == ""){
        errorSpan1.setAttribute("class","danger");
        errorSpan2.setAttribute("class","danger");
        errorSpan1.textContent = "insert password";
        errorSpan2.textContent = "passwords are incorrect";
    }
}
function valid(){
    errorSpan1.setAttribute("class","success");
    errorSpan2.setAttribute("class","success");
    errorSpan1.textContent = "passwords are correct";
    errorSpan2.textContent = "passwords are correct";
}
function invalid(){
    errorSpan1.setAttribute("class","danger");
    errorSpan2.setAttribute("class","danger");
    errorSpan1.textContent = "passwords don't match";
    errorSpan2.textContent = "passwords don't match";
}
function after(){
    if(document.querySelector("#password").value == document.querySelector("#confPassword").value){
        valid();
    }
    else{
        invalid();
    }
}
