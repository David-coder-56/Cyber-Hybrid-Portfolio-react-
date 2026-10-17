import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Clock, CheckCircle2, Shield, Code2, Cloud, Network } from 'lucide-react';
import { certificates } from '../data/data';

const categoryIcons = {
  Security: Shield,
  Development: Code2,
  Cloud: Cloud,
  Networking: Network,
};

const categoryColors = {
  Security: 'from-red-500/20 to-orange-500/10 border-red-500/30 text-red-400',
  Development: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400',
  Cloud: 'from-purple-500/20 to-violet-500/10 border-purple-500/30 text-purple-400',
  Networking: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-400',
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
      className={`relative group rounded-2xl p-6 border bg-gradient-to-br ${colors} backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer`}
    >
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-current opacity-5 blur-2xl group-hover:opacity-10 transition-opacity" />
      <div className="flex items-center justify-between mb-5">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-slate-900/40 border-current/30`}>
          <IconComponent size={14} /> {cert.category}
        </span>
        {cert.verified ? (
          <span className="flex items-center gap-1 text-xs font-bold text-emerald-400">
            <CheckCircle2 size={13} /> Verified
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
            <Clock size={13} /> In Progress
          </span>
        )}
      </div>
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-2xl font-black border border-white/10">
        {cert.emoji}
      </div>
      <h3 className="font-bold text-lg mb-1 leading-snug">{cert.name}</h3>
      <p className="text-sm opacity-60 mb-4">{cert.issuer} · {cert.year}</p>
      {cert.verified && cert.credlyUrl && (
        <a
          href={cert.credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline opacity-70 hover:opacity-100 transition-opacity"
        >
          <ExternalLink size={12} /> Verify Credential
        </a>
      )}
      {!cert.verified && (
        <div className="mt-1">
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${cert.progress || 50}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1 + 0.3 }}
            />
          </div>
          <p className="text-xs opacity-50 mt-1">{cert.progress || 50}% complete</p>
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
        <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">Credentials</span>
        <h2 className="text-4xl font-bold mb-4">Certificates & Badges</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-lg">
          Verified credentials and active learning paths that back up my skills with proof.
        </p>
      </motion.div>

      {earned.length > 0 && (
        <>
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 size={18} className="text-emerald-400" />
            <h3 className="font-bold text-lg">Earned</h3>
            <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
              {earned.length}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {earned.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </>
      )}

      {inProgress.length > 0 && (
        <>
          <div className="flex items-center gap-3 mb-6">
            <Clock size={18} className="text-amber-400" />
            <h3 className="font-bold text-lg">Currently Pursuing</h3>
            <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-full border border-amber-500/20">
              {inProgress.length}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgress.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i + earned.length} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Certificates;
