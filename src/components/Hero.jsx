import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[70vh] md:h-[80vh]">
        <Spline
          scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-28 relative">
        <div className="md:max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            AI Automation & Development
          </h1>
          <p className="mt-5 text-gray-600 md:text-lg">
            We design calm, efficient AI systems that streamline operations and ship modern digital products — without the noise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white text-sm font-medium hover:bg-black transition-colors">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
              What we do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
