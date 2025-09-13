import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="RISE"
          main="Developed a platform to support underperforming students by tracking scores and providing personalized study materials and online courses."
          technologies="PHP, HTML, CSS, JavaScript, MySQL, XAMPP"
        />
        <ProjectCard
          title="ED-TECH"
          main="Designed an e-learning platform guiding students towards IT job roles and necessary skills with a data-driven recommendation system."
          technologies="JSP, Servlets, MySQL, HTML, CSS, JavaScript"
        />
        <ProjectCard
          title="Personal Portfolio"
          main="Built and deployed a personal portfolio website to showcase skills and projects with a responsive design."
          technologies="React, Vite, Tailwind CSS, GitHub Pages"
        />
        <ProjectCard
          title="E-commerce Website"
          main="Built a full-stack e-commerce platform allowing users to browse products, add to cart, and place orders. Admins can manage products and track orders."
          technologies="MongoDB, Express.js, React.js, Node.js, Vercel, Cloudinary"
        />
      </div>
    </div>
  );
};

export default Projects;
