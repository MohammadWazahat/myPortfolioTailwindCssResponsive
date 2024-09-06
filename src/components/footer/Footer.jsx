import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <section className="abc mt-24 ">
        <div className="flex justify-center items-center gap-12 m-2 p-2">
          <div>
            <Link to="https://www.linkedin.com/in/mohammadwazahatrza092">
              <FaLinkedin
                className="h-6 w-6 "
                onMouseOver={({ target }) => (target.style.color = "green")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </Link>
          </div>
          <div>
            <Link to="https://github.com/MohammadWazahat">
              <FaGithub
                className="h-6 w-6 "
                onMouseOver={({ target }) => (target.style.color = "green")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </Link>
          </div>
          <div>
            <Link to="https://mail.google.com/">
              <SiGmail
                className="h-6 w-6 "
                onMouseOver={({ target }) => (target.style.color = "green")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div>
          <hr className="border hover:border-green-500 " />
        </div>
        <div className="flex flex-col mt-8 mb-4 md:flex-row md:justify-center md:my-3">
          <div className="md:mx-2 flex justify-center my-2">
            © Copyright 2024
          </div>

          <div className="md:mx-2 flex justify-center my-2">
            <span className="mx-2">|</span>
            Developed by Mohammad Wazahat Ali Rza.
            <span className="mx-2 ">|</span>
          </div>

          <div className="md:mx-2 flex justify-center my-2">
            All right reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
