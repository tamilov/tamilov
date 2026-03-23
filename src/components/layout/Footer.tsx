import { Link } from "wouter"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-16">
          
          <div className="sm:col-span-2 md:col-span-2">
            <Link href="/" className="text-3xl font-black tracking-tighter text-white mb-6 inline-block">
              Tamilov.
            </Link>
            <div className="border-l-4 border-accent pl-4 py-1 mb-8">
              <p className="text-lg font-bold text-gray-300">
                Currently: Building PineApple v2.
              </p>
              <p className="text-gray-400 font-medium">
                Accepting 2 collaboration projects this quarter.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Ecosystem</h4>
            <ul className="space-y-4">
              <li><Link href="/projects/pineapple" className="text-gray-400 font-medium hover:text-accent transition-colors">PineApple</Link></li>
              <li><Link href="/projects" className="text-gray-400 font-medium hover:text-accent transition-colors">All Projects</Link></li>
              <li><Link href="/notes" className="text-gray-400 font-medium hover:text-accent transition-colors">Notes</Link></li>
              <li><Link href="/contact" className="text-gray-400 font-medium hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li><a href="https://x.com/tamilovDev" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium hover:text-accent transition-colors">Twitter / X</a></li>
              <li><a href="https://t.me/tamilovDev" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium hover:text-accent transition-colors">Telegram</a></li>
              <li><a href="mailto:hello@tamilov.com" className="text-gray-400 font-medium hover:text-accent transition-colors">Email</a></li>
              <li><Link href="/notes" className="text-gray-400 font-medium hover:text-accent transition-colors">Newsletter</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t-2 border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-medium text-sm">
            © {new Date().getFullYear()} Tamilov. Built inside PineApple.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">Terms</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
