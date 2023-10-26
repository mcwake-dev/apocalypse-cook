import { useRef, useEffect } from "react";
import { useAtom } from "jotai";

import { worldAtom } from "../atoms/world";
import { playerAtom } from "../atoms/player";
import { cameraAtom } from "../atoms/camera";
import { Tile } from "../types/tile";
import { ItemType } from "../types/item";
import { Activity } from "../types/player";

export default function ForagingDisplay() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [camera] = useAtom(cameraAtom);
    const [player, setPlayer] = useAtom(playerAtom);
    const [, setWorld] = useAtom(worldAtom);

    const currentTile = camera.get(`${player.x},${player.y}`);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "f":
                    if (currentTile?.forageable && !currentTile?.foragedToday && player.energy > 0) {
                        setPlayer((prev) => {
                            return {
                                ...prev,
                                inventory: [...prev.inventory, { itemType: ItemType.carrot, quantity: 1 }],
                                activity: Activity.Foraging,
                                energy: prev.energy - 1
                            };
                        });

                        setTimeout(function () {
                            setWorld((prev) => {
                                const newWorld = new Map<string, Tile>(prev);
                                const currentTile = newWorld.get(`${player.x},${player.y}`);

                                if (currentTile) {
                                    newWorld.set(`${player.x},${player.y}`, { ...currentTile, foragedToday: true });
                                }

                                return newWorld;
                            });
                            setPlayer((prev) => {
                                return {
                                    ...prev,
                                    activity: Activity.Stopped
                                };
                            })
                        }, 600);
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
        if (player.energy === 0) {
            return (
                <>
                    You are too tired to forage
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