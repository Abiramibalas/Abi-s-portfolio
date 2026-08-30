import { useEffect, useState, useRef } from 'react';
import Chatbot from './Chatbot';
import Freelakhs from './Freelakhs';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const heroLines = [
  '$ whoami',
  '> aspiring software engineer, AI/ML enthusiast',
  '$ status --check',
  '> available_for_hire: true',
];

const profileModes = [
  {
    id: 'engineer',
    label: 'Software',
    title: 'Software engineering mindset',
    text: 'I enjoy turning requirements into clean, responsive web experiences with practical data handling behind them.',
    points: ['HTML, CSS, JavaScript, Angular, TypeScript', 'SQL and MongoDB data flows', 'Responsive UI and booking workflows'],
  },
  {
    id: 'ai',
    label: 'AI/ML',
    title: 'Applied AI problem solver',
    text: 'My internship and projects gave me hands-on practice with chatbot systems, OCR pipelines, computer vision, and prediction workflows.',
    points: ['Python, OpenCV, TensorFlow', 'Pandas, NumPy, feature engineering', 'NLP and vision model improvement'],
  },
  {
    id: 'qa',
    label: 'QA',
    title: 'Quality-focused builder',
    text: 'I pair development with testing awareness so the final product is usable, understandable, and easier to maintain.',
    points: ['Manual testing fundamentals', 'Selenium exposure', 'Analytical thinking and debugging'],
  },
];

const quickStats = [
  { value: '8.1', label: 'B.Tech CGPA' },
  { value: '25%', label: 'ML accuracy improvement' },
  { value: '3rd', label: 'TANSAM Hackathon prize' },
  { value: '8+', label: 'Portfolio projects' },
];

const educationItems = [
  {
    title: 'B.Tech in Information Technology',
    date: 'Nov 2022 - May 2026',
    detail: 'A.V.C College of Engineering - GPA 8.1 / 10',
  },
  {
    title: 'Higher Secondary (Bio-Maths)',
    date: 'Sep 2021 - May 2022',
    detail: 'Raj Matriculation Higher Secondary School - GPA 7.5 / 10',
  },
  {
    title: 'SSLC',
    date: 'Jun 2019 - Mar 2020',
    detail: 'Raj Matriculation Higher Secondary School - GPA 7.8 / 10',
  },
];

const skillsData = [
  { title: 'Languages', tags: ['Python', 'Java'] },
  { title: 'Web Technologies', tags: ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'React'] },
  { title: 'Databases', tags: ['SQL', 'MongoDB'] },
  { title: 'Tools & Libraries', tags: ['OpenCV', 'TensorFlow', 'Pandas', 'NumPy', 'Selenium', 'GitHub', 'VS Code'] },
  { title: 'Concepts', tags: ['Machine Learning', 'Data Analysis', 'Manual Testing', 'DSA'] },
  { title: 'Strengths', tags: ['Problem Solving', 'Teamwork', 'Adaptability', 'Analytical Thinking'] },
];

