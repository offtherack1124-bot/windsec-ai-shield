import { Link } from "@tanstack/react-router";

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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-primary">
          <span className="inline-block h-4 w-4 rounded-full bg-accent animate-pulse-ring" />
          windsec
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" hash="demo" className="hover:text-accent transition-colors">Demo</Link>
          <Link to="/blog" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Blog</Link>
          <button onClick={downloadExtension} className="rounded-full bg-primary px-4 py-2 text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-accent">
            Get Roe
          </button>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="section-navy">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-10 text-sm md:flex-row">
        <span className="font-display text-xl font-bold">windsec</span>
        <span className="opacity-70">Roe — see what your AI agent sees. · <a className="underline hover:text-accent" href="https://github.com/WindSecurity/roe" target="_blank" rel="noreferrer">GitHub</a></span>
      </div>
    </footer>
  );
}
