
// Variables
const loadQuoteButton = document.getElementById("loadQuote");
let quotesCopy = [];


// Initialize page with copy of quotes array and display random quote
( function init() {	
	// If array copy is empty, clone original array and print quote
	if ( quotesCopy.length == 0 ) {	
		cloneArray();
		printQuote();	
	}
	// Refresh quote every 20 sec
	setInterval( printQuote, 20000 );
})();

// Clone a quotes array
function cloneArray() {
	quotesCopy = quotes.slice(0);
}

// Get random quote from quotes array
function getRandomQuote( quotes ) {
	const totalQuotes = quotes.length;
	// Get random number
	let randomNum = Math.floor( Math.random() * totalQuotes );
	// Get random quote from quotesCopy array
	let randomQuote = quotesCopy[ randomNum ];
	// Remove used quote from array
	quotesCopy.splice( randomNum, 1 );
	console.log( randomQuote );
	// If array left one item...
	if( quotesCopy.length == 0 ){
		console.log( "last quote" );
		// Clone quotes array
		cloneArray()
	}
	return randomQuote;   
}

// Display html string to the page
function printQuote () {
	const quoteBox = document.getElementById( 'quote-box' );
	const randomQuote = getRandomQuote( quotesCopy );
	let html = "";
	html += `<p class=quote> ${randomQuote.quote} </p>`;
	html += `<p class=source> ${randomQuote.citation} </span>`;
	html += `<span class=year> ${randomQuote.year} </span>`;
	html += `<span class=tag> Tags: ${randomQuote.tag} </span>`;
	// Print html
	quoteBox.innerHTML = html;
	changeBackgroundColor();
}

// Change background color
function changeBackgroundColor() {
	const body = document.querySelector('body');
	let red = Math.floor( Math.random()*256 );
	let green = Math.floor( Math.random()*256 );
	let blue = Math.floor( Math.random()*256 );
	let rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
	// Set body background to random color
	body.style.backgroundColor = rgbColor;
}	

// Add click event to button
loadQuote.addEventListener( 'click', ()=> {
	printQuote();
}, false);


