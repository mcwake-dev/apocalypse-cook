import { TerrainType } from "../types/terrainType";
import { Tile } from "../types/tile";
import { getNeighbours } from "./world-utils";

export function createBase(world: Map<string, Tile>): Map<string, Tile> {
    const newWorld: Map<string, Tile> = new Map<string, Tile>(world);
    const neighbours = getNeighbours(newWorld, newWorld.get(`50,50`)!);

    newWorld.set(`50,50`, {
        x: 50,
        y: 50,
        terrain: TerrainType.Base,
        terrainSubType: 0,
    });

    Array.from(neighbours.values()).forEach((tile: Tile) => newWorld.set(`${tile.x},${tile.y}`, {
        x: tile.x,
        y: tile.y,
        terrain: Math.random() < 0.7 ? TerrainType.Grass : TerrainType.Water,
        terrainSubType: Math.floor(Math.random() * 3),
    }))

    return newWorld;
}