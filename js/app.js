// Variabili

// Inizializzo Variabile Nome e Cognome
// Inizializzo Variabile Età
const clientAge = 0;
// Inizializzo Variabile Km Percorsi
const clientKm = 0;
// Inizializziamo Variabile Sconto al 20%
const discountMin = 0.20;
// Inizializziamo Variabile Sconto al 40%
const discountMax = 0.40;


// Link con DOM per l'elemento Nome-Cognome



const buttonElement = document.querySelector('button[type="submit"]');

buttonElement.addEventListener('click', function () {
  let clientNameSurname = document.querySelector('input[name="username"]');

  console.log(clientNameSurname);
})



