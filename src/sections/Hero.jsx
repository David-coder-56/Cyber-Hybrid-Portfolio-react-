import { motion } from 'framer-motion';
import { Download, ChevronRight, Circle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 max-w-7xl mx-auto pt-24 lg:pt-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to opportunities
          </motion.div>

          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
            IT Student // Cybersecurity Specialization
          </span>
          
          {/* Glitch name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-2 glitch-text" data-text="David D. Bankole">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              David D. Bankole
            </span>
          </h1>

          {/* MOBILE ONLY: Circle Profile Image */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="lg:hidden flex items-center gap-4 my-6"
          >
            <div className="w-20 h-20 rounded-full border-2 border-blue-500 p-1 shadow-lg shadow-blue-500/20">
              <img 
                src="/assets/img3.jpg" 
                alt="David" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-tighter opacity-50">Identity</span>
              <span className="text-sm font-mono text-blue-500">Cyber_Hybrid</span>
            </div>
          </motion.div>

          {/* Typewriter */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300 h-10">
            <TypeAnimation
              sequence={[
                'Software Developer',       1800,
                'Cybersecurity Specialist',  1800,
                'Full-Stack Engineer',       1800,
                'IoT Builder',               1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span className="text-blue-500 animate-pulse">_</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
            I build modern, responsive web applications and practical technology
            solutions with a strong foundation in <span className="text-blue-600 dark:text-blue-400 font-semibold">Software Engineering</span> and a growing
            specialization in <span className="text-blue-600 dark:text-blue-400 font-semibold">Cybersecurity</span>.
            I'm passionate about developing secure systems, exploring emerging
            technologies, and creating solutions that make a real-world impact.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:scale-105">
              Explore Work <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/assets/David_D_Bankole_CV.pdf" className="flex items-center gap-2 border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105">
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        {/* Desktop profile image with animated gradient ring */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block pt-24"
        >
          {/* Animated glow */}
          <div className="w-full aspect-square bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-3xl rotate-3 absolute inset-0 blur-2xl opacity-20 animate-pulse"></div>

          {/* Animated gradient ring */}
          {/* <div className="absolute inset-0 z-0 rounded-3xl p-[3px] animate-spin-slow bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-600 opacity-70 blur-[1px]" /> */}

          <div className="relative z-10 w-full rounded-3xl overflow-hidden shadow-2xl group border border-blue-500/20">
            <img 
              src="/assets/img3.jpg" 
              alt="My Profile" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
            />
            {/* Scan line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none animate-scan" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 z-20 bg-slate-900/90 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-4 py-3 shadow-xl"
          >
            <p className="text-xs text-slate-400 font-mono">Identity</p>
            <p className="font-bold text-blue-400 font-mono text-sm">Cyber_Hybrid</p>
          </motion.div>

          {/* <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 z-20 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl px-4 py-3 shadow-xl"
          >
            <p className="text-xs text-slate-400 font-mono">Stack</p>
            <p className="font-bold text-cyan-400 font-mono text-sm">React · Node · Python</p>
          </motion.div> */}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;