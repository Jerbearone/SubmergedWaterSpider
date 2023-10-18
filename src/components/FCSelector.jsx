import { useState } from "react"
import FcSelectorListItem from "./FcSelectorListItem"

export default function FCSelector ({setBuildingName}) {
    const [buildingNames, setBuildingNames] = useState(["LGB3", "LGB5"]);
    const [selectedBuilding, setSelectedBuilding] = useState("Select Building");
    const [buildingWasSelected, setBuildingWasSelected] = useState(false);
    
    return (
        <div className="fc-selector-component">
            <h2>Select FC:</h2>
            <input className="fc-selector-input"  value={selectedBuilding}></input>
            <button>Search</button>
            <ul className="fc-selector-selections">
                {buildingNames.map((name) => {
                    return <FcSelectorListItem key={name} setBuildingName={setBuildingName} buildingName={name} setSelectedBuilding={setSelectedBuilding}
                    setBuildingWasSelected={setBuildingWasSelected}></FcSelectorListItem>
                })}
            </ul>
        </div>
    )
}