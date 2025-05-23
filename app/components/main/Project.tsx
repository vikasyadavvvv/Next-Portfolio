import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-white py-10 md:py-20">
        My Projects
      </h1>
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 px-5 md:px-10">
        <ProjectCard
          src="/image.png"
          title="IronMentor – Fitness Voice App"
          description="An AI-powered fitness application with personalized workout plans, custom diets, voice assistant, and real-time program generation built using Next.js, Vapi, Gemini AI, Clerk, and Convex."
          githubUrl="https://github.com/vikasyadavvvv/IronMentor"
          liveUrl="https://iron-mentor.vercel.app/"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="A card animation UI with responsive layout and modern styling."
          githubUrl="https://github.com/vikasyadavvvv/interactive-cards"
          liveUrl="https://interactive-cards.vercel.app"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A fun, space-themed landing page built with modern CSS and design elements."
          githubUrl="https://github.com/vikasyadavvvv/space-website"
          liveUrl="https://space-website.vercel.app"
        />
      </div>
    </div>
  );
};

export default Projects;
