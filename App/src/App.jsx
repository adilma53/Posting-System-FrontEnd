import React from "react";
import AnimalCard from "./components/cardAnimal"; // Import the AnimalCard component

import { initialAnimalData } from "./animalData";

import CardCreate from "./components/cardCreate";

function App() {
  return (
    <div className="App">
      {/* <div>
        <button className="w-60 bg-red-500"> hello </button>
      </div> */}

      <div>
        <CardCreate />
      </div>

      <div>
        {initialAnimalData.animals.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default App;
