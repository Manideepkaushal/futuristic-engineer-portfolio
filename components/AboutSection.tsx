'use client'

import { useState, useEffect } from 'react'

const metrics = [
  { label: 'Users Served', value: '10,000+', icon: '👥' },
  { label: 'Events Daily', value: '10M+', icon: '⚡' },
  { label: 'Organizations', value: '10+', icon: '🏢' },
  { label: 'Throughput Gain', value: '6x', icon: '📈' },
  { label: 'Security Checks', value: '17+', icon: '🔒' },
  { label: 'AI Solutions', value: 'Enterprise', icon: '🤖' },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(metrics.map(() => 0))

  useEffect(() => {
    if (!isVisible) return

    const intervals = metrics.map((metric, index) => {
      const finalValue = parseInt(metric.value.replace(/[^0-9]/g, ''))
      const duration = 2000
      const steps = 60
      const stepValue = finalValue / steps

      let current = 0
      return setInterval(() => {
        current += stepValue
        if (current >= finalValue) {
          setCounts(prev => {
            const newCounts = [...prev]
            newCounts[index] = finalValue
            return newCounts
          })
          return
        }
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, duration / steps)
    })

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [isVisible])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="glow-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="glass-effect p-8 rounded-xl animate-slide-in">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Software Engineer at Jio Platforms with extensive experience building enterprise applications, AI-powered automation systems and large-scale distributed architectures.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Passionate about solving complex engineering challenges involving scalability, reliability, performance and system design. Specialized in building platforms that handle millions of events daily with enterprise-grade security and reliability.
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:shadow-lg"
                style={{
                  animation: `slide-in 0.8s ease-out ${0.1 * index}s both`,
                }}
                onMouseEnter={() => setIsVisible(true)}
              >
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-cyan-400 text-2xl font-bold mb-1">
                  {counts[index]}{metric.value.includes('+') ? '+' : metric.value.includes('x') ? 'x' : ''}
                </div>
                <div className="text-slate-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
