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
        // console.log( country );
        const div = document.createElement( 'div' );
        div.classList.add( 'style' );
        div.innerHTML = `
        <h1>Name: ${ country.name }</h1>
        <img src="${ country.flag }"><br/>
        <button onclick="loadCountryByName('${ country.name }')">Details</button>
        `;
        container.appendChild( div );

    } );
};

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${ name }`;
    fetch( url )
        .then( res => res.json() )
        .then( data => displayCountryDetails( data[ 0 ] ) );
};

const displayCountryDetails = country => {

    console.log( country );
    const countryDetails = document.getElementById( 'country-details' );
    // const div = document.createElement( 'div' );
    countryDetails.innerHTML = `
        <h1>Name: ${ country.name.common }</h1>
        <img src="${ country.flags.png }"><br/>
        <h3>Capital : ${ country.capital }</h3>
        <h3>Population : ${ country.population }</h3>
        <h3>Area : ${ country.area }, SFT</h3>
        <h4>Sub Region : ${ country.subregion }</h4>
    `;
};