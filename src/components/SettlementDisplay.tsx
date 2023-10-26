import { useAtom } from "jotai";

import { playerAtom } from "../atoms/player";
import { cameraAtom } from "../atoms/camera";
import { TerrainType } from "../types/terrainType";

export default function SettlementDisplay() {
    const [camera] = useAtom(cameraAtom);
    const [player] = useAtom(playerAtom);
    const currentTile = camera.get(`${player.x},${player.y}`);

    if (currentTile?.terrain === TerrainType.Settlement) {
        return (
            <>
                You have arrived at <b>{currentTile?.settlement?.name}</b>
            </>
        );
    }

    return null;
}