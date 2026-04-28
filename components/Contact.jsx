"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Our Location",
      desc: "Mahaveer Circle, Gandhinagar, Nagarajupeta, Gandhi Nagar, Kadapa, Andhra Pradesh 516001",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      desc: "+91 8688009537",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      desc: "info@gnanvihaar.edu.in", // Placeholder
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Working Hours",
      desc: "Mon - Sat: 8:00 AM - 5:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We are here to answer any questions you may have about admissions or our curriculum.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="glass-card p-6 flex flex-col items-start hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-l-primary">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready for Admission?</h3>
                <p className="text-muted-foreground">Reach out to our admissions team directly via WhatsApp.</p>
              </div>
              <a
                href="https://wa.me/918688009537?text=Hello%20I%20want%20admission%20details"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold whitespace-nowrap hover:bg-[#128C7E] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-2 rounded-3xl overflow-hidden h-[400px] lg:h-auto min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.108528938933!2d78.8248383!3d14.4740263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3720072abdf11%3A0xc07a8cb4fb1bc0a9!2sGnan%20Vihar%20EM%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1.5rem", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
