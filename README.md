# Cambiar

A premium, minimal website for Cambiar – an AI-native advisory and venture studio founded by two experienced technology executives.

## Overview

Cambiar is built with a sophisticated, premium aesthetic inspired by minimal design principles, embodying the feel of a "premium private members' club" with quiet confidence. The website showcases Cambiar's transformation consulting services, venture studio model, and thought leadership in AI transformation.

**This site has been fully reviewed and optimized for deployment on Cloudflare Pages.**

## Design Philosophy

The site features:

- **Premium Minimal Aesthetic**: Extensive whitespace, clean layouts, and sophisticated typography
- **Iconic "C" Lettermark**: Featured prominently as the hero element
- **Sophisticated Color Palette**: 
  - Warm Charcoal (#3d3935) – Primary text and accents
  - Warm Cream (#f8f6f3) – Background
  - Deep Amber (#c17f3e) – Call-to-action and highlights
  - Midnight Navy (#1a2332) – Secondary elements
  - Muted Gold (#b8a88a) – Subtle accents
- **Typography System**:
  - Playfair Display (Display/Headings)
  - Inter (Body text)
  - JetBrains Mono (Code/Technical elements)

## Site Structure

The website includes six main pages plus a 404 page:

### Main Pages

1. **Home** (`/`)
   - Hero section with iconic "C" lettermark
   - Overview of Cambiar's dual model (Advisory + Ventures)
   - SCIFLI framework introduction
   - Call-to-action sections

2. **About** (`/about`)
   - Company vision and mission
   - Detailed founder biographies (James Hart-Davies & Yujun Chung)
   - Geopolitical framing around AI transformation
   - Values and approach

3. **Advisory** (`/advisory`)
   - Transformation consulting services
   - SCIFLI framework deep-dive
   - Service offerings and outcomes
   - Case study highlights

4. **Ventures** (`/studio`)
   - Venture model and thesis
   - Co-investment approach
   - Portfolio focus areas
   - Partnership benefits

5. **Perspectives** (`/perspectives`)
   - Thought leadership content
   - Featured articles on AI transformation
   - Industry insights and analysis
   - Coming soon: Blog functionality

6. **Contact** (`/contact`)
   - Contact form with validation
   - Multiple contact methods
   - Office location information
   - Response time expectations

7. **404 Page** (`*`)
   - Custom error page with navigation

## Technical Stack

### Core Technologies

- **React 18.3.1** – Modern React with hooks and concurrent features
- **React Router DOM 7.13.0** – Client-side routing
- **Vite 6.3.5** – Fast build tool and dev server
- **TypeScript** – Type-safe development
- **Tailwind CSS 4.1.12** – Utility-first CSS framework

### UI Components

- **Radix UI** – Accessible, unstyled component primitives
- **Lucide React** – Beautiful icon library
- **Motion (formerly Framer Motion)** – Smooth animations and transitions
- **React Hook Form** – Performant form validation
- **Sonner** – Toast notifications

### Additional Libraries

- **Material UI (@mui/material)** – Select components
- **Recharts** – Data visualization (if needed for future analytics)
- **React Responsive Masonry** – Masonry grid layouts
- **Date-fns** – Date manipulation utilities

## Project Structure

```
cambiar/
├── public/
│   ├── _redirects          # Cloudflare Pages SPA routing
│   └── _headers            # Security and performance headers
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── PageMeta.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   └── ui/         # Reusable UI components
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Advisory.tsx
│   │   │   ├── Studio.tsx
│   │   │   ├── Perspectives.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── NotFound.tsx
│   │   └── App.tsx         # Main app component
│   └── styles/
│       ├── animations.css  # Custom animations
│       ├── fonts.css       # Google Fonts imports
│       ├── index.css       # Global styles
│       ├── tailwind.css    # Tailwind directives
│       └── theme.css       # Design system tokens
├── vite.config.ts          # Vite configuration (Cloudflare optimized)
├── package.json
└── README.md
```

## Development

### Prerequisites

- Node.js 18 or higher (recommended: Node.js 20)
- npm or pnpm package manager

### Installation

```bash
# Install dependencies
npm install
```

### Local Development

```bash
# Start development server
npm run dev

# The site will be available at http://localhost:5173
```

### Building for Production

```bash
# Build optimized production bundle
npm run build

# Output will be in the /dist directory
```

### Preview Production Build

```bash
# Preview the production build locally
npx vite preview
```

## Cloudflare Pages Deployment

**This website has been specifically reviewed and configured for optimal deployment on Cloudflare Pages.**

### Quick Deploy

1. Connect your Git repository to Cloudflare Pages
2. Use these build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 20

3. Deploy! Cloudflare Pages will automatically build and deploy your site.

### What's Configured for Cloudflare Pages

✅ **SPA Routing** – `_redirects` file ensures all routes work correctly  
✅ **Security Headers** – `_headers` file implements best-practice security headers  
✅ **Build Optimization** – Vite config optimized for Cloudflare Pages  
✅ **Asset Caching** – Static assets configured for optimal cache performance  
✅ **Node Version** – `.node-version` file specifies Node.js 20  
✅ **Vendor Splitting** – React and React Router bundled separately for faster loads  

### Cloudflare Pages Benefits

- **Global CDN**: Served from 300+ data centers worldwide
- **Automatic HTTPS**: SSL certificates auto-provisioned and renewed
- **Unlimited Bandwidth**: No bandwidth limits or overage charges
- **Instant Deployments**: Changes go live in seconds
- **Preview Deployments**: Every PR gets a unique preview URL
- **Built-in Analytics**: Web analytics included
- **DDoS Protection**: Enterprise-grade security included

### Detailed Deployment Guide

See [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) for comprehensive deployment instructions, troubleshooting, and custom domain setup.

## Features

### Responsive Design

- Mobile-first approach
- Breakpoints: mobile (< 768px), tablet (768px - 1023px), desktop (≥ 1024px)
- Touch-friendly interactive elements
- Optimized typography scaling

### Performance Optimizations

- Code splitting with dynamic imports
- Lazy loading for images
- Vendor chunk separation
- Minimal bundle sizes
- Optimized font loading

### Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly

### SEO

- Meta tags for each page
- Open Graph tags
- Structured data ready
- Semantic HTML
- Fast page loads

### Animations

- Smooth page transitions
- Scroll-triggered animations
- Micro-interactions
- Motion preferences respected (prefers-reduced-motion)

## Content Strategy

### Version 2.0 Copy Update

The site features outcome-focused, why-driven messaging:

- **Outcome over Features**: Emphasis on business results and transformation outcomes
- **Why over How**: Focus on strategic value rather than technical processes
- **Client-Centric**: Language centered on client benefits and success
- **Strategic Positioning**: Geopolitical and strategic context for AI transformation

### Key Messaging

- **Advisory**: "Transform complexity into competitive advantage"
- **Ventures**: "Co-invest in AI-native ventures that matter"
- **SCIFLI Framework**: Strategic, Creative, Integrative, Fast, Lasting, Impactful
- **Founder Expertise**: Deep technical and strategic backgrounds in AI and transformation

## Typography

### Font Loading

Fonts are loaded from Google Fonts via `src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
```

### Usage

- **Headings (h1-h6)**: Playfair Display
- **Body Text**: Inter
- **Code/Technical**: JetBrains Mono

## Color System

All colors are defined as CSS custom properties in `src/styles/theme.css`:

```css
--warm-charcoal: #3d3935;
--warm-cream: #f8f6f3;
--deep-amber: #c17f3e;
--midnight-navy: #1a2332;
--muted-gold: #b8a88a;
--text-gray: #6b6560;
--pure-white: #ffffff;
```

These can be used in Tailwind classes or custom CSS.

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

## Future Enhancements

Potential additions for future releases:

- [ ] Blog/CMS integration for Perspectives section
- [ ] Case study detail pages with project showcases
- [ ] Client testimonials and reviews
- [ ] Team member profiles and expansion
- [ ] Newsletter subscription functionality
- [ ] Advanced analytics and tracking
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Interactive SCIFLI framework visualization
- [ ] Portfolio company showcase for Ventures

## Security

- XSS protection headers
- Content Security Policy ready
- HTTPS enforced (via Cloudflare)
- Form validation and sanitization
- No sensitive data stored client-side

## License

Proprietary – All rights reserved by Cambiar

## Contact

For inquiries about Cambiar:

- **Website**: [cambiar.ai](https://cambiar.ai) (when deployed)
- **Email**: hello@cambiar.ai
- **Location**: London, United Kingdom

---

**Built with care for Cambiar** | Deployed on Cloudflare Pages
