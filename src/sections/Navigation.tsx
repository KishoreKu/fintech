import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Platform', id: 'platform' },
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'Partners', id: 'partners' },
  { label: 'Contact', id: 'contact' },
];

const Logo = () => (
  <span className="flex items-center gap-3 text-white">
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-12 w-12 flex-none"
    >
      <path
        d="M19 1.8L34.5 10.7V28.5L19 37.4L3.5 28.5V10.7L19 1.8ZM19 6.9L8 13.2V26L19 32.3L30 26V13.2L19 6.9Z"
        fill="currentColor"
      />
      <path
        d="M19 11.3L27.4 19.6L19 27.9L10.6 19.6L19 11.3ZM19 17.1L16.4 19.6L19 22.1L21.6 19.6L19 17.1Z"
        fill="currentColor"
      />
    </svg>
    <span className="flex items-center whitespace-nowrap text-[18px] font-extrabold uppercase leading-none tracking-[0.28em] antialiased">
      <span>Westley</span>
    </span>
  </span>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[100] w-full border-b transition-all duration-300 ${
          isScrolled
            ? 'border-white/10 bg-[#0b0d10]/90 py-3 backdrop-blur-md'
            : 'border-white/0 bg-transparent py-5'
        }`}
      >
        <div className="flex items-center justify-between px-[6vw]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="transition-opacity hover:opacity-75"
            aria-label="Westley Group home"
          >
            <Logo />
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-micro text-[#c9ced8] transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="p-2 text-white md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[99] bg-[#0b0d10] transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col items-start justify-center gap-8 px-[10vw]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-display text-[34px] text-white transition-colors hover:text-[#b8b9f7]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
