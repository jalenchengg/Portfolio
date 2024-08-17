import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";

export default function Index() {
  return (
    <div className="flex flex-col justify-between p-[100px_40px_50px_40px] h-full box-border">
      <div className="flex flex-col gap-2.5">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              className="perspective-[120px] perspective-bottom"
            >
              <motion.a
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a className="text-black text-[46px] no-underline">{title}</a>
              </motion.a>
            </div>
          );
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              href={href}
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              className="w-1/2 mt-1.5"
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
