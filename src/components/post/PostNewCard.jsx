import { useState, useEffect, useRef } from "react";
import { IconX } from "@tabler/icons-react";
import { IconPhotoPlus } from "@tabler/icons-react";
import axios from "axios";

function PostNewCard({ getAndStoreData }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // ---------------------------------------

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.title && formData.description && formData.image) {
        await axios.post(
          "https://posting-system-backend.onrender.com/api/cards/",
          formData
        );
        closeModal();
        getAndStoreData();
      }
      // else
      // {
      //   const emptyForm = && || ?
      //   console.log(`fill ${emptyForm} please.`)
      // }

      // Handle success or redirect as needed
    } catch (error) {
      console.log("->", error.message);
    }

    setFormData({
      title: "",
      description: "",
      image: "",
    });
  };
  // ---------------------------------------------------

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
    <div className="my-10">
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
            <div ref={dropdownRef} className="bg-white p-4 rounded h-auto">
              {/* ---------------------- */}
              <div>
                <div className="h-10 border-gray-300 p-6 flex items-center justify-between border-b-0">
                  <span className="text-xl mx-auto">Create Post</span>
                  <button
                    onClick={closeModal}
                    className="p-1 rounded-full hover:bg-gray-300"
                  >
                    <IconX />
                  </button>
                </div>

                <div className="mb-2 h-14 flex items-center ">
                  <img
                    className="object-cover mx-4 justify-start rounded-full h-10 w-10 inline"
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />

                  <div className="flex flex-col">
                    <span>Marry</span>
                    <button className="mt-1 rounded-md border border-gray-300 px-1 bg-gray-100">
                      Public
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} action="submit">
                  <div>
                    <input
                      name="title"
                      placeholder="Title"
                      value={formData.title}
                      onChange={handleChange}
                      // onChange={(e) =>
                      // setNewCard({ ...newCard, name: e.target.value })
                      // }
                      className="my-1 rounded-md border p-2 w-full"
                      type="text"
                    />
                    {/* <span> this is title: {formData.title} </span> */}
                    <input
                      name="image"
                      placeholder="Image Link"
                      value={formData.image}
                      onChange={handleChange}
                      // value={newCard.imageSrc}
                      // onChange={(e) =>
                      // setNewCard({ ...newCard, imageSrc: e.target.value })
                      // }
                      className="my-1 rounded-md border p-2 w-full"
                      type="text"
                    />
                    {/* <span> this is name: {newCard.imageSrc} </span> */}
                    <input
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleChange}
                      // value={newCard.description}
                      // onChange={(e) =>
                      // setNewCard({ ...newCard, description: e.target.value })
                      // }
                      className="my-1 rounded-md border h-40 p-2 w-full"
                      type="text"
                    />
                    {/* <span> this is name: {newCard.description} </span> */}
                  </div>

                  <div className="py-2 flex justify-between">
                    <button className="w-9 rounded-full hover:bg-gray-300">
                      <IconPhotoPlus className="w-9" />
                    </button>
                    <button
                      type="submit"
                      className="py-1 px-6 text-xl  bg-blue-400 border  rounded-md hover:bg-gray-300"
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
    </div>
  );
}

export default PostNewCard;
