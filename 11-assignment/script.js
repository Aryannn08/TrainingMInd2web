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
    clearError("username-error");
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
    clearError("mobile-error");
}
function validateDob(event) {
    const inputDob = document.getElementById("dob").value;
    console.log(inputDob); 
    const dobDate = new Date(inputDob);

    event.preventDefault();

    const year = dobDate.getFullYear();
    const month = dobDate.getMonth() + 1; //months are 0-indexed in JS
    const day = dobDate.getDate();

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    if(inputDob == ""){
        displayError("dob-error","Date of birth is required!");
        return;
    }

    let age = currentYear - year;

    if(currentMonth < month || (currentMonth === month && currentDay < day)){
        age--;
    }
    if(age < 18){
        displayError("dob-error","Age should be at least 18 or older!");
        return;
    }
    clearError("dob-error");
}
function validateEmail(event) {
    const inputEmail = document.getElementById("emailid");
    const value = inputEmail.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    event.preventDefault();
    console.log(inputEmail);
    if(value === ""){
        displayError("email-error","Email is required!");
        return;
    }
    if(!emailPattern.test(value)){
        displayError("email-error","Invalid email format!");
        return;
    }
    clearError("email-error");
}
function validatePassword(event) {
    const inputPass = document.getElementById("password");
    console.log(inputPass);
    const value = inputPass.value.trim();
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
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
        return;
    }
    if(!/[a-zA-Z]/.test(value)){
        displayError("password-error", "Password must contain at least one letter!");
        return;
    }
    clearError("password-error");
}
function validatePassword2(event) {
    const inputPass = document.getElementById("password");
    const inputPass2 = document.getElementById("password2");
    if(inputPass2.value === ""){
        displayError("password2-error","Password is required!");
        return;
    }
    if(inputPass2.value != inputPass.value){
        displayError("password2-error","Password is not matching!");
        return;
    }
    if(inputPass2.value === inputPass.value){
        const errorElement = document.getElementById("password2-error");
        errorElement.textContent = "Password matched.";
        errorElement.style.color = "green";
        return;
    }
    clearError("password2-error");
}
function validatePasswordStrength(event){
    const inputPass = document.getElementById("password").value;
    const inputPass2 = document.getElementById("password2").value;
    if(inputPass === ""){
        document.getElementsByClassName("password-hint")[0].innerHTML = "";
    }
    else if(inputPass.length <= 4){
        document.getElementsByClassName("password-hint")[0].innerHTML = "Weak";
    }
    else if(inputPass.length > 4 && inputPass.length <= 7){
        document.getElementsByClassName("password-hint")[0].innerHTML = "Medium";
    }
    else if(inputPass.length === 8 || inputPass.length > 8){
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
