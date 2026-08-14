import { useEffect, useRef, useState } from 'react';

const OPTIONS = [
  {
    label: 'About Abirami',
    icon: 'A',
    answer: 'Abirami is a B.Tech Information Technology graduate with an 8.1 CGPA. She enjoys building practical web, AI/ML, data analysis, and testing projects that solve real user problems.',
  },
  {
    label: 'About career',
    icon: '↗',
    answer: 'Abirami is looking for entry-level Software Development, Full-Stack Development, Data Analytics, or QA/Testing roles. She is based in Chennai and ready to contribute with practical project and internship experience.',
  },
  {
    label: 'About skills',
    icon: '⌘',
    answer: 'Abirami works with Python, Java, HTML, CSS, JavaScript, React, Angular, TypeScript, SQL, MongoDB, OpenCV, TensorFlow, Pandas, NumPy, Selenium, machine learning, data analysis, and manual testing.',
  },
  {
    label: 'Contact Abirami',
    icon: '✉',
    answer: 'You can reach Abirami at abiramiabirami48351@gmail.com. Her LinkedIn and GitHub links are available in the Contact section of this portfolio.',
  },
];

const WELCOME = { role: 'assistant', text: 'Hi, I am Abirami’s portfolio assistant. What would you like to know?' };

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  const selectOption = (option) => {
    setMessages((current) => [...current, { role: 'user', text: option.label }, { role: 'assistant', text: option.answer }]);
  };

  return (
    <div className="chatbot-root">
      {open && (
        <section className="chatbot-panel" role="dialog" aria-label="Abirami's portfolio assistant">
          <header className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-avatar" aria-hidden="true">A</span>
              <div><strong>Abirami’s assistant</strong><span><i /> Online now</span></div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant">×</button>
          </header>

          <div className="chatbot-messages" ref={messagesRef} aria-live="polite">
            {messages.map((message, index) => (
              <div className={`chatbot-row ${message.role}`} key={`${message.role}-${index}`}>
                {message.role === 'assistant' && <span className="chatbot-message-avatar" aria-hidden="true">A</span>}
                <p>{message.text}</p>
              </div>
            ))}
            <p className="chatbot-choice-prompt">What else would you like to know?</p>
            <div className="chatbot-options">
              {OPTIONS.map((option) => (
                <button key={option.label} type="button" onClick={() => selectOption(option)}>
                  <span aria-hidden="true">{option.icon}</span>{option.label}<b aria-hidden="true">→</b>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
      <button type="button" className="chatbot-fab" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? 'Close portfolio assistant' : 'Open portfolio assistant'}>
        <span aria-hidden="true">{open ? '×' : '✦'}</span><span>Ask me</span>
      </button>
    </div>
  );
}

export default Chatbot;
