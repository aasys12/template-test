let apiQoutes = [];

//Show new quote
function newQuote(){
    //pick a random quotes
    const quote = apiQoutes[Math.floor(Math.random() * apiQoutes.length)];
    console.log(quote)
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
