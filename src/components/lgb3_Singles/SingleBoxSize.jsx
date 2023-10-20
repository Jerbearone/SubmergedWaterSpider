import { useEffect, useState } from "react"

export default function SingleBoxSize({boxSize}) {
    const [wasClicked, setWasClicked] = useState(false);

    useEffect(()=>{

    },[wasClicked])
    return (
        <div>
            <h5 style={{backgroundColor: wasClicked ? '#E63946' : "white"}} className="single-box-size" onClick={()=> {
                setWasClicked(!wasClicked);
            }}>{boxSize}</h5>

        </div>
    )
}