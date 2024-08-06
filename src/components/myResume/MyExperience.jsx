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
            className="m-4 pb-4 flex flex-col gap-4 justify-center items-center 
         border border-gray-100  hover:border-green-400 shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 md:shadow-gray-400 "
          >
            <div className="w-full">
              <img
                className="w-full h-72"
                src="https://images.pexels.com/photos/7035855/pexels-photo-7035855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="text-2xl font-normal text-green-500">
              Computer Operater{" "}
            </div>
            <span className="text-sm ml-2">( 1 year and 9 months )</span>
            <div>Sir M.U Teachers Training college , Etah.</div>
            <div className="">Handling All Computer based</div>
            <div>( online and offline ) official work </div>
          </div>
          <div
            className="m-4 pb-4 flex flex-col gap-4 justify-center items-center 
             border border-gray-100  hover:border-green-400 shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 md:shadow-gray-400 "
          >
            <div className="w-full">
              <img
                className="w-full h-72"
                src="https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="text-2xl font-normal text-green-500">
              Computer Science Lecturer
            </div>
            <span className="text-sm ml-2">( 1 year Approx. )</span>
            <div>SIR M.U COLLEGE OF PHARMACY , Etah.</div>
            <div className="">Training Students in Computer science</div>
            <div>( Basic + Advanced )</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
