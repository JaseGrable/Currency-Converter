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

function printResponse(response) {
    if (response.conversion_result && response.conversion_result) {
        let conversionRate = parseFloat(response.conversion_result);
        document.querySelector('#currencyOutput').innerText = conversionRate.toFixed(2);
    } else {
        document.querySelector('#currencyOutput').innerText = 'The selected currency is not supported by this database currently. Please check back later for updates. Sorry for any inconvenience. Management.';
    }
    }
    
function errorResponse(error) {
    document.querySelector('#currencyOutput').innerText = `Sorry, we've encountered an error. Please check the code and let us know if we can help you any further. Management. ${error}`;
    }
    
    document.querySelector('#dollarInput').addEventListener('submit', handleFormSubmission);