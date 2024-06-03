import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <section>
        <header>
          <div className="flex flex-col py-10 mx-20  sm:flex-row sm:py-3 ">
            <div className="py-5 sm:basis-1/3 text-3xl sm:my-auto">
              <span className="alphaColor">M</span>ohammad
              <span className="alphaColor"> W</span>azahat
            </div>
            <div className="py-5 sm:basis-2/3 sm:my-auto text-lg ">
              <ul className="flex flex-col mx-24 sm:mx-10 sm:flex-row sm:justify-end ">
                <li className="my-2 sm:mx-3 hover:text-green-300">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="my-2 sm:mx-3 hover:text-green-300">
                  <NavLink to="/myResume">My Resume</NavLink>
                </li>
                <li className="my-2 sm:mx-3 hover:text-green-300">
                  <NavLink to="/myProjects">My Projects</NavLink>
                </li>
                <li className="my-2 sm:mx-3 hover:text-green-300">
                  <NavLink to="/aboutMe">About Me</NavLink>
                </li>
                <li className="my-2 sm:mx-3 hover:text-green-300">
                  <NavLink to="/contactMe">Contact Me</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <hr className="border hover:border-green-500 mx-5 sm:mx-20 " />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;
