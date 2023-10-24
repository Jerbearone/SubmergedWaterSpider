import Path4_5 from "./lgb3_Singles/Path4_5";

export default function SelectedPath({selectedPath}) {
    return (
    <div>
        {selectedPath.join('') == '45' && <div>
            <Path4_5 selectedPath={selectedPath}></Path4_5>    
        </div>}
    </div>)
}