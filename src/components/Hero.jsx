import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative" aria-label="AI-PHEN Hero">
      <div className="relative h-screen bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]">
              <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-white/10 to-yellow-200/10 blur-2xl" aria-hidden />

              <p className="text-xs sm:text-sm uppercase tracking-widest text-white/70">Built for People Who Hate Wasting Time</p>

              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
                We Build AI & Automation That <span className="text-[#E7CD2F]">Perform</span>, Not Pretend.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-white/80">
                Lead Gen. Workflow Automation. AI Systems — Built for Results.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black"
                  style={{
                    background: 'linear-gradient(135deg, #F1DF68 0%, #E7CD2F 60%, #C1A900 100%)',
                    boxShadow: '0 10px 30px rgba(231,205,47,0.35), 0 0 0 1px rgba(231,205,47,0.35) inset',
                  }}
                >
                  Let’s Make It Work
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute z-0 -top-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-yellow-200/20 to-transparent blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute z-0 top-24 -right-12 h-32 w-56 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" aria-hidden />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
            className="relative h-[40vh] sm:h-[50vh] lg:h-[70vh]"
          >
            <Spline
              scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  );
}
