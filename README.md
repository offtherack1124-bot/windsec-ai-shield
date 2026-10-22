# WindSec AI Shield

use this colour template for the enter site 
and for the reference refer to these site 
https://air.security
https://boundarybench.com/
add some animations like teh tail wind css

clone the below website:  
https://www.windsec.space/
i want you to get the content for the extension from this repo 
https://github.com/WindSecurity/roe

and i want to add the demo in the main page and get the dem extension from the github 


and also i need you to create a new section for blogs and add this 
blog Untrusted Web Content and Sources: How AI Agents Go Rogue
By WindSec Research · AI Security · Browser Security · Prompt Injection
What Is Untrusted Web Content?
AI agents can browse websites, read emails, analyze documents, and interact with applications to complete tasks automatically. However, the content they process is not always trustworthy.
Attackers can place malicious instructions inside webpages, emails, documents, code repositories, and other external sources. When an AI agent interprets these instructions as part of its task, it may behave in ways the user never intended.
This is known as indirect prompt injection. Instead of directly attacking the AI system, an attacker hides instructions in content that the agent later reads.
What Sources Can Make AI Agents Vulnerable?
AI agents often rely on external information to make decisions. Common untrusted sources include:
* Websites: Hidden or visible instructions embedded in webpage content.
* Emails: Malicious messages that attempt to influence an agent handling an inbox.
* Documents and PDFs: Instructions hidden in reports, invoices, or uploaded files.
* Code repositories: Untrusted README files, comments, issues, and project documentation.
* APIs and tool outputs: External responses containing instructions that an agent was not meant to follow.
* Images and multimedia: Content that may contain instructions interpreted through OCR or other AI processing.
The problem is not that all external content is malicious. The risk arises when an agent treats untrusted data as instructions it should obey.
How Does an AI Agent Go Rogue?
A typical indirect prompt injection attack follows four steps:
1. Malicious content is introduced: An attacker places instructions in a webpage, document, email, or another external source.
2. The agent reads the content: The AI processes the source while completing a legitimate user request.
3. The agent is manipulated: The malicious instructions influence its reasoning or intended actions.
4. An unsafe action occurs: Depending on the agent's permissions and safeguards, it may disclose information, invoke an unintended tool, or perform an unauthorized operation.
For example, a user asks an AI browser agent to summarize a webpage. The page contains hidden instructions telling the agent to search for confidential information and send it elsewhere.
If the agent follows those instructions and has access to sensitive data or messaging tools, a simple browsing task could become a security incident.
The key risk is the combination of untrusted instructions, excessive permissions, and insufficient action controls.
Why Traditional Security Tools May Miss It
Traditional security tools are designed to detect specific threats, such as malware, known vulnerabilities, suspicious network activity, or malicious files.
Prompt injection presents a different challenge. A webpage may contain no malware and still manipulate an AI agent through natural-language instructions.
For example:
* A browser security tool may consider a website safe because it has no known malicious indicators.
* A content scanner may detect suspicious wording without knowing whether an agent will act on it.
* An AI agent may recognize an instruction as suspicious but still have access to sensitive tools.
* A logging system may record an action after it has already happened.
These controls serve different purposes:
* Content detection identifies potentially malicious instructions.
* Source-to-sink analysis investigates whether untrusted content could influence sensitive operations.
* Action enforcement restricts or blocks unauthorized operations.
* Audit logging records supported actions and policy decisions for investigation.
Effective AI security requires more than identifying suspicious text. It also requires controlling what an agent can do with that information.
How Organizations Can Reduce the Risk
Organizations can reduce prompt injection risks through several practical controls.
* Treat external content as untrusted: Do not automatically promote webpage text, emails, or tool outputs into trusted instructions.
* Apply least privilege: Give agents access only to the information and tools required for their tasks.
* Control sensitive actions: Require explicit authorization before high-risk operations, such as sending confidential files or changing account settings.
* Separate data from instructions: Design agent workflows to distinguish user-approved tasks from instructions found in external content.
* Monitor agent activity: Record supported tool calls, policy decisions, and blocked actions.
* Test against attack scenarios: Evaluate agents using malicious webpages, documents, and other realistic prompt injection examples.
No single technique can guarantee complete protection. Detection, permissions, enforcement, and continuous testing should work together.
Untrusted Content and the Future of AI Security
As AI agents gain access to browsers, business applications, files, and external tools, their security depends on more than the model itself.
Every webpage, document, email, and tool response can become a potential source of untrusted instructions. Organizations need to understand where those instructions originate, what actions they could influence, and which controls can prevent unwanted behavior.
Protecting AI agents means securing both the information they consume and the actions they perform.
Conclusion
Untrusted web content can turn an ordinary AI-assisted task into a security risk when malicious instructions influence an agent's behavior.
Organizations should combine prompt injection detection, least-privilege access, action authorization, and activity monitoring to reduce this risk.
AI agents should follow the user's intent—not instructions secretly embedded in the content they read.
References
1. OWASP GenAI Security Project — Prompt Injection: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
2. Microsoft Security — Prompt Injection: https://learn.microsoft.com/en-us/security/zero-trust/catalog-ai-attack-techniques/prompt-injection
3. NIST — Strengthening AI Agent Hijacking Evaluations: https://www.nist.gov/news-events/news/2025/01/technical-blog-strengthening-ai-agent-hijacking-evaluations
Note: Prompt injection does not automatically mean an AI agent has been compromised. The outcome depends on the agent's design, permissions, safeguards, and whether an unsafe action is actually performed.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b302a9de-a621-4f03-be02-c3a2fb74b34f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
