import { useAtom } from 'jotai';

import PlayerDisplay from './PlayerDisplay';
import { playerAtom } from '../atoms/player';
import { Tile } from '../types/tile';

import classes from "../styles/TileDisplay.module.css";

interface ITileDisplay {
    tile: Tile;
}

function TileDisplay({ tile: { x, y, terrain, terrainSubType } }: ITileDisplay) {
    const [player] = useAtom(playerAtom);

    let subTypeClass = "a";

    switch (terrainSubType) {
        case 0:
            subTypeClass = "a";
            break;
        case 1:
            subTypeClass = "b";
            break;
        case 2:
            subTypeClass = "c";
            break;
    }
    return (
        <div className={`${classes.tile} ${classes[terrain]} ${classes[subTypeClass]}`} key={`${x},${y}`}>
            {x === player.x && y === player.y ? <PlayerDisplay /> : ""}
        </div>
    )
}

export default TileDisplay;