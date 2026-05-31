import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import { caseStudies } from "@/data/case-studies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheraa Bourhane — Performance Marketer & Meta Ads Specialist" },
      { name: "description", content: "Helping agencies and Gulf e-commerce brands scale through lead generation and high-performance Meta advertising systems. €300K+ ad spend managed." },
      { property: "og:title", content: "Cheraa Bourhane — Meta Ads Specialist" },
      { property: "og:description", content: "€300K+ ad spend managed. 220+ accounts. 5+ years scaling brands profitably with Meta Ads." },
    ],
  }),
  component: Index,
});

function Mono({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{children}</span>;
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-xs text-gold">{num}</span>
      <span className="h-px w-8 bg-gold/60" />
      <Mono>{label}</Mono>
    </div>
  );
}

const stats = [
  { v: "€300K+", l: "Ad Spend Managed" },
  { v: "2,000+", l: "Ads Managed" },
  { v: "220+", l: "Accounts Managed" },
  { v: "70+", l: "Pages Managed" },
  { v: "20K+", l: "Conversions Generated" },
  { v: "4.58", l: "Average ROAS" },
];

const services = [
  { t: "Meta Ads Management", d: "Full-funnel Meta Ads management to generate high-quality traffic & sales." },
  { t: "E-commerce Scaling", d: "Scale stores with proven strategies, creative testing & budget optimization." },
  { t: "Catalog & Dynamic Ads", d: "Product catalog setup & dynamic ads to increase relevance and sales." },
  { t: "Sales Funnel Optimization", d: "Optimize your funnel for higher conversion rates & better customer experience." },
  { t: "Creative Testing", d: "Data-driven creative testing to identify winning ads that maximize ROAS." },
  { t: "Lead Generation", d: "Build qualified pipelines for agencies and Gulf e-commerce brands." },
];

const process = [
  { n: "01", t: "Research", d: "Market, audience & competitor analysis. Offer positioning." },
  { n: "02", t: "Strategy", d: "Campaign structure, audience segmentation, budget allocation." },
  { n: "03", t: "Creative Testing", d: "Multiple concepts, format & angle testing, winning hooks." },
  { n: "04", t: "Launch", d: "Setup, tracking, Pixel & CAPI, high-intent audiences." },
  { n: "05", t: "Optimization", d: "Data-driven decisions, audience refinement, cost control." },
  { n: "06", t: "Scaling", d: "Scale winners, gradual budget increases, new audiences." },
  { n: "07", t: "Reporting", d: "Performance reports, creative insights, recommendations." },
];

const testimonials = [
  { q: "Cheraa scaled our store profitably and reduced our cost per purchase by 42%.", n: "Amine B.", r: "E-commerce Owner" },
  { q: "Professional, data-driven and always focused on results. Highly recommended.", n: "Yacine K.", r: "Brand Owner" },
  { q: "Our ROAS increased significantly. The best ads manager we worked with.", n: "Sarah M.", r: "Marketing Director" },
];

