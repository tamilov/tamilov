import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

async function submitContact(_data: FormData): Promise<void> {
  await new Promise((r) => setTimeout(r, 1200))
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", message: "" })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email"
    if (!form.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("submitting")
    try {
      await submitContact(form)
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border-2 border-foreground rounded-2xl bg-white p-8 sm:p-12 shadow-brutal text-center"
      >
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-foreground" />
        </div>
        <h3 className="text-2xl font-black text-foreground mb-3">Message received</h3>
        <p className="text-lg text-muted-foreground font-medium mb-6">
          Thanks for reaching out. I'll get back to you within 48 hours.
        </p>
        <Button variant="secondary" onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", message: "" }) }}>
          Send another message
        </Button>
      </motion.div>
    )
  }

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border-2 border-foreground rounded-2xl bg-white p-8 sm:p-12 shadow-brutal text-center"
      >
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-2xl font-black text-foreground mb-3">Something went wrong</h3>
        <p className="text-lg text-muted-foreground font-medium mb-6">
          Your message couldn't be sent. Please try again or email hello@tamilov.com directly.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Try again
        </Button>
      </motion.div>
    )
  }

  const inputClass = "w-full bg-white border-2 border-foreground rounded-xl px-4 py-3 text-foreground font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
  const errorClass = "border-red-500 focus:ring-red-500 focus:border-red-500"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-5" : "grid grid-cols-1 gap-5"}>
        <div>
          <label className="block text-sm font-bold text-foreground mb-2">Name *</label>
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }) }}
            className={`${inputClass} ${errors.name ? errorClass : ""}`}
          />
          {errors.name && <p className="text-sm text-red-500 font-semibold mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-bold text-foreground mb-2">Email *</label>
          <input
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }) }}
            className={`${inputClass} ${errors.email ? errorClass : ""}`}
          />
          {errors.email && <p className="text-sm text-red-500 font-semibold mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-foreground mb-2">Project / Company <span className="text-muted-foreground font-medium">(optional)</span></label>
        <input
          type="text"
          placeholder="Your project or company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-foreground mb-2">Message *</label>
        <textarea
          rows={compact ? 4 : 5}
          placeholder="Tell me about your project, idea, or question..."
          value={form.message}
          onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: undefined }) }}
          className={`${inputClass} resize-none ${errors.message ? errorClass : ""}`}
        />
        {errors.message && <p className="text-sm text-red-500 font-semibold mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message →"}
      </Button>
    </form>
  )
}
