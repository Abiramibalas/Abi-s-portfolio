<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact | Abirami Portfolio</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header class="site-header">
    <div class="logo">Abirami</div>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="projects.html">Projects</a>
      <a href="certifications.html">Certifications</a>
      <a href="resume.html">Resume</a>
      <a href="contact.html">Contact</a>
      <button id="themeBtn" class="theme-toggle">🌙</button>
    </nav>
  </header>

  <main>
    <section class="page-intro">
      <h1>Contact</h1>
      <p>Send a message directly from the portfolio.</p>
    </section>

    <section class="contact-form-card">
      <form id="contactForm">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="you@example.com" required />

        <label for="message">Message</label>
        <textarea id="message" placeholder="Your message..." required></textarea>

        <button type="submit" class="btn">Send Message</button>
      </form>
      <div class="contact-details">
        <p><strong>Email:</strong> abirami@example.com</p>
        <p><strong>Location:</strong> India</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>&copy; 2026 Abirami.</p>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
