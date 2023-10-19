import Path4_5 from "./lgb3_Singles/Path4_5";

export default function SelectedPath({selectedPath}) {
    return (
    <div>
        <h2>{selectedPath}</h2>
        {selectedPath.join('') == '45' && <div>
            <Path4_5></Path4_5>    
        </div>}
    </div>)
}