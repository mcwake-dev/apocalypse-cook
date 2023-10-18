import { TerrainType } from "./terrainType";
import { Neighbour } from "./neighbour";

export type Tile = {
    x: number;
    y: number;
    terrain: TerrainType;
    terrainSubType: number;
    neighbours: Neighbour[];
}