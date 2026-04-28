"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const milestones = [
    {
      year: "2000",
      title: "Foundation Laid",
      desc: "Gnan Vihaar was established with a vision to bring premium education to Kadapa."
    },
    {
      year: "2010",
      title: "Campus Expansion",
      desc: "Upgraded to a state-of-the-art facility featuring modern labs and smart classrooms."
    },
    {
      year: "2018",
      title: "Academic Excellence Award",
      desc: "Recognized as one of the top performing schools in the district for board results."
    },
    {
      year: "2026",
      title: "Next-Gen Infrastructure",
      desc: "Continuous evolution integrating technology, sports, and holistic programs."
    }
  ];

  return (
    <section ref={containerRef} className="py-24 relative z-10 bg-[#060b19]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
            Our <span className="gold-gradient-text drop-shadow-md">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Over two decades of shaping leaders and setting new benchmarks in education.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
               className="w-full bg-primary origin-top"
               style={{ scaleY: scrollYProgress, height: '100%' }}
             />
          </div>

          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Year Marker */}
              <div className="absolute left-[8px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#030712] border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"} pl-12 md:pl-0`}>
                <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform border-l-4 md:border-l-0 border-primary md:border-t-4 shadow-xl">
                  <h4 className="text-primary text-2xl font-black mb-2">{milestone.year}</h4>
                  <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
