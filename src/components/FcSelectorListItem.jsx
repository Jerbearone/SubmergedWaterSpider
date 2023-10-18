import { useNavigate } from "react-router-dom";

export default function FcSelectorListItem({buildingName, setSelectedBuilding, setBuildingWasSelected, setBuildingName}) {
    const navigator = useNavigate();
    return (
        <li onClick={()=> {
            setSelectedBuilding(buildingName);
            setBuildingWasSelected(true);
            setBuildingName(buildingName);
            navigator('/selectpath')
            
        }} className="fc-selector-list-item">{buildingName}</li>
    )
}