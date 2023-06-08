let ourLogo = document.querySelector("#logo");
let logIn = document.querySelectorAll(".list-sign");
let Reg = document.querySelectorAll(".list-reg");
let RegForm = document.getElementById("Registration");
let logInForm = document.getElementById("signing");
let resetPassword = document.getElementById("reset-password");
let p = document.getElementsByTagName("p");
let forgetPassword = document.querySelector(".forget");
let home = document.querySelector(".home");
let body = document.querySelector("body")
let menu = document.querySelector("#menu")
let close = document.querySelector("#close")
let list = document.querySelector("#list-menu")


menu.addEventListener("click", function() {
    list.classList.add("mobile")
})

close.addEventListener("click", function() {
    list.classList.remove("mobile")
})


for (x of logIn) {
    x.addEventListener('click', () => {
        RegForm.style.display = "none";
        logInForm.style.display = "block";
        resetPassword.style.display = "none";
        RegForm.style.transition = ".5s ease-out"
        body.style.background = "rgba(0,0,0,0.25)"
    });
}

for (x of Reg) {
    x.addEventListener('click', () => {
        RegForm.style.display = "block";
        logInForm.style.display = "none";
        resetPassword.style.display = "none";
        body.style.background = "rgba(0,0,0,0.25)"
    });
}


forgetPassword.addEventListener('click', () => {
    RegForm.style.display = "none";
    logInForm.style.display = "none";
    resetPassword.style.display = "block";
    body.style.background = "rgba(0,0,0,0.25)"
});

ourLogo.addEventListener('click', function () {
    RegForm.style.display = "none";
    logInForm.style.display = "none";
    resetPassword.style.display = "none";
})


home.addEventListener('click', function () {
    RegForm.style.display = "none";
    logInForm.style.display = "none";
    resetPassword.style.display = "none";
})
