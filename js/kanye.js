
const loadQuotes = () => {
    fetch( 'https://api.kanye.rest/' )
        .then( res => res.json() )
        .then( data => displayQuotes( data ) );
};

const displayQuotes = data => {
    const quote = document.getElementById( 'quote' );
    quote.classList.add( 'style' );
    quote.innerText = data.quote;
};