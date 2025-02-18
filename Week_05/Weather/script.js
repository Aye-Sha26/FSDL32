document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value.trim();  // .trim() to remove any leading/trailing spaces
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    // Log the constructed URL for debugging
    console.log(`Fetching weather data for city: ${city}`);
    console.log(`URL: ${url}`);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the API response for debugging

            if (data.cod === 200) {
                // If the city is found, display the weather data
                document.getElementById('city-name').textContent = `Weather in ${data.name}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

                // Show the weather info section
                document.getElementById('weather-info').style.display = 'block';
            } else {
                // If the city is not found
                alert('City not found!');
                document.getElementById('weather-info').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching weather data. Please try again later.');
            document.getElementById('weather-info').style.display = 'none';
        });
}
