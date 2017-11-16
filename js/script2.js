// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


const backgroundColor = ["#36b5b0", "#b5368d", "#b5364c", "#b59b36", "#36b5a5", "#68a741"];
const loadQuoteButton = document.getElementById("loadQuote");

let quotesCopy = [];
// let backgroundColorCopy = [];

quotesCopy = quotes.slice(0);
// backgroundColorCopy = backgroundColor.slice(0);



function cloneArray() {
		quotesCopy = quotes.slice(0);
}


function getRandom( array ) {
	return Math.floor( Math.random() * array.length );
}


// Get random quote from quotes array
function getRandomQuote( quotes ) {
	const totalQuotes = quotes.length;
	let quoteIndex = getRandom( quotesCopy );
	let getQuote = quotesCopy[quoteIndex];  

	// clone array is it has last item
	if( quotesCopy.length == quotesCopy.length){
		cloneArray();	
	}
	// Remove item from array
	quotesCopy.splice( quoteIndex, 1);

	// console.log(getQuote.quote)
	return getQuote;
    
}

// Display html string to the page
function printQuote () {
	const quoteBox = document.getElementById('quote-box');
	const randomQuote = getRandomQuote( quotesCopy );

	console.log(randomQuote.quote)

	let html = "";
	html += `<p class=quote> ${randomQuote.quote} </p>`;
	html += `<p class=source> ${randomQuote.citation} </span>`;
	html += `<span class=year> ${randomQuote.year} </span>`;
	// display html
	quoteBox.innerHTML = html;
}

// Change background color
function changeBackgroundColor() {
	const body = document.getElementsByTagName('body')[0];
	// const colorIndex = getRandom( backgroundColorCopy );

	
	// Change set body bakcground to random color
	body.style.backgroundColor = backgroundColorCopy[colorIndex];
}

printQuote();

loadQuote.addEventListener( 'click', ()=> {
	printQuote();
	changeBackgroundColor();
});
