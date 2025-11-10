import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AnnotateAI
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            AI-Powered Data Annotation Platform
          </p>
          <p className="text-xl text-gray-600 mb-8">
            🚀 10x faster | 💰 3x cheaper than Scale AI
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started Free
            </Link>
            <Link
              href="/sign-in"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Instant Results</h3>
            <p className="text-gray-600">
              Automated processing with 95% accuracy guarantee
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Smart AI System</h3>
            <p className="text-gray-600">
              Intelligent quality control for complex tasks
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold mb-2">Smart Pricing</h3>
            <p className="text-gray-600">
              AI calculates fair prices: £30-100 per task, fully transparent
            </p>
          </div>
        </div>

        <div className="mt-20 text-center bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">🇬🇧 UK-Based, GDPR Compliant</h2>
          <p className="text-gray-700">
            Built in London. Your data never leaves Europe. Enterprise-grade security.
          </p>
        </div>
      </div>
    </div>
  );
}
