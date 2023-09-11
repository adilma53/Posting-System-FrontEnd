import React, { useState, useEffect, useRef } from "react";

function Dropdown()
{
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() =>
  {
    function handleClickOutside(event)
    {
      // Do nothing if the clicked target is not within the menu
      if (!dropdownRef.current.contains(event.target))
      {
        setIsOpen(false);
      }
    }

    // Attach the event listener when the dropdown is open
    if (isOpen)
    {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Remove the event listener when the dropdown is closed
    else
    {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  });
  const toggleDropdown = () =>
  {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="ml-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-slate-300"
      >
        <img
          src="https://www.svgrepo.com/show/124304/three-dots.svg"
          alt="Like Icon"
          className=" h-5 w-5 inline"
        />
        <span></span>
      </button>

      {isOpen && (
        <div className="absolute right-0  mt-1 w-44 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
          <ul>
            <li>
              <button className="hover:bg-gray-100 text-gray-700 w-full px-4 py-2 text-sm">
                Edit
              </button>
            </li>
            <li>
              {/* this is the part it should be for deleting */}
              <button className="hover:bg-gray-100 text-gray-700 w-full px-4 py-2 text-sm">
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function cardAnimal({ animal })
{
  return (
    <div className=" mt-6 mx-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg border border-gray-300 hover:shadow-2xl">
      <img
        src={animal.image}
        alt={animal.title}
        className="h-48 w-full object-cover"
      />

      <div className="px-6 py-4">
        <div className="flex justify-between mb-2 text-xl font-bold">
          {animal.title}

          {/* +++++++++++++++++++++++++++++++++++++++++++ */}
          {/* here is my drop down logic */}

          <Dropdown />

          {/* +++++++++++++++++++++++++++++++++++++++++++ */}
        </div>
        <p className="text-base text-gray-700">{animal.description}</p>
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
