// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
//     >
//       <div>
//         <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
//         <h3 className="text-sm md:text-2xl font-normal">
//           Feel Free To reach out!
//         </h3>
//       </div>

//       <ul className="text-sm md:text-xl">
//         <li className="flex gap-1 items-center">
//           <MdOutlineEmail size={20} />
//           pallavishankar2802@gmail.com
//         </li>
//         <li className="flex gap-1 items-center">
//           <CiLinkedin />
//           linkdlin.com/pallavi-shankar-
//         </li>
//         <li className="flex gap-1 items-center">
//           <FaGithub />
//           github.com/pallavi-shankar
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:pallavishankar2802@gmail.com"
            className="hover:underline"
          >
            pallavishankar2802@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://linkedin.com/in/pallavi-shankar-"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/pallavi-shankar-
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/pallavi-shankar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/pallavi-shankar
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
