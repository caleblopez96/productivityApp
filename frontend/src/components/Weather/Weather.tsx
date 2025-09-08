import { useState, useEffect } from "react";
import { Cloud, Sun, CloudRain, CloudSnow } from "lucide-react";

const WeatherWidget = () => {
    const [weather, setWeather] = useState({
        location: "Loading...",
        temperature: "--",
        description: "fetching weather...",
        date: new Date().toLocaleDateString("en-US", {
            day: "numeric",
            weekday: "short",
        }),
        loading: true,
        error: null,
    });

    // get user's location and fetch weather
    useEffect(() => {
        const fetchWeather = async (lat: number, lon: number) => {
            try {
                const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
                );

                if (!response.ok) throw new Error("Weather data unavailable");

                const data = await response.json();

                setWeather({
                    location: data.name,
                    temperature: String(Math.round(data.main.temp)),
                    description: data.weather[0].description,
                    date: new Date().toLocaleDateString("en-US", {
                        day: "numeric",
                        weekday: "short",
                    }),
                    loading: false,
                    error: null,
                    weatherCode: data.weather[0].main, // For icon selection
                });
            } catch (error) {
                setWeather((prev) => ({
                    ...prev,
                    loading: false,
                    error: "Unable to fetch weather",
                }));
            }
        };

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        fetchWeather(position.coords.latitude, position.coords.longitude);
                    },
                    (error) => {
                        // fallback to a default city if geolocation fails
                        setWeather((prev) => ({
                            ...prev,
                            location: "Phoenix, AZ",
                            temperature: "75",
                            description: "partly cloudy",
                            loading: false,
                        }));
                    }
                );
            } else {
                // else geolocation isn't supported, use default
                setWeather((prev) => ({
                    ...prev,
                    location: "Phoenix, AZ",
                    temperature: "75",
                    description: "sunny",
                    loading: false,
                }));
            }
        };

        getLocation();
    }, []);

    // func to display right weather icon
    const getWeatherIcon = (weatherCode: string) => {
        switch (weatherCode) {
            case "Clear":
                return <Sun className="w-16 h-16 text-yellow-400" />;
            case "Clouds":
                return <Cloud className="w-16 h-16 text-gray-300" />;
            case "Rain":
                return <CloudRain className="w-16 h-16 text-blue-400" />;
            case "Snow":
                return <CloudSnow className="w-16 h-16 text-blue-200" />;
            default:
                return <Sun className="w-16 h-16 text-yellow-400" />;
        }
    };

    return (
        <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-2">{weather.location}</h1>
                    <p className="text-lg opacity-90">{weather.date}</p>
                </div>

                <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm opacity-75">Now</span>
                        {weather.loading && (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        )}
                    </div>
                    <div className="text-6xl font-light mb-2">{weather.loading ? "--" : `${weather.temperature}°`}</div>
                    <p className="opacity-90 capitalize">{weather.error || weather.description}</p>
                </div>
            </div>

            {/* Weather icon */}
            <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {weather.loading ? (
                        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        getWeatherIcon(weather.weatherCode)
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
