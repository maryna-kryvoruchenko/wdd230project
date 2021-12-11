const url =
   "https://api.openweathermap.org/data/2.5/forecast?id=5605242&units=imperial&appid=744fe90a723fbf1d7ad8053159c6a1d5";

fetch(url)

   .then((response) => {
      return response.json();
   })
   .then((weatherObjct) => {
      cDay(weatherObjct);

   });

function cDay(weatherObjct) {
   let weatherData = weatherObjct.list[0];
   document.getElementById("currently").textContent = `Currently: ${weatherData.weather[0].main}`;
   document.getElementById("temp").textContent = `Temperature: ${weatherData.main.temp_max} \u00B0F`;
   document.getElementById("humidity").textContent = `Humidity: ${weatherData.main.humidity}%`;
   document.getElementById("wind").textContent = `Wind Speed: ${weatherData.wind.speed} mph`;
   document.getElementById("windchill").textContent = computeWindChill(
    weatherData.main.temp,
    weatherData.wind.speed);

}

function computeWindChill(cTemp, wSpeed) {
    if (cTemp <= 50 && wSpeed >= 3) {
      const wTemp =
        35.74 +
        0.6215 * cTemp -
        35.75 * Math.pow(wSpeed, 0.16) +
        0.4275 * cTemp * Math.pow(wSpeed, 0.16);
      return wTemp.toFixed(1);
    } else {
      return 'NaN';
    }
  }