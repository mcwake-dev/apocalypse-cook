import './App.css'

import Minimap from './Minimap';
import Camera from "./Camera";

function App() {
  return (
    <div className="game">
      <Camera />
      <Minimap />
    </div>
  )
}

export default App
