const loadCountry = () => {
    fetch( 'https://restcountries.com/v2/all' )
        .then( res => res.json() )
        .then( data => displayCountry( data ) );
};
loadCountry();
const displayCountry = data => {
    // for ( const value of data ) {
    //     console.log( value );
    // }
    const container = document.getElementById( 'country' );
    data.forEach( country => {
        console.log( country );
        const div = document.createElement( 'div' );
        div.classList.add( 'style' );
        div.innerHTML = `
        <h1>Name: ${ country.name }</h1>
        <h3>Capital : ${ country.capital }</h3>
        <h4>Sub Region : ${ country.subregion }</h4>
        <img src="${ country.flag }">
        `;
        container.appendChild( div );

    } );
};