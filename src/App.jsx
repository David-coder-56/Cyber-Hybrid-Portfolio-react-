import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Timeline from './sections/Timeline';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-600 origin-left z-[200]"
      />

      <div className="bg-white dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors duration-500">
        <BackgroundCanvas darkMode={darkMode} />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Timeline />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;