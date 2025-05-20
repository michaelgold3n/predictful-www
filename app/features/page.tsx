import Image from 'next/image'
import Navigation from '../components/Navigation'

export default function Features() {
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

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-6xl font-bold mb-4">
            Supercharge Your X Posts
          </h1>
          <p className="text-xl text-gray-300">
            Powerful AI tools to optimize your content and maximize engagement
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* A/B Testing */}
          <div className="bg-[#1a2b3c] rounded-2xl p-8 border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-blue bg-opacity-20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI-Powered A/B Testing</h3>
            <p className="text-gray-300">Generate multiple versions of your posts and let our AI predict which one will perform best before you publish.</p>
          </div>

          {/* Engagement Analytics */}
          <div className="bg-[#1a2b3c] rounded-2xl p-8 border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-blue bg-opacity-20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
            <p className="text-gray-300">Track engagement metrics, understand your audience, and identify trends to optimize your content strategy.</p>
          </div>

          {/* Smart Scheduling */}
          <div className="bg-[#1a2b3c] rounded-2xl p-8 border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-blue bg-opacity-20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Smart Scheduling</h3>
            <p className="text-gray-300">AI determines the best time to post based on your audience's activity patterns and engagement history.</p>
          </div>

          {/* Content Optimization */}
          <div className="bg-[#1a2b3c] rounded-2xl p-8 border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-blue bg-opacity-20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Content Optimization</h3>
            <p className="text-gray-300">Get AI-powered suggestions to improve your post's engagement potential before publishing.</p>
          </div>

          {/* Audience Insights */}
          <div className="bg-[#1a2b3c] rounded-2xl p-8 border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-blue bg-opacity-20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Audience Insights</h3>
            <p className="text-gray-300">Understand your followers' interests and behavior to create more engaging content.</p>
          </div>

          {/* Viral Prediction */}
          <div className="bg-[#1a2b3c] rounded-2xl p-8 border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-blue bg-opacity-20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Viral Prediction</h3>
            <p className="text-gray-300">Advanced AI algorithms predict your post's viral potential and suggest improvements.</p>
          </div>
        </div>
      </div>
    </main>
  )
} 