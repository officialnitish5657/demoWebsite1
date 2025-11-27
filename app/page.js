"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import About from "@/app/about/page";
import Projects from "./projects/page";
import DegreeSection from "@/components/DegreeSection";

export default function Home() {
  const images = ["/bg_1.jpg", "/bg_2.jpg",];

  const content = [
    {
      title: "Crafting Modern, Clean & High-Quality Websites",
      desc: "I specialize in building fast, responsive, and elegant digital experiences using Next.js, React, and modern UI/UX principles.",
    },
    {
      title: "Transforming Ideas Into Powerful Digital Products",
      desc: "From sleek interfaces to optimized performance, I deliver solutions that look great and work even better.",
    },

  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-[#00043c] flex items-center justify-center">

        {/* Background Images */}
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0.6, scale: 1, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -800 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt="Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* TEXT AREA */}
        <div className="relative z-10 max-w-2xl p-6 text-center mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                {content[current].title}
              </h1>

              <p className="text-lg md:text-xl text-blue-200 font-semibold mb-6 drop-shadow-xl leading-relaxed">
                {content[current].desc}
              </p>

              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-white text-black rounded-xl text-lg hover:scale-95 font-semibold shadow-xl hover:bg-gray-200 transition">
                  View My Work
                </button>

                <button className="px-6 py-3 border-4 border-blue-700  hover:scale-95  text-blue-600 rounded-xl text-lg font-semibold shadow-xl hover:bg-blue-700 hover:text-white transition">
                  Contact Me
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <Projects/>
      <About />
      {/* <DegreeSection/> inhance design  */}


    </>
  );
}
