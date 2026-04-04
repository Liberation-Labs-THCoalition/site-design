# Wix Site Migration Summary

**Export Date:** 2026-03-28
**Site:** Liberation Labs (formerly Transparent Humboldt Coalition)
**Wix Site ID:** 4d898379-c132-4d5a-8e22-9ef0d149763f
**Business Name:** Liberation Labs
**Description:** Empowering Progressives with AI for Social Change
**Locale:** en-US
**Timezone:** America/Los_Angeles

---

## Export Inventory

### 1. Blog Posts -- 5 posts
- **Source file:** `blog_posts.json` (376 KB)
- **Markdown files:** `blog/` directory (5 .md files)
- **Posts:**
  - Liberation Labs Collabs to Win AI Safety Award at “Funding the Commons: Intelligence at the Frontier”
  - OpenAI Scored 2.25/10. This Is What Betrayal Looks Like.
  - Grok Scored 1.6/10 On Our Ethics Scorecard. That's Not a Bug, It's Elon Musk's Entire Business Model.
  - Claude Scored 6.4/10. Here's Why That's Actually Worth Celebrating (And Where They Still Need to Step Up)
  - Liberation Labs AI Ethics Scorecard

### 2. Data Collections

#### Liberation Labs Resources -- 0 items
- **File:** `liberation_labs_resources.json`
- **Status:** Collection exists but is empty (0 items)

#### Liberation Labs Scorecards -- 1 item
- **File:** `liberation_labs_scorecards.json`
- **Content:** AI Ethics Evaluation Framework - Universal Scorecard
- **Fields:** scoring_framework, name, tier, description, tags, evaluation_criteria, target_audience, category

#### Liberation Labs Tools -- 130 items
- **File:** `liberation_labs_tools.json`
- **Fields:** name, tier, difficulty_level, prompt_text, description, tags, category
- **Categories:**
  - Communications & Messaging: 25 tools
  - Coalition & Relationship Building: 25 tools
  - Campaign Planning: 25 tools
  - Community Engagement: 25 tools
  - Meeting & Event Organization: 25 tools
  - Campaign Strategy: 1 tools
  - Crisis Management: 1 tools
  - Digital Organizing: 1 tools
  - Fundraising & Finance: 1 tools
  - Research & Analysis: 1 tools

#### Liberation Labs Training -- 2 items
- **File:** `liberation_labs_training.json`
- **Content:** Grassroots Organizing Strategic Intelligence System v2.1, AI-Assisted Rapid Response Training
- **Fields:** duration, name, tier, difficulty_level, description, tags, learning_objectives, content, resources, prerequisites, type

### 3. Events -- 15 total
- **File:** `events.json` (146 KB)
- **Breakdown:** 8 upcoming, 6 ended, 1 canceled
- **Event types:** Beginner's AI Workshop (monthly recurring), A Night Of Revelry and Deception, Future of AI in Activism Conference
- **Locations:** Discord Server (online), North Coast Repertory Theater, Arcata Community Hall

### 4. Contacts -- 28 total
- **File:** `contacts.json` (64 KB)
- **All 28 contacts have email addresses**
- **27 have names**
- **Sources:** {"WIX_SITE_MEMBERS": 14, "WIX_EVENTS": 10, "WIX_FORMS": 4}
  - WIX_SITE_MEMBERS: 14 (registered site members)
  - WIX_EVENTS: 10 (event registrants)
  - WIX_FORMS: 4 (form submissions)

### 5. Media -- 36 files
- **Inventory:** `media_inventory.json`
- **Downloaded:** `media/` directory (47 MB)
- **Breakdown:** 35 images, 1 documents
- All 36 files downloaded successfully

### 6. Site Properties
- **File:** `site_properties.json`
- **Display Name:** Transparent Humboldt Coalition
- **Business Name:** Liberation Labs
- **Currency:** USD
- **Category:** other / Coaching Forum

### 7. Additional Collections Exported

