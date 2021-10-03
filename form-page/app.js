// SIGNIN-SIGNUP ANIMATION

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const logo = document.querySelector(".logo-roxo")

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  logo.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  logo.classList.remove("sign-up-mode");
});


// FORM FOCUS ANIMATION

const inputs = document.querySelectorAll(".input")

function focusFunc() {
  let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  
}

function blurFunc() {
  let parent = this.parentNode.parentNode;
    if(this.value == "") {
    parent.classList.remove("focus");
  } 
  
}

  

inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})


