import React from "react";
import Navbar from "../header/Navbar";
import "./Portfolio.css";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import MyResume from "../myResume/MyResume";
import MyProjects from "../myProjects/MyProjects";
import AboutMe from "../aboutMe/AboutMe";
import ContactMe from "../contactMe/ContactMe";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Portfolio = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/myResume",
      element: (
        <>
          <Navbar />
          <MyResume />
          <Footer />
        </>
      ),
    },
    {
      path: "/myProjects",
      element: (
        <>
          <Navbar />
          <MyProjects />
          <Footer />
        </>
      ),
    },
    {
      path: "/aboutMe",
      element: (
        <>
          <Navbar />
          <AboutMe />
          <Footer />
        </>
      ),
    },
    {
      path: "/contactMe",
      element: (
        <>
          <Navbar />
          <ContactMe />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <div className="flex flex-col bg-violet-900 text-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Portfolio;
