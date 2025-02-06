import { motion } from "framer-motion";
import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import Reveal from "./Reval";

const Skill = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-blue-600" />,
        },
        {
          name: "JavaScript",
          icon: <DiJavascript1 className="text-yellow-500" />,
        },
        { name: "React", icon: <DiReact className="text-blue-500" /> },
      ],
    },
    {
      category: "Fullstack",
      technologies: [
        { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
        { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
        { name: "React", icon: <DiReact className="text-blue-500" /> },
        { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      ],
    },
  ];
  return (
    <div className="max-w-[780px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skill">
      <Reveal>
        <h2 className="md:text-6xl text-3xl font-bold mb-9 text-center border-b-4 border-[#0a97b0e1] md:mx-64 mx-36">
          Skills
        </h2>
        <motion.div className="flex flex-col md:flex-row justify-center  md:space-x-12 md:px-0 px-4 space-y-8 md:space-y-0">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-[#0A97B0] md:p-8 p-3 rounded-lg bg-[#0A97B0]/20 shadow-lg w-full md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">
                {skill.category}
              </h2>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
                {skill.technologies.map((tec, ind) => (
                  <div key={ind} className="flex items-center md:space-x-2">
                    <span className="text-5xl">{tec.icon}</span>
                    <span className="text-lg">{tec.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </Reveal>
    </div>
  );
};

export default Skill;
