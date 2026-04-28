"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        {null}
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 glass text-primary font-medium tracking-wide text-sm">
            Admissions Open 2025-26
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Shaping Future <br />
            <span className="gold-gradient-text">Leaders with Excellence</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience world-class education with premium facilities, nurturing young minds for a brighter tomorrow at Gnan Vihaar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918688009537?text=Hello%20I%20want%20admission%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(229,176,92,0.4)]"
            >
              Get Admission Details
            </a>
            <a
              href="#facilities"
              className="w-full sm:w-auto px-8 py-4 glass border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Explore Campus
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
