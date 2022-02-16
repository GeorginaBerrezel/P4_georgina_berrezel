function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector("#closeform"); // fermer la modal en cliquand sur la croix
const modalCloseValidation = document.querySelector("#closevalidation");


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/*---- Fonction qui permettent de fermer la modale ----*/

// launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn.forEach((btn) => btn.addEventListener("click",() => modalbg.style.display = "block"));

// Click to leave
modalClose.addEventListener("click",() => modalbg.style.display = "none");

// Click to leave modal Validation
modalClose.addEventListener("click",() => modalCloseValidation.style.display = "none");