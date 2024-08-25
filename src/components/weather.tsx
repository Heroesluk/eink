// simple weather displaying today's weather for specific place
import "../styles/components/weather.css"
import {Cloud} from "@phosphor-icons/react";

interface WeatherProps {
    temperature: number
    location: string
    description: string
    image: string
    precipationChance: number
    humidity: number
    wind: number
}

export const Weather = (props: WeatherProps) => {
    return <>
        <div className="Weather-card">
            <div>
                <div>{props.location}</div>
                <div>{props.description}</div>
            </div>
            <div>
                <div>{props.temperature}</div>
                <div><Cloud></Cloud></div>
            </div>
            <div>
                <div>{props.precipationChance}</div>
                <div>{props.humidity}</div>
                <div>{props.wind}</div>
            </div>
        </div>
    </>
}