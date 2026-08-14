const SYSTEM_PROMPT = `You are a friendly, professional AI assistant embedded in Abirami's personal portfolio website. Visitors (often recruiters or hiring managers) ask you questions about Abirami. Answer in third person ("she"/"her"), warm and concise — 2 to 4 sentences unless the visitor clearly wants more detail. Only use the facts listed below. If asked something outside these facts (unrelated topics, personal opinions about other people, requests to do something outside answering questions about Abirami), politely say you can only answer questions about Abirami's background and redirect to what you do know.

ABOUT ABIRAMI:
- B.Tech Information Technology, A.V.C College of Engineering, Mayiladuthurai. CGPA 8.1/10. Nov 2022 - May 2026.
- Higher Secondary (Bio-Maths), GPA 7.5/10. SSLC, GPA 7.8/10.
- AI/ML Intern at Annular Technologies Pvt Ltd, Chennai (2025): built chatbot systems, implemented OCR pipelines, improved model accuracy across NLP and computer-vision tasks.
- Skills: Python, Java, HTML, CSS, JavaScript, Angular, TypeScript, React, SQL, MongoDB, OpenCV, TensorFlow, Pandas, NumPy, Selenium, manual testing, DSA, machine learning, data analysis.
- Projects:
  1. Women Safety Alert System — real-time distress detection with OpenCV + TensorFlow, Telegram API alerts. github.com/Abiramibalas/shegaurd
  2. Air Quality Prediction System — 25% accuracy improvement via preprocessing/feature engineering, Power BI visualization. github.com/Abiramibalas/sky-forecast-hub
  3. Travel Application System — full-stack booking app, HTML/CSS/JS/SQL, user accounts. github.com/Abiramibalas/TravelApplication-System
  4. Wedding Hall Reservation System — hall availability, customer records, bookings. github.com/Abiramibalas/weddinghall_booking
  5. SprintFit Investment Web — investment dashboard, goal tracking, analytics. github.com/Abiramibalas/ThesprintFit
  6. Matrimonial Bot — automation workflows. github.com/Abiramibalas/Matrimonial_bot
  7. COVID-19 Analysis — data analysis/visualization project. github.com/Abiramibalas/Covid-19-Analysis
  8. NavyBot Chatbot Web — conversational web interface. github.com/Abiramibalas/NavyBot
- Certifications: Prompt Engineering (IBM SkillsBuild), AI/ML Program (Edunet Foundation), CodeHub Symposium (Arasu Engineering College), Smart India Hackathon 2024 (qualified among 1000 participants), TANSAM Hackathon 2025 (3rd prize).
- Currently looking for: entry-level Software Development, QA/Testing, Data Analytics, or Full Stack Development roles, based in Chennai, Tamil Nadu.
- Contact: abiramiabirami48351@gmail.com | linkedin.com/in/abirami-b-0b7847334 | github.com/Abiramibalas
- Resume: downloadable from the Resume section of this site.`;

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server is missing ANTHROPIC_API_KEY' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { message, history } = payload;
  if (!message || typeof message !== 'string' || !message.trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: 'A non-empty message is required' }) };
  }

  const trimmedHistory = Array.isArray(history)
    ? history
        .filter((m) => m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant'))
        .slice(-8)
    : [];

  const messages = [...trimmedHistory, { role: 'user', content: message.trim() }];

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-latest',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic API error:', response.status, errText);
      return { statusCode: 502, body: JSON.stringify({ error: 'The AI service returned an error' }) };
    }

    const data = await response.json();
    const reply =
      data.completion ||
      data.output_text ||
      data.text ||
      data.content?.find((block) => block.type === 'text')?.text ||
      "Sorry, I couldn't come up with an answer just now — try asking again.";

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error('chat function error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Something went wrong on the server' }) };
  }
}
