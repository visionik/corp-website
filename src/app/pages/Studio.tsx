import { PageMeta } from '../components/PageMeta';

export function Studio() {
  return (
    <div className="min-h-screen pt-24">
      <PageMeta
        title="Cambiar Ventures — Venture Building & Co-Investment"
        description="We don't just advise on transformation — we build alongside you. Portfolio ventures, co-investment, and venture partnerships."
      />

      {/* Hero */}
      <section className="bg-warm-cream py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="mb-6">Cambiar Ventures</h1>
          <p className="font-['Inter'] text-[19px] text-text-gray max-w-3xl mx-auto leading-relaxed">
            We don't just advise on transformation. We build alongside you.
          </p>
        </div>
      </section>

      {/* Ventures Model */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="mb-8">The Strategy</h2>
          <p className="text-text-gray text-[17px] leading-relaxed mb-12 max-w-3xl">
            Cambiar Ventures is a separate venture entity that incubates companies, takes equity positions, and offers co-investment opportunities to PE and Family Office partners. Each portfolio company is incorporated as a separate Delaware C-Corp for clean governance and QSBS eligibility.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-warm-cream rounded-[4px] p-8 border-t-4 border-deep-amber">
              <h3 className="mb-4">Internal Ideas</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                Ventures maintains majority ownership. Exact split based on contribution of idea originator. We build what we see missing in the market.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-8 border-t-4 border-deep-amber">
              <h3 className="mb-4">External Founders</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                Ownership ranges from 50/50 to more favorable founder terms depending on idea origin and participation. We partner, not dictate.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-8 border-t-4 border-deep-amber">
              <h3 className="mb-4">Co-Investment</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                PE and Family Office clients can invest directly in portfolio companies alongside Ventures. Shared upside, aligned incentives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Co-Invest */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="mb-12 text-center">Why Co-Invest with Cambiar Ventures?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">Operator judgment.</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                We've built and exited companies ourselves — through crashes, recessions, and platform shifts. We know which problems are real and which teams can execute.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">Aligned capital.</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                We invest alongside you, same terms. Our upside is your upside.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">Proprietary deal flow.</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Our advisory work gives us visibility into transformation gaps before they become obvious. Ventures often emerge from patterns we see working with PE firms and family offices.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">Institutional-grade structure.</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Every portfolio company is a Delaware C-Corp with clean governance. QSBS-eligible where applicable. Designed for co-investors who expect rigor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Ventures */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-4 text-center">Current Ventures</h2>
          <p className="font-['Inter'] text-[16px] text-text-gray text-center mb-16 max-w-2xl mx-auto">
            Each venture addresses a real gap we've observed in the AI transformation landscape.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">
                <a href="https://vbrief.org" target="_blank" rel="noopener noreferrer" className="text-warm-charcoal hover:text-deep-amber transition-colors">
                  vBRIEF
                </a>
              </h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Evolving standards at the heart of agentic coding.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Why it matters: AI-generated code needs structure. This is the infrastructure for disciplined AI-native development.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Ago</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Debugging tools and observability for AI systems.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Why it matters: You can't improve what you can't see. Making the black box transparent.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">VisionCal</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Calendar-centric AI that understands context.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Why it matters: Scheduling is a proxy for priorities. Intelligent time management at enterprise scale.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Data.mom</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Intelligently serving tables. Millions of them.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Why it matters: Enterprise data infrastructure that just works — without the complexity tax.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Concordantly</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                High availability coordination platform.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Why it matters: Distributed systems orchestration for the agentic era.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">DroneScale</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Scaling the American drone industry.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Why it matters: Domestic manufacturing and deployment infrastructure. Supply chain sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="bg-midnight-navy text-warm-cream py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-warm-cream mb-8 text-center">Investment Philosophy</h2>
          
          <div className="bg-warm-charcoal/50 rounded-[4px] p-10 border border-muted-gold/20 mb-8">
            <p className="font-['Playfair_Display'] italic text-[20px] text-warm-cream leading-relaxed text-center">
              "I don't subscribe to the power law theory in venture capital. All companies can succeed if given 
              enough time and support. Stress is the only thing that kills startups."
            </p>
            <p className="text-muted-gold text-center mt-4 text-[14px]">— Jonathan Taylor, Co-Founder</p>
          </div>

          <div className="space-y-6 text-warm-cream">
            <p className="text-[16px] leading-relaxed">
              We build companies we believe in. We provide them the time, capital, and operational support they need 
              to succeed. We don't chase unicorns — we build sustainable businesses that solve real problems.
            </p>

            <p className="text-[16px] leading-relaxed">
              Every portfolio company is structured as a Delaware C-Corp with clean cap tables and QSBS eligibility. 
              We believe in governance, transparency, and treating our co-investors like the partners they are.
            </p>

            <p className="text-[16px] leading-relaxed">
              This isn't a spray-and-pray venture fund. It's a studio. We're operators who build, not financiers who bet.
            </p>
          </div>
        </div>
      </section>

      {/* Co-Investment CTA */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="mb-6">Interested in Co-Investment?</h2>
          <p className="text-text-gray text-[17px] leading-relaxed mb-8 max-w-2xl mx-auto">
            We selectively offer co-investment opportunities to our advisory clients — PE firms and Family Offices 
            who understand the businesses we're building because they're navigating the same transformation.
          </p>
          <a
            href="/contact"
            className="bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}