import { Tile } from "../types/tile";
import { settlementNames } from "../data/settlementNames";
import { createSettlementTile } from "./tile";

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

    newWorld.set(`${centreX},${centreY}`, createSettlementTile(centreX, centreY, newSettlementName));

    return newWorld;
}

export function addRandomSettlements(world: Map<string, Tile>, numberOfSettlements: number): Map<string, Tile> {
    let newWorld = new Map<string, Tile>(world);

    for (let i = 0; i < numberOfSettlements; i++) {
        newWorld = addRandomSettlement(newWorld);
    }

    return newWorld;
}