import { useAtom } from 'jotai';

import { playerAtom } from './atoms/player';
import { cameraAtom } from './atoms/camera';
import PlayerDisplay from './PlayerDisplay';

function Camera() {
    const [camera] = useAtom(cameraAtom);
    const [player] = useAtom(playerAtom);

    return (
        <div className="camera">
            {Array.from(camera.values()).map((tile) => {
                return (
                    <div className={`tile ${tile.terrain}${tile.terrainSubType}`} key={`${tile.x},${tile.y}`}>
                        {tile.x === player.x && tile.y === player.y ? <PlayerDisplay /> : ""}
                    </div>
                )
            })}
        </div>
    );
}

export default Camera;