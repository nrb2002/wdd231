// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');
const maxTemp = document.querySelector('#maxTemp');

//Declare the data source variable
/**
 * https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 */
//Latitude and Longitude for Kinshasa, DRC
/**
 * Use the Current Weather API named 'weather'.
 * Start a query string with the "?" character as shown in the examples.
 * Use a & between each key/value pair in the query string in these next steps.
 * Specify the latitude and longitude of Kinshasa, DRC using the information you have gathered and the examples provided.
 * Set the units to imperial: "units=imperial" or to metric: "units=metric"
 * Provide your API key: "appid=[enter your key here]"
 */


//Specify the latitude and longitude of Kinshasa, DRC using the information you have gathered and the examples provided.
const lat = -4.33;
const lon = 15.27;
//Set the units system to metric for Celsius
const units = "metric";
//Provide your API key: "appid=[enter your key here]"
const apiKey = "a82bd4620ada83b94d8022e56f26265f";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

//Define an asynchronous function named "apiF etch()" that uses a try block to handle errors.
async function apiFetch(){
    try{
        //Store the results of the URL fetch into a variable named "response".
        const response = await fetch(url);
        //If the response is OK, then store the result of response.json() conversion in a variable named "data",
        if(response.ok){
            const data = await response.json();
            //Output the results to the console for testing.
            console.log(data);
            //Display data on browser
            displayResults(data);

        //Else, throw an Error using the response.text().
        }else{
            throw Error(await response.text());
        }
    }
    //Finish off the catch block by outputting any try error to the console.
    catch(error){
        console.log(error);
    }
}
//invoke the apiFetch() function with a call
apiFetch();

//Build the displayResults function to output to the given HTML document
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    weatherIcon.setAttribute('loading', 'lazy');
    captionDesc.textContent = `${desc}`;
    humidity.textContent = `${data.main.humidity}%`; 
    windSpeed.textContent = `${data.wind.speed}Km/h`;
    maxTemp.textContent = `${Math.round(data.main.temp_max)}°C.`;
}