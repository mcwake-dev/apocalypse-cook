import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';

import { playerAtom } from '../atoms/player';
import { worldAtom } from '../atoms/world';
import { TerrainType } from '../types/terrainType';
import classes from "../styles/Minimap.module.css";
import { baseAtom } from '../atoms/base';

function Minimap() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [player] = useAtom(playerAtom);
    const [world] = useAtom(worldAtom);
    const [base] = useAtom(baseAtom);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (context) {
            Array.from(world.values()).map((tile) => {
                switch (tile.terrain) {
                    case TerrainType.Water:
                        context.fillStyle = "blue";
                        context.fillRect(tile.x, tile.y, 1, 1);
                        break;
                    case TerrainType.Grass:
                        context.fillStyle = "green";
                        context.fillRect(tile.x, tile.y, 1, 1);
                        break;
                    case TerrainType.Wasteland:
                        context.fillStyle = "#eaa56c";
                        context.fillRect(tile.x, tile.y, 1, 1);
                        break;
                    case TerrainType.Settlement:
                        context.fillStyle = "black";
                        context.fillRect(tile.x - 1, tile.y - 1, 3, 3);
                        break;
                }
                context.fillRect(tile.x, tile.y, 1, 1);
            });

            context.fillStyle = "blue";
            context.fillRect(base.x - 2, base.y - 2, 5, 5);

            context.fillStyle = "red";
            context.fillRect(player.x - 2, player.y - 2, 5, 5);
        }
    })

    return (
        <div className={classes.minimap}>
            <canvas ref={canvasRef} width="100" height="100"></canvas>
        </div>
    )
}

export default Minimap;