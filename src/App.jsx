import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import PathSelection from './components/PathSelection'
import SelectedPath from './components/SelectedPath'

function App() {
  const [count, setCount] = useState(0);
  const [buildingName, setBuildingName] = useState("");
  const [selectedPath, setSelectedPath] = useState([]);

  return (
    <div>
      <h1>Submerged Water Spider</h1>
      <Routes>
        <Route path='/' element={<Home setBuildingName={setBuildingName}></Home>}></Route>
        <Route path='/selectpath' element={<PathSelection buildingName={buildingName} setSelectedPath={setSelectedPath}></PathSelection>}></Route>
        <Route path='/waterspider' element={<SelectedPath selectedPath={selectedPath}></SelectedPath>}></Route>
        
      </Routes>
    </div>
  )
}

export default App
