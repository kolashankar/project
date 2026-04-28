import Hero from '../components/Hero';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Academics from '../components/Academics';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Facilities />
      <Academics />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </div>
  );
}
