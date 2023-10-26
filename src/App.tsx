import './App.css'

import Minimap from './components/Minimap';
import Camera from "./components/Camera";
import Instructions from './components/Instructions';
import SettlementDisplay from './components/SettlementDisplay';
import BaseDisplay from './components/BaseDisplay';
import ForagingDisplay from './components/ForagingDisplay';
import InventoryDisplay from './components/InventoryDisplay';
import EnergyDisplay from './components/EnergyDisplay';

function App() {
  return (
    <div className="game">
      <Camera />
      <Minimap />
      <Instructions />
      <SettlementDisplay />
      <BaseDisplay />
      <ForagingDisplay />
      <InventoryDisplay />
      <EnergyDisplay />
    </div>
  )
}

export default App
