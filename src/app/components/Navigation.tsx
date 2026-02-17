import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/advisory', label: 'AI Advisory' },
    { path: '/AI-developer-outsourcing', label: 'AI Devsourcing' },
    { path: '/studio', label: 'AI Ventures' },
    { path: '/perspectives', label: 'Perspectives' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-warm-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-warm-charcoal transition-colors group-hover:text-deep-amber">
            <span className="font-['Playfair_Display'] font-bold text-4xl leading-none">C</span>
          </div>
          <span className="font-['Inter'] font-semibold text-[15px] tracking-[0.5px] uppercase text-warm-charcoal">
            CAMBIAR
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-['Inter'] font-medium text-[15px] tracking-[0.5px] text-warm-charcoal hover:text-deep-amber transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-warm-charcoal transition-all duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-warm-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-warm-cream border-t border-warm-charcoal/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-['Inter'] font-medium text-[15px] tracking-[0.5px] text-warm-charcoal hover:text-deep-amber transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-warm-charcoal transition-all duration-200 text-center mt-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
