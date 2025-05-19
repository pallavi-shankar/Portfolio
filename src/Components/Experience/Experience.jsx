// import React from "react";
// import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
// import { SiRedis } from "react-icons/si";
// import { FaGoogle } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { RiNetflixFill } from "react-icons/ri";
// import { FaAmazon } from "react-icons/fa";
// import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
// import { SiSpringboot, SiMysql } from 'react-icons/si'; // Using Si (Simple Icons) for Spring Boot and MySQL


// const Experience = () => {
//   return (
//     <div id="Experience" className="p-10 md:p-24">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
//       <div className="flex flex-wrap items-center justify-around">
//         <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaHtml5 color="#E34F26" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaCss3 color="#1572B6" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaReact color="#61DAFB" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaJs color="#F7DF1E" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaFigma color="#F24E1E" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <SiMongodb color="#47A248" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <SiRedis color="#FF4438" size={50} />
//           </span>
//         </div>

//         <div>
//           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
//             {/* <FaGoogle color="#4285F4" size={50} /> */}
//             <span className="text-white">
//               <h2 className="leading-tight text-lg">Full Stack Developer Intern , Tripillar Solutions</h2>
//               <p className="text-lg leading-tight font-thin">
//                 Oct 2024 - Dec 2024
//               </p>
//               <ul className="text-lg p-2">
//                 <li>- Worked as  developer</li>
//                 <li>-Managed Front end and Back end</li>
//                 <li>- Got introduced to many technologies</li>
//                 <p>-Like HTML, CSS, Spring Boot, MySQL, JavaScript, Core Java</p>
//               </ul>
//             </span>
//           </div>
         
       
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from "react";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si"; // Using Si (Simple Icons) for Spring Boot and MySQL
// import { FaFigma, FaReact, FaGoogle, FaAmazon } from "react-icons/fa"; // Remaining icons commented out
// import { SiMongodb, SiRedis } from "react-icons/si"; // Remaining icons commented out
// import { RiNetflixFill } from "react-icons/ri"; // Remaining icons commented out

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {/* Only Icons for HTML, CSS, Spring Boot, MySQL, JavaScript, Core Java */}
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

        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            {/* <FaGoogle color="#4285F4" size={50} /> */}
            <span className="text-white">
              <h2 className="leading-tight text-lg">Full Stack Developer Intern, Tripillar Solutions</h2>
              <p className="text-lg leading-tight font-thin">
                Oct 2024 - Dec 2024
              </p><br></br>
              <ul className="text-lg p-2">
                <li>- Worked as a developer</li>
                <li>- Managed Front end and Back end</li>
                <li>- Got introduced to many technologies</li>
                <p>- Like HTML, CSS, Spring Boot, MySQL, JavaScript, Core Java</p>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
