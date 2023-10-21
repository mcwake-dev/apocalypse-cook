import { TerrainType } from "../types/terrainType";
import { Tile } from "../types/tile";

export function createGrassTile(x: number, y: number): Tile {
    return {
        x,
        y,
        terrain: TerrainType.Grass,
        terrainSubType: Math.floor(Math.random() * 3),
        forageable: true,
        foragedToday: false,
    };
}

export function createWaterTile(x: number, y: number): Tile {
    return {
        x,
        y,
        terrain: TerrainType.Water,
        terrainSubType: 0,
        forageable: true,
        foragedToday: false,
    };
}

export function createBaseTile(x: number, y: number): Tile {
    return {
        x,
        y,
        terrain: TerrainType.Base,
        terrainSubType: 0,
        forageable: false,
    };
}

export function createSettlementTile(x: number, y: number, name: string): Tile {
    return {
        x,
        y,
        terrain: TerrainType.Settlement,
        terrainSubType: Math.floor(Math.random() * 3),
        settlement: {
            name,
        },
        forageable: false,
    };
}

export function createTileOfType(x: number, y: number, terrain: TerrainType): Tile {
    return {
        x,
        y,
        terrain,
        terrainSubType: Math.floor(Math.random() * 3),
        forageable: false,
    };
}