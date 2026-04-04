# Transparent Humboldt Coalition (thcoalition.net) -- Visual Storyboard & Design Workup

**Document Version:** 1.0
**Date:** March 28, 2026
**Status:** DESIGN REVIEW -- NOT FOR EXECUTION
**Stack:** Astro 4 + Tailwind 3 + Keystatic CMS + React (existing scaffold)

---

## Table of Contents

1. [Design System Foundation](#1-design-system-foundation)
2. [Global Components](#2-global-components)
3. [Page 1: Homepage](#3-page-1-homepage)
4. [Page 2: About](#4-page-2-about)
5. [Page 3: Investigations](#5-page-3-investigations)
6. [Page 4: Data Portal](#6-page-4-data-portal)
7. [Page 5: Blog](#7-page-5-blog)
8. [Page 6: Contact](#8-page-6-contact)
9. [ComfyUI Image Asset Prompts](#9-comfyui-image-asset-prompts)
10. [Implementation Notes](#10-implementation-notes)

---

## 1. Design System Foundation

### 1.1 Color Palette

```
PRIMARY COLORS
+-----------+------------------+-------------------------------------------+
| Token     | Hex              | Usage                                     |
+-----------+------------------+-------------------------------------------+
| navy-900  | #1a2332          | Headers, hero bg, footer bg, body text    |
| navy-800  | #1f2d3f          | Code blocks, input bg (dark contexts)     |
| navy-700  | #27394e          | Borders on dark backgrounds               |
| navy-50   | #e8ecf1          | Badges, light accent backgrounds          |
+-----------+------------------+-------------------------------------------+

TRANSPARENCY BLUE (Primary Action)
+-----------+------------------+-------------------------------------------+
| Token     | Hex              | Usage                                     |
+-----------+------------------+-------------------------------------------+
| trans-600 | #2563eb          | Link text, hover states                   |
| trans-500 | #3b82f6          | Buttons, active nav, focus rings          |
| trans-400 | #60a5fa          | Accent on dark bg, animated dots          |
| trans-300 | #93c5fd          | Badge text (dark bg), underline accents   |
| trans-200 | #bfdbfe          | Hover borders                             |
| trans-100 | #dbeafe          | Step indicators, light backgrounds        |
| trans-50  | #eff6ff          | Card hover bg, section backgrounds        |
+-----------+------------------+-------------------------------------------+

AMBER (Secondary Accent / Call-to-Action)
+-----------+------------------+-------------------------------------------+
| Token     | Hex              | Usage                                     |
+-----------+------------------+-------------------------------------------+
| amber-500 | #f59e0b          | Data section CTAs, "Open Data" badge      |
| amber-400 | #fbbf24          | Terminal output accent, hover             |
| amber-100 | #fef3c7          | Warning/tip backgrounds                   |
| amber-50  | #fffbeb          | Secure tips card bg                       |
+-----------+------------------+-------------------------------------------+

NEUTRALS (Slate)
+-----------+------------------+-------------------------------------------+
| Token     | Hex              | Usage                                     |
+-----------+------------------+-------------------------------------------+
| slate-50  | #fafafa          | Page background (primary)                 |
| slate-100 | #f4f4f5          | Alternate section bg                      |
| slate-200 | #e4e4e7          | Card borders, dividers                    |
| slate-300 | #d4d4d8          | Input borders, subtle borders             |
| slate-400 | #a1a1aa          | Meta text, timestamps, captions           |
| slate-500 | #71717a          | Secondary text, placeholders              |
| slate-600 | #52525b          | Body text (secondary), nav links          |
| slate-700 | #3f3f46          | Body text (primary in prose)              |
| slate-800 | #27272a          | Body text (strong)                        |
+-----------+------------------+-------------------------------------------+

STATUS COLORS (Investigation/Category)
+-----------+------------------+-------------------------------------------+
| Token     | Hex Context      | Usage                                     |
+-----------+------------------+-------------------------------------------+
| emerald   | 50/500/700       | Active status, checkmarks, success        |
| red       | 50/700           | Investigation category badge              |
| purple    | 50/700           | Press release category badge              |
+-----------+------------------+-------------------------------------------+
```

### 1.2 Typography System

```
FONT STACK (loaded via Google Fonts, existing)
+------------------+------------------+-------------------------------------------+
| Token            | Family           | Usage                                     |
+------------------+------------------+-------------------------------------------+
| font-display     | Playfair Display | H1, H2, card titles, stat values          |
|                  | 600/700/800      | Serif authority -- conveys credibility     |
+------------------+------------------+-------------------------------------------+
| font-body        | Inter            | Body text, nav, buttons, labels, forms     |
|                  | 400/500/600/700  | Clean sans-serif -- readability first      |
+------------------+------------------+-------------------------------------------+
| font-mono        | JetBrains Mono   | Terminal mockups, data snippets, code      |
|                  | 400              | Technical credibility                      |
+------------------+------------------+-------------------------------------------+

SIZE SCALE (applied per element)
+---------------------------+----------+-------------+---------------------------+
| Element                   | Size     | Weight      | Color                     |
+---------------------------+----------+-------------+---------------------------+
| Hero H1 (desktop)        | 60px/6xl | 700 bold    | white                     |
| Hero H1 (mobile)         | 36px/4xl | 700 bold    | white                     |
| Page title H1 (desktop)  | 48px/5xl | 700 bold    | white                     |
| Page title H1 (mobile)   | 36px/4xl | 700 bold    | white                     |
| Section H2 (desktop)     | 36px/4xl | 700 bold    | navy-900                  |
| Section H2 (mobile)      | 30px/3xl | 700 bold    | navy-900                  |
| Card title H3            | 18px/lg  | 700 bold    | navy-900                  |
| Body text                | 14px/sm  | 400         | slate-600                 |
| Body text (large/intro)  | 18px/lg  | 400         | slate-600 or slate-300    |
| Nav links                | 14px/sm  | 500 medium  | slate-600                 |
| Badges/labels            | 10px/2xs | 600 semi    | varies (uppercase+tracked)|
| Button text              | 14px/sm  | 600 semi    | white or navy-900         |
| Stat values              | 30px/3xl | 700 bold    | white (font-display)      |
| Stat labels              | 10px/2xs | 500 medium  | slate-400 (uppercase)     |
| Meta/timestamps          | 10px/2xs | 500 medium  | slate-400                 |
+---------------------------+----------+-------------+---------------------------+
```

### 1.3 Spacing & Layout Grid

```
LAYOUT
- Max content width: 1280px (max-w-7xl)
- Horizontal padding: 16px (mobile) / 24px (sm) / 32px (lg)
- Section vertical padding: 80px (py-20) standard
- Card padding: 24px (p-6) standard, 32px (p-8) on sm+

GRID
- Primary: 12-column CSS Grid via Tailwind
- Card grids: 1 col (mobile) -> 2 col (sm/640px) -> 3-4 col (lg/1024px)
- Sidebar layouts: 3/5 split (lg:grid-cols-5) or 1/2 split (lg:grid-cols-2)

BORDER RADIUS
- Cards/panels: 12px (rounded-xl)
- Buttons: 8px (rounded-lg)
- Badges: full (rounded-full)
- Logo icon: 8px (rounded-lg)
- Inputs: 8px (rounded-lg)
```

### 1.4 Component Tokens

```
BUTTONS
+------------------+-------------------+--------------------+-------------------+
| Variant          | Background        | Text               | Border            |
+------------------+-------------------+--------------------+-------------------+
| Primary          | trans-500         | white              | none              |
| Primary hover    | trans-600         | white              | none              |
| Secondary        | transparent       | slate-700          | slate-300         |
| Secondary hover  | transparent       | navy-900           | slate-400         |
| Amber CTA        | amber-500         | navy-900           | none              |
| Amber CTA hover  | amber-400         | navy-900           | none              |
| Dark outline     | transparent       | slate-200          | slate-600         |
| Dark outline hvr | transparent       | white              | slate-400         |
| Download         | navy-900          | white              | none              |
| Download hover   | navy-800          | white              | none              |
+------------------+-------------------+--------------------+-------------------+
All buttons: px-6 py-3, rounded-lg, font-semibold, 150ms transition
Focus: ring-2 ring-trans-400 ring-offset-2

CARDS
- Background: white
- Border: 1px slate-200
- Hover border: trans-200 or slate-300
- Hover shadow: shadow-lg
- Transition: all 200ms ease
- Radius: rounded-xl (12px)

BADGES
- Padding: px-2.5 py-0.5
- Radius: rounded-full
- Text: 2xs, semibold, uppercase, tracked
- Colored per category (see NewsCard.astro)
```

---

## 2. Global Components

### 2.1 Header (existing -- Header.astro)

```
DESKTOP (>=1024px)
+========================================================================+
| [LOGO ICON] Transparent Humboldt  | About Inv Data Blog Events Contact | Liberation Labs >|
|              Coalition             |                                    |                   |
+========================================================================+
  navy-900 bg   slate-500 sub         slate-600 text, 500 weight         amber-600 text
  rounded-lg    2xs uppercase         hover: navy-900 + slate-50 bg
  10x10 icon    tracked               active: trans-600 + trans-50 bg

MOBILE (<1024px)
+========================================+
| [LOGO ICON]                    [MENU]  |
+========================================+
| About                                  |  <- slides down
| Investigations                         |
| Data                                   |
| Blog                                   |
| Events                                 |
| Contact                                |
| Liberation Labs ->                     |
+========================================+

BEHAVIOR:
- Sticky top-0, z-50
- bg-white/95 with backdrop-blur-sm
- 64px height (mobile) / 72px height (desktop via h-18)
- Border-b slate-200
- Logo icon: navy-900 bg, hover -> trans-600 bg (200ms transition)
- Mobile toggle: JS aria-expanded pattern (existing)
- Skip-to-content link: sr-only, focus -> visible blue pill
```

### 2.2 Footer (existing -- Footer.astro)

```
+========================================================================+
| FOOTER (bg: navy-900, text: slate-300)                                 |
+========================================================================+
|                                                                        |
| [LOGO] Transparent Humboldt  | NAVIGATE      | RESOURCES     | STAY   |
|         Coalition            | About          | FOIA Guide    | INFORMED|
|                              | Investigations | County Budgets|         |
| Community-powered govt       | Data           | Contract DB   | [email]|
| accountability for Humboldt  | Blog           | Meeting Arch  | [SUB]  |
| County.                      | Events         | Lib Labs (amb)|         |
|                              | Contact        |               | No spam|
| 501(c)(3) nonprofit         |                |               |         |
|                                                                        |
+------------------------------------------------------------------------+
| (c) 2026 THC. CC BY 4.0       Privacy | [mastodon] [bluesky]          |
+------------------------------------------------------------------------+

COLOR APPLICATION:
- Background: navy-900
- Logo accent box: trans-500
- Column headers: white, sm, semibold, uppercase tracked
- Links: slate-400, hover -> white (transition)
- Liberation Labs link: amber-400, hover -> amber-300
- Newsletter input: navy-800 bg, navy-700 border
- Subscribe button: trans-500, hover -> trans-600
- Bottom bar: border-t navy-800
- Copyright: slate-500, xs
- Social icons: slate-500, hover -> white

MOBILE:
- Stacks to single column
- Newsletter remains functional
- Social links centered
```

---

## 3. Page 1: Homepage

### 3.1 Full Page Structure

```
+========================================================================+
|                           HEADER (sticky)                              |
+========================================================================+
|                                                                        |
|  HERO SECTION (navy-900 bg, full width)                               |
|  - Badge, H1, subtitle, dual CTAs, stats bar                          |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  FOCUS AREAS (white bg)                                                |
|  - "What We Watch" -- 4-column icon cards                             |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  LATEST NEWS (slate-50 bg)                                            |
|  - 3-column blog card grid                                            |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  DATA HIGHLIGHT (navy-900 bg)                                         |
|  - Split: copy left, terminal mockup right                            |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ** NEW: ACCOUNTABILITY TICKER (white bg) **                          |
|  - Animated number counters                                           |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  CTA (white bg)                                                       |
|  - "Transparency Takes a Community"                                   |
|                                                                        |
+========================================================================+
|                             FOOTER                                     |
+========================================================================+
```

### 3.2 Hero Section (existing -- Hero.astro, ENHANCEMENTS NOTED)

```
+========================================================================+
| bg: navy-900                                                           |
| DECORATIVE: grid pattern (3% opacity), gradient right, blur orb left  |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-7xl, px-8, py-36 (desktop) / py-20 (mobile)               |  |
|  |                                                                  |  |
|  |  [*] Government Watchdog Since 2022     <- badge: trans-500/10   |  |
|  |      (pulsing dot)                         border, trans-300 text|  |
|  |                                                                  |  |
|  |  Shining Light on                       <- H1: font-display     |  |
|  |  Humboldt County Government                6xl/60px, white, bold|  |
|  |                                            leading-[1.1]        |  |
|  |                                                                  |  |
|  |  We monitor public finances, track      <- p: xl/20px           |  |
|  |  government contracts, attend              slate-300, relaxed   |  |
|  |  committee meetings, and publish           max-w-2xl            |  |
|  |  raw data so every resident can                                 |  |
|  |  hold power accountable.                                        |  |
|  |                                                                  |  |
|  |  [View Investigations ->]  [Browse Public Data]                 |  |
|  |   trans-500 bg, white       border slate-600, slate-200 text    |  |
|  |   hover: trans-600          hover: border slate-400, white text |  |
|  |                                                                  |  |
|  |  ------border-t white/10--------------------------------------  |  |
|  |                                                                  |  |
|  |  200+              50+             $2.4M           2022         |  |
|  |  FOIA REQUESTS     MEETINGS        CONTRACTS       YEAR         |  |
|  |  FILED             MONITORED       TRACKED         FOUNDED      |  |
|  |                                                                  |  |
|  |  Values: 3xl, white, font-display, bold                        |  |
|  |  Labels: 2xs, slate-400, uppercase, tracked, medium             |  |
|  |                                                                  |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

IMAGERY DIRECTION:
- No photographic hero image -- the grid pattern + gradient creates
  a sophisticated data-forward aesthetic
- The badge with pulsing dot creates "live monitoring" feel
- ENHANCEMENT: Consider adding a subtle topographic map outline of
  Humboldt County as a 5-8% opacity overlay on the right side

INTERACTIONS:
- Badge dot: CSS pulse animation (existing)
- Stats: On scroll into view, numbers count up from 0 (IntersectionObserver)
  Duration: 1.5s, easing: ease-out
- CTAs: 150ms color transition on hover
- Background gradient: static (no animation needed)

MOBILE ADAPTATION:
- H1 drops to 4xl/36px
- CTAs stack vertically (flex-col)
- Stats: 2x2 grid instead of 4-column
- Padding: py-20 (less vertical space)
- Subtitle: lg instead of xl
```

### 3.3 Focus Areas Section (existing -- index.astro, ENHANCEMENTS NOTED)

```
+========================================================================+
| bg: white, py-20                                                       |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  |                       What We Watch                              |  |
|  |         Systematic, nonpartisan monitoring of                    |  |
|  |         Humboldt County government. We follow                    |  |
|  |         the data wherever it leads.                              |  |
|  |                                                                  |  |
|  |  +------------+  +------------+  +------------+  +------------+  |  |
|  |  | [$] icon   |  | [doc] icon |  | [eye] icon |  | [db] icon  |  |  |
|  |  |            |  |            |  |            |  |            |  |  |
|  |  | Financial  |  | Public     |  | Meeting    |  | Data       |  |  |
|  |  | Oversight  |  | Records    |  | Monitoring |  | Infra      |  |  |
|  |  |            |  |            |  |            |  |            |  |  |
|  |  | Tracking   |  | Filing     |  | Attending  |  | Building   |  |  |
|  |  | county...  |  | FOIA...    |  | and doc... |  | open...    |  |  |
|  |  +------------+  +------------+  +------------+  +------------+  |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

CARD ANATOMY:
+------------------------------------------+
| border: 1px slate-200, rounded-xl        |
| hover: border trans-200, shadow-md       |
| p-6                                      |
|                                          |
| +------+                                 |
| | ICON | 48x48, rounded-lg              |
| +------+ bg: trans-50                    |
|          hover: trans-100                |
|          icon: 24x24, trans-600          |
|                                          |
| Financial Oversight   <- lg, semibold    |
|                          navy-900        |
|                                          |
| Tracking county       <- sm, regular    |
| budgets, expenditures    slate-600      |
| and contract awards...   leading-relaxed|
+------------------------------------------+

ENHANCEMENT: Add a subtle amber-500 top border (2px) on hover
to create a "highlighted" feel for each card.

INTERACTIONS:
- Cards: fade-in on scroll (stagger 100ms per card)
- Hover: border color + shadow transition (200ms)
- Icon background: color transition (200ms)

MOBILE: 2-col grid (sm) -> 1-col (below sm)
```

### 3.4 Latest News Section (existing -- index.astro)

```
+========================================================================+
| bg: slate-50, py-20                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | Latest Updates                    View all posts ->              |  |
|  | News, investigations, and data releases                         |  |
|  |                                                                  |  |
|  | +------------------+ +------------------+ +------------------+  |  |
|  | | [hero image]     | | [hero image]     | | [hero image]     |  |  |
|  | | 16:9 aspect      | | 16:9 aspect      | | 16:9 aspect      |  |  |
|  | |                  | |                  | |                  |  |  |
|  | | [INVESTIGATION]  | | [DATA RELEASE]   | | [NEWS]           |  |  |
|  | | Jan 15, 2026     | | Jan 10, 2026     | | Jan 5, 2026      |  |  |
|  | |                  | |                  | |                  |  |  |
|  | | Article Title    | | Article Title    | | Article Title    |  |  |
|  | | Here in Bold     | | Here in Bold     | | Here in Bold     |  |  |
|  | |                  | |                  | |                  |  |  |
|  | | Preview text     | | Preview text     | | Preview text     |  |  |
|  | | three lines max  | | three lines max  | | three lines max  |  |  |
|  | | with clamp...    | | with clamp...    | | with clamp...    |  |  |
|  | |                  | |                  | |                  |  |  |
|  | | THC Staff        | | THC Staff        | | THC Staff        |  |  |
|  | |        Read more>| |        Read more>| |        Read more>|  |  |
|  | +------------------+ +------------------+ +------------------+  |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

NEWS CARD ANATOMY (existing -- NewsCard.astro):
+------------------------------------------+
| [Hero Image - 16:9]                      |
| hover: scale-105 (300ms)                 |
|                                          |
| p-6                                      |
|                                          |
| [INVESTIGATION] Jan 15, 2026            |
|  red-50 bg         2xs slate-400        |
|  red-700 text                           |
|  2xs, semibold, uppercase               |
|                                          |
| County Contract Award    <- lg          |
| Patterns FY 2023-2024      font-display |
|                             bold         |
|                             navy-900     |
|                             hover: trans |
|                                          |
| Analyzing competitive    <- sm          |
| bidding rates, sole-        slate-600   |
| source justifications...    line-clamp-3|
|                                          |
| ---border-t slate-100---                |
| THC Staff           Read more ->        |
| 2xs slate-500       sm trans-600        |
+------------------------------------------+

CATEGORY BADGE COLORS:
  Investigation: red-50 bg / red-700 text
  News: trans-50 / trans-700
  Press Release: purple-50 / purple-700
  Analysis: navy-50 / navy-700
  Data Release: emerald-50 / emerald-700
  Community: amber-50 / amber-700

INTERACTIONS:
- Card: border transition + shadow-lg on hover (200ms)
- Image: scale 1.05 on card hover (300ms)
- Title link: color -> trans-600 on hover
- "Read more" arrow: translateX(2px) on card hover
- Empty state: centered message with newsletter prompt

MOBILE: 1-col -> 2-col at sm -> 3-col at lg
"View all posts" link: hidden on mobile, replaced by centered
link below cards
```

### 3.5 Data Highlight Section (existing -- index.astro)

```
+========================================================================+
| bg: navy-900, py-20                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  |                                                                  |  |
|  | LEFT COL (lg:1/2)          | RIGHT COL (lg:1/2)                 |  |
|  |                            |                                     |  |
|  | [Open Data]  <- amber      | +--------------------------------+ |  |
|  |   badge, amber-500/10 bg   | | [*] [*] [*]  thcoalition/data | |  |
|  |   amber-400 text           | |  red amber green   slate-500   | |  |
|  |                            | |                                | |  |
|  | Raw Data.      <- H2       | | $ ls data/humboldt-county/    | |  |
|  | No Spin.         display   | |   budgets/                    | |  |
|  | Your Right.      4xl/36px  | |   contracts/        trans-400 | |  |
|  |                   white    | |   foia-responses/             | |  |
|  |                   bold     | |   meeting-minutes/            | |  |
|  |                            | |   salary-data/                | |  |
|  | We publish source          | |   vendor-payments/            | |  |
|  | documents alongside        | |                                | |  |
|  | every analysis...          | | $ wc -l contracts/fy2024/*.csv| |  |
|  | <- lg, slate-300           | |   3,847 total records  amber  | |  |
|  |                            | |                                | |  |
|  | [Download] Browse Data     | | $ _  (blinking cursor)        | |  |
|  |  amber-500 bg              | +--------------------------------+ |  |
|  |  navy-900 text             |  bg: navy-800                     |  |
|  |  hover: amber-400          |  border: navy-700                 |  |
|  |  download icon left        |  font-mono, sm                    |  |
|  |                            |  rounded-xl                       |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

TERMINAL MOCKUP DETAIL:
- Window chrome: three colored dots (red/amber/green at 60% opacity)
- URL bar: "thcoalition.net/data" in slate-500
- Directory listing: trans-400 for file/folder names
- Output values: amber-400 for data counts
- Cursor: animate-pulse on underscore character
- Background: navy-800 with navy-700 border
- Font: JetBrains Mono (font-mono)

INTERACTIONS:
- Terminal text: typed in sequence on scroll (optional enhancement)
  Each line appears with 200ms delay after previous
- Amber CTA button: hover transition 150ms
- ENHANCEMENT: Add a "last updated" timestamp below terminal
  in slate-500 to show data freshness

MOBILE:
- Stacks vertically: copy above, terminal below
- Terminal mockup: full width with 12px margin
- mt-12 gap between columns
```

### 3.6 NEW: Accountability Ticker Section

```
+========================================================================+
| bg: white, py-16                                                       |
| border-t and border-b: slate-200                                       |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  |                                                                  |  |
|  |  $47.2M         147           18            312                 |  |
|  |  In County      Public       Active        Documents            |  |
|  |  Contracts      Records      FOIA          Published            |  |
|  |  Monitored      Analyzed     Requests                           |  |
|  |                                                                  |  |
|  |  navy-900       navy-900     navy-900      navy-900             |  |
|  |  4xl, display   4xl, display 4xl, display  4xl, display         |  |
|  |  bold           bold         bold          bold                 |  |
|  |                                                                  |  |
|  |  slate-500      slate-500    slate-500     slate-500            |  |
|  |  sm, medium     sm, medium   sm, medium    sm, medium           |  |
|  |                                                                  |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

PURPOSE: Reinforce credibility with hard numbers in a horizontal
ticker-style layout. This is the "impact bar" -- data-forward,
not marketing-forward.

INTERACTIONS:
- Numbers count up from 0 when section enters viewport
- IntersectionObserver trigger, 1.5s duration, ease-out
- $ prefix for dollar amounts animates in with value
- Each counter staggers start by 150ms

MOBILE:
- 2x2 grid
- Numbers drop to 3xl
- Labels stay sm

COLOR APPLICATION:
- Values: navy-900 (on white bg, high contrast)
- Labels: slate-500
- No additional decorative elements -- let the numbers speak
```

### 3.7 CTA Section (existing -- index.astro)

```
+========================================================================+
| bg: white, py-20                                                       |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  |                      (centered, max-w-3xl)                       |  |
|  |                                                                  |  |
|  |           Transparency Takes a Community                         |  |
|  |           <- 4xl, display, bold, navy-900                        |  |
|  |                                                                  |  |
|  |    Whether you can volunteer time, share expertise,              |  |
|  |    or simply spread the word, there's a role for you             |  |
|  |    in building a more transparent Humboldt County.               |  |
|  |    <- lg, slate-600, max-w-2xl                                   |  |
|  |                                                                  |  |
|  |    [Get Involved]          [Learn About Our Mission]             |  |
|  |     trans-500 bg            border slate-300                     |  |
|  |     white text              slate-700 text                       |  |
|  |     hover: trans-600        hover: border-400, navy-900          |  |
|  |                                                                  |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

ENHANCEMENT: Add a thin amber-500 decorative line (40px wide, 3px tall)
centered above the heading to create visual anchor.

INTERACTIONS: Standard button transitions (150ms)
MOBILE: CTAs stack vertically, full width
```

---

## 4. Page 2: About

### 4.1 Full Page Structure

```
+========================================================================+
|                           HEADER (sticky)                              |
+========================================================================+
|                                                                        |
|  PAGE HEADER (navy-900 bg)                                            |
|  - Title, intro paragraph                                             |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  MISSION (white bg)                                                   |
|  - 2/5 + 3/5 split: sticky title left, prose right                   |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  VALUES / PRINCIPLES (slate-50 bg)                                    |
|  - 2x2 card grid                                                     |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ** NEW: TEAM SECTION (white bg) **                                   |
|  - Grid of team member cards                                          |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  TIMELINE (white bg)                                                  |
|  - Vertical timeline with dots and year badges                        |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  GET INVOLVED (trans-50 bg)                                           |
|  - 3-column action cards + CTA                                       |
|                                                                        |
+========================================================================+
|                             FOOTER                                     |
+========================================================================+
```

### 4.2 Page Header

```
+========================================================================+
| bg: navy-900, py-20                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-3xl                                                        |  |
|  |                                                                  |  |
|  | About the Coalition            <- H1: 5xl, display, bold, white |  |
|  |                                                                  |  |
|  | We're a nonpartisan, community-                                  |  |
|  | powered watchdog organization   <- xl, slate-300, relaxed       |  |
|  | dedicated to bringing                                            |  |
|  | transparency and accountability                                  |  |
|  | to Humboldt County government.                                   |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

CONSISTENT PATTERN: All internal pages use this same page header
structure. Navy-900 bg, max-w-3xl content, H1 + subtitle.
```

### 4.3 Mission Section (existing)

```
+========================================================================+
| bg: white, py-20                                                       |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | lg:grid-cols-5, gap-16                                           |  |
|  |                                                                  |  |
|  | LEFT (2/5)              | RIGHT (3/5)                            |  |
|  |                         |                                         |  |
|  | Our Mission   <- H2    | The Transparent Humboldt Coalition      |  |
|  | display, 3xl           | exists to ensure that every resident    |  |
|  | bold, navy-900         | of Humboldt County has meaningful       |  |
|  | sticky top-24          | access to information about how their   |  |
|  |                        | government operates, how public money   |  |
|  |                        | is spent, and how decisions that affect |  |
|  |                        | their lives are made.                   |  |
|  |                        |                                         |  |
|  |                        | We believe that transparency is not a   |  |
|  |                        | partisan issue...                       |  |
|  |                        |                                         |  |
|  |                        | We do the unglamorous work of           |  |
|  |                        | democracy...                            |  |
|  |                        |                                         |  |
|  |                        | <- prose-lg, slate-600, relaxed         |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

KEY DETAIL: The "Our Mission" heading is sticky (top-24) so it
stays visible as the user scrolls through the three paragraphs.
This is a ProPublica-style technique for long text sections.
```

### 4.4 Values Section (existing)

```
+========================================================================+
| bg: slate-50, py-20                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  |              Our Principles  <- centered H2                      |  |
|  |                                                                  |  |
|  | max-w-4xl, sm:grid-cols-2, gap-8                                |  |
|  |                                                                  |  |
|  | +-------------------------+ +-------------------------+          |  |
|  | | bg: white               | | bg: white               |          |  |
|  | | border: slate-200       | | border: slate-200       |          |  |
|  | | p-8, rounded-xl         | | p-8, rounded-xl         |          |  |
|  | |                         | |                         |          |  |
|  | | Nonpartisan             | | Evidence-Based          |          |  |
|  | | xl, semibold, display   | |                         |          |  |
|  | | navy-900                | | Every claim we make is  |          |  |
|  | |                         | | backed by source docs...|          |  |
|  | | We don't endorse        | |                         |          |  |
|  | | candidates or take      | |                         |          |  |
|  | | sides in elections...   | |                         |          |  |
|  | +-------------------------+ +-------------------------+          |  |
|  |                                                                  |  |
|  | +-------------------------+ +-------------------------+          |  |
|  | | Open by Default         | | Community-Powered       |          |  |
|  | | ...                     | | ...                     |          |  |
|  | +-------------------------+ +-------------------------+          |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

ENHANCEMENT: Add a small icon or colored left border to each card
to differentiate from generic card grids. Options:
  A) 3px left border in trans-500 (strong)
  B) Small icon in trans-50 circle above title
  C) Numbered (01, 02, 03, 04) in trans-300, display font
```

### 4.5 NEW: Team Section

```
+========================================================================+
| bg: white, py-20                                                       |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  |              The People Behind the Data  <- centered H2          |  |
|  |              slate-600 subtitle text                              |  |
|  |                                                                  |  |
|  | +----------+ +----------+ +----------+ +----------+             |  |
|  | |  [photo] | |  [photo] | |  [photo] | |  [photo] |             |  |
|  | |  circle  | |  circle  | |  circle  | |  circle  |             |  |
|  | |  80x80   | |  80x80   | |  80x80   | |  80x80   |             |  |
|  | |          | |          | |          | |          |             |  |
|  | | Name     | | Name     | | Name     | | Name     |             |  |
|  | | Role     | | Role     | | Role     | | Role     |             |  |
|  | +----------+ +----------+ +----------+ +----------+             |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

TEAM CARD ANATOMY:
+----------------------------------+
| text-center, p-6                 |
|                                  |
|     +--------+                   |
|     | PHOTO  | 80x80, rounded-full
|     | or     | border-2 slate-200
|     | INITIALS| bg: trans-50     |
|     +--------+ (if no photo:    |
|                 initials in     |
|                 trans-600,      |
|                 font-display)   |
|                                  |
| Name Here       <- font-semibold|
|                    navy-900      |
| Board Member    <- sm, slate-500|
|                                  |
| Optional: 1-line bio            |
| <- text-sm, slate-600           |
+----------------------------------+

NOTE: If real team photos are not available, use initials
in colored circles. This maintains credibility without
requiring photography. The initials approach is common
on nonprofit sites.

MOBILE: 2-col grid, photos scale to 64x64
```

### 4.6 Timeline Section (existing)

```
+========================================================================+
| bg: white, py-20                                                       |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  |              Our Story  <- centered H2                           |  |
|  |                                                                  |  |
|  | max-w-3xl, centered                                             |  |
|  |                                                                  |  |
|  |  | <- 1px vertical line (slate-200)                              |  |
|  |  |                                                               |  |
|  |  O  [2022] Coalition Founded                                     |  |
|  |  |  A group of Humboldt County residents...                      |  |
|  |  |                                                               |  |
|  |  O  [2023] First Major Investigation                             |  |
|  |  |  Published our first comprehensive analysis...                |  |
|  |  |                                                               |  |
|  |  O  [2023] FOIA Program Launched                                 |  |
|  |  |  Began systematic public records requests...                  |  |
|  |  |                                                               |  |
|  |  O  [2024] Data Portal Launch                                    |  |
|  |  |  Launched our public data portal...                           |  |
|  |  |                                                               |  |
|  |  O  [2024] Liberation Labs Spin-Off                              |  |
|  |     Spun off our technology arm...                               |  |
|  |                                                                  |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

TIMELINE ELEMENT ANATOMY:
  - Vertical line: absolute left, 1px, slate-200
  - Dots: 12x12 circle, trans-500, ring-4 white
  - Year badge: px-2 py-0.5, navy-50 bg, navy-700 text, xs bold
  - Title: lg, semibold, navy-900
  - Description: slate-600, leading-relaxed
  - Left padding: pl-12 (mobile) / pl-20 (desktop)

ENHANCEMENT:
  - Add a "2025" or "2026" entry for current/recent milestones
  - Dots could animate (scale from 0) on scroll intersection
  - Consider alternating left/right layout on desktop (though
    single-side is more readable and mobile-friendly)

MOBILE: Identical layout (already mobile-first with pl-12)
```

### 4.7 Get Involved Section (existing)

```
+========================================================================+
| bg: trans-50, py-20                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  |        Get Involved  <- centered H2, navy-900                    |  |
|  |        There are many ways...  <- lg, slate-600                  |  |
|  |                                                                  |  |
|  | max-w-4xl, sm:grid-cols-3, gap-8                                |  |
|  |                                                                  |  |
|  | +------------------+ +------------------+ +------------------+  |  |
|  | | bg: white        | | bg: white        | | bg: white        |  |  |
|  | | border: slate-200| | border: slate-200| | border: slate-200|  |  |
|  | | p-6, text-center | | p-6, text-center | | p-6, text-center |  |  |
|  | |                  | |                  | |                  |  |  |
|  | | [people icon]    | | [flag icon]      | | [card icon]      |  |  |
|  | | trans-100 bg     | | amber-100 bg     | | emerald-100 bg   |  |  |
|  | | trans-600 icon   | | amber-600 icon   | | emerald-600 icon |  |  |
|  | | 48x48            | | 48x48            | | 48x48            |  |  |
|  | |                  | |                  | |                  |  |  |
|  | | Volunteer        | | Spread the Word  | | Donate           |  |  |
|  | | semibold, navy   | | semibold, navy   | | semibold, navy   |  |  |
|  | |                  | |                  | |                  |  |  |
|  | | Attend meetings  | | Share our find-  | | Support FOIA     |  |  |
|  | | file records...  | | ings with your...| | filing costs...  |  |  |
|  | +------------------+ +------------------+ +------------------+  |  |
|  |                                                                  |  |
|  |           [Contact Us to Get Started]                            |  |
|  |            trans-500 bg, white text                              |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

MOBILE: 1-col stack
INTERACTIONS: Cards get hover shadow + border shift like focus areas
```

---

## 5. Page 3: Investigations

### 5.1 Full Page Structure

```
+========================================================================+
|                           HEADER (sticky)                              |
+========================================================================+
|                                                                        |
|  PAGE HEADER (navy-900)                                               |
|  - Title, intro                                                       |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ** NEW: INVESTIGATION STATUS BAR (white bg) **                       |
|  - Filter by status: All / Active / Completed / Planned              |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  INVESTIGATIONS LIST (slate-50 bg)                                    |
|  - Stacked investigation cards                                        |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ** NEW: INVESTIGATION METHODOLOGY (white bg) **                      |
|  - How we investigate (process transparency)                          |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  SUBMIT A TIP CTA                                                     |
|                                                                        |
+========================================================================+
|                             FOOTER                                     |
+========================================================================+
```

### 5.2 Page Header (existing pattern)

```
+========================================================================+
| bg: navy-900, py-20                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-3xl                                                        |  |
|  |                                                                  |  |
|  | Investigations               <- H1: 5xl, display, bold, white   |  |
|  |                                                                  |  |
|  | Systematic investigations into Humboldt County                   |  |
|  | government operations. Every finding backed by                   |  |
|  | source documents. Every analysis open to scrutiny.               |  |
|  | <- xl, slate-300, relaxed                                        |  |
|  +------------------------------------------------------------------+  |
+========================================================================+
```

### 5.3 NEW: Investigation Status Filter Bar

```
+========================================================================+
| bg: white, border-b slate-200                                          |
| sticky top-16 (below header), z-40                                     |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-7xl, py-3                                                  |  |
|  |                                                                  |  |
|  | [All]  [Active (2)]  [Completed (1)]  [Planned (0)]             |  |
|  |                                                                  |  |
|  | Active: trans-500 bg, white text, rounded-full                  |  |
|  | Inactive: slate-600 text, hover: slate-100 bg                   |  |
|  | Count in parentheses, same styling as label                     |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

BEHAVIOR: Same JS pattern as blog category filter.
Toggles visibility of investigation cards by data-status attribute.
```

### 5.4 Investigation Cards (existing, ENHANCED)

```
+========================================================================+
| bg: slate-50, py-20                                                    |
|                                                                        |
|  max-w-4xl centered                                                   |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | bg: white, rounded-xl, border slate-200, p-8                     |  |
|  | hover: border trans-200, shadow-md (200ms)                       |  |
|  |                                                                  |  |
|  | [* ACTIVE] Started January 2024                                  |  |
|  |  emerald-50 bg            2xs, slate-400                         |  |
|  |  emerald-700 text                                                |  |
|  |  pulsing emerald-500 dot                                         |  |
|  |                                                                  |  |
|  | County Contract Award Patterns FY 2023-2024                      |  |
|  | <- xl, display, bold, navy-900                                   |  |
|  |                                                                  |  |
|  | Analyzing competitive bidding rates, sole-source                  |  |
|  | justifications, and vendor concentration across                   |  |
|  | all county departments.                                          |  |
|  | <- slate-600, leading-relaxed                                    |  |
|  |                                                                  |  |
|  | [doc icon] 47 documents    [folder icon] 12 FOIA requests        |  |
|  | <- sm, slate-500, flex-wrap, gap-4                               |  |
|  |                                                                  |  |
|  | ** NEW: Document access row **                                   |  |
|  | +------------------------------------------------------------+  |  |
|  | | border-t slate-100, pt-4, mt-4                              |  |  |
|  | |                                                             |  |  |
|  | | [View Source Documents]   [Download Data (CSV)]              |  |  |
|  | |  trans-600 text            navy-900 bg, white text          |  |  |
|  | |  underline, sm             sm, rounded-lg, px-4 py-2       |  |  |
|  | |  hover: trans-700          hover: navy-800                  |  |  |
|  | +------------------------------------------------------------+  |  |
|  +------------------------------------------------------------------+  |
|                                                                        |
|  (6px gap between cards)                                               |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | [next investigation card...]                                     |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

STATUS BADGE VARIANTS:
  Active:    emerald-50 bg / emerald-700 text / emerald-500 dot
  Completed: slate-100 bg / slate-600 text / slate-400 dot
  Planned:   amber-50 bg / amber-700 text / amber-500 dot

ENHANCEMENT: Add document access row (currently missing from existing
scaffold). Each investigation needs direct links to:
  1. Source document viewer/listing page
  2. Downloadable data files
This is the core value proposition -- showing your work.
```

### 5.5 NEW: Investigation Methodology Section

```
+========================================================================+
| bg: white, py-16                                                       |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-4xl, centered                                              |  |
|  |                                                                  |  |
|  | How We Investigate  <- H2, 3xl, display, bold, navy-900          |  |
|  |                                                                  |  |
|  | We operate on a principle of radical methodological              |  |
|  | transparency. Here's our process.                                |  |
|  | <- lg, slate-600                                                 |  |
|  |                                                                  |  |
|  | STEP CARDS (horizontal scroll on mobile, grid on desktop)       |  |
|  |                                                                  |  |
|  | +----------+  +----------+  +----------+  +----------+          |  |
|  | | 01       |  | 02       |  | 03       |  | 04       |          |  |
|  | | trans-300 |  | trans-300 |  | trans-300 |  | trans-300 |          |  |
|  | | display  |  | display  |  | display  |  | display  |          |  |
|  | |          |  |          |  |          |  |          |          |  |
|  | | Identify |  | Request  |  | Analyze  |  | Publish  |          |  |
|  | | bold     |  | bold     |  | bold     |  | bold     |          |  |
|  | | navy-900 |  | navy-900 |  | navy-900 |  | navy-900 |          |  |
|  | |          |  |          |  |          |  |          |          |  |
|  | | We ident-|  | We file  |  | We cross-|  | We pub-  |          |  |
|  | | ify areas|  | FOIA re- |  | reference|  | lish all |          |  |
|  | | of public|  | quests   |  | data, in-|  | findings |          |  |
|  | | interest |  | and ga-  |  | terview  |  | with full|          |  |
|  | | through  |  | ther pub-|  | sources, |  | source   |          |  |
|  | | meeting  |  | lic docs.|  | and build|  | docs at- |          |  |
|  | | monitor- |  |          |  | the re-  |  | tached.  |          |  |
|  | | ing.     |  |          |  | cord.    |  |          |          |  |
|  | +----------+  +----------+  +----------+  +----------+          |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

PURPOSE: This section demonstrates institutional seriousness.
ProPublica-style transparency about methodology builds trust.

CARD ANATOMY:
  - border-t 3px trans-500 (top accent)
  - bg: white
  - border: slate-200
  - p-6
  - Number: trans-300, display, 2xl, bold
  - Title: semibold, navy-900, mt-2
  - Description: sm, slate-600, mt-2

MOBILE: Horizontal scroll with snap points, or stack vertically
```

### 5.6 Submit a Tip CTA (existing, centered)

```
+========================================================================+
| bg: slate-50, py-12                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | text-center                                                      |  |
|  |                                                                  |  |
|  | Know something that should be investigated?                      |  |
|  | We take tips seriously.                                          |  |
|  | <- slate-600                                                     |  |
|  |                                                                  |  |
|  | [Submit a Tip]                                                   |  |
|  |  trans-500 bg, white text                                        |  |
|  +------------------------------------------------------------------+  |
+========================================================================+
```

---

## 6. Page 4: Data Portal

### 6.1 Full Page Structure

```
+========================================================================+
|                           HEADER (sticky)                              |
+========================================================================+
|                                                                        |
|  PAGE HEADER (navy-900 bg)                                            |
|  - "Open Data" badge, title, intro                                    |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  PRINCIPLES BAR (white bg, border-b)                                  |
|  - Checkmarks: No registration, Machine-readable, CC BY 4.0, Updated |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ** NEW: SEARCH / FILTER BAR (white bg, sticky) **                    |
|  - Search datasets, filter by type                                    |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  DATASET CARDS (slate-50 bg)                                          |
|  - 6 dataset cards with download buttons                              |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  FOIA GUIDE (white bg)                                                |
|  - Split layout: intro left, steps right                              |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  API NOTICE (slate-50 bg)                                             |
|  - Programmatic access coming soon                                    |
|                                                                        |
+========================================================================+
|                             FOOTER                                     |
+========================================================================+
```

### 6.2 Page Header (existing)

```
+========================================================================+
| bg: navy-900, py-20                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-3xl                                                        |  |
|  |                                                                  |  |
|  | [Open Data]                  <- badge: amber-500/10 bg           |  |
|  |                                 amber-400 text                   |  |
|  |                                 xs, semibold, uppercase          |  |
|  |                                                                  |  |
|  | Public Data Portal           <- H1: 5xl, display, bold, white   |  |
|  |                                                                  |  |
|  | Raw government data. No paywall. No registration.                |  |
|  | Download county records, FOIA responses, and                     |  |
|  | financial documents. Verify our work. Do your own analysis.      |  |
|  | <- xl, slate-300, relaxed                                        |  |
|  +------------------------------------------------------------------+  |
+========================================================================+
```

### 6.3 Principles Bar (existing)

```
+========================================================================+
| bg: white, border-b slate-200, py-6                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | flex, centered, gap-8                                            |  |
|  |                                                                  |  |
|  | [check] No registration  [check] Machine-readable               |  |
|  |  emerald-500              emerald-500                            |  |
|  |  slate-600                slate-600                              |  |
|  |                                                                  |  |
|  | [check] CC BY 4.0 license  [check] Updated regularly            |  |
|  |  emerald-500                emerald-500                          |  |
|  |  slate-600                  slate-600                            |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

MOBILE: flex-wrap with smaller gap
```

### 6.4 NEW: Dataset Search/Filter Bar

```
+========================================================================+
| bg: white, border-b slate-200, sticky top-16, z-40, py-4              |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-7xl, flex items-center gap-4                               |  |
|  |                                                                  |  |
|  | [search icon] Search datasets...                                 |  |
|  | <- input: flex-1, border slate-300, rounded-lg, px-4 py-2.5     |  |
|  |    placeholder: slate-400                                        |  |
|  |    focus: ring-2 trans-500                                       |  |
|  |                                                                  |  |
|  | [Financial] [Records] [Meetings] [All]                          |  |
|  | <- pill filters, same pattern as blog categories                |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

BEHAVIOR: Client-side JS filters dataset cards by title/description
text match and category. Instant filter, no page reload.

MOBILE: Search full width, filter pills scroll horizontally below
```

### 6.5 Dataset Cards (existing, ENHANCED)

```
+========================================================================+
| bg: slate-50, py-20                                                    |
|                                                                        |
|  max-w-7xl, grid gap-6                                                |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | bg: white, rounded-xl, border slate-200, p-8                     |  |
|  | hover: border trans-200, shadow-md (200ms)                       |  |
|  | scroll-mt-24 (for anchor links from footer)                      |  |
|  |                                                                  |  |
|  | sm:flex items-start justify-between gap-6                        |  |
|  |                                                                  |  |
|  | LEFT (flex-1):                                                   |  |
|  |                                                                  |  |
|  | [icon] County Budgets            <- flex row, gap-3              |  |
|  |  40x40       xl, semibold           icon in trans-50 bg          |  |
|  |  trans-50    display, navy-900      trans-600 color              |  |
|  |  rounded-lg                                                      |  |
|  |                                                                  |  |
|  | Annual adopted budgets and mid-year adjustments for              |  |
|  | Humboldt County, broken down by department and fund.             |  |
|  | <- slate-600, leading-relaxed                                    |  |
|  |                                                                  |  |
|  | Format: CSV / PDF  Coverage: 2019-2024  Size: 12.4 MB           |  |
|  | Updated: January 2024                                            |  |
|  | <- sm, slate-500, bold labels in slate-700                       |  |
|  |                                                                  |  |
|  | ** NEW: Preview note **                                          |  |
|  | "Includes departmental breakdowns, fund transfers,               |  |
|  |  and year-over-year comparisons."                                |  |
|  | <- text-xs, slate-400, italic, mt-2                              |  |
|  |                                                                  |  |
|  |                                          RIGHT (flex-shrink-0):  |  |
|  |                                                                  |  |
|  |                                          [Download icon]         |  |
|  |                                           Download               |  |
|  |                                           navy-900 bg            |  |
|  |                                           white text             |  |
|  |                                           px-5 py-2.5            |  |
|  |                                           rounded-lg             |  |
|  |                                           hover: navy-800        |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

ENHANCEMENT: Add dataset "preview note" -- one line describing
what analysis the data enables. Helps non-technical users
understand why they'd want this data.

MOBILE:
- Stacks vertically (icon+title, description, metadata, button)
- Download button: full width, mt-4
```

### 6.6 FOIA Guide (existing)

```
+========================================================================+
| bg: white, py-20                                                       |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | lg:grid-cols-2, gap-16, items-start                              |  |
|  |                                                                  |  |
|  | LEFT:                       | RIGHT:                              |  |
|  |                             |                                      |  |
|  | File Your Own Records       | [1] Identify the records            |  |
|  | Request                     |     you want                        |  |
|  | <- 3xl, display, bold       |     trans-100 circle, trans-700     |  |
|  |    navy-900                 |     number, semibold title,          |  |
|  |                             |     sm slate-600 description         |  |
|  | California's Public         |                                      |  |
|  | Records Act gives every     | [2] Submit your request              |  |
|  | person the right to         |     in writing                       |  |
|  | inspect and copy...         |                                      |  |
|  | <- lg, slate-600            | [3] Wait for the response            |  |
|  |                             |                                      |  |
|  | Read our full FOIA guide -> | [4] Know your rights if denied       |  |
|  | <- trans-600, semibold      |                                      |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

MOBILE: Stacks vertically. Steps become full-width.
```

### 6.7 API Notice (existing)

```
+========================================================================+
| bg: slate-50, border-t slate-200, py-12                                |
|                                                                        |
|  max-w-3xl, centered                                                  |
|                                                                        |
|  Need programmatic access? We're building a public API                |
|  for automated data retrieval. Contact us if you're                   |
|  interested in early access.                                          |
|  <- sm, slate-600, bold intro in navy-900                             |
|     "Contact us" link in trans-600                                    |
+========================================================================+
```

---

## 7. Page 5: Blog

### 7.1 Full Page Structure

```
+========================================================================+
|                           HEADER (sticky)                              |
+========================================================================+
|                                                                        |
|  PAGE HEADER (navy-900 bg)                                            |
|  - Title, intro                                                       |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  CATEGORY FILTER BAR (white bg, sticky below header)                  |
|  - All / Investigations / News / Press / Analysis / Data / Community  |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ** NEW: FEATURED POST (slate-50 bg, conditional) **                  |
|  - Large featured card for latest investigation                       |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  POSTS GRID (slate-50 bg)                                             |
|  - 3-column card grid with NewsCard components                        |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ** NEW: PAGINATION **                                                |
|  - Page numbers or "Load more" pattern                                |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  NEWSLETTER CTA (white bg)                                            |
|  - "Don't Miss an Update" + email input                               |
|                                                                        |
+========================================================================+
|                             FOOTER                                     |
+========================================================================+
```

### 7.2 Category Filter Bar (existing)

```
+========================================================================+
| bg: white, border-b slate-200                                          |
| sticky top-16 (lg: top-18), z-40                                      |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-7xl, py-3                                                  |  |
|  |                                                                  |  |
|  | [All] [Investigations] [News] [Press Releases] [Analysis]       |  |
|  | [Data Releases] [Community]                                      |  |
|  |                                                                  |  |
|  | Active: trans-500 bg, white text, rounded-full                  |  |
|  | Inactive: slate-600 text, hover: slate-100 bg                   |  |
|  | All pills: px-3 py-1.5, sm text, medium weight                  |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

BEHAVIOR: JS toggles aria-pressed, hides/shows posts by
data-post-category. Shows "no-results" message if category empty.

MOBILE: Horizontal scroll with overflow-x-auto, scrollbar-hide.
Negative margin + padding creates edge-bleed scroll.
```

### 7.3 NEW: Featured Post Section

```
+========================================================================+
| bg: slate-50, pt-16                                                    |
| CONDITIONAL: Only shows if latest post is an investigation            |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-7xl                                                        |  |
|  |                                                                  |  |
|  | lg:grid-cols-2, gap-0, rounded-xl overflow-hidden                |  |
|  | border: slate-200, bg: white                                     |  |
|  |                                                                  |  |
|  | +-----------------------------+------------------------------+   |  |
|  | |                             |                              |   |  |
|  | | [FEATURED IMAGE]            | p-8 lg:p-12                  |   |  |
|  | | aspect-[4/3]                |                              |   |  |
|  | | object-cover                | [INVESTIGATION]  Mar 28      |   |  |
|  | | hover: scale-105            |  red-50/700 badge            |   |  |
|  | |                             |                              |   |  |
|  | | bg: navy-100 if no image    | Featured Investigation       |   |  |
|  | |                             | Title Goes Here              |   |  |
|  | |                             | <- 2xl, display, bold        |   |  |
|  | |                             |    navy-900                  |   |  |
|  | |                             |                              |   |  |
|  | |                             | Description text goes here   |   |  |
|  | |                             | and can be longer than the   |   |  |
|  | |                             | standard card truncation...  |   |  |
|  | |                             | <- slate-600, leading-relaxed|   |  |
|  | |                             |    no line-clamp             |   |  |
|  | |                             |                              |   |  |
|  | |                             | By THC Staff | 5 min read    |   |  |
|  | |                             | <- 2xs, slate-400            |   |  |
|  | |                             |                              |   |  |
|  | |                             | [Read Full Investigation ->] |   |  |
|  | |                             |  trans-600, semibold          |   |  |
|  | +-----------------------------+------------------------------+   |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

PURPOSE: Elevates the most important content above the standard grid.
ProPublica uses this pattern extensively -- the "lead story" treatment.

MOBILE:
- Stacks vertically: image on top, text below
- Image: full-width, aspect-16/9
- Text padding: p-6
```

### 7.4 Posts Grid (existing)

```
+========================================================================+
| bg: slate-50, py-16                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-7xl                                                        |  |
|  |                                                                  |  |
|  | sm:grid-cols-2 lg:grid-cols-3, gap-8                            |  |
|  |                                                                  |  |
|  | [NewsCard] [NewsCard] [NewsCard]                                 |  |
|  | [NewsCard] [NewsCard] [NewsCard]                                 |  |
|  | [NewsCard] [NewsCard] [NewsCard]                                 |  |
|  |                                                                  |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

Each NewsCard follows the anatomy detailed in section 3.4.
Cards filtered client-side via category filter bar.

EMPTY STATE:
+------------------------------------------+
| centered, py-20                          |
|                                          |
|    [document icon]  <- 64x64 circle      |
|     slate-100 bg, slate-400 icon         |
|                                          |
|    No posts yet     <- lg, semibold      |
|                        navy-900          |
|                                          |
|    We're working on our first            |
|    articles. Check back soon or          |
|    subscribe to our newsletter.          |
|    <- slate-500                          |
+------------------------------------------+
```

### 7.5 NEW: Pagination

```
+========================================================================+
| py-8                                                                   |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | flex justify-center gap-2                                        |  |
|  |                                                                  |  |
|  | [<]  [1]  [2]  [3]  ...  [12]  [>]                              |  |
|  |                                                                  |  |
|  | Current page: trans-500 bg, white text, rounded-lg              |  |
|  | Other pages: slate-200 bg, slate-700 text, rounded-lg           |  |
|  | Hover: slate-300 bg                                             |  |
|  | Arrows: slate-400, hover: slate-600                             |  |
|  | All: w-10 h-10, flex items-center justify-center, sm text       |  |
|  +------------------------------------------------------------------+  |
+========================================================================+

ALTERNATIVE: "Load More" button pattern (better for mobile):
  [Load More Posts]  <- trans-500 bg, white text, full width on mobile
  "Showing 9 of 24 posts" <- text-xs, slate-400, below button
```

### 7.6 Newsletter CTA (existing)

```
+========================================================================+
| bg: white, py-16                                                       |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-xl, centered                                               |  |
|  |                                                                  |  |
|  | Don't Miss an Update  <- 2xl, display, bold, navy-900           |  |
|  | Get investigation alerts and data releases in your inbox.        |  |
|  | <- slate-600                                                     |  |
|  |                                                                  |  |
|  | [email input              ] [Subscribe]                          |  |
|  |  flex-1, border slate-300    trans-500 bg                        |  |
|  |  rounded-lg, px-4 py-2.5    white text                          |  |
|  |  focus: ring-2 trans-500     sm, medium                          |  |
|  |  placeholder: slate-400      hover: trans-600                    |  |
|  +------------------------------------------------------------------+  |
+========================================================================+
```

### 7.7 Blog Post Detail Page (blog/[...slug].astro)

```
+========================================================================+
|                           HEADER (sticky)                              |
+========================================================================+
|                                                                        |
|  ARTICLE HEADER (navy-900 bg)                                         |
|  - Category badge, title, meta, author                                |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  HERO IMAGE (if present, full bleed or max-width)                     |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ARTICLE BODY (white bg)                                              |
|  - Prose typography, max-w-3xl centered                               |
|  - Tailwind Typography plugin styles                                  |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ** NEW: SHARE / NAVIGATION BAR **                                    |
|  - Previous/Next post links, share buttons                            |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  ** NEW: RELATED POSTS (slate-50 bg) **                               |
|  - 3 related posts by category                                        |
|                                                                        |
+========================================================================+
|                             FOOTER                                     |
+========================================================================+

ARTICLE HEADER:
+========================================================================+
| bg: navy-900, py-16                                                    |
|                                                                        |
|  max-w-3xl centered                                                   |
|                                                                        |
|  [INVESTIGATION]               <- category badge                      |
|                                                                        |
|  County Contract Award         <- H1: 4xl, display, bold, white      |
|  Patterns FY 2023-2024                                                |
|                                                                        |
|  Published January 15, 2024 | By THC Staff                           |
|  <- sm, slate-400                                                     |
|                                                                        |
|  Tags: #contracts #no-bid #procurement                                |
|  <- 2xs pills: navy-800 bg, slate-300 text, rounded-full             |
+========================================================================+

ARTICLE BODY:
- Uses Tailwind Typography (@tailwindcss/typography)
- prose-lg class on container
- max-w-3xl (72ch) for optimal reading width
- Headings: navy-900
- Body: slate-700
- Links: trans-600 with trans-300 underline, hover -> trans-600 underline
- Blockquotes: left border amber-500
- Code blocks: navy-800 bg, JetBrains Mono
- Images: rounded-lg, optional caption in slate-400

SHARE BAR:
+------------------------------------------------------------------+
| border-t slate-200, py-6, mt-8                                    |
|                                                                    |
| <- Previous Post           [Share: Mastodon] [Copy Link]  Next -> |
|    trans-600                navy-100 bg icons               trans-600|
+------------------------------------------------------------------+
```

---

## 8. Page 6: Contact

### 8.1 Full Page Structure

```
+========================================================================+
|                           HEADER (sticky)                              |
+========================================================================+
|                                                                        |
|  PAGE HEADER (navy-900 bg)                                            |
|  - Title, intro                                                       |
|                                                                        |
+------------------------------------------------------------------------+
|                                                                        |
|  CONTACT LAYOUT (slate-50 bg)                                         |
|  - 3/5 form left + 2/5 sidebar right                                 |
|    Sidebar: Secure Tips, Direct Contact, Newsletter                   |
|                                                                        |
+========================================================================+
|                             FOOTER                                     |
+========================================================================+
```

### 8.2 Page Header (existing)

```
+========================================================================+
| bg: navy-900, py-20                                                    |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | max-w-3xl                                                        |  |
|  |                                                                  |  |
|  | Get in Touch                <- H1: 5xl, display, bold, white    |  |
|  |                                                                  |  |
|  | Have a tip? Want to volunteer? Questions about                   |  |
|  | our work? We're here and we're listening.                        |  |
|  | <- xl, slate-300, relaxed                                        |  |
|  +------------------------------------------------------------------+  |
+========================================================================+
```

### 8.3 Contact Form (existing, LEFT COLUMN)

```
+------------------------------------------------------------------+
| lg:col-span-3                                                      |
|                                                                    |
| bg: white, rounded-xl, border slate-200, p-8                      |
|                                                                    |
| Send Us a Message  <- 2xl, display, bold, navy-900                |
|                                                                    |
| +------------------------+ +------------------------+              |
| | Name *                 | | Email *                |              |
| | [input]                | | [input]                |              |
| +------------------------+ +------------------------+              |
|  sm:grid-cols-2, gap-6                                             |
|                                                                    |
| Subject *                                                          |
| [Select a topic...    v]                                           |
|  Options: Submit a Tip | I Want to Volunteer |                     |
|           Data Request | Media Inquiry |                           |
|           Partnership | General Question                           |
|                                                                    |
| Message *                                                          |
| [textarea, 6 rows]                                                 |
|  placeholder: "Tell us what's on your mind..."                     |
|                                                                    |
| [checkbox] I'd like to remain anonymous. Don't associate           |
|            my name with this message.                              |
|                                                                    |
| [Send Message]                                                     |
|  trans-500 bg, white text, full width on mobile                    |
|  hover: trans-600                                                  |
+------------------------------------------------------------------+

FORM STYLING:
  Labels: sm, medium, slate-700, mb-1.5
  Inputs: border slate-300, rounded-lg, px-3 py-2.5, sm text
  Focus: ring-2 trans-500, border-transparent
  Select: same as input, with native dropdown
  Textarea: resize-y
  Checkbox: rounded, trans-500 accent, focus ring
  Submit: w-full sm:w-auto

ENHANCEMENT: Add a success state:
  - Form slides out, success message slides in
  - Green check icon, "Message sent. We'll be in touch."
  - Return to form link
```

### 8.4 Sidebar (existing, RIGHT COLUMN)

```
+------------------------------------------+
| lg:col-span-2, space-y-8                 |
|                                          |
| CARD 1: SECURE TIPS                      |
| +--------------------------------------+ |
| | bg: amber-50                         | |
| | border: amber-200                    | |
| | rounded-xl, p-6                      | |
| |                                      | |
| | [lock icon] Secure Tips              | |
| |  amber-100 bg   semibold, navy-900   | |
| |  amber-600 icon                      | |
| |                                      | |
| | Have information about government    | |
| | misconduct? We protect our sources.  | |
| | <- sm, slate-700                     | |
| |                                      | |
| | * Encrypted email (PGP available)    | |
| | * Signal: available upon request     | |
| | * Physical mail (no return address)  | |
| | <- sm, slate-700                     | |
| |   amber-500 bullet dots             | |
| +--------------------------------------+ |
|                                          |
| CARD 2: DIRECT CONTACT                  |
| +--------------------------------------+ |
| | bg: white                            | |
| | border: slate-200                    | |
| | rounded-xl, p-6                      | |
| |                                      | |
| | Direct Contact <- semibold, navy-900 | |
| |                                      | |
| | EMAIL                                | |
| | info@thcoalition.net                 | |
| | <- 2xs label, trans-600 link         | |
| |                                      | |
| | LOCATION                             | |
| | Humboldt County, California          | |
| | Eureka area                          | |
| | <- 2xs label, sm slate-700 text      | |
| |                                      | |
| | SOCIAL                               | |
| | [mastodon icon] [bluesky icon]       | |
| | <- slate-400, hover: trans-600       | |
| +--------------------------------------+ |
|                                          |
| CARD 3: NEWSLETTER                      |
| +--------------------------------------+ |
| | bg: navy-900                         | |
| | rounded-xl, p-6                      | |
| |                                      | |
| | Newsletter <- semibold, white        | |
| |                                      | |
| | Investigation alerts, data           | |
| | releases, and community updates.     | |
| | Monthly at most.                     | |
| | <- sm, slate-300                     | |
| |                                      | |
| | [email input]                        | |
| |  navy-800 bg, navy-700 border        | |
| |  white text, slate-500 placeholder   | |
| |                                      | |
| | [Subscribe]                          | |
| |  trans-500 bg, white text, full width| |
| +--------------------------------------+ |
+------------------------------------------+

MOBILE: Sidebar stacks below form, full width.
Cards maintain their styling, just go full-width.
```

---

## 9. ComfyUI Image Asset Prompts

### 9.1 Hero / Headers

These are NOT photographic heroes -- the design uses CSS gradients and
patterns. However, we need the following generated assets.

#### 9.1.1 Humboldt County Topographic Overlay

```
PROMPT: "Minimal topographic contour map of Humboldt County California,
thin white lines on transparent background, abstract cartographic
style, low detail, smooth flowing contour lines showing coastal
mountains and river valleys, no labels no text, vector illustration
style, clean minimal, 2000x1200px"

NEGATIVE: "text, labels, roads, cities, dark background, photorealistic,
colorful, busy, detailed, satellite imagery"

USAGE: 5-8% opacity overlay on hero section right side
FORMAT: PNG with transparency
SIZE: 2000x1200px
```

#### 9.1.2 OG Default Image (og-default.png)

```
PROMPT: "Professional Open Graph social media card image for a
government transparency nonprofit organization, dark navy blue
background color #1a2332, abstract geometric pattern suggesting
data visualization and networks, minimal clean modern design, subtle
blue accent lines color #3b82f6, professional authoritative,
no text, suitable for social media preview, 16:9 aspect ratio"

NEGATIVE: "text, logos, human faces, photorealistic, busy,
cluttered, bright colors, cartoon, playful"

USAGE: Open Graph default share image
FORMAT: PNG
SIZE: 1200x630px
POST-PROCESSING: Add text overlay in Figma/GIMP:
  "Transparent Humboldt Coalition" in Playfair Display 700
  "Government Accountability for Humboldt County" in Inter 400
  Position: centered
```

### 9.2 Blog Post Hero Images

Generate a set of 6 reusable category header images.

#### 9.2.1 Investigation Category

```
PROMPT: "Abstract editorial illustration for investigative journalism,
magnifying glass examining financial documents and spreadsheets,
muted navy blue and amber color palette, modern flat illustration
style with subtle texture, professional serious tone, editorial
art style like ProPublica or The New York Times, clean composition"

NEGATIVE: "cartoon, childish, 3d render, photorealistic, bright colors,
clipart, generic stock illustration"

USAGE: Default hero for Investigation posts
FORMAT: WEBP, 1200x675px (16:9)
```

#### 9.2.2 Data Release Category

```
PROMPT: "Abstract data visualization illustration, flowing bar charts
and network graphs transforming into accessible information, deep
navy blue background fading to lighter blue, amber accent highlights
on key data points, minimal modern editorial illustration style,
clean geometric shapes, professional data journalism aesthetic"

NEGATIVE: "cartoon, 3d, photorealistic, busy, cluttered, neon colors,
generic infographic"

USAGE: Default hero for Data Release posts
FORMAT: WEBP, 1200x675px (16:9)
```

#### 9.2.3 News Category

```
PROMPT: "Abstract editorial illustration of a Northern California
coastal community, stylized Humboldt County landscape with redwood
trees and coastline, muted earth tones with navy blue and warm amber
accents, modern flat illustration with subtle paper texture, peaceful
yet purposeful mood, community-focused journalism aesthetic"

NEGATIVE: "photorealistic, cartoon, bright saturated colors, generic,
urban, busy, text, logos"

USAGE: Default hero for News posts
FORMAT: WEBP, 1200x675px (16:9)
```

#### 9.2.4 Analysis Category

```
PROMPT: "Abstract illustration of analytical thinking and document
review, layered transparent sheets with charts and graphs visible
through each layer, cool blue tones with precise geometric elements,
editorial illustration style suggesting depth of analysis, clean
modern professional, minimal complexity"

NEGATIVE: "cartoon, 3d render, photorealistic, bright colors, busy,
generic business illustration"

USAGE: Default hero for Analysis posts
FORMAT: WEBP, 1200x675px (16:9)
```

#### 9.2.5 Press Release Category

```
PROMPT: "Abstract minimal illustration suggesting official
communication and public statement, geometric podium or megaphone
shape with radiating lines suggesting broadcast, navy blue and
white with subtle amber accent, clean professional editorial style,
modern flat illustration"

NEGATIVE: "cartoon, photorealistic, 3d, busy, colorful, generic,
clipart, microphone stand literal"

USAGE: Default hero for Press Release posts
FORMAT: WEBP, 1200x675px (16:9)
```

#### 9.2.6 Community Category

```
PROMPT: "Abstract illustration of community gathering and civic
engagement, interconnected circles and human silhouettes forming
a network, warm amber and navy blue color palette, modern editorial
illustration style, suggesting collaboration and collective power,
flat design with subtle texture, hopeful tone"

NEGATIVE: "cartoon, 3d, photorealistic, corporate, generic, bright
neon, clipart, stock photo"

USAGE: Default hero for Community posts
FORMAT: WEBP, 1200x675px (16:9)
```

### 9.3 About Page Team Placeholder

```
PROMPT: "Abstract geometric avatar placeholder icon, single human
silhouette in a circle, navy blue tones on light blue background,
minimal modern professional, suitable for team member placeholder
photo, clean vector illustration style"

NEGATIVE: "cartoon face, detailed features, photorealistic, generic,
emoji, smiley"

USAGE: Placeholder for team members without photos
FORMAT: SVG preferred, or PNG 200x200px with transparency
NOTE: Consider generating 4-5 variants with subtle differences
(slightly different geometric patterns) so the team grid doesn't
look copy-pasted.
```

### 9.4 Favicon Variants

The favicon.svg already exists (globe icon with amber center).
Need rasterized versions:

```
GENERATE FROM EXISTING SVG (not ComfyUI -- use Sharp or Figma):
- favicon-32x32.png (32x32)
- favicon-16x16.png (16x16)
- apple-touch-icon.png (180x180, with padding on navy-900 bg)
- android-chrome-192x192.png
- android-chrome-512x512.png

These should be rendered from the existing SVG, not AI-generated.
```

### 9.5 Data Page Decorative Elements

```
PROMPT: "Abstract minimal pattern suggesting flowing data streams
and information transparency, thin lines forming a network topology
on transparent background, very subtle almost invisible, cool blue
tones, suitable as background texture at 3-5% opacity, clean
geometric, high resolution tileable pattern"

NEGATIVE: "busy, colorful, dark, bold lines, photorealistic,
text, symbols"

USAGE: Optional subtle background pattern for data page header
FORMAT: PNG with transparency, 800x800px, tileable
```

---

## 10. Implementation Notes

### 10.1 Existing Scaffold Alignment

The storyboard is designed to align with the existing codebase.

```
EXISTING FILES TO MODIFY:
  src/pages/index.astro          -- Add Accountability Ticker section
  src/pages/investigations.astro -- Add filter bar, methodology, document access
  src/pages/data.astro           -- Add search/filter bar, preview notes
  src/pages/blog/index.astro     -- Add featured post section, pagination
  src/pages/blog/[...slug].astro -- Expand with share bar, related posts
  src/pages/about.astro          -- Add team section

NEW FILES TO CREATE:
  src/components/AccountabilityTicker.astro  -- Counter animation component
  src/components/FeaturedPost.astro          -- Blog featured card
  src/components/Pagination.astro            -- Reusable pagination
  src/components/InvestigationCard.astro     -- Extracted from inline
  src/components/DatasetCard.astro           -- Extracted from inline
  src/components/TeamMember.astro            -- About page team card
  src/components/StatusFilter.astro          -- Reusable filter bar
  src/components/ShareBar.astro              -- Blog post share/nav
  src/components/CounterAnimation.astro      -- Scroll-triggered counter

IMAGES TO GENERATE:
  public/og-default.png
  public/favicon-32x32.png
  public/apple-touch-icon.png
  public/images/blog/default-investigation.webp
  public/images/blog/default-data-release.webp
  public/images/blog/default-news.webp
  public/images/blog/default-analysis.webp
  public/images/blog/default-press-release.webp
  public/images/blog/default-community.webp
  public/images/humboldt-topo-overlay.png
  public/images/team/placeholder-1.png (through 5)
```

### 10.2 Accessibility Checklist

```
[x] Skip-to-content link (existing in Base.astro)
[x] Semantic HTML: header, nav, main, footer, section, article
[x] aria-label on navigation regions
[x] aria-current="page" on active nav items
[x] aria-expanded on mobile menu toggle
[x] sr-only headings for visually implied sections
[x] Color contrast ratios:
    - navy-900 on white: 15.4:1 (AAA)
    - slate-600 on white: 5.6:1 (AA)
    - trans-600 on white: 4.6:1 (AA)
    - white on navy-900: 15.4:1 (AAA)
    - slate-300 on navy-900: 8.3:1 (AAA)
    - amber-500 on navy-900: 8.2:1 (AAA)
[x] Focus styles: ring-2 with appropriate offsets
[x] Form labels on all inputs
[x] Image alt text (hero images decorative = alt="")
[x] Reduced motion: @media (prefers-reduced-motion: reduce)
    - Disable counter animations
    - Disable hover scale transforms
    - Disable scroll-triggered animations
[ ] TODO: Test with screen reader (VoiceOver/NVDA)
[ ] TODO: Keyboard navigation audit
[ ] TODO: Lighthouse accessibility score target: 95+
```

### 10.3 Performance Budget

```
TARGET: Lighthouse Performance 90+

CRITICAL PATH:
  - Preconnect to Google Fonts (existing)
  - Critical CSS inlined via Astro (automatic)
  - Font display: swap (existing)
  - Images: WEBP format, sharp for processing (in devDeps)
  - Lazy load: all below-fold images (loading="lazy")
  - Analytics: Plausible, deferred (existing)

BUNDLE:
  - Astro outputs zero JS by default (islands architecture)
  - JS only for: mobile menu, category filter, counter animation
  - Estimated JS: <5KB gzipped total
  - No heavy frameworks loaded client-side

IMAGE BUDGET:
  - Hero: No images (CSS only) = 0KB
  - Blog cards: WEBP, 400px wide thumbnails = ~30KB each
  - OG image: PNG, 1200x630 = ~80KB (not loaded on page)
```

### 10.4 Responsive Breakpoints

```
TAILWIND DEFAULTS (used throughout):
  sm:  640px   (2-column grids, side-by-side CTAs)
  md:  768px   (rarely used -- sm and lg cover most cases)
  lg:  1024px  (desktop nav, sidebar layouts, 3-4 column grids)
  xl:  1280px  (max-w-7xl container kicks in)

MOBILE-FIRST APPROACH:
  Base styles = mobile
  sm: = tablet portrait
  lg: = desktop

  Header: hamburger -> full nav at lg
  Hero stats: 2x2 -> 4-col at lg
  Focus areas: 1-col -> 2-col at sm -> 4-col at lg
  Blog grid: 1-col -> 2-col at sm -> 3-col at lg
  Contact: stacked -> sidebar layout at lg
  Data cards: stacked -> side-by-side download at sm
  Footer: 1-col -> 2-col at md -> 4-col at lg
```

### 10.5 Animation & Interaction Summary

```
+---------------------------+------------------+------------------+
| Element                   | Trigger          | Effect           |
+---------------------------+------------------+------------------+
| Header logo icon          | Hover            | bg navy -> trans |
|                           |                  | 200ms            |
+---------------------------+------------------+------------------+
| Nav links                 | Hover            | Color + bg       |
|                           |                  | 150ms            |
+---------------------------+------------------+------------------+
| Hero badge dot            | Constant         | CSS pulse        |
+---------------------------+------------------+------------------+
| Hero stats                | Scroll into view | Count up 0->val  |
|                           |                  | 1.5s ease-out    |
+---------------------------+------------------+------------------+
| Focus area cards          | Scroll into view | Fade in + slide  |
|                           |                  | up, stagger 100ms|
+---------------------------+------------------+------------------+
| All cards                 | Hover            | Border color +   |
|                           |                  | shadow-lg, 200ms |
+---------------------------+------------------+------------------+
| Blog card image           | Card hover       | Scale 1.05       |
|                           |                  | 300ms            |
+---------------------------+------------------+------------------+
| "Read more" arrow         | Card hover       | translateX(2px)  |
|                           |                  | 150ms            |
+---------------------------+------------------+------------------+
| Terminal cursor           | Constant         | CSS pulse on _   |
+---------------------------+------------------+------------------+
| Accountability numbers    | Scroll into view | Count up 0->val  |
|                           |                  | 1.5s, stagger    |
+---------------------------+------------------+------------------+
| Category filter pills     | Click            | Instant bg/text  |
|                           |                  | color swap       |
+---------------------------+------------------+------------------+
| Timeline dots             | Scroll into view | Scale 0 -> 1     |
|                           |                  | 300ms, stagger   |
+---------------------------+------------------+------------------+
| All buttons               | Hover            | bg color shift   |
|                           |                  | 150ms            |
+---------------------------+------------------+------------------+
| Form submit               | Click            | Form -> success  |
|                           |                  | state transition |
+---------------------------+------------------+------------------+

REDUCED MOTION: All scroll-triggered and constant animations
disabled when prefers-reduced-motion: reduce. Hover effects
remain (color changes only, no transforms).
```

### 10.6 SEO & Meta Strategy

```
EXISTING (in Base.astro):
  - Dynamic <title> with site name suffix
  - Meta description per page
  - Canonical URLs
  - Open Graph tags (type, url, title, description, image, site_name)
  - Twitter card (summary_large_image)
  - RSS feed link
  - Sitemap integration (@astrojs/sitemap)

ADDITIONAL RECOMMENDATIONS:
  - JSON-LD structured data for Organization
  - JSON-LD for BlogPosting on each blog post
  - robots.txt (allow all, sitemap reference)
  - Plausible self-hosted analytics (privacy-respecting, existing)
```

### 10.7 Content Architecture (Keystatic)

```
EXISTING COLLECTIONS:
  blog: Full content schema with categories, tags, dates, images

RECOMMENDED ADDITIONS:
  investigations: collection({
    label: 'Investigations',
    schema: {
      title, status (active/completed/planned), description,
      startDate, completedDate, documentCount, foiaCount,
      documents: array of { label, file, type },
      relatedPosts: relationship to blog
    }
  })

  team: collection({
    label: 'Team Members',
    schema: {
      name, role, bio, photo, order
    }
  })

  datasets: collection({
    label: 'Datasets',
    schema: {
      title, description, format, yearRange, fileSize,
      lastUpdated, downloadUrl, category, previewNote
    }
  })

This moves hardcoded data arrays (currently in page frontmatter)
into the CMS for non-technical editing.
```

---

## Review Checklist

Before execution, confirm:

- [ ] Color palette approved (navy/trans-blue/amber)
- [ ] Typography choices approved (Playfair Display / Inter / JetBrains Mono)
- [ ] Page structure approved for all 6 pages
- [ ] New sections approved (Accountability Ticker, Team, Featured Post, Methodology, Search/Filter)
- [ ] ComfyUI prompts reviewed and adjusted for available models
- [ ] Content copy drafted for all placeholder text
- [ ] Team member list finalized for About page
- [ ] Investigation data current and accurate
- [ ] Dataset metadata verified
- [ ] Image generation priority order established
- [ ] Accessibility requirements confirmed
- [ ] Mobile-first approach confirmed

---

*Design document prepared for Transparent Humboldt Coalition. Review all sections before beginning implementation.*
