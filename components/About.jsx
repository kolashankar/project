"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Welcome to <br />
              <span className="gold-gradient-text drop-shadow-md">Gnan Vihaar</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Gnan Vihaar English Medium High School, we believe that education goes beyond textbooks. We blend traditional values with world-class, ultra-modern educational approaches to create an environment where every child thrives academically, socially, and emotionally.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our campus is designed to be a second home for students, providing them with the right tools, state-of-the-art facilities, and a supportive community of expert educators to shape them into the leaders of tomorrow.
            </p>
            <a
              href="#facilities"
              className="inline-block px-8 py-3 bg-primary/10 text-primary border border-primary/50 rounded-full font-bold hover:bg-primary hover:text-[#030712] transition-colors"
            >
              Discover Our Campus
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card border-white/20 aspect-video md:aspect-[4/3] z-10 shadow-2xl shadow-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1592066575517-58df903152f2" 
                alt="Gnan Vihaar School Campus" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-primary/20 backdrop-blur-md border border-primary/30 text-white px-4 py-2 rounded-full inline-block font-semibold mb-3">
                  Est. 2000
                </div>
                <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">Nurturing Excellence</h3>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/30 rounded-3xl z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-white/10 rounded-3xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
