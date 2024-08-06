import React from "react";
import "./MyResume.css";
import MyResumeCard from "./MyResumeCard";
import MyWholeResume from "./MyWholeResume";
import MyExperience from "./MyExperience";
import MyGoals from "./MyGoals";
import MyHobbies from "./MyHobbies";
import MyIntro from "./MyIntro";

const MyResume = () => {
  // console.log(data);
  return (
    <div className=" mb-72">
       <div className="flex justify-center items-center lg:justify-end mx-20 mt-32">
        <button className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3">
          Download My Resume
        </button>
      </div>
      <div className="">
        <MyIntro />
      </div>
      <div className="mt-32">
        <MyResumeCard />
      </div>
      <div className="mt-32">
        <MyExperience />
      </div>
      <div className="mt-32">
        <MyGoals />
      </div>
      <div className="mt-32">
        <MyHobbies />
      </div>
{/* 
      <div>
        <MyWholeResume />
      </div> */}
    </div>
  );
};

export default MyResume;
