import React from "react";

function RecipeCard(props) {
  const seeMealDesc = e => {
    props.seeMore(props.mealNum);
  };

  return (
    <div
      className={
        props.proteinSelected === "All" ||
        props.proteinSelected === props.protein
          ? "card show"
          : "card hide"
      }
    >
      <div className="card-image">
        <img src={props.pic} alt="food-pic" />
        <li className="button" onClick={seeMealDesc}>
          +
        </li>
      </div>
      <div className="card-content">
        <div className="card-title">{props.title}</div>
        {props.byline}
      </div>
    </div>
  );
}

export default RecipeCard;
