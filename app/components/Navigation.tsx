import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="h-[44px] flex items-center">
          <Link href="/" className="transform transition-transform hover:scale-110">
            <Image src="/logo.png" alt="Predictful" height={44} width={165} className="object-contain" />
          </Link>
        </div>
        <div className="flex-1 flex justify-center space-x-12">
          <Link href="/features" className="hover:text-brand-blue transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-brand-blue transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-brand-blue transition-colors">Blog</Link>
        </div>
        <button className="bg-brand-blue text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
          Sign in with <Image src="/X_logo_2023_(white).png" alt="X Logo" width={16} height={16} className="inline" />
        </button>
      </div>
    </nav>
  )
} 