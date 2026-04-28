"use client";
import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Our Mission",
      desc: "To empower students with holistic education, fostering critical thinking and character building.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Our Vision",
      desc: "To be a leading institution globally recognized for excellence in academic and personal growth.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Core Values",
      desc: "Integrity, excellence, respect, and innovation drive everything we do at Gnan Vihaar.",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-primary">Gnan Vihaar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We blend traditional values with modern educational approaches to create an environment where every child thrives.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
