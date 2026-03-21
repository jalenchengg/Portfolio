"use client";

import { AnimatePresence, motion } from "framer-motion";
import { clients, ClientKey } from "@/app/data/clients";

type Props = {
  active: ClientKey;
  setActive: (key: ClientKey) => void;
  mobile?: boolean;
};

export default function FilterColumn({ active, setActive, mobile }: Props) {
  const client = clients[active];

  // Mobile — horizontal scrolling pill filters
  if (mobile) {
    return (
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-none">
        {Object.keys(clients).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key as ClientKey)}
            className={`shrink-0 text-xs uppercase font-mono transition-opacity ${
              active === key ? "opacity-100" : "opacity-30"
            }`}
          >
            {clients[key as ClientKey].name}
          </button>
        ))}
      </div>
    );
  }

  // Desktop — vertical sticky filter
  return (
    <div className="sticky top-[60px] text-black">
      <div>
        <p className="text-xs uppercase font-mono mb-4 opacity-40">Filter</p>
        <ul className="space-y-2 text-xs uppercase font-mono m-2">
          {Object.keys(clients).map((key) => (
            <li
              key={key}
              onClick={() => setActive(key as ClientKey)}
              className={`cursor-pointer transition-opacity ${
                active === key ? "opacity-100" : "opacity-30 hover:opacity-60"
              }`}
            >
              {clients[key as ClientKey].name}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-black/20 pt-4 mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs uppercase font-mono mb-1">{client.name}</p>
            <p className="text-xs leading-relaxed opacity-50">
              {client.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
