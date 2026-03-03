import { useState } from "react";
import "/src/filterbar.css";

export function FilterBar() {
  const [continentChoice, setContinentChoice] = useState("");
  const [sorting, setSorting] = useState("");

  function resetStates() {
    setContinentChoice("");
    setSorting("");
  }

  return (
    <>
      <div className="selects">
        <select
          value={continentChoice}
          onChange={(e) => setContinentChoice(e.target.value)}
        >
          <option value="" disabled hidden>
            Choose continent
          </option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Antartica">Antartica</option>
        </select>
        <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
          <option value="" disabled hidden>
            Choose sort
          </option>
          <option value="increasing">increasing</option>
          <option value="decreasing">decreasing</option>
        </select>
        <button onClick={resetStates}> reset </button>
      </div>
    </>
  );
}
