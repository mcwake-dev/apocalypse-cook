import { atom } from 'jotai';

import { Activity, Player } from '../types/player';

export const playerAtom = atom<Player>({ x: 50, y: 50, inventory: [], activity: Activity.Stopped });
