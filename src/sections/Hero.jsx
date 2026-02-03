import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 max-w-7xl mx-auto pt-24 lg:pt-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
            Software Engineer Student // currently
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            David D. Bankole
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

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            Software Engineering Student
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
            I build clean, responsive websites and dynamic applications where 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> Cyber Security</span> meets 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> Modern Web Engineering with a touch of AI</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
              Explore Work <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/assets/David_D_Bankole_CV.pdf" className="flex items-center gap-2 border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative hidden lg:block pt-24"
        >
          <div className="w-full aspect-square bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-3xl rotate-3 absolute inset-0 blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative z-10 w-full rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="/assets/img3.jpg" 
              alt="My Profile" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;