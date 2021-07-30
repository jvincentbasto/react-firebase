import { useState } from "react";
import "./RecipeCards.css";
import RecipeCard from "./RecipeCard";



export default function RecipeCards() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);



  const YOUR_APP_ID = `81b1ddd8`;
  const YOUR_APP_KEY = "c50dfc2c0cc9c2dd25697aacea65e9e5";
  // const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  // https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=81b1ddd8&app_key=c50dfc2c0cc9c2dd25697aacea65e9e5


  const getRecipeInfo = async () => {
    var response = await fetch(url);
    var result = await response.json();

    setrecipes(await result.hits);
    console.log(await result.hits);
  };



  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };



  return (
    <div className="recipe">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="recipe__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="recipe__submit" type="submit" value="Search" />
      </form>



      <div className="recipe__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeCard recipe={recipe} />;
          })}
      </div>
    </div>
  );
}
