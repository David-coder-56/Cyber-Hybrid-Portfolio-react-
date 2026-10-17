import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Flag, ExternalLink, Zap, Shield, Bug, Lock, Key, Cpu } from 'lucide-react';
import { ctfChallenges } from '../data/data';

const difficultyConfig = {
  Easy: { color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', dot: 'bg-emerald-400' },
  Medium: { color: 'text-amber-400 bg-amber-500/10 border-amber-500/30', dot: 'bg-amber-400' },
  Hard: { color: 'text-red-400 bg-red-500/10 border-red-500/30', dot: 'bg-red-400' },
};

const vectorIcons = {
  'Web Exploitation': Bug,
  'Privilege Escalation': Key,
  'Cryptography': Lock,
  'Forensics': Shield,
  'Reverse Engineering': Cpu,
  'Network': Zap,
};

const platformColors = {
  TryHackMe: 'text-red-400',
  HackTheBox: 'text-emerald-400',
  PicoCTF: 'text-blue-400',
  CTFtime: 'text-purple-400',
};

const CTFCard = ({ challenge, index }) => {
  const diff = difficultyConfig[challenge.difficulty] || difficultyConfig.Medium;
  const VectorIcon = vectorIcons[challenge.vector] || Terminal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl p-6 bg-slate-50 dark:bg-[#151b2b] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Solved badge */}
      {challenge.solved && (
        <div className="absolute top-4 right-4">
          <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
            <Flag size={10} /> Pwned
          </span>
        </div>
      )}

      {/* Platform + Difficulty */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs font-bold ${platformColors[challenge.platform] || 'text-slate-400'}`}>
          {challenge.platform}
        </span>
        <span className="opacity-30">·</span>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${diff.color}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} />
          {challenge.difficulty}
        </span>
      </div>

      {/* Challenge name */}
      <h3 className="font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors pr-16">{challenge.name}</h3>

      {/* Vector + OS */}
      <div className="flex items-center gap-2 mb-4 text-sm opacity-60">
        <VectorIcon size={14} />
        <span>{challenge.vector}</span>
        {challenge.os && (
          <>
            <span className="opacity-50">·</span>
            <span>{challenge.os}</span>
          </>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {challenge.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 bg-white dark:bg-[#0b1120] text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Writeup link */}
      {challenge.writeupUrl && (
        <a
          href={challenge.writeupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:underline"
        >
          <ExternalLink size={12} /> Read Writeup
        </a>
      )}
    </motion.div>
  );
};

const CTFArena = () => {
  const platforms = [...new Set(ctfChallenges.map((c) => c.platform))];
  const solved = ctfChallenges.filter((c) => c.solved).length;

  return (
    <section id="ctf" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
          Hands-On Hacking
        </span>
        <h2 className="text-4xl font-bold mb-4">CTF Arena</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mb-8">
          Real-world challenges from platforms like TryHackMe and HackTheBox — where theory meets exploitation.
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#151b2b] border border-slate-200 dark:border-slate-800">
            <Flag size={20} className="text-emerald-400" />
            <div>
              <p className="text-xl font-bold">{solved}</p>
              <p className="text-xs opacity-50 uppercase tracking-wider">Challenges Solved</p>
            </div>
          </div>
          {platforms.map((p) => (
            <div
              key={p}
              className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#151b2b] border border-slate-200 dark:border-slate-800"
            >
              <Terminal size={20} className={platformColors[p] || 'text-blue-400'} />
              <div>
                <p className="text-xl font-bold">{ctfChallenges.filter((c) => c.platform === p).length}</p>
                <p className="text-xs opacity-50 uppercase tracking-wider">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ctfChallenges.map((challenge, i) => (
          <CTFCard key={challenge.id} challenge={challenge} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CTFArena;
