import { ArrowUpRight, BarChart3, Bot, Braces, Database, LineChart, ShieldCheck } from 'lucide-react';
import './App.css';
import Navigation from './sections/Navigation';

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

const capabilities = [
  {
    eyebrow: '01',
    title: 'AI operating systems',
    copy: 'Agents, workflows, and human review loops that move work from inboxes and spreadsheets into governed production systems.',
    icon: Bot,
  },
  {
    eyebrow: '02',
    title: 'Data and analytics',
    copy: 'Executive dashboards, forecasting models, attribution, and warehouse design for teams that need trusted answers fast.',
    icon: Database,
  },
  {
    eyebrow: '03',
    title: 'Product engineering',
    copy: 'Modern applications, integrations, and internal tools built around the real decisions your operators make every day.',
    icon: Braces,
  },
  {
    eyebrow: '04',
    title: 'Growth systems',
    copy: 'Campaign infrastructure, lifecycle automation, and measurement plans that connect marketing activity to revenue.',
    icon: LineChart,
  },
];

const outcomes = [
  'Deploy AI automation across frontline workflows',
  'Unify fragmented customer, finance, and operations data',
  'Design decision interfaces for executives and operators',
  'Launch secure cloud foundations with partner ecosystems',
];

const heroSlides = [
  {
    label: 'Automation layer',
    title: 'Live agent orchestration',
    metric: '42 workflows',
    rows: ['Lead routing', 'Proposal drafting', 'Support triage'],
  },
  {
    label: 'Data layer',
    title: 'Revenue command view',
    metric: '8 sources',
    rows: ['CRM events', 'Ad spend', 'Pipeline forecast'],
  },
  {
    label: 'Cloud layer',
    title: 'Secure deployment map',
    metric: '99.9% target',
    rows: ['Identity controls', 'Model gateway', 'Audit trails'],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white">
      <div className="grain-overlay" />
      <Navigation />

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden border-b border-white/10 bg-[#0b0d10]">
          <div className="absolute inset-0">
            <video
              className="hero-background-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/hero_office.jpg"
              aria-hidden="true"
            >
              <source src="https://samplelib.com/mp4/sample-5s.mp4" type="video/mp4" />
            </video>
            <img
              src="/hero_office.jpg"
              alt="Westley Group team strategy session"
              className="hero-background-fallback"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0d10_0%,rgba(11,13,16,0.88)_42%,rgba(11,13,16,0.48)_100%)]" />
          </div>

          <div className="hero-slide-system" aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <article
                key={slide.title}
                className="hero-slide-panel"
                style={{ animationDelay: `${index * 4}s` }}
              >
                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-micro text-[#9ca3af]">{slide.label}</span>
                  <span className="h-2 w-2 rounded-full bg-[#b8b9f7]" />
                </div>
                <h2 className="max-w-sm text-[28px] font-semibold leading-tight text-white">
                  {slide.title}
                </h2>
                <div className="my-8 text-display text-[clamp(34px,4vw,58px)] text-[#b8b9f7]">
                  {slide.metric}
                </div>
                <div className="space-y-3">
                  {slide.rows.map((row) => (
                    <div key={row} className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-[13px] text-[#d6d8df]">{row}</span>
                      <span className="h-1.5 w-16 bg-white/20">
                        <span className="block h-full w-2/3 bg-[#b8b9f7]" />
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
            <div className="hero-slide-grid" />
          </div>

          <div className="relative flex min-h-screen flex-col justify-end px-[6vw] pb-[10vh] pt-32">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-micro text-[#9ca3af]">
              <span className="border border-white/20 px-3 py-2">AI Automation</span>
              <span className="border border-white/20 px-3 py-2">Cloud Partners</span>
              <span className="border border-white/20 px-3 py-2">Data Platforms</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <h1 className="max-w-5xl text-display text-[clamp(54px,9vw,132px)] leading-[0.88] text-white">
                  Software for decisions that matter.
                </h1>
              </div>
              <div className="max-w-xl border-l border-white/20 pl-6">
                <p className="text-[18px] leading-relaxed text-[#d6d8df]">
                  We build AI, analytics, and cloud systems for teams that need operational clarity, not another slide deck.
                </p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-8 inline-flex items-center gap-3 border border-white px-5 py-3 text-micro text-white transition-colors hover:bg-white hover:text-[#0b0d10]"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="border-b border-[#d7d9d2] bg-[#f4f2ea] px-[6vw] py-24 text-[#111216]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-micro text-[#65676f]">What we build</p>
              <h2 className="text-display text-[clamp(38px,6vw,86px)] leading-[0.9]">
                One system for data, workflows, and action.
              </h2>
            </div>
            <div className="grid gap-px bg-[#c8c9c3] md:grid-cols-2">
              {capabilities.map((capability) => (
                <article key={capability.title} className="bg-[#f4f2ea] p-7">
                  <div className="mb-12 flex items-center justify-between">
                    <span className="text-micro text-[#65676f]">{capability.eyebrow}</span>
                    <capability.icon className="h-6 w-6 text-[#111216]" />
                  </div>
                  <h3 className="mb-4 text-[24px] font-semibold leading-tight">{capability.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#555861]">{capability.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#111216] px-[6vw] py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch">
            <div className="relative min-h-[520px] overflow-hidden border border-white/10 bg-black">
              <video
                className="work-media-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/featured_work_main.jpg"
                aria-hidden="true"
              >
                <source src="https://samplelib.com/mp4/sample-5s.mp4" type="video/mp4" />
              </video>
              <img
                src="/featured_work_main.jpg"
                alt="Analytics platform interface planning"
                className="work-media-fallback"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,18,22,0.06),rgba(17,18,22,0.42))]" />
            </div>
            <div className="flex flex-col justify-between border-y border-white/15 py-8">
              <div>
                <p className="mb-4 text-micro text-[#b8b9f7]">Field report</p>
                <h2 className="text-display text-[clamp(34px,5vw,72px)] leading-[0.92]">
                  From scattered tools to operational command.
                </h2>
              </div>
              <div className="mt-12 grid gap-5">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-4 border-t border-white/10 pt-5">
                    <ShieldCheck className="mt-1 h-5 w-5 flex-none text-[#b8b9f7]" />
                    <p className="text-[17px] leading-relaxed text-[#d6d8df]">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-white/10 bg-[#0b0d10] px-[6vw] py-24">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-micro text-[#b8b9f7]">Engagement model</p>
              <h2 className="max-w-4xl text-display text-[clamp(38px,6vw,88px)] leading-[0.9]">
                Strategy, engineering, and deployment in one accountable team.
              </h2>
            </div>
            <BarChart3 className="h-16 w-16 text-[#b8b9f7]" />
          </div>

          <div className="grid gap-px bg-white/15 lg:grid-cols-3">
            {['Assess', 'Build', 'Operate'].map((phase, index) => (
              <article key={phase} className="bg-[#0b0d10] p-8">
                <span className="text-micro text-[#6e7480]">0{index + 1}</span>
                <h3 className="mt-16 text-[30px] font-semibold">{phase}</h3>
                <p className="mt-5 text-[15px] leading-relaxed text-[#aeb4bf]">
                  {index === 0 && 'Map the business process, data estate, risks, and highest-value automation opportunities.'}
                  {index === 1 && 'Design and ship production systems with secure cloud architecture and measurable business outcomes.'}
                  {index === 2 && 'Monitor, improve, and extend the system as new data, teams, and operating constraints emerge.'}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="partners" className="bg-[#f4f2ea] py-16 text-[#111216]">
          <div className="mb-10 px-[6vw]">
            <p className="text-micro text-[#65676f]">Partner ecosystem</p>
          </div>
          <div className="partner-marquee border-y border-[#c8c9c3]" aria-label="Technology partners">
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
        </section>

        <section id="contact" className="bg-[#0b0d10] px-[6vw] py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-4 text-micro text-[#b8b9f7]">Contact</p>
              <h2 className="max-w-4xl text-display text-[clamp(44px,7vw,104px)] leading-[0.88]">
                Build the system your operators wish they had.
              </h2>
            </div>
            <div className="border-l border-white/15 pl-8">
              <a href="mailto:info@westley-group.com" className="block text-[24px] font-semibold text-white hover:text-[#b8b9f7]">
                info@westley-group.com
              </a>
              <a href="tel:+17325188899" className="mt-4 block text-[18px] text-[#aeb4bf] hover:text-white">
                +1 732-518-8899
              </a>
              <p className="mt-8 text-[15px] leading-relaxed text-[#aeb4bf]">
                613 Washington Blvd #1342
                <br />
                Jersey City, NJ 07310
              </p>
            </div>
          </div>

          <footer className="mt-20 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-[12px] text-[#6e7480] md:flex-row">
            <p>© {new Date().getFullYear()} Westley Group. All rights reserved.</p>
            <p>AI automation · cloud systems · data platforms</p>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
