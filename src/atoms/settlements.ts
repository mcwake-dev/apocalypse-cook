import { atom } from "jotai";

import { Settlement } from "../types/settlement";

export const settlementsAtom = atom<Settlement[]>([]);