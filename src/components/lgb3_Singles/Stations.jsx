export default function Stations({stations, setCurrentStation, updateSelectedBoxesUI}) {
    return(
        <div>
            {stations.map((station) => {
                return <p onClick={()=> {
                    setCurrentStation(station);
                    updateSelectedBoxesUI();
                }} className="single-station" key={station}>{station}</p>
            })}

        </div>
    )
}