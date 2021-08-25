const searchBar = document.querySelector(".search-bar");

const search = async () => {
  await fetchWeather(searchBar.value);
};

const fetchWeather = async (city) => {
  try {
    const { data } = await axios.post("/api/weather", { city });
    displayWeather(data);
  } catch (error) {
    console.log(error);
    document.querySelector(".temperature-degree").innerText =
      "Please enter a valid city name!";
  }
};

const displayWeather = (data) => {
  if (!data.weather) {
    document.querySelector(".temperature-degree").innerText =
      "Please enter a valid city name!";
  }

  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity, feels_like } = data.main;
  const { speed } = data.wind;
  const { country } = data.sys;
  let roundedTemp = temp.toFixed(1);
  let speedInMph = Math.round(speed * 2.236936);

  document.querySelector(".city").innerText =
    name + " (" + country + ") Weather Description";
  document.querySelector(".description").innerText =
    "Feels Like: " + feels_like.toFixed(1) + "°C";
  document.querySelector(".temperature-degree").innerText =
    name + " (" + country + ") : " + roundedTemp + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Wind Speed: " + speedInMph + " mph";
  document.querySelector(".weather").classList.remove("loading");
  document.querySelector(
    ".weather-img"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
  document.querySelector(".temperature-description").textContent = description;
};

(() => {
  document.querySelector(".submit-btn").addEventListener("click", () => {
    search();
  });

  searchBar.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      search();
    }
  });
})();
