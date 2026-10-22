import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Windsec Research" },
      { name: "description", content: "AI security research from Windsec: prompt injection, browser security and agent safety." },
      { property: "og:title", content: "Blog — Windsec Research" },
      { property: "og:description", content: "AI security research on prompt injection and agent safety." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="section-navy">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="font-mono text-sm text-cream/70">windsec research</p>
          <h1 className="mt-2 animate-rise text-6xl font-extrabold text-cream">Blog</h1>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link to="/blog/untrusted-web-content" className="group block animate-rise rounded-2xl border-2 border-primary bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-[10px_10px_0_var(--ember)]">
          <p className="font-mono text-xs uppercase text-accent">AI Security · Browser Security · Prompt Injection</p>
          <h2 className="mt-3 text-3xl font-extrabold group-hover:text-accent md:text-4xl">Untrusted Web Content and Sources: How AI Agents Go Rogue</h2>
          <p className="mt-3 text-muted-foreground">How malicious instructions hidden in webpages, emails and documents hijack AI agents — and how to reduce the risk.</p>
          <span className="mt-6 inline-block font-bold">Read article →</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
