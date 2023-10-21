import { TerrainType } from "../types/terrainType";
import { Tile } from "../types/tile";
import { createBase } from "./base";
import { addRandomSettlements } from "./settlement";

function createWasteland(): Map<string, Tile> {
    const newWorld: Map<string, Tile> = new Map<string, Tile>();

    for (let y = -5; y < 105; y++) {
        for (let x = -5; x < 105; x++) {
            let terrainType = TerrainType.Wasteland;

            if (x < 0 || x > 99 || y < 0 || y > 99) {
                terrainType = TerrainType.Wall;
            }

            newWorld.set(`${x},${y}`, {
                x,
                y,
                terrain: terrainType,
                terrainSubType: Math.floor(Math.random() * 3),
            });
        }
    }

    return newWorld;
}

export function createWorld(): Map<string, Tile> {
    const numberOfSettlements = Math.floor(Math.random() * 20) + 10;
    const blankWorld = createWasteland();
    const settledWorld = addRandomSettlements(blankWorld, numberOfSettlements);
    const worldWithBase = createBase(settledWorld);

    return worldWithBase;
}