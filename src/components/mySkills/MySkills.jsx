import React from "react";
import data from "../../dataFiles/myTech.json";

const MySkills = () => {
  console.log(data.allTechs[0].logo);
  return (
    <div>
      <div className=" text-3xl m-2 flex justify-center items-center my-24 font-normal hover:text-orange-500">
        My Skills
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 mx-8 md:grid-cols-2 lg:grid-cols-3">
          {data.allTechs.map((item, index) => {
            return (
              <div key={index}>
                <div className="text-xl border border-gray-100 rounded-lg hover:border-green-400 flex justify-center items-center p-2  shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 h-32 md:shadow-gray-400  ">
                  <div>
                    <img src={item.logo} alt="" className="h-16 w-16 mr-4" />
                  </div>
                  {item.techName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <hr className="mt-32 border hover:border-green-500 " />
      </div>
      <div className="mt-32 text-3xl m-2 flex justify-center items-center my-24 font-normal hover:text-orange-500">
        Skills I am Working On
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 mx-8 md:grid-cols-2 lg:grid-cols-3 ">
          {data.futureTechs.map((item, index) => {
            return (
              <div key={index}>
                <div className="text-xl border border-gray-100 rounded-lg hover:border-green-400 flex justify-center items-center p-2  shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 h-32 md:shadow-gray-400  ">
                  <div>
                    <img src={item.logo} alt="" className="h-16 w-16 mr-4" />
                  </div>
                  {item.techName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
