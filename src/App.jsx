// src/App.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  CheckCircle,
  DollarSign,
  FileText,
  Zap,
} from "lucide-react";
import Pair from "./components/Pair";

function App() {
  const [loading, setLoading] = useState(true);

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 bg-gray-950 z-50">
        <h1 className="text-2xl font-bold text-green-400 flex items-center gap-2">
          <MessageCircle size={28} /> Orpheus
        </h1>
        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-green-400">
            Features
          </a>
          <a href="#pricing" className="hover:text-green-400">
            Pricing
          </a>
          <a href="#docs" className="hover:text-green-400">
            Docs
          </a>
        </nav>
        {/* <button className="bg-green-500 px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition">
          Get Started
        </button> */}
        <Pair text="Get Started" />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 gap-12">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Orpheus – The Ultimate{" "}
            <span className="text-green-400">WhatsApp Bot</span> & Session
            Manager
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Automate chats, manage sessions, and supercharge customer engagement
            with a reliable WhatsApp bot solution.
          </p>
          <div className="flex gap-4">
            <Pair text="Connect" />
            <button className="border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:border-green-400 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative w-[280px] h-[560px] bg-black rounded-[2.5rem] border-[14px] border-gray-800 shadow-2xl overflow-hidden">
          {/* Top Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-xl mx-auto w-40"></div>

          {/* WhatsApp Chat Mockup */}
          <div className="h-full w-full bg-gradient-to-b from-gray-900 to-gray-800 p-4 overflow-y-auto">
            <div className="flex flex-col gap-3">
              <div className="m-2 bg-green-500 text-black self-end px-4 py-2 rounded-xl rounded-br-none max-w-[75%]">
                Hi! 👋 I’m OrpheusBot.
              </div>
              <div className="bg-gray-700 text-white self-start px-4 py-2 rounded-xl rounded-bl-none max-w-[75%]">
                Hey, what can you do?
              </div>
              <div className="bg-green-500 text-black self-end px-4 py-2 rounded-xl rounded-br-none max-w-[75%]">
                I manage sessions, reply 24/7, and automate workflows 🚀
              </div>
              <div className="bg-gray-700 text-white self-start px-4 py-2 rounded-xl rounded-bl-none max-w-[75%]">
                Awesome! How do I start?
              </div>
              <div className="bg-green-500 text-black self-end px-4 py-2 rounded-xl rounded-br-none max-w-[75%]">
                Just send “!hi” command.. 🎉
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 md:px-16 py-20 bg-gray-900">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
            <Zap className="mx-auto text-green-400 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">24/7 Automation</h4>
            <p className="text-gray-400">
              Keep your WhatsApp active day and night with automated replies.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
            <CheckCircle className="mx-auto text-green-400 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">Session Management</h4>
            <p className="text-gray-400">
              Manage multiple WhatsApp sessions seamlessly.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
            <MessageCircle className="mx-auto text-green-400 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">Custom Workflows</h4>
            <p className="text-gray-400">
              Create custom message flows and automate business logic.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-8 md:px-16 py-20 bg-gray-950">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Simple, Transparent Pricing
        </h3>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Choose a plan that fits your needs. No hidden fees, cancel anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="p-8 bg-gray-900 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
            <DollarSign className="mx-auto text-green-400 mb-4" size={40} />
            <h4 className="text-2xl font-semibold mb-2">Free Plan</h4>
            <p className="text-4xl font-bold mb-4">$0</p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ Basic automation</li>
              <li>✔ 1 active session</li>
              <li>✔ Community support</li>
            </ul>
            <button className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full">
              Start Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 bg-gray-900 rounded-xl shadow-lg text-center border-2 border-green-500 hover:scale-105 transition-transform">
            <DollarSign className="mx-auto text-green-400 mb-4" size={40} />
            <h4 className="text-2xl font-semibold mb-2">Premium</h4>
            <p className="text-4xl font-bold mb-4">
              Rs.200<span className="text-lg font-medium">/mo</span>
            </p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ Coming Soon</li>
              {/* <li>✔ Up to 5 sessions</li>
              <li>✔ Priority support</li> */}
            </ul>
            <button className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full">
              Upgrade
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 bg-gray-900 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
            <DollarSign className="mx-auto text-green-400 mb-4" size={40} />
            <h4 className="text-2xl font-semibold mb-2">Enterprise</h4>
            <p className="text-4xl font-bold mb-4">Rs.1000+</p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ Customized Bot Commands</li>
              <li>✔ Watermark-Free Experience</li>
              <li>✔ Dedicated VPS Setup</li>
            </ul>
            <button className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Docs CTA Section */}
      <section id="docs" className="px-8 md:px-16 py-20 bg-gray-900 text-center">
        <FileText className="mx-auto text-green-400 mb-6" size={48} />
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Explore the Docs</h3>
        <p className="text-gray-400 mb-6">
          Get started quickly with step-by-step guides and API references.
        </p>
        <Link
          to="/docs"
          className="bg-green-500 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition inline-block"
        >
          Read Docs
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Orpheus — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
