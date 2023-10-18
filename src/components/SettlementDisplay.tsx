import { useRef } from "react";
import { useAtom } from "jotai";

import classes from "../styles/SettlementDisplay.module.css";
import { playerAtom } from "../atoms/player";
import { cameraAtom } from "../atoms/camera";
import { TerrainType } from "../types/terrainType";

export default function SettlementDisplay() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [camera] = useAtom(cameraAtom);
    const [player] = useAtom(playerAtom);
    const currentTile = camera.get(`${player.x},${player.y}`);

    console.log(currentTile);

    if (currentTile?.terrain === TerrainType.Settlement) {
        return (
            <dialog ref={dialogRef} className={classes.settlement} open>
                You have arrived at <b>{currentTile?.settlement?.name}</b>
            </dialog>
        );
    }

    return null;
}