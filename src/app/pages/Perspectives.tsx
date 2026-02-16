import { ExternalLink } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export function Perspectives() {
  // Mock blog posts - in production, this would come from a CMS
  const featuredPosts = [
    {
      title: 'Neo-Medievalism and the AI Transformation',
      author: 'Jason Goecke',
      date: 'February 5, 2026',
      excerpt: 'RAND researchers identified five structural trends reshaping the world order. Understanding these trends is essential for any organization attempting AI transformation in 2026.',
      readTime: '8 min read',
    },
    {
      title: 'Why Most AI Transformations Fail',
      author: 'Jonathan Taylor',
      date: 'January 28, 2026',
      excerpt: 'After 30 years building companies through multiple technology waves, one pattern is clear: organizations treat AI as a technology project when it\'s actually an organizational transformation.',
      readTime: '6 min read',
    },
    {
      title: 'Specification-Driven Development in the Age of AI',
      author: 'Jason Goecke',
      date: 'January 15, 2026',
      excerpt: 'The difference between "vibe coding" and real engineering becomes critical when AI is generating code. Here\'s why specification-driven development matters more than ever.',
      readTime: '10 min read',
    },
  ];

  const recentPosts = [
    {
      title: 'The Geography of AI Talent',
      author: 'Jonathan Taylor',
      date: 'February 2, 2026',
      readTime: '5 min read',
    },
    {
      title: 'From Intel to NASA: What I Learned About Institutional Change',
      author: 'Jason Goecke',
      date: 'January 20, 2026',
      readTime: '7 min read',
    },
    {
      title: 'Building Portfolio Companies: A Ventures Approach',
      author: 'Jonathan Taylor',
      date: 'January 10, 2026',
      readTime: '6 min read',
    },
    {
      title: 'The Triple C: Change, Causality, and the Speed of Light',
      author: 'Jason Goecke',
      date: 'December 18, 2025',
      readTime: '9 min read',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <PageMeta
        title="Perspectives — Cambiar Insights"
        description="How we see the world. Insights on AI transformation, geopolitics, and the future of enterprise technology."
      />

      {/* Hero */}
      <section className="bg-warm-cream py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="mb-6">Perspectives</h1>
          <p className="font-['Inter'] text-[19px] text-text-gray max-w-3xl mx-auto leading-relaxed">
            How we see the world. What we think is coming next.
          </p>
        </div>
      </section>

      {/* Founder Blogs */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://jasongoecke.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warm-cream rounded-[4px] p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group border border-warm-charcoal/10"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-warm-charcoal group-hover:text-deep-amber transition-colors">
                  Dispatches From the Edge of Now
                </h3>
                <ExternalLink className="text-deep-amber flex-shrink-0 ml-2" size={20} />
              </div>
              <p className="text-text-gray text-[15px] mb-3">
                Jason Goecke's Substack exploring the intersection of technology, geopolitics, and transformation.
              </p>
              <p className="font-['Inter'] text-[13px] text-deep-amber uppercase tracking-wider">
                jasongoecke.substack.com
              </p>
            </a>

            <a
              href="https://blog.visionik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warm-cream rounded-[4px] p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group border border-warm-charcoal/10"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-warm-charcoal group-hover:text-deep-amber transition-colors">
                  Visionik Blog
                </h3>
                <ExternalLink className="text-deep-amber flex-shrink-0 ml-2" size={20} />
              </div>
              <p className="text-text-gray text-[15px] mb-3">
                Jonathan Taylor on venture building, AI transformation, and three decades of entrepreneurship.
              </p>
              <p className="font-['Inter'] text-[13px] text-deep-amber uppercase tracking-wider">
                blog.visionik.com
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12">Featured Insights</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="mb-4">
                  <span className="font-['Inter'] text-[12px] text-deep-amber uppercase tracking-wider">
                    {post.author}
                  </span>
                  <span className="text-text-gray text-[12px] mx-2">•</span>
                  <span className="font-['Inter'] text-[12px] text-text-gray">{post.date}</span>
                </div>

                <h3 className="mb-3 hover:text-deep-amber transition-colors">{post.title}</h3>

                <p className="text-text-gray text-[15px] leading-relaxed mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="font-['Inter'] text-[13px] text-text-gray">{post.readTime}</span>
                  <span className="text-deep-amber text-[14px] hover:text-warm-charcoal transition-colors">
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12">Recent Posts</h2>

          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <article
                key={index}
                className="bg-warm-cream rounded-[4px] p-6 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer border border-transparent hover:border-warm-charcoal/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="mb-2 hover:text-deep-amber transition-colors">{post.title}</h4>
                    <div className="flex items-center gap-3 text-[13px]">
                      <span className="font-['Inter'] text-deep-amber uppercase tracking-wider">
                        {post.author}
                      </span>
                      <span className="text-text-gray">•</span>
                      <span className="text-text-gray">{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-['Inter'] text-[13px] text-text-gray">{post.readTime}</span>
                    <span className="text-deep-amber text-[14px] hover:text-warm-charcoal transition-colors">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-midnight-navy py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-warm-cream mb-6">Stay Updated</h2>
          <p className="text-warm-cream text-[17px] leading-relaxed mb-8">
            Follow our founders' Substacks for regular insights on AI transformation, geopolitics, and the future 
            of enterprise technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://jasongoecke.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Jason's Substack
              <ExternalLink size={16} />
            </a>
            <a
              href="https://blog.visionik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-[1.5px] border-warm-cream text-warm-cream px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-warm-cream hover:text-warm-charcoal transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Jonathan's Blog
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}