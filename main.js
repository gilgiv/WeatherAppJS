const apiKey = 'a16a0bdce4237006e7a83902b7804d7d'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status !== 404) {
        const weatherIcon = document.querySelector(".weather-icon");

        let data = await response.json();
        console.log(data);


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherDescription = data.weather[0].main.toLowerCase();
        weatherIcon.src = `assets/images/${weatherDescription}.png`;
        document.querySelector(".weatherDesc").innerHTML = weatherDescription;

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}


function getWeatherInfo() {
    const searchBox = document.querySelector(".search input");
    checkWeather(searchBox.value);
}