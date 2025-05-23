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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            AI to A/B test your <Image src="/X_logo_2023_(white).png" alt="X Logo" width={40} height={40} className="inline mb-1 sm:mb-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" /> posts to <span className="italic">virality</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0">
            Leverage AI to optimize your posts and maximize engagement on X. Get instant predictions and recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button className="bg-brand-blue text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Sign in with <Image src="/X_logo_2023_(white).png" alt="X Logo" width={20} height={20} className="inline" />
            </button>
            <button className="hidden sm:block border border-white text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors w-full sm:w-auto">
              Watch Demo
            </button>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 px-4 sm:px-0">
            Free to use, no credit card required
          </p>
        </div>

        {/* Interactive Demo Preview */}
        <div className="mt-6 sm:mt-8 relative px-4 sm:px-0">
          <div className="bg-[#1a2b3c] rounded-lg overflow-hidden shadow-2xl max-w-3xl mx-auto">
            <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-800">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="p-4 sm:p-6">
              <TypeAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-brand-blue rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-16 sm:w-20 h-16 sm:h-20 bg-brand-blue rounded-full blur-3xl opacity-20"></div>
    </main>
  )
} 