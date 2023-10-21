import { TerrainType } from "../types/terrainType";
import { Tile } from "../types/tile";
import { settlementNames } from "../data/settlementNames";

function randomSettlementName(world: Map<string, Tile>): string {
    const settlements = Array.from(world.values()).filter((tile: Tile) => tile.settlement);
    const currentSettlementNames = settlements.map((tile: Tile) => tile.settlement?.name);
    const availableSettlementNames = settlementNames.filter(name => !currentSettlementNames.includes(name));
    const randomAvailableSettlementName = availableSettlementNames[Math.floor(Math.random() * availableSettlementNames.length)];

    return randomAvailableSettlementName!;
}

function addRandomSettlement(world: Map<string, Tile>): Map<string, Tile> {
    const newWorld = new Map<string, Tile>(world);
    const centreX = Math.floor(Math.random() * 100);
    const centreY = Math.floor(Math.random() * 100);
    const newSettlementName = randomSettlementName(newWorld);

    newWorld.set(`${centreX},${centreY}`, {
        x: centreX,
        y: centreY,
        terrain: TerrainType.Settlement,
        terrainSubType: Math.floor(Math.random() * 3),
        settlement: {
            name: newSettlementName,
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