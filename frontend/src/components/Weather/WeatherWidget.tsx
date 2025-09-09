import { useState, useEffect } from "react";

const WeatherWidget = () => {
    const [weather, setWeather] = useState({
        location: "Loading...",
        temperature: "--",
    });

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Phoenix,AZ&aqi=no`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(`API Error: ${response.status}`);
                }

                setWeather({
                    location: data.location.name || "Phoenix",
                    temperature: Math.round(data.current.temp_f || 75).toString(),
                });
            } catch (error) {
                console.error("Weather fetch failed:", error);
                setWeather({ location: "Phoenix, AZ", temperature: "75" });
            }
        };
        fetchWeather();
    }, []);

    return (
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl p-8 text-white">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-4xl font-bold mb-2">{weather.location}</h1>
                    <p className="text-lg opacity-90">Today</p>
                </div>
                <div className="text-right">
                    <div className="text-6xl font-light mb-2">{weather.temperature}°</div>
                    <p className="opacity-90">Sunny</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
