import React from "react";
import "./MyResume.css";
import MyResumeCard from "./MyResumeCard";
import MyWholeResume from "./MyWholeResume";
import MyExperience from "./MyExperience";
import MyGoals from "./MyGoals";

const MyResume = () => {
  // console.log(data);
  return (
    <div className="py-16">
      <div className="flex justify-center items-center ">
        <div className="mt-12 w-full m-4 md:mx-8 lg:w-3/5">
          <div className="flex flex-col justify-center items-center ">
            <div className="text-3xl font-normal text-orange-400 my-8">
              What I'm Looking for
            </div>
            <div className="text-xl font-light ">
              I am Computer Science Post Graduate seeking to find the
              opportunity to work in a challenging environment so that it
              encourages me to improve and learn necessary / new skills for the
              advancement of the company and myself in the software engineering
              industry.
            </div>
          </div>
        </div>
      </div>
      <div>
        <MyResumeCard />
      </div>
      <div className="mt-32">
        <MyExperience/>
      </div>
      <div className="mt-32">
        <MyGoals/>
      </div>

      <div className="flex justify-end mx-20 mt-32">
        <button className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3">
          Download My Resume
        </button>
      </div>
      <div>
        <MyWholeResume />
      </div>
     
    </div>
  );
};

export default MyResume;
