import React from "react";
import s from "../styles/About.module.css";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
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
      staggerChildren: 0.3,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const title = {
  hidden: {
    opacity: 0,
    // x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.1,
    },
  },
  exit: {
    x: "100vw",
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

const About = () => {
  return (
    <div className="absolute top-0 grid place-items-center h-screen w-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=""
      >
        <div className="pt-32 sm:pt-0 grid place-items-center text-center  text-white py-4 pb-8">
          <motion.div
            className=" w-[20rem] text-red-600 sm:text-5xl text-4xl font-bold relative "
            variants={childVariants}
          >
            About Me
          </motion.div>
        </div>
        <motion.div
          variants={childVariants}
          className="grid place-items-center  py-4"
        >
          <img className="h-40 w-40" src="/images/circle.png" alt="" />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="text-center text-white md:px-24 px-8 sm:text-2xl text-lg py-4 "
        >
          Front end developer with a keen interest in all things web dev. I
          currently work at Tata Consultancy Services as a react developer, but
          continue to sharpen my skills through building side projects and
          watching tutorials.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
