import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 relative z-10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="https://scontent.fcdp1-1.fna.fbcdn.net/v/t39.30808-1/494305642_122109020786840889_6472348970957712294_n.jpg?stp=c56.118.968.968a_dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=s5re9lr-Ax8Q7kNvwEPOBwv&_nc_oc=Adpa3kya_jBHQ4U9A-j7M23uExUipyoAnBABOpcGTxmCdJRFhji88p5jHC-fjWOwLVJj3x5TAAHIM3m9LFpHa3qb&_nc_zt=24&_nc_ht=scontent.fcdp1-1.fna&_nc_gid=Gb_1yYBa7xWqk5NlJshPLQ&_nc_ss=7b289&oh=00_Af1zv3vxzYKP-5seaeTSzS-weB2O9_Hs0FbKUr2xqYBUkQ&oe=69F63924"
                alt="Logo"
                className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                crossOrigin="anonymous"
              />
              <div>
                <h2 className="font-bold text-2xl">Gnan Vihaar</h2>
                <p className="text-primary text-sm font-medium tracking-wider uppercase">English Medium High School</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Shaping future leaders with excellence through a blend of modern education and traditional values.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#facilities" className="text-muted-foreground hover:text-primary transition-colors">Facilities</Link></li>
              <li><Link href="#academics" className="text-muted-foreground hover:text-primary transition-colors">Academics</Link></li>
              <li><Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Admissions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Admission Process</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fee Structure</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
            </ul>
            <a
              href="https://wa.me/918688009537?text=Hello%20I%20want%20admission%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-primary/20 text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gnan Vihaar English Medium High School. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
