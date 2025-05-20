import Image from 'next/image'
import Navigation from '../components/Navigation'

export default function Blog() {
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

      {/* Blog Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-6xl font-bold mb-4">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-300">
            Tips, strategies, and updates to help you succeed on X
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Featured Article */}
          <div className="lg:col-span-2 bg-[#1a2b3c] rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="aspect-[2/1] relative bg-[#2a3b4c]">
              <div className="absolute inset-0 flex items-center justify-center text-brand-blue">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand-blue bg-opacity-20 text-brand-blue px-3 py-1 rounded-full text-sm">Featured</span>
                <span className="text-gray-400 text-sm">5 min read</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">How AI is Revolutionizing Social Media Optimization</h2>
              <p className="text-gray-300 mb-4">Discover how artificial intelligence is transforming the way we create and optimize content for maximum engagement on X.</p>
              <a href="#" className="text-brand-blue hover:underline">Read More →</a>
            </div>
          </div>

          {/* Regular Articles */}
          <div className="bg-[#1a2b3c] rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#2a3b4c] text-gray-300 px-3 py-1 rounded-full text-sm">Strategy</span>
                <span className="text-gray-400 text-sm">3 min read</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">10 Tips for Creating Viral Content on X</h2>
              <p className="text-gray-300 mb-4">Learn the key strategies and best practices for creating content that resonates with your audience and drives engagement.</p>
              <a href="#" className="text-brand-blue hover:underline">Read More →</a>
            </div>
          </div>

          <div className="bg-[#1a2b3c] rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#2a3b4c] text-gray-300 px-3 py-1 rounded-full text-sm">Analytics</span>
                <span className="text-gray-400 text-sm">4 min read</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Understanding Your X Analytics</h2>
              <p className="text-gray-300 mb-4">A comprehensive guide to interpreting your X analytics and using data to improve your content strategy.</p>
              <a href="#" className="text-brand-blue hover:underline">Read More →</a>
            </div>
          </div>

          <div className="bg-[#1a2b3c] rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#2a3b4c] text-gray-300 px-3 py-1 rounded-full text-sm">Tips</span>
                <span className="text-gray-400 text-sm">3 min read</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Best Times to Post on X in 2024</h2>
              <p className="text-gray-300 mb-4">Data-driven insights on optimal posting times to maximize your content's reach and engagement.</p>
              <a href="#" className="text-brand-blue hover:underline">Read More →</a>
            </div>
          </div>

          <div className="bg-[#1a2b3c] rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-blue transition-colors">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#2a3b4c] text-gray-300 px-3 py-1 rounded-full text-sm">Growth</span>
                <span className="text-gray-400 text-sm">5 min read</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Building a Strong Personal Brand on X</h2>
              <p className="text-gray-300 mb-4">Essential strategies for developing and maintaining a compelling personal brand presence on X.</p>
              <a href="#" className="text-brand-blue hover:underline">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 