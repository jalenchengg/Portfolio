// components/Button.tsx
import { motion } from "framer-motion";
import { FC } from "react";

interface ButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
}

const Button: FC<ButtonProps> = ({ isActive, toggleMenu }) => {
  return (
    <div className="absolute w-24 h-8 pt-0 uppercase cursor-pointer overflow-hidden">
      <motion.div
        className="relative w-full h-full justify-center items-center"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="w-full h-full flex" onClick={toggleMenu}>
          <PerspectiveText label="Menu" />
        </div>
        <div className="w-full h-full flex" onClick={toggleMenu}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

interface PerspectiveTextProps {
  label: string;
}

const PerspectiveText: FC<PerspectiveTextProps> = ({ label }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full transform-gpu transition-transform duration-700 ease-custom">
      <p className="transition-transform duration-700 ease-custom">{label}</p>
      <p className="absolute transform -rotate-x-90 opacity-0 transition-transform duration-700 ease-custom">
        {label}
      </p>
    </div>
  );
};

export default Button;
