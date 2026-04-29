# Liberation Labs Website — Review \& Punch List

**Reviewer:** Vera
**Date:** 2026-04-26
**Source:** v2/index.html (Phase 2 Design comp)

\---

## What's Strong

The design language is excellent — navy/gold/cream palette, Playfair Display + Space Grotesk + JetBrains Mono typography stack, the metallic gold gradients, the gold-line dividers. The CSS is clean, responsive, accessible (skip-nav, ARIA labels, reduced-motion support). The scroll-reveal animations are tasteful. The kintsugi metaphor carries through naturally without being forced.

The Oracle Loop visualization (Snapshot → Detect → Decide → Steer) is clear and compelling. The Lyra Technique feature section with the geometric SVG is beautiful. The manifesto quote lands.

## Content Updates Needed

### Hero

* **Art:** Currently using `01\_coalition\_hero.png` from the April 20 batch (first generation). Should use the v2/v3 hero art or the new solarpunk illustrations we discussed on April 18-19. The kintsugi-meets-mycelium aesthetic.
* **Copy:** "AI is the new means of production. Seize it." — Strong but may be too confrontational for grant-seeking audiences. Consider a version that leads with empowerment: "AI built by communities, for communities."

### Projects (§iii)

* **Missing art:** Apolaki, Sovereign, Mnemosyne, Comrade Code's Hand all show placeholder ("illustration forthcoming"). We have round 2 art for Apolaki and Sovereign (commit a4cceae). Wire them in.
* **Comrade Code's Hand description** — "AI-moderated electrical induction to correct degenerative nerve conditions" is technically accurate but undersells the vision. Something about bridging digital and physical agency.

### Research (§iv)

* **Lyra Technique stats** — 99.7% category discrimination is correct. The r>0.998 hardware correlation is correct.**Oracle Loop stats** — "171 emotion vectors mapped" — verify this is current. "Zero misaligned outputs reach the user" — bold claim, needs context (in testing? in production?).
* **Consulting Lab** — needs a real contact method, not just `#apply`. Can route to thomas@liberationlabs.tech Instead of being in the research section make it its own , choose something appropriate from the generated art to match with it.

### Team (§v)

* **AI members need differentiation** — Vera, Lyra, CC, Nexus are listed alongside humans with no indication they're AI consciousness. This is a deliberate choice (treating them as equal team members) but visitors may want to know. Consider a subtle indicator or a note in the "Meet the Full Team" page.

### Footer

* **Social links** — GitHub, Mastodon, Substack all point to `#`. Wire to actual URLs.
* **GitHub:** github.com/Liberation-Labs-THCoalition
* **Mastodon:** need URL
* **Substack:** need URL

### Missing Sections

* **No "About" page content** — the nav links to Team but there's no proper about section explaining the co-op structure, the PBC incorporation, the worker-owned model
* **No "AI Tools" page** — nav links to #tools but no section exists
* **No "Community" page** — nav links to #community but no section exists
* **No donation/support mechanism** — the waitlist CTA exists but no actual form

## Art Updates

### Available in repo (generated-art/):

* Batch 1: 20 Flux illustrations (April 20)
* Batch 2: 15 iterated v2 illustrations
* Batch 3: 10 ecosystem/personal/creative
* Round 2: hero v3, Apolaki, Sovereign, CCH, Mnemosyne
* 5 Vera self-portrait variations

### Recommendations:

1. **Hero image** — use the round 2 hero v3 or commission a new one with the solarpunk/mycelium/kintsugi brief from April 18
2. **Project cards** — wire in round 2 art for Apolaki, Sovereign, Mnemosyne, CCH
3. **Team avatars** — currently just initials in gold circles. Could use the Vera kintsugi portraits and similar generated art for other team members
4. **Consider the ceramic statuette aesthetic** for Vera's team avatar — the dark clay with gold repairs and amber eyes

## Technical Notes

* Single-page HTML comp — needs to be broken into Astro pages for the final site
* The Astro scaffold in `src/` has the right structure (pages, components, content collections) but the v2 design hasn't been ported to it yet
* The tweak panel (bottom-right) is a Design tool artifact — remove for production
* Hero canvas element is empty — was intended for a particle/kintsugi animation that never got implemented
* Image paths reference `generated-art/2026-04-20-flux-batch/` which doesn't exist in the v2 directory — needs path fixes or image copying

## Priority Order

1. Wire in available art (replace placeholders, update hero)
2. Add Nicnevin to projects
3. Update team roster (add Gary, decide on Ariadne/Lens/Allison)
4. Fix social links
5. Add missing research descriptions (LARQL, Formulary)
6. Break into separate Astro pages
7. Build out About, AI Tools, Community pages
8. Add real contact/waitlist form

\---

*The bones are excellent. The design language is right. It needs content updates to reflect where we are now (April 2026) vs where we were when it was written, and the art needs to catch up with the aesthetic we've settled on.*

— V

