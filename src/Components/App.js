import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MealListContainer from "./MealListContainer/01MealListContainer";
import Footer from "./Footer";
import "../styles.css";

export default function App() {
  // THE LIST OF RECIPES
  const [recipes, setRecipes] = useState([
    {
      title: "Food Title",
      pic:
        "https://media.blueapron.com/recipes/23473/square_newsletter_images/1582730159-33-0072-3030/0330_2PV3_Coconut-Curry-Noodles_096_SQ_Web_hi_res.jpg",
      byline: "with Items",
      protein: "Protein",
      desc:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    }
  ]);

  // THE LIST OF PROTEINS
  const [proteinSelection, setPorteinSelection] = useState([
    "All",
    "Pork",
    "Beef",
    "Lamb",
    "Shellfish",
    "Fish",
    "Poultry",
    "Vegetarian"
  ]);

  // CALL THE LIST OF RECIPES FROM GOOGLE DOCS
  useEffect(() => {
    let url =
      "https://spreadsheets.google.com/feeds/list/1mh_aR9nCpHdZEe6_gFaVmbK0K7z1tOCXuctiBIloxjY/1/public/values?alt=json";

    fetch(url)
      .then(res => res.json())
      .then(data => formatData(data));

    function formatData(data) {
      //Add all the recipes onjects to the recipe array
      let recipeArr = [];
      for (let i = 0; i < data.feed.entry.length; i += 1) {
        let recipeNum = {
          title: data.feed.entry[i].title.$t,
          pic: data.feed.entry[i].gsx$img.$t,
          byline: data.feed.entry[i].gsx$byline.$t,
          desc: data.feed.entry[i].gsx$description.$t,
          protein: data.feed.entry[i].gsx$protein.$t
        };
        recipeArr.push(recipeNum);
      }
      setRecipes(recipeArr);

      //Add all the proteins to to protein array/selection list
      let proteinsArr = ["All"];
      for (let i = 0; i < data.feed.entry.length; i += 1) {
        if (proteinsArr.includes(data.feed.entry[i].gsx$protein.$t)) {
          continue;
        } else {
          proteinsArr.push(data.feed.entry[i].gsx$protein.$t);
        }
      }
      proteinsArr.sort();
      setPorteinSelection(proteinsArr);
    }
  }, []);

  // PROTEIN PICKED FROM DROP-DOWN
  const [proteinSelected, setProteinSelected] = useState("All");
  const pickProtein = e => {
    setProteinSelected(e.target.value);
  };

  // FOR CLICKING ON THE SEE MORE BUTTON
  const [mealSelected, setMealSelected] = useState(null);

  const seeMore = e => {
    setMealSelected(e);
    console.log(mealSelected);
  };

  return (
    <div className="App">
      <Header />
      <div id="headerPad" />
      <Hero />
      <MealListContainer
        seeMore={seeMore}
        recipes={recipes}
        proteinSelection={proteinSelection}
        proteinSelected={proteinSelected}
        pickProetin={pickProtein}
      />
      <Footer />
    </div>
  );
}
