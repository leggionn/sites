const API_GEOLOCATION_URL = "https://geocoding-api.open-meteo.com/v1/search"
const cityForm = document.querySelector("#cityForm");

cityForm.addEventListener("submit", onCityFormSubmit);
function onCityFormSubmit(event) {
    event.preventDefault();
    const cityInput = cityForm.querySelector("#city"); const cityName = cityInput.value.trim();
    if (!cityName) {
        alert("Introduceti numele unui oras");
        return;
    }
    getCityCoordinates(cityName);
    console.log(cityName);
}

async function getCityCoordinates(cityName) {
    const apiUrl = new URL(API_GEOLOCATION_URL);
    apiUrl.searchParams.append("name", cityName);
    apiUrl.searchParams.append("count", 1);
    console.log(apiUrl.toString());
    const response = await fetch(apiUrl.toString());
    const data = await response.json();
    console.log(data);
}