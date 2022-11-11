import React from "react";
import "./landing.css";
import background from "../../assets/back.jpg";
import Main from "../../components/main/main";
import Slider from "../../components/slider/slider";

const Landing = ({ recipeData }) => {
  return (
    <div>
      <Main imageSrc={background} />
      {recipeData.map((ele, i) => {
        return (
          <Slider
            index={i}
            imageSrc={ele.recipe.image}
            title={ele.recipe.label}
            subtitle={ele.recipe.source}
            flipped={i % 2 === 0 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Landing;
