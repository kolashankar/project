"use client";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Parent",
      text: "Gnan Vihaar has completely transformed my child's approach to learning. The facilities are top-notch and the teachers are incredibly supportive.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "Alumni",
      text: "The foundation I received here helped me secure admission into a premier engineering college. Truly grateful to the management.",
      rating: 5,
    },
    {
      name: "Venkat Rao",
      role: "Parent",
      text: "Impressed with the smart classrooms and the practical approach to science. My daughter loves going to school every day.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Parent",
      text: "A perfect blend of traditional values and modern education. The sports facilities are excellent.",
      rating: 4,
    },
    {
      name: "Anil Desai",
      role: "Parent",
      text: "The focus on holistic development is what sets Gnan Vihaar apart. Highly recommend it to all parents.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Parents <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from our community about their experiences with Gnan Vihaar.
          </p>
        </div>
      </div>

      <div className="w-full relative py-4">
        {/* Gradients for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-background to-transparent z-10"></div>

        <Marquee speed={40} pauseOnHover={true} gradient={false} className="py-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card w-[350px] md:w-[450px] mx-4 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < t.rating ? "text-primary fill-primary" : "text-muted"}
                    />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 leading-relaxed">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-primary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
