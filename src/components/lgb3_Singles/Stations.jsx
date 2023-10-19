export default function Stations({stations}) {
    return(
        <div>
            {stations.map((station) => {
                return <p key={station}>{station}</p>
            })}

        </div>
    )
}