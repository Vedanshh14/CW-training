let form = document.querySelector("form");


let fname = document.getElementById("firstName");
let lname = document.getElementById("lastName");
let email = document.getElementById("email");
let message = document.getElementById("message");
let consent = document.getElementById("consent");
let mainCard = document.querySelector(".main-card");
let emailGroup = document.querySelector(".email-group")


let generalQuery = document.querySelector('input[value="general"]');
let supportQuery = document.querySelector('input[value="support"]');


let successMessage = document.getElementById("successMessage");

let gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

function resetErrors() {
  document.querySelectorAll(".form-group").forEach(group => {
    group.classList.remove("has-error");
  });

  
// group.querySelector(".error-invalid").style.display = "none";
emailGroup.querySelector(".error-presence").style.display = "none";
  emailGroup.querySelector(".error-invalid").style.display = "none";

  document.querySelectorAll(".error-required").forEach(e => e.style.display = "none");
  
}


form.addEventListener("submit", function (e) {
  e.preventDefault();
  resetErrors();

  let hasError = false;

  if (!fname.value.trim()) {
    fname.closest(".form-group").classList.add("has-error");
    hasError = true;
  }

  if (!lname.value.trim()) {
    lname.closest(".form-group").classList.add("has-error");
    hasError = true;
  }
 let emailValue = email.value.trim();
let group = email.parentElement;
  if (!emailValue) {
   
   group.classList.add("has-error");
  group.querySelector(".error-presence").style.display = "block";
  hasError = true;
  } 
   else if (email.value.trim() && !gmailRegex.test(email.value.trim())) {
  group.classList.add("has-error");
  group.querySelector(".error-invalid").style.display = "block";
  hasError = true;
}

  if (!generalQuery.checked && !supportQuery.checked) {
    generalQuery.closest(".form-group").classList.add("has-error");
    hasError = true;
  }

  if (!message.value.trim()) {
    message.closest(".form-group").classList.add("has-error");
    hasError = true;
  }

  if (!consent.checked) {
    consent.closest(".form-group").classList.add("has-error");
    hasError = true;
  }

  if (!hasError) {
    successMessage.hidden = false;
    mainCard.hidden = true;
    // form.hidden = true;
  }
});