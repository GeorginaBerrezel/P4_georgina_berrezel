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
const modalClose = document.querySelector("#closeform"); /*croix pour fermer la modal*/
const modalBtnSubmit = document.querySelector('.btn-submit');
/*console.log(modalClose);*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  /*console.log('test');*/
  modalbg.style.display = "block";
}
function closeModal() {
  /*console.log('toto');*/
  modalbg.style.display = "none";
}

function controlInput() {
  console.log('controlinput');
}
/*
let test = document.getElementById("first");
console.log(test);
*/

// FORMULAIRE

// Définition des variables

let firstNameValid = false;
/*console.log(firstNameValid);*/

let lastNameValid = false;
console.log(lastNameValid);

let emailValid = false;
let birthdayDateValid = false;
let quantityTournamentValid = false;
let wichTownValid = false;
let conditionUserValid = false;
let regExpName = /^[A-Za-z\-]{2,}$/;
let regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regExpNumbers = /^[0-9]*$/;


// Définition des constantes

const firstName = document.querySelector("#first");
/*console.log(firstName);*/

const lastName = document.querySelector("#last");
console.log(lastName);

const email = document.querySelector("#email");
console.log(email);

const birthdayDate = document.querySelector("#birthdate");
const quantityTournament = document.querySelector("quantity");
const wichTown = document.querySelectorAll('input[name="location"]');
const conditionUser = document.querySelector("#checkbox1");

// Définition des constantes d'erreur 

const errorFirstName = document.querySelector("#errorfirstname");
/*console.log(errorFirstName);*/

const errorLastName = document.querySelector("#errorlastname");
/*console.log(errorLasttName);*/

const errorEmail = document.querySelector("#erroremail");
const errorBirthdate = document.querySelector("#errorbirthdate");
const errorQuantityTournament = document.querySelector("#errorquantitytournament");
const errorWhichTown = document.querySelector("#errorwhichtown");
const errorConditionUser = document.querySelector("#errorconditionuser");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction qui permettent de fermer la modale

// launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn.forEach((btn) => btn.addEventListener("click", () => modalbg.style.display = "block"));


// Click to leave modal Validation

// Vérification des champs prénom, nom et email
modalBtnSubmit.addEventListener("click", controlForm);
function controlForm() {
  console.log('controlForm')
  firstNameValid = controlInput(firstName, errorFirstName,
    "Veuillez préciser votre Prénom dans ce champ.", "Veuillez entrer au minimum 2 caratères et seulement des lettres.",
    regExpName, firstNameValid);

  lasttNameValid = controlInput(lastName, errorLastName,
    "Veuillez préciser votre Nom dans ce champ.", "Veuillez entrer au minimum 2 caratères et seulement des lettres.",
    regExpName, lastNameValid);

  emailValid = controlInput(email, errorEmail,
    "L'adresse email saisie est incorrecte.",
    regExpEmail, emailValid);

}

// Fonction de vérification des champs
/*console.log(firstName.value);*/
function controlInput(input, inputError, textErrorEmpty, textError, regex, isValid) {

  if (input.value.length < 2) {
    inputError.innerHTML = textErrorEmpty;
    input.style.border = "2px solid #e54858";
    isValid = false;
  }
  else if (regex.test(input.value) === false) {
    inputError.innerHTML = textError;
    input.style.border = "2px solid #e54858";
    isValid = false;
  }
  else {
    isValid = true;
    input.style.border = "0px";
    inputError.innerHTML = "";
  }

  return isValid;
}


// Vérification du champ Date de naissance
console.log(birthdayDate.value);
birthdayDate = controlInput(input, inputError, textErrorEmpty, textError, isValid)

  if (birthdayDate.value == "") {
    errorBirthdate.innerHTML = "Veuillez précisez votre date de naissance dans ce champ.";
    birthdayDate.style.border = "2px solid #e54858";
    birthdayDate = false;
  } else {
    birthdayDateValid = true;
    birthdayDate.style.border = "Opx";
    errorBirthdate.innerHTML = "";
  }

  // Vérification du champ nombre de tournois GameOn

  quantityTournamentValid = controlInput(quantityTournament, errorQuantityTournament,
    "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.",
    "Vous devez saisir seulement des chiffres.",
    regExpNumbers, quantityTournamentValid);
  
  // Vérification du champ Radio "Quelles villes"

 wichTown = controlInput (wichTownValid, errorWhichTown)
  for(let i=0; i < whichTown.length; i++) {
    if(whichTown[i].checked) {
        whichTownValid = true;
        errorWhichTown.innerHTML = "";
    }
  }
    if(whichTownValid===false) {
      errorWhichTown.innerHTML = "Veuillez sélectionner au moins un choix de ville.";
    }


  // Vérification du checkbox des conditions d'utilisation

  if(conditionUser.checked) {
    errorConditionUser.innerHTML = "";
    conditionUserValid = true;
  }
  else {
    errorConditionUser.innerHTML = "Veuillez acceptez les conditions d'utilisation.";
    conditionUserValid = false;
  }
