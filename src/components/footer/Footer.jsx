import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <section className="abc mt-24 ">
        <div className="flex justify-center items-center gap-8 m-2 p-2">
          <div>
            <FaLinkedin
              className="h-8 w-8 "
              onMouseOver={({ target }) => (target.style.color = "green")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </div>
          <div>
            <FaGithub
              className="h-8 w-8 "
              onMouseOver={({ target }) => (target.style.color = "green")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </div>
          <div>
            <SiGmail
              className="h-8 w-8 "
              onMouseOver={({ target }) => (target.style.color = "green")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </div>
        </div>
      </section>
      <section >
        <div>
          <hr className="border hover:border-green-500 " />
        </div>
        <div className="flex flex-col mt-8 mb-4 md:flex-row md:justify-center md:my-3">
          <div className="md:mx-1 flex justify-center my-2">
            © Copyright 2024 -
          </div>
          <div className="md:mx-1 flex justify-center my-2">
            Developed by Mohammad Wazahat Ali Rza.
          </div>
          <div className="md:mx-1 flex justify-center my-2">
            {" "}
            All right reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
