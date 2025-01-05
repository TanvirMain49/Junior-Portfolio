import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdAddIcCall } from "react-icons/md";
import Reveal from "./Reval";

const Contact = () => {
  return (
    <div className="text-white max-w-[95%] md:max-w-[1230px] mx-auto px-4 my-20" id="contact">
      <Reveal>
        <h2 className="md:text-6xl text-3xl font-bold text-gray-200 mb-8 text-center border-b-4 border-[#0a97b0e1] md:mx-[440px] mx-24">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="md:w-5/12 w-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-5">
              Don't be shy!
            </h1>
            <p className="text-base md:text-lg font-semibold mb-4">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas, or opportunities to be part of your
              visions.
            </p>
            <div className="flex items-center gap-2">
              <AiOutlineMail size={40} className="text-[#0A97B0]" />
              <div>
                <p className="font-bold text-base md:text-lg">
                  Mail Me <br />
                  <span>tanvirmahin607@gamil.com</span>
                </p>
              </div>
            </div>
            <div className="flex items-center font-bold gap-2 mt-7">
              <MdAddIcCall size={40} className="text-[#0A97B0]" />
              <div>
                <p className="text-base md:text-lg">
                  Call Me <br />
                  <span>01816142726</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-7/12 w-full">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Input Fields */}
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="col-span-1 md:col-span-2 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Textarea */}
              <textarea
                placeholder="Your Message"
                className="col-span-1 md:col-span-2 h-32 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="col-span-1 md:col-span-2 flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-lg bg-[#0A97B0] text-white hover:bg-[#097A8B] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
