"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "anticipate",

      },
    },
    closed: {
      x: "100%",
      transition: {
        duration: 0.5,
        ease: "anticipate",

      },
    },
  };

  return (
    <nav className="fixed top-0 w-full z-10 text-gray-400">
      <div className="grid grid-cols-8 gap-1 p-4 items-center">
        <div className="col-span-6 lg:col-span-2">
          <a
            href="/"
            className="fixed text-xl top-4 left-4 font-extrabold sm:top-2 sm:left"
          >
            Jalen Cheng
            <div className="absolute -bottom-[4px] left-0 h-[2px] w-0 bg-gray-400 transition-all duration-500 ease-in-out group-hover:w-[112px]"></div>
          </a>
        </div>
        <div className="top-4 right-3 font-extrabold col-span-2 lg:col-span-1 lg:hidden flex justify-end">
          <button className="text-secondary" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open Menu</span>
            <div className="w-8 h-8 flex items-center justify-center">
              <AnimatedBurgerButton isOpen={isOpen} />
            </div>
          </button>
        </div>
        <div className="hidden lg:flex lg:justify-between col-span-8 lg:col-span-6">
          <div className="col-span-2 lg:col-span-2">
            <p className="flex flex-col font-secondary font-medium uppercase text-xs leading-4">
              <span className="font-bold">Drop a message!</span>
              <span>
                <a
                  href="mailto:jexxbusiness@gmail.com"
                  className="text-secondary"
                >
                  jexxbusiness@gmail.com
                </a>
              </span>
            </p>
          </div>
          <div className="col-span-2 max-lg:hidden">
            <p className="flex flex-col font-secondary font-medium uppercase text-xs leading-4">
              <span>UI UX Web Design</span>
              <span>Modern / Efficient</span>
              <span>Motion Design</span>
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="font-secondary text-xs font-medium uppercase leading-4">
              <span>Social:</span>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/jexxtv"
                  className="hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TW
                </a>
                <a
                  href="https://github.com/jalenchengg"
                  className="hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GH
                </a>
                <a
                  href="https://www.linkedin.com/in/jalen-cheng/"
                  className="hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LI
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="flex flex-col items-end uppercase text-secondary font-secondary text-xs font-medium leading-4">
              <a href="/experience" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  className="relative left-0 top-0.5 group-hover:opacity-0 group-hover:translate-x-1/4 transform transition-transform duration-500 mr-2 -translate-y-1/2"
                >
                  <path
                    d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Exp</span>
              </a>
              <a href="/about" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  className="relative left-0 top-0.5 group-hover:opacity-0 group-hover:translate-x-1/4 transform transition-transform duration-500 mr-2 -translate-y-1/2"
                >
                  <path
                    d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Abt</span>
              </a>
              <a href="/Photography" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  className="relative left-0 top-0.5 group-hover:opacity-0 group-hover:translate-x-1/4 transform transition-transform duration-500 mr-2 -translate-y-1/2"
                >
                  <path
                    d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Photography</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 right-0 w-full h-full bg-yellow-500 z-20"
      >
        <div className="p-4 flex flex-col items-center justify-center h-full text-center">
          <button
            className="absolute top-4 right-4 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>
          <a href="/experience" className="text-gray-800 text-2xl mb-4">
            Experience
          </a>
          <a href="/about" className="text-gray-800 text-2xl mb-4">
            About
          </a>
          <a href="/Photography" className="text-gray-800 text-2xl">
            Photography
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

const AnimatedBurgerButton = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-8 h-8 flex flex-col items-center justify-center">
    <motion.div
      className="w-full h-0.5 bg-gray-800"
      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
    />
    </div>
);

export default Navbar;
