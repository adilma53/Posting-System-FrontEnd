import { useState, useEffect, useRef } from "react";
import { IconX } from "@tabler/icons-react";
import { IconPhotoPlus } from "@tabler/icons-react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      // Do nothing if the clicked target is not within the menu
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Attach the event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Remove the event listener when the dropdown is closed
    else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  // const handleOutsideClick = (e) => {
  //   if (e) {
  //     closeModal();
  //   }
  // };

  return (
    <>
      <button
        onClick={openModal}
        className="border-gray-300 hover:shadow-2xl  rounded-lg shadow-lg bg-white flex items-center justify-between w-full border "
      >
        <span className="text-base ml-10">What's on your mind?</span>
        <img
          className="object-cover m-5 justify-start rounded-full h-14 w-14 inline"
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div ref={dropdownRef} className="bg-white p-4 rounded w-1/2">
            {/* ---------------------- */}
            <div>
              <div className="h-10 border-b border-gray-300 p-6 flex items-center justify-between border-b-0">
                <span className="mx-auto ">Create Post</span>
                <button
                  onClick={closeModal}
                  className="p-1 rounded-full hover:bg-gray-300"
                >
                  <IconX />
                </button>
              </div>

              <div className="h-14 flex items-center ">
                <img
                  className="object-cover mx-4 justify-start rounded-full h-10 w-10 inline"
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />

                <div className="flex flex-col">
                  <span>Marry</span>
                  <button className="mt-1 rounded-sm border border-gray-300 px-1 bg-gray-100">
                    Public
                  </button>
                </div>
              </div>

              <form
              // onSubmit={handleSubmit} action="submit"
              >
                <div>
                  <input
                    placeholder="name"
                    // value={newCard.name}
                    // onChange={(e) =>
                    // setNewCard({ ...newCard, name: e.target.value })
                    // }
                    className="border p-2 w-full"
                    type="text"
                  />
                  {/* <span> this is name: {newCard.name} </span> */}
                  <input
                    placeholder="image link"
                    // value={newCard.imageSrc}
                    // onChange={(e) =>
                    // setNewCard({ ...newCard, imageSrc: e.target.value })
                    // }
                    className="border p-2 w-full"
                    type="text"
                  />
                  {/* <span> this is name: {newCard.imageSrc} </span> */}
                  <input
                    placeholder="description"
                    // value={newCard.description}
                    // onChange={(e) =>
                    // setNewCard({ ...newCard, description: e.target.value })
                    // }
                    className="border h-40 p-2 w-full"
                    type="text"
                  />
                  {/* <span> this is name: {newCard.description} </span> */}
                </div>

                <div className="p-3 flex justify-between">
                  <button className="p-1 rounded-full hover:bg-gray-300">
                    <IconPhotoPlus />
                  </button>
                  <button
                    type="submit"
                    className=" px-3 text-lg font-medium bg-blue-300 border  rounded-md hover:bg-gray-300"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CardCreate() {
  return (
    <div className="my-10">
      <Modal />
    </div>
  );
}

export default CardCreate;