const caseMetrics = [
  { v: "18.2x", l: "ROAS" },
  { v: "3,120", l: "Purchases" },
  { v: "€7.14", l: "Cost / Purchase" },
  { v: "5.12%", l: "CTR" },
  { v: "82", l: "Campaigns" },
  { v: "618.8K", l: "Reach (30d)" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="h-8 w-8 grid place-items-center rounded-sm border border-gold/60 text-gold font-display text-sm">CB</span>
            <span className="font-mono text-xs uppercase tracking-[0.3em]">Cheraa Bourhane</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-gold transition-colors">Work</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#process" className="hover:text-gold transition-colors">Process</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <a
            href="https://wa.me/213659201481"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] bg-gold text-ink hover:bg-gold-soft transition-colors"
          >
            Hire Me
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 animate-float-up">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <Mono>Available for hire — Q3 2026</Mono>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Performance<br />
              marketing that <em className="gradient-text not-italic font-light">scales</em>.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I help agencies and Gulf e-commerce brands turn ad spend into measurable, scalable growth — through high-performance Meta advertising systems built on data.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="px-6 py-3 bg-gold text-ink text-sm font-mono uppercase tracking-[0.2em] hover:bg-gold-soft transition-colors">
                View Case Study →
              </a>
              <a href="https://wa.me/213659201481" target="_blank" rel="noreferrer" className="px-6 py-3 border border-border text-sm font-mono uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors">
                WhatsApp
              </a>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <div className="font-display text-3xl text-gold">€300K+</div>
                <Mono>Spend Managed</Mono>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">220+</div>
                <Mono>Accounts</Mono>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">5+</div>
                <Mono>Years</Mono>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gold/10 blur-2xl rounded-full" />
              <img
                src={portrait}
                alt="Cheraa Bourhane portrait"
                width={900}
                height={1200}
                className="relative w-full h-full object-cover grayscale-[0.2] border border-gold/30"
              />
              <div className="absolute -bottom-4 -left-4 bg-card border border-gold/40 p-4 max-w-[200px] shadow-[var(--shadow-card)]">
                <Mono>Specialist</Mono>
                <div className="font-display text-lg mt-1 leading-tight">Meta Ads & Growth Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO TICKER / MARQUEE STATS */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap gap-x-12 gap-y-3 items-center justify-between">
          <Mono>Trusted by brands across</Mono>
          <div className="flex flex-wrap gap-x-10 gap-y-2 font-display text-lg text-muted-foreground">
            <span>Algeria</span><span className="text-gold/40">/</span>
            <span>UAE</span><span className="text-gold/40">/</span>
            <span>Saudi Arabia</span><span className="text-gold/40">/</span>
            <span>Kuwait</span><span className="text-gold/40">/</span>
            <span>Qatar</span>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="01" label="The Results" />
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <h2 className="lg:col-span-7 text-4xl sm:text-6xl leading-[1.05]">
            Real data.<br />Real strategies.<br />
            <span className="gradient-text italic">Real growth.</span>
          </h2>
          <p className="lg:col-span-5 lg:pt-4 text-muted-foreground text-lg leading-relaxed">
            Through data-driven strategies and continuous optimization, ad spend becomes measurable, scalable results. Every campaign engineered around profit, not vanity.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 border-t border-l border-border/60">
          {stats.map((s) => (
            <div key={s.l} className="border-r border-b border-border/60 p-8 hover:bg-card/50 transition-colors group">
              <div className="font-display text-4xl lg:text-5xl text-gold group-hover:scale-105 transition-transform origin-left">{s.v}</div>
              <Mono>{s.l}</Mono>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="work" className="py-28 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel num="02" label="Case Study" />
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-8">
              <Mono>Home Decor & Accessories</Mono>
              <h2 className="font-display text-5xl sm:text-7xl mt-3">Classy House</h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Built and optimized structured Meta campaigns to increase purchases, strengthen engagement, and scale website performance through testing, retargeting, and offer-driven creatives.
              </p>
            </div>
            <div className="lg:col-span-4 space-y-4 lg:pt-6">
              <div className="flex justify-between border-b border-border/60 pb-2"><Mono>Objective</Mono><span className="text-sm">Scale purchases</span></div>
              <div className="flex justify-between border-b border-border/60 pb-2"><Mono>Strategy</Mono><span className="text-sm">Catalog + Retargeting</span></div>
              <div className="flex justify-between border-b border-border/60 pb-2"><Mono>Format</Mono><span className="text-sm">Video 52.2%</span></div>
              <div className="flex justify-between border-b border-border/60 pb-2"><Mono>Top Theme</Mono><span className="text-sm">Store / Community</span></div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-border/60 border border-border/60">
            {caseMetrics.map((m) => (
              <div key={m.l} className="bg-background p-6">
                <div className="font-display text-3xl lg:text-4xl text-gold">{m.v}</div>
                <Mono>{m.l}</Mono>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent">
            <Mono>Key takeaway</Mono>
            <p className="mt-3 font-display text-xl lg:text-2xl leading-snug max-w-3xl">
              Offer-driven creatives, retargeting, and daily optimization turned engagement into profitable purchases — and a <span className="text-gold">18.2x ROAS</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="03" label="What I Do" />
        <h2 className="text-4xl sm:text-6xl leading-[1.05] max-w-3xl mb-16">
          Services built for <em className="gradient-text not-italic">profitable scale</em>.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {services.map((s, i) => (
            <div key={s.t} className="bg-background p-8 group hover:bg-card/50 transition-colors">
              <div className="font-mono text-xs text-gold mb-6">0{i + 1}</div>
              <h3 className="font-display text-2xl mb-3 group-hover:text-gold transition-colors">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-28 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel num="04" label="My Process" />
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <h2 className="lg:col-span-7 text-4xl sm:text-6xl leading-[1.05]">
              A proven system to launch,<br />optimize & <em className="gradient-text not-italic">scale</em>.
            </h2>
            <p className="lg:col-span-5 lg:pt-4 text-muted-foreground text-lg leading-relaxed">
              Seven disciplined steps. From market research to performance reporting, every decision is anchored in data.
            </p>
          </div>
          <div className="space-y-px">
            {process.map((p) => (
              <div key={p.n} className="group grid grid-cols-12 gap-6 items-baseline py-6 border-t border-border/60 hover:bg-background/50 transition-colors px-2">
                <div className="col-span-2 lg:col-span-1 font-mono text-xs text-gold">{p.n}</div>
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="font-display text-2xl lg:text-3xl group-hover:translate-x-2 transition-transform">{p.t}</h3>
                </div>
                <div className="col-span-12 lg:col-span-7 text-muted-foreground">{p.d}</div>
              </div>
            ))}
          </div>
          <blockquote className="mt-20 font-display text-3xl sm:text-5xl text-center max-w-4xl mx-auto leading-tight">
            "Strategy drives the campaign.<br /><span className="gradient-text italic">Data drives the results.</span>"
          </blockquote>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="05" label="Client Voices" />
        <h2 className="text-4xl sm:text-6xl leading-[1.05] max-w-3xl mb-16">What clients say.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.n} className="p-8 border border-border/60 bg-card/30 hover:border-gold/50 transition-colors flex flex-col">
              <div className="text-gold font-display text-5xl leading-none mb-4">"</div>
              <blockquote className="flex-1 text-lg leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60">
                <div className="font-display text-lg">{t.n}</div>
                <Mono>{t.r}</Mono>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <SectionLabel num="06" label="Let's Talk" />
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] mb-8">
            From strategy to<br /><span className="gradient-text italic">scalable success</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I don't just run ads — I build growth systems that scale brands, profits, and impact. Available for new partnerships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/213659201481" target="_blank" rel="noreferrer" className="px-8 py-4 bg-gold text-ink font-mono uppercase text-xs tracking-[0.2em] hover:bg-gold-soft transition-colors">
              WhatsApp +213 659 20 14 81
            </a>
            <a href="mailto:hello@cheraabourhane.com" className="px-8 py-4 border border-border font-mono uppercase text-xs tracking-[0.2em] hover:border-gold hover:text-gold transition-colors">
              Send Email
            </a>
          </div>
          <p className="mt-16 font-display italic text-xl text-muted-foreground">
            — Cheraa Bourhane
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 grid place-items-center rounded-sm border border-gold/60 text-gold font-display text-xs">CB</span>
            <Mono>© 2026 Cheraa Bourhane</Mono>
          </div>
          <Mono>Performance Marketer · Meta Ads Specialist</Mono>
        </div>
      </footer>
    </div>
  );
}
