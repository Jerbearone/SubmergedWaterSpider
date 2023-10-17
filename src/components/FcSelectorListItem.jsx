export default function FcSelectorListItem({buildingName, setSelectedBuilding}) {
    return (
        <li onClick={()=> {setSelectedBuilding(buildingName)}} className="fc-selector-list-item">{buildingName}</li>
    )
}