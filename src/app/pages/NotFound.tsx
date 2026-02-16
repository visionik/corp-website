import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export function NotFound() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <PageMeta
        title="404 - Page Not Found | Cambiar"
        description="The page you're looking for doesn't exist. Return to Cambiar's home page."
      />

      <div className="max-w-[600px] mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="font-['Playfair_Display'] font-bold text-[120px] leading-none text-warm-charcoal opacity-20">
            404
          </span>
        </div>

        <h1 className="mb-6">Page Not Found</h1>

        <p className="text-text-gray text-[17px] leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200"
        >
          <Home size={18} />
          Back to Home
        </Link>

        <div className="mt-12 pt-8 border-t border-warm-charcoal/10">
          <p className="text-text-gray text-[14px] mb-4">Or explore:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="text-deep-amber hover:text-warm-charcoal transition-colors text-[15px]">
              About
            </Link>
            <span className="text-text-gray">•</span>
            <Link to="/advisory" className="text-deep-amber hover:text-warm-charcoal transition-colors text-[15px]">
              Advisory
            </Link>
            <span className="text-text-gray">•</span>
            <Link to="/studio" className="text-deep-amber hover:text-warm-charcoal transition-colors text-[15px]">
              Ventures
            </Link>
            <span className="text-text-gray">•</span>
            <Link to="/perspectives" className="text-deep-amber hover:text-warm-charcoal transition-colors text-[15px]">
              Perspectives
            </Link>
            <span className="text-text-gray">•</span>
            <Link to="/contact" className="text-deep-amber hover:text-warm-charcoal transition-colors text-[15px]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}