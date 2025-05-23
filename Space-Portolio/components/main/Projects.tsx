import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
        <div className="w-full md:w-1/3 flex justify-center">
          <ProjectCard
            src="/shoe.png"
            title="shoes animated draging Page"
            description="These product cards animate using CSS keyframes with smooth transitions. Each item fades in sequentially with a staggered delay, while hover effects scale cards slightly with box-shadows. Prices pulse gently to draw attention. The entire grid uses CSS Grid for perfect alignment, with transform animations "
          />
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <ProjectCard
            src="/Hari2.png"
            title="Animated Scrolled Home Page"
            description="I'm studying at KIU (Kaatsu International University), and my friends there have become like a second family to me. We often work on group projects together, usually late into the night. Sometimes, when we're too tired or working till morning, I sleep in their rooms. It's fun and supportive."
          />
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <ProjectCard
            src="/Hari.png"
            title="Space Themed Website"
            description="My portfolio is designed with a space theme, reflecting creativity, exploration, and innovation. Inspired by the vast universe, it features dark tones, stars, and futuristic elements to showcase my projects and skills in a unique and visually engaging way. It represents my passion for discovery and reaching beyond limits."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;