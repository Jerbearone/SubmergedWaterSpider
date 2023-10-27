import { useEffect, useState } from "react";

export default function SingleStation({station, setCurrentStation, updateSelectedBoxesUI, updateStationBoxCount, currentStation}) {
    const [stationTotalBoxCount, setStationTotalBoxCount] = useState(0);
    const [mounted, setMounted] = useState(false);
    //refactor current station later so that the program will only check the single station instead of all stations.
    useEffect(()=>{
        console.log("Use effect stations: " + currentStation + " : " + station)
        if (currentStation == station && mounted) {
            if (!updateStationBoxCount.boxcount) {
                setStationTotalBoxCount(stationTotalBoxCount + 1)
            } else if (updateStationBoxCount.boxcount && stationTotalBoxCount > 0) {
                setStationTotalBoxCount(stationTotalBoxCount - 1);
            }
            console.log("Updating box count" + stationTotalBoxCount)
        } else {
            setMounted(true);
        } 
    },[updateStationBoxCount])

    return (<div>
        <p onClick={()=> {
            setCurrentStation(station);
            updateSelectedBoxesUI();
            console.log("Total box count: " + stationTotalBoxCount)
        }} style={{backgroundColor: stationTotalBoxCount!== 0 ? '#E63946' : "white"}} className="single-station" key={station}>{station} </p>
        
    </div>)
}