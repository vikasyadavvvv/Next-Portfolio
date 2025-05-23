import Image from "next/image";
import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ src, title, description, githubUrl, liveUrl }: Props) => {
  return (
    <div
      className="
        relative 
        overflow-hidden 
        rounded-lg 
        shadow-lg 
        border border-[#2A0E61] 
        flex flex-col 
        bg-[#030014] 
        transform
        transition
        duration-300
        ease-in-out
        hover:scale-105
        hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.7)]
      "
    >
<div className="relative w-full h-64 md:h-48 lg:h-64">
  <Image
    src={src}
    alt={title}
    fill
    className="object-cover object-top"
    sizes="(max-width: 760px) 100vw,
           (max-width: 1800px) 50vw,
           33vw"
    priority
  />
</div>

      <div className="relative p-4 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>

        <div className="mt-4 flex gap-8">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live project link"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={20} />
              <span>View Live</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository link"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
              <span>GitHub Repo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
