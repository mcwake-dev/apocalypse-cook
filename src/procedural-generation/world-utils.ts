import { Direction } from "../types/direction";
import { Tile } from "../types/tile";

export function getNeighbour(world: Map<string, Tile>, tile: Tile, direction: Direction): Tile | undefined {
    switch (direction) {
        case Direction.North:
            return world.get(`${tile.x},${tile.y - 1}`);
        case Direction.NorthEast:
            return world.get(`${tile.x + 1},${tile.y - 1}`);
        case Direction.East:
            return world.get(`${tile.x + 1},${tile.y}`);
        case Direction.SouthEast:
            return world.get(`${tile.x + 1},${tile.y + 1}`);
        case Direction.South:
            return world.get(`${tile.x},${tile.y + 1}`);
        case Direction.SouthWest:
            return world.get(`${tile.x - 1},${tile.y + 1}`);
        case Direction.West:
            return world.get(`${tile.x - 1},${tile.y}`);
        case Direction.NorthWest:
            return world.get(`${tile.x - 1},${tile.y - 1}`);
    }
}

export function getRandomNeighbour(world: Map<string, Tile>, tile: Tile): Tile | undefined {
    const direction = Math.floor(Math.random() * 8);

    return getNeighbour(world, tile, direction);
}

export function getNeighbours(world: Map<string, Tile>, tile: Tile): Tile[] {
    const neighbours: Tile[] = [];

    for (let i = 0; i < 8; i++) {
        const neighbour = getNeighbour(world, tile, i);

        if (neighbour) {
            neighbours.push(neighbour);
        }
    }

    return neighbours;
}

export function getNonWallNeighbours(world: Map<string, Tile>, tile: Tile): Tile[] {
    const allNeighbours: Tile[] = getNeighbours(world, tile);

    return allNeighbours.filter(neighbour => neighbour.terrain !== "wall");
}