import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Smartphone, Send, MessageCircle, Facebook } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/xlgwqvdb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        e.target.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    } finally {
      setIsSubmitting(false);
    }
  };
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
              { icon: <Linkedin />, link: "" },
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  required
                  className="w-full p-4 rounded-xl bg-slate-50 dark:bg-darkBg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com" 
                  required
                  className="w-full p-4 rounded-xl bg-slate-50 dark:bg-darkBg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Message</label>
              <textarea 
                name="message"
                rows="4" 
                placeholder="Tell me about your project..." 
                required
                className="w-full p-4 rounded-xl bg-slate-50 dark:bg-darkBg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === 'SUCCESS' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <p className="text-green-700 dark:text-green-300 font-medium">✓ Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            {status === 'ERROR' && (
              <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <p className="text-red-700 dark:text-red-300 font-medium">✗ Oops! Something went wrong. Please try again.</p>
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;