const projects = [
  {
    id: 'travel',
    label: 'Travel',
    title: 'Travel Application System - 2026',
    text: 'Full-stack web app for browsing, filtering, and booking travel packages with user accounts and SQL-backed bookings.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    github: 'https://github.com/Abiramibalas/TravelApplication-System',
    demo: 'Travel package browsing, filtering, user accounts, and booking flow.',
  },
  {
    id: 'safety',
    label: 'Safety',
    title: 'Women Safety Alert System - 2025',
    text: 'Real-time distress detection with OpenCV and TensorFlow, integrated with Telegram for instant safety alerts.',
    stack: ['Python', 'OpenCV', 'TensorFlow', 'Telegram API'],
    github: 'https://github.com/Abiramibalas/shegaurd',
    demo: 'Live-video distress monitoring with automated emergency alert behavior.',
  },
  {
    id: 'air',
    label: 'Environment',
    title: 'Air Quality Prediction System - 2025',
    text: 'Improved prediction accuracy by 25% using preprocessing and feature engineering, then visualized trends in Power BI.',
    stack: ['Python', 'ML', 'Pandas', 'NumPy', 'Power BI'],
    github: 'https://github.com/Abiramibalas/sky-forecast-hub',
    demo: 'Prediction workflow with preprocessing, feature engineering, and pollution trend visuals.',
  },
  {
    id: 'booking',
    label: 'Bookings',
    title: 'Wedding Hall Reservation System - 2025',
    text: 'Reservation system for managing hall availability, customer records, bookings, and schedules.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    github: 'https://github.com/Abiramibalas/weddinghall_booking',
    demo: 'Hall availability, customer records, scheduling, and booking management.',
  },
  {
    id: 'sprintfit',
    label: 'Finance',
    title: 'SprintFit Investment Web - 2025',
    text: 'Responsive investment management web app with dashboards for financial goals, portfolio tracking, and analytics.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Abiramibalas/ThesprintFit',
    demo: 'Investment dashboard for tracking goals, portfolios, and performance analytics.',
  },
  {
    id: 'matrimonial',
    label: 'Automation',
    title: 'Matrimonial Bot',
    text: 'GitHub-hosted bot project focused on automating matrimonial interaction workflows and improving user response handling.',
    stack: ['Bot', 'Automation', 'GitHub'],
    github: 'https://github.com/Abiramibalas/Matrimonial_bot',
    demo: 'Automated conversation flow for matrimonial interaction and response handling.',
  },
  {
    id: 'covid-analysis',
    label: 'Analytics',
    title: 'COVID-19 Analysis',
    text: 'Data analysis project for exploring COVID-19 trends, patterns, and insights through structured analysis and visualization.',
    stack: ['Data Analysis', 'Visualization', 'GitHub'],
    github: 'https://github.com/Abiramibalas/Covid-19-Analysis',
    demo: 'COVID-19 trend exploration with analysis views and insight summaries.',
  },
  {
    id: 'navybot',
    label: 'Chatbot',
    title: 'NavyBot Chatbot Web',
    text: 'Chatbot web project designed to support automated user interaction with a focused conversational interface.',
    stack: ['Chatbot', 'Web App', 'GitHub'],
    github: 'https://github.com/Abiramibalas/NavyBot',
    demo: 'Chat-style web interaction for answering user queries through an automated bot flow.',
  },
];

const certifications = [
  { title: 'Prompt Engineering Course', issuer: 'IBM SkillsBuild', type: 'Course', note: 'Completed focused training in prompt design and AI-assisted workflows.' },
  { title: 'AI/ML Program', issuer: 'Edunet Foundation', type: 'Training', note: 'Built core understanding of machine learning concepts and applied AI practices.' },
  { title: 'CodeHub Symposium', issuer: 'Arasu Engineering College', type: 'Symposium', note: 'Represented at a technical symposium and participated in peer-level innovation exposure.' },
  { title: 'Smart India Hackathon 2024', issuer: 'National innovation program', type: 'Hackathon', note: 'Qualified among 1000 participants for national-level innovation work.' },
  { title: 'TANSAM Hackathon 2025', issuer: 'State-level hackathon', type: 'Prize', note: 'Secured 3rd prize for an innovative project under competition constraints.' },
];

const experienceItems = [
  {
    title: 'AI/ML Intern - Annular Technologies Pvt Ltd',
    date: '2025 - Chennai, Tamil Nadu',
    text: 'Developed chatbot systems, implemented OCR pipelines, and improved model accuracy across NLP and vision-based tasks.',
  },
  {
    title: 'Smart India Hackathon 2024',
    date: '2024',
    text: 'Qualified for a national-level innovation program among 1000 participants.',
  },
  {
    title: 'TANSAM Hackathon 2025',
    date: '2025',
    text: 'Secured 3rd prize in a state-level hackathon for an innovative project.',
  },
];

