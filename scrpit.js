const getWeather = async (city) => {
    // Accessing variables from config.js
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_CONFIG.KEY,
            'x-rapidapi-host': API_CONFIG.HOST
        }
    };

    try {
        const cityNameElement = document.getElementById('cityName');
        if (cityNameElement) cityNameElement.innerHTML = city;

        const response = await fetch(url, options);
        if (!response.ok) throw new Error('City not found');

        const data = await response.json();
        
        // Destructure data for clean mapping
        const { temp, humidity, cloud_pct, feels_like, wind_speed, sunrise, sunset } = data;

        // Update UI Elements (Mapping IDs to data)
        document.getElementById('temp').innerHTML = document.getElementById('temp2').innerHTML = temp;
        document.getElementById('humidity').innerHTML = document.getElementById('humidity2').innerHTML = humidity;
        document.getElementById('cloud_pct').innerHTML = cloud_pct;
        document.getElementById('feels_like').innerHTML = feels_like;
        document.getElementById('wind_speed').innerHTML = document.getElementById('wind_speed2').innerHTML = wind_speed;
        
        // Format Unix timestamps to readable time
        document.getElementById('sunrise').innerHTML = new Date(sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        document.getElementById('sunset').innerHTML = new Date(sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    } catch (error) {
        console.error("Weather Fetch Error:", error);
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
