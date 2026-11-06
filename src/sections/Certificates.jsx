import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Clock, CheckCircle2, Shield, Code2, Cloud, Network, Database, BookOpen, Laptop } from 'lucide-react';
import { certificates, learningItems } from '../data/data';

const categoryIcons = {
  Security: Shield,
  Development: Code2,
  Cloud: Cloud,
  Networking: Network,
  'Data Science': Database,
  'IT Fundamentals': Laptop,
};

const categoryColors = {
  Security: 'from-red-500/20 to-orange-500/10 border-red-500/30 text-red-400',
  Development: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400',
  Cloud: 'from-purple-500/20 to-violet-500/10 border-purple-500/30 text-purple-400',
  Networking: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-400',
  'Data Science': 'from-indigo-500/20 to-cyan-500/10 border-indigo-500/30 text-indigo-400',
  'IT Fundamentals': 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
};

const CertCard = ({ cert, index }) => {
  const colors = categoryColors[cert.category] || categoryColors.Development;
  const IconComponent = categoryIcons[cert.category] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative group rounded-2xl p-6 border bg-gradient-to-br ${colors} backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
    >
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-current opacity-5 blur-2xl group-hover:opacity-10 transition-opacity" />
      <div className="flex items-center justify-between mb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-slate-900/40 border-current/30">
          <IconComponent size={14} /> {cert.category}
        </span>
        {cert.verified ? (
          <span className="flex items-center gap-1 text-xs font-bold text-emerald-400">
            <CheckCircle2 size={13} /> Earned & Verified
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
            <Clock size={13} /> In Progress
          </span>
        )}
      </div>
      
      <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-slate-900/60 flex items-center justify-center mb-4 text-blue-400 border border-white/10">
        <IconComponent size={24} />
      </div>

      <h3 className="font-bold text-lg mb-1 leading-snug">{cert.name}</h3>
      <p className="text-sm opacity-60 mb-4">{cert.issuer} · {cert.year}</p>
      
      {cert.verified && cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline opacity-80 hover:opacity-100 transition-opacity"
        >
          <ExternalLink size={12} /> Verify Credential
        </a>
      )}

      {!cert.verified && cert.progress && (
        <div className="mt-1">
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${cert.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1 + 0.3 }}
            />
          </div>
          <p className="text-xs opacity-50 mt-1">{cert.progress}% complete</p>
        </div>
      )}
    </motion.div>
  );
};

const Certificates = () => {
  const earned = certificates.filter((c) => c.verified);
  const inProgress = certificates.filter((c) => !c.verified);

  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">Credentials & Education</span>
        <h2 className="text-4xl font-bold mb-4">Certifications & Coursework</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
          Completed diplomas, practical qualifications, and continuous learning tracks supporting my cybersecurity and software engineering development.
        </p>
      </motion.div>

      {/* Earned Section */}
      {earned.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 size={20} className="text-emerald-400" />
            <h3 className="font-bold text-xl">Earned Qualifications & Diplomas</h3>
            <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
              {earned.length} Completed
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {earned.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* In Progress Certifications (if any) */}
      {inProgress.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Clock size={20} className="text-amber-400" />
            <h3 className="font-bold text-xl">Currently Pursuing</h3>
            <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-full border border-amber-500/20">
              {inProgress.length}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgress.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i + earned.length} />
            ))}
          </div>
        </div>
      )}

      {/* Courses & Independent Learning */}
      {learningItems && learningItems.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={20} className="text-cyan-400" />
            <h3 className="font-bold text-xl">Courses, University Learning & Independent Study</h3>
            <span className="px-2.5 py-0.5 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/20">
              {learningItems.length} Topics
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-[#151b2b] border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-blue-500 dark:text-blue-400">
                    {item.category}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {item.status}
                  </span>
                </div>
                <h4 className="font-bold text-base mb-1">{item.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.provider}
                </p>
                {item.description && (
                  <p className="text-xs text-slate-400 mt-2 italic">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
