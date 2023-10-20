import { expect, test } from 'vitest';
import { createWorld } from './world';
import { TerrainType } from '../types/terrainType';
import { Tile } from '../types/tile';

test("createWorld creates a world with 10-30 random settlements", () => {
    const world = createWorld();
    const settlements = Array.from(world.values()).filter((tile: Tile) => tile.terrain === TerrainType.Settlement);

    expect(settlements.length).toBeGreaterThan(9);
    expect(settlements.length).toBeLessThan(31);
});

test("createWorld creates a world with 10-30 random named settlements", () => {
    const world = createWorld();
    const settlements = Array.from(world.values()).filter((tile: Tile) => tile.terrain === TerrainType.Settlement);
    const namedSettlements = settlements.filter((tile: Tile) => tile.settlement?.name);

    expect(namedSettlements.length).toBe(settlements.length);
});