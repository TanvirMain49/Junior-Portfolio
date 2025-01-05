import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    close: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 bg-opacity-70 w-full z-50 backdrop-blur-md">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between text-xl  text-gray-200 px-12 h-20">
        <a className="text-2xl" href="#">T.Mahin</a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer text-white">
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skill" smooth={true} offset={50} duration={500}>
              Skill
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} offset={50} duration={500}>
              Project
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} offset={50} duration={500}>
              Education 
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "close"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="text-white text-4xl space-y-5 mt-24 text-center">
            <li>
              <Link onClick={closeNav} to="about" smooth={true} offset={50} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={closeNav} to="skill" smooth={true} offset={50} duration={500}>
                Skill
              </Link>
            </li>
            <li>
              <Link onClick={closeNav} to="project" smooth={true} offset={50} duration={500}>
                Project
              </Link>
            </li>
            <li>
              <Link onClick={closeNav} to="education" smooth={true} offset={50} duration={500}>
                Eduction
              </Link>
            </li>
            <li>
              <Link onClick={closeNav} to="contact" smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
