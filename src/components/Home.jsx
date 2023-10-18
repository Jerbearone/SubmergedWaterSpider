import FCSelector from "./FCSelector";

export default function Home ( {setBuildingName}) {
    return (
        <div>
            <FCSelector setBuildingName={setBuildingName}></FCSelector>
        </div>
    )
}