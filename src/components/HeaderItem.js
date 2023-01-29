import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

const HeaderItem = ({ item }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  return (
    <motion.li
      className="grid place-items-center font-poppins text-2xl cursor-pointer p-2 rounded-md"
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      onClick={() => {
        navigate(`${item.link}`);
      }}
    >
      {item.name}
    </motion.li>
  );
};

export default HeaderItem;
