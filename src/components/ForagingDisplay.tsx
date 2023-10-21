import { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import { Howl } from "howler";

import classes from "../styles/ForagingDisplay.module.css";
import { worldAtom } from "../atoms/world";
import { playerAtom } from "../atoms/player";
import { cameraAtom } from "../atoms/camera";
import { Tile } from "../types/tile";
import { ItemType } from "../types/item";

const forageSound = new Howl({
    src: ["/Sounds/forage.ogg"],
});

export default function ForagingDisplay() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [camera] = useAtom(cameraAtom);
    const [player, setPlayer] = useAtom(playerAtom);
    const [, setWorld] = useAtom(worldAtom);

    const currentTile = camera.get(`${player.x},${player.y}`);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            console.log("f");
            switch (e.key) {
                case "f":
                    if (currentTile?.forageable && !currentTile?.foragedToday) {
                        forageSound.play();

                        setPlayer((prev) => {
                            return {
                                ...prev,
                                inventory: [...prev.inventory, { itemType: ItemType.carrot, quantity: 1 }]
                            };
                        });
                        setWorld((prev) => {
                            const newWorld = new Map<string, Tile>(prev);
                            const currentTile = newWorld.get(`${player.x},${player.y}`);

                            if (currentTile) {
                                newWorld.set(`${player.x},${player.y}`, { ...currentTile, foragedToday: true });
                            }

                            return newWorld;
                        });
                    }
                    break;
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    });

    if (currentTile?.forageable) {
        if (currentTile?.foragedToday === true) {
            return (
                <dialog ref={dialogRef} className={classes.foraging} open>
                    You have already foraged here today
                </dialog>
            );
        } else {
            return (
                <dialog ref={dialogRef} className={classes.foraging} open>
                    Press F to forage for ingredients
                </dialog>
            );
        }
    }

    return null;
}