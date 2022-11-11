import { useState } from "react";
import "./recipes.css";

const Recipes = ({ recipeData }) => {
  const [ing, seting] = useState(false);
  let recipeId = localStorage.getItem("indexForRecipes");
  console.log(recipeId);
  console.log(recipeData[recipeId]);
  let recipe = recipeData[recipeId];
  console.log(recipe);
  const showIngredients = () => {
    seting(!ing);
  };
  return (
    <div className="recipeContainer">
      <div className="recipeHead">
        <img src={recipe.recipe.image} alt="img" className="recipeImage" />
        <div>
          <h1 className="recipeName" data-text={recipe.recipe.label}>
            {recipe.recipe.label}
          </h1>
          <p className="recipeTags">
            {recipe.recipe.cuisineType[0]} | {recipe.recipe.cautions[0]} |{" "}
            {recipe.recipe.dietLabels[0]} | {recipe.recipe.dishType[0]} | serve:{" "}
            {recipe.recipe.yield}
          </p>
          <div className="ingridentbuttonDiv" onClick={showIngredients}>
            <span>INGREDIENTS</span>
            <img
              src={require("../../assets/arrow_downward_FILL0_wght400_GRAD0_opsz48.png")}
              alt="img"
            />
          </div>
        </div>
      </div>
      {ing && (
        <div className="recipeContent">
          {recipe.recipe.ingredients.map((ele) => {
            return (
              <div className="eachbox">
                <img src={ele.image} alt="img" className="eachBoxImg" />
                <p className="ingredientName">{ele.text}</p>
                <p>Category: {ele.foodCategory}</p>
                <p>Weight(in grams): {ele.weight}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Recipes;
