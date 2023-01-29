import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "SpaceBook",
    desc: "A Facebook-inspired social media app built with Next.js, NextAuth, Firebase and Tailwind Css.",
    demo: "https://spacebook2.vercel.app/",
    img: "/images/spacebook-sc.png",
    github: "https://github.com/milkmanex1/facebook-clone",
  },
  {
    id: 2,
    title: "Amazon Clone",
    desc: "Landing Page of ecommerce website inspired by Amazon. Built with React, Material UI, Firebase.",
    demo: "https://clone-dfcc4.web.app/",
    img: "/images/amazon-sc.png",
    github: "https://github.com/milkmanex1/Amazon-Clone",
  },
  {
    id: 3,
    title: "Netflix Clone",
    desc: "Landing Page of Netflix site.",
    demo: "https://netflix-clone-e9281.web.app/",
    img: "/images/netflix-sc.png",
    github: "https://github.com/milkmanex1/netflix-clone",
  },
  {
    id: 4,
    title: "Airbnb Clone",
    desc: "Airbnb landing page. Built with React, Material Ui, deployed with Firebase.",
    demo: "https://airbnb-clone-369db.web.app/",
    img: "/images/airbnb-sc.png",
    github: "https://github.com/milkmanex1/Airbnb-clone",
  },
  {
    id: 5,
    title: "Grocery List",
    desc: "Simple grocery list app, with custom-built autocomplete. Built with React.",
    demo: "https://shopping-list-106c2.web.app/",
    img: "/images/shoppinglist-sc.png",
    github: "https://github.com/milkmanex1/shopping-list",
  },
];

const imgVariants = {
  hover: {
    scale: 0.95,
  },

  //   tap: { rotate: [0, -30, 0], transition: { duration: 0.5 } },
};

const title = {
  hidden: {
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

const btnVariants = {
  hover: {
    scale: 1.3,
    // color: "#ff2b1c",
    color: "red",
    originX: 0,
  },
};

const Projects = () => {
  return (
    <div className="w-screen overflow-hidden">
      <motion.div
        className="sm:mt-20 my-6 flex justify-center"
        variants={title}
        initial="hidden"
        animate="visible"
      >
        <div className="text-red-600 text-5xl lg:text-6xl pb-2 font-bold border-b-8 border-slate-600 w-[8rem]">
          Projects
        </div>
      </motion.div>
      {projects.map((project) => {
        const { id, title, desc, demo, img, github } = project;
        return (
          <div
            key={id}
            className="w-screen  lg:grid grid-cols-10 gap-x-84 
            sm:my-24"
          >
            <a
              className={`col-span-7 p-12 ${!(id % 2) && "order-2"}`}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                variants={imgVariants}
                whileHover="hover"
                className=" min-w-[20rem] w-full h-full border-8 border-white object-cover cursor-pointer relative "
                src={img}
                alt=""
              />
            </a>

            {/* <div className="mt-10 mr-0 flex flex-col gap-y-10"> */}
            <div className="col-span-3  p-12 flex place-items-center ">
              <div className="flex flex-col gap-y-4 sm:gap-y-10">
                <div className="text-white text-2xl sm:text-4xl font-semibold ">
                  {title}
                </div>
                <div className="text-white sm:text-2xl">{desc}</div>
                <div className="w-[8rem] text-white flex flex-col gap-y-2 sm:gap-y-5 text-md sm:text-xl ">
                  <motion.a
                    className="projectBtn"
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={btnVariants}
                    whileHover="hover"
                  >
                    Live App
                  </motion.a>
                  <motion.a
                    className="projectBtn "
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={btnVariants}
                    whileHover="hover"
                  >
                    Learn More
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
