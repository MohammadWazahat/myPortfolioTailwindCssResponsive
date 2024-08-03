import React from "react";

const SingleTech = (x) => {
  console.log(x);
  return (
    <div>
      <div>
        <div className="border border-gray-100 hover:border-green-400 flex justify-center items-center p-2  shadow-md shadow-gray-500 h-24 md:h-32 md:shadow-gray-400 ">
          <div className="flex justify-center items-center font-medium text-green-200 hover:text-orange-300 md:text-xl ">
            {x.techName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTech;
