import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <section>
        <header>
          <div className="flex mx-20 h-24 ">
            <div className="basis-1/3 text-3xl my-auto">
              <span className="alphaColor">M</span>ohammad
              <span className="alphaColor"> W</span>azahat
            </div>
            <div className="basis-2/3 my-auto text-lg">
              <ul className="flex justify-end ">
                <li className="mx-3 hover:text-green-300">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="mx-3 hover:text-green-300">
                  <NavLink to="/myResume">My Resume</NavLink>
                </li>
                <li className="mx-3 hover:text-green-300">
                  <NavLink to="/myProjects">My Projects</NavLink>
                </li>
                <li className="mx-3 hover:text-green-300">
                  <NavLink to="/aboutMe">About Me</NavLink>
                </li>
                <li className="mx-3 hover:text-green-300">
                  <NavLink to="/contactMe">Contact Me</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <hr className="horizon border hover:border-green-500 mx-20 " />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;
