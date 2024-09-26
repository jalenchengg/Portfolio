// components/Navbar.tsx
"use client";

import Link from "next/link";

// import Button from "./Button";
import MenuVariant from "./MenuVariant";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "0",
    right: "0",
    transition: " duration: 0.75",
    delay: 0.35,
    type: "tween",
    ease: [0.76, 0, 0.24, 1],
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="grid md:grid-cols-5 grid-cols-2 p-4 bg-white text-gray-400 w-full top-0 fixed">
      <div>
        <a
          href="/"
          className="group fixed text-xl top-4 left-4 font-bold sm:top-2 sm:left"
        >
          Jalen Cheng
          <div className="absolute -bottom-[3px] left-0 h-[2px] w-0 bg-gray-400 transition-all duration-500 ease-in-out group-hover:w-[130px]"></div>
        </a>
      </div>
      <div className="hidden md:block">
        <p className="flex flex-col font-secondary font-medium uppercase text-xs">
          <span className="font-bold">Drop a message!</span>
          <span>
            <a
              href="mailto:jexxbusiness@gmail.com"
              className="hover:text-gray-500"
            >
              jexxbusiness@gmail.com
            </a>
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <div className="hidden md:block">
          <p className="flex flex-col font-medium uppercase text-xs">
            <span>UI UX Web Design</span>
            <span>Motion Design</span>
          </p>
        </div>
      </div>
      <div>
        <div className="hidden md:block text-xs font-medium uppercase pl-36">
          <span>Social:</span>
          <div className="flex gap-3">
            <a
              href="https:twitter.com/jexxtv"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              TW
            </a>
            <a
              href="https:github.com/jalenchengg"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GH
            </a>
            <a
              href="https:www.linkedin.com/in/jalen-cheng/"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LI
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="hidden md:block flex-col uppercase  text-xs font-medium">
          <Link href="/experience" className="flex items-center">
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
          </Link>
          <Link href="/about" className="flex items-center">
            <svg
              xmlns="http:www.w3.org/2000/svg"
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
          </Link>
          <Link href="/photography" className="flex items-center">
            <svg
              xmlns="http:www.w3.org/2000/svg"
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              className="relative left-0 duration-500 mr-2 -translate-y-1/2"
            >
              <path
                d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Photography</span>
          </Link>
        </div>
      </div>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden block hover:text-red-500"
      >
        Menu
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 w-full min-h-screen left-0 p-4 bg-blue-800"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden block ml-auto"
          >
            Closed
          </button>
          <MenuVariant />
        </motion.div>
      )}
    </nav>
  );
}

// export default function Navbar() {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-10 text-gray-400 ]">
//       <div className="grid grid-cols-8 gap-1 p-4 items-center w-full   relative">
//         <div className="col-span-6 lg:col-span-2">
//           <a
//             href="/"
//             className="group fixed text-xl top-4 left-4 font-extrabold sm:top-2 sm:left"
//           >
//             Jalen Cheng
//             <div className="absolute -bottom-[3px] left-0 h-[2px] w-0 bg-gray-400 transition-all duration-500 ease-in-out group-hover:w-[130px]"></div>
//           </a>
//         </div>
//         <div className="top-4 right-3 font-extrabold col-span-2 lg:col-span-1 lg:hidden flex justify-end">
//           <Button isActive={isActive} toggleMenu={toggleMenu} />
//         </div>
//         <div className="fixed right-12 top-12">
//           <motion.div className="w-full h-full bg-green-500 rounded-3xl relative">
//             <AnimatePresence>{isActive && <MenuVariant />}</AnimatePresence>
//           </motion.div>
//         </div>
//         <div
//           className={`lg:flex lg:justify-between col-span-8 lg:col-span-6 ${
//             isActive ? "block" : "hidden"
//           } lg:block`}
//         >
//           <div className="col-span-2 lg:col-span-2">
//             <p className="flex flex-col font-secondary font-medium uppercase text-xs leading-4">
//               <span className="font-bold">Drop a message!</span>
//               <span>
//                 <a
//                   href="mailto:jexxbusiness@gmail.com"
//                   className="hover:text-gray-500"
//                 >
//                   jexxbusiness@gmail.com
//                 </a>
//               </span>
//             </p>
//           </div>
//           <div className="col-span-2 max-lg:hidden">
//             <p className="flex flex-col font-secondary font-medium uppercase text-xs leading-4">
//               <span>UI UX Web Design</span>
//               <span>Motion Design</span>
//             </p>
//           </div>
//           <div className="col-span-2 lg:col-span-1">
//             <div className="font-secondary text-xs font-medium uppercase leading-4">
//               <span>Social:</span>
//               <div className="flex gap-3">
//                 <a
//                   href="https://twitter.com/jexxtv"
//                   className="hover:text-gray-500"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   TW
//                 </a>
//                 <a
//                   href="https://github.com/jalenchengg"
//                   className="hover:text-gray-500"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   GH
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/jalen-cheng/"
//                   className="hover:text-gray-500"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   LI
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-2 lg:col-span-1">
//             <div className="flex flex-col items-end uppercase text-secondary font-secondary text-xs font-medium leading-4">
//               <Link href="/experience" className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="9"
//                   height="7"
//                   viewBox="0 0 9 7"
//                   fill="none"
//                   className="relative left-0 top-0.5 group-hover:opacity-0 group-hover:translate-x-1/4 transform transition-transform duration-500 mr-2 -translate-y-1/2"
//                 >
//                   <path
//                     d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <span>Exp</span>
//               </Link>
//               <Link href="/about" className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="9"
//                   height="7"
//                   viewBox="0 0 9 7"
//                   fill="none"
//                   className="relative left-0 top-0.5 group-hover:opacity-0 group-hover:translate-x-1/4 transform transition-transform duration-500 mr-2 -translate-y-1/2"
//                 >
//                   <path
//                     d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <span>Abt</span>
//               </Link>
//               <Link href="/photography" className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="9"
//                   height="7"
//                   viewBox="0 0 9 7"
//                   fill="none"
//                   className="relative left-0 duration-500 mr-2 -translate-y-1/2"
//                 >
//                   <path
//                     d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <span>Photography</span>
//               </Link>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </nav>
//   );
// }
