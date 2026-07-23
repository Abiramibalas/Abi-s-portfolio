import React, { useState, useEffect } from 'react';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const heroLines = [
  '$ whoami',
  '> aspiring software engineer, AI/ML enthusiast, Data Engineer and Test Engineer',
  '$ status --check',
  '> available_for_hire: true',
];

const educationItems = [
  {
    title: 'B.Tech, Information Technology',
    date: '2022 – 2026',
    detail: 'A.V.C College of Engineering, Mayiladuthurai · CGPA 8.1/10',
  },
  {
    title: 'Higher Secondary (Bio-Maths)',
    date: '2021 – 2022',
    detail: 'Raj Matriculation Higher Secondary School · GPA 7.5/10',
  },
  {
    title: 'SSLC',
    date: '2019 – 2020',
    detail: 'Raj Matriculation Higher Secondary School · GPA 7.8/10',
  },
];

const skillsData = [
  { title: 'Languages', tags: ['Python', 'Java'] },
  { title: 'Web Technologies', tags: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Databases', tags: ['SQL', 'MongoDB'] },
  { title: 'Tools & Libraries', tags: ['OpenCV', 'TensorFlow', 'Pandas', 'NumPy', 'GitHub'] },
];

const projects = [
  {
    id: 'travel',
    label: 'Travel',
    title: 'Travel Application System — 2026',
    text: 'Full-stack web app for browsing, filtering, and booking travel packages using a relational database.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 'safety',
    label: 'Safety',
    title: 'Women Safety Alert System — 2025',
    text: 'Live distress detection with OpenCV and TensorFlow, integrated with Telegram Bot API for instant alerts.',
    stack: ['Python', 'OpenCV', 'TensorFlow', 'Telegram API'],
  },
  {
    id: 'air',
    label: 'Environment',
    title: 'Air Quality Prediction System — 2025',
    text: 'Improved air quality forecasting by ~25% using feature engineering and ML visualized in Power BI.',
    stack: ['Python', 'ML', 'Pandas', 'NumPy', 'Power BI'],
  },
  {
    id: 'booking',
    label: 'Bookings',
    title: 'Wedding Hall Reservation System — 2025',
    text: 'Reservation system for booking halls, managing schedules, and customer records with SQL support.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SQL'],
  },
];

