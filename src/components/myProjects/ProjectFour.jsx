
import React, { useState } from "react";
import TechCard from "./TechCard";
import { Link } from "react-router-dom";

const ProjectFour = () => {
  const [techs, setTechs] = useState({
    Basic: ["HTML", "CSS", "JAVASCRIPT"],
    WebDesigning: ["Tailwind Css"],
    CSR: ["REACT"],
    StateManagement: ["REACT REDUCER", "CONTEXT API"],
    FormHandling: ["FORMIK", "YUP"],
    SSStateManage: ["TANSTACK QUERY"],
    BeTech: ["JSON SERVER"],
    DataBase: ["JSON FILE"],
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
              className="w-full h-72 lg:h-screen "
              src="https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
               alt=""
            />
            <div className="absolute inset-x-1/4 lg:inset-x-1/3 inset-y-1/4 text-orange-50 font-normal text-lg sm:text-2xl md:text-3xl lg:text-4xl bg-transparent">
              MY TODO APP
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-orange-400 mt-32">
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
          <div className="flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-orange-400 mt-32 ">
            BACKEND TECHNOLOGIES & TOOLS USED
          </div>
          <div>
            <TechCard techName="REST API" data={techs.BeTech} />
          </div>
          <div>
            <TechCard techName="DATABASE" data={techs.DataBase} />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-orange-400 mt-32">
          Deployed Website Link
        </div>
        <div className="flex justify-center items-center mt-12">
          <Link
            to="https://my-todo-app-fe.vercel.app/"
            className="text-gray-900 font-bold btn1 border border-green-400 rounded-3xl  w-1/2 sm:w-1/3 lg:w-1/6  h-12 my-6 flex justify-center items-center"
          >
            <button type="button" className=" ">
              Visit Website
            </button>
          </Link>
        </div>

        <div className="flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-orange-400 mt-32">
          Source Code
        </div>
        <div className="flex justify-center items-center mt-12">
          <Link
            to="https://github.com/MohammadWazahat/myTodoAppFE"
            className="text-gray-900 font-bold btn1 border border-green-400 rounded-2xl  w-1/2 sm:w-1/3 lg:w-1/6  h-12 my-6 flex justify-center items-center"
          >
            <button type="button" className=" ">
              Click Here
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectFour;
