let apiBegin = "http://api.openweathermap.org/data/2.5/weather?q=";
let apiEnd = "&APPID=baead7b630649327b2d7239548d6e961";
let searchCity = document.getElementById("search-city");
let searchButton = document.getElementById("search-button");
let errorMessage = document.getElementById("error-msg");
let weatherIdentifier = document.getElementById("weather-identifier");
let cityName = document.getElementById("city-name");
let degreeValue = document.getElementById("degree");
let feelsLikeValue = document.getElementById("feels-like");
let windValue = document.getElementById("wind");
let humidityValue = document.getElementById("humidity");
findCity("Ankara");


searchButton.addEventListener('click', () => {

    let city = searchCity.value;
    findCity(city);
})

searchCity.addEventListener('keypress', (e) => {
    if(e.key == "Enter"){
        let city = searchCity.value;
        findCity(city);
    }
})

function twoDecimal(number){
    return Math.round((number + Number.EPSILON) * 100) / 100;
    
}

async function findCity(city) {

    try {
        let object = await fetch(apiBegin + city + apiEnd, { mode: 'cors' })
        let response = await object.json();
        console.log(response);
        
        let humidity = twoDecimal(response.main.humidity);
        let celcius = Math.round(response.main.temp - 272);
        let feelsLike = twoDecimal(response.main.feels_like - 272);
        
        let dscr = response.weather[0].description;
        let wnd = response.wind.speed

        feelsLikeValue.textContent = `FEELS LIKE: ${feelsLike}°C`
        windValue.textContent = `WIND: ${wnd} km/h`;
        humidityValue.textContent = `HUMIDITY: ${humidity}%`;
        degreeValue.innerHTML = `${celcius} <div class = "celcius-image">
        °C
    </div>`;
        cityName.textContent = city.toUpperCase();
        weatherIdentifier.textContent = dscr.toUpperCase();

        errorMessage.textContent = "";
        
    }
    catch (error) {

        
        errorMessage.textContent = `No location found for ${city}`
    }
}