import SingleBoxSize from "./SingleBoxSize";
import Stations from "./Stations";
import { line4, line5 } from "../../util/station_functions";
import { useState } from "react";

export default function Path4_5() {
    const [currentStations, setCurrentStations] = useState(line4())
    const items = [10,20,30,60,80,93,130,140,153,170,176,179,220,296];
    const stationsFive = line5();
    console.log(stationsFive)
    return (
    <div className="path-four-five-container">
        <div className="stations">
            <Stations stations={currentStations}>

            </Stations>


        </div>
        <div className="selected-path">
            {items.map((item) => {
                return <SingleBoxSize key={item} boxSize={item}></SingleBoxSize> 
            })}
        </div>
        

    </div>)
}