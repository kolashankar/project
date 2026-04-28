"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Offset added because of the top sticky bar
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Academics", href: "#academics" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-[44px] md:top-[44px] w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-2 -top-0 md:-top-0 border-b border-white/10" : "bg-gradient-to-b from-[#030712]/80 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <img
              src="https://scontent.fcdp1-1.fna.fbcdn.net/v/t39.30808-1/494305642_122109020786840889_6472348970957712294_n.jpg?stp=c56.118.968.968a_dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=s5re9lr-Ax8Q7kNvwEPOBwv&_nc_oc=Adpa3kya_jBHQ4U9A-j7M23uExUipyoAnBABOpcGTxmCdJRFhji88p5jHC-fjWOwLVJj3x5TAAHIM3m9LFpHa3qb&_nc_zt=24&_nc_ht=scontent.fcdp1-1.fna&_nc_gid=Gb_1yYBa7xWqk5NlJshPLQ&_nc_ss=7b289&oh=00_Af1zv3vxzYKP-5seaeTSzS-weB2O9_Hs0FbKUr2xqYBUkQ&oe=69F63924"
              alt="Logo"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          <div className="font-bold text-xl md:text-2xl leading-tight text-white drop-shadow-md">
            Gnan Vihaar
            <span className="block text-[10px] text-primary font-bold uppercase tracking-widest">
              English Medium High School
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-200 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="https://wa.me/918688009537?text=Hello%20I%20want%20admission%20details"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-[#030712] px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            Admissions Open
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="absolute top-full left-0 w-full glass-card border-t border-white/10 md:hidden flex flex-col py-4 px-6 gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-white py-2 border-b border-white/5 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/918688009537?text=Hello%20I%20want%20admission%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-[#030712] text-center px-6 py-3 rounded-xl font-bold mt-4 shadow-lg"
            >
              Admissions Open 2026
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
