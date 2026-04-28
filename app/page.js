import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Facilities from '../components/Facilities';
import DayInSchool from '../components/DayInSchool';
import Academics from '../components/Academics';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <About />
      <Facilities />
      <DayInSchool />
      <Academics />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}
