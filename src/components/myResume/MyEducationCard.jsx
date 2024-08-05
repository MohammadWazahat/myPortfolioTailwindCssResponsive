import React from "react";

const MyEducationCard = (x) => {
    console.log(x)
  return (
    <div>
      <div className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3 flex flex-col gap-6 ">
        <div className="">
            <img className="w-full h-36" src={x.image} alt="" />
        </div>
        <div className="text-xl font-normal text-green-500">{x.courseName}</div>
        <div className="">{x.college}</div>
        {/* <div className="">{x.year}</div> */}
      </div>
    </div>
  );
};

export default MyEducationCard;
