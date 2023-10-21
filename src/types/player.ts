import { Item } from "./item";

export enum Activity {
    Foraging = "Foraging",
    Moving = "Moving",
    Stopped = "Stopped",
}

export type Player = {
    x: number;
    y: number;
    inventory: Item[];
    activity: Activity;
}