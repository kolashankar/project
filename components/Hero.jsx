"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from 'react-player';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* YouTube Video Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      >
        <div className="absolute inset-0 w-[300vw] h-[300vh] -left-[100vw] -top-[100vh] md:w-[150vw] md:h-[150vh] md:-left-[25vw] md:-top-[25vh]">
           {isClient && (
             <ReactPlayer
                url="https://www.youtube.com/watch?v=8Nhv22nd8qM"
                playing
                loop
                muted
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
                config={{
                  youtube: {
                    playerVars: { 
                      showinfo: 0, controls: 0, rel: 0, modestbranding: 1, fs: 0, iv_load_policy: 3 
                    }
                  }
                }}
             />
           )}
        </div>
      </motion.div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#030712]/70 via-[#0c1631]/80 to-[#030712]"></div>

      {/* Hero Content */}
      <div className="container relative z-20 mx-auto px-4 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-6 py-2 mb-8 rounded-full glass-card border border-primary/40 text-white font-bold tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-xl"
          >
            ⭐ Admissions Open for 2026 — Limited Seats Available
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-[1.1] tracking-tight relative inline-block text-white">
            Building Discipline.<br />
            <span className="gold-gradient-text drop-shadow-2xl">Creating Leaders.</span>
            
            {/* Animated Glow Underline */}
            <motion.div 
              className="absolute -bottom-2 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mt-10 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg"
          >
            Give your child the best future at the most premium educational institution in Kadapa.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="https://wa.me/918688009537?text=Hello%20I%20want%20admission%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow w-full sm:w-auto px-10 py-5 bg-primary text-[#030712] rounded-full font-extrabold text-xl hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] border-2 border-primary hover:bg-yellow-400"
            >
              Get Admission via WhatsApp
            </a>
            <a
              href="#facilities"
              className="w-full sm:w-auto px-10 py-5 glass border-2 border-white/30 rounded-full font-bold text-xl hover:bg-white/10 hover:-translate-y-1 hover:border-white transition-all shadow-xl text-white"
            >
              Explore Campus
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold">Scroll</span>
        <motion.div 
          className="w-[2px] h-16 bg-gradient-to-b from-primary to-transparent"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
