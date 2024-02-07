const quote = document.querySelector('.quote');

const fetchQuote = async () => {
    const  APIResponse = await fetch('https://api.kanye.rest');
    const data = await APIResponse.json();
    return data;
}

const renderQuote = async () => {
    quote.innerText = "Loading...";
    const data = await fetchQuote();
    quote.innerText = '"' + data.quote + '"';
}