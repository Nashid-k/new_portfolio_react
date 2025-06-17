import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Linkedin, Github, MessageCircle, ExternalLink, 
  Code, Rocket, Lightbulb, Menu, X,
  ShoppingCart, Cloud, Check, Users, Lock,
  Database, Type, Layers, CloudRain, ListChecks,
  User, Thermometer, HeartPulse
} from "lucide-react";

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden opacity-20 z-0">
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
};

const projects = [
  {
    title: "Fashion E-commerce (Nashifa)",
    description: "Full-featured shopping platform with user authentication, product management, cart system, and admin dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "AWS"],
    icon: <ShoppingCart className="text-purple-400" size={28} />,
    links: [
      { type: "github", url: "https://github.com/Nashid-k/First_Project_Ecommerce" }
    ]
  },
  {
    title: "OLX Clone",
    description: "Marketplace clone with product listings, search functionality, and user interactions.",
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
    description: "Real-time weather application with dynamic data visualization using OpenWeather API.",
    tech: ["React", "OpenWeather API", "Geolocation"],
    icon: <Cloud className="text-cyan-400" size={28} />,
    links: [
      { type: "github", url: "https://github.com/Nashid-k/weather_react" }
    ]
  },
  {
    title: "TypeScript CRUD App",
    description: "Clean implementation of CRUD operations with TypeScript for type-safe development.",
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
    detail: "My journey began in the physical world - managing operations in my hometown, then working as a millwright fitter in Jamshedpur when circumstances demanded. Though I enjoyed gaming, technology remained just a hobby until allergies forced me away from fieldwork. After surgery and months of bed rest, I returned as an accountant, unaware my life was about to change forever.",
    icon: <User className="text-amber-400" />,
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    year: "The Awakening",
    title: "The Spark That Changed Everything",
    detail: "A conversation with my best friend introduced me to programming. That YouTube video about computer science revealed a new world - where my problem-solving skills could build digital solutions. Coming from manual labor, the idea that I could create from anywhere, even during recovery, ignited a fire in me.",
    icon: <Lightbulb className="text-yellow-400" />,
    color: "from-yellow-500/20 to-green-500/20",
    links: [
      { text: "First Code Attempt", url: "https://nashid-k.github.io/kiwi/" }
    ]
  },
  {
    year: "First Steps",
    title: "Learning to Code",
    detail: "Started with tutorials and built my first static webpage - an old Facebook landing page clone. Then came my first real project: Kiwi Ice Cream clone, which took 2 days but wasn't responsive. I was learning to crawl before I could walk, but every line of code felt like magic.",
    icon: <Code className="text-blue-400" />,
    color: "from-blue-500/20 to-cyan-500/20",
    links: [
      { text: "Kiwi Clone", url: "https://nashid-k.github.io/kiwi/" },
      { text: "Huawei Clone", url: "https://nashid-k.github.io/huawei/" }
    ]
  },
  {
    year: "Deep Dive",
    title: "Full Stack Mastery",
    detail: "Dove deep into the MERN ecosystem - mastering JavaScript fundamentals, then Node.js, Express, and MongoDB. Built a simple Login System while learning authentication, then challenged myself with a complete User Management System to practice CRUD operations.",
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
    detail: "Started applying for jobs, only to face the harsh reality - basic projects weren't enough. This wake-up call led me to build Nashifa, my first complete e-commerce platform. Countless errors, sleepless nights, but invaluable learning - this project transformed me from a beginner to a real developer.",
    icon: <Rocket className="text-orange-400" />,
    color: "from-orange-500/20 to-red-500/20",
    links: [
      { text: "Nashifa E-commerce", url: "https://github.com/Nashid-k/First_Project_Ecommerce" }
    ]
  },
  {
    year: "The Trial",
    title: "Bells Palsy: The Ultimate Test",
    detail: "Just as I was mastering DSA, life struck again - Bells Palsy left me unable to even open my laptop for 8 months. When I returned, I had forgotten everything. But like a phoenix, I rose stronger. This time, the grind was different - more focused, more determined. I rebuilt my knowledge from scratch, proving my resilience beyond any code.",
    icon: <HeartPulse className="text-red-400" />,
    color: "from-red-500/20 to-purple-500/20",
    cinematic: true
  },
  {
    year: "The Rebirth",
    title: "Stronger Than Before",
    detail: "The comeback was brutal but transformative. Relearning everything from JavaScript fundamentals to DSA concepts, I developed an unshakable perseverance. Where others might have quit, I found my superpower - the ability to rebuild from zero. This period forged the developer I am today.",
    icon: <Thermometer className="text-purple-400" />,
    color: "from-purple-500/20 to-blue-500/20",
    links: [
      { text: "Comeback Project", url: "https://github.com/Nashid-k/First_Project_Ecommerce" }
    ]
  },
  {
    year: "Skill Expansion",
    title: "DSA & Advanced Tech",
    detail: "Recognizing the importance of Data Structures & Algorithms for career growth, I dedicated myself to mastering DSA concepts. Simultaneously expanded my tech stack with PostgreSQL, TypeScript, and advanced React patterns through meaningful projects.",
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
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [message, setMessage] = useState("Hi Nashid, I saw your portfolio and would like to connect about...");

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
      <div className="fixed inset-0 overflow-hidden opacity-10">
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
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold mb-6 shadow-lg shadow-purple-500/30">
                N
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
              Full Stack Developer crafting digital experiences with 
              <span className="text-purple-400 font-semibold"> MERN Stack</span> &
              <span className="text-pink-400 font-semibold"> Modern Technologies</span>
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
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg"
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate self-taught full stack developer who transforms ideas into powerful web applications. 
                With expertise in the MERN stack and PostgreSQL, I create scalable solutions that blend beautiful 
                interfaces with robust backends. When I'm not coding, you'll find me diving deep into Data Structures 
                & Algorithms to build more efficient solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="journey" className="py-20 px-6 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              My Coding Journey
            </motion.h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full opacity-30 hidden md:block" />
              
              {journey.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-10 border-4 border-gray-900 hidden md:block" />
                  
                  {phase.cinematic && (
                    <motion.div
                      className="absolute inset-0 bg-black/50 z-0 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.3 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div 
                      className={`bg-gradient-to-br ${phase.color} backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-lg`}
                      whileHover={{ scale: phase.cinematic ? 1 : 1.02 }}
                      initial={phase.cinematic ? { scale: 0.9, opacity: 0 } : {}}
                      whileInView={phase.cinematic ? { 
                        scale: 1,
                        opacity: 1,
                        transition: { type: "spring", bounce: 0.4 }
                      } : {}}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">{phase.icon}</div>
                        <div>
                          <span className="text-sm font-semibold text-purple-300">{phase.year}</span>
                          <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">{phase.detail}</p>
                      {phase.links && (
                        <div className="flex gap-3 flex-wrap">
                          {phase.links.map((link, idx) => (
                            <motion.a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-purple-300 hover:text-white text-sm transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="text-xs" />
                              {link.text || (link.type === "github" ? "Code" : "Live")}
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
                >
                  <div className="mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  {project.links && (
                    <div className="flex gap-3">
                      {project.links.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {link.type === "github" ? (
                            <>
                              <Github size={16} /> Code
                            </>
                          ) : (
                            <>
                              <ExternalLink size={16} /> Live
                            </>
                          )}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-6 bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Technical Skills
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white rounded-lg border border-white/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Let's Build Something Amazing
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Ready to turn your ideas into reality? I'm always excited to work on new projects and collaborate with fellow developers.
              </motion.p>
              
              <motion.div 
                className="flex justify-center gap-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  onClick={() => setIsWhatsAppOpen(true)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  <MessageCircle />
                </motion.button>
                
                <motion.a
                  href="https://github.com/Nashid-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
                >
                  <Github />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/nashid-k-080909273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Linkedin />
                </motion.a>
              </motion.div>
              
              <motion.p 
                className="text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                &copy; {new Date().getFullYear()} Nashid. Crafted with passion and lots of coffee ☕
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {isWhatsAppOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsWhatsAppOpen(false)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-gray-800 rounded-xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-4">Message me on WhatsApp</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsWhatsAppOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition"
                >
                  Open WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}