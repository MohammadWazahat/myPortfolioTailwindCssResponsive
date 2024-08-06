import React, { useState } from "react";
import TechCard from "./TechCard";

const ProjectOne = () => {
  const [techs, setTechs] = useState({
    Basic: ["HTML", "CSS", "JAVASCRIPT"],
    WebDesigning: ["Tailwind Css", "FlowBite", "Bootstrap"],
    CSR: ["REACT"],
    StateManagement: ["REACT REDUCER", "CONTEXT API"],
    FormHandling: ["FORMIK", "YUP"],
    SSStateManage: ["TANSTACK QUERY"],
    BeTech: ["NODE.JS", "EXPRESS.JS", "MONGOOSE"],
    DataBase: ["MONGODB"],
    Auth: ["JWT AUTHENTICATION"],
    PaymentGateway: ["RAZORPAY"],
  });
  console.log(techs);
  return (
    <div>
      <section>
        <div>
          <div className="relative">
            <img
              className="w-full h-screen"
              src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div className="absolute inset-x-1/4 lg:inset-x-1/3 inset-y-1/4 text-gray-800 font-normal text-lg sm:text-2xl md:text-3xl lg:text-4xl bg-transparent">
              MY ECOMMERCE APP
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="flex justify-center items-center text-3xl font-normal text-orange-400 mt-32">
            FRONTEND TECHNOLOGIES USED
          </div>
          <div>
            <TechCard techName="BASIC" data={techs.Basic} />
          </div>
          <div>
            <TechCard techName="FRONTEND DESIGNING" data={techs.WebDesigning} />
          </div>
          <div>
            <TechCard techName="CLIENT SIDE RENDERING" data={techs.CSR} />
          </div>
          <div>
            <TechCard
              techName="CLIENT SIDE STATE MANAGEMENT"
              data={techs.StateManagement}
            />
          </div>
          <div>
            <TechCard
              techName="FORM HANDLING & VALIDATION"
              data={techs.FormHandling}
            />
          </div>
          <div>
            <TechCard
              techName="SERVER SIDE STATE MANAGEMENT"
              data={techs.SSStateManage}
            />
          </div>
          <div className="flex justify-center items-center text-3xl font-normal text-orange-400 mt-32 ">
            BACKEND TECHNOLOGIES & TOOLS USED
          </div>
          <div>
            <TechCard techName="REST API" data={techs.BeTech} />
          </div>
          <div>
            <TechCard techName="DATABASE" data={techs.DataBase} />
          </div>
          <div>
            <TechCard
              techName="AUTHENTICATON & AUTHORIZATION"
              data={techs.Auth}
            />
          </div>
          <div>
            <TechCard techName="PAYMENT GATEWAY" data={techs.PaymentGateway} />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center text-3xl font-normal text-orange-400 mt-32">
          Deployed Website Link
        </div>
        <div className="flex justify-center items-center mt-12">
          <button
            type="button"
            className="border border-green-400 rounded-3xl w-1/6 h-12 my-6 text-gray-900 font-bold btn1"
          >
            Visit Website
          </button>
        </div>

        <div className="flex justify-center items-center text-3xl font-normal text-orange-400 mt-32">
          Source Code
        </div>
        <div className="flex justify-center items-center mt-12">
          <button
            type="button"
            className="border border-green-400 rounded-xl w-1/6 h-12 my-6 text-gray-900 font-bold bg-green-500"
          >
            Click Here
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectOne;
