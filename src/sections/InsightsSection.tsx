import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface InsightsSectionProps {
  className?: string;
}

const InsightsSection = ({ className = '' }: InsightsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current].filter(Boolean);

    if (!section || !header || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(header, 
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          },
        }
      );

      // Article cards animation with stagger
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { y: '10vh', opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
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

  const articles = [
    {
      title: 'Building an AI agent that actually ships',
      category: 'Product',
      image: '/insights_ai.jpg',
    },
    {
      title: 'Marketing metrics that predict revenue',
      category: 'Analytics',
      image: '/insights_analytics.jpg',
    },
    {
      title: 'A minimal brand system for startups',
      category: 'Design',
      image: '/insights_brand.jpg',
    },
    {
      title: 'Integrations checklist for operators',
      category: 'Engineering',
      image: '/insights_engineering.jpg',
    },
  ];

  const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];

  return (
    <section
      ref={sectionRef}
      id="insights"
      className={`flowing-section bg-[#F6F6F2] ${className}`}
      style={{ paddingTop: '12vh', paddingBottom: '12vh' }}
    >
      {/* Header Row */}
      <div
        ref={headerRef}
        className="flex flex-col md:flex-row gap-6 mb-12"
        style={{ marginLeft: '6vw', width: '88vw' }}
      >
        {/* Left Accent Card */}
        <div
          className="card-rounded card-shadow accent-bg flex items-center"
          style={{
            width: 'md:min(32vw, 400px)',
            padding: '4vh 3vw',
          }}
        >
          <h2 className="text-display text-[clamp(28px,3.5vw,52px)] text-[#111216]">
            Insights
          </h2>
        </div>

        {/* Right White Card */}
        <div
          className="card-rounded card-shadow bg-white flex flex-col justify-between flex-1"
          style={{
            padding: '3vh 2.5vw',
            minHeight: '18vh',
          }}
        >
          <p className="text-[14px] md:text-[15px] text-[#6E6F78] leading-relaxed">
            Short reads on product, AI, and growth—plus tools you can use.
          </p>
          <button className="flex items-center gap-2 text-[13px] font-semibold text-[#111216] hover:text-[#B8B9F7] transition-colors self-end group">
            Browse all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Article Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        style={{ marginLeft: '6vw', width: '88vw' }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            ref={cardRefs[index]}
            className="card-rounded card-shadow bg-white will-change-transform overflow-hidden group cursor-pointer hover:translate-y-[-6px] transition-transform duration-300"
            style={{ height: '28vh' }}
          >
            <div className="flex h-full">
              {/* Image - Left 40% */}
              <div className="w-[40%] h-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text - Right 60% */}
              <div className="w-[60%] h-full p-6 flex flex-col justify-between">
                <div>
                  <span className="text-micro text-[#B8B9F7] mb-2 block">
                    {article.category}
                  </span>
                  <h3 className="text-[15px] md:text-[17px] font-semibold text-[#111216] leading-tight">
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-[12px] font-semibold text-[#6E6F78] group-hover:text-[#B8B9F7] transition-colors">
                  Read article
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
