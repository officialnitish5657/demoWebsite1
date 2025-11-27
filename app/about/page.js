"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full  bg-[#F2F3F7] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 mb-12"
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <Image
              src="/bg_2.jpg" // replace with your image
              alt="Profile"
              width={450}
              height={450}
              className="rounded-2xl shadow-xl object-cover grayscale brightness-150"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              I'm a Passionate Frontend Developer 🚀
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I specialize in creating modern, fast, and visually stunning web
              applications using <span className="font-semibold">Next.js, React, Tailwind CSS, and Framer Motion</span>.
              My focus is delivering smooth user experiences combined with clean,
              maintainable code.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I love turning ideas into real digital products — whether it’s a
              portfolio, startup landing page, or a full-scale web application.
              My goal is to build interfaces that users love and businesses trust.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition">
                View My Projects
              </button>

              <button className="px-6 py-3 border border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>

        {/* SKILLS */}
        <div className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-10"
          >
            My Skills & Expertise
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            {[
              "Next.js Development",
              "React.js Development",
              "Tailwind CSS",
              "UI / UX Design",
              "Framer Motion Animations",
              "API Integration",
              "Responsive Design",
              "Performance Optimization",
              "Git & Github",
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg p-6 rounded-2xl text-center font-semibold text-gray-800 hover:shadow-xl hover:-translate-y-2 transition"
              >
                {skill}
              </motion.div>
            ))}

          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-10"
          >
            Experience & Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
              <p className="text-gray-700 mb-4">
                Worked on multiple client projects building responsive,
                modern, and dynamic web applications using React & Next.js.
              </p>
              <span className="text-sm text-gray-500">2022 - Present</span>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-2">UI/UX Designer</h3>
              <p className="text-gray-700 mb-4">
                Designed beautiful and intuitive user interfaces for websites,
                dashboards, and mobile-first experiences.
              </p>
              <span className="text-sm text-gray-500">2021 - Present</span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
