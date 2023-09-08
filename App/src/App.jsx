import AnimalCard from "./components/cardAnimal";
import { animalsData } from "./data/animalData";
import CardCreate from "./components/cardCreate";

function App() {
  return (
    <div className="App">
      <div>
        <CardCreate />
      </div>

      <div>
        {animalsData.animals.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
        {/* <AnimalCard /> */}
      </div>
    </div>
  );
}

export default App;