function App() {
  if (window.location.pathname === '/freelakhs') return <Freelakhs />;

  const [theme, setTheme] = useState('dark');
  const [typedLines, setTypedLines] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [step, setStep] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [profileMode, setProfileMode] = useState(profileModes[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 840) setIsMobileMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (step >= heroLines.length) return;
    const line = heroLines[step];
    if (charIndex <= line.length) {
      const timeout = setTimeout(() => {
        setCurrentText(line.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 38);
      return () => clearTimeout(timeout);
    }
    const pause = setTimeout(() => {
      setTypedLines((prev) => [...prev, line]);
      setStep((prev) => prev + 1);
      setCharIndex(0);
    }, 650);
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
      { threshold: 0.2 }
    );
    reveals.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bars = document.querySelectorAll('.bar i');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${entry.target.dataset.w}%`;
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
      nav.style.boxShadow = window.scrollY > 20 ? '0 8px 30px rgba(0,0,0,.3)' : 'none';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeProfile = profileModes.find((mode) => mode.id === profileMode);

  return (
    <div className="wrap">
      <NavBar
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Hero typedLines={typedLines} currentText={currentText} step={step} />
      <About activeProfile={activeProfile} profileMode={profileMode} setProfileMode={setProfileMode} />
      <Skills />
      <Services />
      <Projects />
      <Certifications />
      <ResumeSection />
      <Experience />
      <Contact />
      <footer>© 2026 Abirami - Built with clarity, curiosity, and polished engineering.</footer>
      <Chatbot />
      <CustomCursor />
    </div>
  );
}

function PortfolioBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm AbiBot, Abirami’s portfolio assistant. I can introduce her background, showcase her projects, explain technical details, or share contact info." },
  ]);

  const visit = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/ABIRAMI__CV_2026.pdf';
    link.download = 'Abirami_Resume_2026.pdf';
    link.click();
  };

  // Notification endpoint: replace with your server/webhook that will send you email alerts.
  const NOTIFY_ENDPOINT = '';
  const notifyOwner = async (eventType, extra = {}) => {
    try {
      const payload = {
        event: eventType,
        timestamp: new Date().toISOString(),
        ua: navigator.userAgent,
        origin: window.location.href,
        ...extra,
      };
      if (NOTIFY_ENDPOINT) {
        // use sendBeacon when available for page unload reliability
        if (navigator.sendBeacon) {
          const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
          navigator.sendBeacon(NOTIFY_ENDPOINT, blob);
        } else {
          await fetch(NOTIFY_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        }
      } else {
        // no endpoint configured — log to console so developer can replace with real webhook
        console.log('notifyOwner skipped (no NOTIFY_ENDPOINT).', payload);
      }
    } catch (err) {
      console.warn('notifyOwner error', err);
    }
  };

  const answer = (question) => {
    const text = question.toLowerCase();

    // Contact request: provide contact details only and trigger notification to owner
    if (text.includes('contact') || text.includes('hire') || text.includes('email') || text.includes('phone') || text.includes('number')) {
      return { text: 'Contact Abirami — Email: abiramiabirami48351@gmail.com | Phone: +91 82208 98893.', action: 'contact' };
    }

    // Experience request: provide fresher and internship details
    if (text.includes('experience') || text.includes('internship') || text.includes('fresher') || text.includes('annular')) {
      return { text: "I'm a fresher. I have completed a one-month internship at Annular Technologies as an AI/ML Intern.", action: 'experience' };
    }

    // If user asks about Abirami or who she is, return an extended intro and ask a follow-up
    if (text.includes('abirami') || text.includes('who are you') || text.includes('about yourself') || text.includes('tell me about')) {
      return {
        text: `Abirami B is a B.Tech Information Technology graduate with hands-on experience in AI/ML and full-stack web engineering. Projects include a Women Safety Alert System (OpenCV + TensorFlow with Telegram alerts), an Air Quality Prediction System (data preprocessing, feature engineering, ML models, Power BI), a Travel Application System (full-stack booking flows), a Wedding Hall Reservation System, and several automation and analytics projects. Strengths: practical problem solving, rapid prototyping, and shipping reliable user-focused features. Short-term goal: join a reputable company as an entry-level engineer to learn and contribute. Long-term goal: grow into a seasoned software professional who supports her family and helps the organization succeed. Would you like me to explain any of the projects (techniques, flow, advantages, failures overcome) or get contact details?`,
        followUp: true,
        action: 'about_followup',
      };
    }

    // If user asks to explain a specific project
    if (text.includes('women safety') || text.includes('safety alert')) {
      return { text: 'Women Safety Alert System — Techniques: OpenCV for frame capture, TensorFlow model for distress detection, Telegram API for instant alerts. Flow: capture -> preprocess -> inference -> alert + logging. Advantages: real-time monitoring and quick alerting; Failures overcome: reduced false positives via thresholding and temporal smoothing, improved robustness with more varied training data.', action: 'projects' };
    }
    if (text.includes('air quality') || text.includes('air-quality')) {
      return { text: 'Air Quality Prediction — Techniques: feature engineering, time-series preprocessing, ML regression/classification models, visualization in Power BI. Flow: ingest -> clean -> engineer features -> train -> evaluate -> deploy predictions. Advantages: improved accuracy and actionable insights; Failures overcome: missing data handling and model drift monitoring.', action: 'projects' };
    }
    if (text.includes('travel')) {
      return { text: 'Travel Application — Techniques: responsive frontend, backend booking APIs, authentication, SQL persistence and transactional safety. Flow: browse -> select -> reserve -> confirm -> payment (mock/demo). Advantages: clear UX for booking; Failures overcome: race conditions in booking resolved via server-side locks/transactions.', action: 'projects' };

    }

    // shortcuts for resume and github/linkedin
    if (text.includes('download') && (text.includes('resume') || text.includes('cv'))) return { text: 'Starting the download of Abirami’s current resume now.', action: 'download' };
    if (text.includes('github')) return { text: 'Opening Abirami’s GitHub profile.', action: 'github' };
    if (text.includes('linkedin')) return { text: 'Opening Abirami’s LinkedIn profile.', action: 'linkedin' };

    // default
    return { text: 'I can introduce Abirami, explain projects, provide contact info, or download the resume. Try asking "Tell me about Abirami" or press the quick buttons below.' };
  };

  const runAction = (action) => {
    if (action === 'download') downloadResume();
    else if (action === 'github') window.open('https://github.com/Abiramibalas?tab=repositories', '_blank', 'noopener,noreferrer');
    else if (action === 'linkedin') window.open('https://www.linkedin.com/in/abirami-b-0b7847334/', '_blank', 'noopener,noreferrer');
    else if (action === 'contact') {
      notifyOwner('contact_click', { note: 'Visitor requested contact details' });
    } else if (action) visit(action);
  };

  // Notify owner when this portfolio is visited (replace NOTIFY_ENDPOINT with your webhook)
  useEffect(() => {
    notifyOwner('portfolio_open', { note: 'Portfolio loaded / AbiBot component mounted' });
  }, []);

  const send = (question = input) => {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;
    setMessages((current) => [...current, { from: 'user', text: cleanQuestion }]);
    setInput('');
    const response = answer(cleanQuestion);
    if (response.action) runAction(response.action);
    setIsTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { from: 'bot', text: response.text }]);
      setIsTyping(false);
    }, 450);
  };

  const speak = (text) => window.speechSynthesis?.speak(new SpeechSynthesisUtterance(text));
  const listen = () => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) { setMessages((current) => [...current, { from: 'bot', text: 'Voice input is not supported by this browser. You can type your question instead.' }]); return; }
    const recognition = new Recognition();
    recognition.lang = 'en-IN';
    recognition.onresult = (event) => send(event.results[0][0].transcript);
    recognition.start();
  };

  return (
    <aside className={`portfolio-bot ${isOpen ? 'is-open' : ''}`} aria-label="Portfolio assistant">
      {isOpen && (
        <div className="bot-panel" role="dialog" aria-label="Chat with AbiBot">
          <div className="bot-panel-head">
            <div><strong>AbiBot</strong><span><i /> Exploring with you</span></div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant">×</button>
          </div>
          <div className="bot-messages" aria-live="polite">
            {messages.map((message, index) => <div className={`bot-message ${message.from}`} key={`${message.text}-${index}`}><p>{message.text}</p>{message.from === 'bot' && <button type="button" className="bot-speak" onClick={() => speak(message.text)} aria-label="Read this answer aloud">◖</button>}</div>)}
            {isTyping && <p className="bot-message bot bot-typing"><i /><i /><i /></p>}
          </div>
          <div className="bot-prompts">
            <button type="button" onClick={() => send('Tell me about yourself')}>About Abirami</button>
            <button type="button" onClick={() => send('What are the skills?')}>Skills</button>
            <button type="button" onClick={() => send('Explain Women Safety Alert System')}>Project</button>
            <button type="button" onClick={() => send('Download resume')}>Resume</button>
            <button type="button" onClick={() => send('How can I contact Abirami?')}>Contact Abirami</button>
          </div>
          <form className="bot-form" onSubmit={(event) => { event.preventDefault(); send(); }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about the portfolio..." aria-label="Ask AbiBot" />
            <button type="button" className="bot-mic" onClick={listen} aria-label="Ask using voice">🎙</button>
            <button type="submit" aria-label="Send message">↑</button>
          </form>
        </div>
      )}
      <button type="button" className="bot-launcher" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label={isOpen ? 'Close AbiBot' : 'Open AbiBot'}>
        <span className="bot-sparkle">✦</span>
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path className="bot-hair" d="M24 42c-2-22 12-33 24-33s29 11 25 34c-5-8-14-12-25-12S30 35 24 42Z" />
          <path className="bot-face" d="M25 42c0-14 10-24 23-24s23 10 23 24v16c0 14-10 25-23 25S25 72 25 58Z" />
          <circle cx="39" cy="51" r="4" /><circle cx="57" cy="51" r="4" />
          <path className="bot-smile" d="M40 65c5 4 11 4 16 0" />
          <path className="bot-body" d="M24 91c2-15 11-22 24-22s22 7 24 22" />
          <circle className="bot-cheek" cx="32" cy="61" r="4" /><circle className="bot-cheek" cx="64" cy="61" r="4" />
        </svg>
        <span className="bot-label">Ask AbiBot</span>
      </button>
    </aside>
  );
}

function CustomCursor() {
  const cursorRef = useRef(null);
  const layerRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2, cx: 0, cy: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return; // skip on touch
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; // respect reduce motion

    const cursor = cursorRef.current;
    const layer = layerRef.current;
    if (!cursor || !layer) return;

    let lastParticle = 0;

    function rafLoop() {
      posRef.current.cx += (posRef.current.x - posRef.current.cx) * 0.18;
      posRef.current.cy += (posRef.current.y - posRef.current.cy) * 0.18;
      cursor.style.transform = `translate3d(${posRef.current.cx}px, ${posRef.current.cy}px, 0) translate(-50%,-50%)`;
      rafRef.current = requestAnimationFrame(rafLoop);
    }

    function spawnParticle(x, y, opts = {}) {
      const p = document.createElement('div');
      p.className = 'particle' + (opts.star ? ' star' : '');
      const size = opts.star ? 6 : 6 + Math.random() * 8;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${x - size / 2}px`;
      p.style.top = `${y - size / 2}px`;
      const dur = 600 + Math.random() * 600;
      p.style.animation = `particle-float ${dur}ms cubic-bezier(.2,.9,.2,1) forwards`;
      layer.appendChild(p);
      p.addEventListener('animationend', () => p.remove());
    }

    const onMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      const now = Date.now();
      if (now - lastParticle > 28) {
        const count = Math.random() > 0.88 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          const ox = e.clientX - (Math.random() * 12 - 6);
          const oy = e.clientY - (Math.random() * 12 - 6);
          spawnParticle(ox, oy, { star: Math.random() > 0.92 });
        }
        lastParticle = now;
      }
      cursor.classList.remove('hidden');
    };

    const onClick = (e) => {
      cursor.classList.add('clicking');
      setTimeout(() => cursor.classList.remove('clicking'), 160);
      const x = e.clientX, y = e.clientY;
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          const angle = Math.random() * Math.PI * 2;
          const r = 6 + Math.random() * 36;
          spawnParticle(x + Math.cos(angle) * r, y + Math.sin(angle) * r, { star: Math.random() > 0.7 });
        }, Math.random() * 120);
      }
      if (e.target.closest && (e.target.closest('nav') || e.target.matches('.nav-cta, .project-link, .navlinks a'))) {
        for (let i = 0; i < 12; i++) spawnParticle(x + (Math.random() * 40 - 20), y + (Math.random() * 40 - 20), { star: Math.random() > 0.6 });
      }
    };

    const onOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        cursor.classList.add('hidden');
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('click', onClick, { passive: true });
    window.addEventListener('mouseout', onOut);

    rafRef.current = requestAnimationFrame(rafLoop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('click', onClick);
      window.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden" aria-hidden="true">
        <div className="cursor-ring" />
        <div className="cursor-dot" />
      </div>
      <div ref={layerRef} className="particle-layer" aria-hidden="true" />
    </>
  );
}

