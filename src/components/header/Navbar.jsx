import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <section>
        <header>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-16 ">
            <div className=" flex justify-center items-center  text-3xl my-12  ">
              <span className="alphaColor">M</span>ohammad
              <span className="alphaColor ml-3"> W</span>azahat
            </div>
            <div className=" text-lg mb-12 lg:mt-14">
              <ul className="flex flex-col justify-center items-center gap-6 sm:flex-row ">
                <li className=" hover:text-green-300">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className=" hover:text-green-300">
                  <NavLink to="/myResume">My Resume</NavLink>
                </li>
                <li className=" hover:text-green-300">
                  <NavLink to="/mySkills">My Skills</NavLink>
                </li>
                <li className=" hover:text-green-300">
                  <NavLink to="/myProjects">My Projects</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <hr className="border hover:border-green-500 " />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;
