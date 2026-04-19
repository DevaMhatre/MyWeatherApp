# 🌤 SkyCast: Weather Intelligence Dashboard

> A data-driven analytics tool engineered to master Asynchronous JavaScript and REST API integration.

[![Live Demo](https://img.shields.io/badge/demo-live-yellow?style=for-the-badge&logo=googlechrome&logoColor=white)](https://devamhatre.github.io/MyWeatherApp/) 
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![OpenWeather](https://img.shields.io/badge/API-OpenWeather-blue)](https://openweathermap.org/)

## 💡 The Concept
I developed **SkyCast** to move beyond static web development and master the lifecycle of data in the browser. This project is a deep-dive into **Asynchronous Flow Control**—handling real-time data fetching, parsing complex JSON structures, and ensuring a seamless UI experience despite network latency.

## 🚀 Engineering Highlights
- **Asynchronous Data Layer:** Leveraged `Async/Await` and the `Fetch API` for robust, readable network request management.
- **Dynamic UI Reconciliation:** Optimized the DOM to reflect 10+ meteorological metrics (temp, wind, humidity, etc.) instantly upon data retrieval.
- **Error Resiliency:** Implemented advanced error handling to manage API policy changes and edge cases like "City Not Found" without crashing the application.
- **Modular Config Pattern:** Separated API credentials into a dedicated configuration layer to maintain clean code and prepared the project for environment-based deployment.

## 🛠 Tech Stack
- **Engine:** Vanilla JavaScript (ES6+)
- **Data Provider:** OpenWeatherMap API
- **Styling:** CSS3 (Glassmorphism & Flexbox)
- **Hosting:** GitHub Pages

## 🧠 What I Learned
During the development of this project, my initial API provider changed their subscription model. This forced me to:
1. **Pivot & Refactor:** Quickly migrated the entire data layer to a new API provider (OpenWeather) while maintaining UI consistency.
2. **Handle Data Differently:** Learned to map and transform different JSON structures into a unified internal format.
3. **Debug Deployments:** Mastered the use of the browser's Network tab to resolve caching and pathing issues during deployment.

## ⚙️ Setup & Local Development
To run this project locally, you will need an API key from [OpenWeatherMap](https://openweathermap.org/):
1. Clone the repo: `git clone https://github.com/DevaMhatre/MyWeatherApp.git`
2. Ensure your `config.js` is set up:
   ```javascript
   const API_CONFIG = {
       KEY: 'YOUR_OPENWEATHER_KEY',
       URL: '[https://api.openweathermap.org/data/2.5/weather](https://api.openweathermap.org/data/2.5/weather)'
   };
