//let apiQoutes = [];

//Show new quote
function newQuote(){
    //pick a random quotes
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote)
}

// Get quotes from api
// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQoutes = await response.json();
//         newQuote();
//     }catch(errorr){
//         //catch error
//     }
    
// }
// getQuotes();
    newQuote();
