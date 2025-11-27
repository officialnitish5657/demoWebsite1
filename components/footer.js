"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            YourName<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Student Developer crafting modern, responsive, and engaging
            websites using Next.js, React & Tailwind CSS.
          </p>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </motion.div>

        {/* EDUCATION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
          <p className="text-gray-400 mb-2">
            🎓 <b> Bachelor of Computer Science (BCS)</b>
          </p>
          <p className="text-gray-400">2023 – 2026</p>
          <p className="text-gray-500 text-sm mt-2">
            Learning modern web development, programming, and software design.
          </p>
        </motion.div>

        {/* SOCIAL MEDIA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Connect With Me
          </h3>

          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-6 h-6 hover:text-white transition" />
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-6 h-6 hover:text-white transition" />
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-6 h-6 hover:text-white transition" />
            </Link>

            <Link href="https://github.com" target="_blank">
              <Github className="w-6 h-6 hover:text-white transition" />
            </Link>

            <Link href="mailto:youremail@gmail.com">
              <Mail className="w-6 h-6 hover:text-white transition" />
            </Link>
          </div>
        </motion.div>

      </div>

      {/* COPYRIGHT AREA */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourName — All Rights Reserved.
      </div>
    </footer>
  );
}
