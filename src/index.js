import { CurrencyExchange } from './currencyExchange.js';

function handleFormSubmission(e) {
    e.preventDefault();
    let inputUSD = document.querySelector('#USD').value; 
    let foreignCurrency = document.querySelector('#foreignCurrency').value;
    exchange(inputUSD, foreignCurrency);
}