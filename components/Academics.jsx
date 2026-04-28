"use client";
import { motion } from "framer-motion";

export default function Academics() {
  const steps = [
    { year: "Pre-Primary", title: "Foundation Stage", desc: "Play-way method focusing on motor skills and basic cognition." },
    { year: "Primary", title: "Discovery Stage", desc: "Encouraging curiosity through interactive and activity-based learning." },
    { year: "Middle", title: "Development Stage", desc: "Building strong fundamentals in core subjects and co-curriculars." },
    { year: "High School", title: "Excellence Stage", desc: "Board-focused preparation with emphasis on career readiness." },
  ];

  return (
    <section id="academics" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive curriculum designed to nurture intellect and character at every stage of growth.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-row`}
            >
              <div className="w-10 h-10 absolute left-[0px] md:left-1/2 -translate-x-[0px] md:-translate-x-1/2 rounded-full bg-background border-4 border-primary z-10"></div>
              
              <div className={`ml-14 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="glass-card p-6 border-l-4 border-l-primary md:border-l-0 md:border-t-4 md:border-t-primary">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">{step.year}</span>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
