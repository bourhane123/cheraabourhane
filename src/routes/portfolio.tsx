import { createFileRoute, Link } from "@tanstack/react-router";
import logoMark from "@/assets/logo-mark.png";
import logoFull from "@/assets/logo-full.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Cheraa Bourhane | Meta Ads Specialist" },
      { name: "description", content: "View or download the full Cheraa Bourhane portfolio — case studies, results and Meta Ads performance highlights." },
      { property: "og:title", content: "Portfolio — Cheraa Bourhane" },
      { property: "og:description", content: "Full portfolio PDF: case studies, results, and performance highlights." },
    ],
  }),
  component: PortfolioPage,
});

const PDF_URL = "/cb-portfolio.pdf";

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoMark} alt="Cheraa Bourhane" className="h-9 w-auto" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] hidden sm:inline">Cheraa Bourhane</span>
          </Link>
          <Link to="/" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors">
            ← Home
          </Link>
        </nav>
      </header>

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-gold">00</span>
            <span className="h-px w-8 bg-gold/60" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">The Portfolio</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <h1 className="lg:col-span-8 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95]">
              The full <em className="gradient-text not-italic">portfolio</em>.
            </h1>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <a
                href={PDF_URL}
                download="Cheraa-Bourhane-Portfolio.pdf"
                className="px-6 py-3 bg-gold text-ink text-xs font-mono uppercase tracking-[0.2em] hover:bg-gold-soft transition-colors"
              >
                Download PDF ↓
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-border text-xs font-mono uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors"
              >
                Open in new tab ↗
              </a>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            A complete walkthrough of selected campaigns, results, and the systems behind them. Browse below or download a copy.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="border border-gold/30 bg-card/40 p-2 shadow-[var(--shadow-card)]">
            <object
              data={PDF_URL}
              type="application/pdf"
              className="w-full h-[80vh] min-h-[600px] bg-black"
            >
              <iframe
                src={PDF_URL}
                title="Cheraa Bourhane Portfolio"
                className="w-full h-[80vh] min-h-[600px] bg-black"
              />
              <div className="p-10 text-center text-muted-foreground">
                Your browser can't display the PDF inline.{" "}
                <a href={PDF_URL} className="text-gold underline" target="_blank" rel="noreferrer">
                  Open the portfolio
                </a>{" "}
                in a new tab instead.
              </div>
            </object>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={logoFull} alt="Cheraa Bourhane" className="h-10 w-auto" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">© 2026 · Performance Marketer · Meta Ads Specialist</span>
        </div>
      </footer>
    </div>
  );
}
