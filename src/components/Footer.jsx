const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">Cyber Hybrid</p>
          <p className="text-sm opacity-60">Software Engineering Portfolio © 2024 — {new Date().getFullYear()}</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium opacity-60">
          <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Work</a>
          <a href="mailto:davidbankole56@gmail.com" className="hover:text-blue-500 transition-colors">Email</a>
        </div>

        <p className="text-xs opacity-40">
          Built with React • Tailwind • Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;