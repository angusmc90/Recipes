import React from "react";
// do i need to use usestate here

function DescCard(props) {
  const activeMeal = props.mealSelected;
  const recipes = props.recipes;

  return (
    <div className="showOverlay">
      <div id="descCard">
        <div className="card-image-lg">
          <img src={recipes[0].pic} alt="shutup" />
          <span className="card-title">{recipes[0].title}</span>
        </div>
        <div className="card-content">{recipes[0].desc}</div>
        <div className="cardToggle">
          <a href="#">Prev</a>
          <a href="#">Next</a>
        </div>
      </div>
    </div>
  );
}

export default DescCard;
