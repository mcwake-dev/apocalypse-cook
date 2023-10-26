import './App.css'

import Minimap from './components/Minimap';
import Camera from "./components/Camera";
import Instructions from './components/Instructions';
import InventoryDisplay from './components/InventoryDisplay';
import EnergyDisplay from './components/EnergyDisplay';
import InteractionDialog from './components/InteractionDialog';

function App() {
  return (
    <div className="game">
      <Camera />
      <Minimap />
      <Instructions />
      <InteractionDialog />
      <InventoryDisplay />
      <EnergyDisplay />
    </div>
  )
}

export default App
