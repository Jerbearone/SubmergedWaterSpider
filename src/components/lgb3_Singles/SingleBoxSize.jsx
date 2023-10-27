import { useEffect, useState } from "react"

export default function SingleBoxSize({boxSize, updateObjectCount, stationNumber, getBoxSizeValue, updateStationBoxCount, setUpdateStationBoxCount}) {
    const [wasClicked, setWasClicked] = useState(false);
    useEffect(()=>{
        //console.log(stationNumber[boxSize])
        let newestBoxValue = getBoxSizeValue(stationNumber, boxSize);
        //console.log("Newest Value: " + newestBoxValue);
        if (getBoxSizeValue(stationNumber, boxSize) == 1){
            setWasClicked(true);
        } else {
            setWasClicked(false);
        }
    },[stationNumber])

    
    return (
        <div>
            <h5 style={{backgroundColor: wasClicked ? '#E63946' : "white"}} className="single-box-size" onClick={()=> {
                setWasClicked(!wasClicked);
                //setUpdateStationBoxCount(wasClicked);
                const updatedStationBoxCount = ({...updateStationBoxCount})
                updatedStationBoxCount.boxcount = wasClicked;
                setUpdateStationBoxCount(updatedStationBoxCount)
                updateObjectCount(stationNumber, boxSize);
            }}>{boxSize}</h5>

        </div>
    )
}