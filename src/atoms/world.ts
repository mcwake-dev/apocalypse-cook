import { atom } from "jotai";
import { Tile } from "../types/tile";
import { createWorld } from "../procedural-generation/world";

export const worldAtom = atom<Map<string, Tile>>(createWorld());

