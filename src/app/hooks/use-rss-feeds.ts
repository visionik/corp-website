import { useState, useEffect } from 'react';
import { blogFeeds, type BlogFeed } from '../data/blog-feeds';

export interface BlogPost {
  title: string;
  link: string;
  pubDate: Date;
  excerpt: string;
  author: string;
  feedId: string;
  feedName: string;
}

interface UseRssFeedsResult {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

/**
 * Parse RSS XML and extract post items
 */
function parseRssFeed(xml: string, feed: BlogFeed): BlogPost[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const items = doc.querySelectorAll('item');
  const posts: BlogPost[] = [];

  items.forEach((item) => {
    const title = item.querySelector('title')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';
    const pubDateStr = item.querySelector('pubDate')?.textContent || '';
    const description = item.querySelector('description')?.textContent || '';

    // Clean HTML from description and truncate for excerpt
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = description;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const excerpt = textContent.slice(0, 250).trim() + (textContent.length > 250 ? '...' : '');

    posts.push({
      title,
      link,
      pubDate: new Date(pubDateStr),
      excerpt,
      author: feed.author,
      feedId: feed.id,
      feedName: feed.name,
    });
  });

  return posts;
}

/**
 * Fetch RSS feed via CORS proxy (needed for client-side fetching)
 */
async function fetchFeed(feed: BlogFeed): Promise<BlogPost[]> {
  const corsProxy = 'https://cors.cambiar.ai/?url=';
  const url = `${corsProxy}${encodeURIComponent(feed.feedUrl)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch feed: ${feed.name}`);
  }

  const xml = await response.text();
  return parseRssFeed(xml, feed);
}

/**
 * Hook to fetch and manage RSS feed data
 */
export function useRssFeeds(): UseRssFeedsResult {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAllFeeds() {
      try {
        setLoading(true);
        setError(null);

        const feedPromises = blogFeeds.map((feed) => fetchFeed(feed));
        const results = await Promise.allSettled(feedPromises);

        const allPosts: BlogPost[] = [];
        const errors: string[] = [];

        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            allPosts.push(...result.value);
          } else {
            errors.push(`${blogFeeds[index].name}: ${result.reason}`);
          }
        });

        // Sort all posts by date (newest first)
        allPosts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

        setPosts(allPosts);
        if (errors.length > 0 && allPosts.length === 0) {
          setError(errors.join('; '));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch feeds');
      } finally {
        setLoading(false);
      }
    }

    fetchAllFeeds();
  }, []);

  return { posts, loading, error };
}

/**
 * Get featured posts: 3 from each feed, interleaved
 */
export function getFeaturedPosts(posts: BlogPost[], countPerFeed: number = 3): BlogPost[] {
  const featured: BlogPost[] = [];
  const postsByFeed: Record<string, BlogPost[]> = {};

  // Group posts by feed
  posts.forEach((post) => {
    if (!postsByFeed[post.feedId]) {
      postsByFeed[post.feedId] = [];
    }
    postsByFeed[post.feedId].push(post);
  });

  // Take countPerFeed from each feed
  blogFeeds.forEach((feed) => {
    const feedPosts = postsByFeed[feed.id] || [];
    featured.push(...feedPosts.slice(0, countPerFeed));
  });

  // Sort by date for display
  return featured.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}

/**
 * Get recent posts sorted by date
 */
export function getRecentPosts(posts: BlogPost[], count: number = 30): BlogPost[] {
  // Posts are already sorted by date from the hook
  return posts.slice(0, count);
}

/**
 * Format date for display
 */
export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Estimate read time based on excerpt (rough approximation)
 */
export function estimateReadTime(excerpt: string): string {
  // Rough estimate: assume excerpt is ~10% of full article, 200 words per minute
  const words = excerpt.split(/\s+/).length;
  const estimatedTotal = words * 10;
  const minutes = Math.max(3, Math.ceil(estimatedTotal / 200));
  return `${minutes} min read`;
}
