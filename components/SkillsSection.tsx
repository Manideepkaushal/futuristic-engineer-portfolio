'use client'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'High-Performance Systems'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'UI/UX Design'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'MSSQL', 'Redis'],
  },
  {
    title: 'Distributed Systems',
    skills: ['Kafka', 'Celery', 'Event-Driven Architecture', 'Microservices'],
  },
  {
    title: 'AI & ML',
    skills: ['AI Agents', 'Agentic AI', 'RAG', 'LangChain', 'LangGraph'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Azure DevOps', 'CI/CD'],
  },
  {
    title: 'Engineering',
    skills: ['System Design', 'HLD/LLD', 'OOP', 'DSA', 'Agile'],
  },
]

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="glow-text">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-effect p-6 rounded-xl hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300 group"
              style={{
                animation: `slide-in 0.8s ease-out ${0.1 * categoryIndex}s both`,
              }}
            >
              <h3 className="text-lg font-bold glow-text mb-4 group-hover:text-purple-400 transition-colors">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-slate-300 text-sm px-3 py-2 rounded-lg bg-slate-800/30 hover:bg-cyan-400/20 transition-colors cursor-default"
                  >
                    ✓ {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 glass-effect p-8 rounded-xl text-center">
          <p className="text-slate-300 text-lg leading-relaxed">
            Specializing in building scalable, high-performance systems with a focus on enterprise-grade reliability, 
            security, and innovation. Proven track record of delivering complex solutions that handle massive scale 
            and deliver measurable business impact.
          </p>
        </div>
      </div>
    </section>
  )
}
