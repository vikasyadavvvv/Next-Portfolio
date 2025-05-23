import {
  Backend_skill,
  Frontend_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 min-h-screen relative pb-10 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="z-10 w-full flex flex-col items-center">
        <SkillText />
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-10">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-10">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-10">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

{/* ===== Skill Description Section ===== */}
<div className="w-full z-10 px-6 md:px-20 mt-16 text-left max-w-5xl">
  <h3 className="text-4xl font-bold text-white mb-6">Skill Overview</h3>
  
  <p className="text-gray-300 mb-4 text-xl">
    <strong>Frontend:</strong> I specialize in building modern and responsive user interfaces using <strong>React.js</strong>, styled with <strong>Tailwind CSS</strong> and enhanced by <strong>Framer Motion</strong> for animations. I follow clean and reusable component architecture.
  </p>

  <p className="text-gray-300 mb-4 text-xl">
    <strong>Backend:</strong> I develop robust REST APIs using <strong>Node.js</strong> and <strong>Express.js</strong>, and implement real-time features with <strong>Socket.io</strong>. I focus on secure and scalable backend logic.
  </p>

  <p className="text-gray-300 mb-4 text-xl">
    <strong>Database:</strong> I use <strong>MongoDB</strong> as my main database and have also started working with <strong>Convex</strong> for serverless, real-time data handling.
  </p>

  <p className="text-gray-300 mb-4 text-xl">
    <strong>Authentication:</strong> I integrate <strong>Clerk</strong> for authentication, enabling features like social login, user management, and session security.
  </p>

  <p className="text-gray-300 text-xl">
    <strong>UI Libraries:</strong> I use <strong>shadcn/ui</strong> along with Tailwind CSS to build clean and accessible components with consistent design patterns.
  </p>
</div>

      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
