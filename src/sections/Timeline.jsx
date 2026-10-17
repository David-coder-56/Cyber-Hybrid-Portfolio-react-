import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Terminal } from 'lucide-react';
import { timelineItems } from '../data/data';

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    dot: 'bg-blue-500 shadow-blue-500/50',
    label: 'Education',
  },
  work: {
    icon: Briefcase,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    dot: 'bg-emerald-500 shadow-emerald-500/50',
    label: 'Experience',
  },
  project: {
    icon: Terminal,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    dot: 'bg-purple-500 shadow-purple-500/50',
    label: 'Project',
  },
};

const Timeline = () => (
  <section id="timeline" className="py-24 px-6 max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">Journey</span>
      <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
      <p className="text-slate-500 dark:text-slate-400">
        The path that shaped who I am as a developer and cybersecurity professional.
      </p>
    </motion.div>

    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-slate-300 dark:via-slate-700 to-transparent" />

      <div className="space-y-12">
        {timelineItems.map((item, index) => {
          const cfg = typeConfig[item.type] || typeConfig.work;
          const IconCmp = cfg.icon;
          const isRight = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isRight ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex items-start gap-8 pl-16 md:pl-0 ${
                isRight ? 'md:flex-row-reverse md:text-right' : 'md:flex-row'
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-6 shadow-lg ${cfg.dot}`}
              />

              {/* Card — occupies half width on md+ */}
              <div className="md:w-[45%]">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#151b2b] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all text-left"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`p-2 rounded-xl border ${cfg.color}`}>
                      <IconCmp size={16} />
                    </div>
                    <span className="text-xs font-mono text-blue-500 mt-1">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm font-semibold opacity-60 mb-3">{item.org}</p>
                  <p className="text-sm opacity-70 leading-relaxed">{item.description}</p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-slate-700 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Timeline;
