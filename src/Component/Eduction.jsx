import React from "react";
import Reveal from "./Reval";

const Education = () => {
  return (
    <Reveal>
      <div id="education" className="text-gray-200 md:w-8/12 w-10/12 mx-auto my-16">
        <h2 className="md:text-6xl text-3xl font-bold mb-9 text-center border-b-4 border-[#0a97b0e1] md:mx-80 mx-16 ">
          Eduction
        </h2>

        <div className="border border-[#0A97B0] md:p-8 p-3 rounded-lg bg-[#0A97B0]/20 shadow-lg w-full">
          <p>
            I am currently studying Computer Science and Engineering at Leading
            University. I completed my SSC at Ousmani Medical High School with a
            GPA of 4.50 and my HSC at Scholars Home Mejortila, also with a GPA
            of 4.50.
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default Education;
