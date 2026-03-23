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
  const fg = "hsl(var(--foreground))"
  const ac = "hsl(var(--accent))"

  const illustrations = [
    // 1. Idea — lightbulb moment, radiating sparks from center
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <circle cx="200" cy="150" r="100" stroke={fg} strokeWidth="2" strokeDasharray="8 6" opacity="0.08" />
      <circle cx="200" cy="150" r="65" stroke={fg} strokeWidth="2" opacity="0.1" />
      <circle cx="200" cy="150" r="30" stroke={ac} strokeWidth="2.5" opacity="0.2" />
      <motion.circle cx="200" cy="150" r="14" fill={ac} animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 200 + Math.cos(rad) * 42
        const y1 = 150 + Math.sin(rad) * 42
        const x2 = 200 + Math.cos(rad) * 58
        const y2 = 150 + Math.sin(rad) * 58
        return <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ac} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" animate={{ opacity: [0.15, 0.45, 0.15] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
      })}
      <motion.path d="M130 80 L155 65 L180 80" stroke={fg} strokeWidth="2" opacity="0.15" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
      <motion.path d="M220 220 L245 235 L270 220" stroke={fg} strokeWidth="2" opacity="0.15" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4 }} />
      <motion.rect x="65" y="100" width="24" height="24" rx="6" stroke={fg} strokeWidth="1.5" opacity="0.1" animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.rect x="310" y="180" width="20" height="20" rx="5" stroke={fg} strokeWidth="1.5" opacity="0.1" animate={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
      <motion.circle cx="320" cy="80" r="6" fill={fg} opacity="0.1" animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="80" cy="210" r="5" fill={fg} opacity="0.08" animate={{ y: [0, 5, 0] }} transition={{ duration: 3.5, repeat: Infinity }} />
      <rect x="85" y="255" width="45" height="5" rx="2.5" fill={fg} opacity="0.06" />
      <rect x="140" y="255" width="30" height="5" rx="2.5" fill={fg} opacity="0.04" />
      <rect x="270" y="55" width="40" height="5" rx="2.5" fill={fg} opacity="0.06" />
    </svg>,

    // 2. Validation — two cards: checkmark (approved) vs X (rejected), with data bars
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <rect x="55" y="55" width="130" height="170" rx="16" stroke={fg} strokeWidth="2" opacity="0.12" fill="white" fillOpacity="0.5" />
      <rect x="215" y="55" width="130" height="170" rx="16" stroke={fg} strokeWidth="2" opacity="0.12" fill="white" fillOpacity="0.5" />
      <text x="120" y="82" textAnchor="middle" fontSize="11" fontWeight="700" fill={fg} opacity="0.25">OPTION A</text>
      <text x="280" y="82" textAnchor="middle" fontSize="11" fontWeight="700" fill={fg} opacity="0.25">OPTION B</text>
      {[100, 118, 136].map((y, i) => (
        <motion.rect key={`a${i}`} x="75" y={y} width={80 - i * 15} height="8" rx="4" fill={ac} opacity={0.35 - i * 0.08} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: i * 0.15 }} style={{ transformOrigin: "left" }} />
      ))}
      {[100, 118, 136].map((y, i) => (
        <motion.rect key={`b${i}`} x="235" y={y} width={50 - i * 10} height="8" rx="4" fill={fg} opacity={0.1 - i * 0.02} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }} style={{ transformOrigin: "left" }} />
      ))}
      <motion.circle cx="120" cy="185" r="22" fill={ac} fillOpacity="0.15" stroke={ac} strokeWidth="2.5" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.path d="M110 185 L117 193 L132 176" stroke={ac} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.6 }} />
      <circle cx="280" cy="185" r="22" fill={fg} fillOpacity="0.04" stroke={fg} strokeWidth="2" opacity="0.2" />
      <line x1="270" y1="175" x2="290" y2="195" stroke={fg} strokeWidth="2.5" strokeLinecap="round" opacity="0.2" />
      <line x1="290" y1="175" x2="270" y2="195" stroke={fg} strokeWidth="2.5" strokeLinecap="round" opacity="0.2" />
      <motion.path d="M185 140 L200 130 L215 140" stroke={fg} strokeWidth="1.5" opacity="0.12" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
      <rect x="75" y="245" width="250" height="6" rx="3" fill={fg} opacity="0.05" />
      <motion.rect x="75" y="245" width="155" height="6" rx="3" fill={ac} opacity="0.2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.5 }} style={{ transformOrigin: "left" }} />
      <text x="200" y="270" textAnchor="middle" fontSize="10" fontWeight="600" fill={fg} opacity="0.15">CONFIDENCE: 78%</text>
    </svg>,

    // 3. Design — artboard with UI elements, color swatches, layout grid
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <rect x="80" y="40" width="240" height="200" rx="16" stroke={fg} strokeWidth="2.5" opacity="0.12" />
      <rect x="80" y="40" width="240" height="28" fill={fg} fillOpacity="0.04" rx="16" />
      <circle cx="98" cy="54" r="5" fill="#ff5f57" opacity="0.4" />
      <circle cx="114" cy="54" r="5" fill="#ffbd2e" opacity="0.4" />
      <circle cx="130" cy="54" r="5" fill="#28c840" opacity="0.4" />
      <rect x="100" y="82" width="80" height="10" rx="5" fill={fg} opacity="0.12" />
      <rect x="100" y="100" width="55" height="8" rx="4" fill={fg} opacity="0.07" />
      <motion.rect x="100" y="120" width="200" height="100" rx="12" fill={ac} fillOpacity="0.08" stroke={ac} strokeWidth="2" animate={{ scale: [1, 1.015, 1] }} transition={{ duration: 3, repeat: Infinity }} />
      <rect x="115" y="135" width="60" height="8" rx="4" fill={ac} opacity="0.3" />
      <rect x="115" y="150" width="40" height="6" rx="3" fill={fg} opacity="0.08" />
      <motion.rect x="115" y="170" width="70" height="26" rx="8" fill={ac} fillOpacity="0.25" stroke={ac} strokeWidth="1.5" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
      <rect x="230" y="135" width="55" height="55" rx="10" stroke={fg} strokeWidth="1.5" opacity="0.1" strokeDasharray="4 3" />
      <line x1="257" y1="135" x2="257" y2="190" stroke={fg} strokeWidth="1" opacity="0.06" />
      <line x1="230" y1="162" x2="285" y2="162" stroke={fg} strokeWidth="1" opacity="0.06" />
      {[0, 1, 2, 3].map((i) => (
        <motion.rect key={i} x={340 + (i % 2) * 18} y={80 + Math.floor(i / 2) * 18} width="14" height="14" rx="4" fill={i === 0 ? ac : fg} opacity={i === 0 ? 0.4 : 0.06 + i * 0.03} animate={i === 0 ? { scale: [1, 1.15, 1] } : undefined} transition={i === 0 ? { duration: 2, repeat: Infinity } : undefined} />
      ))}
      <motion.circle cx="55" cy="180" r="6" fill={ac} opacity="0.15" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
      <rect x="340" y="145" width="30" height="4" rx="2" fill={fg} opacity="0.06" />
      <rect x="340" y="155" width="22" height="4" rx="2" fill={fg} opacity="0.04" />
      <motion.circle cx="55" cy="100" r="4" fill={fg} opacity="0.08" animate={{ y: [0, 4, 0] }} transition={{ duration: 3.5, repeat: Infinity }} />
    </svg>,

    // 4. Build — code editor with terminal, brackets, cursor
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <rect x="60" y="45" width="280" height="195" rx="14" stroke={fg} strokeWidth="2" opacity="0.12" />
      <rect x="60" y="45" width="280" height="26" fill={fg} fillOpacity="0.05" rx="14" />
      <circle cx="78" cy="58" r="4" fill="#ff5f57" opacity="0.4" />
      <circle cx="92" cy="58" r="4" fill="#ffbd2e" opacity="0.4" />
      <circle cx="106" cy="58" r="4" fill="#28c840" opacity="0.4" />
      <rect x="60" y="200" width="280" height="40" fill={fg} fillOpacity="0.03" />
      <text x="78" y="224" fontSize="10" fontFamily="monospace" fill={ac} opacity="0.4">$ pnpm build</text>
      <motion.rect x="148" y="222" width="7" height="2" fill={ac} opacity="0.5" animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 1, repeat: Infinity }} />
      {[{ y: 82, w: 30, c: ac, o: 0.4 }, { y: 82, x: 32, w: 50, c: fg, o: 0.1 }, { y: 98, w: 90, c: fg, o: 0.08, indent: 16 }, { y: 114, w: 70, c: ac, o: 0.25, indent: 32 }, { y: 130, w: 100, c: fg, o: 0.07, indent: 32 }, { y: 146, w: 60, c: fg, o: 0.07, indent: 32 }, { y: 162, w: 40, c: ac, o: 0.2, indent: 16 }, { y: 178, w: 25, c: fg, o: 0.08 }].map((line, i) => (
        <motion.rect key={i} x={80 + (line.indent || 0)} y={line.y} width={line.w} height="6" rx="3" fill={line.c} opacity={line.o} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.3, delay: i * 0.08 }} style={{ transformOrigin: "left" }} />
      ))}
      <text x="80" y="88" fontSize="9" fontFamily="monospace" fill={fg} opacity="0.08">1</text>
      <text x="80" y="104" fontSize="9" fontFamily="monospace" fill={fg} opacity="0.08">2</text>
      <text x="80" y="120" fontSize="9" fontFamily="monospace" fill={fg} opacity="0.08">3</text>
      <text x="80" y="136" fontSize="9" fontFamily="monospace" fill={fg} opacity="0.08">4</text>
      <text x="80" y="152" fontSize="9" fontFamily="monospace" fill={fg} opacity="0.08">5</text>
      <text x="80" y="168" fontSize="9" fontFamily="monospace" fill={fg} opacity="0.08">6</text>
      <text x="80" y="184" fontSize="9" fontFamily="monospace" fill={fg} opacity="0.08">7</text>
      <motion.rect x="192" y="112" width="2" height="12" fill={ac} opacity="0.6" animate={{ opacity: [0, 0.6, 0] }} transition={{ duration: 1.2, repeat: Infinity }} />
      <motion.circle cx="365" cy="80" r="5" fill={ac} opacity="0.15" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.rect x="355" y="130" width="16" height="16" rx="4" stroke={fg} strokeWidth="1.5" opacity="0.08" animate={{ rotate: [0, 90, 90, 0] }} transition={{ duration: 4, repeat: Infinity }} />
      <rect x="355" y="165" width="28" height="4" rx="2" fill={fg} opacity="0.05" />
      <rect x="355" y="175" width="20" height="4" rx="2" fill={fg} opacity="0.04" />
    </svg>,

    // 5. Automate — gears/cogs system with connecting pipes
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "160px 120px" }}>
        <circle cx="160" cy="120" r="38" stroke={ac} strokeWidth="2.5" opacity="0.25" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = 160 + Math.cos(rad) * 38
          const y = 120 + Math.sin(rad) * 38
          return <rect key={i} x={x - 5} y={y - 5} width="10" height="10" rx="2" fill={ac} opacity="0.2" />
        })}
        <circle cx="160" cy="120" r="12" fill={ac} fillOpacity="0.15" stroke={ac} strokeWidth="2" />
      </motion.g>
      <motion.g animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "270px 170px" }}>
        <circle cx="270" cy="170" r="28" stroke={fg} strokeWidth="2" opacity="0.12" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = 270 + Math.cos(rad) * 28
          const y = 170 + Math.sin(rad) * 28
          return <rect key={i} x={x - 4} y={y - 4} width="8" height="8" rx="2" fill={fg} opacity="0.1" />
        })}
        <circle cx="270" cy="170" r="9" fill={fg} fillOpacity="0.06" stroke={fg} strokeWidth="1.5" opacity="0.15" />
      </motion.g>
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "310px 90px" }}>
        <circle cx="310" cy="90" r="20" stroke={fg} strokeWidth="1.5" opacity="0.1" />
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = 310 + Math.cos(rad) * 20
          const y = 90 + Math.sin(rad) * 20
          return <rect key={i} x={x - 3} y={y - 3} width="6" height="6" rx="1.5" fill={fg} opacity="0.08" />
        })}
        <circle cx="310" cy="90" r="6" fill={fg} fillOpacity="0.05" stroke={fg} strokeWidth="1.5" opacity="0.1" />
      </motion.g>
      <path d="M195 135 Q220 150 245 160" stroke={fg} strokeWidth="2" strokeDasharray="4 4" opacity="0.12" />
      <path d="M293 155 Q300 120 310 110" stroke={fg} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.1" />
      <rect x="80" y="200" width="100" height="30" rx="8" stroke={fg} strokeWidth="1.5" opacity="0.08" />
      <rect x="90" y="210" width="35" height="5" rx="2.5" fill={fg} opacity="0.08" />
      <rect x="90" y="218" width="25" height="4" rx="2" fill={fg} opacity="0.05" />
      <path d="M130 200 L130 170 Q130 155 145 150" stroke={fg} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.1" />
      <rect x="220" y="220" width="100" height="30" rx="8" stroke={ac} strokeWidth="1.5" opacity="0.15" />
      <rect x="230" y="230" width="35" height="5" rx="2.5" fill={ac} opacity="0.2" />
      <rect x="230" y="238" width="50" height="4" rx="2" fill={fg} opacity="0.05" />
      <motion.circle cx="295" cy="235" r="6" fill={ac} opacity="0.3" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="75" cy="80" r="5" fill={fg} opacity="0.08" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.rect x="60" y="140" width="18" height="18" rx="4" stroke={fg} strokeWidth="1.5" opacity="0.06" animate={{ rotate: [0, 45, 0] }} transition={{ duration: 6, repeat: Infinity }} />
    </svg>,

    // 6. Launch — rocket trail going up with platform below
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <rect x="130" y="230" width="140" height="16" rx="8" fill={fg} opacity="0.08" />
      <rect x="155" y="222" width="90" height="10" rx="5" fill={fg} opacity="0.05" />
      <motion.path d="M200 210 L200 60" stroke={ac} strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
      <motion.path d="M175 100 L200 60 L225 100" stroke={ac} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.8 }} />
      <motion.path d="M188 75 L200 55 L212 75" stroke={ac} strokeWidth="2" strokeLinecap="round" fill={ac} fillOpacity="0.15" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.2 }} />
      {[{ cx: 192, cy: 130 }, { cx: 208, cy: 145 }, { cx: 195, cy: 160 }, { cx: 205, cy: 175 }, { cx: 198, cy: 190 }].map((p, i) => (
        <motion.circle key={i} cx={p.cx} cy={p.cy} r={4 - i * 0.4} fill={ac} opacity={0.3 - i * 0.04} animate={{ opacity: [0.15, 0.35, 0.15], y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
      ))}
      {[70, 90, 110, 130].map((y, i) => (
        <motion.line key={i} x1={240 + i * 12} y1={y} x2={240 + i * 12} y2={y + 15} stroke={fg} strokeWidth="1.5" strokeLinecap="round" opacity={0.06 + i * 0.02} animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
      ))}
      {[80, 100, 120].map((y, i) => (
        <motion.line key={i} x1={100 - i * 12} y1={y} x2={100 - i * 12} y2={y + 12} stroke={fg} strokeWidth="1.5" strokeLinecap="round" opacity={0.06 + i * 0.02} animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 + 0.5 }} />
      ))}
      <rect x="80" y="250" width="60" height="5" rx="2.5" fill={fg} opacity="0.04" />
      <rect x="260" y="250" width="50" height="5" rx="2.5" fill={fg} opacity="0.04" />
      <motion.circle cx="320" cy="80" r="6" fill={fg} opacity="0.06" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="80" cy="180" r="5" fill={fg} opacity="0.06" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3.5, repeat: Infinity }} />
      <motion.rect x="300" y="190" width="22" height="22" rx="6" stroke={fg} strokeWidth="1.5" opacity="0.06" />
      <motion.rect x="65" y="100" width="18" height="18" rx="4" stroke={fg} strokeWidth="1.5" opacity="0.06" />
    </svg>,

    // 7. Improve — growth chart with axes, grid, data points, trend line
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      <line x1="70" y1="40" x2="70" y2="240" stroke={fg} strokeWidth="2" opacity="0.15" />
      <line x1="70" y1="240" x2="360" y2="240" stroke={fg} strokeWidth="2" opacity="0.15" />
      {[200, 160, 120, 80].map((y, i) => (
        <g key={i}>
          <line x1="70" y1={y} x2="360" y2={y} stroke={fg} strokeWidth="1" opacity="0.05" strokeDasharray="4 4" />
          <text x="60" y={y + 4} textAnchor="end" fontSize="9" fill={fg} opacity="0.1">{(i + 1) * 25}</text>
        </g>
      ))}
      {["v1", "v2", "v3", "v4", "v5"].map((label, i) => (
        <text key={i} x={110 + i * 55} y="258" textAnchor="middle" fontSize="9" fill={fg} opacity="0.12">{label}</text>
      ))}
      <polygon points="70,36 66,44 74,44" fill={fg} opacity="0.15" />
      <polygon points="364,240 356,236 356,244" fill={fg} opacity="0.15" />
      {[{ x: 110, h: 50 }, { x: 165, h: 80 }, { x: 220, h: 70 }, { x: 275, h: 110 }, { x: 330, h: 145 }].map((bar, i) => (
        <motion.rect key={i} x={bar.x - 14} y={240 - bar.h} width="28" height={bar.h} rx="4" fill={ac} opacity={0.12 + i * 0.03} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.5, delay: i * 0.15 }} style={{ transformOrigin: "center bottom" }} />
      ))}
      <motion.path d="M110 190 L165 160 L220 170 L275 130 L330 95" stroke={ac} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
      {[{ x: 110, y: 190 }, { x: 165, y: 160 }, { x: 220, y: 170 }, { x: 275, y: 130 }, { x: 330, y: 95 }].map((p, i) => (
        <motion.circle key={i} cx={p.x} cy={p.y} r="5" fill="white" stroke={ac} strokeWidth="2.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }} />
      ))}
      <motion.path d="M330 95 L355 75" stroke={ac} strokeWidth="2" strokeDasharray="4 3" opacity="0.35" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.8 }} />
      <motion.circle cx="362" cy="70" r="8" stroke={ac} strokeWidth="2" fill={ac} fillOpacity="0.15" initial={{ scale: 0 }} animate={{ scale: [0, 1.1, 1] }} transition={{ duration: 0.5, delay: 2.2 }} />
      <motion.path d="M358 70 L362 74 L368 66" stroke={ac} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 2.5 }} />
      <text x="200" y="278" textAnchor="middle" fontSize="10" fontWeight="600" fill={fg} opacity="0.1">ITERATIONS</text>
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
