import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Linkedin, Github, ExternalLink, 
  Code, Rocket, Lightbulb, Menu, X,
  ShoppingCart, Cloud, Database, Type, Layers, CloudRain, ListChecks,
  User, Thermometer, HeartPulse
} from "lucide-react";

const ParticleBackground = () => (
  <div className="fixed inset-0 overflow-hidden opacity-20 z-0" aria-hidden="true">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-purple-500 rounded-full"
        style={{
          width: Math.random() * 10 + 5,
          height: Math.random() * 10 + 5,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, (Math.random() - 0.5) * 100],
          x: [0, (Math.random() - 0.5) * 50],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
);

const projects = [
  {
    title: "Fashion E-commerce ",
    description: "Built a full-featured shopping platform with user authentication, product management, cart, and admin dashboard. Used Node.js, Express, MongoDB, EJS, and AWS.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "AWS"],
    icon: <ShoppingCart className="text-purple-400" size={28} />,
    links: [
      { type: "github", url: "https://github.com/Nashid-k/First_Project_Ecommerce" }
    ]
  },
  {
    title: "OLX Clone",
    description: "Developed a marketplace clone with product listings, search, and user interactions using React, Tailwind CSS, and Firebase.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    icon: <Layers className="text-blue-400" size={28} />,
    links: [
      { type: "github", url: "https://github.com/Nashid-k/olx-clone_updated" },
      { type: "live", url: "https://olx-demo-delta.vercel.app/home" }
    ]
  },
  {
    title: "Netflix Clone",
    description: "Streaming service clone with movie browsing and categories using Zustand for state management.",
    tech: ["React", "Zustand", "TMDB API"],
    icon: <CloudRain className="text-red-400" size={28} />,
    links: [
      { type: "github", url: "https://github.com/Nashid-k/netflix-clone" }
    ]
  },
  {
    title: "Advanced Todo App",
    description: "Feature-rich task manager with session storage persistence and category organization.",
    tech: ["React", "Session Storage", "Tailwind"],
    icon: <ListChecks className="text-green-400" size={28} />,
    links: [
      { type: "github", url: "https://github.com/Nashid-k/TODO_react" },
      { type: "live", url: "https://todo-react-6qtxru3ph-nashids-projects-e27665ac.vercel.app/" }
    ]
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with dynamic data visualization using React, OpenWeather API, and Geolocation.",
    tech: ["React", "OpenWeather API", "Geolocation"],
    icon: <Cloud className="text-cyan-400" size={28} />,
    links: [
      { type: "github", url: "https://github.com/Nashid-k/weather_react" }
    ]
  },
  {
    title: "TypeScript CRUD App",
    description: "Clean implementation of CRUD operations with React and TypeScript for type-safe development.",
    tech: ["React", "TypeScript", "Tailwind"],
    icon: <Type className="text-blue-500" size={28} />,
    links: [
      { type: "github", url: "https://github.com/Nashid-k/CRUD_App" }
    ]
  }
];

const journey = [
  {
    year: "The Foundation",
    title: "Life Before Code",
    detail: "Worked in operations and accounting before transitioning to tech after a health setback. Developed strong problem-solving and resilience skills.",
    icon: <User className="text-amber-400" />,
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    year: "The Awakening",
    title: "Discovering Programming",
    detail: "Inspired by a friend, began learning programming through online resources, quickly building foundational web projects.",
    icon: <Lightbulb className="text-yellow-400" />,
    color: "from-yellow-500/20 to-green-500/20",
    links: [
      { text: "First Code Attempt", url: "https://nashid-k.github.io/kiwi/" }
    ]
  },
  {
    year: "First Steps",
    title: "Learning to Code",
    detail: "Started with tutorials and built my first static webpages, progressing to responsive layouts.",
    icon: <Code className="text-blue-400" />,
    color: "from-blue-500/20 to-cyan-500/20",
    links: [
      { text: "Kiwi Clone (Non-responsive)", url: "https://nashid-k.github.io/kiwi/" },
      { text: "Huawei Clone (Non-responsive)", url: "https://nashid-k.github.io/huawei/" },
      { text: "Appy Fizz (First Responsive)", url: "https://nashid-k.github.io/APPY-FIZZ-RESPONSIVE/" }
    ]
  },
  {
    year: "Deep Dive",
    title: "Full Stack Mastery",
    detail: "Mastered the MERN stack, built authentication and CRUD systems to solidify backend and frontend skills.",
    icon: <Code className="text-purple-400" />,
    color: "from-purple-500/20 to-pink-500/20",
    links: [
      { text: "Login System", url: "https://github.com/Nashid-k/Login-System" },
      { text: "User Management", url: "https://github.com/Nashid-k/User-Management_System" }
    ]
  },
  {
    year: "Reality Check",
    title: "The Real World Challenge",
    detail: "Built my first complete e-commerce platform, after realizing the need for advanced projects to stand out.",
    icon: <Rocket className="text-orange-400" />,
    color: "from-orange-500/20 to-red-500/20",
    links: [
      { text: "E-commerce", url: "https://github.com/Nashid-k/First_Project_Ecommerce" }
    ]
  },
  {
    year: "The Trial",
    title: "Bells Palsy: The Ultimate Test",
    detail: "Faced a major health setback but returned stronger, rebuilding my knowledge and skills from scratch.",
    icon: <HeartPulse className="text-red-400" />,
    color: "from-red-500/20 to-purple-500/20"
  },
  {
    year: "The Rebirth",
    title: "Stronger Than Before",
    detail: "Relearned everything from JavaScript to DSA, developing unshakable perseverance and adaptability.",
    icon: <Thermometer className="text-purple-400" />,
    color: "from-purple-500/20 to-blue-500/20",
    links: [
      { text: "Comeback Project", url: "https://github.com/Nashid-k/First_Project_Ecommerce" }
    ]
  },
  {
    year: "Skill Expansion",
    title: "DSA & Advanced Tech",
    detail: "Mastered DSA and expanded my stack with PostgreSQL, TypeScript, and advanced React patterns.",
    icon: <Database className="text-indigo-400" />,
    color: "from-indigo-500/20 to-blue-500/20",
    links: [
      { text: "TypeScript CRUD App", url: "https://github.com/Nashid-k/CRUD_App" }
    ]
  }
];

const skills = [
  { 
    category: "Frontend", 
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] 
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "EJS"] 
  },
  { 
    category: "State Management", 
    items: ["Zustand", "Context API", "Session Storage"] 
  },
  { 
    category: "Core Strengths",
    items: ["Resilience", "Adaptability", "Perseverance", "Problem-Solving"] 
  },
  { 
    category: "Tools & Others", 
    items: ["Git", "DSA", "Linux", "REST APIs"] 
  }
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [message] = useState("Hi Nashid, I saw your portfolio and would like to connect about...");

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/8281142958?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    document.title = "Nashid | Full Stack Developer";
    const handleScroll = () => {
      const sections = ['home', 'about', 'journey', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <ParticleBackground />
      <div className="fixed inset-0 overflow-hidden opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
      </div>
      <nav className="fixed z-50 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Nashid
          </motion.a>
          <div className="hidden md:flex gap-8">
            {['about', 'journey', 'projects', 'skills', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`capitalize ${activeSection === item ? 'text-purple-300 font-medium' : 'text-gray-300 hover:text-white'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <a
              href="/Nashid_Resume.pdf"
              download
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:from-pink-500 hover:to-purple-500 transition"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </div>
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed z-40 top-16 w-full bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 p-4 shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {['about', 'journey', 'projects', 'skills', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className={`py-3 px-4 rounded-lg capitalize ${activeSection === item ? 'bg-gray-800 text-purple-300' : 'text-gray-300 hover:bg-gray-800'}`}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
              <a
                href="/Nashid_Resume.pdf"
                download
                className="py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:from-pink-500 hover:to-purple-500 transition"
                aria-label="Download Resume"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="relative z-10 pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
    <div className="w-36 h-36 mx-auto rounded-full border-4 border-purple-500 shadow-xl overflow-hidden">
  <img
    src="/profile.jpg"
    alt="Nashid Profile"
    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
  />
</div>


            </motion.div>
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Nashid
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Full Stack Developer with a proven track record of building robust web applications using the MERN stack. Known for resilience, adaptability, and a passion for continuous learning. Seeking opportunities to contribute to dynamic development teams.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <p className="mb-4 text-lg text-gray-300 text-center">
              I’m a self-taught developer who transitioned from operations and accounting to full stack web development. My journey is defined by resilience, adaptability, and a drive to solve real-world problems with technology.
            </p>
          </div>
        </section>
        {/* Coding Journey */}
        <section id="journey" className="py-20 px-6 bg-gradient-to-br from-gray-900/90 to-gray-950/90">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Coding Journey
            </h2>
            <div className="space-y-8">
              {journey.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`rounded-xl p-6 shadow-lg bg-gradient-to-r ${step.color} flex items-start gap-5`}
                >
                  <div className="mt-1">{step.icon}</div>
                  <div>
                    <div className="font-semibold text-lg">{step.title}</div>
                    <div className="text-sm text-gray-300">{step.detail}</div>
                    {step.links && (
                      <div className="flex flex-wrap gap-3 mt-2">
                        {step.links.map((l, i) => (
                          <a
                            key={i}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-purple-400 hover:underline text-xs"
                          >
                            <ExternalLink size={14} /> {l.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((proj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="rounded-xl bg-gray-900/80 p-6 shadow-lg border border-gray-800 flex gap-5"
                >
                  <div className="mt-1">{proj.icon}</div>
                  <div>
                    <div className="font-semibold text-lg mb-1">{proj.title}</div>
                    <div className="text-gray-300 text-sm mb-2">{proj.description}</div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {proj.tech.map((t, i) => (
                        <span key={i} className="text-xs bg-gray-800 text-purple-300 px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {proj.links.map((l, i) => (
                        <a
                          key={i}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-pink-400 hover:underline text-xs"
                        >
                          {l.type === "github" ? <Github size={14} /> : <ExternalLink size={14} />}
                          {l.type === "github" ? "Code" : "Live"}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Skills */}
        <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-900/90 to-gray-950/90">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((group, idx) => (
                <div key={idx} className="rounded-xl bg-gray-900/80 p-6 shadow border border-gray-800">
                  <div className="font-semibold text-lg mb-2">{group.category}</div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-xs bg-gray-800 text-purple-200 px-2 py-0.5 rounded">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact
            </h2>
            <p className="mb-4">
              Interested in working together? Let's connect!
            </p>
            <div className="flex flex-col gap-4 items-center">
              <a
                href="mailto:nashidk1999@gmail.com"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:from-pink-500 hover:to-purple-500 transition"
                aria-label="Email Me"
              >
                Email Me
              </a>
              <a
                href="/Nashid_Resume.pdf"
                download
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:from-pink-500 hover:to-purple-500 transition"
                aria-label="Download Resume"
              >
                Download Resume
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="px-6 py-3 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition"
                aria-label="Message on WhatsApp"
              >
                Message on WhatsApp
              </button>
              <div className="flex gap-4 justify-center mt-4">
                <a href="https://github.com/Nashid-k" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="text-gray-300 hover:text-white" size={28} />
                </a>
                <a href="https://linkedin.com/in/nashid-k" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="text-gray-300 hover:text-white" size={28} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
