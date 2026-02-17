import { PageMeta } from '../components/PageMeta';

export function AIDevsourcing() {
  return (
    <div className="min-h-screen pt-24">
      <PageMeta
        title="AI Devsourcing — Agentic Engineering Teams | Cambiar"
        description="AI Developer Agents managed by follow-the-sun Agentic Engineering teams. 2x the quality, half the cost. Spec-driven, test-driven, anti-slop development."
      />

      {/* Hero */}
      <section className="bg-warm-cream py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="mb-6">AI Devsourcing</h1>
          <p className="font-['Inter'] text-[19px] text-text-gray max-w-3xl mx-auto leading-relaxed">
            AI Developer Agents managed by Cambiar's follow-the-sun Agentic Engineering teams.
            <span className="block mt-4 font-semibold text-warm-charcoal">2× the quality. ½ the cost.</span>
          </p>
        </div>
      </section>

      {/* Global Teams */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="mb-8">Follow-the-Sun Engineering</h2>
          <p className="text-text-gray text-[17px] leading-relaxed mb-12 max-w-3xl">
            Our Agentic Engineering teams span four continents, ensuring your development never stops. Human engineers orchestrate AI agents around the clock — reviewing, refining, and shipping production-ready code while you sleep.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-warm-cream rounded-[4px] p-6 border-t-4 border-deep-amber text-center">
              <h3 className="mb-2 text-[18px]">California</h3>
              <p className="text-text-gray text-[14px] leading-relaxed">
                Architecture & technical leadership. Client coordination.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-6 border-t-4 border-deep-amber text-center">
              <h3 className="mb-2 text-[18px]">Argentina</h3>
              <p className="text-text-gray text-[14px] leading-relaxed">
                Full-stack development. Real-time overlap with US timezones.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-6 border-t-4 border-deep-amber text-center">
              <h3 className="mb-2 text-[18px]">Kenya</h3>
              <p className="text-text-gray text-[14px] leading-relaxed">
                Backend systems & API development. EU timezone coverage.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-6 border-t-4 border-deep-amber text-center">
              <h3 className="mb-2 text-[18px]">Philippines</h3>
              <p className="text-text-gray text-[14px] leading-relaxed">
                QA, testing & integration. APAC timezone coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Methodology */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="mb-12 text-center">Anti-Slop Development Methodology</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">Spec-Driven Development</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Every feature starts with a machine-readable specification. AI agents work from precise contracts — not vague tickets. The spec is the source of truth, ensuring consistent output across human and AI contributors.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">Test-Driven Development</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Tests are written before implementation. AI agents generate code that must pass the test suite — no exceptions. This eliminates the "looks right but doesn't work" failure mode of traditional AI coding.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">One-Shot Delivery</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Our methodology targets single-iteration success. Specs + tests + context = code that works the first time. No back-and-forth. No "slop" requiring endless revision cycles.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">Human-in-the-Loop Review</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Every AI-generated commit is reviewed by a senior engineer before merge. We combine AI speed with human judgment — catching edge cases, security issues, and architectural drift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Toolchain */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-4 text-center">Our Agentic Toolchain</h2>
          <p className="font-['Inter'] text-[16px] text-text-gray text-center mb-16 max-w-2xl mx-auto">
            Purpose-built tools for disciplined AI-native development.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-warm-cream rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">GitHub SpecKit</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Specification management integrated directly into GitHub. Define contracts, track implementation status, and generate agent prompts from specs.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Eliminates ambiguity between what's requested and what's built.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Deft UNIVERSE</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Deft Systems' complete agentic development platform. Orchestrates multiple AI models, manages context windows, and ensures consistent code style across agents.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Enterprise-grade agent orchestration for production codebases.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Roo Code</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Autonomous coding agent with deep codebase understanding. Handles complex refactors, feature implementation, and bug fixes with minimal human guidance.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                The workhorse agent for day-to-day development tasks.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">vContext</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Evolving standards for agentic coding context. Ensures AI agents have the right information at the right time — no more, no less.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                The foundation for reproducible AI-generated code.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Warp Terminal</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                AI-native terminal for agent orchestration. Our engineers use Warp to supervise, guide, and course-correct AI agents in real-time.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Human-AI collaboration at the command line.
              </p>
            </div>

            <div className="bg-warm-cream rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Custom Agent Pipelines</h3>
              <p className="text-text-gray text-[15px] leading-relaxed mb-3">
                Client-specific workflows built on our core toolchain. Integrate with your CI/CD, match your code standards, and work within your security requirements.
              </p>
              <p className="text-deep-amber text-[14px] italic">
                Your process, supercharged with agentic automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-midnight-navy text-warm-cream py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-warm-cream mb-8 text-center">The Economics</h2>
          
          <div className="bg-warm-charcoal/50 rounded-[4px] p-10 border border-muted-gold/20 mb-8">
            <p className="font-['Playfair_Display'] italic text-[20px] text-warm-cream leading-relaxed text-center">
              "Traditional outsourcing trades quality for cost. AI without humans produces slop. 
              We've solved for both — engineering that's faster, cheaper, and better."
            </p>
            <p className="text-muted-gold text-center mt-4 text-[14px]">— Jonathan Taylor, Co-Founder</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-[48px] text-muted-gold mb-2">2×</p>
              <p className="text-warm-cream text-[16px]">Code Quality</p>
              <p className="text-warm-cream/70 text-[14px] mt-2">Spec + test driven methodology eliminates rework</p>
            </div>

            <div className="text-center">
              <p className="font-['Playfair_Display'] text-[48px] text-muted-gold mb-2">50%</p>
              <p className="text-warm-cream text-[16px]">Cost Reduction</p>
              <p className="text-warm-cream/70 text-[14px] mt-2">AI agents do the heavy lifting, humans provide judgment</p>
            </div>

            <div className="text-center">
              <p className="font-['Playfair_Display'] text-[48px] text-muted-gold mb-2">24/7</p>
              <p className="text-warm-cream text-[16px]">Development Velocity</p>
              <p className="text-warm-cream/70 text-[14px] mt-2">Follow-the-sun teams keep your project moving</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="mb-6">Ready to Transform Your Development?</h2>
          <p className="text-text-gray text-[17px] leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you need to accelerate a product launch, scale your engineering capacity, or modernize a legacy codebase — our Agentic Engineering teams deliver results.
          </p>
          <a
            href="/contact"
            className="bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200 inline-block"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
