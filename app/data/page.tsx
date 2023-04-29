import { getWeatherData } from "../../lib/requestData";
import DataView from "@/components/DataView";

export default async function DataPage() {
  const data = await getWeatherData();
  return (
    <div className = "font-mono flex sm:justify-center space-x-3 mt-6 p-6">
      <div>Custom component ----\</div>
      <DataView processedData = {data} title = {"moscow weather status"}></DataView>
    </div>
    
  )
}
