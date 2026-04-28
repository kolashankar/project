"use client";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, Sparkles, Box, Cone, Torus } from "@react-three/drei";
import { motion } from "framer-motion";

function FloatingObjects() {
  return (
    <>
      {/* Representing a Book */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-3, 1, -2]}>
        <Box args={[1.2, 1.6, 0.2]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={0.8} />
        </Box>
      </Float>
      
      {/* Representing an abstract Graduation Cap / Achievement */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2} position={[3, 2, -3]}>
        <Cone args={[1, 1.5, 4]} rotation={[3.14, 0.5, 0]}>
          <meshStandardMaterial color="#3b82f6" roughness={0.1} metalness={0.5} wireframe />
        </Cone>
      </Float>

      {/* Representing abstract connectivity/global reach */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5} position={[2, -2, -1]}>
        <Torus args={[0.8, 0.2, 16, 32]} rotation={[1, 0, 0]}>
          <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={0.9} />
        </Torus>
      </Float>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={2} color="#ffffff" />
          <pointLight position={[-2, -2, -2]} intensity={1} color="#D4AF37" />
          <FloatingObjects />
          <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.3} color="#D4AF37" />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block px-5 py-2 mb-8 rounded-full glass border border-primary/40 text-primary font-bold tracking-widest text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            🌟 Admissions Open for 2026 — Limited Seats Available
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Where <span className="gold-gradient-text drop-shadow-lg">Future Leaders</span> <br />
            Are Built.
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
            Join the top-tier international standard school in Kadapa. Experience world-class academics, premium facilities, and a track record of shaping champions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/918688009537?text=Hello%20I%20want%20admission%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow w-full sm:w-auto px-10 py-5 bg-primary text-[#030712] rounded-full font-extrabold text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.5)] border-2 border-transparent hover:border-white"
            >
              Get Admission via WhatsApp
            </a>
            <a
              href="#facilities"
              className="w-full sm:w-auto px-10 py-5 glass border border-white/20 rounded-full font-bold text-xl hover:bg-white/10 hover:border-white/40 transition-all"
            >
              Explore Campus
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom gradient to blend into next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
    </section>
  );
}
