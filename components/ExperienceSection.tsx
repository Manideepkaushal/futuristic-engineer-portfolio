'use client'

import { useState } from 'react'

const experiences = [
  {
    company: 'Jio Platforms',
    role: 'Software Engineer',
    period: 'Jan 2024 - Present',
    highlights: [
      'Governance Risk & Compliance Platform: Built enterprise applications serving 10,000+ users with RBAC workflows, dynamic dashboards and AI-powered dashboard generation',
      'Attack Surface Management Platform: Built multi-tenant systems supporting environments with 8000+ subdomains, automated discovery pipelines and distributed processing systems',
      'Incident Management Platform: Built workflows processing 10M+ events/day with enterprise integrations and high-performance interfaces',
    ],
  },
]

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="glow-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`glass-effect rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:border-cyan-400 ${
                expandedIndex === index ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-slate-700'
              }`}
              onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
              style={{
                animation: `slide-in 0.8s ease-out ${0.1 * index}s both`,
              }}
            >
              {/* Header */}
              <div className="p-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold glow-text mb-1">{exp.role}</h3>
                  <p className="text-slate-400 text-lg">{exp.company}</p>
                  <p className="text-cyan-400 text-sm mt-1">{exp.period}</p>
                </div>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
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

              {/* Content */}
              {expandedIndex === index && (
                <div className="px-6 pb-6 border-t border-slate-700 pt-6 animate-slide-in">
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-3">
                        <span className="text-cyan-400 flex-shrink-0 mt-1">▸</span>
                        <span className="text-slate-300 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
