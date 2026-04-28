"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, Award, BookCheck } from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <Users />, count: 1200, label: "Happy Students", suffix: "+" },
    { icon: <Award />, count: 100, label: "Pass Percentage", suffix: "%" },
    { icon: <GraduationCap />, count: 25, label: "Years Excellence", suffix: "+" },
    { icon: <BookCheck />, count: 50, label: "Expert Faculty", suffix: "+" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Us?</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center border-t-2 border-t-primary/50"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">
                {isInView && (
                  <CountUp start={0} end={stat.count} duration={2.5} separator="," />
                )}
                <span className="text-primary">{stat.suffix}</span>
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
