/**
 * Employee blog RSS feed configuration
 */

export interface BlogFeed {
  id: string;
  name: string;
  author: string;
  feedUrl: string;
  siteUrl: string;
  description: string;
}

export const blogFeeds: BlogFeed[] = [
  {
    id: 'dispatches',
    name: 'Dispatches from the Edge of Now',
    author: 'Jason Goecke',
    feedUrl: 'https://jasongoecke.substack.com/feed',
    siteUrl: 'https://jasongoecke.substack.com',
    description: 'Exploring the intersection of technology, geopolitics, and transformation.',
  },
  {
    id: 'visionik',
    name: 'Visionik Blog',
    author: 'Jonathan Taylor',
    feedUrl: 'https://blog.visionik.com/feed',
    siteUrl: 'https://blog.visionik.com',
    description: 'On venture building, AI transformation, and three decades of entrepreneurship.',
  },
];
