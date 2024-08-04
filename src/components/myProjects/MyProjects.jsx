import React, { useState } from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";

const MyProjects = () => {
  const [projectNo, setProjectNo] = useState("one");
  console.log(projectNo);
  return (
    <div>
      <div>
        <div >
       <div className="flex gap-6 m-12">
       <button
            className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3"
            onClick={() => setProjectNo("one")}
          >
            Project one
          </button>
          <button
            className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3"
            onClick={() => setProjectNo("two")}
          >
            Project Two
          </button>
          <button
            className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3"
            onClick={() => setProjectNo("three")}
          >
            Project Three
          </button>
       </div>
          <div>
            <div>
              {projectNo == "one" ? (
                <div className="m-12">
                  <ProjectOne />
                </div>
              ) : projectNo == "two" ? (
                <div className="m-12">
                  <ProjectTwo />
                </div>
              ) : (
                <div className="m-12">
                  <ProjectThree />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
