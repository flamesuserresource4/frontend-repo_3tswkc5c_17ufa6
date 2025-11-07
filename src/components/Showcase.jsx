export default function Showcase() {
  const logos = ['Stripe', 'Notion', 'Slack', 'Shopify', 'HubSpot', 'Zapier'];

  return (
    <section id="work" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Recent work</h2>
          <p className="text-sm text-gray-500">Selected platforms and tools we integrate</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {logos.map((name) => (
            <div key={name} className="flex items-center justify-center rounded-xl border border-black/5 bg-white py-6 text-gray-700">
              <span className="text-sm">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-black/5 bg-gradient-to-br from-white to-gray-50 p-8">
          <p className="text-gray-700 max-w-3xl">
            We build automations that sit invisibly within your stack—human-friendly interfaces on top, reliable systems beneath. The goal is not to look more technical. It’s to feel simpler.
          </p>
        </div>
      </div>
    </section>
  );
}
