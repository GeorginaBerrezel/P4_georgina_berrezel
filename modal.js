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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}
/*
function controlInput() {
  console.log('controlinput');
}
*/

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
let regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regExpNumbers = /^[0-9]*$/;


// Définition des constantes
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdayDate = document.querySelector("#birthdate");
const quantityTournament = document.querySelector("quantity");
const wichTown = document.querySelectorAll('input[name="location"]');
const conditionUser = document.querySelector("#checkbox1");

// Définition des constantes d'erreur 
const errorFirstName = document.querySelector("#errorfirstname");
const errorLastName = document.querySelector("#errorlastname");
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
/*
// launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
*/
modalBtn.forEach((btn) => btn.addEventListener("click", () => modalbg.style.display = "block"));


// Click to leave modal Validation


// Vérification des champs prénom, nom et email
modalBtnSubmit.addEventListener("click", controlForm);
function controlForm(event) {
  event.preventDefault();
  firstNameValid = controlInputNames(firstName, errorFirstName,
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom");

  lastNameValid = controlInputNames(lastName, errorLastName,
    "Veuillez entrer 2 caractères ou plus pour le champ du nom");

  emailValid = controlInputEmail(email, errorEmail, regExpEmail,
    "L'adresse email saisie est incorrecte.");

  birthdayDateValid = birthdayDatecheck (birthdayDate, errorBirthdate,
    "Veuillez précisez votre date de naissance dans ce champ.");

  quantityTournamentValid = controlInput(quantityTournament, errorQuantityTournament, regExpNumbers, quantityTournamentValid, 
    "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.",
    "Vous devez saisir seulement des chiffres.");
  }

/*Nouvelle fonctions*/
// Fonction de vérification des champs prénom et nom
function controlInputNames(input, inputError, textErrorEmpty) {

  if (input.value.length < 2) {
    inputError.innerHTML = textErrorEmpty;
    input.style.border = "2px solid #e54858";
    return false;
  }

  else {
    input.style.border = "0px";
    inputError.innerHTML = "";
    return true;
  }
}

// Fonction de vérification du champ email
function controlInputEmail(input, inputError, textErrorEmpty) {
  const validEmail = regExpEmail.test(input.value)
  /*return validEmail*/
  if (input.value.length < 2) {
    inputError.innerHTML = textErrorEmpty;
    input.style.border = "2px solid #e54858";
    return false;
  }

  else {
    input.style.border = "0px";
    inputError.innerHTML = "";
    return true;
    /*return validEmail;*/
  }
}

/*function birthdayDatecheck*/
function birthdayDatecheck(birthdayDate, errorBirthdate) {

  if (birthdayDate.value == "") {
    errorBirthdate.innerHTML = "Veuillez précisez votre date de naissance dans ce champ.";
    birthdayDate.style.border = "2px solid #e54858";
    birthdayDate = false;
    return false;
  }
  
  else {
    birthdayDateValid = true;
    birthdayDate.style.border = "Opx";
    errorBirthdate.innerHTML = "";
    return true;
  }

}
/*
// Vérification du champ Date de naissance
birthdayDate = birthdayDatecheck(input, inputError, textErrorEmpty, textError, isValid) 

  if (birthdayDate.value == "") {
    errorBirthdate.innerHTML = "Veuillez précisez votre date de naissance dans ce champ.";
    birthdayDate.style.border = "2px solid #e54858";
    birthdayDate = false;
  } else {
    birthdayDateValid = true;
    birthdayDate.style.border = "Opx";
    errorBirthdate.innerHTML = "";
  }
*/

/*
  // Vérification du champ nombre de tournois GameOn
  quantityTournamentValid = controlInput(quantityTournament, errorQuantityTournament,
    "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.",
    "Vous devez saisir seulement des chiffres.",
    regExpNumbers, quantityTournamentValid);
 */ 

/*

  // Vérification du champ Radio "Quelles villes"
function controlInputWichTown (wichTownValid, errorWhichTown)
   //FAUT METTRE UN TRUC ICI à la place de for
  for (let i=0; i < whichTown.length; i++) {
    if (whichTown[i].checked) {
        whichTownValid = true;
        errorWhichTown.innerHTML = "";
    }
  }
    if (whichTownValid===false) {
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
*/