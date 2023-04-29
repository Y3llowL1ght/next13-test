import Image from 'next/image'
import Link from 'next/link';

async function getWeather() {
  const req = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.62&hourly=temperature_2m&current_weather=true&forecast_days=1");
  const data = await req.json();
  return data
}


export default async function Home() {
  return (
      <div className="font-mono flex sm:justify-center space-x-3 mt-6 p-6" >
          <div className='mx-sm'>
            <h1 className='font-bold'>root app page</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
               voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
          </div>
          <div>
            <h1 className='font-bold'>or whatever</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
               voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
          </div>
      </div>

  )
}


