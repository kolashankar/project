"use client";
import { motion } from "framer-motion";

export default function Academics() {
  const steps = [
    { 
      year: "Pre-Primary", 
      title: "Foundation Stage", 
      desc: "Play-way method focusing on motor skills, creativity, and basic cognitive development in a highly interactive and nurturing environment.",
      image: "https://images.unsplash.com/photo-1544605481-9b161f364e7c?auto=format&fit=crop&w=600&q=80"
    },
    { 
      year: "Primary", 
      title: "Discovery Stage", 
      desc: "Encouraging curiosity through interactive, activity-based learning that bridges theoretical concepts with real-world applications.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
    },
    { 
      year: "Middle", 
      title: "Development Stage", 
      desc: "Building strong fundamentals in core subjects while integrating essential co-curricular activities and character-building exercises.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80"
    },
    { 
      year: "High School", 
      title: "Excellence Stage", 
      desc: "Board-focused, rigorous academic preparation with a dedicated emphasis on career readiness, leadership, and competitive exams.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    },
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
            A comprehensive, world-class curriculum designed to thoughtfully nurture intellect, creativity, and character at every stage of growth.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2 hidden md:block"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center mb-20 md:mb-12 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 rounded-full bg-[#030712] border-4 border-primary z-10 items-center justify-center shadow-[0_0_15px_rgba(229,176,92,0.5)]">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                <div className="glass-card overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="h-48 sm:h-56 relative overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1631] to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <span className="text-primary font-bold text-sm uppercase tracking-wider bg-[#030712]/80 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/30">
                        {step.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
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
