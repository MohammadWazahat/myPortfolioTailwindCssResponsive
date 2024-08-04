import React from "react";
import { FaHand } from "react-icons/fa6";

const MyForm = () => {
  return (
    <div>
      <div className="border-2 rounded-lg border-green-600 shadow-md hover:shadow-lg shadow-green-400 hover:shadow-green-300 flex flex-col justify-center items-center ">
        <div className="flex text-xl font-normal justify-center items-center w-full m-4 md:text-2xl lg:text-3xl ">
          Say Hello !!! <span className="ml-2 "><FaHand className="ml-4 h-12 w-12" /></span>
        </div>
        <form className="flex flex-col justify-center items-center w-full p-4 ">
          <input
            className="border rounded-md border-green-400 shadow-sm hover:shadow-md shadow-green-400 hover:shadow-green-200 w-full h-12 p-2 my-4"
            type="text"
            placeholder="Name"
            name="name"
          />
           <input
            className="border rounded-md border-green-400 shadow-sm hover:shadow-md shadow-green-400 hover:shadow-green-200 w-full h-12 p-2 my-4"
            type="text"
            placeholder="Name"
            name="name"
          />
           <input
            className="border rounded-md border-green-400 shadow-sm hover:shadow-md shadow-green-400 hover:shadow-green-200 w-full h-12 p-2 my-4"
            type="text"
            placeholder="Name"
            name="name"
          />
           <input
            className="border rounded-md border-green-400 shadow-sm hover:shadow-md shadow-green-400 hover:shadow-green-200 w-full h-32 p-2 my-4"
            type="text"
            placeholder="Name"
            name="name"
          />
          <button type="submit" className="border border-green-400 rounded-3xl w-full h-12 my-6 text-gray-900 font-bold btn1">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
