function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[date.getMonth()];
  let dates = date.getDate();
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = `${hours}:${minutes}`;

  return `${day}, ${dates} ${month}`;
}

function displayWeather(response) {
  console.log(response.data);
  console.log(response.data.city);
  let weatherElement = document.querySelector("#weather");
  let humidityElement = document.querySelector("#Humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  let countryElement = document.querySelector("#country");
  celsiusTemperature = response.data.temperature.current;
  weatherElement.innerHTML = Math.round(celsiusTemperature);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = response.data.condition.description;
  countryElement.innerHTML = response.data.city;
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
}

function searchCity(city) {
  let apiKey = `f8o9e9ae7af783f9513a465db0bta63f`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  searchCity(cityInputElement.value);
}

function displayFahrenheit(event) {
  event.preventDefault();
  let fahrenheitElement = (9 / 5) * celsiusTemperature + 32;
  let celsiusElement = document.querySelector("#weather");
  celsiusElement.innerHTML = Math.round(fahrenheitElement);
}

function displayCelsius(event) {
  event.preventDefault();
  let celsius = celsiusTemperature;
  let celsiusDegree = document.querySelector("#weather");
  celsiusDegree.innerHTML = Math.round(celsiusTemperature);
}

searchCity("Abuja");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#degree");
fahrenheitLink.addEventListener("click", displayFahrenheit);

let celsiusLink = document.querySelector("#number");
celsiusLink.addEventListener("click", displayCelsius);
