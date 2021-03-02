function formatDate (timestamp){
    let date = new Date (timestamp);
   
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]; 
  let day= days[date.getDay()];
  return `${day} ${formatHours(timestamp)}`;
}


function formatHours (timestamp){
    let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

function displayTemprature (response){
    console.log(response.data);
    let temperatureElement = document.querySelector("#degrees");
  let cityElement = document.querySelector("#currentCity");
  let descriptionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#todayTime");
   let iconElement = document.querySelector("#icon");


   celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function displayForecast(response){
    let forecastElement=document.querySelector("#")
}


function search(city){
let apiKey= "dd61b0a83dcb0d5d9c519c2683f87b54";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemprature);
}


function handleSubmit(event){
    event.preventDefault();
    cityInputElement= document.querySelector("#city-input");
    search(cityInputElement.value);
}

search("Sydney");

let form= document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);