import { CurrencyExchange } from './currency.js';

function handleFormSubmission(e) {
    e.preventDefault();
    let inputUSD = document.querySelector('#USD').value; 
    let foreignCurrency = document.querySelector('#foreignCurrency').value;
    exchange(inputUSD, foreignCurrency);
}

function exchange(inputUSD, foreignCurrency) {
    CurrencyExchange.exchange(inputUSD, foreignCurrency)
      .then(function(response) {
        if (response.error) {
          errorResponse(response.error);
        } else {
          console.log(response);
          printResponse(response);
        }
      })
      .catch(function(error) {
        console.log(error);
        errorResponse(error);
      });
  }