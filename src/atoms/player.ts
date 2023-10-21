import { atom } from 'jotai';

import { Player } from '../types/player';

export const playerAtom = atom<Player>({ x: 50, y: 50 });
