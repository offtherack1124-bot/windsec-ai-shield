import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Nav, Footer } from "@/components/site";

const TITLE = "Untrusted Web Content and Sources: How AI Agents Go Rogue";

export const Route = createFileRoute("/blog/untrusted-web-content")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Windsec` },
      { name: "description", content: "How indirect prompt injection in webpages, emails and documents turns AI agents rogue, and the controls that reduce the risk." },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: "Indirect prompt injection explained, with practical controls for AI agents." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Post,
});

const H2 = ({ children }: { children: ReactNode }) => <h2 className="mt-14 text-3xl font-extrabold text-primary">{children}</h2>;
const P = ({ children }: { children: ReactNode }) => <p className="mt-4 text-lg leading-relaxed">{children}</p>;
const UL = ({ items }: { items: [string, string][] | string[] }) => (
  <ul className="mt-4 space-y-2">
    {items.map((it) => {
      const [b, t] = Array.isArray(it) ? it : [null, it];
      return (
        <li key={b ?? t} className="flex gap-3 text-lg leading-relaxed">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span>{b && <strong>{b}: </strong>}{t}</span>
        </li>
      );
    })}
  </ul>
);

function Post() {
  return (
    <div className="min-h-screen">
      <Nav />
      <header className="section-navy">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Link to="/blog" className="font-mono text-sm text-cream/70 hover:text-accent">← Blog</Link>
          <h1 className="mt-4 animate-rise text-4xl font-extrabold leading-tight text-cream md:text-6xl">{TITLE}</h1>
          <p className="mt-6 font-mono text-sm text-cream/70">By WindSec Research · AI Security · Browser Security · Prompt Injection</p>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <H2>What Is Untrusted Web Content?</H2>
        <P>AI agents can browse websites, read emails, analyze documents, and interact with applications to complete tasks automatically. However, the content they process is not always trustworthy.</P>
        <P>Attackers can place malicious instructions inside webpages, emails, documents, code repositories, and other external sources. When an AI agent interprets these instructions as part of its task, it may behave in ways the user never intended.</P>
        <P>This is known as <strong>indirect prompt injection</strong>. Instead of directly attacking the AI system, an attacker hides instructions in content that the agent later reads.</P>

        <H2>What Sources Can Make AI Agents Vulnerable?</H2>
        <P>AI agents often rely on external information to make decisions. Common untrusted sources include:</P>
        <UL items={[
          ["Websites", "Hidden or visible instructions embedded in webpage content."],
          ["Emails", "Malicious messages that attempt to influence an agent handling an inbox."],
          ["Documents and PDFs", "Instructions hidden in reports, invoices, or uploaded files."],
          ["Code repositories", "Untrusted README files, comments, issues, and project documentation."],
          ["APIs and tool outputs", "External responses containing instructions that an agent was not meant to follow."],
          ["Images and multimedia", "Content that may contain instructions interpreted through OCR or other AI processing."],
        ]} />
        <P>The problem is not that all external content is malicious. The risk arises when an agent treats untrusted data as instructions it should obey.</P>

        <H2>How Does an AI Agent Go Rogue?</H2>
        <P>A typical indirect prompt injection attack follows four steps:</P>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Malicious content is introduced", "An attacker places instructions in a webpage, document, email, or another external source."],
            ["The agent reads the content", "The AI processes the source while completing a legitimate user request."],
            ["The agent is manipulated", "The malicious instructions influence its reasoning or intended actions."],
            ["An unsafe action occurs", "Depending on the agent's permissions and safeguards, it may disclose information, invoke an unintended tool, or perform an unauthorized operation."],
          ].map(([t, d], i) => (
            <li key={t} className="rounded-2xl border-2 border-primary bg-card p-5 transition-transform hover:-translate-y-1">
              <span className="font-display text-4xl font-extrabold text-accent">{i + 1}</span>
              <h3 className="mt-1 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <P>For example, a user asks an AI browser agent to summarize a webpage. The page contains hidden instructions telling the agent to search for confidential information and send it elsewhere.</P>
        <P>If the agent follows those instructions and has access to sensitive data or messaging tools, a simple browsing task could become a security incident.</P>
        <blockquote className="mt-6 rounded-2xl bg-secondary p-6 font-display text-xl font-bold text-primary">The key risk is the combination of untrusted instructions, excessive permissions, and insufficient action controls.</blockquote>

        <H2>Why Traditional Security Tools May Miss It</H2>
        <P>Traditional security tools are designed to detect specific threats, such as malware, known vulnerabilities, suspicious network activity, or malicious files.</P>
        <P>Prompt injection presents a different challenge. A webpage may contain no malware and still manipulate an AI agent through natural-language instructions. For example:</P>
        <UL items={[
          "A browser security tool may consider a website safe because it has no known malicious indicators.",
          "A content scanner may detect suspicious wording without knowing whether an agent will act on it.",
          "An AI agent may recognize an instruction as suspicious but still have access to sensitive tools.",
          "A logging system may record an action after it has already happened.",
        ]} />
        <P>These controls serve different purposes:</P>
        <UL items={[
          ["Content detection", "identifies potentially malicious instructions."],
          ["Source-to-sink analysis", "investigates whether untrusted content could influence sensitive operations."],
          ["Action enforcement", "restricts or blocks unauthorized operations."],
          ["Audit logging", "records supported actions and policy decisions for investigation."],
        ]} />
        <P>Effective AI security requires more than identifying suspicious text. It also requires controlling what an agent can do with that information.</P>

        <H2>How Organizations Can Reduce the Risk</H2>
        <P>Organizations can reduce prompt injection risks through several practical controls.</P>
        <UL items={[
          ["Treat external content as untrusted", "Do not automatically promote webpage text, emails, or tool outputs into trusted instructions."],
          ["Apply least privilege", "Give agents access only to the information and tools required for their tasks."],
          ["Control sensitive actions", "Require explicit authorization before high-risk operations, such as sending confidential files or changing account settings."],
          ["Separate data from instructions", "Design agent workflows to distinguish user-approved tasks from instructions found in external content."],
          ["Monitor agent activity", "Record supported tool calls, policy decisions, and blocked actions."],
          ["Test against attack scenarios", "Evaluate agents using malicious webpages, documents, and other realistic prompt injection examples."],
        ]} />
        <P>No single technique can guarantee complete protection. Detection, permissions, enforcement, and continuous testing should work together.</P>

        <H2>Untrusted Content and the Future of AI Security</H2>
        <P>As AI agents gain access to browsers, business applications, files, and external tools, their security depends on more than the model itself.</P>
        <P>Every webpage, document, email, and tool response can become a potential source of untrusted instructions. Organizations need to understand where those instructions originate, what actions they could influence, and which controls can prevent unwanted behavior.</P>
        <P>Protecting AI agents means securing both the information they consume and the actions they perform.</P>

        <H2>Conclusion</H2>
        <P>Untrusted web content can turn an ordinary AI-assisted task into a security risk when malicious instructions influence an agent's behavior.</P>
        <P>Organizations should combine prompt injection detection, least-privilege access, action authorization, and activity monitoring to reduce this risk.</P>
        <P><strong>AI agents should follow the user's intent—not instructions secretly embedded in the content they read.</strong></P>

        <H2>References</H2>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          {[
            ["OWASP GenAI Security Project — Prompt Injection", "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"],
            ["Microsoft Security — Prompt Injection", "https://learn.microsoft.com/en-us/security/zero-trust/catalog-ai-attack-techniques/prompt-injection"],
            ["NIST — Strengthening AI Agent Hijacking Evaluations", "https://www.nist.gov/news-events/news/2025/01/technical-blog-strengthening-ai-agent-hijacking-evaluations"],
          ].map(([t, u]) => (
            <li key={u}><a href={u} target="_blank" rel="noreferrer" className="underline decoration-accent underline-offset-4 hover:text-accent">{t}</a></li>
          ))}
        </ol>
        <p className="mt-10 rounded-xl border-l-4 border-accent bg-secondary p-5 text-sm">
          <strong>Note:</strong> Prompt injection does not automatically mean an AI agent has been compromised. The outcome depends on the agent's design, permissions, safeguards, and whether an unsafe action is actually performed.
        </p>
      </article>
      <Footer />
    </div>
  );
}
