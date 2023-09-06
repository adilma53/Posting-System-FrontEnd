import React, { useState, useEffect, useRef } from "react";
import { IconX } from "@tabler/icons-react";
import { IconPhotoPlus } from "@tabler/icons-react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
  const toggleDropdown = () => {
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
        <div class="absolute right-0  mt-1 w-44 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
          <ul>
            <li>
              <button class="hover:bg-gray-100 text-gray-700 w-full px-4 py-2 text-sm">
                Edit
              </button>
            </li>
            <li>
              {/* this is the part it should be for deleting */}
              <button class="hover:bg-gray-100 text-gray-700 w-full px-4 py-2 text-sm">
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
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
        className="text-2xl h-24 w-full bg-blue-500 text-white font-semibold  rounded-2xl hover:bg-blue-700"
        onClick={openModal}
      >
        Create
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div ref={dropdownRef} className="bg-white p-4 rounded w-1/2">
            {/* ---------------------- */}
            <div>
              <div className="h-10 border-b border-gray-300 p-6 flex items-center justify-between border-b-0">
                <span className="mx-auto ">Create Post</span>
                <button className="p-1 rounded-full hover:bg-gray-300">
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
            {/* ------------------------ */}
            {/* <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={closeModal}
            >
              Close Modal
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}

function PostBox() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  // --------------------------------------------------
  const [isPosting, setIsPosting] = useState(false);
  const [newCard, setNewCard] = useState({
    name: "",
    imageSrc: "",
    description: "",
  });
  const [updateJson, setupdateJson] = useState();
  // hashtags: ["#birds", "#vultures"],

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <button
        onClick={() => setIsPosting(!isPosting)}
        className="border-gray-300 hover:shadow-2xl  rounded-lg shadow-lg bg-white flex items-center justify-between w-full border "
      >
        <span className="text-base ml-10">What's on your mind?</span>
        <img
          className="object-cover m-5 justify-start rounded-full h-14 w-14 inline"
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </button>
      <div>
        {isPosting && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={() => setIsPosting(!isPosting)}
          >
            <div className="h-10 border-b border-gray-300 p-6 flex items-center justify-between border-b-0 ">
              <span className="mx-auto ">Create Post</span>
              <button className="p-1 rounded-full hover:bg-gray-300">
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
            <form onSubmit={handleSubmit} action="submit">
              <div>
                <input
                  placeholder="name"
                  value={newCard.name}
                  onChange={(e) =>
                    setNewCard({ ...newCard, name: e.target.value })
                  }
                  className="border p-2 w-full"
                  type="text"
                />
                <span> this is name: {newCard.name} </span>
                <input
                  placeholder="image link"
                  value={newCard.imageSrc}
                  onChange={(e) =>
                    setNewCard({ ...newCard, imageSrc: e.target.value })
                  }
                  className="border p-2 w-full"
                  type="text"
                />
                <span> this is name: {newCard.imageSrc} </span>
                <input
                  placeholder="description"
                  value={newCard.description}
                  onChange={(e) =>
                    setNewCard({ ...newCard, description: e.target.value })
                  }
                  className="border h-40 p-2 w-full"
                  type="text"
                />
                <span> this is name: {newCard.description} </span>
              </div>

              <div className="p-3 flex justify-between">
                <button className="p-1 rounded-full hover:bg-gray-300">
                  <IconX />
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

          // <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          //   <div className="bg-gray-100 p-4 rounded w-80">
          //     <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
          //     <input
          //       type="text"
          //       className="border p-2 w-full mb-2"
          //       placeholder="Input Field"
          //     />
          //     <button
          //       className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          //       onClick={() => setIsPosting(!isPosting)}
          //     >
          //       Close Modal
          //     </button>
          //   </div>
          // </div>
        )}
      </div>
    </>
  );
}

function CardCreate() {
  return (
    <div className="my-10">
      <Dropdown />
      <Modal />

      <PostBox />
    </div>
  );
}

export default CardCreate;

// ---------------------------------------------------------------------------------

// function PostBox() {
//   const [isCreatingPost, setIsCreatingPost] = useState(false);
//   const [postContent, setPostContent] = useState("");

//   const startCreatingPost = () => setIsCreatingPost(true);
//   const stopCreatingPost = () => setIsCreatingPost(false);
//   const handleInputChange = (e) => setPostContent(e.target.value);

//   const handlePost = () => {
//     console.log("Posting:", postContent);
//     setPostContent("");
//     setIsCreatingPost(false);
//   };

//   return (
//     <div
//       className={`${
//         isCreatingPost ? "border border-blue-500" : "hover:border-blue-500"
//       } p-4 rounded cursor-pointer`}
//       onClick={startCreatingPost}
//     >
//       {isCreatingPost ? (
//         <div>
//           <textarea
//             className="border p-2 w-full mb-2 resize-none"
//             placeholder="Create a post..."
//             onBlur={stopCreatingPost}
//             autoFocus
//             value={postContent}
//             onChange={handleInputChange}
//             rows={Math.max(2, Math.ceil(postContent.length / 40))}
//           />
//           <button
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             onClick={handlePost}
//           >
//             Post
//           </button>
//         </div>
//       ) : (
//         "What's on your mind?"
//       )}
//     </div>
//   );
// }

// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------

//   const [animalData, setAnimalData] = useState(initialAnimalData);
//   const [newCard, setNewCard] = useState({
//     name: "",
//     imageSrc: "",
//     description: "",
//     hashtags: "",
//   });
