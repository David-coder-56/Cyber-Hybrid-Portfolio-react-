import { motion } from 'framer-motion';
import { projects } from '../data/data';
import { ExternalLink, Github, Lock, Smartphone } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-3 block">Portfolio</span>
          <h2 className="text-4xl font-bold mb-4">Featured Projects & Systems</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm">
          A showcase of client solutions, nonprofit platforms, data dashboards, IoT hardware integrations, and mobile applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="group flex flex-col justify-between bg-slate-50 dark:bg-[#151b2b] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-xl"
          >
            <div className="p-8 pb-4">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-blue-500 uppercase tracking-widest">{project.category}</span>
                {project.status && (
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    project.status === 'In Development' || project.status === 'In Progress'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      : project.status === 'Demo'
                      ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  }`}>
                    {project.status}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold mt-1 mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white dark:bg-[#0b1120] text-[10px] font-bold rounded-full border border-slate-200 dark:border-slate-700 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 pt-0">
              <div className="flex flex-wrap items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-5 mt-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Smartphone size={14} /> Mobile App
                  </span>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold hover:text-blue-500 transition-colors"
                  >
                    <Github size={16} /> Source
                  </a>
                ) : project.githubPrivate ? (
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Lock size={13} /> Private Repo
                  </span>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;