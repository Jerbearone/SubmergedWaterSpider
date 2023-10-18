export default function PathSelection({buildingName}) {
    return (
        <div>
            <h1>{buildingName}</h1>
            <h2>Select Path</h2>
            <div className="path-selector-components">
                <h2 className="path-selector-item">AFE</h2>
                <h2 className="path-selector-item">Singles</h2>
            </div>

        </div>
    )
}