import { atom } from 'jotai';

import { Activity, Player } from '../types/player';

const defaultPlayer: Player = {
    x: 50,
    y: 50,
    inventory: [],
    activity: Activity.Stopped,
    energy: 10,
};

export const playerAtom = atom<Player>(defaultPlayer);
