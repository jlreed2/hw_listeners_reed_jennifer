var message = document.getElementById( 'heading' );

message.addEventListener( 'click', function() {
	var myParagraph = document.createElement( 'paragraph' );
	myParagraph.innerHTML = '<p>This is click number XX </p';
	document.getElementsByClassName( 'container' )[ 0 ].appendChild( myParagraph );
} );
