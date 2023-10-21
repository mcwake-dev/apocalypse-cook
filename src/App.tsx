import './App.css'

import Minimap from './components/Minimap';
import Camera from "./components/Camera";
import Instructions from './components/Instructions';
import SettlementDisplay from './components/SettlementDisplay';
import BaseDisplay from './components/BaseDisplay';

function App() {
  return (
    <div className="game">
      <Camera />
      <Minimap />
      <Instructions />
      <SettlementDisplay />
      <BaseDisplay />
    </div>
  )
}

export default App
