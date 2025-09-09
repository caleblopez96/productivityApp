import { useState, useEffect } from "react";

const WeatherWidget = () => {
    const [weather, setWeather] = useState({
        location: "Loading...",
        temperature: "--",
    });

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=Phoenix,AZ&appid=${API_KEY}&units=imperial`
                );
                const data = await response.json();
                setWeather({
                    location: data.name,
                    temperature: Math.round(data.main.temp).toString(),
                });
            } catch {
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
