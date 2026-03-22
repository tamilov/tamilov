import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Lightbulb, CheckCircle2, Paintbrush, Code2, Settings2, Rocket, RefreshCcw } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Idea",
    desc: "Identify the friction. Every great product starts with a problem worth solving. We observe, we question, we find the gap.",
    shortDesc: "Identify the friction",
  },
  {
    icon: CheckCircle2,
    title: "Validation",
    desc: "Prove it matters. Before a single line of code, we test assumptions. Research, prototypes, conversations — signals over opinions.",
    shortDesc: "Prove it matters",
  },
  {
    icon: Paintbrush,
    title: "Design",
    desc: "Craft the interface. Every pixel is intentional. We design systems, not screens — building a language that scales with the product.",
    shortDesc: "Craft the interface",
  },
  {
    icon: Code2,
    title: "Build",
    desc: "Write the logic. Clean architecture, minimal dependencies, maximum leverage. The code is the machine — it has to run forever.",
    shortDesc: "Write the logic",
  },
  {
    icon: Settings2,
    title: "Automate",
    desc: "Remove the manual. If a human does it twice, a machine should do it next. Pipelines, workflows, triggers — the factory runs itself.",
    shortDesc: "Remove the manual",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Ship to the world. No waiting for perfect. We launch lean, gather real feedback, and let the market validate what we built.",
    shortDesc: "Ship to the world",
  },
  {
    icon: RefreshCcw,
    title: "Improve",
    desc: "Iterate relentlessly. Version 1 is just the beginning. We measure, learn, and rebuild — every cycle makes the product sharper.",
    shortDesc: "Iterate relentlessly",
  },
]

