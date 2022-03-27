const message = document.getElementById( 'message' );

const toggleSpinner = displayStyle => {
    document.getElementById( 'spinner' ).style.display = displayStyle;
};
const toggleMeal = displayStyle => {
    document.getElementById( 'main' ).style.display = displayStyle;
};
const togglesingle = displayStyle => {
    document.getElementById( 'single-meal' ).style.display = displayStyle;
};
const searchFood = async () => {

    const searchField = document.getElementById( 'search-field' );
    const searchValue = searchField.value;
    searchField.value = '';
    if ( searchValue == '' ) {
        message.innerText = "Please Type Something!";
    } else {
        toggleSpinner( 'block' );
        // toggleMeal( 'none' );
        togglesingle( 'none' );
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ searchValue
            }`;
        const res = await fetch( url );
        const data = await res.json();
        displayFood( data.meals );
        message.innerText = "";
    }

    // fetch( url )
    //     .then( res => res.json() )
    //     .then( data => displayFood( data.meals ) );
};

const displayFood = foods => {
    const main = document.getElementById( 'main' );
    // main.innerHTML = '';
    main.textContent = '';
    if ( foods.length < 1 ) {
        message.innerText = 'No item found!';
    } else {
        foods.forEach( food => {
            const div = document.createElement( 'div' );
            div.innerHTML = `
                <div onclick="loadMealDetails(${ food.idMeal })" class="card">
                    <img src="${ food.strMealThumb }" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${ food.strMeal }</h5>
                        <p class="card-text">${ food.strInstructions.slice( 0, 150 ) }</p>
                    </div>
                </div>
                `;
            main.appendChild( div );
        } );
        toggleSpinner( 'none' );
        // toggleMeal( 'block' );
        // togglesingle( 'block' );
        message.innerText = '';
    }

};

const loadMealDetails = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ mealId }`;
    const res = await fetch( url );
    const data = await res.json();
    displaySingleMeal( data.meals[ 0 ] );
    // fetch( url )
    //     .then( res => res.json() )
    //     .then( data => displaySingleMeal( data.meals[ 0 ] ) );

};

const displaySingleMeal = mealDetail => {
    const singleDetails = document.getElementById( 'single-meal' );
    singleDetails.textContent = "";
    const div = document.createElement( 'div' );
    div.innerHTML = `
                    <img src="${ mealDetail.strMealThumb }" class="mw-75 card-img-top" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title">${ mealDetail.strMeal }</h5>
                        <p class="card-text">${ mealDetail.strInstructions.slice( 0, 300 ) }</p>
                    </div>
                    `;
    singleDetails.appendChild( div );
    togglesingle( 'block' );
};