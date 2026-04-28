"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, GraduationCap, Users, HeartHandshake } from "lucide-react";

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: <GraduationCap className="w-10 h-10 text-primary" />,
      title: "Experienced Teachers",
      desc: "Top-tier faculty dedicated to nurturing every student's unique potential."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Safe Campus",
      desc: "24/7 security, disciplined environment, and premium child safety protocols."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Strong Academic Results",
      desc: "Consistent 95%+ pass rates and top ranks in state and national boards."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-primary" />,
      title: "Holistic Development",
      desc: "Perfect balance of academics, sports, and character-building activities."
    }
  ];

  return (
    <section className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Why Parents <span className="gold-gradient-text drop-shadow-md">Trust Us</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            We don't just educate; we take full responsibility for your child's future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 text-center flex flex-col items-center justify-center border-t-2 border-t-primary/40 group shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-[#030712] border border-primary/30 flex items-center justify-center mb-6 shadow-inner group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Wave Divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-[-1] opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-primary"></path>
        </svg>
      </div>
    </section>
  );
}
