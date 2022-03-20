const searchFood = () => {
    const searchField = document.getElementById( 'search-field' );
    const searchValue = searchField.value;
    console.log( searchValue );
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ searchValue
        }`;
    fetch( url )
        .then( res => res.json() )
        .then( data => displayFood( data.meals ) );
};

const displayFood = foods => {
    console.log( foods );
    const main = document.getElementById( 'main' );
    foods.forEach( food => {
        console.log( food.strMeal );
        const div = document.createElement( 'div' );
        div.innerHTML = `
                <div class="card">
                    <img src="${ food.strMealThumb }" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${ food.strMeal }</h5>
                        <p class="card-text">${ food.strInstructions.slice( 0, 200 ) }</p>
                    </div>
                </div>
                `;
        main.appendChild( div );
    } );
};