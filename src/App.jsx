import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors duration-500">
        <BackgroundCanvas darkMode={darkMode} />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;