import { Settlement } from "./settlement";
import { TerrainType } from "./terrainType";

export type Tile = {
    x: number;
    y: number;
    terrain: TerrainType;
    terrainSubType: number;
    settlement?: Settlement;
    forageable: boolean;
    foragedToday?: boolean;
}