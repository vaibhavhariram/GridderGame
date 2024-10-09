// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Set up the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example city data
var cities = [
    { name: "New York", lat: 40.7, lon: -74.0 },
    { name: "Paris", lat: 48.9, lon: 2.4 },
    { name: "Tokyo", lat: 35.7, lon: 139.7 },
    { name: "Sydney", lat: -33.9, lon: 151.2 },
    { name: "Cairo", lat: 30.0, lon: 31.2 }
];

// Choose a random city for the player to guess
var targetCity = cities[Math.floor(Math.random() * cities.length)];

// Function to handle the guess
function guess() {
    var latInput = parseFloat(document.getElementById('latitude').value);
    var lonInput = parseFloat(document.getElementById('longitude').value);

    if (isNaN(latInput) || isNaN(lonInput)) {
        document.getElementById('feedback').innerHTML = "Please enter valid coordinates.";
        return;
    }

    var latDifference = Math.abs(latInput - targetCity.lat);
    var lonDifference = Math.abs(lonInput - targetCity.lon);

    if (latDifference <= 1 && lonDifference <= 1) {
        document.getElementById('feedback').innerHTML = `Correct! The city is ${targetCity.name}.`;
        // Optionally, move to the next city or end the game
    } else {
        document.getElementById('feedback').innerHTML = `Incorrect. You are ${latDifference.toFixed(1)}° latitude and ${lonDifference.toFixed(1)}° longitude away from the target.`;
    }
}
