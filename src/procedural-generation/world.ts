import { TerrainType } from "../types/terrainType";
import { Tile } from "../types/tile";
import { settlementNames } from "../data/settlementNames";

function randomSettlementName(world: Map<string, Tile>): string {
    const currentSettlements = Array.from(world.values()).filter(tile => tile.settlement).map(tile => tile.settlement?.name);

    return settlementNames.filter(name => !currentSettlements.includes(name))[Math.floor(Math.random() * settlementNames.length)];
}

function addRandomSettlement(world: Map<string, Tile>): Map<string, Tile> {
    const newWorld = new Map<string, Tile>(world);
    const centreX = Math.floor(Math.random() * 100);
    const centreY = Math.floor(Math.random() * 100);

    newWorld.set(`${centreX},${centreY}`, {
        x: centreX,
        y: centreY,
        terrain: TerrainType.Settlement,
        terrainSubType: Math.floor(Math.random() * 3),
        settlement: {
            name: randomSettlementName(newWorld),
        }
    });

    return newWorld;
}

function addRandomSettlements(world: Map<string, Tile>, numberOfSettlements: number): Map<string, Tile> {
    let newWorld = new Map<string, Tile>(world);

    for (let i = 0; i < numberOfSettlements; i++) {
        newWorld = addRandomSettlement(newWorld);
    }

    return newWorld;
}

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

    return settledWorld;
}