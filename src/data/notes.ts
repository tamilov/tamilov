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
    excerpt: "Most people build outputs. A smaller number build systems that keep producing outputs. That second path looks slower at first — but it compounds.",
    content: [
      "\"Don't overcomplicate it\" is common advice. And in many cases, it's right. But there's a difference between unnecessary complexity and intentional systems design.",
      "A lot of people build outputs. A smaller number build systems that keep producing outputs long after the first launch. That second path looks slower at the beginning, but it compounds.",
      "Over-engineered systems get a bad reputation because they're often associated with waste: too many abstractions, too many tools, too much architecture before there's a real need. But when done well, systems design is not about excess. It's about repeatability.",
      "That's the role PineApple plays inside Tamilov. It exists so that each new product doesn't start from zero. Design patterns, component logic, structure, launch flow, writing standards — these are all parts of a machine that make future work faster and better.",
      "A good system doesn't remove creativity. It protects it. It removes the noise around execution so attention can stay on what actually matters: taste, product judgment, positioning, and speed.",
      "A one-off success is useful. A system that can produce multiple useful things is better."
    ]
  },
  {
    slug: "what-gumroad-got-right-about-design",
    title: "What Gumroad got right about design",
    date: "January 2026",
    category: "Design Systems",
    excerpt: "A lot of modern product sites are visually polished but emotionally forgettable. Gumroad is one of the better examples of the opposite.",
    content: [
      "A lot of modern product sites are visually polished but emotionally forgettable. They look correct, but they don't feel distinct. Gumroad has long been one of the better examples of the opposite.",
      "What it gets right starts with hierarchy. Big type. Strong contrast. Clear blocks. No confusion about what matters most on the page.",
      "That sounds simple, but most brands dilute themselves through caution. They make everything balanced, everything clean, everything safe. In the process, they lose memorability.",
      "Gumroad shows that simplicity does not have to mean flatness. A site can be minimal and still have character. It can be structured and still feel alive.",
      "That design philosophy influenced Tamilov directly. Not in the sense of copying layouts, but in understanding that brand presence often comes from confidence, not decoration. If the type is strong, the spacing is deliberate, and the message is clear, the site does not need much else.",
      "The lesson is not \"design like Gumroad.\" The lesson is that clarity with personality beats generic polish almost every time."
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
