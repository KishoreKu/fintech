import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  className?: string;
}

const partners = [
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'Google',
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  },
  {
    name: 'AWS',
    logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
  },
  {
    name: 'Databricks',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Databricks-logo.svg',
  },
  {
    name: 'Adobe',
    logo: 'https://www.adobe.com/content/dam/cc/icons/adobe_wordmark_red.svg',
  },
];

const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;

    if (!section || !card1 || !card2 || !card3) return;

    const ctx = gsap.context(() => {
      const cards = [card1, card2, card3];
      
      // Contact cards animation
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { y: '8vh', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: true,
            },
          }
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`flowing-section bg-[#0d1117] ${className}`}
      style={{ paddingTop: '12vh', paddingBottom: '8vh' }}
    >
      {/* Contact Block */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        style={{ marginLeft: '6vw', width: '88vw' }}
      >
        {/* Left Large Card - Start a Project */}
        <div
          ref={card1Ref}
          className="card-rounded card-border bg-[#111827] will-change-transform md:col-span-2 flex flex-col justify-between"
          style={{
            padding: '5vh 4vw',
            minHeight: '32vh',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        >
          <div>
            <h2 className="text-display text-[clamp(24px,3vw,44px)] text-white mb-4">
              Start a Project
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#6E6F78] leading-relaxed max-w-lg">
              Tell us what you're building. We'll reply within 48 hours with a 
              detailed proposal and next steps.
            </p>
          </div>
          <a
            href="mailto:info@westley-group.com"
            className="flex items-center gap-3 text-[15px] font-semibold text-[#B8B9F7] hover:text-white transition-colors group mt-6"
          >
            <Mail className="w-5 h-5" />
            info@westley-group.com
          </a>
        </div>

        {/* Right Column - Two Stacked Cards */}
        <div className="flex flex-col gap-6">
          {/* Address Card */}
          <div
            ref={card2Ref}
            className="card-rounded card-border bg-[#111827] will-change-transform flex-1"
            style={{
              padding: '3vh 2.5vw',
              borderColor: 'rgba(255,255,255,0.08)',
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-[#B8B9F7] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-[14px] font-semibold text-white mb-1">
                  Jersey City, NJ
                </h3>
                <p className="text-[13px] text-[#6E6F78]">
                  613 Washington Blvd #1342<br />
                  Jersey City, NJ 07310
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Phone className="w-4 h-4 text-[#B8B9F7]" />
              <a 
                href="tel:+17325188899" 
                className="text-[13px] text-[#6E6F78] hover:text-[#B8B9F7] transition-colors"
              >
                +1 732-518-8899
              </a>
            </div>
          </div>

          {/* Social Card */}
          <div
            ref={card3Ref}
            className="card-rounded card-border bg-[#111827] will-change-transform flex-1"
            style={{
              padding: '3vh 2.5vw',
              borderColor: 'rgba(255,255,255,0.08)',
            }}
          >
            <h3 className="text-[14px] font-semibold text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1a1b1f] hover:bg-[#B8B9F7] hover:text-[#111216] text-[#6E6F78] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1a1b1f] hover:bg-[#B8B9F7] hover:text-[#111216] text-[#6E6F78] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1a1b1f] hover:bg-[#B8B9F7] hover:text-[#111216] text-[#6E6F78] transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Marquee */}
      <div className="partner-marquee border-y border-white/10 mb-10" aria-label="Technology partners">
        <div className="partner-marquee__track">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="partner-marquee__item">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-marquee__logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
        style={{ marginLeft: '6vw', width: '88vw' }}
      >
        <p className="text-[12px] text-[#6E6F78]">
          © {new Date().getFullYear()} Westley Group. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <button className="text-[12px] text-[#6E6F78] hover:text-white transition-colors">
            Privacy Policy
          </button>
          <button className="text-[12px] text-[#6E6F78] hover:text-white transition-colors">
            Terms of Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
