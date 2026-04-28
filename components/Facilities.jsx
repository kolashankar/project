"use client";
import { motion } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Trophy } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Interactive digital boards and ergonomic seating for optimal learning.",
      icon: <MonitorPlay className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    },
    {
      title: "Modern Library",
      desc: "Extensive collection of books in a quiet, focused environment.",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1693921398753-c5d114e8ae6a",
    },
    {
      title: "Science Labs",
      desc: "State-of-the-art equipment for hands-on scientific exploration.",
      icon: <FlaskConical className="w-6 h-6 text-primary" />,
      image: "https://images.pexels.com/photos/8539652/pexels-photo-8539652.jpeg",
    },
    {
      title: "Sports & Playground",
      desc: "Premium turf and facilities for physical development and sports.",
      icon: <Trophy className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1710000736115-692bbb897fca",
    },
  ];

  return (
    <section id="facilities" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our campus is equipped with world-class infrastructure to support every aspect of student development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/10 aspect-[4/5] cursor-pointer perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 transform translate-z-10">
                  {fac.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 transform translate-z-20">{fac.title}</h3>
                <p className="text-muted-foreground text-sm transform translate-z-10">{fac.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
