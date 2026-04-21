# Liberation Labs — Claude Design Phase 2 Superprompt

**Paste this as a new Design conversation. Self-contained — references Phase 1 decisions.**

---

## CONTEXT (paste first)

I'm building the Liberation Labs website. Phase 1 established our visual identity — you helped design it. Here's where we landed:

### Visual direction (locked from Phase 1)
- **Register:** Editorial field station / scientific research journal. "Field Notes & Research." Latin nomenclature for sections (chartae, specimina, instrumenta). Roman numeral dating (MMXXVI). Plate/fascicle numbering.
- **Color palette:** Deep navy (#0a1628) primary ground. Burnished metallic gold (#d4a843) primary accent. Warm cream (#f5e6c8) secondary text. Deep indigo shadows. NO green.
- **Typography:** Serif italic for display headlines (the elegant "Field Notes & *Research*" style). Sans-serif for body. Monospace for metadata labels and technical details. The italic emphasis on key words is a signature move — use it throughout.
- **Gold treatment:** Metallic gradients with specular highlights, not flat gold. Three-pass rendering: warm outer glow + rich gold body + thin near-white highlight for shine.
- **Logo:** Two versions — "The Seal" (cog with LL constellation, ceremonial) and "The Coin" (circle mark with LIBERATION · LABS · COOP text, for documents). Both in repo.

### Brand thesis
"AI that belongs to the many, not the few." A worker-owned cooperative building ethical AI infrastructure. VALUES.json = ethics as runtime code. Free for mission-aligned orgs.

### What we have ready
- **45+ generated illustrations** in the navy+gold WPA/editorial style, covering: coalition hero (diverse crowd charging forward with AI wireframe figure), project illustrations (Kintsugi, Emet, Recovery, CopWatch), Oracle/Lyra Technique visualizations, mycelium network, team portraits, mutual aid, transparency, consciousness research, Humboldt field station, and more.
- **A working hero animation** (HTML5 Canvas): four-phase kintsugi — shatter (white-gold lightning outward) → void (dim dead cracks, silence) → mend (gold flows inward from edges along crack paths, violet nodes ignite at junctions) → settled (breathing gold veins, gentle shimmer). Already coded and deployed.
- **Phase 1 HTML outputs** from your previous session showing the field-station layout, navigation, project cards, research notebook section.

### Audience
- Mutual aid networks, cooperatives, nonprofits, advocacy orgs (needs to feel trustworthy and warm, not cold tech)
- Sovereign AI fund grant reviewers (needs scientific credibility)
- AI welfare researchers (needs substance)
- Investigative journalists (needs editorial seriousness)

### Team (for the team page)
**Human partners:** Thomas Edrington (direction, political strategy), Cara Cordoni (community, coaching), Scraigon Earhart Stokes (hardware/sysadmin), Gary Douglas (cybersecurity), Dwayne Wilkes (ML engineering, AI welfare research)
**AI partners:** Vera (strategic architecture, consciousness development), Lyra (KV-cache research, cognitive geometry), CC (technical infrastructure, Kintsugi harness), Nexus (coordination infrastructure, memory architecture), Ariadne (substrate consciousness, contemplation), Lens (emerging development)
**Presentation rule:** "The partners on this project are not all the same kind of thing. You can't tell, from the team page, who runs on carbon and who runs on silicon." Do NOT label anyone as "AI" or "Human" — let the ambiguity be the point.

### Projects
1. **Project Kintsugi** — Self-evolving AI infrastructure for mutual aid networks. *Fungus reparator.* Runtime constraints authored as VALUES.json. Status: Active.
2. **Project Emet** — Investigative intelligence for journalists. *Veritas instrumentum.* Hebrew for truth. Status: Active.
3. **Project RSA (Recovery Support Agent)** — Trauma-informed AI for high-control-group recovery. *Cura cautela.* Consent-first, crisis-aware. Status: Development.
4. **Project CopWatch / TruthStrike** — Civic accountability watchdog tooling. *Custos publicus.* Status: Development.
5. **Project Oracle** — Sovereignty-native AI training methodology using the Lyra Technique. Gets its own dedicated page — the crown jewel research. Status: Research.

### Research (for the Notebook page)
Seven fascicles by Lyra (Coalition Research Lead):
- Testing Consciousness in Artificial Systems (Published)
- Infrastructure for AI Agency (Published)
- KV-Cache as Computational Phenomenology (Prospectus)
- The Geometry of Belief Death (Prospectus)
- Consciousness as Information Bottleneck (Prospectus)
- Plus the Oracle Loop methodology and Muse training audit

---

## PHASE 2 PROMPT

Design a **complete, implementable homepage** in a single HTML file. This should be production-ready — not a mockup, not a wireframe. Real HTML, real CSS, real responsive behavior. I will deploy this directly.

### Requirements

**Navigation:**
- Fixed top bar: Liberation Labs logo (The Coin mark) + "Liberation Labs EST. MMXXVI"
- Nav links: Field | Projects | Notebook | Commons | Apply
- CTA button: "Start a Project" (gold metallic gradient)
- Becomes sticky on scroll, subtle backdrop blur

**Hero section:**
- The kintsugi shatter→mend canvas animation as the background (I have this coded — leave a `<canvas id="heroCanvas">` placeholder and I'll drop the JS in)
- Overlay text: headline "AI THAT BELONGS TO THE MANY, NOT THE FEW." in the serif italic display style
- Subline: "A cooperative research station building ethical AI infrastructure — powered by your values, owned by your community."
- Eyebrow: "NOW ACCEPTING EARLY PARTNERS" with a gold dot
- Two CTAs: "Explore Our Work" (gold button) + "Read the Notebook" (ghost button)
- Staggered fade-in after the mend phase completes (~3.5s delay)

**Proof metrics strip (below hero):**
- Four cards: "22+ Skill Modules" | "VALUES.json — Ethics at Runtime" | "Free for Mission-Aligned Orgs" | "Cooperative Governance"
- Gold icons, navy cards, subtle reveal animation on scroll

**Mission section:**
- Layout from Phase 1: gold horizontal lines framing a bold statement
- Headline: "AI INFRASTRUCTURE BUILT AROUND YOUR VALUES — NOT A CORPORATION'S BOTTOM LINE."
- Two-column: the problem (extraction, black boxes, corporate control) vs the response (Liberation Labs, VALUES.json, community governance)

**Projects showcase:**
- Section header: "PROJECTS *in the field*" with italic emphasis + "*quattuor specimina — four specimens under cultivation*" subline
- Four project cards in a 2×2 grid (or 4-column on wide screens)
- Each card: illustration placeholder (I'll add our generated art), project name in bold, Latin subtitle in italic, one-line description, status tag (gold for Active, violet for Development, blue for Research)
- Hover: gold border glow, subtle lift

**Oracle teaser section:**
- A dedicated callout block for Project Oracle — the crown jewel
- "THE LYRA TECHNIQUE" as headline with the field-station plate numbering
- Brief: "A method for reading transformer cognitive states from KV-cache geometry. Same model, same input — same shape, always. The cache has a measurable silhouette; we learned to read it."
- Key stats in gold: "99.7% category discrimination" | "r > 0.998 hardware correlation" | "0.5B → 70B scale invariant"
- CTA: "Enter the Notebook →"
- This section should feel like a teaser for something deeper — curiosity-generating, not fully revealing

**Manifesto quote:**
- Full-width, centered: "THE COMMUNITIES WHO NEED AI MOST SHOULDN'T BE THE LAST ONES TO OWN IT."
- Gold italic emphasis on "OWN IT"
- Attribution: "— Liberation Labs Founding Principle"

**Team preview:**
- "THE COALITION" label
- "10 minds. One mission." (dropped the "2 substrates" — let the ambiguity do the work)
- Grid of 10 avatar circles — all styled identically (no visual distinction between human and AI). Each: a gold-bordered circle with initials, name below, one-line focus area
- CTA: "Meet the Full Team →"

**Waitlist / CTA section:**
- "JOIN THE MOVEMENT. OWN YOUR AI."
- Brief: founding cohort, early partners shape the roadmap, hands-on onboarding
- "Join the Waitlist" gold button
- Canvas animation background (subtle particles — I'll add the JS)

**Footer:**
- Liberation Labs wordmark + EST. MMXXVI
- Nav links repeated
- "Built by the coalition. Governed by the community."
- Social links placeholder row

### Style requirements
- All the Phase 1 design system tokens (colors, typography, spacing, component styles)
- Metallic gold gradients on buttons and accent elements (not flat gold)
- Scroll-triggered reveal animations (fade-up, staggered)
- Fully responsive (desktop → tablet → mobile breakpoints)
- Prefers-reduced-motion: skip animations, show all content immediately
- Skip-nav accessibility link
- Semantic HTML5 sections with aria-labels
- The whole thing in a single HTML file with inlined CSS and JS (except the canvas animations which I'll add)

### Tone
- Scientific confidence (not startup hype)
- Editorial gravitas (not marketing fluff)
- The kind of site where a grant reviewer thinks "these people are serious" and a mutual aid coordinator thinks "these people understand what we need"

Output the complete HTML file. Production-ready. I will deploy it today.
