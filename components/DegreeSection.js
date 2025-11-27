"use client";

import { motion } from "framer-motion";

export default function DegreeSection() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-10"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 bg-white rounded-xl shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            🎓 Bachelor of Computer Science (BCS)
          </h3>

          <p className="text-gray-600 mt-2 text-lg">2023 – 2026</p>

          <p className="text-gray-700 mt-6 leading-relaxed">
            I am currently pursuing my <b>BCS degree</b> where I’m building a strong
            foundation in modern software development, programming principles, and
            web technologies. My course focuses on both theory and practical
            industry-based skills that help me grow as a developer.
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              📘 What I'm Learning
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
              <li>• Web Development — React, Next.js, Tailwind</li>
              <li>• Data Structures & Algorithms</li>
              <li>• Database Management (SQL / MySQL)</li>
              <li>• Object-Oriented Programming</li>
              <li>• Computer Networks</li>
              <li>• Operating Systems & Software Engineering</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              🚀 Skills I’ve Developed
            </h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Clean & structured coding style</li>
              <li>Responsive UI/UX building</li>
              <li>Understanding software architecture</li>
              <li>Working with APIs & backend logic</li>
              <li>Problem solving & logical thinking</li>
              <li>Version control with Git & GitHub</li>
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
