export default function Services() {
  const items = [
    {
      title: 'Automation Systems',
      desc: 'Workflows that remove repetitive tasks across support, ops, and growth using robust, observable pipelines.'
    },
    {
      title: 'Custom AI Products',
      desc: 'Design and build AI-powered apps and internal tools that feel minimal, fast, and brand-aligned.'
    },
    {
      title: 'Data & Integrations',
      desc: 'Connect CRMs, data sources, and third-party APIs with clean interfaces and reliable syncs.'
    },
    {
      title: 'Advisory & R&D',
      desc: 'Roadmaps, model selection, and proof-of-concepts to de-risk adoption and accelerate delivery.'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">We combine automation, product thinking, and careful execution to deliver outcomes that scale quietly.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
