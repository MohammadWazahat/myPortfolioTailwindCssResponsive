import React from "react";

const TechCard = (x) => {
  console.log(x.techName);
  console.log(x.data);
  return (
    <div>
      <div className="mt-20 flex flex-col gap-8 justify-center items-center p-4">
        <div className="text-2xl hover:text-orange-400 text-green-400 font-light ">{x.techName}</div>
        <div className="flex gap-8 ">
          {x.data.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex justify-center items-center  p-3 border hover:border-green-400 hover:shadow-sm hover:shadow-gray-200 h-16 px-12 text-xl font-normal hover:text-green-500 ">
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechCard;
