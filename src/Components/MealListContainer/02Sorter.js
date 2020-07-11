import React from "react";

function Sorter(props) {
  const proteinList = props.proteinSelection.map((d, i) => {
    return (
      <option value={d} key={i}>
        {" "}
        {d}
      </option>
    );
  });

  return (
    <div id="filter">
      <div>What will we be cooking today?</div>
      Protein: &nbsp;
      <select
        id="proteinSelect"
        defaultValue={props.proteinSelected}
        onChange={props.pickProtein}
      >
        {proteinList}
      </select>
    </div>
  );
}

export default Sorter;

// {props.pickProtein(this.value)}
