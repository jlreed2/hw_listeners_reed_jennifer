var nameInput = document.getElementById( 'firstname' );

document.querySelector( 'form' ).addEventListener( 'submit', function( a ) {
    a.preventDefault();
    console.log( firstname.value );
} );

var nameInput = document.getElementById( 'lastname' );
document.querySelector( 'form' ).addEventListener( 'submit', function( e ) {
    e.preventDefault();
    console.log( lastname.value );
} );

var nameInput = document.getElementById( 'email' );
document.querySelector( 'form' ).addEventListener( 'submit', function( f ) {
    f.preventDefault();
    console.log( email.value );
} );

var nameInput = document.getElementById( 'message' );
document.querySelector( 'form' ).addEventListener( 'submit', function( g ) {
    g.preventDefault();
    console.log( message.value );
} );
