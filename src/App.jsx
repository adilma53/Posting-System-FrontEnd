import AnimalCard from "./components/card/cardAnimal";
import PostNewCard from "./components/post/PostNewCard";
import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

function App() {
  const [isUpdated, setIsUpadted] = useState(false);
  const [cards, setCards] = useState([]);

  const getAndStoreData = async () => {
    try {
      const response = await axios.get(
        "https://posting-system-backend.onrender.com/api/cards/"
      );
      setCards(response.data);
      console.log("this respons ->", response.data);
      console.log("this cards ->", cards);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteCard = async (e, cardId) => {
    e.preventDefault();

    try {
      await axios.delete(
        `https://posting-system-backend.onrender.com/api/cards/${cardId}`
      );
      getAndStoreData();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAndStoreData();
  }, []);

  console.log("here is cards -> ", cards);

  return (
    <div className="">
      <div>
        <PostNewCard getAndStoreData={getAndStoreData} />
      </div>

      <div className="flex flex-col-reverse">
        {cards.map((card, index) => (
          <AnimalCard
            key={index}
            animal={card}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// ------------------------------------------------------------------------------------------
