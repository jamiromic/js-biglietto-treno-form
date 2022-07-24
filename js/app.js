// Variabili


// Inizializziamo Variabile Sconto al 20%
const discountMin = 0.20;
// Inizializziamo Variabile Sconto al 40%
const discountMax = 0.40;

let offerRegular = 'Biglietto Standard'

let offerDiscount = 'Biglietto Ridotto'

// Dichiaro Variabile Tipo Offerta
let Typediscount = document.getElementById('offer').innerHTML = offerRegular;








// Prendo dal DOM l'elemento Button
const buttonElement = document.querySelector('button[type="submit"]');

// Inserisco l'evento Click sul Bottone
buttonElement.addEventListener('click', function () {

  // Prendo il dato Nome/Cognome Input dal DOM
  let clientNameSurname = document.querySelector('input[name="username"]');

  // Inserisco il dato Output Nome/Cognome sul DOM
  clientNameSurname = document.getElementById('name_surname').innerHTML = clientNameSurname.value;

  // Prendo il dato Km Input dal DOM
  const clientKm = document.querySelector('input[name="km"]');

  // Converto formato stringa in numero e calcolo i Km Totali
  let priceTotal = parseFloat(clientKm.value) * 0.21

  // Prendo il dato input Età
let clientAge = document.querySelector('select[name="age_choice"]');


if (clientAge.value === 'min') {
  priceTotal = (priceTotal - discountMin);
  Typediscount = offerDiscount;



}

if (clientAge.value === 'over') {
  priceTotal = (priceTotal - discountMax);
  Typediscount = offerDiscount;


}


// Inserisco il dato Output Prezzo sul DOM
priceTotal = document.getElementById('price_ticket').innerHTML = (priceTotal);
  

})



