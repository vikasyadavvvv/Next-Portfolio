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
          src="/image2.png"
          title="CryptoRadar- Track Cryptocurrency prices"
          description="CryptoRadar is a responsive and user-friendly web application built using React.js that allows users to track real-time prices, trends, and market data of various cryptocurrencies. It fetches live data from the CoinGecko API, displaying dynamic charts, rankings, and detailed coin information in a clean and intuitive interface."
          githubUrl="https://github.com/vikasyadavvvv/CryptoRadar.git"
          liveUrl="https://cryptoradarr.netlify.app/"
        />
      
      </div>
    </div>
  );
};

export default Projects;
