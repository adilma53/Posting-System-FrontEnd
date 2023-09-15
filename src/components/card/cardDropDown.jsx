import React, { useState, useEffect, useRef } from "react";

function dropDown(props)
{
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() =>
    {
        function handleClickOutside(event)
        {
            if (!dropdownRef.current.contains(event.target))
            {
                setIsOpen(false);
            }
        }

        if (isOpen)
        {
            document.addEventListener("mousedown", handleClickOutside);
        } else
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
                    className="h-5 w-5 inline"
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-1 w-44 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul>
                        <li>
                            <button className="hover:bg-gray-100 text-gray-700 w-full px-4 py-2 text-sm">
                                Edit
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(e) => props.handleDeleteCard(e, props.id)}
                                className="hover:bg-gray-100 text-gray-700 w-full px-4 py-2 text-sm"
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default dropDown;
