"use client";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.pexels.com/photos/8500643/pexels-photo-8500643.jpeg",
    "https://images.pexels.com/photos/33745700/pexels-photo-33745700.jpeg",
    "https://images.unsplash.com/photo-1710000853460-3650bada0d37",
    "https://images.pexels.com/photos/6684506/pexels-photo-6684506.jpeg",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    "https://images.unsplash.com/photo-1710000736115-692bbb897fca"
  ];

  return (
    <section id="gallery" className="py-24 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Campus <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground">Glimpses of life at Gnan Vihaar.</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden glass"
            >
              <img
                src={src}
                alt="Gallery item"
                className="w-full h-auto hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
