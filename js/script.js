const themeBtn = document.getElementById('themeBtn');
const chatInput = document.getElementById('chatInput');
const chatSubmit = document.getElementById('chatSubmit');
const chatResponse = document.getElementById('chatResponse');
const contactForm = document.getElementById('contactForm');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
  });
}

if (chatSubmit && chatInput && chatResponse) {
  chatSubmit.addEventListener('click', () => {
    const question = chatInput.value.trim();
    if (!question) {
      chatResponse.textContent = 'Please enter a question about my experience or projects.';
      return;
    }

    const answers = {
      skills: 'I build solutions with Python, JavaScript, React, Flask, and AI/ML tools.',
      projects: 'My portfolio includes a safety alert system, travel app, air quality monitor, and booking portal.',
      education: 'I completed B.Tech in IT with strong experience in AI and frontend development.',
      contact: 'You can reach me via email at abirami@example.com or the contact form on this site.',
    };

    const key = Object.keys(answers).find((term) => question.toLowerCase().includes(term));
    chatResponse.textContent = answers[key] || 'I am happy to answer project, skills, and contact questions. Try asking about projects or education.';
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Your message has been sent. (Demo mode)');
    contactForm.reset();
  });
}

const themeBtn = document.getElementById('themeBtn');
const chatInput = document.getElementById('chatInput');
const chatSubmit = document.getElementById('chatSubmit');
const chatResponse = document.getElementById('chatResponse');
const contactForm = document.getElementById('contactForm');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
  });
}

if (chatSubmit && chatInput && chatResponse) {
  chatSubmit.addEventListener('click', () => {
    const question = chatInput.value.trim();
    if (!question) {
      chatResponse.textContent = 'Please enter a question about my experience or projects.';
      return;
    }

    const answers = {
      skills: 'I build solutions with Python, JavaScript, React, Flask, and AI/ML tools.',
      projects: 'My portfolio includes a safety alert system, travel app, air quality monitor, and booking portal.',
      education: 'I completed B.Tech in IT with strong experience in AI and frontend development.',
      contact: 'You can reach me via email at abirami@example.com or the contact form on this site.',
    };

    const key = Object.keys(answers).find((term) => question.toLowerCase().includes(term));
    chatResponse.textContent = answers[key] || 'I am happy to answer project, skills, and contact questions. Try asking about projects or education.';
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Your message has been sent. (Demo mode)');
    contactForm.reset();
  });
}
