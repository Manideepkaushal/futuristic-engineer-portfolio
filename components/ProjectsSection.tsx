'use client'

import { useState } from 'react'

const projects = [
  {
    title: 'Governance Risk & Compliance Platform',
    description: 'Enterprise GRC solution serving 10,000+ users with advanced workflow management',
    impact: '10,000+ Users',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Kubernetes', 'AI'],
    color: 'from-cyan-400 to-blue-400',
    highlights: [
      'RBAC workflows with fine-grained permissions',
      'AI-powered dashboard generation',
      'Real-time compliance monitoring',
      'Enterprise integrations',
    ],
  },
  {
    title: 'Attack Surface Management Platform',
    description: 'Multi-tenant system managing 8000+ subdomains with automated discovery',
    impact: '8,000+ Subdomains',
    technologies: ['Python', 'FastAPI', 'Kafka', 'MongoDB', 'AWS'],
    color: 'from-purple-400 to-pink-400',
    highlights: [
      'Automated domain discovery pipeline',
      'Distributed processing architecture',
      'Real-time threat detection',
      'Multi-tenant isolation',
    ],
  },
  {
    title: 'Incident Management Platform',
    description: 'High-throughput event processing system handling millions of daily events',
    impact: '10M+ Events/Day',
    technologies: ['Node.js', 'Kafka', 'Redis', 'MySQL', 'Docker'],
    color: 'from-pink-400 to-red-400',
    highlights: [
      'Process 10M+ events daily',
      'Enterprise integrations',
      'High-performance interfaces',
      'Real-time alerting & routing',
    ],
  },
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="glow-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="glass-effect rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400 h-full flex flex-col group"
              style={{
                animation: `slide-in 0.8s ease-out ${0.1 * index}s both`,
                transform: hoveredProject === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredProject === index ? '0 20px 40px rgba(0, 212, 255, 0.2)' : 'none',
              }}
            >
              {/* Project header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute inset-0 animate-pulse-glow"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold glow-text mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Impact metric */}
                <div className="mb-4 inline-block">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-slate-700`}>
                    {project.impact}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded bg-slate-800/50 text-cyan-300 border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                {hoveredProject === index && (
                  <div className="animate-slide-in border-t border-slate-700 pt-4 mt-4">
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-slate-300 text-xs flex gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Interested in seeing more of my work? Let&apos;s collaborate.
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold text-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
