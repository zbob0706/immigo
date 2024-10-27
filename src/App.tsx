import React from 'react';
import { Globe2, Users, Calendar, MessageCircle, Shield, Search } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Find Your Perfect Immigration Lawyer
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with experienced immigration lawyers who can guide you through your journey to a new life
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Find a Lawyer
          </button>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
            I'm a Lawyer
          </button>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option value="">Immigration Type</option>
                <option value="business">Business Immigration</option>
                <option value="family">Family Immigration</option>
                <option value="asylum">Asylum</option>
                <option value="student">Student Visa</option>
              </select>
            </div>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose Immigro
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Globe2}
            title="Global Network"
            description="Access to verified immigration lawyers from around the world"
          />
          <FeatureCard
            icon={Users}
            title="Expert Matching"
            description="Find the perfect lawyer based on your specific immigration needs"
          />
          <FeatureCard
            icon={Calendar}
            title="Easy Scheduling"
            description="Book consultations with just a few clicks"
          />
          <FeatureCard
            icon={MessageCircle}
            title="Secure Communication"
            description="Direct messaging system for seamless communication"
          />
          <FeatureCard
            icon={Shield}
            title="Verified Professionals"
            description="All lawyers are thoroughly vetted and certified"
          />
          <FeatureCard
            icon={Search}
            title="Transparent Reviews"
            description="Read genuine feedback from previous clients"
          />
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Thousands</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-indigo-200">Successful Cases</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-indigo-200">Verified Lawyers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-indigo-200">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Immigro</h3>
              <p className="text-gray-600">Making immigration simpler, one case at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Clients</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Find a Lawyer</li>
                <li>How it Works</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Lawyers</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Join Network</li>
                <li>Resources</li>
                <li>Partner Program</li>
                <li>Success Stories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Support</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            © 2024 Immigro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;