import { Link } from "react-router-dom";

import classes from "../styles/Cook.module.css";
import { recipes } from "../data/recipes";

function Cook() {
    return (
        <div className={classes.recipes}>
            <header className={classes.recipesHeader}>
                Recipes
            </header>
            <div className={classes.recipeList}>
                {recipes.map((recipe) => {
                    return (
                        <article className={classes.recipeCard}>
                            <header>{recipe.name}</header>
                            <div className={classes.ingredients}>
                                <header>Ingredients</header>
                                {recipe.ingredients.map((ingredient) => {
                                    return (
                                        <li>
                                            {ingredient.quantity} {ingredient.itemType}
                                        </li>
                                    )
                                })
                                }
                            </div>
                            <div className={classes.preparation}>
                                <header>Preparation</header>
                                {recipe.prep.map((step) => {
                                    return (
                                        <li>
                                            {step.prepType} {step.ingredient.itemType}
                                        </li>
                                    )
                                })}
                            </div>
                            <div className={classes.cooking}>
                                <header>Cooking</header>
                                {recipe.cook.map((step) => {
                                    return (
                                        <li>
                                            {step.cookType} {step.ingredient.itemType}
                                        </li>
                                    )
                                })}
                            </div>
                        </article>
                    )
                })
                }
            </div>
            <Link to={`/`}>Back to World</Link>
        </div>
    )
}

export default Cook;