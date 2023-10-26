import { useEffect } from 'react';
import { useAtom } from 'jotai';

import { playerAtom } from '../atoms/player';
import { worldAtom } from '../atoms/world';
import classes from "../styles/PlayerDisplay.module.css";
import { Howl } from "howler";
import { Activity } from '../types/player';
import { Tile } from '../types/tile';
import { ItemType } from '../types/item';

const forageSound = new Howl({
    src: ["/Sounds/forage.ogg"],
});

function PlayerDisplay() {
    const [player, setPlayer] = useAtom(playerAtom);
    const [world, setWorld] = useAtom(worldAtom);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            let xMod = 0;
            let yMod = 0;

            switch (e.key) {
                case "ArrowLeft":
                    if (player.x - 1 > -1) {
                        xMod = -1;
                    }
                    break;
                case "ArrowRight":
                    if (player.x + 1 < 100) {
                        xMod = 1;
                    }
                    break;
                case "ArrowUp":
                    if (player.y - 1 > -1) {
                        yMod = -1;
                    }
                    break;
                case "ArrowDown":
                    if (player.y + 1 < 100) {
                        yMod = 1;
                    }
                    break;
                case "f":
                    const currentTile = world.get(`${player.x},${player.y}`);

                    if (
                        currentTile?.forageable &&
                        !currentTile?.foragedToday &&
                        player.energy > 0 &&
                        player.activity !== Activity.Foraging
                    ) {
                        forageSound.play();
                        setPlayer((prev) => {
                            return {
                                ...prev,
                                activity: Activity.Foraging,
                                energy: prev.energy - 1
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

                        setTimeout(function () {
                            setPlayer((prev) => {
                                return {
                                    ...prev,
                                    activity: Activity.Stopped,
                                    inventory: [...prev.inventory, { itemType: ItemType.carrot, quantity: 1 }],
                                };
                            })
                        }, 300);
                    }
                    break;
            }

            if (xMod !== 0 || yMod !== 0) {
                setPlayer((prev) => {
                    return {
                        ...prev,
                        x: prev.x + xMod,
                        y: prev.y + yMod,
                        activity: Activity.Moving
                    };
                });

                setTimeout(function () {
                    setPlayer((prev) => {
                        return {
                            ...prev,
                            activity: Activity.Stopped
                        };
                    })
                }, 600);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    })

    return (
        <div className={classes.playerContainer}>
            <div className={`${classes.player} ${player.activity === Activity.Moving ? classes.bounce : ""} ${player.activity === Activity.Foraging ? classes.forage : ""}`}></div>
        </div>
    );
}

export default PlayerDisplay;