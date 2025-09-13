import React from "react";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <div id="Certifications" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Certifications</h1>
      <div className="flex flex-wrap items-center justify-around">

        <div className="grid md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12 mt-10">

          <div className="flex gap-8 bg-zinc-950 p-6 rounded-2xl items-center">
            <FaCertificate color="#FFD700" size={50} />
            <div className="text-white">
              <h2 className="leading-tight text-lg">Joy of Computing using Python</h2>
              <p className="text-lg font-thin">Certified by NPTEL – 2024</p>
            </div>
          </div>

          <div className="flex gap-8 bg-zinc-950 p-6 rounded-2xl items-center">
            <FaCertificate color="#FFD700" size={50} />
            <div className="text-white">
              <h2 className="leading-tight text-lg">Data Structures Using C</h2>
              <p className="text-lg font-thin">Certified by SIVA Academy – 2024</p>
            </div>
          </div>

          <div className="flex gap-8 bg-zinc-950 p-6 rounded-2xl items-center md:col-start-1">
            <FaCertificate color="#FFD700" size={50} />
            <div className="text-white">
              <h2 className="leading-tight text-lg">Java Full Stack Development</h2>
              <p className="text-lg font-thin">Certified by SIVA Academy – 2024</p>
            </div>
          </div>

          {/* New Certification */}
          <div className="flex gap-8 bg-zinc-950 p-6 rounded-2xl items-center">
            <FaCertificate color="#FFD700" size={50} />
            <div className="text-white">
              <h2 className="leading-tight text-lg">Mastering Data Structures and Algorithms using C and C++</h2>
              <p className="text-lg font-thin">Certified by Udemy – 2025</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Certifications;
