const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=1a3e440f51c6cc23ba9c14bbb0e18c67';
const button = document.getElementById('btn');
button.addEventListener('click', getWeatherApp);
async function getWeatherApp() {
    let weatherDetails = " ";
    let inputText = document.getElementById('city').value;
    const response = await fetch(weatherUrl);
    const data = await response.json();
    if (inputText.toLowerCase().includes(data.name.toLowerCase())) {

        weatherDetails += "City Name : " + data.name;
        weatherDetails += '<br>';
        weatherDetails += "Temperature : " + Math.round(parseFloat(data.main.temp) - 273.15) + '&deg;';
        weatherDetails += '<br>';
        for (icon in data.weather) {
            weatherDetails += data.weather[icon].main;
            weatherDetails += "<img src='http://openweathermap.org/img/w/" + data.weather[icon].icon + ".png' alt='Icon depicting current weather.'>"
        }
        weatherDetails += '<br>';
        weatherDetails += "Wind Speed : " + data.wind.speed + " m/s";
        weatherDetails += '<br>';
        weatherDetails += "Cloudy : " + data.clouds.all + "%";
        weatherDetails += '<br>';
        weatherDetails += "Sunrise : " + new Date(data.sys.sunrise * 1000);
        weatherDetails += '<br>';
        weatherDetails += "Sunset : " + new Date(data.sys.sunset * 1000);
        document.getElementById('weather').innerHTML = weatherDetails;
        //initializeMap(data);
    }
}

function initializeMap(data) {
    let myLatlng = new google.maps.LatLng(data.coord.lat, data.coord.lat);
    let myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    document.getElementById('map_canvas').innerHTML = myOptions;
}

getWeatherApp();