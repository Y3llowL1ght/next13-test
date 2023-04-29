import { weatherData } from "../lib/requestData";


type DataViewProps= {
    processedData : weatherData;
    title : String;
}

const DataView : React.FC<DataViewProps> = ({processedData, title}) => {
    return(
        <div className="border-black border-2 rounded-lg p-3">
            <h1 className="font-bold">{title}</h1>
            <p>temp : {processedData.temp}°C</p>
            <p>windspeed : {processedData.windspeed}km/h</p>
            <p>winddir : {processedData.winddir}</p>
            <p>weathercode : {processedData.weathercode}</p>
        </div>
    );
}

export default DataView;