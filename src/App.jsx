// import AnimalCard from "./components/cardAnimal";
// import { animalsData } from "./data/animalData";
// import CardCreate from "./components/cardCreate";

// function App()
// {
//   const savedAnimals = localStorage.getItem("animalData");
//   // Check if savedAnimals is not null before accessing 'animals'
//   const animals = savedAnimals ? JSON.parse(savedAnimals).animals : [];

//   console.log("here is animals -> ", animals);

//   return (
//     <div className="App">
//       <div>
//         <CardCreate />
//       </div>

//       <div>
//         {animalsData.animals.map((animal, index) => (
//           <AnimalCard key={index} animal={animal} />
//         ))}
//         {/* <AnimalCard /> */}
//       </div>
//     </div>
//   );
// }

// export default App;

// ------------------------------------------------------------------------------------------


// import AnimalCard from "./components/cardAnimal";
// import CardCreate from "./components/cardCreate";
// import React, { useState, useEffect, useRef } from "react";

// import axios from "axios";


// function App()
// {

//   const [cards, setCards] = useState([]);

//   const getCards = async () =>
//   {
//     try
//     {
//       const response = await axios.get("http://localhost:3000/api/cards");
//       console.log("this is data from axios ->", response.data)
//       setCards(response.data);
//     } catch (error)
//     {
//       console.log("this is the error message ->", error.message);
//     }
//   };

//   useEffect(() =>
//   {
//     getCards();
//   }, []);

//   console.log("here is cards -> ", cards);

//   return (
//     <div className="App">
//       <div>
//         <CardCreate />
//       </div>

//       <div>
//         {cards.map((card, index) => (
//           <AnimalCard key={index} animal={card} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



// ------------------------------------------------------------------------------------------


