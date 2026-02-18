import { PageMeta } from '../components/PageMeta';

export function Advisory() {
  return (
    <div className="min-h-screen pt-24">
      <PageMeta
        title="Cambiar Advisory — AI Transformation Consulting"
        description="Enterprise AI transformation consulting, managed development services, and government modernization. Practitioners, not theorists."
      />

      {/* Hero */}
      <section className="bg-warm-cream py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="mb-6">Cambiar Advisory</h1>
          <p className="font-['Inter'] text-[19px] text-text-gray max-w-3xl mx-auto leading-relaxed">
            AI transformation for organizations that can't afford to get it wrong.
          </p>
        </div>
      </section>

      {/* How May We Help You */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="mb-12 text-center">How may we help you?</h2>
          <p className="font-['Inter'] font-medium text-[18px] text-warm-charcoal mb-16 leading-relaxed text-center max-w-4xl mx-auto">
            Whether you're a small company, big company, PE portfolio of companies, non-profit, or startup, we can help by:
          </p>

          <div className="space-y-8">
            {/* Step 1: AI Audit */}
            <div className="bg-warm-cream rounded-[4px] p-8 border-l-4 border-deep-amber">
              <div className="flex items-start gap-4">
                <div className="font-['JetBrains_Mono'] text-4xl text-deep-amber font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="mb-3 text-warm-charcoal">AI Audit & Planning</h3>
                  <p className="text-text-gray text-[16px] leading-relaxed mb-4">
                    Know where you stand before you commit capital. We diagnose organizational readiness, assess what you're using, identify what else you can use, and build roadmaps you can actually execute — not slide decks that gather dust.
                  </p>
                  <p className="text-text-gray text-[15px] leading-relaxed italic">
                    What are you using? What else can you use? Make a plan from the audit.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Off-the-Shelf AI */}
            <div className="bg-warm-cream rounded-[4px] p-8 border-l-4 border-deep-amber">
              <div className="flex items-start gap-4">
                <div className="font-['JetBrains_Mono'] text-4xl text-deep-amber font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="mb-3 text-warm-charcoal">Deploy Off-the-Shelf AI</h3>
                  <p className="text-text-gray text-[16px] leading-relaxed mb-4">
                    Fast wins with proven tools. We help you deploy and integrate best-in-class AI solutions without creating liability.
                  </p>
                  <div className="flex flex-wrap gap-3 text-[14px] text-warm-charcoal">
                    <span className="bg-white px-3 py-1 rounded">Anthropic</span>
                    <span className="bg-white px-3 py-1 rounded">Fin</span>
                    <span className="bg-white px-3 py-1 rounded">Figma</span>
                    <span className="bg-white px-3 py-1 rounded">Gamma</span>
                    <span className="bg-white px-3 py-1 rounded">Google</span>
                    <span className="bg-white px-3 py-1 rounded">Granola</span>
                    <span className="bg-white px-3 py-1 rounded">OpenClaw</span>
                    <span className="bg-white px-3 py-1 rounded">Pine</span>
                    <span className="bg-white px-3 py-1 rounded">Superhuman</span>
                    <span className="bg-white px-3 py-1 rounded">Warp</span>
                    <span className="bg-white px-3 py-1 rounded">Vercel</span>
                    <span className="bg-white px-3 py-1 rounded">xAI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: The Pattern - Bi-Facing */}
            <div className="bg-warm-cream rounded-[4px] p-8 border-l-4 border-deep-amber">
              <div className="flex items-start gap-4">
                <div className="font-['JetBrains_Mono'] text-4xl text-deep-amber font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="mb-3 text-warm-charcoal">Implement <i><b>The Pattern</b></i></h3>
                  <p className="text-text-gray text-[16px] leading-relaxed">
                    The Pattern is a quick Cambiar strategy that delivers an internal and external door to your company via AI. Employees can chat with and use AI to manage internal systems. Customers can chat with and use AI to get help with or use your products. Quick-hit + everyone-wins.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Inward Facing */}
            <div className="bg-warm-cream rounded-[4px] p-8 border-l-4 border-deep-amber">
              <div className="flex items-start gap-4">
                <div className="font-['JetBrains_Mono'] text-4xl text-deep-amber font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="mb-3 text-warm-charcoal">Inward Facing: Integrated AI-Powered Culture, Solutions, and Process</h3>
                  <p className="text-text-gray text-[16px] leading-relaxed mb-4">
                    Replace disaggregated SaaS, on-premise, or custom software with new AI-powered, custom, integrated solutions that work together.
                  </p>
                  <p className="text-text-gray text-[15px] leading-relaxed">
                    We restructure operations for AI-native work — culture, process, and incentives. Technology is easy. Transforming how people work is the real challenge.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5: Outward Facing */}
            <div className="bg-warm-cream rounded-[4px] p-8 border-l-4 border-deep-amber">
              <div className="flex items-start gap-4">
                <div className="font-['JetBrains_Mono'] text-4xl text-deep-amber font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="mb-3 text-warm-charcoal">Outward Facing: Become the AI-Powered Vendor</h3>
                  <p className="text-text-gray text-[16px] leading-relaxed mb-4">
                    Help you become the AI-powered software vendor in your industry or niche before a competitor does.
                  </p>
                  <p className="text-text-gray text-[15px] leading-relaxed">
                    Enterprise-grade output at startup speed. We achieve both because we've built the systems to do it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cambiar */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="mb-12 text-center">Why Cambiar</h2>
          <p className="font-['Inter'] font-medium text-[18px] text-warm-charcoal mb-12 leading-relaxed text-center max-w-4xl mx-auto">
            Enterprise AI transformation isn't a technology project — it's an organizational one. We bring the operational experience to help you answer the questions that actually matter.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[4px] p-6 border-l-4 border-deep-amber">
              <h4 className="mb-2 text-warm-charcoal">Deploy AI without creating liability.</h4>
              <p className="text-text-gray text-[15px] leading-relaxed">
                Governance isn't bureaucracy — it's how you scale without the failures that make headlines.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-6 border-l-4 border-deep-amber">
              <h4 className="mb-2 text-warm-charcoal">See what the target company can't tell you about itself.</h4>
              <p className="text-text-gray text-[15px] leading-relaxed">
                AI readiness assessments for acquisitions that go deeper than the data room.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-6 border-l-4 border-deep-amber">
              <h4 className="mb-2 text-warm-charcoal">Prioritize transformation spend across the portfolio.</h4>
              <p className="text-text-gray text-[15px] leading-relaxed">
                Not every company needs the same intervention. We help you allocate where it matters.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-6 border-l-4 border-deep-amber">
              <h4 className="mb-2 text-warm-charcoal">Specification-driven development.</h4>
              <p className="text-text-gray text-[15px] leading-relaxed">
                Clear requirements, test-driven approaches, auditable AI-assisted code generation. The discipline that separates production systems from prototypes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PE/Family Office Engagement Model */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="mb-4">How We Engage with PE Firms & Family Offices</h3>
          <p className="font-['Inter'] text-[16px] text-text-gray mb-8 leading-relaxed">
            From audit to execution, we apply our 5-step process across your entire portfolio.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h4 className="mb-3 text-deep-amber">One relationship, portfolio-wide impact.</h4>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Master service agreements that scale across companies without renegotiating every engagement.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h4 className="mb-3 text-deep-amber">See the whole board.</h4>
              <p className="text-text-gray text-[16px] leading-relaxed">
                AI readiness across your portfolio — so you know where to push and where to hold.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h4 className="mb-3 text-deep-amber">We work with your team, not around them.</h4>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Collaboration over displacement. We embed capability, then get out of the way.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h4 className="mb-3 text-deep-amber">Repeatable frameworks accelerate time to value.</h4>
              <p className="text-text-gray text-[16px] leading-relaxed">
                We've seen the patterns. You benefit from that recognition.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h4 className="mb-3 text-deep-amber">We put capital where our advice is.</h4>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Venture opportunities create shared upside beyond fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Development Services */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="mb-6">Managed Development Services</h2>
          <p className="font-['Inter'] font-medium text-[18px] text-warm-charcoal mb-12 leading-relaxed">
            Whether you're implementing "The Pattern," building integrated internal solutions, or becoming an AI-powered software vendor — we deliver the development velocity you need without compromising quality. Our global team works across the Americas, EMEA, and APAC so your projects move continuously.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="mb-4 text-deep-amber">Continuous coverage, not time-zone roulette.</h4>
              <p className="text-text-gray text-[16px] leading-relaxed mb-8">
                Teams across three regions working in synchronized shifts. When your San Francisco team logs off, your work doesn't stop.
              </p>

              <h4 className="mb-4 text-deep-amber">Momentum compounds.</h4>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Seamless handoffs enabled by comprehensive project memory. Progress doesn't pause when you sleep.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-deep-amber">Specification-driven development, not vibe coding.</h4>
              <p className="text-text-gray text-[16px] leading-relaxed mb-8">
                Clear requirements, test-driven approaches, auditable AI-assisted code generation. The discipline that separates production systems from prototypes.
              </p>

              <h4 className="mb-4 text-deep-amber">Enterprise-grade output at startup speed.</h4>
              <p className="text-text-gray text-[16px] leading-relaxed">
                We don't sacrifice quality for velocity. We achieve both because we've built the systems to do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Government & Defense */}
      <section className="bg-midnight-navy text-warm-cream py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-warm-cream mb-6">Government & Defense</h2>
          <p className="font-['Inter'] font-medium text-[18px] text-warm-cream mb-8 leading-relaxed">
            Federal, state, and defense AI modernization — by people who hold active credentials.
          </p>

          <div className="bg-warm-charcoal/50 rounded-[4px] p-8 border border-muted-gold/20">
            <p className="text-warm-cream text-[16px] leading-relaxed mb-4">
              Both founders are NASA SCIFLI Imaging Specialists. We understand mission-critical deployment, procurement, compliance, and the constraints that make government work different. When we say we know this environment, we're not pitching — we're doing it.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="font-['JetBrains_Mono'] text-3xl text-deep-amber mb-2">NASA</div>
              <p className="text-warm-cream text-[14px]">Active SCIFLI credentials</p>
            </div>
            <div className="text-center">
              <div className="font-['JetBrains_Mono'] text-3xl text-deep-amber mb-2">FedRAMP</div>
              <p className="text-warm-cream text-[14px]">Compliance expertise</p>
            </div>
            <div className="text-center">
              <div className="font-['JetBrains_Mono'] text-3xl text-deep-amber mb-2">Mission</div>
              <p className="text-warm-cream text-[14px]">Critical deployment experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}