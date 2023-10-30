import { ItemType } from "../types/item";
import { CookType, PrepType, Recipe } from "../types/recipe";

export const recipes: Recipe[] = [
    {
        name: "Sliced Carrot",
        description: "Like carrots, but sliced.",
        ingredients: [
            {
                itemType: ItemType.Carrot,
                quantity: 1,
            },
        ],
        prep: [
            {
                ingredient: {
                    itemType: ItemType.Carrot,
                    quantity: 1,
                },
                prepType: PrepType.Slice,
            },
        ],
        cook: [],
    },
    {
        name: "Boiled Carrot",
        description: "Like carrots, but boiled.",
        ingredients: [
            {
                itemType: ItemType.Carrot,
                quantity: 1,
            },
        ],
        prep: [
            {
                ingredient: {
                    itemType: ItemType.Carrot,
                    quantity: 1,
                },
                prepType: PrepType.Slice,
            },
        ],
        cook: [
            {
                ingredient: {
                    itemType: ItemType.Carrot,
                    quantity: 2,
                },
                cookType: CookType.Boil,
            },
        ]
    }
]