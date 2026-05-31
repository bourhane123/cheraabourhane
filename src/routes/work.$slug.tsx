import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { caseStudies, getAdjacent, getCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const c = getCaseStudy(params.slug);
    const title = c ? `${c.client} — Case Study | Cheraa Bourhane` : "Case Study | Cheraa Bourhane";
    const desc = c?.tagline ?? "Performance marketing case study.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const c = getCaseStudy(params.slug);
    if (!c) throw notFound();
    return c;
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-center px-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">404</p>
        <h1 className="font-display text-4xl mb-6">Case study not found</h1>
        <Link to="/" className="font-mono text-xs uppercase tracking-[0.2em] text-gold hover:underline">← Back home</Link>
      </div>
    </div>
  ),
  component: CaseStudyPage,
});

function Mono({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{children}</span>;
}

function CaseStudyPage() {
  const c = Route.useLoaderData();
  const { prev, next } = getAdjacent(c.slug);
  const idx = caseStudies.findIndex((x) => x.slug === c.slug) + 1;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 grid place-items-center rounded-sm border border-gold/60 text-gold font-display text-sm">CB</span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] hidden sm:inline">Cheraa Bourhane</span>
          </Link>
          <Link to="/" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors">
            ← All work
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs text-gold">CASE {String(idx).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}</span>
            <span className="h-px w-12 bg-gold/60" />
            <Mono>{c.industry}</Mono>
          </div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <Mono>{c.client}</Mono>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl mt-4 leading-[0.95]">
                {c.title}
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">{c.tagline}</p>
            </div>
            <aside className="lg:col-span-4 lg:pt-4 space-y-4">
              <div className="flex justify-between border-b border-border/60 pb-3"><Mono>Year</Mono><span className="text-sm">{c.year}</span></div>
              <div className="flex justify-between border-b border-border/60 pb-3"><Mono>Role</Mono><span className="text-sm">{c.role}</span></div>
              <div className="flex justify-between border-b border-border/60 pb-3"><Mono>Duration</Mono><span className="text-sm">{c.duration}</span></div>
              <div className="border-b border-border/60 pb-3">
                <Mono>Services</Mono>
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.services.map((s) => (
                    <span key={s} className="text-xs border border-gold/40 text-gold px-2 py-1">{s}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-20 bg-card/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-gold">01</span>
            <span className="h-px w-8 bg-gold/60" />
            <Mono>Results at a glance</Mono>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 border-t border-l border-border/60">
            {c.metrics.map((m) => (
              <div key={m.l} className="border-r border-b border-border/60 p-6 hover:bg-background/60 transition-colors">
                <div className="font-display text-3xl lg:text-4xl text-gold">{m.v}</div>
                <Mono>{m.l}</Mono>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-gold">02</span>
            <h2 className="font-display text-4xl mt-3">Overview</h2>
          </div>
          <p className="lg:col-span-8 text-xl leading-relaxed text-muted-foreground">{c.overview}</p>
        </div>
      </section>

      {/* OBJECTIVES / STRATEGY / EXECUTION */}
      <section className="py-24 border-y border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs text-gold">03</span>
            <span className="h-px w-8 bg-gold/60" />
            <Mono>The Work</Mono>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60">
            {([
              { t: "Objectives", items: c.objectives },
              { t: "Strategy", items: c.strategy },
              { t: "Execution", items: c.execution },
            ] as const).map((col, i) => (
              <div key={col.t} className="bg-background p-8">
                <div className="font-mono text-xs text-gold mb-4">0{i + 1}</div>
                <h3 className="font-display text-2xl mb-6">{col.t}</h3>
                <ul className="space-y-4">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-gold mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs text-gold">04</span>
            <span className="h-px w-8 bg-gold/60" />
            <Mono>Key Insights</Mono>
          </div>
          <div className="space-y-px">
            {c.insights.map((ins, i) => (
              <div key={ins.t} className="group grid grid-cols-12 gap-6 items-baseline py-8 border-t border-border/60 px-2 hover:bg-card/40 transition-colors">
                <div className="col-span-2 lg:col-span-1 font-mono text-xs text-gold">0{i + 1}</div>
                <h3 className="col-span-10 lg:col-span-5 font-display text-2xl lg:text-3xl group-hover:translate-x-2 transition-transform">{ins.t}</h3>
                <p className="col-span-12 lg:col-span-6 text-muted-foreground leading-relaxed">{ins.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="py-24 border-y border-border/50 bg-gradient-to-br from-gold/5 via-transparent to-transparent">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Mono>Key takeaway</Mono>
          <blockquote className="mt-6 font-display text-3xl sm:text-5xl leading-tight">
            "{c.takeaway}"
          </blockquote>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
          <Link
            to="/work/$slug"
            params={{ slug: prev.slug }}
            className="group bg-background p-8 hover:bg-card/50 transition-colors flex flex-col"
          >
            <Mono>← Previous case</Mono>
            <span className="font-display text-2xl lg:text-3xl mt-3 group-hover:text-gold transition-colors">{prev.client}</span>
            <span className="text-sm text-muted-foreground mt-2">{prev.industry}</span>
          </Link>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group bg-background p-8 hover:bg-card/50 transition-colors flex flex-col md:items-end md:text-right"
          >
            <Mono>Next case →</Mono>
            <span className="font-display text-2xl lg:text-3xl mt-3 group-hover:text-gold transition-colors">{next.client}</span>
            <span className="text-sm text-muted-foreground mt-2">{next.industry}</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl sm:text-6xl leading-tight">
            Ready to build your <span className="gradient-text italic">growth system</span>?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/213659201481" target="_blank" rel="noreferrer" className="px-8 py-4 bg-gold text-ink font-mono uppercase text-xs tracking-[0.2em] hover:bg-gold-soft transition-colors">
              WhatsApp
            </a>
            <Link to="/" className="px-8 py-4 border border-border font-mono uppercase text-xs tracking-[0.2em] hover:border-gold hover:text-gold transition-colors">
              Back home
            </Link>
          </div>
        </div>
      </section>

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
