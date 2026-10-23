import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight, ShieldCheck, Eye, FileSearch } from "lucide-react";
import { Nav, Footer, downloadExtension } from "@/components/site";
import { Button } from "@/components/ui/button";
import bird from "@/assets/roe-bird.png.asset.json";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Products — Roe by Windsec" },
    { name: "description", content: "Explore Roe, Windsec's browser extension for inspecting hidden prompt injections, and compare Free and Enterprise capabilities." },
    { property: "og:title", content: "Products — Roe by Windsec" },
    { property: "og:description", content: "Inspect hidden instructions with Roe. Explore browser protection and Windsec Enterprise capabilities." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Products,
});

function Products() {
  return <div className="min-h-screen">
    <Nav />
    <header className="bg-secondary">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-6 py-16 md:py-20">
        <img src={bird.url} alt="" className="absolute right-6 top-8 h-48 w-48 object-contain opacity-15 md:h-80 md:w-80" />
        <div className="relative">
          <p className="font-mono text-xs uppercase text-accent">Windsec / Products</p>
          <h1 className="mt-4 font-display text-7xl font-extrabold md:text-8xl">Roe</h1>
          <p className="mt-4 max-w-xl text-xl">Secure what your AI agents see.</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">Reveal the hidden instructions in pages, emails and files before they become part of your agent’s task.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={downloadExtension}><ArrowDownToLine /> Download Roe</Button>
            <Button asChild variant="outline" size="lg"><Link to="/documentation">Installation guide <ArrowRight /></Link></Button>
          </div>
        </div>
      </div>
    </header>
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-mono text-xs uppercase text-accent">The browser extension</p>
      <h2 className="mt-3 text-4xl font-extrabold">Read between the pixels.</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {[
          [Eye, "See the hidden layer", "Inspect visible text, CSS-hidden content, HTML comments, metadata and invisible Unicode that an agent may read."],
          [ShieldCheck, "Understand the finding", "Findings identify attack patterns and the sensitive actions they could target, including sending data, changing memory or reading files."],
          [FileSearch, "Choose your response", "Warn by default, highlight a finding on the page, or use removal mode to strip hidden nodes. Scan downloaded and selected files too."],
        ].map(([Icon, title, description]) => {
          const Symbol = Icon as typeof Eye;
          return <div key={String(title)} className="border-t-2 border-primary pt-6">
            <Symbol className="h-7 w-7 text-accent" />
            <h3 className="mt-4 text-2xl font-bold">{String(title)}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{String(description)}</p>
          </div>;
        })}
      </div>
    </section>
    <section className="section-navy">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-xs uppercase text-cream/70">Roe editions</p>
        <h2 className="mt-3 text-4xl font-extrabold">For your browser. For your organization.</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="border-t border-cream/25 pt-6">
            <h3 className="text-3xl font-bold">Free</h3>
            <p className="mt-3 text-cream/75">Browser-based inspection for individuals working with AI agents.</p>
            <ul className="mt-6 space-y-3 text-sm text-cream/85">
              <li>Visible and hidden text scanning</li><li>Attack categories and action mapping</li><li>Highlighting and optional hidden-text removal</li><li>GitHub raw checks and download scanning</li>
            </ul>
            <Button className="mt-8" variant="secondary" onClick={downloadExtension}><ArrowDownToLine /> Get Roe</Button>
          </div>
          <div className="border-t border-cream/25 pt-6">
            <h3 className="text-3xl font-bold">Enterprise</h3>
            <p className="mt-3 text-cream/75">Organization-focused capabilities described on the original Windsec site.</p>
            <ul className="mt-6 space-y-3 text-sm text-cream/85">
              <li>Organization policy and agent attribution</li><li>Data loss prevention and approval workflows</li><li>Quarantine and tripwires</li><li>Audit logging</li>
            </ul>
            <Button asChild className="mt-8" variant="secondary"><a href="https://www.windsec.space/" target="_blank" rel="noreferrer">Explore Windsec Enterprise <ArrowRight /></a></Button>
          </div>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold">Detection is one layer of security.</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Roe uses heuristics and can miss novel attacks or flag benign content. A finding does not prove an agent was compromised. Keep agent permissions limited and require approval for sensitive actions.</p>
      <Link to="/documentation" className="mt-6 inline-flex items-center gap-2 font-bold text-accent">Read privacy and limitations <ArrowRight className="h-4 w-4" /></Link>
    </section>
    <Footer />
  </div>;
}