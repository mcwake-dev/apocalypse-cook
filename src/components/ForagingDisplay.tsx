import { useAtom } from "jotai";

import { playerAtom } from "../atoms/player";
import { cameraAtom } from "../atoms/camera";

export default function ForagingDisplay() {
    const [camera] = useAtom(cameraAtom);
    const [player] = useAtom(playerAtom);
    const currentTile = camera.get(`${player.x},${player.y}`);

    if (currentTile?.forageable) {
        if (player.energy === 0) {
            return (
                <>
                    You are too tired to forage
                </>
            )
        }
        if (player.inventory.length === 10) {
            return (
                <>
                    Your inventory is full
                </>
            )
        }
        if (currentTile?.foragedToday === true) {
            return (
                <>
                    You have already foraged here today
                </>
            );
        } else {
            return (
                <>
                    Press <b>f</b> to forage for ingredients
                </>
            );
        }
    }

    return null;
}