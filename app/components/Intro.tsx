"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const letters = "VARIARE".split("");

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center">

            {/* Logo */}
            <div className="relative flex overflow-hidden">

              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-heading text-5xl uppercase text-white md:text-7xl"
                  style={{
                    marginRight:
                      index !== letters.length - 1 ? "0.22em" : 0,
                  }}
                >
                  {letter}
                </motion.span>
              ))}

              {/* Light Sweep */}
              <motion.div
                initial={{ x: "-140%" }}
                animate={{ x: "180%" }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-lg"
              />
            </div>

            {/* Divider */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 120,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              className="mt-6 h-px bg-white/70"
            />

            {/* Tagline */}
            <motion.p
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.25,
                duration: 0.6,
              }}
              className="mt-5 text-[10px] uppercase tracking-[0.45em] text-neutral-400"
            >
              Handmade Luxury
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}