import React, { useState } from "react";

const MyHobbies = () => {
  const [hobbies, setHobbies] = useState([
    {
      image: "https://images.pexels.com/photos/290660/pexels-photo-290660.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Music",
    },
    {
      image: "https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Movies & Web Series",
    },
    {
      image: "https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: " Art & Painting",
    },
  ]);
  console.log(hobbies)
  return (
    <div>
      <div className="flex justify-center items-center text-3xl font-normal text-orange-400 my-8 mb-24">
        My Hobbies
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center m-4 gap-6 ">
{
  hobbies.map((item,index)=>{
    return<div key={index} >
      <div><div
          className="flex flex-col gap-8 justify-center items-center 
         border border-gray-100  hover:border-green-400 shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 md:shadow-gray-400 pb-4 "
        >
          <div className="">
            <img
              className="w-80 h-48"
              src={item.image}
              alt=""
            />
          </div>
          <div className="text-2xl font-normal hover:text-green-500">{item.title}</div>
        </div></div>
    </div>
  })
}
</div>
      {/* <div className="flex justify-center items-center m-4 gap-6 ">
        

        <div
          className="flex flex-col gap-8 justify-center items-center 
         border border-gray-100  hover:border-green-400 shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 md:shadow-gray-400 pb-4 "
        >
          <div className="">
            <img
              className="w-80 h-48"
              src="https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <div className="text-2xl font-normal hover:text-green-500">
            {" "}
            Movies & Web Series
          </div>
        </div>

        <div
          className="flex flex-col gap-8 justify-center items-center 
         border border-gray-100  hover:border-green-400 shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 md:shadow-gray-400 pb-4 "
        >
          <div className="">
            <img
              className="w-80 h-48"
              src="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <div className="text-2xl font-normal hover:text-green-500">
            {" "}
            Art & Painting
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MyHobbies;
