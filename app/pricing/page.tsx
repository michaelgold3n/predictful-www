import Image from 'next/image'
import Navigation from '../components/Navigation'

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[#0A1929] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <Image
          src="/predictful.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-[#0A1929] opacity-75"></div>
      </div>

      <Navigation />

      {/* Pricing Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-6xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300">
            Choose the plan that's right for you
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#1a2b3c] p-2 rounded-full">
            <span className="text-brand-blue px-4 py-1">Billed Annually</span>
            <span className="bg-[#2a3b4c] text-white px-3 py-1 rounded-full text-sm">Save 50%</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-[#1a2b3c] rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2a3b4c] flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Free</h2>
            </div>
            <p className="text-gray-300 mb-8">Start with the essentials — ideal for personal use and light X post optimization.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>10 posts per month</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic A/B testing</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Limited AI suggestions</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic analytics</span>
              </li>
            </ul>
            <button className="w-full bg-[#2a3b4c] text-white py-3 rounded-full hover:bg-opacity-80 transition-colors">
              Get Started For Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-[#1a365d] to-[#1a2b3c] rounded-2xl p-8 border border-brand-blue">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-blue bg-opacity-20 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">$20</h2>
                <span className="text-sm text-gray-400">/month</span>
              </div>
            </div>
            <p className="text-gray-300 mb-8">For professionals and power users who want to supercharge their X presence.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited posts</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced A/B testing</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Full AI optimization suite</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced analytics & reporting</span>
              </li>
            </ul>
            <button className="w-full bg-brand-blue text-white py-3 rounded-full hover:bg-opacity-90 transition-colors">
              Get Pro Access
            </button>
          </div>
        </div>
      </div>
    </main>
  )
} 