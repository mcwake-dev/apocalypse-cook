import { atom } from "jotai";
import { worldAtom } from "./world";
import { playerAtom } from "./player";
import { Tile } from "../types/tile";

export const cameraAtom = atom<Map<string, Tile>>(
    (get) => {
        const player = get(playerAtom);
        const world = get(worldAtom);
        const camera: Map<string, Tile> = new Map<string, Tile>();

        for (let y = player.y - 5; y < player.y + 6; y++) {
            for (let x = player.x - 5; x < player.x + 6; x++) {

                const tile = world.get(`${x},${y}`);

                if (tile) {
                    camera.set(`${x},${y}`, tile);
                }
            }
        }

        return camera;
    },
);