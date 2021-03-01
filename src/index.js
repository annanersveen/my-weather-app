let currentTime = new Date();

let days = [
  `Sun`,
  `Mon`,
  `Tue`,
  `Wed`,
  `Thur`,
  `Fri`,
  `Sat`
];

let day = days[currentTime.getDay()];
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
let today = document.querySelector("#todayTime");
today.innerHTML = `${day} ${hour}:${minutes}`;

function yourCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityOutPut = document.querySelector("#currentCity");
  cityOutPut.innerHTML = `${cityInput.value}`;
}

let searchButton = document.querySelector("#nowCity");
searchButton.addEventListener("submit", yourCity);

function showWeather(event) {
  event.preventDefault();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let searchCity = document.querySelector("#city-input");
  let currentCity = document.querySelector("#currentCity");
  currentCity.innerHTML = `${searchCity.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#nowCity");
searchForm.addEventListener("submit", showWeather);

function showTemperature(response) {
  let city = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#currentCity").innerHTML = `${city}`;
  document.querySelector("#degrees").innerHTML = `${temperature} °C`;
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let city = "London";
let units = `metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature);

function displayFarenheit() {
  let tempFarenheit = document.querySelector("#degrees");
  tempFarenheit.innerHTML = `37.4°F`;
}
let convertFarenheit = document.querySelector("#farenheit");
convertFarenheit.addEventListener("click", displayFarenheit);

function displayCelsius() {
  let tempCelsius = document.querySelector("#degrees");
  tempCelsius.innerHTML = `- 3ºC`;
}
let convertCelsius = document.querySelector("#celsius");
convertCelsius.addEventListener("click", displayCelsius);

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(getPosition);

let currentLocation = document.querySelector("#current-position-button");
currentLocation.addEventListener("click", getPosition);