import { useAtom } from 'jotai';

import classes from "../styles/Camera.module.css";
import { cameraAtom } from '../atoms/camera';

import TileDisplay from './TileDisplay';

function Camera() {
    const [camera] = useAtom(cameraAtom);


    return (
        <div className={classes.camera}>
            {Array.from(camera.values()).map((tile) => {
                return (
                    <TileDisplay key={`${tile.x}-${tile.y}`} tile={tile} />
                )
            })}
        </div>
    );
}

export default Camera;