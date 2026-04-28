"use client";
import { motion } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Building2 } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Interactive digital boards and ergonomic seating for highly focused, modern learning.",
      icon: <MonitorPlay className="w-8 h-8 text-primary" />,
      image: "https://customer-assets.emergentagent.com/job_gnan-elite-space/artifacts/f8sixpoi_Screenshot%20from%202026-04-28%2014-58-38.png",
    },
    {
      title: "Science Labs",
      desc: "State-of-the-art equipment for hands-on, practical scientific exploration.",
      icon: <FlaskConical className="w-8 h-8 text-primary" />,
      image: "https://customer-assets.emergentagent.com/job_gnan-elite-space/artifacts/xddr7kai_Screenshot%20from%202026-04-28%2014-58-24.png",
    },
    {
      title: "Pre-Primary Area",
      desc: "Vibrant, creative spaces designed exclusively for the safe growth of young minds.",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      image: "https://customer-assets.emergentagent.com/job_gnan-elite-space/artifacts/e0j0qkxz_Screenshot%20from%202026-04-28%2014-58-49.png",
    },
    {
      title: "Modern Infrastructure",
      desc: "Premium, secure, and highly disciplined environment providing the utmost comfort.",
      icon: <Building2 className="w-8 h-8 text-primary" />,
      image: "https://customer-assets.emergentagent.com/job_gnan-elite-space/artifacts/wt2zgr0c_Screenshot%20from%202026-04-28%2014-58-18.png",
    },
  ];

  return (
    <section id="facilities" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Premium <span className="gold-gradient-text drop-shadow-md">Facilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Experience world-class infrastructure designed to optimize focus, safety, and holistic student development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 aspect-[4/5] cursor-pointer shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent group-hover:via-[#030712]/40 transition-all duration-500"></div>
              </div>
              
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end transform translate-z-20">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all">
                  {fac.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{fac.title}</h3>
                <p className="text-muted-foreground text-sm font-medium">{fac.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
