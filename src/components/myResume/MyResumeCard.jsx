import React from "react";
import MyEducationCard from "./MyEducationCard";
import data from "../../dataFiles/myTech.json";

const MyResumeCard = () => {
  console.log(data.myEducation);
  return (
    <div>
      <div className=" mt-24 flex flex-col justify-center items-center ">
        <div className="text-3xl font-normal text-orange-400 my-12">
          My Education
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {data.myEducation.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <MyEducationCard {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyResumeCard;
