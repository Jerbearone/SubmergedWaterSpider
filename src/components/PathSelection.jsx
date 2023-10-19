import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function PathSelection({buildingName, setSelectedPath}) {
    const [processPath, setProcessPath] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <h1>{buildingName}</h1>
            <h2>Select Path</h2>
            <div className="path-selector-components">
                <h2 className="path-selector-item">AFE</h2>
                <h2 onClick={()=> {setProcessPath("Singles")}} className="path-selector-item">Singles</h2>
            </div>
            {processPath == "Singles" && <div>
                <ul className="fc-selector-selections">
                    <li className="fc-selector-list-item">1,2,3</li>
                    <li onClick={()=>{
                        setSelectedPath([4,5]);
                        navigate('/waterspider');
                    }} className="fc-selector-list-item">4,5</li>
                    <li className="fc-selector-list-item">6,7</li>
                    <li className="fc-selector-list-item">Trans</li>
                    <li className="fc-selector-list-item">Gift Wrap</li>
                </ul>
            </div>}

        </div>
    )
}