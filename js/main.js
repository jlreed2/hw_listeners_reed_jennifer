var message = document.getElementById( 'heading' );

message.addEventListener( 'click', function() {
	var myParagraph = document.createElement( 'paragraph' );
	var clicks = 0;
		clicks += 1;
	myParagraph.innerHTML = '<p>This is click number ' + clicks + ' </p>';
	document.getElementsByClassName( 'container' )[ 0 ].appendChild( myParagraph );
} );
