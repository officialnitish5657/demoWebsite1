"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectView({
  title,
  description,
  features,
  tech,
  github,
  live,
  image,
}) {
  return (
    <section className="w-full mt-20 py-20 bg-[#A855F7]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-600 leading-relaxed max-w-3xl"
        >
          {description}
        </motion.p>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[400px] md:h-[480px] rounded-xl overflow-hidden shadow-xl mt-10"
        >
          <Image src={image} alt="Project Banner" fill className="object-cover" />
        </motion.div>

        {/* Project Info Section */}
        <div className="grid md:grid-cols-2 gap-12 mt-14">

          {/* KEY FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Key Features</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              {features.map((f, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-blue-600 text-xl">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TECH STACK */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white border rounded-xl shadow-sm text-gray-800 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-4 mt-14"
        >
          {/* GitHub */}
          <Link
            href={github}
            target="_blank"
            className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition"
          >
            <Github className="w-5 h-5" />
            <span>View GitHub</span>
          </Link>

          {/* Live Link */}
          <Link
            href={live}
            target="_blank"
            className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Project</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
