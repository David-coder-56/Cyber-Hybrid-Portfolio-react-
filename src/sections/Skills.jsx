import { motion } from 'framer-motion';
import { skillCategories } from '../data/data';
import { Code2, Server, Terminal, Database, Shield, Smartphone, Wrench, Cpu } from 'lucide-react';

const icons = {
  "Frontend Development": <Code2 className="text-blue-500" />,
  "Backend Development": <Server className="text-cyan-500" />,
  "Programming Languages": <Terminal className="text-emerald-500" />,
  "Data Science and Analytics": <Database className="text-indigo-500" />,
  "Cybersecurity and Networking": <Shield className="text-amber-500" />,
  "Systems and Mobile Development": <Smartphone className="text-purple-500" />,
  "Tools and Platforms": <Wrench className="text-pink-500" />,
  "IoT and Emerging Technology": <Cpu className="text-teal-500" />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-3 block">Expertise</span>
        <h2 className="text-4xl font-bold mb-4">Technical Stack & Capabilities</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl">
          Core technologies, frameworks, and tools categorized by proficiency and active project application.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-darkCard border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white dark:bg-darkBg rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {icons[category.title] || <Code2 className="text-blue-500" />}
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
              </div>

              {category.level && (
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 font-semibold">
                    {category.level}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-white dark:bg-darkBg rounded-xl text-xs font-medium border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:text-blue-500 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;