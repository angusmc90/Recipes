import React from "react";
import RecipeCard from "./03RecipeCard";

function MealList(props) {
  const cardList = props.recipes;

  const cards = cardList.map((d, i) => {
    return (
      <RecipeCard
        key={i}
        mealNum={i}
        proteinSelected={props.proteinSelected}
        protein={d.protein}
        title={d.title}
        pic={d.pic}
        byline={d.byline}
        desc={d.desc}
        seeMore={props.seeMore}
        cardClass="card"
      />
    );
  });

  return <div id="foodList">{cards}</div>;
}

export default MealList;