function StepIllustration({ index }: { index: number }) {
  const illustrations = [
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <circle cx="200" cy="150" r="80" stroke="hsl(var(--foreground))" strokeWidth="3" strokeDasharray="8 6" opacity="0.15" />
      <circle cx="200" cy="150" r="50" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.1" />
      <motion.circle cx="200" cy="150" r="12" fill="hsl(var(--accent))" initial={{ scale: 0 }} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.path d="M140 100 L200 70 L260 100" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
      <motion.path d="M140 200 L200 230 L260 200" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.3 }} />
      <motion.circle cx="120" cy="90" r="6" fill="hsl(var(--foreground))" opacity="0.15" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="280" cy="90" r="6" fill="hsl(var(--foreground))" opacity="0.15" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
      <motion.rect x="170" y="120" width="60" height="60" rx="12" stroke="hsl(var(--accent))" strokeWidth="2" fill="hsl(var(--accent))" fillOpacity="0.08" animate={{ rotate: [0, 3, -3, 0] }} transition={{ duration: 4, repeat: Infinity }} />
    </svg>,

    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <motion.rect x="60" y="80" width="120" height="140" rx="16" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.12" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6 }} style={{ transformOrigin: "center bottom" }} />
      <motion.rect x="220" y="80" width="120" height="140" rx="16" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.12" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ transformOrigin: "center bottom" }} />
      <motion.circle cx="120" cy="130" r="20" fill="hsl(var(--accent))" fillOpacity="0.2" stroke="hsl(var(--accent))" strokeWidth="2" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.path d="M120 130 L108 140 L118 150" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
      <motion.circle cx="280" cy="130" r="20" fill="hsl(var(--foreground))" fillOpacity="0.06" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.3" />
      <motion.line x1="270" y1="130" x2="290" y2="130" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.3" />
      <motion.path d="M180 150 L220 150" stroke="hsl(var(--foreground))" strokeWidth="2" strokeDasharray="4 4" opacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polygon points="218,145 228,150 218,155" fill="hsl(var(--foreground))" opacity="0.2" />
    </svg>,

    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <motion.rect x="100" y="60" width="200" height="180" rx="20" stroke="hsl(var(--foreground))" strokeWidth="2.5" opacity="0.12" />
      <motion.rect x="120" y="90" width="70" height="10" rx="5" fill="hsl(var(--foreground))" opacity="0.1" />
      <motion.rect x="120" y="110" width="50" height="10" rx="5" fill="hsl(var(--foreground))" opacity="0.07" />
      <motion.rect x="120" y="140" width="160" height="80" rx="12" fill="hsl(var(--accent))" fillOpacity="0.1" stroke="hsl(var(--accent))" strokeWidth="2" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="200" cy="180" r="15" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
      <motion.rect x="192" y="172" width="16" height="16" rx="3" fill="hsl(var(--accent))" fillOpacity="0.3" />
      <motion.circle cx="340" cy="80" r="8" fill="hsl(var(--accent))" fillOpacity="0.15" animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.circle cx="60" cy="220" r="5" fill="hsl(var(--foreground))" opacity="0.1" animate={{ y: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
    </svg>,

    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <motion.rect x="80" y="70" width="240" height="160" rx="16" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.1" />
      <motion.rect x="80" y="70" width="240" height="30" rx="0" fill="hsl(var(--foreground))" fillOpacity="0.05" />
      {[100, 120, 140, 160, 180].map((y, i) => (
        <motion.rect key={i} x="100" y={y} width={140 - i * 15} height="6" rx="3" fill={i === 2 ? "hsl(var(--accent))" : "hsl(var(--foreground))"} opacity={i === 2 ? 0.4 : 0.08} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: i * 0.1 }} style={{ transformOrigin: "left" }} />
      ))}
      <motion.rect x="260" y="120" width="40" height="40" rx="8" stroke="hsl(var(--accent))" strokeWidth="2" fill="hsl(var(--accent))" fillOpacity="0.08" animate={{ rotate: [0, 90, 90, 0] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.circle cx="50" cy="130" r="4" fill="hsl(var(--accent))" opacity="0.3" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="360" cy="200" r="6" fill="hsl(var(--foreground))" opacity="0.08" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity }} />
    </svg>,

    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <motion.circle cx="200" cy="150" r="70" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.1" strokeDasharray="6 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
      <motion.circle cx="200" cy="150" r="40" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.2" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
      <motion.rect x="185" y="135" width="30" height="30" rx="6" fill="hsl(var(--accent))" fillOpacity="0.15" stroke="hsl(var(--accent))" strokeWidth="2" />
      <motion.circle cx="200" cy="80" r="8" fill="hsl(var(--foreground))" opacity="0.1" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="270" cy="150" r="8" fill="hsl(var(--accent))" fillOpacity="0.25" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} />
      <motion.circle cx="200" cy="220" r="8" fill="hsl(var(--foreground))" opacity="0.1" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.4 }} />
      <motion.path d="M200 80 L200 110" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.15" />
      <motion.path d="M270 150 L240 150" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.25" />
      <motion.path d="M200 190 L200 220" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.15" />
      <motion.rect x="100" y="90" width="20" height="20" rx="4" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.08" animate={{ rotate: [0, 45, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.rect x="290" y="210" width="16" height="16" rx="4" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.08" animate={{ rotate: [0, -45, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
    </svg>,

    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <motion.path d="M200 220 L200 100" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.path d="M170 130 L200 90 L230 130" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.8 }} />
      <motion.circle cx="200" cy="80" r="12" fill="hsl(var(--accent))" fillOpacity="0.2" stroke="hsl(var(--accent))" strokeWidth="2" animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.rect x="140" y="230" width="120" height="12" rx="6" fill="hsl(var(--foreground))" opacity="0.08" />
      <motion.circle cx="100" cy="180" r="5" fill="hsl(var(--foreground))" opacity="0.1" animate={{ x: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="300" cy="160" r="5" fill="hsl(var(--foreground))" opacity="0.1" animate={{ x: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
      <motion.rect x="80" y="100" width="30" height="30" rx="8" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.08" />
      <motion.rect x="290" y="200" width="25" height="25" rx="6" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.08" />
    </svg>,

    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <motion.path d="M100 200 Q150 100 200 150 Q250 200 300 100" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
      <motion.circle cx="100" cy="200" r="8" fill="hsl(var(--accent))" fillOpacity="0.3" />
      <motion.circle cx="200" cy="150" r="8" fill="hsl(var(--accent))" fillOpacity="0.3" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="300" cy="100" r="8" fill="hsl(var(--accent))" fillOpacity="0.3" />
      <motion.path d="M300 100 L340 70" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="4 3" opacity="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.5 }} />
      <motion.polygon points="340,65 348,70 340,75" fill="hsl(var(--accent))" opacity="0.4" />
      <motion.rect x="80" y="80" width="50" height="6" rx="3" fill="hsl(var(--foreground))" opacity="0.06" />
      <motion.rect x="80" y="94" width="35" height="6" rx="3" fill="hsl(var(--foreground))" opacity="0.06" />
      <motion.circle cx="350" cy="220" r="20" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.08" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
    </svg>,
  ]

  return (
    <div className="w-full h-full flex items-center justify-center">
      {illustrations[index]}
    </div>
  )
}

function MobileCarousel() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev < steps.length - 1 ? prev + 1 : prev))
  }, [])

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev))
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext()
      else goPrev()
    }
  }

  const step = steps[current]

  return (
    <div className="px-4">
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-white border-2 border-foreground rounded-2xl p-6 shadow-brutal"
          >
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5">
              <step.icon className="w-7 h-7 text-foreground" />
            </div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-sm font-black text-muted-foreground">0{current + 1}</span>
              <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
            </div>
            <p className="text-muted-foreground font-medium">{step.shortDesc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="w-12 h-12 rounded-xl border-2 border-foreground bg-white flex items-center justify-center shadow-brutal-sm disabled:opacity-30 disabled:shadow-none active:translate-y-0.5 active:shadow-none transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-accent w-8"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={current === steps.length - 1}
          className="w-12 h-12 rounded-xl border-2 border-foreground bg-white flex items-center justify-center shadow-brutal-sm disabled:opacity-30 disabled:shadow-none active:translate-y-0.5 active:shadow-none transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

function DesktopCarousel() {
  const [current, setCurrent] = useState(0)

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev < steps.length - 1 ? prev + 1 : prev))
  }, [])

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev))
  }, [])

  const step = steps[current]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-2 border-foreground rounded-3xl bg-white shadow-brutal-lg overflow-hidden">
        <div className="grid grid-cols-2 min-h-[420px]">
          <div className="p-10 lg:p-14 flex flex-col justify-center border-r-2 border-foreground">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 border-2 border-accent/30 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <span className="text-6xl font-black text-[#1a1a1a]">0{current + 1}</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-lg">
                  {step.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative bg-background/50 p-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full max-w-[360px] max-h-[280px]"
              >
                <StepIllustration index={current} />
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-6 right-6 flex items-center gap-1 text-sm font-bold text-muted-foreground/50">
              <span className="text-foreground">{String(current + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(steps.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-foreground flex items-center justify-between px-10 lg:px-14 py-5 bg-background/30">
          <div className="flex gap-3">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "bg-accent w-10"
                    : idx < current
                      ? "bg-foreground/20 w-2"
                      : "bg-foreground/10 w-2"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              disabled={current === 0}
              className="w-12 h-12 rounded-xl border-2 border-foreground bg-white flex items-center justify-center shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal disabled:opacity-30 disabled:shadow-none disabled:hover:translate-y-0 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              disabled={current === steps.length - 1}
              className="w-12 h-12 rounded-xl border-2 border-foreground bg-foreground text-background flex items-center justify-center shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal-accent disabled:opacity-30 disabled:shadow-none disabled:hover:translate-y-0 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FactoryWorkflow() {
  return (
    <section id="factory" className="py-24 border-b-4 border-foreground bg-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Inside the factory</h2>
          <p className="text-xl text-muted-foreground font-medium">How PineApple turns ideas into products.</p>
        </motion.div>
      </div>

      <div className="md:hidden">
        <MobileCarousel />
      </div>

      <div className="hidden md:block">
        <DesktopCarousel />
      </div>
    </section>
  )
}
