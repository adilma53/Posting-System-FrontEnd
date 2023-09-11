import AnimalCard from "./components/cardAnimal";
import PostNewCard from "./components/PostNewCard";
import React, { useState, useEffect, useRef } from "react";

import axios from "axios";


function App()
{
    const [isUpdated, setIsUpadted] = useState(false);
    const [cards, setCards] = useState([]);

    const getAndStoreData = async () =>
    {
        try
        {
            const response = await axios.get("http://localhost:3000/api/cards");
            setCards(response.data);
        }
        catch (error)
        {
            console.log(error.message);
        }
    };

    useEffect(() =>
    {
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
                    <AnimalCard key={index} animal={card} />
                ))}
            </div>
        </div>
    );
}

export default App;



// ------------------------------------------------------------------------------------------