function NavBar({ theme, onToggleTheme, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={isMobileMenuOpen ? 'nav-open' : ''}>
      <a href="#home" className="logo">AB<span>.</span></a>
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className="nav-panel">
        <ul className={`navlinks ${isMobileMenuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={closeMobileMenu}>{link.label}</a>
            </li>
          ))}
          <li><a href="/freelakhs" onClick={closeMobileMenu}>Freelakhs</a></li>
        </ul>
      </div>
      <div className="nav-actions">
        <button className={`theme-switch ${theme === 'light' ? 'is-light' : ''}`} onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          <span className="theme-sun">☀</span>
          <span className="theme-cloud">☁</span>
          <span className="theme-knob" />
        </button>
        <a href="#contact" className="nav-cta" onClick={closeMobileMenu}>Hire Me</a>
      </div>
    </nav>
  );
}

function Hero({ typedLines, currentText, step }) {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div>
          <div className="eyebrow reveal"><span className="dot" /> Open to work - Chennai, India</div>
          <h1 className="hero-title reveal">Hi, I'm Abirami.<br />I build <span className="accent">AI-powered</span> and full-stack systems.</h1>
          <p className="hero-sub reveal">
            B.Tech Information Technology graduate with AI/ML internship experience, strong web fundamentals, and practical projects in safety, analytics, bookings, and investment dashboards.
          </p>
          <div className="terminal reveal">
            {typedLines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
            {step < heroLines.length && (
              <div>{currentText}<span className="caret" /></div>
            )}
          </div>
          <div className="hero-actions reveal">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/assets/ABIRAMI__CV_2026.pdf" className="btn btn-secondary" download>Download CV</a>
          </div>
        </div>
        <StatusCard />
      </div>
    </section>
  );
}

function StatusCard() {
  return (
    <div className="status-card reveal">
      <div className="status-dots"><span /><span /><span /></div>
      <div className="status-body">
        <div><span className="k">candidate</span> <span className="v">@abirami</span></div>
        <div><span className="k">role_targets</span> <span className="tag">SDE Trainee - Data Analyst - QA - Full Stack</span></div>
        <div><span className="k">location</span> <span className="v">Chennai, Tamil Nadu</span></div>
        <div><span className="k">status</span> <span className="ok">ready_to_deploy</span></div>
        <div className="progress-row">
          <div className="k">Python / ML</div>
          <div className="bar"><i data-w="92" /></div>
        </div>
        <div className="progress-row">
          <div className="k">Web Development</div>
          <div className="bar"><i data-w="88" /></div>
        </div>
        <div className="progress-row">
          <div className="k">SQL & Data Analysis</div>
          <div className="bar"><i data-w="85" /></div>
        </div>
      </div>
    </div>
  );
}

function About({ activeProfile, profileMode, setProfileMode }) {
  return (
    <Section
      id="about"
      tag="// 01 about"
      title="A practical IT graduate who builds, tests, and learns fast."
      description="I am an enthusiastic IT student focused on web development, programming, software testing, and applied AI. My goal is to join a team where I can contribute from day one while growing into a stronger software professional."
    >
      <div className="about-overview reveal">
        {quickStats.map((stat) => (
          <div className="stat-tile" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="about-grid about-grid-pro">
        <div className="about-text reveal">
          <p>
            I am <strong>Abirami B</strong>, a B.Tech Information Technology student from A.V.C College of Engineering with a CGPA of <strong>8.1 / 10</strong>. I like projects where software has a visible outcome: safer alerts, clearer analytics, smoother bookings, and better user workflows.
          </p>
          <p>
            During my <strong>AI/ML internship at Annular Technologies</strong>, I worked on chatbot systems, OCR pipelines, and model improvement across NLP and computer-vision tasks. That experience helped me connect machine learning ideas with real product behavior.
          </p>
          <p>
            I am currently looking for entry-level opportunities in <strong>software engineering, data analysis, QA, or full-stack development</strong>, especially where I can combine disciplined implementation with curiosity and fast learning.
          </p>

          <div className="profile-switch" role="tablist" aria-label="Professional focus areas">
            {profileModes.map((mode) => (
              <button
                key={mode.id}
                className={profileMode === mode.id ? 'active' : ''}
                onClick={() => setProfileMode(mode.id)}
                type="button"
              >
                {mode.label}
              </button>
            ))}
          </div>

          <article className="focus-panel">
            <span className="panel-kicker">Selected focus</span>
            <h3>{activeProfile.title}</h3>
            <p>{activeProfile.text}</p>
            <div className="focus-points">
              {activeProfile.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </article>
        </div>

        <aside className="about-side reveal">
          <div className="mini-card">
            <span className="panel-kicker">Internship</span>
            <h3>AI/ML Intern</h3>
            <p>Annular Technologies Pvt Ltd, Chennai - 2025</p>
          </div>
          <div className="mini-card">
            <span className="panel-kicker">Recognition</span>
            <h3>SIH 2024 + TANSAM 2025</h3>
            <p>National-level innovation qualification and 3rd prize in a state-level hackathon.</p>
          </div>
          <div className="edu-list compact">
            {educationItems.map((item) => (
              <div className="edu-item" key={item.title}>
                <div className="row"><h4>{item.title}</h4><span className="date">{item.date}</span></div>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" tag="// 02 stack" title="Tools and concepts I work with.">
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div className="skill-cat reveal" key={skill.title}>
            <h4>{skill.title}</h4>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  const services = [
    {
      icon: '⌘',
      title: 'Web Development',
      text: 'Responsive, user-focused web interfaces and application flows built with HTML, CSS, JavaScript, React, Angular, TypeScript, and SQL-backed data handling.',
      tags: ['React', 'Angular', 'JavaScript'],
    },
    {
      icon: '◌',
      title: 'AI & Machine Learning',
      text: 'Practical AI/ML solutions including computer-vision, OCR, chatbot, prediction, and automation workflows using Python and modern ML tools.',
      tags: ['Python', 'TensorFlow', 'OpenCV'],
    },
    {
      icon: '↗',
      title: 'Data Analysis',
      text: 'Data preparation, feature engineering, analysis, and clear visual reporting to turn raw data into useful decisions and measurable outcomes.',
      tags: ['Pandas', 'NumPy', 'Power BI'],
    },
    {
      icon: '✓',
      title: 'QA & Testing',
      text: 'Quality-focused testing support for web applications, covering manual testing, issue analysis, validation, and user-flow checks.',
      tags: ['Manual Testing', 'Selenium', 'Debugging'],
    },
  ];

  return (
    <Section id="services" tag="// 03 services" title="How I can contribute to your team." description="Practical technical support across web development, AI/ML, data analysis, and quality assurance.">
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card reveal" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" tag="// 03 work" title="Projects with a real problem behind them." description="Each one solves something specific: safety, environment, travel, bookings, financial dashboards, or analytics.">
      <div className="project-demo-list">
        {projects.map((project) => (
          <ProjectDemo project={project} key={project.id} />
        ))}
      </div>
    </Section>
  );
}

function ProjectDemo({ project }) {
  return (
    <div className="project-demo reveal">
      <div className="demo-browser">
        <div className="demo-topbar">
          <span /><span /><span />
          <p>{project.github || 'Project preview'}</p>
        </div>
        <div className="demo-body">
          <div>
            <span className="panel-kicker">Project Demo</span>
            <h3>{project.title}</h3>
            <p>{project.demo}</p>
          </div>
          <div className="demo-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="demo-copy">
        <span className="panel-kicker">Selected Project</span>
        <h3>{project.label}</h3>
        <p>{project.text}</p>
        <div className="project-actions">
          <a href={project.github} className="project-link strong" target="_blank" rel="noreferrer">Open GitHub</a>
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <Section id="certifications" tag="// 04 certificates" title="Recognition that backs the resume." description="Courses, competitions, and technical participation that show consistent learning beyond regular academics.">
      <div className="cert-showcase reveal">
        <div className="cert-timeline">
          {certifications.map((cert, index) => (
            <article className="certificate-card" key={cert.title}>
              <div className="cert-index">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <span>{cert.type}</span>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p>{cert.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ResumeSection() {
  return (
    <Section id="resume" tag="// 05 resume" title="Resume and professional profile.">
      <div className="resume-preview reveal">
        <div className="resume-summary">
          <h2>Professional Profile</h2>
          <p>IT graduate focused on web development, AI/ML, data analysis, and testing with internship experience and practical project delivery.</p>
        </div>
        <a className="btn btn-primary resume-download" href="/assets/ABIRAMI__CV_2026.pdf" download>Download Resume</a>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" tag="// 06 experience" title="Where I have already delivered.">
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
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="contact-box reveal">
        <h2>Let's build something <span>real</span>, together.</h2>
        <p>I am actively looking for entry-level Software Engineer, Data Analyst, QA, or Full Stack roles in Chennai.</p>
        <div className="contact-links">
          <a href="mailto:abiramiabirami48351@gmail.com" className="btn btn-primary">Email Me</a>
          <a href="https://www.linkedin.com/in/abirami-b-0b7847334/" className="btn btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Abiramibalas?tab=repositories" className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
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
