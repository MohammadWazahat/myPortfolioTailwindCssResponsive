import React, { useState } from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";

const MyProjects = () => {
  const [projectNo, setProjectNo] = useState("one");
  console.log(projectNo);
  return (
    <div>
      <div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-12">
            <button
              className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3"
              onClick={() => setProjectNo("one")}
            >
              Project Ecommerce App
            </button>
            <button
              className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3"
              onClick={() => setProjectNo("two")}
            >
              Project Todo App
            </button>
            <button
              className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3"
              onClick={() => setProjectNo("three")}
            >
              Project Social Media App
            </button>
            <button
              className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3"
              onClick={() => setProjectNo("four")}
            >
              Project Four
            </button>
          </div>
          <div>
            <div>
              {projectNo == "one" ? (
                <div className="my-12">
                  <ProjectOne />
                </div>
              ) : projectNo == "two" ? (
                <div className="my-12">
                  <ProjectFour />
                </div>
              ) : projectNo == "four" ? (
                <div className="my-12">
                  <ProjectThree />
                </div>
              ) : (
                <div className="my-12">
                  <ProjectTwo />
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
