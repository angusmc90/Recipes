import React from "react";
import MealList from "./02MealList";
import Sorter from "./02Sorter";

function MealListContainer(props) {
  return (
    <div id="foodListContainer">
      <Sorter
        proteinSelection={props.proteinSelection}
        proteinSelected={props.proteinSelected}
        pickProtein={props.pickProtein}
      />
      <MealList
        proteinSelected={props.proteinSelected}
        recipes={props.recipes}
        seeMore={props.seeMore}
      />
    </div>
  );
}

export default MealListContainer;
