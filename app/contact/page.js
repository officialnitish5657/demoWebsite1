"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10"
            >
                {/* LEFT SIDE PANEL */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white shadow-xl rounded-2xl p-10 border border-gray-200"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Let’s Connect
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        I'm always open to discussing new projects, opportunities, or
                        collaborations. Feel free to reach out—I'll get back to you soon!
                    </p>

                    {/* CONTACT INFORMATION */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-4">
                            <Mail className="text-black" />
                            <span className="text-lg text-gray-700">
                                nitish.parjapat@example.com
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="text-black" />
                            <span className="text-lg text-gray-700">+91 9876543210</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <MapPin className="text-black" />
                            <span className="text-lg text-gray-700">Udaipur, India</span>
                        </div>
                    </div>

                    {/* SOCIAL LINKS */}
                    <h3 className="text-xl font-semibold mt-10 mb-4">Follow Me</h3>
                    <div className="flex gap-4 mt-6">
                        {/* LinkedIn */}
                        <a
                            href="#"
                            className="p-3 rounded-xl shadow-md bg-[#0A66C2] text-white hover:brightness-110 transition"
                        >
                            <Linkedin size={22} />
                        </a>

                        {/* GitHub */}
                        <a
                            href="#"
                            className="p-3 rounded-xl shadow-md bg-black text-white hover:bg-gray-800 transition"
                        >
                            <Github size={22} />
                        </a>

                        {/* Instagram */}
                        <a
                            href="#"
                            className="p-3 rounded-xl shadow-md text-white transition rounded-xl"
                            style={{
                                background:
                                    "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                            }}
                        >
                            <Instagram size={22} />
                        </a>
                    </div>
                </motion.div>


                {/* CONTACT FORM */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Send a Message
                    </h2>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-gray-800 transition"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
}
