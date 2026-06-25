'use client'

import { useState } from 'react'

const socialLinks = [
  { name: 'GitHub', icon: '⚙️', url: '#' },
  { name: 'LinkedIn', icon: '💼', url: '#' },
  { name: 'Twitter', icon: '𝕏', url: '#' },
  { name: 'Email', icon: '✉️', url: 'mailto:contact@example.com' },
]

export default function FooterSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative">
      <div className="max-w-6xl mx-auto">
        {/* Content sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold glow-text mb-4">About</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium portfolio showcasing expertise in building scalable enterprise platforms, distributed systems, and AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold glow-text mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold glow-text mb-4">Connect</h3>
            <p className="text-slate-400 text-sm mb-4">
              Let&apos;s work together on exciting projects and challenges.
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-12 pb-12 border-b border-slate-700">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center text-xl transition-all duration-300 hover:border-cyan-400"
              title={link.name}
              style={{
                transform: hoveredLink === link.name ? 'translateY(-4px) scale(1.1)' : 'translateY(0) scale(1)',
                boxShadow: hoveredLink === link.name ? '0 10px 30px rgba(0, 212, 255, 0.3)' : 'none',
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Manideep Kaushal Karna. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">
            Built with <span className="text-cyan-400">React</span> & <span className="text-purple-400">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
