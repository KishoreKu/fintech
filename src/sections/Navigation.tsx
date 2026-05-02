import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Platform', id: 'platform' },
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'Partners', id: 'partners' },
  { label: 'Contact', id: 'contact' },
];



const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 48);
      // Detect if we're in the dark hero section (first 100vh) or a light section
      const vh = window.innerHeight;
      const lightSections = ['platform', 'services', 'partners'];
      let overLight = false;
      for (const id of lightSections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            overLight = true;
            break;
          }
        }
      }
      // Dark hero zone = scrollY < 70% of first viewport
      setIsDark(!overLight || scrollY < vh * 0.7);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[100] w-full border-b transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'border-white/[0.08] bg-black/90 py-3 backdrop-blur-md'
              : 'border-black/[0.08] bg-white/95 py-3 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
            : 'border-transparent bg-transparent py-4'
        }`}
      >
        <div className="flex items-center justify-between px-[6vw]">
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="transition-opacity hover:opacity-75"
            aria-label="Westley Group home"
          >
            <span className={`flex items-center gap-3 transition-colors ${isScrolled && !isDark ? 'text-black' : 'text-white'}`}>
              <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-8 w-8 flex-none">
                <path d="M19 1.8L34.5 10.7V28.5L19 37.4L3.5 28.5V10.7L19 1.8ZM19 6.9L8 13.2V26L19 32.3L30 26V13.2L19 6.9Z" fill="currentColor" />
                <path d="M19 11.3L27.4 19.6L19 27.9L10.6 19.6L19 11.3ZM19 17.1L16.4 19.6L19 22.1L21.6 19.6L19 17.1Z" fill="currentColor" />
              </svg>
              <span className="flex items-center whitespace-nowrap text-[16px] font-bold uppercase leading-none tracking-[0.1em] antialiased">Westley</span>
            </span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[12px] font-semibold uppercase tracking-wider transition-colors ${
                  isScrolled && !isDark
                    ? 'text-black/50 hover:text-black'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                isScrolled && !isDark
                  ? 'border border-black/20 bg-black text-white hover:bg-[#2B59FF] hover:border-[#2B59FF]'
                  : 'border border-white/20 bg-white/5 text-white hover:bg-[#2B59FF] hover:border-[#2B59FF] hover:shadow-[0_0_20px_rgba(43,89,255,0.4)]'
              }`}
            >
              Get Started
            </button>
          </div>

          <button
            className={`p-2 md:hidden transition-colors ${isScrolled && !isDark ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-black transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative flex h-full flex-col items-start justify-center gap-10 px-[10vw]">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-display text-[34px] text-white/60 transition-colors hover:text-white"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-4 border border-[#2B59FF] px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-[#2B59FF] hover:bg-[#2B59FF] hover:text-white transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
