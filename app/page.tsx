import Image from 'next/image'
import Navigation from './components/Navigation'
import TypeAnimation from './components/TypeAnimation'

export default function Home() {
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

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            AI to A/B test your <Image src="/X_logo_2023_(white).png" alt="X Logo" width={56} height={56} className="inline mb-2" /> posts to <span className="italic">virality</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Leverage AI to optimize your posts and maximize engagement on X. Get instant predictions and recommendations.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-brand-blue text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
              Sign in with <Image src="/X_logo_2023_(white).png" alt="X Logo" width={20} height={20} className="inline" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Watch Demo
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Free to use, no credit card required
          </p>
        </div>

        {/* Interactive Demo Preview */}
        <div className="mt-8 relative">
          <div className="bg-[#1a2b3c] rounded-lg overflow-hidden shadow-2xl max-w-3xl mx-auto">
            <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-800">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="p-6">
              <TypeAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-brand-blue rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-brand-blue rounded-full blur-3xl opacity-20"></div>
    </main>
  )
} 