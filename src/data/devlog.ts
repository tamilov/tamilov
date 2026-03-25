export interface DevlogEntry {
  id: string
  date: string
  tag: "architecture" | "build" | "design" | "infrastructure" | "validation" | "planning" | "content"
  status: "shipped" | "in progress" | "planning"
  title: string
  body: string
}

export const devlog: DevlogEntry[] = [
  {
    id: "site-11",
    date: "March 2026",
    tag: "build",
    status: "shipped",
    title: "Devlog pagination: 10 posts per page",
    body: "Added client-side pagination to the devlog page. Shows up to 10 entries per page. When there are more than 10, navigation controls and page numbers appear at the bottom. Switching pages scrolls back to the top with a smooth animation. The feature was dormant until this batch of posts pushed the count past 10 — so now it's live.",
  },
  {
    id: "site-10",
    date: "March 2026",
    tag: "build",
    status: "shipped",
    title: "Launched the Devlog page",
    body: "Built and deployed /devlog — a timeline-style build log with dot indicators, category tags, and status labels per entry. Added to the main navigation between Notes and PineApple. The 'See what's in development' button on the PineApple page now links here. Initial set of entries documented the PineApple v2 development arc.",
  },
  {
    id: "site-09",
    date: "March 2026",
    tag: "content",
    status: "shipped",
    title: "PineApple page rewritten: internal engine tone",
    body: "Rewrote the entire PineApple page to reflect its actual state — an internal engine under development, not a public product. Changed the headline from 'PineApple is the engine.' to 'PineApple is the internal engine.' Updated the black card to show status labels per feature: 'in progress', 'internal', 'coming later'. Renamed 'The Factory Model' to 'The internal model'. Renamed 'Latest Updates' to 'Development log'. The bottom CTA now frames it as collaboration with Tamilov, not a pitch for PineApple.",
  },
  {
    id: "site-08",
    date: "March 2026",
    tag: "infrastructure",
    status: "shipped",
    title: "Fixed email rendering in Gmail",
    body: "The contact form email had two rendering issues in Gmail. First: the outer container had background:#fff which, combined with Gmail's own wrapper, created a white rectangle with sharp corners around the entire email. Fixed by removing the background from the outer div — the inner card with border-radius now renders correctly. Second: the plain-text version ended with 'Sent from Tamilov contact form', which Gmail detected as a device signature and collapsed everything below into a 'Show quoted text' block. Replaced with '-- tamilov.com' which is Gmail-safe.",
  },
  {
    id: "site-07",
    date: "March 2026",
    tag: "content",
    status: "shipped",
    title: "Service prices updated on the homepage",
    body: "Updated all four service prices in the Work Together section. Previous prices were $2,400 / $4,800 / $6,000 / $9,600. New prices: Product Landing Pages from $100, Branded Interfaces from $350, Digital Systems from $640, Concept to MVP from $920.",
  },
  {
    id: "site-06",
    date: "March 2026",
    tag: "design",
    status: "shipped",
    title: "Navigation reordered, Devlog added",
    body: "Reordered the main navigation links. Previous order: PineApple → All Projects → Notes. New order: All Projects → Notes → Devlog → PineApple → Work Together. PineApple moved from first to last before the CTA — it's an internal page, not the first thing visitors should see. Devlog added as a standalone nav item.",
  },
  {
    id: "site-05",
    date: "March 2026",
    tag: "content",
    status: "shipped",
    title: "All Projects page statuses corrected",
    body: "The All Projects page had the same outdated statuses as the Ecosystem section — BuildKit and NoteStack listed as 'live', FormFlow and Orbit as 'beta'. None of these have public URLs. Fixed to match: BuildKit and NoteStack → 'in development', FormFlow and Orbit → 'concept'. Both pages are now consistent.",
  },
  {
    id: "site-04",
    date: "March 2026",
    tag: "content",
    status: "shipped",
    title: "Notes articles 2 and 3 rewritten",
    body: "Replaced the content of two Notes articles with final versions. 'The case for over-engineered systems' was previously about simplicity vs infrastructure — rewritten around the distinction between building outputs vs. building systems that produce outputs, and the role PineApple plays in that. 'What Gumroad got right about design' was previously about Tamilov's own design tokens — rewritten as an analysis of Gumroad's hierarchy-first approach and why clarity with personality beats generic polish. Article excerpts also updated.",
  },
  {
    id: "site-03",
    date: "March 2026",
    tag: "design",
    status: "shipped",
    title: "Product status audit across the site",
    body: "Audited every product status label across the Ecosystem section and All Projects page. BuildKit and NoteStack were incorrectly marked as 'live' — they have no public URL and are not accessible to users. Both updated to 'in development'. FormFlow and Orbit downgraded from 'beta' to 'concept'. Added a new 'in development' variant to the Badge component with neutral grey styling. PineApple and Launchpad/Datagrip statuses left unchanged.",
  },
  {
    id: "site-02",
    date: "March 2026",
    tag: "design",
    status: "shipped",
    title: "PineApple ecosystem descriptions updated",
    body: "Updated PineApple's description in both the homepage Ecosystem section and the All Projects page to make its status explicit. Previous: 'The automated factory. The engine behind everything.' Updated to: 'The internal engine behind Tamilov. Powers the build process across all products. v2 in active development.' The All Projects version adds: 'Not publicly launched.'",
  },
  {
    id: "site-01",
    date: "March 2026",
    tag: "content",
    status: "shipped",
    title: "Homepage hero badge and copy refined",
    body: "Changed the hero badge from 'Systems Online' (with an animated ping dot implying live infrastructure) to 'Digital Product Brand' — more accurate, less performative. Removed the pulsing dot. Updated the hero description from 'A fully automated machine for creating the next generation of digital tools' to 'A system for building and shipping digital products — one at a time.' Stats bar updated: '7 Products in Dev' → '5+ In the Pipeline', '3 Live Now' → 'Building in Public'. The previous stats overstated the current state.",
  },
]
