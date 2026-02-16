import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-charcoal text-warm-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-['Playfair_Display'] font-bold text-4xl leading-none text-warm-cream">
                C
              </span>
              <div>
                <div className="font-['Inter'] font-semibold text-[15px] tracking-[0.5px] uppercase text-warm-cream">
                  CAMBIAR
                </div>
                <div className="font-['Inter'] font-normal text-[10px] tracking-[0.5px] uppercase text-muted-gold mt-0.5">
                  ADVISORY & VENTURE STUDIO
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-3">
              <Link
                to="/about"
                className="font-['Inter'] text-[15px] text-muted-gold hover:text-warm-cream transition-colors"
              >
                About
              </Link>
              <Link
                to="/advisory"
                className="font-['Inter'] text-[15px] text-muted-gold hover:text-warm-cream transition-colors"
              >
                Advisory
              </Link>
              <Link
                to="/studio"
                className="font-['Inter'] text-[15px] text-muted-gold hover:text-warm-cream transition-colors"
              >
                Studio
              </Link>
              <Link
                to="/perspectives"
                className="font-['Inter'] text-[15px] text-muted-gold hover:text-warm-cream transition-colors"
              >
                Perspectives
              </Link>
              <Link
                to="/contact"
                className="font-['Inter'] text-[15px] text-muted-gold hover:text-warm-cream transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <a
              href="mailto:jason@cambiar.ai"
              className="font-['Inter'] text-[15px] text-muted-gold hover:text-warm-cream transition-colors"
            >
              jason@cambiar.ai
            </a>
            <div className="font-['Inter'] text-[15px] text-muted-gold">cambiar.ai</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-gold/20 pt-8">
          <p className="font-['Inter'] text-[14px] text-muted-gold text-center">
            © {currentYear} Cambiar, LLC + Cambiar Ventures, LP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
