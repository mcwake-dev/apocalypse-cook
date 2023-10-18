import { useEffect } from 'react';
import { useAtom } from 'jotai';

import { playerAtom } from '../atoms/player';
import classes from "../styles/PlayerDisplay.module.css";

function PlayerDisplay() {
    const [player, setPlayer] = useAtom(playerAtom);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowLeft":
                    if (player.x - 1 > -1) {
                        setPlayer({ ...player, x: player.x - 1 })
                    }
                    break;
                case "ArrowRight":
                    if (player.x + 1 < 100) {
                        setPlayer({ ...player, x: player.x + 1 })
                    }
                    break;
                case "ArrowUp":
                    if (player.y - 1 > -1) {
                        setPlayer({ ...player, y: player.y - 1 })
                    }
                    break;
                case "ArrowDown":
                    if (player.y + 1 < 100) {
                        setPlayer({ ...player, y: player.y + 1 })
                    }
                    break;
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    })

    return (
        <div className={classes.playerContainer}>
            <div className={`${classes.player} ${classes.bounce}`}></div>
        </div>
    );
}

export default PlayerDisplay;