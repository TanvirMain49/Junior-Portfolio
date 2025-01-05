import React from "react";
import Reveal from "./Reval";

const Education = () => {
  return (
    <Reveal>
      <div
        id="education"
        className="text-gray-200 md:w-9/12 w-10/12 md:ml-52 ml-10 my-16"
      >
        <h2 className="md:text-6xl text-3xl font-bold mb-9 text-center border-b-4 border-[#0a97b0e1] md:mx-[400px] mx-16 ">
          Eduction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 mb-8 text-center">
          <div className="border border-[#0A97B0] md:p-8 p-3 rounded-lg bg-[#0A97B0]/20 shadow-lg w-full">
            <p>
              I completed my SSC at Ousmani Medical High School with a GPA of
              4.50
            </p>
          </div>
          <div className="border border-[#0A97B0] md:p-8 p-3 rounded-lg bg-[#0A97B0]/20 shadow-lg w-full">
            <p>
              I completed my HSC at Scholars Home Mejortila with a GPA of 4.50
            </p>
          </div>
        </div>
        <div className="border border-[#0A97B0] md:p-8 p-3 rounded-lg bg-[#0A97B0]/20 shadow-lg w-full text-center">
          <p>
            I am currently studying Computer Science and Engineering at Leading
            University.
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default Education;
