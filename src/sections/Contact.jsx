import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Smartphone, Send, MessageCircle, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-darkCard border border-slate-200 dark:border-slate-800">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Mail /></div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Email</p>
                <a href="mailto:davidbankole56@gmail.com" className="font-semibold hover:text-blue-500 transition-colors">davidbankole56@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-darkCard border border-slate-200 dark:border-slate-800">
              <div className="p-3 bg-green-500/10 text-green-500 rounded-xl"><MessageCircle /></div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">WhatsApp</p>
                <a href="https://wa.me/231776766055" className="font-semibold hover:text-green-500 transition-colors">+231 776 766 055</a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            {[
              { icon: <Github />, link: "https://github.com/David-coder-56" },
              { icon: <Linkedin />, link: "#" },
              { icon: <Smartphone />, link: "#" },
              { icon: <Facebook />, link: "https://www.facebook.com/davidbankole.568?mibextid=wwXIfr&mibextid=wwXIfr" }
            ].map((social, i) => (
              <a key={i} href={social.link} className="p-4 bg-slate-100 hover:bg-blue-600  dark:bg-darkCard rounded-2xl dark:hover:bg-blue-600 hover:text-white transition-all">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl bg-white dark:bg-darkCard border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/5"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-darkBg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-darkBg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Message</label>
              <textarea rows="4" placeholder="Tell me about your project..." className="w-full p-4 rounded-xl bg-slate-50 dark:bg-darkBg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;