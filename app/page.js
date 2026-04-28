import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Stats from '../components/Stats';
import About from '../components/About';
import Facilities from '../components/Facilities';
import DayInSchool from '../components/DayInSchool';
import Academics from '../components/Academics';
import Journey from '../components/Journey';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <TrustSection />
      <About />
      <Facilities />
      <DayInSchool />
      <Academics />
      <Journey />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}
