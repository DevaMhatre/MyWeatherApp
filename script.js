const getWeather = async (city) => {
    // OpenWeather uses 'q' for city and 'units=metric' for Celsius
    const url = `${API_CONFIG.URL}?q=${city}&appid=${API_CONFIG.KEY}&units=metric`;

    try {
        const cityNameElement = document.getElementById('cityName');
        if (cityNameElement) cityNameElement.innerHTML = city;

        const response = await fetch(url);
        
        // If the city isn't found or key is invalid
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'City not found');
        }

        const data = await response.json();
        
        /* OpenWeather Structure:
           data.main.temp
           data.wind.speed
           data.sys.sunrise
        */
        const { temp, humidity, feels_like, temp_min, temp_max } = data.main;
        const { speed } = data.wind;
        const { sunrise, sunset } = data.sys;
        const { all } = data.clouds;

        // Update UI Elements
        document.getElementById('temp').innerHTML = document.getElementById('temp2').innerHTML = Math.round(temp);
        document.getElementById('humidity').innerHTML = document.getElementById('humidity2').innerHTML = humidity;
        document.getElementById('cloud_pct').innerHTML = all;
        document.getElementById('feels_like').innerHTML = Math.round(feels_like);
        document.getElementById('min_temp').innerHTML = Math.round(temp_min);
        document.getElementById('max_temp').innerHTML = Math.round(temp_max);
        document.getElementById('wind_speed').innerHTML = document.getElementById('wind_speed2').innerHTML = speed;
        
        // Format Timestamps
        const formatTime = (time) => new Date(time * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        document.getElementById('sunrise').innerHTML = formatTime(sunrise);
        document.getElementById('sunset').innerHTML = formatTime(sunset);

    } catch (error) {
        console.error("Weather Fetch Error:", error.message);
        alert("Wait! " + error.message);
    }
};

// Helper for event listeners
const setupLink = (elementId, city) => {
    const el = document.getElementById(elementId);
    if (el) {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            getWeather(city);
        });
    }
};

// Initial Call
getWeather("Mumbai");

// Setup Quick Links
setupLink("mumbai", "Mumbai");
setupLink("pune", "Pune");
setupLink("alibag", "Alibag");

// Search functionality
document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city');
    if (cityInput.value) getWeather(cityInput.value);
});
