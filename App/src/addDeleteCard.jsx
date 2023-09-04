// import React, { useState } from "react";

// import { initialAnimalData } from "./animalData";

// function addDelete() {
//   const [animalData, setAnimalData] = useState(initialAnimalData);
//   const [newCard, setNewCard] = useState({
//     name: "",
//     imageSrc: "",
//     description: "",
//     hashtags: "",
//   });

//   const handleCreateCard = () => {
//     if (
//       newCard.name &&
//       newCard.imageSrc &&
//       newCard.description &&
//       newCard.hashtags
//     ) {
//       const updatedAnimalData = {
//         ...animalData,
//         animals: [...animalData.animals, newCard],
//       };
//       setAnimalData(updatedAnimalData);
//       setNewCard({
//         name: "",
//         imageSrc: "",
//         description: "",
//         hashtags: "",
//       });
//     }
//   };

//   const handleDeleteCard = (index) => {
//     const updatedAnimalData = { ...animalData };
//     updatedAnimalData.animals.splice(index, 1);
//     setAnimalData(updatedAnimalData);
//   };

//   return (
//     <div className="App">
//       <h1>Animal Cards</h1>
//       <div>
//         <h2>Create New Card</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newCard.name}
//           onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={newCard.imageSrc}
//           onChange={(e) => setNewCard({ ...newCard, imageSrc: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newCard.description}
//           onChange={(e) =>
//             setNewCard({ ...newCard, description: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Hashtags"
//           value={newCard.hashtags}
//           onChange={(e) => setNewCard({ ...newCard, hashtags: e.target.value })}
//         />
//         <button onClick={handleCreateCard}>Create</button>
//       </div>
//       <div>
//         <h2>Animal Cards</h2>
//         {animalData.animals.map((animal, index) => (
//           <div key={index} className="animal-card">
//             <img src={animal.imageSrc} alt={animal.name} />
//             <h3>{animal.name}</h3>
//             <p>{animal.description}</p>
//             <div className="hashtags">{animal.hashtags.join(" ")}</div>
//             <button onClick={() => handleDeleteCard(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default addDelete;
