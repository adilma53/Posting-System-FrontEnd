import React, { useState, useEffect, useRef } from "react";

import DropDown from './cardDropDown'



function cardAnimal({ animal, handleDeleteCard })
{
  const { image, title, description, _id } = animal;

  return (
    <div className="mt-5 overflow-hidden rounded-lg bg-white shadow-lg border border-gray-300 hover:shadow-2xl">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="px-6 py-4">
        <div className="flex justify-between mb-2 text-xl font-bold">
          {title}

          {/* +++++++++++++++++++++++++++++++++++++++++++ */}
          {/* here is my drop-down logic */}
          <DropDown id={_id} handleDeleteCard={handleDeleteCard} />
          {/* +++++++++++++++++++++++++++++++++++++++++++ */}
        </div>
        <p className="text-base text-gray-700">{description}</p>
      </div>

      <div className="px-6 py-4 flex justify-end">
        <div>
          <button className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-slate-300">
            <img
              src="https://www.svgrepo.com/show/303201/facebook-like-logo.svg"
              alt="Like Icon"
              className="mr-2 h-4 w-4 inline"
            />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
  );
}


export default cardAnimal;
