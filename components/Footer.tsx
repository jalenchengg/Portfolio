import React from "react";

const Footer = () => {
  return (
    <footer className="z-30 fixed bottom-0 left-0 w-full text-xs font-medium uppercase max-w-container mx-auto text-gray-400">
      <div className="grid p-6">
        <div className="flex flex-col justify-start col-span-2">
          <div>
            <span className="text-lg">©</span> Jalen Cheng
          </div>
        </div>
        <div className="uppercase flex flex-col justify-end col-span-2">
          <a>Made with Nextjs, Tailwindcss, Typescript, and Framermotion</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
