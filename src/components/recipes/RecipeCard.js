import "./RecipeCard.css";
import { v4 as uuidv4 } from "uuid";



export default function RecipeCard({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="recipeCard"
        onClick={() => window.open(recipe["recipe"]["url"])}
      >
        <img className="recipeCard__img" src={recipe["recipe"]["image"]} alt="recipeImgs" />
        <p className="recipeCard__name" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}
