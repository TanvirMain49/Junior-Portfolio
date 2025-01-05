import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinnyEffect";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import profilepic from "../assets/Picsart_25-01-05_05-12-15-841.png";

const Hero = () => {
  return (
    <div className="mt-36 max-w-[1200px] mx-auto relative text-gray-200">
      <div className="grid md:grid-cols-2 place-items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Web Developer",
              1000,
              "Full Stack Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-xl md:text-5xl mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-bold text-gray-200 md:text-6xl text-4xl tracking-tighter mb-4"
          >
            HEY, I AM <br />
            <span className="text-[#0A97B0]">TANVIR MAHIN</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="font-semibold max-w-[300px] md:max-w-[500px] md:text-xl text-lg mb-4"
          >
            I’m a web developer focused on creating user-friendly websites and
            constantly improving my skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row gap-2"
          >
            <motion.a
              href="https://docs.google.com/document/d/18JFstA8frQloiKuirFUhgQDIedVt08bJ6TFEY9TI51Y/edit?usp=sharing"
              target="_blank" 
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-[#0A97B0] rounded-xl hover:bg-[#0A97B0] hover:text-white transition-all duration-300"
            >
              Download CV
            </motion.a>

            <div className="flex gap-6 flex-row text-2xl md:text-5xl text-[#0A97B0] z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* img */}
        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="text-5xl flex flex-row items-center justify-center px-12 md:px-0 py-20 w-full"
      >
        <p className="text-gray-200 mr-6 text-nowrap font-bold">My TecSkill</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1200} />
      </div>
    </div>
  );
};

export default Hero;
