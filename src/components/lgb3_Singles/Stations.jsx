import SingleStation from "./SingleStation";

export default function Stations({stations, setCurrentStation, updateSelectedBoxesUI, updateStationBoxCount, currentStation}) {
    
    return(
        <div >
            <h3 className="station-number-title">Station#{currentStation}</h3>
            {stations.map((station) => {
                return <SingleStation updateStationBoxCount={updateStationBoxCount} setCurrentStation={setCurrentStation} updateSelectedBoxesUI={updateSelectedBoxesUI}
                station={station} currentStation={currentStation} className="single-station" key={station}>{station} </SingleStation>
            })}
        </div>
    )
}