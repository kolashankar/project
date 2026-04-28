"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DayInSchool() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineItems = [
    {
      time: "08:00 AM",
      title: "Morning Assembly",
      desc: "Setting the tone for the day with discipline, prayer, and motivational speeches.",
      image: "https://customer-assets.emergentagent.com/job_gnan-elite-space/artifacts/7h5qs0v3_Screenshot%20from%202026-04-28%2014-58-03.png"
    },
    {
      time: "09:00 AM",
      title: "Core Learning",
      desc: "Focused academic sessions in our smart classrooms driven by expert faculty.",
      image: "https://customer-assets.emergentagent.com/job_gnan-elite-space/artifacts/f8sixpoi_Screenshot%20from%202026-04-28%2014-58-38.png"
    },
    {
      time: "11:30 AM",
      title: "Practical Sessions",
      desc: "Hands-on learning in our state-of-the-art science and computer labs.",
      image: "https://customer-assets.emergentagent.com/job_gnan-elite-space/artifacts/xddr7kai_Screenshot%20from%202026-04-28%2014-58-24.png"
    },
    {
      time: "02:00 PM",
      title: "Creative & Play Time",
      desc: "Holistic development through sports, arts, and interactive play sessions.",
      image: "https://customer-assets.emergentagent.com/job_gnan-elite-space/artifacts/e0j0qkxz_Screenshot%20from%202026-04-28%2014-58-49.png"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 relative z-10 bg-black/20 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            A Day at <span className="gold-gradient-text drop-shadow-md">Gnan Vihaar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Take a journey through the highly structured, engaging, and enriching daily life of our students.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 hidden md:block">
            <motion.div 
              className="absolute top-0 w-full bg-primary origin-top"
              style={{ scaleY: scrollYProgress, height: '100%' }}
            />
          </div>

          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center mb-20 md:mb-16 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 rounded-full bg-[#030712] border-4 border-primary z-10 items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                <div className="glass-card overflow-hidden group hover:border-primary/50 transition-colors shadow-2xl">
                  <div className="h-48 sm:h-64 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1631] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <span className="text-[#030712] font-extrabold text-sm uppercase tracking-wider bg-primary px-4 py-1.5 rounded-full shadow-lg">
                        {item.time}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
