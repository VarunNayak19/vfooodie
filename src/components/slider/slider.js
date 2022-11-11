import React, { useState, useEffect } from "react";
import "./slider.css";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const Slider = ({ imageSrc, title, subtitle, flipped, key, index }) => {
  const navigate = useNavigate();
  const [indexInChild, setindexInChild] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const goToMaams = () => {
    navigate("/recipes");
    console.log(index);
    localStorage.setItem("indexForRecipes", index);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <div className="sliderText">
            <h1 className="sliderTitle">{title}</h1>
            <p className="sliderSubtitle">{subtitle}</p>
            <div className="recipeButton" onClick={goToMaams}>
              <h1>Recipe</h1>
            </div>
            {/* <div className="topButton" onClick={goToTop}>
              <h1>Top</h1>
              <i className="fa-sharp fa-solid fa-up"></i>
            </div> */}
          </div>
          <img src={imageSrc} alt="img" className="sliderImage" />
        </>
      );
    } else {
      return (
        <>
          <img src={imageSrc} alt="img" className="sliderImage" />
          <div className="sliderText">
            <h1 className="sliderTitle">{title}</h1>
            <p className="sliderSubtitle">{subtitle}</p>
            <div className="recipeButton" onClick={goToMaams}>
              <h1>Recipe</h1>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <div
      className={
        inView ? "sliderContainer sliderContainerZoom" : "sliderContainer"
      }
      ref={ref}
    >
      {renderContent()}
    </div>
  );
};

export default Slider;
