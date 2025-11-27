"use client";

import { Mail, Phone, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className=" w-full bg-[#00043c] text-gray-300 py-3 border-b border-gray-800">
      <div className="max-w-7xl mx-auto lg:px-13 px-4 flex items-center justify-between">

        {/* LEFT SECTION — CONTACT DETAILS */}
        <div className="flex items-center space-x-6 text-sm">

          {/* Email */}
          <Link
            href="mailto:yourmail@gmail.com"
            className="flex items-center font-semibold space-x-1 hover:text-white transition"
          >
            <Mail className="w-4 h-4" />
            <span>yourmail@gmail.com</span>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+91XXXXXXXXXX"
            className="flex items-center font-semibold space-x-1 hover:text-white transition"
          >
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </Link>

        </div>

        {/* RIGHT SECTION — SOCIAL MEDIA ICONS */}
        <div className="hidden md:flex items-center space-x-8">

          <Link href="https://facebook.com" target="_blank">
            <Facebook className="w-5 h-5 hover:text-white transition" />
          </Link>

          <Link href="https://instagram.com" target="_blank">
            <Instagram className="w-5 h-5 hover:text-white transition" />
          </Link>

          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="w-5 h-5 hover:text-white transition" />
          </Link>

          <Link href="https://github.com" target="_blank">
            <Github className="w-5 h-5 hover:text-white transition" />
          </Link>

        </div>

      </div>
    </div>
  );
}
