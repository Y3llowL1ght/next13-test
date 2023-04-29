
//ебейший нейминг
export type weatherData = {
    temp : string;
    windspeed : string;
    winddir : string;
    weathercode : string;
}

const toCompass = (value :number):string =>{
    const index = Math.floor((value / 22.5) + 0.5);
    const arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return arr[(index % 16)];
}

export async function getWeatherData() {
    const req = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.62&hourly=temperature_2m&current_weather=true&forecast_days=1");
    const data = await req.json();
    const result : weatherData = {
        temp : String(data.current_weather.temperature),
        windspeed : String(data.current_weather.windspeed),
        winddir : toCompass(data.current_weather.winddirection),
        weathercode: String(data.current_weather.weathercode)
    };
    return result;
  }
