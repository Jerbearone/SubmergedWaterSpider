import SingleBoxSize from "./SingleBoxSize";
import Stations from "./Stations";
import { createTotalsObject, line4, lineFiveObject, lineFourObject } from "../../util/station_functions";
import { useState } from "react";
import SingleBoxTotal from "./SingleBoxTotal";

export default function Path4_5({selectedPath}) {
    const [currentLine, setCurrentLine] = useState(line4());
    const [currentStation, setCurrentStation] = useState(1);
    const [fourObject, setFourObject] = useState(lineFourObject());
    const [fiveObject, setFiveObject] = useState(lineFiveObject());
    const [totals, setTotals] = useState(createTotalsObject());
    const [items, setItems] = useState([10,20,30,60,80,93,130,140,153,170,176,179,220,296]);
    const [updateStationBoxCount, setUpdateStationBoxCount] = useState({'boxcount':false});

    //TODO change function argument to take in any line selected..
    const updateObjectCount = (stationNumber, boxSize) => {
        const newObj = {...fourObject};
        console.log("New obj" + newObj);
        //newObj[stationNumber][boxSize] == 0 ? newObj[stationNumber][boxSize] = 1 : newObj[stationNumber][boxSize] = 0;
        if (newObj[stationNumber][boxSize] == 0) {
            newObj[stationNumber][boxSize] = 1;
            addToTotal(boxSize);
        } else {
            newObj[stationNumber][boxSize] = 0;
            subtractFromTotal(boxSize);
        }
        console.log("add to total was called");
        //TODO change this to take in a line number instead of line 4 object...
        setFourObject(newObj);
    }

    const addToTotal = (boxSize) => {
        const newerTotals = {...totals}
        newerTotals[boxSize] += 1;
        setTotals(newerTotals);
    }

    const subtractFromTotal = (boxSize) => {
        const newerTotals = {...totals}
        newerTotals[boxSize] -= 1;
        setTotals(newerTotals);
    }

    const updateSelectedBoxesUI = () => {
        console.log("Updating boxes UI")
        console.log(JSON.stringify(fourObject));
    }

    const getBoxSizeValue = (stationNumber, boxSize) => {
        //Change later to reflect any possible line number
        const boxValue = fourObject[stationNumber][boxSize];
        console.log("Path 4 boxValue = " + boxValue);
        return boxValue;
    }

    //function to pass down to station box counts to make station number button toggle when clicked

    return (
    <div className="path-four-five-container">
        <div className="stations">
            <Stations updateStationBoxCount={updateStationBoxCount} stations={currentLine} setCurrentStation={setCurrentStation} updateSelectedBoxesUI={updateSelectedBoxesUI}
            currentStation={currentStation}>

            </Stations>
        </div>
        <div className="selected-path">
            
            {items.map((item) => {
                return <SingleBoxSize key={item} boxSize={item} stationNumber = {currentStation} updateObjectCount={updateObjectCount}
                getBoxSizeValue={getBoxSizeValue} updateStationBoxCount={updateStationBoxCount} setUpdateStationBoxCount={setUpdateStationBoxCount}></SingleBoxSize> 
            })}
        </div>
        <h4 className="selected-path-totals-title">Totals:</h4>
        <div className="selected-path-totals">
            {Object.keys(totals).map((item) => {
                return <SingleBoxTotal key={item} boxSize={item} total={totals[item]}></SingleBoxTotal>
            })}
        </div>
    </div>)
}