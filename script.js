const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQoutes = [];

//Show new quote
function newQuote(){
    //pick a random quotes
    const quote = apiQoutes[Math.floor(Math.random() * apiQoutes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

// Get quotes from api
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQoutes = await response.json();
        newQuote();
    }catch(errorr){
        //catch error
    }
    
}
getQuotes();
