import { atom } from "jotai";
import { Tile } from "../types/tile";
import { TerrainType } from "../types/terrainType";
import { Neighbour } from "../types/neighbour";

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

    for (let y = -5; y < 105; y++) {
        for (let x = -5; x < 105; x++) {
            let terrainType: TerrainType = TerrainType.Grass;
            let terrainSubType: number = 0;

            if (x < 0 || x > 99 || y < 0 || y > 99) {
                terrainType = TerrainType.Wall;
                terrainSubType = Math.floor(Math.random() * 3);
            }
            else {
                const landOrWater = Math.random() > 0.3 ? "land" : "water";

                if (landOrWater === "land") {
                    terrainType = Math.random() > 0.7 ? TerrainType.Grass : TerrainType.Wasteland;
                    terrainSubType = Math.floor(Math.random() * 3);
                }
                else {
                    terrainType = TerrainType.Water;
                }
            }

            world = addTile(world, { x, y, terrain: terrainType, terrainSubType, neighbours: [] })
        }
    }

    return world;
}

const world: Map<string, Tile> = createWorld();

export const worldAtom = atom<Map<string, Tile>>(world);

