import { atom } from "jotai";
import { Base } from "../types/base";

export const baseAtom = atom<Base>({ x: 50, y: 50 });