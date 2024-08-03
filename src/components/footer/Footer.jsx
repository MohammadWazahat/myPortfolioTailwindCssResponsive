import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="mt-24">
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
