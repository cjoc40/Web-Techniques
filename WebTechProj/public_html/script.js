const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const instagramBtn = document.getElementById("instagram");
const githubBtn = document.getElementById("github");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if(!quote.author) {
        authorText.textContent = "unkown";
    } else {
        authorText.textContent = quote.author;
    }
    if(quote.text.length > 90) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("(long-quote)")
    }
    quoteText.textContent = quote.text;
}

newQuoteBtn.addEventListener('click', newQuote);

async function getQuotes(){
    const apiUrl = "https://raw.githubusercontent.com/cjoc40/Quotes/main/quotesgithub.txt";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        
    }catch(error){
        
    }
}

function tweetQuote(){
    const twitterUrl = "https://twitter.com/intent/tweet?text=$(quoteText.innerText) - $(authorText.innerText)";
    window.open(twitterUrl, "_blank");
}

function instagramQuote(){
    const instagramUrl = "https://www.instagram.com/(quoteText.innerText) - $(authorText.innerText)";
    window.open(instagramUrl, "_blank");
}
//
//function githubQuote(){
//    const githubUrl = "https://raw.githubusercontent.com/cjoc40/Quotes/main/quotesgithub.txt(quoteText.innerText) - $(authorText.innerText)";
//    window.open(githubUrl, "_blank");
//}

twitterBtn.addEventListener("click", tweetQuote);

instagramBtn.addEventListener("click", instagramQuote);

//githubBtn.addEventListener("click", githubQuote);

getQuotes();