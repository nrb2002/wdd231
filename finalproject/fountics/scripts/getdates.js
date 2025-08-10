// Get current year
let currentyear = document.getElementById ("currentyear");
const date = new Date();
currentyear.innerHTML = date.getFullYear();

// Last modified
let lastUpdate = document.getElementById("lastModified");
lastUpdate.innerHTML = document.lastModified
