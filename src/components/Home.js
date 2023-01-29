import React from "react";
import s from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      //mass and damping only can be used with spring type
      mass: 0.4,
      damping: 10,

      //specifies when the parent animation should occur, in relation to any children animations
      when: "beforeChildren",
      staggerChildren: 0.6,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 20px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
  tap: {
    scale: 0.8,
  },
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 h-screen w-screen grid place-items-center p-4 mt-16 sm:mt-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col gap-y-8 sm:gap-y-10 text-white text-center font-poppins"
      >
        <motion.div variants={childVariants} className=" text-4xl sm:text-6xl">
          Hi, I'm Gabriel
        </motion.div>

        <motion.div variants={childVariants} className=" text-2xl sm:text-4xl">
          I'm a Front End / React Developer.
        </motion.div>

        <motion.div variants={childVariants}>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="text-red-600 font-semibold  bg-black"
            onClick={() => navigate("/projects")}
          >
            View My Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
