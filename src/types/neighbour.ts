import { Tile } from "./tile";

export type Neighbour = {
    direction: "north" | "northeast" | "east" | "southeast" | "south" | "southwest" | "west" | "northwest";
    tile: Tile;
}