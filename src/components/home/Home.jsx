import React, { useEffect } from "react";
import "./Home.css";
import imgpic from "./PiyushGarg.png";
import MyTech from "./MyTech";
const Home = () => {
  // useEffect(()=>{
  //   var typed = new Typed("#element", {
  //     strings: [
  //       "Software Engineer",
  //       "Sofware Tester",
  //       "Web Designer",
  //       "Web Developer",
  //     ],
  //     typeSpeed: 50,
  //   });
  // }
  // )

  return (
    <div>
      <section>
        <div className=" flex flex-col-reverse gap-16 my-24 justify-center items-center lg:flex-row lg:mx-12">
          <div className=" basis-2/3 flex flex-col gap-6 mx-8  ">
            <div className=" text-green-300"> -- Hello World --</div>
            <div className="text-2xl font-normal">
              I am <span className=" text-green-300">M</span>ohammad
              <span className="text-green-300 ml-3">W</span>azahat
            </div>
            <div className="">
              <span id="element" className="text-green-300 text-xl">
                ABC
              </span>
            </div>
            <div className="">
              Hi there! My name is Mohammad Wazahat and I am a Computer Science
              Post Graduate currently pursuing MCA ( Master's of Computer
              Applications ) from Manipal university , Jaipur . I love all
              things about tech and coding, and currently i am working on my
              skill building
            </div>
            <div className=" flex flex-col justify-center items-center gap-8 mt-12 md:flex-row md:gap-16 lg:justify-start">
              <div className="border border-green-100 p-3 px-5 text-lg hover:text-green-500 hover:border-green-500 ">
                <button>My Resume</button>
              </div>
              <div className="border border-green-100 p-3 px-5 text-lg hover:text-green-500 hover:border-green-500 ">
                <button>My Github</button>
              </div>
            </div>
          </div>
          <div className="basis-1/3 h-72 w-72 lg:mb-24">
            <img src={imgpic} alt="Trulli" className="profileImage"></img>
          </div>
        </div>
      </section>
      <section>
        <MyTech />
      </section>
    </div>
  );
};

export default Home;
