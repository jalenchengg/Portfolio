"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="grid md:grid-cols-5 grid-cols-2 p-4 text-gray-400 w-full top-0 fixed z-50">
      {/* === Left logo === */}
      <div>
        <a
          href="/"
          className="group fixed text-xl top-4 left-4 font-bold sm:top-2 sm:left"
        >
          Jalen Cheng
          <div className="absolute -bottom-[3px] left-0 h-[2px] w-0 bg-gray-400 transition-all duration-500 ease-in-out group-hover:w-[120px]"></div>
        </a>
      </div>

      {/* === Email section === */}
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

      {/* === Center info === */}
      <div className="flex justify-center">
        <div className="hidden md:block">
          <p className="flex flex-col font-medium uppercase text-xs">
            <span>UI UX Web Design</span>
            <span>Cinematic Genius</span>
          </p>
        </div>
      </div>

      {/* === Social links === */}
      <div>
        <div className="hidden md:block text-xs font-medium uppercase pl-36">
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

      {/* === Right links === */}
      <div className="flex justify-end">
        <div className="hidden md:flex flex-col uppercase text-xs font-medium">
          <Link href="/work" className="flex items-center">
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
              />
            </svg>
            <span>Work</span>
          </Link>

          <Link href="/about" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              className="relative left-0 top-0.5 transform transition-transform duration-500 mr-2 -translate-y-1/2"
            >
              <path
                d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                fill="currentColor"
              />
            </svg>
            <span>Abt</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
