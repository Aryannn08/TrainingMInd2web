function validateForm(event){
    validateName(event);
    validateMobile(event);
    validateDob(event);
    validateEmail(event);
    validatePassword(event);
    validatePassword2(event);
    validatePasswordStrength(event);
}
function validateName(event) {
    const inputUsername = document.getElementById("username");
    event.preventDefault();
    console.log(inputUsername.value);
    if(inputUsername.value.trim() === ""){
        displayError("username-error","Name is required!");
        return;
    }
    if(inputUsername.value.trim().length < 5){
        displayError("username-error", "Name should be at least of 5 characters!");
        return;
    }
}
function validateMobile(event) {
    const inputMobile = document.getElementById("mobile");
    event.preventDefault();
    console.log(inputMobile.value);
    if(inputMobile.value === ""){
        displayError("mobile-error","Mobile number is required!");
        return;
    }
    if(inputMobile.value.length !== 10){
        displayError("mobile-error","Incorrect mobile number!");
        return;
    }
}
function validateDob(event) {
    const inputDob = document.getElementById("dob");
    event.preventDefault();
    console.log(inputDob.value);
    if(inputDob.value == ""){
        displayError("dob-error","Date of birth is required!");
        return;
    }
    clearError("dob-error");
}
function validateEmail(event) {
    const inputEmail = document.getElementById("emailid");
    event.preventDefault();
    console.log(inputEmail);
    if(inputEmail.value === ""){
        displayError("email-error","Email is required!");
        return;
    }
    if(!inputEmail.value.includes("@")){
        displayError("email-error","Incorrect email format!");
        return;
    }
    clearError("email-error");
}
function validatePassword(event) {
    const inputPass = document.getElementById("password");
    const hint = document.getElementById("passwordhint");
    console.log(inputPass);
    const value = inputPass.value.trim();
    if(value === ""){
        displayError("password-error","Password is required!");
        return;
    }
    if(value.length < 8){
        displayError("password-error","Password should be at least 8 characters!");
        return;
    }
    if (!/\d/.test(value)) {
        displayError("password-error", "Password must contain at least one number!");
    }
    // if(!/[a-zA-Z]/.test(value)){
    //     displayError("password-error", "Password must contain at least one letter!");
    //     return;
    // }
    clearError("password-error");
}
function validatePassword2(event) {
    const inputPass = document.getElementById("password");
    const inputPass2 = document.getElementById("password2");
    if(inputPass2.value === ""){
        displayError("password2-error","Password is required!");
        return;
    }
    if(inputPass.value != inputPass2.value){
        displayError("password2-error","Password is not matching!");
        return;
    }

}
function validatePasswordStrength(event){
    const inputPass = document.getElementById("password").value;
    const inputPass2 = document.getElementById("password2").value;
    if(inputPass === "" || inputPass2 === ""){
        document.getElementsByClassName("password-hint")[0].innerHTML = "";
    }
    else if(inputPass.length < 4 || inputPass2.length < 4){
        document.getElementsByClassName("password-hint")[0].innerHTML = "Weak";
    }
    else if(inputPass.length >= 4 && inputPass.length < 7 || inputPass2.length >= 4 && inputPass.length < 7){
        document.getElementsByClassName("password-hint")[0].innerHTML = "Medium";
    }
    else if(inputPass.length >= 7 && inputPass2.length >= 7){
        document.getElementsByClassName("password-hint")[0].innerHTML = "Strong";
    }
}

function displayError(id, text) {
    document.getElementById(id).innerHTML = text;
}

function clearError(id){
    document.getElementById(id).innerHTML = "";
}
document.getElementById("test").addEventListener("click", validateForm);
