import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:my-3">
          <div className="sm:mx-1 flex justify-center my-2">© Copyright 2024 -</div>
          <div className="sm:mx-1 flex justify-center my-2">Developed by Mohammad Wazahat Ali Rza.</div>
          <div className="sm:mx-1 flex justify-center my-2"> All right reserved.</div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
