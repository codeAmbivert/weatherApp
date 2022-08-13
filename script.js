const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const weatherType = document.getElementById("weather-type");
const temp = document.getElementById("temp");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");

function searchCity() {
  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "559c14f4c6msh62b9dec5ad420ddp10ed66jsncab1aa4c3071",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  const findWeather = async () => {
    try {
      const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${cityInput.value}&units=imperial`;
      const response = await fetch(url, options);
      const data = await response.json();
      cityName.innerHTML = data.name;
      weatherType.innerHTML = data.weather[0].main;
      temp.innerHTML = data.main.temp;
      minTemp.innerHTML = data.main.temp_min;
      maxTemp.innerHTML = data.main.temp_max;
      return data;
    } catch (error) {
      return error;
    }
  };

  findWeather();
}
