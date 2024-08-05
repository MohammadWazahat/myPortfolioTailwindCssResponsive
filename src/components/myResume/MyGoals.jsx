import React, { useState } from "react";

const MyGoals = () => {
  const [goals, setGoals] = useState([
    {
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Project Management",
    },
    {
      image:
        "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Innovation",
    },
    {
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Collaboration",
    },
    {
      image:
        "https://images.pexels.com/photos/268460/pexels-photo-268460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Quality and Efficiency",
    },
    {
      image:
        "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Customer Satisfaction",
    },
    {
      image:
        "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Career Advancement",
    },
  ]);
  console.log(goals);
  return (
    <div>
      <div className="flex justify-center items-center text-3xl font-normal text-orange-400 my-8 mb-24">
        My Goals
      </div>
      <div className="flex justify-center items-center">
        <div className=" grid grid-cols-3  gap-8 lg:w-4/5 ">
          {goals.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="flex flex-col gap-8 justify-center items-center 
       border border-gray-100  hover:border-green-400 shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 md:shadow-gray-400 pb-4 "
                >
                  <div className="">
                    <img className="w-80 h-48" src={item.image} alt="" />
                  </div>
                  <div className="text-2xl font-normal hover:text-green-500">
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyGoals;
