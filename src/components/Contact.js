import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

const cvVariants = {
  hover: {
    scale: 1.2,
    // textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 10px rgb(255,255,255)",
    color: "red",
  },
  tap: {
    scale: 0.8,
  },
};

const btnVariants = {
  hover: {
    scale: 1.2,
    // color: "#ff2b1c",
    color: "red",
    originX: 0,
  },
};
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

const Contact = () => {
  return (
    <div className="absolute top-0 grid grid- place-items-center  h-screen w-screen">
      <div className=" grid h-2/3 grid-rows-4">
        <div className="grid place-items-center ">
          <motion.div
            variants={title}
            initial="hidden"
            animate="visible"
            className="text-red-600 text-4xl sm:text-6xl font-semibold p-4  text-center border-b-2 border-white w-fit "
          >
            Contact
          </motion.div>
        </div>

        <div className="row-span-2 grid sm:grid-cols-2 grid-cols-1 gap-x-16 ">
          <div className="grid place-items-center px-4">
            <motion.a
              variants={btnVariants}
              whileHover="hover"
              href="https://github.com/milkmanex1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                style={{ fontSize: "18vh" }}
                className=" text-white cursor-pointer "
              ></GitHubIcon>
            </motion.a>
          </div>
          <div className="grid place-items-center px-4">
            <motion.a
              variants={btnVariants}
              whileHover="hover"
              href="mailto: kokgabriel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon
                style={{ fontSize: "18vh" }}
                className="text-white cursor-pointer "
              ></EmailIcon>
            </motion.a>
          </div>
        </div>
        <div className="grid place-items-center px-4">
          <motion.a
            variants={cvVariants}
            whileHover="hover"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-white cursor-pointer text-2xl p-4 rounded-lg border-2 "
          >
            Download My CV
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
