// src/pages/Docs.jsx
import React, { useState, useEffect } from "react";
import { Copy, CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";

// Reusable CodeBlock Component
const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg my-6">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm flex items-center gap-1"
      >
        {copied ? (
          <CheckCircle size={16} className="text-green-400" />
        ) : (
          <Copy size={16} />
        )}
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Highlighted Code */}
      <pre className={`language-${language} p-6 overflow-x-auto`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              code,
              Prism.languages[language],
              language
            ),
          }}
        />
      </pre>
    </div>
  );
};

function Docs() {
  const [loading, setLoading] = useState(true);

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
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
          <Link to="/" className="hover:text-green-400">Home</Link>
          <a href="#install" className="hover:text-green-400">Install</a>
          <a href="#quickstart" className="hover:text-green-400">Quick Start</a>
          <a href="#api" className="hover:text-green-400">API</a>
          <a href="#config" className="hover:text-green-400">Config</a>
        </nav>
        <Link
          to="/"
          className="bg-green-500 px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition"
        >
          Back Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-16 py-12 flex-1">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-12">
          Orpheus Documentation
        </h1>

        {/* Section 1: Installation */}
        <section id="install" className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">1. Installation</h2>
          <p className="text-gray-400 mb-4">
            Install Orpheus into your Node.js project with npm or yarn:
          </p>
          <CodeBlock
            language="bash"
            code={`npm install orpheus\n# or\nyarn add orpheus`}
          />
        </section>

        {/* Section 2: Quick Start */}
        <section id="quickstart" className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">2. Quick Start</h2>
          <p className="text-gray-400 mb-4">
            Import Orpheus and start listening to WhatsApp messages:
          </p>
          <CodeBlock
            language="javascript"
            code={`import Orpheus from "orpheus";

const bot = new Orpheus({ sessionName: "mySession" });

bot.on("message", (msg) => {
  if (msg.body === "?hello") {
    bot.sendMessage(msg.from, "Hey, Brother 👋");
  }
});

bot.start();`}
          />
        </section>

        {/* Section 3: API Example */}
        <section id="api" className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">3. API Example</h2>
          <p className="text-gray-400 mb-4">
            You can also control Orpheus with REST API calls:
          </p>
          <CodeBlock
            language="bash"
            code={`curl -X POST http://localhost:3000/send \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "94770000000",
    "message": "Hello from Orpheus 🚀"
  }'`}
          />
        </section>

        {/* Section 4: Configuration */}
        <section id="config" className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">4. Configuration</h2>
          <p className="text-gray-400 mb-4">
            Customize session handling, auto-replies, and more using JSON config:
          </p>
          <CodeBlock
            language="json"
            code={`{
  "sessionName": "business-bot",
  "autoReply": true,
  "maxSessions": 5,
  "webhook": "https://example.com/webhook"
}`}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 pt-12 border-t border-gray-800">
        © {new Date().getFullYear()} Orpheus — Built for automation 🚀
      </footer>
    </div>
  );
}

export default Docs;
