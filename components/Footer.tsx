import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 text-xs font-medium sm:bottom-2 sm:left-2 text-gray-400 mix-blend-difference">
      <div className="grid p-6">
        <div className="flex flex-col justify-start col-span-2">
          <div>
            <span className="text-lg">©</span> Jalen Cheng
          </div>
        </div>
        <div className="uppercase flex flex-col justify-end col-span-2 mix-blend-difference">
          <a>Made with Next.js, Tailwindcss, Typescript, and Framer Motion</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
