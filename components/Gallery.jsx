"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "https://images.pexels.com/photos/7743256/pexels-photo-7743256.jpeg",
    "https://images.pexels.com/photos/8539652/pexels-photo-8539652.jpeg",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc2Nob29sfGVufDB8fHx8MTc3NzM2NjQwOXww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1654626565292-10f85a1fad76?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBtb3JuaW5nJTIwYXNzZW1ibHl8ZW58MHx8fHwxNzc3MzY5NTkyfDA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/7743255/pexels-photo-7743255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.unsplash.com/photo-1553777907-f5dbbbb44d7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxzdHVkZW50cyUyMHBsYXlpbmclMjBzY2hvb2wlMjBwbGF5Z3JvdW5kfGVufDB8fHx8MTc3NzM2OTYwN3ww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Campus <span className="gold-gradient-text drop-shadow-md">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            A visual tour of our premium infrastructure and vibrant student life.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden glass-card cursor-pointer group relative"
              onClick={() => setSelectedImg(src)}
            >
              <img
                src={src}
                alt="Gallery item"
                className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#030712]/80 text-white px-4 py-2 rounded-full backdrop-blur-md font-medium shadow-xl">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-primary hover:text-black p-3 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              src={selectedImg}
              alt="Fullscreen view"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border border-white/20 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
