// Main click event
document.getElementById("test").addEventListener("click", function () {
    clearAllErrors(); // optional: clear previous errors

    const okName = validateName();
    const okMobile = validateMobile();
    const okDob = validateDob();
    const okEmail = validateEmail();
    const okPassword = validatePassword();
    const okPassword2 = validatePassword2();
    validatePasswordStrength(); // just visual hint

    if (okName && okMobile && okDob && okEmail && okPassword && okPassword2) {
        document.getElementById("userForm").submit(); // submit form to PHP
    }
});

// Validation functions
function validateName() {
    const inputUsername = document.getElementById("username");
    if(inputUsername.value.trim() === ""){
        displayError("username-error","Name is required!");
        return false;
    }
    if(inputUsername.value.trim().length < 5){
        displayError("username-error", "Name should be at least 5 characters!");
        return false;
    }
    clearError("username-error");
    return true;
}

function validateMobile() {
    const inputMobile = document.getElementById("mobile");
    if(inputMobile.value === ""){
        displayError("mobile-error","Mobile number is required!");
        return false;
    }
    if(inputMobile.value.length !== 10){
        displayError("mobile-error","Incorrect mobile number!");
        return false;
    }
    clearError("mobile-error");
    return true;
}

function validateDob() {
    const inputDob = document.getElementById("dob").value;
    const dobDate = new Date(inputDob);

    if(inputDob == ""){
        displayError("dob-error","Date of birth is required!");
        return false;
    }

    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    if(age < 18){
        displayError("dob-error","Age should be at least 18 or older!");
        return false;
    }

    clearError("dob-error");
    return true;
}

function validateEmail() {
    const inputEmail = document.getElementById("emailid");
    const value = inputEmail.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(value === ""){
        displayError("email-error","Email is required!");
        return false;
    }
    if(!emailPattern.test(value)){
        displayError("email-error","Invalid email format!");
        return false;
    }

    clearError("email-error");
    return true;
}

function validatePassword() {
    const inputPass = document.getElementById("password");
    const value = inputPass.value.trim();

    if(value === ""){
        displayError("password-error","Password is required!");
        return false;
    }
    if(value.length < 8){
        displayError("password-error","Password should be at least 8 characters!");
        return false;
    }
    if (!/\d/.test(value)) {
        displayError("password-error", "Password must contain at least one number!");
        return false;
    }
    if(!/[a-zA-Z]/.test(value)){
        displayError("password-error", "Password must contain at least one letter!");
        return false;
    }

    clearError("password-error");
    return true;
}

function validatePassword2() {
    const inputPass = document.getElementById("password");
    const inputPass2 = document.getElementById("password2");

    if(inputPass2.value === ""){
        displayError("password2-error","Password is required!");
        return false;
    }
    if(inputPass2.value != inputPass.value){
        displayError("password2-error","Password is not matching!");
        return false;
    }

    const errorElement = document.getElementById("password2-error");
    errorElement.textContent = "Password matched.";
    errorElement.style.color = "green";
    return true;
}

function validatePasswordStrength() {
    const inputPass = document.getElementById("password").value;
    const hint = document.getElementsByClassName("password-hint")[0];

    if(inputPass === ""){
        hint.innerHTML = "";
    }
    else if(inputPass.length <= 4){
        hint.innerHTML = "Weak";
    }
    else if(inputPass.length <= 7){
        hint.innerHTML = "Medium";
    }
    else {
        hint.innerHTML = "Strong";
    }
}

// Helper functions
function displayError(id, text) {
    document.getElementById(id).innerHTML = text;
}

function clearError(id){
    document.getElementById(id).innerHTML = "";
}

function clearAllErrors(){
    const errors = document.getElementsByClassName("error");
    for(let i=0; i<errors.length; i++){
        errors[i].innerHTML = "";
    }
}
