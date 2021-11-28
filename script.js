const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById("loader");


let apiQoutes = [];

//show loading
function loading(){
    loader.hidden =false;
    quoteContainer.hidden =true;
}


//Hide Loading
function complete(){
    quoteContainer.hidden =false;
    loader.hidden =true;
}

//Show new quote
function newQuote(){
    loading();
    //pick a random quotes
    const quote = apiQoutes[Math.floor(Math.random() * apiQoutes.length)];
    //check if author field is blank
    if (!quote.author){
        authorText.textContent == "Unknown";
    }
    else{ 
        authorText.textContent = quote.author;
    }

    //check quote length to determine styling

    if (quote.text.length >120){
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();


    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

// Get quotes from api
async function getQuotes(){
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQoutes = await response.json();
        newQuote();
    }catch(errorr){
        //catch error
    }
    
}

//Tweet Quote
function tweetQuote(){
   const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`; 
   window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote)



getQuotes();

//onLoad
loading();
