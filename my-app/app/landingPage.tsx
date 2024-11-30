import React from 'react';
import { ArrowRight, Share2, Users, Zap, Brain, Code, Calendar, Workflow } from 'lucide-react';

interface AppScreenshotProps {
  image: string;
  title: string;
  description: string;
}

interface ProblemCardProps {
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AppScreenshot: React.FC<AppScreenshotProps> = ({ image, title, description }) => (
  <div className="flex flex-col items-center p-6">
    <div className="relative aspect-[9/19] w-full max-w-[280px] mb-6">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full rounded-3xl shadow-lg"
      />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const ProblemCard: React.FC<ProblemCardProps> = ({ title, description }) => (
  <div className="bg-gray-50 p-8 rounded-xl">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-8 rounded-xl">
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  const screenshots = [
    {
      image: "screen1.png",
      title: "Radial Connection Interface",
      description: "Intuitive radial design shows all your social profiles ready to be shared with a simple tap."
    },
    {
      image: "screen2.png",
      title: "Smart Account Management",
      description: "Easily manage all your social accounts with auto-integration and customizable sharing preferences."
    },
    {
      image: "screen3.png",
      title: "Smart Updates",
      description: "Stay connected with meaningful notifications about your network, like when friends need support."
    },
    {
      image: "screen4.png",
      title: "Context-Aware Connections",
      description: "LinkDrop remembers where and when you meet people, making it easy to follow up and stay in touch."
    },
    {
      image: "screen5.png",
      title: "AI-Powered Experience",
      description: "Enhance your networking with AI that understands your context, projects, and life updates."
    },
    {
      image: "screen6.png", // The first image you provided
      title: "Smart Network Search",
      description: "Find the right connections through your existing network. LinkDrop's AI understands relationships and can help you discover valuable introductions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Nav */}
      <nav className="container mx-auto px-8 py-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="LinkDrop Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold">LinkDrop</span>
        </div>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
          Get Early Access
        </button>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-8 py-48">
        <div className="max-w-3xl mx-auto text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Drop in, Stand out
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mt-2">
              Connect Smarter
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            The first AI-powered networking app that lets you share all your social profiles in one tap.
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition flex items-center gap-3 mx-auto">
            Join Waitlist <ArrowRight size={20} />
          </button>
        </div>
      </header>

      {/* Gradient Divider */}
      <div className="h-24 bg-gradient-to-b from-transparent via-blue-50/50 to-white"></div>

      {/* Problem Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">It's a Pain to Connect</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <ProblemCard
              title="Scanning QR Codes"
              description="Especially challenging with groups of 3+ people"
            />
            <ProblemCard
              title="Finding the Right Person"
              description="Type their name on LinkedIn and hope it's the right profile"
            />
            <ProblemCard
              title="Complex Usernames"
              description="Spell out handles like '@dddaniel_tian' without typos"
            />
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-24 bg-gradient-to-b from-white via-purple-50/50 to-transparent"></div>

      {/* App Screenshots Showcase */}
      <section className="container mx-auto px-8 py-32">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience LinkDrop</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          A seamless, intelligent networking experience that understands how people really connect.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {screenshots.map((screen, index) => (
            <AppScreenshot key={index} {...screen} />
          ))}
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-24 bg-gradient-to-b from-transparent via-blue-50/50 to-white"></div>

      {/* Features Grid */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Share2 size={24} />}
              title="Simple Onboarding"
              description="Auto-integration with your existing social profiles"
            />
            <FeatureCard 
              icon={<Users size={24} />}
              title="Group Connect"
              description="Works instantly with groups - no more scanning multiple QR codes"
            />
            <FeatureCard 
              icon={<Brain size={24} />}
              title="AI-Powered Profiles"
              description="Smart profiles that understand your context and connections"
            />
            <FeatureCard 
              icon={<Workflow size={24} />}
              title="Smart Catch-up"
              description="Never miss updates from your IRL connections"
            />
            <FeatureCard 
              icon={<Calendar size={24} />}
              title="Event Integration"
              description="Perfect for conferences, meetups, and networking events"
            />
            <FeatureCard 
              icon={<Code size={24} />}
              title="Developer API"
              description="Build on our platform with the Context AI API"
            />
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-24 bg-gradient-to-b from-white via-purple-50/50 to-transparent"></div>

      {/* CTA Section */}
      <section className="container mx-auto px-8 py-40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Networking?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join our waitlist to be among the first to experience the future of professional networking.
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition flex items-center gap-3 mx-auto">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-24 bg-gradient-to-b from-transparent to-white"></div>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-8 text-center text-gray-600">
          <p>© 2024 LinkDrop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;