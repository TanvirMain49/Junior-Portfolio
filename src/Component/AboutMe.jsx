import React from "react";
import Reveal from "./Reval";

const AboutMe = () => {
  return (
    <div className="text-gray-200 w-8/12 mx-auto my-16" id="about">
      <Reveal>
        <h2 className="md:text-6xl text-3xl font-bold mb-9 text-center border-b-4 border-[#0a97b0e1] md:mx-80 mx-10 ">
          About ME
        </h2>

        <div className="border border-[#0A97B0] md:p-8 p-3 rounded-lg bg-[#0A97B0]/20 shadow-lg w-full">
          <p>
            Hi, I'm Mahinul Tanvir Mahin, a web developer from Bangladesh with a
            passion for coding and building interactive websites. My journey
            started with HTML and CSS, and over time, I've expanded my skills to
            JavaScript, React, and backend technologies like MongoDB. I love
            solving problems and creating user-friendly experiences. I'm
            currently studying Computer Science and Engineering at Leading
            University, where my interest in coding grew from my love for
            building websites. Outside of programming, I enjoy playing football
            and sketching, which helps me stay creative and clear-headed. I'm
            always excited to learn new things and take on challenges that push
            my limits.
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default AboutMe;
