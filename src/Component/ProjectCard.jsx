import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reval";

const ProjectCard = ({ project, ind }) => {
  return (
    <Reveal>
      <div
        className={`text-gray-200 flex md:flex-row flex-col ${
          ind % 2 === 0 ? "md:flex-row-reverse" : ""
        } items-center justify-center gap-5 mb-16`}
      >
        <div className="w-full md:w-1/2 p-3">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-2">
          <h2 className="font-bold text-4xl mb-4">{project.title}</h2>
          <p className="text-base mb-4">{project.description}</p>

          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologiesUsed.map((tech, index) => (
              <span
                key={index}
                className="bg-[#0A97B0] text-white px-3 py-1 rounded-full text-sm shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-2 pt-4">
            <a
              target="_blank"
              href={project.links.site}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-[#0A97B0] rounded-xl hover:bg-[#0A97B0] hover:text-white transition-all duration-300"
            >
              View Site
            </a>
            <a
              target="_blank"
              href={project.links.github}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-[#0A97B0] flex items-center gap-2 rounded-xl hover:bg-[#0A97B0] hover:text-white transition-all duration-300"
            >
              <AiOutlineGithub size={24} />
              View Git Repo
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
