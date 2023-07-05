// Variabili


// Inizializziamo Variabile Sconto al 20%
const discountMin = 0.20;
// Inizializziamo Variabile Sconto al 40%
const discountMax = 0.40;

let typeOfDiscount = ''

let numberCP = Math.random()


// Prendo il campo Carrozza dal DOM
let numberCarrozza = document.getElementById('carrozza')

// Calcolo il numero random
numberCarrozza = Math.floor(Math.random()*10)

// Prendo il campo CP dal DOM
let codePostal = document.getElementById('cod_cp')

// Calcolo il numero random
codePostal = Math.floor(Math.random()*100000)



// Prendo dal DOM l'elemento Button Genera
const buttonElement = document.querySelector('button[type="submit"]');

// Inserisco l'evento Click sul Bottone
buttonElement.addEventListener('click', function () {

  // Prendo il dato Nome/Cognome Input dal DOM
  let clientNameSurname = document.querySelector('input[name="username"]');

  // Inserisco il dato Output Nome/Cognome sul DOM
  clientNameSurname = document.getElementById('name_surname').innerHTML = clientNameSurname.value;

  // Prendo il dato Km Input dal DOM
  const clientKm = document.querySelector('input[name="km"]');

  // Converto formato km da stringa a numero e calcolo il costo totale
  let priceTotal = parseFloat(clientKm.value) * 0.21

  // Prendo il dato input Età
let clientAge = document.querySelector('select[name="age_choice"]');


if (clientAge.value === 'min') {
  priceTotal = (priceTotal - discountMin);
  typeOfDiscount = 'Ridotta';

} else if (clientAge.value === 'over') {
  priceTotal = (priceTotal - discountMax);
  typeOfDiscount = 'Ridotta';

} else {
  typeOfDiscount = 'Standard'
}

// Inserisco il dato Output Prezzo sul DOM
priceTotal = document.getElementById('price_ticket').innerHTML = priceTotal.toFixed(2)+' €';

// Inserisco il dato Numero Carrozza nel DOM
numberCarrozza = document.getElementById('carrozza').innerHTML = numberCarrozza

// Inserisco il dato Codice Postale nel DOM
codePostal = document.getElementById('cod_cp').innerHTML = codePostal

// Inserisco il tipo di Biglietto
let Typediscount = document.getElementById('offer').innerHTML = typeOfDiscount;
  

})

// Prendo dal DOM l'elemento Button Annulla
const buttonElementErase = document.querySelector('button[type="erase"]');

// Inserisco l'evento Click sul Bottone
buttonElementErase.addEventListener('click', function () {

  // Resetto il dato Output Nome/Cognome sul DOM
  clientNameSurname = document.getElementById('name_surname').innerHTML = '';

  // Resetto il tipo di Biglietto
  let Typediscount = document.getElementById('offer').innerHTML = '';

  // Resetto il dato Numero Carrozza nel DOM
  numberCarrozza = document.getElementById('carrozza').innerHTML = '';

  // Resetto il dato Codice Postale nel DOM
  codePostal = document.getElementById('cod_cp').innerHTML = '';

  // Resetto il dato Output Prezzo sul DOM
  priceTotal = document.getElementById('price_ticket').innerHTML = '';

})





