import { atom } from 'jotai';

import { Player } from '../types/player';

export const playerAtom = atom<Player>({ x: 0, y: 0 });
