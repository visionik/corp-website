import { ExternalLink, Loader2 } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { blogFeeds } from '../data/blog-feeds';
import {
  useRssFeeds,
  getFeaturedPosts,
  getRecentPosts,
  formatPostDate,
  estimateReadTime,
} from '../hooks/use-rss-feeds';

export function Perspectives() {
  const { posts, loading, error } = useRssFeeds();

  // Get 6 featured posts (3 from each blog)
  const featuredPosts = getFeaturedPosts(posts, 3);

  // Get 30 most recent posts across all blogs
  const recentPosts = getRecentPosts(posts, 30);

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
            {blogFeeds.map((feed) => (
              <a
                key={feed.id}
                href={feed.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-warm-cream rounded-[4px] p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group border border-warm-charcoal/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-warm-charcoal group-hover:text-deep-amber transition-colors">
                    {feed.name}
                  </h3>
                  <ExternalLink className="text-deep-amber flex-shrink-0 ml-2" size={20} />
                </div>
                <p className="text-text-gray text-[15px] mb-3">
                  {feed.author} — {feed.description}
                </p>
                <p className="font-['Inter'] text-[13px] text-deep-amber uppercase tracking-wider">
                  {feed.siteUrl.replace('https://', '')}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-warm-cream py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12">Featured Insights</h2>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 text-deep-amber animate-spin" />
              <span className="ml-3 text-text-gray">Loading posts...</span>
            </div>
          ) : error && featuredPosts.length === 0 ? (
            <p className="text-center text-text-gray py-8">
              Unable to load posts. Please try again later.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-[4px] p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 block"
                >
                  <div className="mb-4">
                    <span className="font-['Inter'] text-[12px] text-deep-amber uppercase tracking-wider">
                      {post.author}
                    </span>
                    <span className="text-text-gray text-[12px] mx-2">•</span>
                    <span className="font-['Inter'] text-[12px] text-text-gray">
                      {formatPostDate(post.pubDate)}
                    </span>
                  </div>

                  <h3 className="mb-3 hover:text-deep-amber transition-colors">{post.title}</h3>

                  <p className="text-text-gray text-[15px] leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-['Inter'] text-[13px] text-text-gray">
                      {estimateReadTime(post.excerpt)}
                    </span>
                    <span className="text-deep-amber text-[14px] hover:text-warm-charcoal transition-colors">
                      Read more →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12">Recent Posts</h2>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 text-deep-amber animate-spin" />
              <span className="ml-3 text-text-gray">Loading posts...</span>
            </div>
          ) : error && recentPosts.length === 0 ? (
            <p className="text-center text-text-gray py-8">
              Unable to load posts. Please try again later.
            </p>
          ) : (
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-warm-cream rounded-[4px] p-6 hover:bg-white hover:shadow-md transition-all duration-200 block border border-transparent hover:border-warm-charcoal/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="mb-2 hover:text-deep-amber transition-colors">{post.title}</h4>
                      <div className="flex items-center gap-3 text-[13px]">
                        <span className="font-['Inter'] text-deep-amber uppercase tracking-wider">
                          {post.author}
                        </span>
                        <span className="text-text-gray">•</span>
                        <span className="text-text-gray">{formatPostDate(post.pubDate)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-['Inter'] text-[13px] text-text-gray">
                        {estimateReadTime(post.excerpt)}
                      </span>
                      <span className="text-deep-amber text-[14px] hover:text-warm-charcoal transition-colors">
                        Read →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-midnight-navy py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-warm-cream mb-6">Stay Updated</h2>
          <p className="text-warm-cream text-[17px] leading-relaxed mb-8">
            Follow our founders' blogs for regular insights on AI transformation, geopolitics, and the future of
            enterprise technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {blogFeeds.map((feed, index) => (
              <a
                key={feed.id}
                href={feed.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  index === 0
                    ? 'bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-[\'Inter\'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200 inline-flex items-center justify-center gap-2'
                    : 'bg-transparent border-[1.5px] border-warm-cream text-warm-cream px-7 py-3.5 rounded-[3px] font-[\'Inter\'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-warm-cream hover:text-warm-charcoal transition-all duration-200 inline-flex items-center justify-center gap-2'
                }
              >
                {feed.author.split(' ')[0]}'s Blog
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}