import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Recipes from "./views/recipes/recipes";
import Landing from "./views/landing/landing";
function App() {
  const [recipeData, setrecipeData] = useState([]);
  const options = {
    method: "GET",
    url: "https://edamam-recipe-search.p.rapidapi.com/search",
    params: { q: "chicken" },
    headers: {
      "X-RapidAPI-Key": "842bc111f4mshbb3800ae5e66b65p1c7e57jsn118d0d19a7bb",
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.hits);
        setrecipeData(response.data.hits);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(recipeData);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing recipeData={recipeData} />} />
        <Route path="/recipes" element={<Recipes recipeData={recipeData} />} />
      </Routes>
    </div>
  );
}

export default App;
