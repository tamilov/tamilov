export interface NoteEntry {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string[]
}

export const allNotes: NoteEntry[] = [
  {
    slug: "building-pineapple-in-public",
    title: "Why I'm building PineApple in public",
    date: "March 2026",
    category: "PineApple",
    excerpt: "Building a product factory shouldn't be a secret. Here's the full picture of the architecture, the mistakes, and the wins.",
    content: [
      "Most product builders keep their process hidden. The reasoning is understandable — competition, intellectual property, embarrassment from early missteps. But I've found the opposite approach more valuable.",
      "PineApple is the internal factory behind the Tamilov ecosystem. It handles everything from idea validation through design, build, and launch. And I'm building it where everyone can see.",
      "The benefits are clear: accountability, faster feedback loops, and a growing community of people who care about the same problems. When you build in public, your audience becomes your first testers, your sharpest critics, and eventually your most loyal users.",
      "There's a cost too. Showing early work means showing imperfect work. Some features ship rough. Some get scrapped entirely. But the compounding effect of transparency — in trust, in product quality, in personal growth — outweighs the discomfort.",
      "PineApple v2 is currently in active development. The focus is on automating the validation and launch stages, so every new product in the ecosystem can go from concept to live in days instead of weeks.",
      "If you're building something and debating whether to share the process — share it. The audience you attract will be the one that matters."
    ]
  },
  {
    slug: "case-for-over-engineered-systems",
    title: "The case for over-engineered systems",
    date: "February 2026",
    category: "Product Philosophy",
    excerpt: "Most people say keep it simple. I say build the machine first. Why investing heavily in infrastructure pays off.",
    content: [
      "\"Keep it simple\" is the most repeated advice in product development. And for good reason — premature optimization kills more projects than bad ideas do.",
      "But there's a nuance that gets lost. If you're building one product, simplicity wins. If you're building a factory that will produce dozens of products, the rules change.",
      "PineApple exists because I got tired of repeating the same setup, the same patterns, the same launch checklist for every new product. The overhead of building a reusable system was high upfront, but now every new product in the Tamilov ecosystem launches faster than the last.",
      "The trick is knowing when to invest in infrastructure versus when to ship quick. My rule: if I'll do it more than three times, I systematize it. If it's a one-off experiment, I keep it scrappy.",
      "Over-engineering isn't about complexity for its own sake. It's about building the right abstractions so that future work becomes trivially simple. The best systems feel effortless to use precisely because someone put in the effort to design them well.",
      "Build the machine. Then let the machine build the products."
    ]
  },
  {
    slug: "what-gumroad-got-right-about-design",
    title: "What Gumroad got right about design",
    date: "January 2026",
    category: "Design Systems",
    excerpt: "Bold typography, thick borders, and direct messaging. A masterclass in creator-economy design language.",
    content: [
      "Gumroad's design language is one of the most distinctive in the creator economy. Bold sans-serif type, thick outlines, high-contrast color, and no filler. It communicates confidence and clarity in every pixel.",
      "What makes it work isn't any single element — it's the consistency. Every component follows the same rules. Every page feels like it belongs to the same world. That's what a real design system achieves.",
      "The Tamilov visual identity borrows from this approach. Not as a copy, but as inspiration. The principles are the same: bold over subtle, clear over clever, direct over decorated.",
      "In practice, this means thick borders on every card, Inter as the workhorse typeface at heavy weights, a near-black and off-white palette with a single accent color, and no unnecessary shadows or gradients.",
      "The result is a design language that feels premium without being corporate, playful without being casual, and distinctive without being noisy.",
      "Good design isn't about making things pretty. It's about making decisions visible. Every border, every font weight, every color choice is a statement about what you value."
    ]
  },
  {
    slug: "design-tokens-and-consistency",
    title: "Design tokens and why consistency compounds",
    date: "December 2025",
    category: "Design Systems",
    excerpt: "How a small set of well-defined design tokens can create a visual language that scales across an entire product ecosystem.",
    content: [
      "A design token is a decision stored as data. A color, a spacing value, a border radius, a font weight. Individually, each one is trivial. Together, they form the DNA of your visual language.",
      "The Tamilov ecosystem runs on a deliberately small set of tokens. Two colors (near-black and off-white), one accent (amber/citrus), one typeface (Inter), and three border shadow levels. That's it.",
      "This constraint is the feature. When every component draws from the same small palette, consistency happens automatically. You don't need a 200-page brand guideline. The tokens enforce the rules.",
      "The compounding effect is real. Every new page, every new product, every new component inherits the brand identity for free. BuildKit, NoteStack, FormFlow — they all look like they belong together because they share the same tokens.",
      "If you're building a product ecosystem, define your tokens early and keep them small. You can always expand later. But starting constrained forces you to make deliberate choices instead of accumulating visual debt."
    ]
  }
]