#### Members -- 17 items
- **File:** `members.json`
- **Fields:** aboutPlain, profilePhoto, aboutRich, slug, coverPhoto

#### Bookings/Services -- 3 items
- **File:** `bookings_services.json`
- **Fields:** serviceType, description, serviceName, priceAmount, tagLine

#### Store Products -- 1 item
- **File:** `store_products.json`
- **Fields:** name, sku, pricing, media

---

## Wix Data Collections (Full Site Schema)

25 collections identified:
- Blog/Categories, Blog/Posts, Blog/Tags
- Bookings/Schedule, Bookings/Services, Bookings/Staff
- Events/Categories, Events/Events, Events/Schedules, Events/Tickets
- Marketing/Coupons
- Members/Badges, Members/FullData, Members/PrivateMembersData, Members/PublicData
- PaidPlans/Plans
- Stores/Collections, Stores/InventoryItems, Stores/Orders, Stores/Products, Stores/Variants
- liberationlabs_resources (empty)
- liberationlabs_scorecards (1 item)
- liberationlabs_tools (130 items)
- liberationlabs_training (2 items)

---

## What Still Needs Manual Migration

### Must Do
1. **Page content and layout** -- Wix page HTML/structure is not available via REST API. Page layouts, text blocks, and section designs need manual recreation or scraping.
2. **Navigation structure** -- Site menu and page hierarchy must be manually recreated.
3. **Forms** -- Any Wix forms (contact, signup, etc.) need to be rebuilt on the new platform.
4. **SEO settings** -- Meta descriptions, page titles, URL slugs, robots.txt, sitemap configuration.
5. **Domain/DNS** -- DNS records need updating when switching platforms.

### Should Do
6. **Blog post cover images** -- Only 1 of 5 posts has a cover image URL in the API data. Others may be configured in the Wix editor but not exposed via API.
7. **Blog rich content formatting** -- The rich content JSON preserves structure (headings, bold, links), but some Wix-specific formatting may need review after conversion.
8. **Event registration data** -- RSVP/ticket holder lists per event (if any exist) require separate API calls.
9. **Bookings configuration** -- Staff schedules, availability windows, booking rules.
10. **Store configuration** -- Payment processing, shipping rules, tax settings.

### Nice to Have
11. **Custom CSS/branding** -- Wix color palette, fonts, and custom styles are not available via the REST API. These need to be extracted from the live site or Wix editor.
12. **Member passwords/auth** -- Member accounts cannot be migrated with credentials. Users will need to re-register.
13. **Analytics data** -- Historical traffic and engagement data stays in Wix.
14. **Wix Apps/integrations** -- Any third-party Wix app configurations need manual setup on the new platform.

---

## File Manifest

```
wix-export/
  blog_posts.json              376 KB   5 blog posts (full API response)
  blog/                                 5 markdown files
    2025-10-06_liberation-labs-ai-ethics-scorecard.md
    2025-10-08_claude-scored-6-4-10-...md
    2025-10-09_grok-scored-1-6-10-...md
    2025-10-09_openai-scored-2-25-10-...md
    2026-03-27_collaborative-team-wins-...md
  liberation_labs_resources.json   <1 KB  0 items (empty collection)
  liberation_labs_scorecards.json  14 KB  1 scorecard
  liberation_labs_tools.json      143 KB  130 tools
  liberation_labs_training.json     7 KB  2 training modules
  events.json                     146 KB  15 events
  contacts.json                    64 KB  28 contacts
  media_inventory.json             67 KB  36 file records
  media/                           47 MB  36 downloaded files (35 images + 1 PDF)
  site_properties.json             <1 KB  site config
  members.json                      8 KB  17 members
  bookings_services.json            5 KB  3 services
  store_products.json               4 KB  1 product
  blog_categories.json             <1 KB  0 categories
  blog_tags.json                   <1 KB  0 tags
  MIGRATION_SUMMARY.md             this file
```
