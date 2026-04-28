"use client";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Parent",
      text: "Gnan Vihaar has completely transformed my child's approach to learning. The smart facilities are top-notch and the teachers are incredibly supportive. I've seen massive improvements in just one year.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1749353709877-8ce1be961500?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBhZHVsdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzM2NjMxNHww&ixlib=rb-4.1.0&q=85"
    },
    {
      name: "Sneha Reddy",
      role: "Alumni",
      text: "The academic foundation I received here helped me secure admission into a premier engineering college. The rigorous curriculum and dedicated staff are truly grateful.",
      rating: 5,
      image: "https://images.pexels.com/photos/7580822/pexels-photo-7580822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      name: "Venkat Rao",
      role: "Parent",
      text: "Impressed with the smart classrooms and the highly practical approach to science. My daughter loves going to school every day and eagerly talks about her lab experiments.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBhZHVsdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzM2NjMxNHww&ixlib=rb-4.1.0&q=85"
    },
    {
      name: "Priya Sharma",
      role: "Parent",
      text: "A perfect blend of traditional values and ultra-modern education. The sports facilities are excellent, ensuring my children develop both physically and intellectually.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1528082414335-adbd64f18d12?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBwYXJlbnQlMjBzbWlsaW5nJTIwZmFjZXxlbnwwfHx8fDE3NzczNjYzMTl8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      name: "Anil Desai",
      role: "Parent",
      text: "The immense focus on holistic development and character building is what truly sets Gnan Vihaar apart from others. Highly recommend it to all prospective parents in the city.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1728015401182-1c715f133d5d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBhZHVsdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzM2NjMxNHww&ixlib=rb-4.1.0&q=85"
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-[#0c1631]/30 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Parents <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from our community about their enriching experiences with Gnan Vihaar.
          </p>
        </div>
      </div>

      <div className="w-full relative py-4">
        {/* Gradients for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>

        <Marquee speed={40} pauseOnHover={true} gradient={false} className="py-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card w-[350px] md:w-[450px] mx-4 p-8 flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < t.rating ? "text-primary fill-primary" : "text-muted"}
                    />
                  ))}
                </div>
                <p className="text-foreground/90 italic mb-8 leading-relaxed text-lg">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">{t.name}</h4>
                  <p className="text-sm text-primary font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
