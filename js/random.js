const loadUsers = () => {
    fetch( 'https://randomuser.me/api/?results=8' )
        .then( res => res.json() )
        .then( data => displayUsers( data ) );
};
loadUsers();
const displayUsers = users => {
    const con = document.getElementById( 'container' );
    const value = users.results;
    for ( const user of value ) {
        const div = document.createElement( 'div' );
        div.innerHTML = `
        <h3>${ user.name.first } ${ user.name.last }</h3>
        <img src="${ user.picture.medium }">
        <p>Gender: ${ user.gender }</p>
        <p>Email: ${ user.email }</p>
        <p>Phone: ${ user.phone }</p>
        `;
        con.appendChild( div );
    }
};