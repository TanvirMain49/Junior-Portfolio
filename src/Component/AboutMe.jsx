import React from "react";
import Reveal from "./Reval";

const AboutMe = () => {
  return (
    <div className="text-gray-200 md:w-8/12 md:px-0 px-4 mx-auto my-16" id="about">
      <Reveal>
        <h2 className="md:text-6xl text-3xl font-bold mb-9 text-center border-b-4 border-[#0a97b0e1] md:mx-80 mx-10 ">
          About ME
        </h2>

        <div className="border border-[#0A97B0] md:p-8 p-3 rounded-lg bg-[#0A97B0]/20 shadow-lg w-full">
         <ul class="list-disc p-5 text-xl md:space-y-6 space-y-4">
            <li>Hi, I'm Mahinul Tanvir Mahin, a web developer from Bangladesh with a passion for coding and interactive websites.</li>
            <li>My journey started with HTML & CSS, and I've expanded my skills to JavaScript, React, and backend technologies like MongoDB.</li>
            <li>I enjoy solving problems and creating user-friendly experiences.</li>
            <li>Currently studying Computer Science & Engineering at Leading University, where my love for coding grew from building websites.</li>
            <li>Beyond programming, I enjoy playing football and sketching, which keeps me creative and focused.</li>
            <li>I'm always eager to learn new technologies and take on challenging projects that push my limits. </li>
         </ul>
        </div>
      </Reveal>
    </div>
  );
};

export default AboutMe;
