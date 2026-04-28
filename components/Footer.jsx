import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060b19] relative z-10 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="flex items-center gap-4 mb-6">
              <img
                src="https://scontent.fcdp1-1.fna.fbcdn.net/v/t39.30808-1/494305642_122109020786840889_6472348970957712294_n.jpg?stp=c56.118.968.968a_dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=s5re9lr-Ax8Q7kNvwEPOBwv&_nc_oc=Adpa3kya_jBHQ4U9A-j7M23uExUipyoAnBABOpcGTxmCdJRFhji88p5jHC-fjWOwLVJj3x5TAAHIM3m9LFpHa3qb&_nc_zt=24&_nc_ht=scontent.fcdp1-1.fna&_nc_gid=Gb_1yYBa7xWqk5NlJshPLQ&_nc_ss=7b289&oh=00_Af1zv3vxzYKP-5seaeTSzS-weB2O9_Hs0FbKUr2xqYBUkQ&oe=69F63924"
                alt="Gnan Vihaar Logo"
                className="w-16 h-16 rounded-full border-2 border-primary object-cover shadow-lg shadow-primary/20"
                crossOrigin="anonymous"
              />
              <div>
                <h2 className="font-bold text-2xl text-white">Gnan Vihaar</h2>
                <p className="text-primary text-xs font-bold tracking-widest uppercase mt-1">English Medium High School</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Shaping future leaders with excellence through a premium blend of modern infrastructure, expert faculty, and traditional educational values in Kadapa.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/Gnan-Vihar-School-Kadapa/61575226696569/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-[#030712] hover:border-primary transition-all">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-[#030712] hover:border-primary transition-all">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-[#030712] hover:border-primary transition-all">
                <FaTwitter size={22} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 md:col-start-7">
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors inline-block">About Us</Link></li>
              <li><Link href="#facilities" className="text-muted-foreground hover:text-primary transition-colors inline-block">Premium Facilities</Link></li>
              <li><Link href="#academics" className="text-muted-foreground hover:text-primary transition-colors inline-block">Academics & Curriculum</Link></li>
              <li><Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors inline-block">Campus Gallery</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors inline-block">Contact Support</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h3 className="font-bold text-xl mb-6 text-white">Admissions</h3>
            <ul className="space-y-4">
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors inline-block">Admission Process 2025-26</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors inline-block">Fee Structure & Plans</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors inline-block">Frequently Asked Questions</a></li>
            </ul>
            <a
              href="https://wa.me/918688009537?text=Hello%20I%20want%20admission%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-primary text-[#030712] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(229,176,92,0.3)]"
            >
              Apply Now via WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gnan Vihaar English Medium High School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
