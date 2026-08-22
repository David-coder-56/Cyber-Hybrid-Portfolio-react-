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
              I’m <span className="text-blue-500 font-bold">David D. Bankole</span>,
              also known as <span className="text-blue-500 font-bold">Cyber Hybrid</span>.
              I’m an Information Technology student specializing in Cybersecurity,
              passionate about building secure, scalable, and impactful technology solutions.
            </p>

            <p>
              My journey started with programming and has grown into hands-on experience
              across <strong>frontend development, full-stack web development, backend systems,
              databases, data visualization, IoT, and cybersecurity</strong>. I work primarily
              with technologies such as React, Vite, Tailwind CSS, JavaScript, Node.js,
              Express, MongoDB, Python, Dash, and Plotly.
            </p>

            <p>
              I’m currently a <strong>Semester 5 IT student at BlueCrest University</strong>,
              where I chose <strong>Cybersecurity</strong> as my area of specialization.
              Alongside my studies, I’ve gained practical industry experience working as a
              <strong> Coding Intern at Rhotel Digital & Innovation Hub</strong>, where I’ve
              worked on real-world projects, strengthened my development workflow, and
              learned to approach technology from both a development and problem-solving perspective.
            </p>

            <p>
              I enjoy turning ideas into functional products, from modern web applications
              and dashboards to systems that combine software with hardware. Some of my
              projects include the <strong>Smart Coop System</strong>, where I served as
              Technical Lead, as well as full-stack applications, data dashboards, and
              other technology-driven projects.
            </p>

            <p>
              My goal is to continue growing as a developer and cybersecurity professional,
              combining <strong>software engineering, cybersecurity, cloud technologies,
              AI, and emerging technologies</strong> to build solutions that are not only
              innovative, but also secure, reliable, and useful in the real world.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
              <h4 className="text-3xl font-bold text-blue-500 mb-1">5th</h4>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60">Semester</p>
            </div>
            <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
              <h4 className="text-3xl font-bold text-cyan-500 mb-1">10+</h4>
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
              { title: "BlueCrest University", role: "BSc Information Technology — Cybersecurity Specialization", date: "Semester 5 • Present" },
              { title: "Rhotel Digital & Innovation Hub", role: "Coding Intern", date: "2024 - Present" },
              { title: "Smart Coop System", role: "Technical Lead — IoT Project", date: "Project Experience" }
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