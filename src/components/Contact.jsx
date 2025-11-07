import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks — we\'ll reach out shortly.');
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/5 bg-white p-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Let\'s talk</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Share a bit about your project. We\'ll reply within one business day.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input required className="col-span-1 md:col-span-1 rounded-xl border border-black/10 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" placeholder="Name" />
            <input required type="email" className="col-span-1 md:col-span-1 rounded-xl border border-black/10 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" placeholder="Email" />
            <input className="col-span-1 md:col-span-1 rounded-xl border border-black/10 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" placeholder="Company" />
            <textarea required className="col-span-1 md:col-span-3 rounded-xl border border-black/10 bg-gray-50 px-4 py-3 h-36 outline-none focus:ring-2 focus:ring-gray-900" placeholder="Tell us about your goals" />
            <div className="col-span-1 md:col-span-3 flex items-center justify-between gap-3">
              <p className="text-sm text-gray-600">No spam. No hard sell. Just thoughtful answers.</p>
              <button type="submit" className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-white text-sm font-medium hover:bg-black transition-colors">Send</button>
            </div>
          </form>

          {status && (
            <p className="mt-4 text-sm text-green-700">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
}
