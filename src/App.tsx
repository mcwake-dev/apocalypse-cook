import './App.css'

import Minimap from './components/Minimap';
import Camera from "./components/Camera";
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="game">
      <Camera />
      <Minimap />
      <Instructions />
    </div>
  )
}

export default App
