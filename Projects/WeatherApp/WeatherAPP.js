const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const icon = document.getElementById("weather-icon");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  try {

    //convert city
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
    );
    const geoData = await geoRes.json();

    if (geoData.length === 0) {
      cityName.textContent = "City not found";
      temperature.textContent = "";
      wind.textContent = "";
      icon.src = "";
      return;
    }

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;

    //get weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    cityName.textContent = geoData[0].display_name;
    temperature.textContent =
      "Temperature: " + weatherData.current_weather.temperature + "°C";
    wind.textContent =
      "Wind Speed: " + weatherData.current_weather.windspeed + " km/h";

    //weather icons
    const code = weatherData.current_weather.weathercode;
    if (code === 0) icon.src = "./icons/sunny.png";
    else if (code <= 3) icon.src = "./icons/cloudy.png";
    else if (code <= 67) icon.src = "./icons/raiy.png";
    else if (code <= 77) icon.src = "./icons/snowy.png";
    else icon.src = "./icons/storm.png";
  } catch (error) {
    console.log(error);
    cityName.textContent = "Error fetching weather";
    temperature.textContent = "";
    wind.textContent = "";
    icon.src = "";
  }
});
