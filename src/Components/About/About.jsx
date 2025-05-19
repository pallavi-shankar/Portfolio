import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Front_End
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I have worked with HTML, CSS, and JavaScript to create responsive and interactive web pages. 
                These technologies helped me build clean user interfaces and enhance user experience in various projects.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Back-End
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I have experience using PHP, JSP, Servlets, and MySQL to develop dynamic web applications. 
                I’ve handled server-side logic and database operations to ensure smooth functionality and data management.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                 Other Tools
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I have worked with Spring Boot for building Java-based web applications, which helped streamline the development of back-end APIs and server-side logic. 
                I’ve also used XAMPP as a local server environment to test and manage PHP and MySQL-based projects efficiently.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
