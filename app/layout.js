import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MouseGlow from '../components/MouseGlow';
import StickyBar from '../components/StickyBar';

export const metadata = {
  title: 'Gnan Vihaar English Medium High School',
  description: 'Where Future Leaders Are Built',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden text-foreground bg-gradient-shift">
        <MouseGlow />
        <StickyBar />
        <Navbar />
        <main className="flex-1 pt-14 md:pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
