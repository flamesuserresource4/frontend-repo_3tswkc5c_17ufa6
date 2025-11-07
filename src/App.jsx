import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Axiom AI — Automation & Development</p>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#work" className="hover:text-gray-900">Work</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}
