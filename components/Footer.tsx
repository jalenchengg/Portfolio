import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 text-xs font-medium sm:bottom-2 sm:left-2 text-gray-400">
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
