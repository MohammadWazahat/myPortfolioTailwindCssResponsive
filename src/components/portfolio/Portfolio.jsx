import React from "react";
import Navbar from "../header/Navbar";
import "./Portfolio.css";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import MyResume from "../myResume/MyResume";
import MyProjects from "../myProjects/MyProjects";
import ContactMe from "../contactMe/ContactMe";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MySkills from "../mySkills/MySkills";

const Portfolio = () => {
  const router = createBrowserRouter([
    {
      path: "/",
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
      path: "//mySkills",
      element: (
        <>
          <Navbar />
          <MySkills/>
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
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Portfolio;
