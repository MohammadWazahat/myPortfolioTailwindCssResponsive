import React from "react";

const MyExperience = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <div className="text-3xl font-normal text-orange-400 my-8 mb-24">
          My Experience
        </div>
        <div className="flex flex-col gap-16">
          <div
            className=" p-4 flex flex-col gap-8 justify-center items-center 
         border border-gray-100 rounded-lg hover:border-green-400 shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 md:shadow-gray-400 "
          >
            <div className="text-2xl font-normal text-green-500">
              Computer Operater{" "}
              <span className="text-sm ml-4">( 1 year and 9 months )</span>
            </div>
            <div>Sir M.U Teachers Training college , Etah.</div>
            <div>
              Handling All Computer based ( online and offline ) official work{" "}
            </div>
          </div>
          <div
            className=" p-4 flex flex-col gap-8 justify-center items-center 
         border border-gray-100 rounded-lg hover:border-green-400 shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 md:shadow-gray-400 "
          >
            <div className="text-2xl font-normal text-green-500">
              Computer Science Lecturer
              <span className="text-sm ml-4">( 1 year Approx. )</span>
            </div>
            <div>SIR M.U COLLEGE OF PHARMACY , Etah.</div>
            <div>
             Training Students in  Computer science ( Basic + Advanced ) </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyExperience;