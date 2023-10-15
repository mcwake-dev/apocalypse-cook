import './App.css'
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

type Player = {
  x: number;
  y: number;
}

type Neighbour = {
  direction: "north" | "northeast" | "east" | "southeast" | "south" | "southwest" | "west" | "northwest";
  tile: Tile;
}

type Tile = {
  x: number;
  y: number;
  terrain: "grass" | "water" | "empty";
  neighbours: Neighbour[];
}

function addTile(world: Map<string, Tile>, tile: Tile) {
  const newWorld: Map<string, Tile> = new Map<string, Tile>(world);
  const neighbours: Neighbour[] = [];
  const north = world.get(`${tile.x},${tile.y - 1}`);
  const northeast = world.get(`${tile.x + 1},${tile.y - 1}`);
  const east = world.get(`${tile.x + 1},${tile.y}`);
  const southeast = world.get(`${tile.x + 1},${tile.y + 1}`);
  const south = world.get(`${tile.x},${tile.y + 1}`);
  const southwest = world.get(`${tile.x - 1},${tile.y + 1}`);
  const west = world.get(`${tile.x - 1},${tile.y}`);
  const northwest = world.get(`${tile.x - 1},${tile.y - 1}`);

  if (north) {
    neighbours.push({ direction: "north", tile: north });
    north.neighbours.push({ direction: "south", tile });
  }

  if (northeast) {
    neighbours.push({ direction: "northeast", tile: northeast });
    northeast.neighbours.push({ direction: "southwest", tile });
  }

  if (east) {
    neighbours.push({ direction: "east", tile: east });
    east.neighbours.push({ direction: "west", tile });
  }

  if (southeast) {
    neighbours.push({ direction: "southeast", tile: southeast });
    southeast.neighbours.push({ direction: "northwest", tile });
  }

  if (south) {
    neighbours.push({ direction: "south", tile: south });
    south.neighbours.push({ direction: "north", tile });
  }

  if (southwest) {
    neighbours.push({ direction: "southwest", tile: southwest });
    southwest.neighbours.push({ direction: "northeast", tile });
  }

  if (west) {
    neighbours.push({ direction: "west", tile: west });
    west.neighbours.push({ direction: "east", tile });
  }

  if (northwest) {
    neighbours.push({ direction: "northwest", tile: northwest });
    northwest.neighbours.push({ direction: "southeast", tile });
  }

  tile.neighbours = neighbours;
  newWorld.set(`${tile.x},${tile.y}`, tile);

  return newWorld;
}

function createWorld() {
  let world: Map<string, Tile> = new Map<string, Tile>();

  for (let x = -5; x < 105; x++) {
    for (let y = -5; y < 105; y++) {
      world = addTile(world, { x, y, terrain: "grass", neighbours: [] })
    }
  }

  return world;
}

const world: Map<string, Tile> = createWorld();

const playerAtom = atom<Player>({ x: 0, y: 0 });
const worldAtom = atom<Map<string, Tile>>(world);
const cameraAtom = atom<Map<string, Tile>>(
  (get) => {
    const player = get(playerAtom);
    const world = get(worldAtom);
    const camera: Map<string, Tile> = new Map<string, Tile>();

    for (let y = player.y - 5; y < player.y + 6; y++) {
      for (let x = player.x - 5; x < player.x + 6; x++) {

        const tile = world.get(`${x},${y}`);

        if (tile) {
          camera.set(`${x},${y}`, tile);
        }
      }
    }

    return camera;
  },
);

function App() {
  const [camera] = useAtom(cameraAtom);
  const [player, setPlayer] = useAtom(playerAtom);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          if (player.x - 1 > -1) {
            setPlayer({ ...player, x: player.x - 1 })
          }
          break;
        case "ArrowRight":
          if (player.x + 1 < 100) {
            setPlayer({ ...player, x: player.x + 1 })
          }
          break;
        case "ArrowUp":
          if (player.y - 1 > -1) {
            setPlayer({ ...player, y: player.y - 1 })
          }
          break;
        case "ArrowDown":
          if (player.y + 1 < 100) {
            setPlayer({ ...player, y: player.y + 1 })
          }
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  });

  return (
    <div className="camera">
      {Array.from(camera.values()).map((tile) => {
        return (
          <div className="tile" key={`${tile.x},${tile.y}`}>
            {tile.x === player.x && tile.y === player.y ? "👨‍🌾" : ""}
            {tile.x},{tile.y}
          </div>
        )
      })}
    </div >
  )
}

export default App
