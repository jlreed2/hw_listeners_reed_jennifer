/* Double clicking the h1 will log the message in the console */
var heading = document.getElementById( 'header1' );

heading.addEventListener( 'dblclick', function() {
    console.log( 'Clicking me does nothing' );
} );

/* Clicking the link will alert with message */
var link = document.getElementById( 'facts' );

link.addEventListener( 'click', function() {
    alert( 'Are you sure you want cat facts?' );
} );

/* Mousing over the paragraph will change its color */
var paragraph = document.getElementById( 'paragraph' );

paragraph.addEventListener( 'mouseover', function() {
    paragraph.className = 'gray';
} );
