import { useEffect, useRef } from 'react';

const services = [
  { icon: '⚙', title: 'Business Automation', text: 'Automate repetitive tasks, streamline workflows, and improve day-to-day business efficiency.' },
  { icon: '⌘', title: 'Website Development', text: 'Responsive business sites, portfolios, landing pages, e-commerce solutions, and custom web applications.' },
  { icon: '⚡', title: 'Fast Delivery', text: 'An agile process built around clear milestones, quick turnaround, and dependable on-time delivery.' },
  { icon: '₹', title: 'Affordable Pricing', text: 'Transparent, budget-friendly packages designed to give growing businesses maximum value.' },
];

function Freelakhs() {
  return (
    <main className="freelakhs-page">
      <nav className="freelakhs-nav">
        <a className="freelakhs-logo" href="/">FREEL<span>AKHS</span></a>
        <div className="freelakhs-menu" aria-label="Freelakhs navigation">
          <a href="#freelakhs-services">Services</a>
          <a href="#freelakhs-why">Why us</a>
          <a href="#freelakhs-contact">Contact</a>
          <a className="freelakhs-back" href="/">← Portfolio</a>
        </div>
      </nav>

      <section className="freelakhs-hero">
        <p className="freelakhs-eyebrow"><i /> Affordable digital solutions for growing businesses</p>
        <h1>Transforming ideas into <span>smart digital solutions.</span></h1>
        <p className="freelakhs-lead">Freelakhs helps startups, small businesses, and entrepreneurs build a stronger digital presence with affordable, high-quality technology delivered fast.</p>
        <div className="freelakhs-actions">
          <a className="freelakhs-primary" href="#freelakhs-contact">Start a project</a>
          <a className="freelakhs-secondary" href="#freelakhs-services">Explore services</a>
        </div>
      </section>

      <section id="freelakhs-services" className="freelakhs-section">
        <p className="freelakhs-kicker">What we offer</p>
        <h2>Technology that works for your business.</h2>
        <div className="freelakhs-grid">
          {services.map((service) => (
            <article className="freelakhs-card" key={service.title}>
              <span>{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="freelakhs-why" className="freelakhs-section freelakhs-why">
        <div>
          <p className="freelakhs-kicker">Why Freelakhs</p>
          <h2>Built for businesses ready to grow.</h2>
        </div>
        <ul>
          <li>Affordable solutions for businesses of every size</li>
          <li>Fast, reliable project delivery</li>
          <li>Modern, responsive, and scalable websites</li>
          <li>Customised solutions for your business needs</li>
          <li>Dedicated support from idea to launch</li>
        </ul>
      </section>

      <section className="freelakhs-mission">
        <p className="freelakhs-kicker">Our mission</p>
        <h2>Empowering businesses with digital tools that simplify operations, strengthen their online presence, and accelerate growth.</h2>
      </section>

      <section id="freelakhs-contact" className="freelakhs-contact">
        <p className="freelakhs-kicker">Let’s build something great together</p>
        <h2>Ready to turn your idea into reality?</h2>
        <p>Whether you are launching a new business or upgrading an existing one, Freelakhs is ready to build technology that works for you.</p>
        <div className="freelakhs-actions">
          <a className="freelakhs-primary" href="mailto:abiramiabirami48351@gmail.com">Email Freelakhs</a>
          <a className="freelakhs-secondary" href="https://www.linkedin.com/in/abirami-b-0b7847334/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        </div>
      </section>

      <footer className="freelakhs-footer">© 2026 Freelakhs. Affordable digital solutions for growing businesses.</footer>
      <FreelakhsCursor />
    </main>
  );
}

function FreelakhsCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const cursor = cursorRef.current;
    const move = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      cursor.classList.add('is-visible');
    };
    const leave = () => cursor.classList.remove('is-visible');
    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  return <div ref={cursorRef} className="freelakhs-cursor" aria-hidden="true" />;
}

export default Freelakhs;
