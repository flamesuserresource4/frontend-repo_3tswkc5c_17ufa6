import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-gray-900 text-lg">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-900 align-middle" />
            Axiom AI
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center rounded-full border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
              Book a call
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#services" className="block text-gray-700">Services</a>
            <a onClick={() => setOpen(false)} href="#work" className="block text-gray-700">Work</a>
            <a onClick={() => setOpen(false)} href="#about" className="block text-gray-700">About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="inline-flex items-center rounded-full border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">Book a call</a>
          </div>
        )}
      </div>
    </header>
  );
}
