document.getElementById("weatherBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const apiKey = "c6d6f4d33779b30855ca5c676c00ef1f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = Math.round(data.main.temp) + "°C";
    document.getElementById('description').textContent = data.weather[0].description;

    const box = document.getElementById('weatherBox');
    box.classList.add('show');
  } catch (err) {
    alert("City not found.");
    const box = document.getElementById('weatherBox');
    box.classList.remove('show');
    console.error(err);
  }
}



