// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};

// Question #1
today1.innerHTML = new Date().toLocaleDateString("en-US", options);

// Question #2
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;

// Question #3
/*
Declare a variable named quantity and assign it the value of the HTML input element with an id of q using the querySelector method.
*/
let quantity = document.querySelector('#q').value;

// Question #4
/*
Output this string, "Welcome to <em>our</em> neighborhood!", to the first <aside> in the document.
*/
document.querySelector('aside').innerHTML = 'Welcome to <em>our</em> neighborhood!';

// Question #5
/*
Output the returned value of a function named getCelsius to an HTML input element with an id of temp. Feed the getCelsius literal value of 33 (which represents 33°F). The getCelsius function is already included in the provided CodePen code.
*/
document.querySelector('#temp').value = getCelsius(33);

// Question #6
/*
Select all the div elements in a document and assign the result to a const variable named divs using querySelectorAll. Output to the provided div element with an id of divs in the CodePen.
*/
const divs = document.querySelectorAll('div');

// Question #7
/**
Filter an array named citynames to return only city names in the array that start with the letter "C" and store the resulting array into a variable named filterC. Output to the provided div element with in the CodePen.
*/
filterC = citynames.filter(city => city.charAt(0) === 'C');
