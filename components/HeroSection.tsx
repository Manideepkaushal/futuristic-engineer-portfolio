'use client'

import { useState } from 'react'

export default function HeroSection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00d4ff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Main title with gradient and glow */}
        <div className="mb-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="glow-text">Manideep</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kaushal Karna
            </span>
          </h1>
        </div>

        {/* Subtitle with animation */}
        <div className="mb-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl sm:text-2xl text-slate-300 mb-2">
            Software Engineer | Distributed Systems | Backend Engineering | AI Engineering
          </p>
          <p className="text-lg text-slate-400">
            Building scalable enterprise platforms, AI-powered applications and distributed systems that serve thousands of users and process millions of events every day.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <button
            onMouseEnter={() => setHoveredButton('projects')}
            onMouseLeave={() => setHoveredButton(null)}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            style={{
              background: hoveredButton === 'projects' ? 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)' : 'rgba(0, 212, 255, 0.1)',
              border: '2px solid #00d4ff',
              color: '#e0e8ff',
              transform: hoveredButton === 'projects' ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hoveredButton === 'projects' ? '0 20px 40px rgba(0, 212, 255, 0.3)' : '0 0 20px rgba(0, 212, 255, 0.2)',
            }}
          >
            View Projects
          </button>

          <button
            onMouseEnter={() => setHoveredButton('resume')}
            onMouseLeave={() => setHoveredButton(null)}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            style={{
              background: hoveredButton === 'resume' ? 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)' : 'rgba(168, 85, 247, 0.1)',
              border: '2px solid #a855f7',
              color: '#e0e8ff',
              transform: hoveredButton === 'resume' ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hoveredButton === 'resume' ? '0 20px 40px rgba(168, 85, 247, 0.3)' : '0 0 20px rgba(168, 85, 247, 0.2)',
            }}
          >
            Download Resume
          </button>

          <button
            onMouseEnter={() => setHoveredButton('contact')}
            onMouseLeave={() => setHoveredButton(null)}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            style={{
              background: hoveredButton === 'contact' ? 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)' : 'rgba(236, 72, 153, 0.1)',
              border: '2px solid #ec4899',
              color: '#e0e8ff',
              transform: hoveredButton === 'contact' ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hoveredButton === 'contact' ? '0 20px 40px rgba(236, 72, 153, 0.3)' : '0 0 20px rgba(236, 72, 153, 0.2)',
            }}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-12">
          <svg
            className="w-8 h-8 mx-auto text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
