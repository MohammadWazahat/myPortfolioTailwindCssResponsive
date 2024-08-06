import React from "react";

const SingleTech = (x) => {
  // console.log(x);
  return (
    <div>
      <div>
      <div className="text-xl border border-gray-100 rounded-lg hover:border-green-400 flex justify-center items-center p-2  shadow-md shadow-gray-500 hover:shadow-green-400 hover:text-orange-300 h-32 md:shadow-gray-400  ">
                  <div>
                    <img src={x.logo} alt="" className="h-16 w-16 mr-4" />
                  </div>
                  {x.techName}
                </div>
      </div>
    </div>
  );
};

export default SingleTech;
