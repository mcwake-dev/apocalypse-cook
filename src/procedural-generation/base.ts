import { Tile } from "../types/tile";
import { createBaseTile, createGrassTile, createWaterTile } from "./tile";
import { getNeighbours } from "./world-utils";

export function createBase(world: Map<string, Tile>): Map<string, Tile> {
    const newWorld: Map<string, Tile> = new Map<string, Tile>(world);
    const neighbours = getNeighbours(newWorld, newWorld.get(`50,50`)!);

    newWorld.set(`50,50`, createBaseTile(50, 50));

    Array
        .from(neighbours.values())
        .forEach((tile: Tile) => newWorld.set(
            `${tile.x},${tile.y}`,
            Math.random() < 0.8 ?
                createGrassTile(tile.x, tile.y) : createWaterTile(tile.x, tile.y)))

    return newWorld;
}