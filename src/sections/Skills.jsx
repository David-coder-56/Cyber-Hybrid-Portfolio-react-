import { motion } from 'framer-motion';
import { skillCategories } from '../data/data';
import { Code2, Terminal, Database, Wrench } from 'lucide-react';

const icons = {
  Frontend: <Code2 className="text-blue-500" />,
  Backend: <Database className="text-cyan-500" />,
  Tools: <Wrench className="text-indigo-500" />,
  "Optional / Misc": <Terminal className="text-emerald-500" />
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Stack</h2>
        <p className="text-slate-500 dark:text-slate-400">Tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-darkCard border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white dark:bg-darkBg rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                {icons[category.title] || <Code2 />}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-darkBg rounded-xl text-sm font-medium border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:text-blue-500 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;