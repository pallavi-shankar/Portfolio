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
            {/* Front-End */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Front-End
                </h1>
                <ul className="text-sm md:text-md leading-tight list-disc list-inside ml-4">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React.js, Tailwind CSS</li>
                  <li>Built responsive and interactive web pages</li>
                  <li>Created clean UI and enhanced user experience</li>
                </ul>
              </span>
            </div>

            {/* Back-End */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Back-End
                </h1>
                <ul className="text-sm md:text-md leading-tight list-disc list-inside ml-4">
                  <li>Node.js, Express.js</li>
                  <li>MongoDB, Supabase</li>
                  <li>Developed server-side logic and database operations</li>
                  <li>Handled real-time data and user management</li>
                </ul>
              </span>
            </div>

            {/* Other Tools */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Other Tools
                </h1>
                <ul className="text-sm md:text-md leading-tight list-disc list-inside ml-4">
                  <li>Supabase Auth for authentication</li>
                  <li>Git & GitHub for version control</li>
                  <li>Vercel for deployment</li>
                  <li>Streamlined development, collaboration, and deployment</li>
                </ul>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
