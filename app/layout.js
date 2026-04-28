import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MouseGlow from '../components/MouseGlow';
import StickyBar from '../components/StickyBar';

export const metadata = {
  title: 'Gnan Vihaar English Medium High School',
  description: 'Building Discipline. Creating Leaders.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden text-foreground">
        <MouseGlow />
        <StickyBar />
        <Navbar />
        {/* Adjusted padding to account for fixed StickyBar and Navbar */}
        <main className="flex-1 pt-[44px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
