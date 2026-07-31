"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("hasSeenIntro", "true");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              letterSpacing: "-0.3em",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              letterSpacing: "0.25em",
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-heading text-5xl uppercase text-white md:text-7xl"
          >
            VARIARE
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}