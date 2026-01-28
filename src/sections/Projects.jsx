import { motion } from 'framer-motion';
import { projects } from '../data/data';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-bold mb-4">Completed Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-slate-50 dark:bg-[#151b2b] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all"
          >
            <div className="p-8">
              <span className="text-xs font-mono text-blue-500 uppercase tracking-widest">{project.category}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-blue-500 transition-colors">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white dark:bg-[#0b1120] text-[10px] font-bold rounded-full border border-slate-200 dark:border-slate-700 uppercase">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                <a href={project.link} className="flex items-center gap-2 text-sm font-bold hover:text-blue-500">
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-blue-500">
                  <Github size={18} /> Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;