import { Item } from "./item"

export enum PrepType {
    Slice = "Slice",
}

export type PrepStep = {
    ingredient: Item;
    prepType: PrepType;
}

export enum CookType {
    Boil = "Boil",
}

export type CookStep = {
    ingredient: Item;
    cookType: CookType;
}

export type Recipe = {
    name: string;
    description: string;
    ingredients: Item[];
    prep: PrepStep[];
    cook: CookStep[];
}