"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

const bottomInfo = {
  email: "jalen@webverry.com",
  socials: [
    { label: "TW", href: "https://twitter.com/jexxtv" },
    { label: "GH", href: "https://github.com/jalenchengg" },
    { label: "LI", href: "https://www.linkedin.com/in/jalen-cheng/" },
  ],
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

        {/* === Email === */}
        <div className="hidden md:block">
          <p className="flex flex-col font-secondary font-medium uppercase text-xs">
            <span className="font-bold">Drop a message!</span>
            <span>
              <a
                href="mailto:jalen@webverry.com"
                className="hover:text-gray-500"
              >
                jalen@webverry.com
              </a>
            </span>
          </p>
        </div>

        {/* === Center === */}
        <div className="flex justify-center">
          <div className="hidden md:block">
            <p className="flex flex-col font-medium uppercase text-xs">
              <span>UI UX Web Design</span>
              <span>Cinematic Genius</span>
            </p>
          </div>
        </div>

        {/* === Socials === */}
        <div>
          <div className="hidden md:block text-xs font-medium uppercase pl-36">
            <span>Social:</span>
            <div className="flex gap-3">
              {bottomInfo.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* === Right === */}
        <div className="flex justify-end items-start">
          {/* Desktop links */}
          <div className="hidden md:flex flex-col uppercase text-xs font-medium">
            <Link href="/work" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                className="mr-2 -translate-y-1/2"
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
                className="mr-2 -translate-y-1/2"
              >
                <path
                  d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                  fill="currentColor"
                />
              </svg>
              <span>Abt</span>
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden fixed top-4 right-4 z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3 17L17 3M3 3L17 17"
                    stroke="#1F1F1F"
                    strokeWidth="2"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="burger"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <line
                    y1="14"
                    x2="20"
                    y2="14"
                    stroke="#1F1F1F"
                    strokeWidth="2"
                  />
                  <path d="M0 5H20" stroke="#1F1F1F" strokeWidth="2" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.7, // waits for text to finish exiting first
            }}
            className="md:hidden fixed inset-0 z-40 bg-[#F0E8D8] flex flex-col justify-center px-8"
          >
            {/* Links */}
            <ul className="space-y-8">
              {menuLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -30,
                    transition: {
                      delay: i * 0.1, // stagger bottom to top
                      duration: 0.5,
                      ease: "easeIn",
                    },
                  }}
                  transition={{
                    delay: 0.5 + i * 0.12,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-bold uppercase text-black tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: -20,
                transition: { delay: 0.35, duration: 0.4, ease: "easeIn" },
              }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-10 left-8 text-xs uppercase font-mono text-black/50 space-y-1"
            >
              <p>
                <a href={`mailto:${bottomInfo.email}`}>{bottomInfo.email}</a>
              </p>
              <div className="flex gap-4 pt-1">
                {bottomInfo.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
