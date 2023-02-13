import React from "react";
import s from "../styles/Skills.module.css";
import FadeIn from "react-fade-in";
import { motion, AnimatePresence } from "framer-motion";
const title = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 9,
    },
  },
};

const skills1 = [
  { name: "react|redux", image: "/images/react-icon.png" },
  { name: "MongoDB", image: "/images/mongodb-icon.png" },
  { name: "CSS3", image: "/images/css3-icon.png" },
  { name: "tailwind", image: "/images/tailwind-icon.png" },
  { name: "javascript", image: "/images/javascript-icon2.png" },
];
const skills2 = [
  { name: "node js", image: "/images/nodejs-icon.png" },
  { name: "git", image: "/images/git-icon.png" },
  { name: "firebase", image: "/images/firebase-icon.png" },
  { name: "next js", image: "/images/next-icon.png" },
  { name: "SQL", image: "/images/sql-logo.png" },
];

const Skills = () => {
  return (
    <div className=" absolute top-0 grid place-items-center  h-screen w-screen ">
      <div className=" grid  h-3/4 ">
        <motion.div
          variants={title}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="pb-10 sm:p-10 flex justify-center text-red-600 text-5xl sm:text-6xl font-semibold "
        >
          Skills
        </motion.div>
        <div className=" flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-56">
            {/* first col */}
            <div className="list flex flex-col align-center text-white text-2xl font-semibold">
              <FadeIn delay="100" transitionDuration="800">
                {skills1.map((skill, i) => (
                  <li key={i} className="flex gap-x-4">
                    <img
                      src={skill.image}
                      className="h-10 w-10 sm:h-20 sm:w-20"
                      alt=""
                    />
                    <p className="capitalize flex items-center ">
                      {skill.name}
                    </p>
                  </li>
                ))}
              </FadeIn>
            </div>
            {/* second col */}
            <div className="list flex flex-col text-white text-2xl font-semibold  ">
              <FadeIn delay="100" transitionDuration="800">
                {skills2.map((skill, i) => (
                  <li key={i} className="flex gap-x-4 ">
                    <img
                      className="h-10 w-10 sm:h-20 sm:w-20"
                      src={skill.image}
                      alt=""
                    />
                    <p className="capitalize flex items-center ">
                      {skill.name}
                    </p>
                  </li>
                ))}
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
