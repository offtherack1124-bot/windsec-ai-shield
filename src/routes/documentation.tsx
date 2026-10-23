import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Nav, Footer, downloadExtension } from "@/components/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/documentation")({
  head: () => ({ meta: [
    { title: "Documentation — Install and Use Roe | Windsec" },
    { name: "description", content: "Install Roe in Chrome and Chromium browsers. Learn about scanning, warning and removal modes, permissions, privacy and detection limitations." },
    { property: "og:title", content: "Roe Documentation — Windsec" },
    { property: "og:description", content: "Installation, scanning controls, browser permissions, privacy and limitations for Roe." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Documentation,
});

function Documentation() {
  return <div className="min-h-screen">
    <Nav />
    <header className="section-navy">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-xs uppercase text-cream/70">Windsec / Roe</p>
        <h1 className="mt-4 break-words text-4xl font-extrabold sm:text-6xl">Documentation</h1>
        <p className="mt-5 max-w-xl text-cream/80">Install Roe, inspect findings and choose how to handle hidden content.</p>
      </div>
    </header>
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[200px_minmax(0,1fr)]">
      <aside>
        <nav aria-label="Documentation contents" className="flex flex-wrap gap-4 text-sm md:sticky md:top-28 md:flex-col">
          {[['installation', 'Installation'], ['scanning', 'Scanning & findings'], ['controls', 'Warn & remove'], ['permissions', 'Permissions'], ['privacy', 'Privacy'], ['limitations', 'Limitations']].map(([id, label]) => <a key={id} href={`#${id}`} className="text-muted-foreground hover:text-accent">{label}</a>)}
        </nav>
      </aside>
      <main className="min-w-0 max-w-3xl space-y-14">
        <section id="installation" className="scroll-mt-40">
          <p className="font-mono text-xs uppercase text-accent">Getting started</p>
          <h2 className="mt-3 text-3xl font-extrabold">Install Roe</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Roe supports Chrome 110+ and Chromium browsers including Edge, Brave and Arc. Install it as an unpacked extension.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={downloadExtension}><ArrowDownToLine /> Download extension</Button>
            <Button asChild variant="outline"><a href="https://github.com/WindSecurity/roe" target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight /></a></Button>
          </div>
          <ol className="mt-8 divide-y border-y">
            {[
              ["Get the extension", "Download and unzip Roe, or clone the GitHub repository and locate the extension folder."],
              ["Enable Developer mode", "Open chrome://extensions in Chrome (or your browser’s extensions page), then turn on Developer mode."],
              ["Load unpacked", "Choose Load unpacked and select the folder containing manifest.json."],
              ["Open Roe", "Visit a page and click the Roe icon in your browser toolbar. Pin the icon for easier access."],
            ].map(([title, text], i) => <li key={title} className="flex gap-5 py-5"><span className="font-mono text-sm text-accent">0{i + 1}</span><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{text}</p></div></li>)}
          </ol>
        </section>
        <section id="scanning" className="scroll-mt-40">
          <h2 className="text-3xl font-extrabold">Scanning & findings</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Roe inspects visible and hidden page text, comments, attributes and invisible Unicode. Findings group suspicious passages by attack type and map them to potentially sensitive actions.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Use Highlight to locate a finding on the page. GitHub raw checks inspect Markdown an agent may receive, including comments. Roe also supports download and selected-file scanning.</p>
          <Link to="/" hash="demo" className="mt-5 inline-block font-bold text-accent">Try the homepage demo →</Link>
        </section>
        <section id="controls" className="scroll-mt-40">
          <h2 className="text-3xl font-extrabold">Warn & remove</h2>
          <dl className="mt-6 space-y-6">
            <div className="border-l-2 border-accent pl-5"><dt className="font-bold">Warn — default</dt><dd className="mt-2 leading-relaxed text-muted-foreground">Inspect findings without removing page content.</dd></div>
            <div className="border-l-2 border-primary pl-5"><dt className="font-bold">Remove hidden text</dt><dd className="mt-2 leading-relaxed text-muted-foreground">Switch to removal mode to strip hidden nodes as they appear. Removal can affect legitimate content and is not a guarantee of protection.</dd></div>
          </dl>
        </section>
        <section id="permissions" className="scroll-mt-40">
          <h2 className="text-3xl font-extrabold">Download permissions</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">To scan completed downloads, open Roe’s details on your browser’s extensions page and enable <strong className="text-foreground">Allow access to file URLs</strong>. This allows Roe to read downloaded files for scanning.</p>
        </section>
        <section id="privacy" className="scroll-mt-40">
          <h2 className="text-3xl font-extrabold">Privacy</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Scanning takes place in your browser. Pages and files are not uploaded for scanning.</p>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground"><li>Optional GitHub raw checks send the owner, repository and issue number without cookies.</li><li>Optional image re-checks make requests without cookies or referrer.</li><li>Both network checks can be disabled in Roe.</li></ul>
        </section>
        <section id="limitations" className="scroll-mt-40">
          <h2 className="text-3xl font-extrabold">Know the limitations</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground"><li>Detection is heuristic. Paraphrased, translated and novel attacks can be missed; benign content can produce false positives.</li><li>Roe analyzes content, not the actual actions performed by your agent.</li><li>Image text requires OCR, which is not bundled with Roe.</li><li>Removing page content does not protect agents that read screenshots.</li></ul>
          <p className="mt-6 border-t pt-5 text-sm text-muted-foreground">Based on the <a href="https://www.windsec.space/" target="_blank" rel="noreferrer" className="underline hover:text-accent">original Windsec documentation</a>. Refer to the <a href="https://github.com/WindSecurity/roe" target="_blank" rel="noreferrer" className="underline hover:text-accent">Roe repository</a> for the extension source.</p>
        </section>
      </main>
    </div>
    <Footer />
  </div>;
}