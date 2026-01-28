import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">My Story</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            <p>
              I’m <span className="text-blue-500 font-bold">David D. Bankole</span> (Cyber Hybrid), a Software Engineering student at BlueCrest University. I bridge the gap between creative design and technical implementation.
            </p>
            <p>
  Hello! I’m <strong>David D. Bankole</strong>, also known as{" "}
  <strong>Cyber Hybrid</strong>. My journey began with Python and has grown into
  building full-stack web applications, data visualization dashboards, and
  IoT systems like the <strong>Smart Coop System</strong>, where I served as
  Tech Lead.
</p>

<p>
  I’m a <strong>Software Engineering student at BlueCrest University</strong>{" "}
  with hands-on experience in web development, Python, Dash & Plotly, and
  foundational cybersecurity concepts. I gained real-world experience at{" "}
  <strong>Rhotel Digital & Innovation Hub</strong> under the mentorship of{" "}
  <strong>Mr. Davidson</strong>, working on production-level projects and
  strengthening my problem-solving skills.
</p>

<p>
  I thrive on solving complex problems and transforming them into efficient,
  visually appealing solutions. My goal is to continue building impactful
  projects, expand my expertise in AI and cybersecurity, and deliver innovative
  technology that creates real-world impact.
</p>

          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
              <h4 className="text-3xl font-bold text-blue-500 mb-1">4th</h4>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60">Semester</p>
            </div>
            <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
              <h4 className="text-3xl font-bold text-cyan-500 mb-1">5+</h4>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60">Projects Built</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-50 dark:bg-darkCard p-8 rounded-3xl border border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-bold mb-6">Experience & Education</h3>
          <div className="space-y-8">
            {[
              { title: "BlueCrest University", role: "Software Engineering Student", date: "Present" },
              { title: "Rhotel Digital & Innovation Hub", role: "Software Intern", date: "2024 - Present" },
              { title: "Smart Coop System", role: "Technical Lead", date: "IoT Project" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className="w-1 bg-blue-500 rounded-full h-12"></div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm opacity-70">{item.role}</p>
                  <span className="text-xs text-blue-500 font-mono">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;