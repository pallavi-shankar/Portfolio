import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostgresql, SiSupabase } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-col gap-10">

        {/* Tripillar Experience */}
        <div className="flex flex-wrap items-start justify-around">
          {/* Icons for Tripillar */}
          <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaJs color="#F7DF1E" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiSpringboot color="#6DB33F" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiMysql color="#4479A1" size={50} />
            </span>
          </div>

          {/* Experience Info */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center h-[300px]">
            <span className="text-white">
              <h2 className="leading-tight text-lg">Full Stack Developer Intern, Tripillar Solutions</h2>
              <p className="text-lg leading-tight font-thin">
                Oct 2024 - Dec 2024
              </p><br />
              <ul className="text-lg p-2">
                <li>- Worked as a developer</li>
                <li>- Managed Front end and Back end</li>
                <li>- Got introduced to many technologies</li>
                <p>- Like HTML, CSS, Spring Boot, MySQL, JavaScript, Core Java</p>
              </ul>
            </span>
          </div>
        </div>

        {/* GreenNetspark Experience */}
        <div className="flex flex-wrap items-start justify-around">
          {/* Icons for GreenNetspark */}
          <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaReact color="#61DAFB" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiSupabase color="#3ECF8E" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiPostgresql color="#336791" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaGithub color="#181717" size={50} />
            </span>
          </div>

          {/* Experience Info */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center h-[300px]">
            <span className="text-white">
              <h2 className="leading-tight text-lg">Software Trainee, GreenNetspark Software Solutions</h2>
              <p className="text-lg leading-tight font-thin">
                Apr 2025 - Jul 2025
              </p><br />
              <ul className="text-lg p-2">
                <li>- Built employee dashboard and core CRM modules</li>
                <li>- Developed responsive UI using React and Tailwind CSS</li>
                <li>- Connected frontend to Supabase for real-time data</li>
                <li>- Implemented role-based authentication and intern linking</li>
                <li>- Handled API integration and deployment</li>
              </ul>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
