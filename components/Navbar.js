"use client";

import React, { useState, useEffect } from "react";
import Header from '@/components/Header'; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 
        ${scrolled ? " bg-white/90 shadow-xl" : "bg-white/60"}
      `}
    >
      <Header/>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="flex items-center justify-between h-20 ">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight text-indigo-600">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ y: -3 }}>
                <Link
                  href={link.href}
                  className={`relative px-1 font-bold text-[16px] font-medium transition duration-200 ${pathname === link.href
                      ? "text-black text-indigo-600 "
                      : "text-gray-600 hover:text-black"
                    }`}
                >
                  {link.label}

                  {/* Active underline */}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute  left-0 -bottom-1 h-[2px] w-full bg-black rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {!isMobileMenuOpen ? (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.25 }}
                >
                  <X size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow-inner border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-[16px] rounded-lg font-medium transition ${pathname === link.href
                        ? "bg-gray-100 text-black"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
