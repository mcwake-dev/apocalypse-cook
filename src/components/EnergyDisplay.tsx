import { useRef, useEffect } from "react";
import { useAtom } from "jotai";

import classes from "../styles/EnergyDisplay.module.css";
import { playerAtom } from "../atoms/player";

function EnergyDisplay() {
    const [player] = useAtom(playerAtom);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        let colour = "green";

        switch (true) {
            case player.energy < 5:
                colour = "red";
                break;
            case player.energy < 7:
                colour = "orange";
                break;
        }

        if (context) {
            context.clearRect(0, 0, 15, 200);
            context.fillStyle = colour;
            context.fillRect(0, 200 - player.energy * 20, 15, 200);
        }
    });

    return (
        <div className={classes.energyContainer}>
            <canvas ref={canvasRef} className={classes.energy} width="15" height="200">

            </canvas>
        </div>
    );
}

export default EnergyDisplay;