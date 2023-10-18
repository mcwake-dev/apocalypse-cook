import './App.css'

import Minimap from './components/Minimap';
import Camera from "./components/Camera";
import Instructions from './components/Instructions';
import SettlementDisplay from './components/SettlementDisplay';

function App() {
  return (
    <div className="game">
      <Camera />
      <Minimap />
      <Instructions />
      <SettlementDisplay />
    </div>
  )
}

export default App
