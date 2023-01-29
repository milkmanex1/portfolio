import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import HeaderItem from "./HeaderItem";

const variants = {
  hover: {
    scale: 1.2,
    // textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 10px rgb(255,255,255)",
    color: "red",
    borderBottom: "2px solid red",
  },
  tap: {
    scale: 0.8,
  },
};

const mobileVariants = {
  hidden: { y: "-100vw" },
  visible: { y: 0 },
  hover: {
    scale: 1.2,
    // textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 10px rgb(255,255,255)",
    color: "red",
    borderBottom: "2px solid red",
  },
  tap: {
    scale: 0.8,
  },
  //   transition: {
  //     default: {
  //       duration: 0.3,
  //     },
  //     scale: {
  //       type: "spring",
  //       damping: 0,
  //       stiffness: 0,
  //     },
  //   },
  exit: {
    y: "-100vw",
  },
};
const menuVariant = {
  hover: {
    color: "red",

    // textShadow: "0px 0px 8px rgb(255,255,255)",
  },
  transition: {
    duration: "0.5s",
    ease: "easeInOut",
  },
  tap: {
    scale: 0.8,
  },
};

const Header = () => {
  const items = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];
  const navigate = useNavigate();
  const [cross, setCross] = useState(false);
  const [selected, setSelected] = useState(new Array(5).fill(false));
  function handleClick() {
    setCross(!cross);
  }
  function updateSelected(lastSelectedIndex) {
    const newArray = selected.map((n, i) => {
      if (i == lastSelectedIndex) {
        return true;
      }
      return false;
    });
    setSelected(newArray);
  }
  //   useEffect(() => {
  //     console.log(selected);
  //   }, [selected]);

  return (
    <div className="w-screen h-[5rem] md:h-auto  max-h-1/12 flex justify-end z-20 bg-black text-3xl text-white top-0 md:pt-4  p-4 px-8 pr-12 sticky ">
      {/* -------Flashy logo on left --------------*/}
      <motion.div
        variants={menuVariant}
        whileTap="tap"
        className="absolute left-4 top-2"
        onClick={() => {
          navigate(`/`);
        }}
      >
        {/* <img
          className="h-24 w-24 cursor-pointer"
          src="https://png.pngtree.com/png-clipart/20210216/ourlarge/pngtree-shining-white-circle-element-asset-png-image_2916389.jpg"
          alt=""
        /> */}
        <div className="container cursor-pointer">
          <div className="loader">
            <span></span>
          </div>
          <div className="loader">
            <span></span>
          </div>
          <div className="loader">
            <i></i>
          </div>
          <div className="loader">
            <i></i>
          </div>
          <HomeIcon
            style={{ fontSize: "2rem", color: "" }}
            className="absolute top-6 left-6"
          ></HomeIcon>
        </div>
      </motion.div>

      {/* -------menu icon --------------*/}
      <motion.div
        className="lg:hidden block z-30"
        variants={menuVariant}
        whileHover="hover"
        whileTap="tap"
      >
        {!cross ? (
          <MenuIcon
            style={{ fontSize: "3rem" }}
            className="cursor-pointer "
            onClick={handleClick}
          ></MenuIcon>
        ) : (
          <CloseIcon
            style={{ fontSize: "3rem" }}
            className="cursor-pointer"
            onClick={handleClick}
          ></CloseIcon>
        )}
      </motion.div>
      {/* -----------widescreen navbar -----------------*/}
      <div className="hidden lg:grid grid-cols-5    md:gap-x-6 ">
        {items.map((item, i) => {
          return (
            <motion.li
              key={i}
              className={`grid place-items-center font-poppins text-2xl cursor-pointer p-2 rounded-md  ${
                selected[i] ? "text-red-600" : ""
              }`}
              variants={variants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                navigate(`${item.link}`);
                updateSelected(i);
              }}
            >
              {item.name}
            </motion.li>
            // <HeaderItem item={item} key={i} />
          );
        })}
      </div>
      {/* -----------mobile navbar -----------------*/}
      <AnimatePresence>
        {cross && (
          <div className="lg:hidden flex flex-col w-full h-screen backdrop-blur-[8px] bg-black absolute top-0 left-0 pt-12 md:pt-24">
            {items.map((item, i) => {
              return (
                <motion.li
                  key={i}
                  className="grid place-items-center p-4  mx-24  my-1 cursor-pointer rounded-md"
                  variants={mobileVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => {
                    navigate(`${item.link}`);
                    setCross(false);
                  }}
                >
                  {item.name}
                </motion.li>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
