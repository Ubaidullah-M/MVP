let ourLogo = document.querySelector("#logo");
let logIn = document.querySelectorAll(".list-sign");
let Reg = document.querySelectorAll(".list-reg");
let RegForm = document.getElementById("Registration");
let logInForm = document.getElementById("signing");
let resetPassword = document.getElementById("reset-password");
let p = document.getElementsByTagName("p");
let forgetPassword = document.querySelector(".forget");


for (x of logIn) {
    x.addEventListener('click', () => {
        RegForm.style.display = "none";
        logInForm.style.display = "block";
        resetPassword.style.display = "none";
        RegForm.style.transition = ".5s ease-out"
    });
}

for (x of Reg) {
    x.addEventListener('click', () => {
        RegForm.style.display = "block";
        logInForm.style.display = "none";
        resetPassword.style.display = "none";
    });
}


forgetPassword.addEventListener('click', () => {
    RegForm.style.display = "none";
    logInForm.style.display = "none";
    resetPassword.style.display = "block";
});

ourLogo.addEventListener('click', function () {
    RegForm.style.display = "none";
    logInForm.style.display = "none";
    resetPassword.style.display = "none";
})
