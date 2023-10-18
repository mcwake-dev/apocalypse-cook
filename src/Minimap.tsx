import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';

import { playerAtom } from './atoms/player';
import { worldAtom } from './atoms/world';
import { TerrainType } from './types/terrainType';

function Minimap() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [player] = useAtom(playerAtom);
    const [world] = useAtom(worldAtom);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (context) {
            Array.from(world.values()).map((tile) => {
                context.fillStyle = tile.terrain === TerrainType.Water ? "blue" : "green";
                context.fillRect(tile.x, tile.y, 1, 1);
            });

            context.fillStyle = "red";
            context.fillRect(player.x, player.y, 5, 5);
        }
    })

    return (
        <div className="minimap" >
            <canvas ref={canvasRef} width="100" height="100"></canvas>
        </div>
    )
}

export default Minimap;