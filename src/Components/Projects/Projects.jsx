import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="RISE"
          main="Developed a platform to support underperforming students by tracking scores and providing personalized
study materials and online courses to improve their learning outcomes."
          technologies=" PHP, HTML, CSS, JavaScript, MySQL, XAMPP"
        />
        <ProjectCard
          title="ED-TECH"
          main="Designed an e-learning platform guiding students towards IT job roles and necessary skills. Implemented
a data-driven recommendation system for personalized learning experiences."
technologies="JSP, Servlets, MySQL, HTML, CSS, JavaScript"

        />
        
        
        {/* <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
