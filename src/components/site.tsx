import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import bird from "@/assets/roe-bird.png.asset.json";

export function downloadExtension() {
  fetch("/roe-extension.zip")
    .then((r) => {
      if (!r.ok) throw new Error(`Download failed: ${r.status}`);
      return r.blob();
    })
    .then((b) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.download = "roe-extension.zip";
      a.click();
      URL.revokeObjectURL(a.href);
    })
    .catch((e) => alert(e.message));
}

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-primary">
          windsec
        </Link>
        <nav aria-label="Main navigation" className="flex w-full flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium sm:w-auto">
          <Link to="/products" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Products</Link>
          <Link to="/documentation" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Documentation</Link>
          <Link to="/" hash="demo" className="hover:text-accent transition-colors">Demo</Link>
          <Link to="/blog" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Blog</Link>
          <Button onClick={downloadExtension} className="transition-transform hover:-translate-y-0.5 hover:bg-accent">
            Get Roe
          </Button>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="section-navy overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <div className="flex items-start justify-between gap-6">
          <p className="max-w-52 text-xs leading-relaxed text-cream/75">Stop hidden prompts before your agent acts on them.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-xs text-cream/75">
            <Link to="/products" className="hover:text-cream">Products</Link>
            <Link to="/documentation" className="hover:text-cream">Documentation</Link>
            <Link to="/blog" className="hover:text-cream">Blog</Link>
            <a className="hover:text-cream" href="https://github.com/WindSecurity/roe" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
        <div className="roe-banner mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 pb-10">
          <span className="roe-wordmark font-display font-extrabold text-cream">roe</span>
          <span className="pb-2 font-display text-xl text-cream md:text-3xl">by windsec</span>
        </div>
        <div className="flex items-center justify-between border-t border-cream/20 py-5 text-xs text-cream/60">
          <span>windsec · Roe</span>
          <img src={bird.url} alt="Roe bird" className="h-10 w-10 object-contain" />
        </div>
      </div>
    </footer>
  );
}
