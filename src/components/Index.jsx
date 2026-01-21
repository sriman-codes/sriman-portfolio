import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

function Index() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  const linkBase = "block px-3 py-1 rounded-md text-sm font-medium transition cursor-pointer";
  const linkClasses = theme
  ? "text-gray-700 hover:bg-blue-700/20 hover:text-blue-700"
  : "text-white hover:bg-blue-700/20 hover:text-blue-300   ";

  const projects = [
    {
      title: "Password Generator",
      description: "Customizable password generator with copy-to-clipboard support and strength options.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/sriman-codes/password-generator-react",
      live: "https://password-generator-sriman.netlify.app/",
    },
    {
      title: "Recipe Finder",
      description: "Recipe search app using static recipe data with JavaScript-based filtering.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sriman-codes/recipe-finder-js",
      live: "https://sriman-codes.github.io/recipe-finder-js/",
    },
    {
      title: "Digital Clock",
      description: "Real-time digital clock with dark/light mode and 12/24 hour format.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/sriman-codes/react-digital-clock",
      live: "https://digital-clock-sriman.netlify.app/",
    },
  ];

  const skills = [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Java (Learning)", level: "Beginner" },
  ];


  //VANTA FOG INIT
  useEffect(() => {
  if (vantaEffect) {
    vantaEffect.destroy();
    setVantaEffect(null);
  }

  const effect = FOG({
    el: vantaRef.current,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,

    // 🌗 THEME BASED COLORS
    highlightColor: theme ? 0x93c5fd : 0x0a0a2c,
    midtoneColor: theme ? 0xbfdbfe : 0x040431,
    lowlightColor: theme ? 0xe0f2fe : 0x0b0bac,
    baseColor: theme ? 0xffffff : 0x0d093b,

    blurFactor: 0.4,
    speed: 0.5,
    zoom: 1.2,
  });

  setVantaEffect(effect);

  return () => {
    if (effect) effect.destroy();
  };
}, [theme]);

  

  return (
    <div ref={vantaRef} className="max-auto text-white">
      {/* NAVBAR */}
      <nav className={
        !theme 
        ? "fixed top-0 md:top-10 h-16 md:left-1/4 left-0 w-full md:w-1/2 md:border md:border-white/20 md:rounded-full z-50 px-6 py-4 md:backdrop-blur-md md:bg-transparent bg-[#01010E]" 
        : "fixed top-0 md:top-10 h-16 md:left-1/4 left-0 w-full md:w-1/2 md:border md:border-black/20 md:rounded-full z-50 px-6 py-4 md:backdrop-blur-md md:bg-transparent bg-[#A8CBFD]"
      }>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Mobile button */}
          <button
            className={
              !theme ? "md:hidden text-2xl cursor-pointer" : "md:hidden text-2xl cursor-pointer text-gray-700"
            }
            onClick={() => setOpen(!open)}
          >
            <IoIosMenu />
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 text-sm font-bold">
              <li><a href="#home" className={`${linkBase} ${linkClasses}`}>Home</a>
            </li>
              <li><a href="#projects" className={`${linkBase} ${linkClasses}`}>Projects</a>
            </li>
            <li><a href="#skills" className={`${linkBase} ${linkClasses}`}>Skills</a>
              </li>
            <li><a href="#about" className={`${linkBase} ${linkClasses}`}>About</a>
              </li>
            <li><a href="#contact" className={`${linkBase} ${linkClasses}`}>Contacts</a>
              </li>
          </ul>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1nnblWQhezdFnZZtfVv_g4f1oVEjiJR2x/view?usp=drive_link"
              target="blank"
              
              className={!theme ? " hover:bg-blue-700/20 hover:text-blue-300 px-4 py-1 rounded-lg font-bold"
                : "text-gray-700 hover:bg-blue-700/20 hover:text-blue-700 px-4 py-1 rounded-lg font-bold"
              }
            >
              Resume
            </a>

            <button
              onClick={() => setTheme(!theme)}
              className={
                !theme ? "p-2 rounded-full hover:text-blue-300 hover:bg-blue-700/20 transition-transform duration-300 cursor-pointer"
                : "p-2 rounded-full text-gray-700 hover:bg-blue-700/20 transition-transform duration-300 cursor-pointer"
              }
            >
              {theme ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className={
            !theme ? " md:hidden mt-7  bg-gray-900 w-1/2 p-4 rounded-xl space-y-3"
            : " md:hidden mt-7  bg-white w-1/2 p-4 rounded-xl space-y-3"
          }>
            <li><a href="#home" onClick={() => setOpen(false)} className={`${linkBase} ${linkClasses}`}>Home</a>
            </li>
              <li><a href="#projects" onClick={() => setOpen(false)} className={`${linkBase} ${linkClasses}`}>Projects</a>
            </li>
            <li><a href="#skills" onClick={() => setOpen(false)} className={`${linkBase} ${linkClasses}`}>Skills</a>
              </li>
            <li><a href="#about" onClick={() => setOpen(false)} className={`${linkBase} ${linkClasses}`}>About</a>
              </li>
            <li><a href="#contact" onClick={() => setOpen(false)} className={`${linkBase} ${linkClasses}`}>Contacts</a>
              </li>
          </ul>
        )}
      </nav>

      {/* Home SECTION */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center text-center px-6 pt-24"
      >
        <h1 className={
          !theme ? "text-4xl md:text-6xl font-bold mb-4" : "text-4xl md:text-6xl font-bold mb-4 text-black"
        }>
          Hi, I’m <span className="text-blue-500">Sriman R</span>
        </h1>

        <p className={!theme ? "text-lg md:text-xl text-gray-300 max-w-xl" 
          : "text-lg md:text-xl text-gray-700 max-w-xl"
        }>
          Front-End Developer building clean, responsive web applications using
          React & Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-900 rounded-lg font-semibold hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={!theme ? "px-6 py-3 border border-blue-700 rounded-lg hover:bg-blue-900" 
              : "px-6 py-3 border border-blue-700 rounded-lg hover:bg-blue-900 transition text-blue-700 hover:text-white"
            }
          >
            Contact Me
          </a>
        </div>
      </section>


    {/* projects */}
      <section
      id="projects"
      className="min-h-screen px-6 py-34 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className={!theme ? "text-3xl md:text-4xl font-bold mb-4"
          : "text-3xl md:text-4xl font-bold mb-4 text-black"
        }>Projects</h2>
        <p className={!theme ? "text-gray-400 max-w-2xl mx-auto" : "text-gray-800 max-w-2xl mx-auto"}>
          Some of the projects I’ve built to practice and improve my front-end
          development skills.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={!theme
              ? "bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:scale-[1.03] transition-transform duration-300" 
              : "bg-white/50 backdrop-blur-md border border-black/10 rounded-xl p-6 hover:scale-[1.03] transition-transform duration-300"
            }
          >
            <h3 className={!theme ? "text-xl font-semibold mb-2" : "text-xl font-semibold mb-2 text-black"}>{project.title}</h3>

            <p className={!theme ? "text-gray-400 text-sm mb-4" : "text-gray-800 text-sm mb-4"}>
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className={!theme ? "text-xs px-3 py-1 rounded-full bg-blue-900/40 text-blue-300"
                    : "text-xs px-3 py-1 rounded-full bg-blue-900/90 text-white"
                  }
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className={!theme ? "flex-1 text-center px-4 py-2 border border-blue-700 rounded-lg hover:bg-blue-900 transition"
                  : "flex-1 text-center px-4 py-2 border border-blue-700 rounded-lg hover:bg-blue-900 transition text-blue-700 hover:text-white"
                }
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                className="flex-1 text-center px-4 py-2 bg-blue-900 rounded-lg
                           hover:bg-blue-700 transition"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* skills */}
    <section
      id="skills"
      className="min-h-screen px-6 py-34 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className={!theme ? "text-3xl md:text-4xl font-bold mb-4" : "text-3xl md:text-4xl font-bold mb-4 text-black"}>Skills</h2>
        <p className={!theme ? "text-gray-400 max-w-2xl mx-auto" : "text-gray-800 max-w-2xl mx-auto"}>
          Technologies and tools I use to build clean, responsive, and scalable web
          applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={!theme 
              ? "bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:scale-[1.05] transition-transform duration-300"
              : "bg-white/50 backdrop-blur-md border border-black/10 rounded-xl p-6 text-center hover:scale-[1.05] transition-transform duration-300"
            }
          >
            <h3 className={!theme ? "text-lg font-semibold mb-2" : "text-lg font-semibold mb-2 text-black/80"}>
              {skill.name}
            </h3>
            <span className={!theme ? "text-sm text-blue-400" : "text-sm text-blue-800"}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* about */}
    <section
      id="about"
      className="min-h-screen px-6 py-24 max-w-5xl mx-auto flex items-center"
    >
      <div className={!theme ? "bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12"
        : "bg-white/50 backdrop-blur-md border border-black/10 rounded-2xl p-8 md:p-12"
      }>
        <h2 className={!theme ? "text-3xl md:text-4xl font-bold mb-6 text-center "
          : "text-3xl md:text-4xl font-bold mb-6 text-center text-black"
        }>
          About Me
        </h2>

        <p className={!theme ? "text-gray-300 leading-relaxed mb-4" : "text-gray-800 leading-relaxed mb-4"}>
          I’m a Front-End Developer who enjoys building clean, responsive, and
          user-focused web applications. I like converting ideas and designs into
          real, functional interfaces using modern web technologies.
        </p>

        <p className={!theme ? "text-gray-300 leading-relaxed mb-4" : "text-gray-800 leading-relaxed mb-4"}>
          I have hands-on experience with React, Tailwind CSS, and JavaScript, and I
          focus on writing clean, maintainable code. I care about UI clarity,
          performance, and user experience.
        </p>

        <p className={!theme ? "text-gray-300 leading-relaxed mb-4" : "text-gray-800 leading-relaxed mb-4"}>
          Currently, I’m expanding my skill set by learning backend development with
          Java and Spring Boot, aiming to grow into a well-rounded full-stack
          developer.
        </p>
      </div>
    </section>


    {/* contact */}
    <section
      id="contact"
      className="min-h-screen px-6 py-24 max-w-5xl mx-auto flex items-center"
    >
      <div className={!theme ? "w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        : "w-full bg-white/50 backdrop-blur-md border border-black/10 rounded-2xl p-8 md:p-12 text-center"
      }>
        <h2 className={!theme ? "text-3xl md:text-4xl font-bold mb-6" : "text-3xl md:text-4xl font-bold mb-6 text-black"}>
          Contact Me
        </h2>

        <p className={!theme ? "text-gray-300 max-w-2xl mx-auto mb-10" : "text-gray-800 max-w-2xl mx-auto mb-10"}>
          I’m open to internships, entry-level opportunities, and collaboration.
          If you like my work or want to connect, feel free to reach out.
        </p>

        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sriman5215@gmail.com"
            target="blank"
            className="px-6 py-3 bg-blue-900 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/sriman-codes"
            target="_blank"
            className={!theme ? "px-6 py-3 border border-blue-700 rounded-lg hover:bg-blue-900 transition"
              : "px-6 py-3 border border-blue-700 rounded-lg hover:bg-blue-900 transition text-blue-700 hover:text-white font-semibold"
            }
          >
            GitHub
          </a>

          <a
           href="https://www.linkedin.com/in/sriman-r-785329260/"
            target="_blank"
            className={!theme ? "px-6 py-3 border border-blue-700 rounded-lg hover:bg-blue-900 transition"
              : "px-6 py-3 border border-blue-700 rounded-lg hover:bg-blue-900 transition text-blue-700 hover:text-white font-semibold"}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>



      
    </div>
  );
}

export default Index;
