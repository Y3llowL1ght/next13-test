import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function getWeather() {
  const req = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.62&hourly=temperature_2m&current_weather=true&forecast_days=1");
  const data = await req.json();
  return data
}


export default async function Home() {
  const data = await getWeather();
  const toCompass = (value :number) =>{
    const index =Math.floor((value / 22.5) + 0.5);
    const arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return arr[(index % 16)];
  }
  return (
    <main>
      <div className = "font-mono flex sm:justify-center space-x-3 mt-6" >
        <h1 className = "font-bold">msc weather data</h1>
        <div className = "flex flex-col justify-around bg-slate-50">
          <p>temp : {data.current_weather.temperature}°C</p>
          <p>windspeed : {data.current_weather.windspeed}km/h</p>
          <p>winddir : {toCompass(data.current_weather.winddirection)}</p>
          <p>weathercode : {data.current_weather.weathercode}</p>
        </div>
        
      </div>
    </main>
    
  )
}
