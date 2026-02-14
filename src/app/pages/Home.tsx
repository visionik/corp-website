import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export function Home() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Cambiar — AI-Native Advisory & Venture Studio"
        description="Advisory at the speed of change. AI transformation consulting, managed development, and venture building for PE firms, family offices, startups, and government."
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-warm-cream px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* C Lettermark */}
          <div className="mb-8">
            <span className="font-['Playfair_Display'] font-bold text-[200px] md:text-[280px] leading-none text-warm-charcoal">
              C
            </span>
          </div>

          {/* Brand Name */}
          <div className="mb-6">
            <h1 className="font-['Inter'] font-semibold text-2xl tracking-[8px] uppercase text-warm-charcoal">
              CAMBIAR
            </h1>
          </div>

          {/* Tagline */}
          <p className="font-['Playfair_Display'] italic text-[28px] text-warm-charcoal mb-4">
            Change. Causality. <em>c</em>.
          </p>

          {/* Description */}
          <p className="font-['Inter'] text-[16px] text-text-gray mb-8 max-w-2xl mx-auto">
            Advisory at the speed of light.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/advisory"
              className="bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200"
            >
              Our Advisory
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-[1.5px] border-warm-charcoal text-warm-charcoal px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-warm-charcoal hover:text-warm-cream transition-all duration-200"
            >
              Meet the Founders
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 animate-bounce">
          <ChevronDown className="text-warm-charcoal opacity-40" size={32} />
        </div>
      </section>

      {/* The Rate of Change is the Challenge Section */}
      <section className="bg-midnight-navy text-warm-cream py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-warm-cream mb-8 text-center">
            The Rate of Change is the Challenge
          </h2>

          <p className="font-['Playfair_Display'] italic text-[24px] text-warm-cream max-w-4xl mx-auto mb-8 text-center leading-relaxed">
            The world is changing. The question is whether you can change with it.
          </p>

          <p className="font-['Inter'] text-[17px] text-warm-cream max-w-4xl mx-auto mb-16 text-center leading-relaxed">
            Every technology wave rewards the organizations that move decisively — and punishes those that wait for certainty. The internet. Cloud. Mobile. AI is the next wave, and it's arriving faster than any before it.
          </p>

          <p className="font-['Inter'] text-[17px] text-warm-cream max-w-4xl mx-auto mb-12 text-center leading-relaxed">
            But speed alone isn't enough. The organizations that thrive will be the ones that understand <em>why</em> transformation matters — not just <em>how</em> to implement tools. They'll match the rate of change with clarity of purpose, operational discipline, and advisors who've navigated these transitions before.
          </p>

          <p className="font-['Inter'] text-[17px] text-warm-cream max-w-4xl mx-auto mb-16 text-center leading-relaxed">
            That's why Cambiar exists. Not to sell you AI. To help you become the kind of organization that can absorb change continuously — at the speed the world now demands.
          </p>

          {/* Insight Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-warm-charcoal mb-4">Acceleration</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                AI compresses timelines. Decisions that used to take quarters now take weeks. Organizations that can't match that tempo fall behind.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-warm-charcoal mb-4">Uncertainty</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                Geopolitical fragmentation, supply chain disruption, regulatory divergence — the operating environment is structurally less predictable. Adaptability beats planning.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-warm-charcoal mb-4">Leverage</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                The gap between AI-native organizations and everyone else is widening. The window to cross that gap is narrowing.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to="/advisory"
              className="bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center mb-4">Who We Serve</h2>
          <p className="font-['Inter'] text-[18px] text-text-gray text-center mb-16">
            Five interconnected segments. One unified approach.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Private Equity</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                Your portfolio companies need to transform faster than your competitors' portfolio companies. We help you create that advantage — fund-wide, not deal-by-deal.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Family Offices</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                You want a trusted advisor who'll still be relevant in ten years, not a vendor chasing the next hype cycle. We build long-term relationships because we think long-term.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Startups</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                You need to ship, not wait. Our global team works while you sleep — continuous development across the Americas, EMEA, and APAC so momentum never stops.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Government & Defense</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                Modernization mandates are real. So are the constraints. We hold active NASA credentials and understand mission-critical deployment from the inside.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <h3 className="mb-3">Non-Profit & Impact</h3>
              <p className="text-text-gray text-[15px] leading-relaxed">
                Selected engagements for organizations doing work that matters. Not charity — partnership on missions we believe in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Founders Preview Section */}
      <section className="bg-warm-cream py-24 px-6 border-t border-warm-charcoal/10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center mb-4">Built by Builders</h2>
          <p className="font-['Inter'] text-[17px] text-text-gray text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Cambiar was founded by two operators who've spent 30+ years building, scaling, and exiting technology companies — through every major disruption since the dot-com era. Between them: 7 companies started, 6 sold, 21 acquired. Exits to Cisco, Aspect, SmartRent, Serent Capital. Operations on five continents.
          </p>

          <p className="font-['Inter'] text-[17px] text-text-gray text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            And both are active NASA SCIFLI Imaging Specialists — photographing spacecraft reentry and rocket launches at 20,000 frames per second. When we say we work at the edge of what's possible, we mean it literally.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Jason Goecke */}
            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-2">Jason Goecke — Co-Founder</h3>
              <p className="font-['Inter'] text-[15px] text-text-gray mb-6 leading-relaxed">
                VP/GM at Intel and Cisco. CEO of Tropo (→ Cisco). NASA SCIFLI. Writes <em>Dispatches From the Edge of Now.</em>
              </p>
              <Link
                to="/about"
                className="text-deep-amber hover:text-warm-charcoal font-['Inter'] text-[15px] transition-colors border-b border-deep-amber hover:border-warm-charcoal"
              >
                Full bio →
              </Link>
            </div>

            {/* Jonathan Taylor */}
            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-2">Jonathan Taylor — Co-Founder</h3>
              <p className="font-['Inter'] text-[15px] text-text-gray mb-6 leading-relaxed">
                7 companies started, 6 sold, 21 acquired. Voxeo (→ Aspect), Tropo (→ Cisco), PhotoDay (→ Serent). NASA SCIFLI.
              </p>
              <Link
                to="/about"
                className="text-deep-amber hover:text-warm-charcoal font-['Inter'] text-[15px] transition-colors border-b border-deep-amber hover:border-warm-charcoal"
              >
                Full bio →
              </Link>
            </div>
          </div>

          {/* What is SCIFLI */}
          <div className="bg-midnight-navy rounded-[4px] p-10 text-warm-cream">
            <h3 className="text-warm-cream mb-4">What is SCIFLI?</h3>
            <p className="font-['Inter'] text-[16px] leading-relaxed">
              NASA's Scientifically Calibrated In-Flight Imagery program captures high-speed optical data during spacecraft reentry, rocket launches, and experimental flight tests. Both Cambiar founders are active imaging specialists supporting these missions — work that demands precision, real-time coordination, and zero margin for error.
            </p>
          </div>
        </div>
      </section>

      {/* Cambiar Studio Preview */}
      <section className="bg-warm-cream py-24 px-6 border-t border-warm-charcoal/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Cambiar Studio</h2>
              <p className="font-['Inter'] font-medium text-[18px] text-warm-charcoal mb-4 leading-relaxed">
                We don't just advise on transformation — we build alongside you.
              </p>
              <p className="text-text-gray text-[16px] mb-8 leading-relaxed">
                Cambiar Studio is a separate venture entity that incubates companies, takes equity positions, 
                and offers co-investment opportunities to PE and Family Office partners. Each portfolio company 
                is structured as a Delaware C-Corp for clean governance and QSBS eligibility.
              </p>
              <Link
                to="/studio"
                className="bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200 inline-block"
              >
                Explore the Studio →
              </Link>
            </div>
            <div className="bg-midnight-navy rounded-[4px] p-12 text-warm-cream">
              <p className="font-['Inter'] text-[17px] leading-relaxed">
                "We exist at the intersection of transformation consulting and venture building. 
                Our studio model allows us to have real skin in the game — building the future we advise about."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}