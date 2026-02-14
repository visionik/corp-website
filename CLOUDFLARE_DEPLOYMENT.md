# Cloudflare Pages Deployment Guide for Cambiar

This guide explains how to deploy your Cambiar website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Your Git repository (GitHub, GitLab, or Bitbucket) connected to Cloudflare Pages

## Deployment Configuration

When setting up your Cloudflare Pages project, use the following build settings:

### Build Settings

- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave as default)
- **Node.js version**: `18` or higher (recommended: `20`)

### Environment Variables

No environment variables are required for the base deployment. If you add backend features or external API integrations in the future, you can add them in the Cloudflare Pages dashboard under Settings > Environment variables.

## Deployment Steps

1. **Connect Your Repository**
   - Log in to your Cloudflare dashboard
   - Go to Pages > Create a project
   - Connect your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your Cambiar repository

2. **Configure Build Settings**
   - Use the settings specified above
   - Click "Save and Deploy"

3. **Deploy**
   - Cloudflare Pages will automatically build and deploy your site
   - Subsequent pushes to your main branch will trigger automatic deployments
   - Preview deployments are created for all pull requests

## What's Configured for Cloudflare Pages

This project includes the following Cloudflare Pages optimizations:

### `public/_redirects`
- Handles client-side routing for React Router
- Ensures all routes fallback to `index.html` for SPA functionality
- Routes like `/about`, `/advisory`, `/studio`, etc. will work correctly

### `public/_headers`
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Cache control for static assets
- Performance optimizations

### `vite.config.ts`
- Build output directory set to `dist`
- Public directory properly configured
- Vendor chunk splitting for optimal loading
- Production build optimizations

## Custom Domain Setup

After deployment, you can add a custom domain:

1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Add your domain (e.g., `cambiar.com`)
4. Follow the DNS configuration instructions
5. SSL/TLS certificates are automatically provisioned

## Performance Features

Cloudflare Pages provides these benefits automatically:

- **Global CDN**: Your site is served from 300+ data centers worldwide
- **Automatic HTTPS**: SSL certificates are auto-provisioned and renewed
- **DDoS Protection**: Built-in protection against attacks
- **Instant Cache Invalidation**: Updates go live immediately
- **Unlimited Bandwidth**: No bandwidth limits or overage charges
- **Analytics**: Built-in web analytics available

## Troubleshooting

### Routes Not Working (404 errors)

If you see 404 errors when navigating to routes directly:
- Ensure the `_redirects` file exists in the `public/` folder
- Verify it's being copied to the `dist/` folder during build
- Check that the build command completed successfully

### Build Failures

If the build fails:
- Check that Node.js version is 18 or higher in Cloudflare Pages settings
- Verify all dependencies are listed in `package.json`
- Review build logs in the Cloudflare Pages dashboard
- Ensure the build command is exactly: `npm run build`

### Missing Environment Variables

This site doesn't require environment variables for basic functionality. If you add features that need them:
- Add them in Cloudflare Pages dashboard: Settings > Environment variables
- Set them for both Production and Preview environments
- Prefix them with `VITE_` to make them accessible in the browser (e.g., `VITE_API_URL`)

## Local Development

To test the production build locally before deploying:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the production build (requires a local server)
npx vite preview
```

## Support

For Cloudflare Pages specific issues, consult:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
