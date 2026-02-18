import { PageMeta } from '../components/PageMeta';

export function About() {
  return (
    <div className="min-h-screen pt-24">
      <PageMeta
        title="About Cambiar — Our Story & Founders"
        description="Founded by Jason Goecke and Jonathan Taylor. 30+ years building, scaling, and exiting technology companies. Now navigating the AI transformation era."
      />

      {/* Hero */}
      <section className="bg-warm-cream py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="mb-6 text-center">To Change</h1>
          <p className="font-['Playfair_Display'] italic text-[28px] text-warm-charcoal text-center max-w-3xl mx-auto">
            Cambiar. Spanish for 'to change.' Not as a buzzword — as a lived practice.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="mb-12">Our Story</h2>

          <div className="space-y-6">
            <p className="text-text-gray text-[17px] leading-relaxed">
              Cambiar was born from a simple observation: the organizations that need AI transformation the most are often the least equipped to navigate it. Private equity firms see the competitive imperative but lack specialized transformation partners. Family offices want trusted advisors, not transactional consultants. Government agencies face modernization mandates without the expertise to execute safely. And startups need velocity without sacrificing quality.
            </p>

            <p className="text-text-gray text-[17px] leading-relaxed">
              We've seen this pattern before. In the late 1990s, it was the internet. In the 2000s, cloud computing. In the 2010s, SaaS and mobile. Each wave created enormous value for the organizations that understood it deeply — and destroyed those that adopted it superficially or too late. AI is the next wave, and it's arriving faster than any that came before.
            </p>

            <p className="text-text-gray text-[17px] leading-relaxed">
              The question isn't whether to adopt AI. It's whether your organization can match the rate of change the world now demands. That requires more than technology — it requires clarity about why you're transforming, discipline in how you execute, and advisors who've navigated these transitions before.
            </p>

            <p className="text-text-gray text-[17px] leading-relaxed">
              Cambiar was founded by two people who understand both. Jason Goecke and Jonathan Taylor have built, scaled, and exited technology companies through every major disruption of the last three decades. They've operated on five continents. They work with NASA. They invest in the next wave. And now they're building an advisory that combines all of that experience into something the market desperately needs: transformation expertise grounded in operational experience and a clear-eyed view of where the world is heading.
            </p>
          </div>
        </div>
      </section>

      {/* The Triple C */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center mb-16">The Triple C</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">Cambiar</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Spanish for 'to change.' Our name is our mission. We exist to help organizations match the rate of change the world now demands.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">Causality</h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                Understanding cause and effect. We don't just implement AI tools — we trace the causal chains that determine whether transformation creates lasting value or expensive technical debt.
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-8 shadow-sm">
              <h3 className="mb-4">
                <em>c</em> (Speed of Light)
              </h3>
              <p className="text-text-gray text-[16px] leading-relaxed">
                The universal constant. The fastest possible speed. We operate at the frontier — with the velocity that comes from having done this before, across multiple technology eras and economic cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Full Bios */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="mb-16 text-center">The Founders</h2>

          {/* Jason Goecke */}
          <div className="mb-20">
            <h3 className="mb-2">Jason Goecke — Co-Founder</h3>
            
            <div className="space-y-4 text-text-gray text-[16px] leading-relaxed">
              <p>
                Jason Goecke is a Fortune 100 technology executive, startup founder, investor, and photographer who 
                has spent his career at the intersection of technology, business strategy, and global operations.
              </p>

              <p>
                Most recently, Jason served as Vice President and General Manager at Intel Corporation, where he led 
                Commercial Client Software & Services and the Intel Unite business. He transformed a hardware-bundled 
                software product into a SaaS cloud-native business generating annual recurring revenue, while driving 
                a cultural and process transformation to modernize software development practices across the organization.
              </p>

              <p>
                Before Intel, Jason spent three years at Cisco as Vice President and General Manager of Collaboration, 
                leading strategic planning and management for Cisco Webex Teams, the Webex Developer Platform, and 
                Webex Assistant. He joined Cisco through the acquisition of Tropo, Inc., where he served as President 
                and CEO, growing the cloud telecom developer platform across 10 global locations spanning the US, UK, 
                Spain, China, and Singapore.
              </p>

              <p>
                Jason's international career includes five years as Country Manager for Spain and Portugal at Genesys, 
                where he built a team from the ground up, opened offices in Japan, Australia, and Spain, and created 
                strategic partnerships that endure today. He subsequently held senior roles in Barcelona, Amsterdam, 
                and San Francisco.
              </p>

              <p>
                Jason is currently a NASA SCIFLI Imaging Specialist (since November 2024), working on ground and 
                airborne scientific imaging missions. He is Managing Partner of Cultiv8 Ventures LLC, a strategic 
                advisor to multiple AI and technology startups, and a mentor with Intel Ignite. He holds five patents 
                in IP telephony and email routing, and writes 'Dispatches From the Edge of Now' on Substack.
              </p>

              <p className="font-['Inter'] font-medium text-warm-charcoal">
                Education: Fort Lewis College, Computer Science.
              </p>
            </div>
          </div>

          {/* Jonathan Taylor */}
          <div className="mb-16">
            <h3 className="mb-2">Jonathan Taylor, PcDA — Co-Founder</h3>
            
            <div className="space-y-4 text-text-gray text-[16px] leading-relaxed">
              <p>
                Jonathan Taylor is a serial entrepreneur, investor, and builder who has started seven companies, run 
                five, sold six, and acquired and integrated twenty-one others over a career spanning more than three 
                decades.
              </p>

              <p>
                Jonathan co-founded Voxeo in 1999 with a team of fourteen founders. He served as CTO (2000-2002), 
                CEO (2003-2011), and Chairman (2012-2013), guiding the company through the dot-com crash, 9/11, and 
                the 2008 financial crisis. Under his leadership, Voxeo raised $3M in angel funding and $35M in venture 
                capital, executed a management buy-back in 2003, acquired sixteen companies, and grew to become a 
                global leader in mobile customer service. Founders and employees owned 80% of Voxeo at exit when 
                Aspect Software acquired the company in 2013. Investors received approximately 30% IRR.
              </p>

              <p>
                Jonathan also co-founded Tropo, spinning it out of Voxeo in 2009. As Chairman, he focused on strategic 
                planning, negotiations, and M&A. Cisco acquired Tropo in May 2015, delivering investors a 
                greater-than-100% IRR.
              </p>

              <p>
                Today, Jonathan is Executive Chairman and Co-Founder of Sighthound, an AI and computer vision company 
                whose ALPR technology processes over one billion customer images per year, and whose Redactor privacy 
                tool is used by more than 500 cities, universities, and government entities. He is Co-Founder and 
                Board Member of PhotoDay, which grew from zero to $50M+ in sales — a record pace among all companies 
                he has built or invested in — before selling a majority stake to Serent Capital in June 2025.
              </p>

              <p>
                Jonathan has been a NASA Langley Research Center Imaging Specialist since August 2022, working with 
                NASA SCIFLI on ground and airborne scientific imaging missions. He is Managing Partner of Zendicate 
                Ventures ($500K-$5M investments), Founder of Entrenext Hatchery (incubating AI ventures including{' '}
                <a href="https://vbrief.org" target="_blank" rel="noopener noreferrer" className="text-deep-amber hover:underline">vBRIEF</a>, Ago, VisionCal, Data.mom, and Concordantly), and Co-Founder of DroneScale.
              </p>

              <p>
                His civic contributions include serving on the Board of the Dr. Phillips Center for the Performing 
                Arts (2012-2025) and single-handedly defeating a $20M+ political action committee with a self-funded 
                $125K digital campaign that killed Florida Amendment 1 in 2016 — swinging polls from 80% support to 
                under 60%.
              </p>

              <p>
                Jonathan holds patents in neural network training and telephony systems. His investment philosophy: 
                <em>'I don't subscribe to the power law theory in venture capital. All companies can succeed if given 
                enough time and support. Stress is the only thing that kills startups.'</em>
              </p>
            </div>
          </div>

          {/* Shared History */}
          <div className="bg-midnight-navy rounded-[4px] p-10 mb-12">
            <h3 className="text-warm-cream mb-4">Shared History</h3>
            <p className="text-warm-cream text-[16px] leading-relaxed">
              Jason and Jonathan were at the heart of the Voxeo → Tropo → Cisco journey. Jonathan founded both companies; Jason ran Tropo as CEO through the Cisco acquisition. Together they represent: 7+ companies started, 6+ sold, 21+ acquired, successful exits to Cisco, Aspect Software, SmartRent, and Serent Capital, operations across five continents, and shared work with NASA SCIFLI. Their combined experience is the foundation Cambiar is built on.
            </p>
          </div>

          {/* What is SCIFLI */}
          <div className="bg-warm-cream rounded-[4px] p-10">
            <h3 className="mb-4">What is SCIFLI?</h3>
            <p className="text-text-gray text-[16px] leading-relaxed">
              NASA's Scientifically Calibrated In-Flight Imagery program captures high-speed optical data during spacecraft reentry, rocket launches, and experimental flight tests. Both Cambiar founders are active imaging specialists supporting these missions — work that demands precision, real-time coordination, and zero margin for error.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}