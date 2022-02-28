// Code de départ
 
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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}






/*
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


let test = document.getElementById("first");

console.log(test);

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnSubmit = document.querySelector(".btn-submit");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector("#closeform"); // fermer la modal en cliquand sur la croix
const modalCloseValidation = document.querySelector("#closevalidation");


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction qui permettent de fermer la modale

// launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn.forEach((btn) => btn.addEventListener("click",() => modalbg.style.display = "block"));


// Click to leave modal Validation
modalClose.addEventListener("click",() => {modalCloseValidation.style.display = "none", modalbg.style.display = "none"});

modalBtnSubmit.addEventListener("click",controlInput());

// FORMULAIRE

// Définition des variables

let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let birthdayDateValid = false;
let quantityTournamentValid = false;
let wichTownValid = false;
let conditionUserValid = false;
let regExpName = /^[A-Za-z\-]{2,}$/;
let reExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regExpNumbers = /^[0-9]*$/;

// Définition des constantes

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdayDate = document.querySelector("#birthdate");
const quantityTournament = document.querySelector("quantity");
const wichTown = document.querySelectorAll('input[name="location"]');
const conditionUser = document.querySelector ("#checkbox1");

// Définition des constantes d'erreur

const errorFirstName = document.querySelector("errorfirstname");
const errorLastName = document.querySelector("errorlastname");


// Fonction de vérification des champs

function controlInput(input,inputError,textErrorEmpty, textError,regex,isValid){
console.log("toto")    
  if (input.value == "") {
    inputError.innerHTML = textErrorEmpty;
    input.style.border = "2px solid #e54858";
    isValid = false;
  } 
  else if (regex.test(input.value)===false) {
      inputError.innerHTML = textError;
      input.style.border = "2px solid #e54858";
      isValid = false;
  } 
  else {
    input.style.border = "0px";
    inputError.innerHTML = "";
    isValid = true;

  }

  return isValid;
}

  // Vérification du champ Prénom

  firstNameValid = controlInput
  (firstName, errorFirstName,
    "Veuillez préciser votre Prénom dans ce champ.",
    "Veuillez entrer au minimum 2 caratères et seulement des lettres.",
    regExpName, firstNameValid);
  
  // Vérification du champ Nom

  lastNameValid = controlInput
  (lastName, errorLastName,
    "Veuillez préciser votre Nom dans ce champ.",
    "Veuillez entrer au minimum 2 caratères et seulement des lettres.",
    regExpName, lastNameValid);
*/