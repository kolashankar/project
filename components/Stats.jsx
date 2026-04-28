"use client";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { count: 1000, label: "Students Educated", suffix: "+" },
    { count: 95, label: "Pass Rate", suffix: "%" },
    { count: 15, label: "Years Experience", suffix: "+" },
    { count: 50, label: "Expert Faculty", suffix: "+" },
  ];

  return (
    <section className="py-20 relative z-10" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-primary/20 shadow-[0_0_40px_rgba(212,175,55,0.05)] relative overflow-hidden">
          {/* Subtle background glow inside the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="text-center flex flex-col items-center justify-center border-r last:border-r-0 border-white/10"
              >
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md">
                  {isInView && (
                    <CountUp start={0} end={stat.count} duration={2.5} separator="," />
                  )}
                  <span className="text-primary">{stat.suffix}</span>
                </h3>
                <p className="text-muted-foreground font-semibold text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
