"use client";
import React, {useEffect, useState} from 'react';
import {TiWeatherSunny} from "react-icons/ti";

type weatherInfo = {
    temp: number;
    city: string;
    icon: string;
}

type GeoLocation = {
    latitude: number;
    longitude: number;
}

const WeatherComponent = () => {
    const [geoLocation, setGeoLocation] = useState({latitude: 28.7041, longitude: 77.1025} as GeoLocation);
    const [weatherInfo, setWeatherInfo] = useState({} as weatherInfo);

    useEffect(() => {
        fetch('http://ip-api.com/json').then((response) => response.json()).then((data) => {
            setGeoLocation({
                latitude: data.lat,
                longitude: data.lon
            });
        });
    }, []);
    useEffect(() => {
        // get the ip address of the server
        const baseUrl = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;


        fetch(`${baseUrl}/api/weather`,
            {
                method: 'POST',
                body: JSON.stringify(geoLocation),
            }
        )
            .then((response) => response.json()).then((data) => {
            setWeatherInfo(
                {
                    temp: data.main.temp,
                    city: data.name,
                    icon: data.weather[0].icon
                }
            )
        });

    }, [geoLocation]);
    return (
        <div className="flex items-center">
            <div className="text-yellow-500 px-1"><TiWeatherSunny/></div>
            <div className="flex flex-col px-1">
                <div className="text-sm">{(Math.floor(weatherInfo.temp - 273)) || 25} <span
                    className="text-lg">&deg;C</span>
                </div>
                <div className="text-xs">{weatherInfo.city ?? 'New York'}</div>
            </div>
        </div>
    );
};

export default WeatherComponent;