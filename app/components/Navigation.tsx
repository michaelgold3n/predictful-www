'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            {/* Hamburger Menu Button - Made Bigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>

            {/* Centered Logo - Made Bigger */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="transform transition-transform hover:scale-110">
                <Image src="/logo.png" alt="Predictful" height={48} width={180} className="object-contain" />
              </Link>
            </div>

            {/* Sign In Button */}
            <button className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition-colors inline-flex items-center gap-1">
              <Image src="/X_logo_2023_(white).png" alt="X Logo" width={14} height={14} className="inline" />
              <span className="hidden xs:inline">Sign in</span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 mt-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/features" 
                  className="hover:text-brand-blue transition-colors py-2 px-4 hover:bg-white/5 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="/pricing" 
                  className="hover:text-brand-blue transition-colors py-2 px-4 hover:bg-white/5 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/blog" 
                  className="hover:text-brand-blue transition-colors py-2 px-4 hover:bg-white/5 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 