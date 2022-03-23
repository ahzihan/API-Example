const sportsList = async () => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`;
    const res = await fetch( url );
    const data = await res.json();
    displaySportsList( data.sports );
    // console.log( data.sports );
};
sportsList();

const displaySportsList = data => {
    // for ( const value of data ) {
    //     console.log( value );
    // }
    data.forEach( value => {
        // console.log( value );
        const listContainer = document.getElementById( 'list' );
        const div = document.createElement( 'div' );
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
                <img src="${ value.strSportThumb }" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${ value.strFormat }</h5>
                    <p class="card-text">${ value.strSportDescription.slice( 0, 100 ) }</p>
                    <a onclick="singleDetails('${ value.idSport }')" class="btn btn-primary">Details</a>
                </div>
            </div>
    `;
        listContainer.appendChild( div );
    } );
};

const singleDetails = async sportsId => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php/${ sportsId }`;
    const res = await fetch( url );
    const data = await res.json();
    displaySingleDetails( data.sports );
    console.log( data.sports );
};
singleDetails();

const displaySingleDetails = details => {
    for ( const data of details ) {
        console.log( data );
    }
};

