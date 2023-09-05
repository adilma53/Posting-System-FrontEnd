import React, { useState, useEffect, useRef } from "react";

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
// function Modal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   // const handleOutsideClick = (e) => {
//   //   if (e) {
//   //     closeModal();
//   //   }
//   // };

//   return (
//     <>
//       <button
//         className="text-2xl h-24 w-full bg-blue-500 text-white font-semibold  rounded-2xl hover:bg-blue-700"
//         onClick={openModal}
//       >
//         Create
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
//           onClick={() => closeModal()}
//         >
//           <div className="bg-white p-4 rounded w-80">
//             <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
//             <input
//               type="text"
//               className="border p-2 w-full mb-2"
//               placeholder="Input Field"
//             />
//             <button
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//               onClick={closeModal}
//             >
//               Close Modal
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// ---------------------------------------------------------------------------------

function PostBox() {
  const [isPosting, setIsPosting] = useState(false);

  return (
    <div className="">
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

      {isPosting && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded w-80">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <input
              type="text"
              className="border p-2 w-full mb-2"
              placeholder="Input Field"
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setIsPosting(!isPosting)}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CardCreate() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="my-10">
      <PostBox />
    </div>
  );
}

export default CardCreate;

//   const [animalData, setAnimalData] = useState(initialAnimalData);
//   const [newCard, setNewCard] = useState({
//     name: "",
//     imageSrc: "",
//     description: "",
//     hashtags: "",
//   });
