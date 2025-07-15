/*
Open this file in your browser to identify and reference the key/value pairs found in the JSON data. https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json.
*/
/**
 * Declare a const variable named "url" that contains the URL string of the JSON resource provided.
 */
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

/**
 * Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
 */
const cards= document.querySelector('#cards');

/** Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method. */

async function getProphetData(){
    //Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(url);
    //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data = await response.json();
    //Add a console.table() expression method to check the data response at this point in the console window.
    console.table(data.prophets);
    //call a function named "displayProphets" and include the "data.prophets" argument.
    displayProphets(data.prophets);

}
getProphetData();

/** 
 * Define a function expression named "displayProphets" that handles a single parameter named "prophets" somewhere in your js file. Use an arrow expression to contain statements that will process the parameter value and build a card for each prophet.
 */
const displayProphets = (prophets) => {
    //Inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, creating a new card each time.
    prophets.forEach((prophet) => {
        //Inside the HTML card building loop, do the following:
        
        //create a section element and store it in a variable named card using createElement(),
        const card = document.createElement('section');
        //create an h2 element and store it in a variable named "fullName",
        const fullName = document.createElement('h2');
        //create an img element and store it in a variable named "portrait",
        const portrait = document.createElement('img');
        //populate the heading element with the prophet's full name using a template string to build the full name,
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        //build the image element by setting the src, alt, loading, width,  and height attributes using setAttribute().
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '340');

        //create a p element to contain the birth date and place
        const birth = document.createElement('p');
        birth.textContent = `Birth date and place: ${prophet.birthdate} (${prophet.birthplace}).`;
        //create a p element to contain the death date
        const death = document.createElement('p');
        death.textContent = `Death date: ${prophet.death}.`;

        //add number children
        const children = document.createElement('p');
        children.textContent = `Total number of children: ${prophet.numofchildren}`;

        //Using appendChild() on the section element named "card", add the heading and image elements one at a time.
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birth);
        card.appendChild(death);
        card.appendChild(children);


        //Append each prophet's card to a div element with the class of "cards"
        cards.appendChild(card);
    });
}