const experienceItems = [
  {
    title: 'AI/ML Intern — Tamil Nadu, India',
    date: '2025',
    text: 'Built chatbot systems, OCR pipelines, and improved model accuracy for NLP and vision tasks.',
  },
  {
    title: 'Smart India Hackathon 2024 — National Finalist Track',
    date: '2024',
    text: 'Delivered a national-level prototype under real hackathon constraints.',
  },
  {
    title: 'TANSAM Hackathon 2025 — State Level',
    date: '2025',
    text: 'Built a working prototype under a tight timeline during state-level competition.',
  },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [typedLines, setTypedLines] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [step, setStep] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(projects[0].id);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (step >= heroLines.length) return;
    const line = heroLines[step];
    if (charIndex <= line.length) {
      const timeout = setTimeout(() => {
        setCurrentText(line.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 34);
      return () => clearTimeout(timeout);
    }
    const pause = setTimeout(() => {
      setTypedLines((prev) => [...prev, line]);
      setStep((prev) => prev + 1);
      setCharIndex(0);
    }, 640);
    return () => clearTimeout(pause);
  }, [charIndex, step]);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bars = document.querySelectorAll('.bar i');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.w + '%';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nav = document.querySelector('nav');
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 40 ? '0 8px 30px rgba(0,0,0,.35)' : 'none';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeProject = projects.find((project) => project.id === selectedProject);

  return (
    <div className="wrap">
      <NavBar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow reveal"><span className="dot" /> Open to work — Chennai, India</div>
            <h1 className="hero-title reveal">Hi, I'm Abirami.<br />I build <span className="accent">AI-powered</span> & full-stack systems.</h1>
            <p className="hero-sub reveal">
              B.Tech Information Technology graduate (CGPA 8.1) from A.V.C College of Engineering, with hands-on AI/ML internship experience and a track record of shipping real, working projects — not just tutorials.
            </p>
            <div className="terminal reveal">
              {typedLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
              {step < heroLines.length && <div>{currentText}<span className="caret" /></div>}
            </div>
            <div className="hero-actions reveal">
              <a href="#projects" className="btn btn-primary">View Projects →</a>
              <a href="assets/ABI_CV_2026.pdf" className="btn btn-ghost" download>Download CV</a>
            </div>
          </div>
          <div className="status-card reveal">
            <div className="status-dots"><span /><span /><span /></div>
            <div className="status-body">
              <div><span className="k">candidate</span> <span className="v">@abirami</span></div>
              <div><span className="k">role_targets</span> <span className="tag">SDE Trainee · Data Analyst · QA · Full Stack</span></div>
              <div><span className="k">location</span> <span className="v">Chennai, Tamil Nadu</span></div>
              <div><span className="k">status</span> <span className="ok">● ready_to_deploy</span></div>
              <div className="progress-row">
                <div className="k">Python / ML</div>
                <div className="bar"><i data-w="92" /></div>
              </div>
              <div className="progress-row">
                <div className="k">Full-Stack (React · FastAPI)</div>
                <div className="bar"><i data-w="88" /></div>
              </div>
              <div className="progress-row">
                <div className="k">SQL & Data Analysis</div>
                <div className="bar"><i data-w="85" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" tag="// 01 about" title="Fresher on paper, builder in practice." description="I learn by shipping. Every line on this page is backed by a working repo, a deployed demo, or a real internship deliverable.">
        <div className="about-grid">
          <div className="about-text reveal">
            <p>I'm an <strong>IT graduate (2026)</strong> who got curious about machine learning early, then went and built things with it — an <strong>AutoML platform</strong>, prediction systems, safety tools — instead of stopping at coursework.</p>
            <p>During my <strong>AI/ML internship at Annular Technologies</strong>, Chennai, I worked on real applied ML problems, which pushed me to get equally comfortable on the engineering side: APIs, databases, and shipping a usable product end-to-end.</p>
            <p>I'm now looking for an <strong>entry-level Software Engineer, Data Analyst, QA, or Full Stack role</strong> in Chennai, where I can keep building things that matter on day one.</p>
          </div>
          <div className="edu-list reveal">
            {educationItems.map((item) => (
              <div className="edu-item" key={item.title}>
                <div className="row"><h4>{item.title}</h4><span className="date">{item.date}</span></div>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" tag="// 02 stack" title="Tools I actually ship with.">
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div className="skill-cat reveal" key={skill.title}>
              <h4>{skill.title}</h4>
              <div className="skill-tags">
                {skill.tags.map((tag) => <span className="skill-tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" tag="// 03 work" title="Projects with a real problem behind them." description="Each one solves something specific — safety, environment, travel, or analytics — end to end.">
        <div className="proj-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`proj-card reveal ${selectedProject === project.id ? 'active' : ''}`}
              onClick={() => setSelectedProject(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="corner" />
              <div className="num">{`${String(index + 1).padStart(2, '0')} / ${project.label}`}</div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="proj-stack">
                {project.stack.map((stack) => <span key={stack}>{stack}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="status-card reveal" style={{ marginTop: '2rem' }}>
          <div className="status-dots"><span /><span /><span /></div>
          <div className="status-body">
            <div><span className="k">featured_project</span> <span className="v">{activeProject.label}</span></div>
            <div><span className="k">title</span> <span className="tag">{activeProject.title}</span></div>
            <div><span className="k">focus</span> <span className="ok">interactive preview</span></div>
            <p style={{ marginTop: '14px', color: 'var(--muted)' }}>Click a card to highlight the project and keep your portfolio experience interactive.</p>
          </div>
        </div>
      </Section>

      <Section id="experience" tag="// 04 experience" title="Where I've already delivered.">
        <div className="timeline reveal">
          {experienceItems.map((item) => (
            <div className="t-item" key={item.title}>
              <h4>{item.title}</h4>
              <div className="meta">{item.date}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="contact">
        <div className="contact-box reveal">
          <h2>Let's build something <span>real</span>, together.</h2>
          <p>I'm actively looking for entry-level Software Engineer, Data Analyst, QA, or Full Stack roles in Chennai. If you're hiring — I'd love to talk.</p>
          <div className="contact-links">
            <a href="mailto:abirami@example.com" className="btn btn-primary">Email Me</a>
            <a href="#" className="btn btn-ghost">LinkedIn</a>
            <a href="#" className="btn btn-ghost">GitHub</a>
          </div>
        </div>
      </section>

      <footer>© 2026 Abirami · Built with code, coffee, and a lot of debugging.</footer>
    </div>
  );
}

function NavBar({ theme, onToggleTheme }) {
  return (
    <nav>
      <div className="logo">AB<span>.</span></div>
      <ul className="navlinks">
        {navLinks.map((link) => (
          <li key={link.id}><a href={`#${link.id}`}>{link.label}</a></li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button className="nav-cta" onClick={onToggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
        <a href="#contact" className="nav-cta">Hire Me →</a>
      </div>
    </nav>
  );
}

function Section({ id, tag, title, description, children }) {
  return (
    <section id={id}>
      <div className="sec-head reveal">
        <div className="sec-tag">{tag}</div>
        <h2 className="sec-title">{title}</h2>
        {description && <p className="sec-desc">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default App;
