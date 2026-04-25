/* ===== RESET & VARIABLES ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #0a0a0f;
  --surface: #13131a;
  --border: #1e1e2e;
  --accent: #00e5a0;
  --accent2: #00b8ff;
  --text: #e8e8f0;
  --muted: #6b6b85;
  --card: #0f0f18;
  --radius: 16px;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

/* ===== NAV ===== */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 5%;
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  color: var(--accent);
  letter-spacing: -0.5px;
}

.logo span { color: var(--text); }

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
}

nav ul a {
  text-decoration: none;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

nav ul a:hover { color: var(--accent); }

.nav-cta {
  background: var(--accent) !important;
  color: #000 !important;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-weight: 700 !important;
}

.nav-cta:hover { background: #00c987 !important; }

/* ===== HERO ===== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 5% 5rem;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(0,229,160,0.08) 0%, transparent 70%);
  top: 0; left: -10%;
  pointer-events: none;
}

.hero-glow2 {
  position: absolute;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(0,184,255,0.06) 0%, transparent 70%);
  bottom: 10%; right: 5%;
  pointer-events: none;
}

.hero-content { max-width: 720px; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0,229,160,0.08);
  border: 1px solid rgba(0,229,160,0.2);
  color: var(--accent);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  letter-spacing: 0.04em;
}

.badge-dot {
  width: 7px; height: 7px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.4); }
}

h1 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -2px;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 1.1rem;
  color: var(--muted);
  max-width: 520px;
  margin-bottom: 2.5rem;
  font-weight: 300;
  line-height: 1.8;
}

.hero-btns {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ===== BUTTONS ===== */
.btn-primary {
  display: inline-block;
  background: var(--accent);
  color: #000;
  padding: 0.85rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #00c987;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,229,160,0.3);
}

.btn-outline {
  display: inline-block;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.85rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

/* ===== STATS ===== */
.stats {
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}

.stat-num {
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.2rem;
  letter-spacing: 0.03em;
}

/* ===== SECTIONS ===== */
section {
  padding: 6rem 5%;
}

.section-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.8rem;
}

h2 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 1rem;
}

.section-sub {
  color: var(--muted);
  font-size: 1rem;
  max-width: 500px;
  margin-bottom: 3rem;
  font-weight: 300;
}

/* ===== ABOUT ===== */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.about-img-wrap { position: relative; }

.about-img-placeholder {
  width: 100%;
  aspect-ratio: 4/5;
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: var(--muted);
  font-size: 0.9rem;
}

.avatar-icon {
  font-size: 4rem;
}

.about-img-placeholder small {
  font-size: 0.72rem;
  opacity: 0.5;
}

.accent-box {
  position: absolute;
  bottom: -18px; right: -18px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: #000;
  padding: 1rem 1.4rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.85rem;
  font-family: 'Syne', sans-serif;
}

.about-text p {
  color: var(--muted);
  margin-bottom: 1.2rem;
  font-weight: 300;
  line-height: 1.8;
}

/* ===== SKILLS ===== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  margin-top: 1rem;
}

.skill-chip {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.9rem 0.5rem;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
}

.skill-chip:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-3px);
}

.skill-chip .icon {
  font-size: 1.4rem;
  display: block;
  margin-bottom: 0.4rem;
}

/* ===== SERVICES ===== */
.services-section {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.2rem;
}

.service-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  opacity: 0;
  transition: opacity 0.25s;
}

.service-card:hover {
  border-color: rgba(0,229,160,0.25);
  transform: translateY(-4px);
}

.service-card:hover::before { opacity: 1; }

.service-icon {
  font-size: 2rem;
  margin-bottom: 1.2rem;
  display: block;
}

.service-card h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}

.service-card p {
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 300;
  line-height: 1.7;
}

/* ===== PROJECTS ===== */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: all 0.25s;
}

.project-card:hover {
  border-color: rgba(0,229,160,0.25);
  transform: translateY(-4px);
}

.dashed-card {
  border-style: dashed;
  opacity: 0.65;
}

.project-thumb {
  height: 170px;
  background: linear-gradient(135deg, var(--surface), var(--border));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  border-bottom: 1px solid var(--border);
}

.project-body { padding: 1.5rem; }

.project-tag {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.project-body h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.project-body p {
  color: var(--muted);
  font-size: 0.87rem;
  margin-bottom: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
}

.project-links {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.project-links a {
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.45rem 1rem;
  border-radius: 6px;
  transition: all 0.2s;
}

.link-demo {
  background: var(--accent);
  color: #000;
}

.link-demo:hover { background: #00c987; }

.link-wa {
  border: 1px solid var(--border);
  color: var(--text);
}

.link-wa:hover {
  border-color: #25D366;
  color: #25D366;
}

/* ===== CTA ===== */
.cta-section {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  text-align: center;
}

.cta-section h2 { margin-bottom: 1rem; }
.cta-section p {
  color: var(--muted);
  margin-bottom: 2rem;
  font-weight: 300;
}

.cta-btns {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ===== CONTACT ===== */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-bottom: 1rem;
  text-decoration: none;
  color: var(--text);
  transition: all 0.2s;
}

.contact-item:hover { border-color: var(--accent); }

.contact-icon {
  width: 42px; height: 42px;
  background: rgba(0,229,160,0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.contact-label {
  font-size: 0.7rem;
  color: var(--muted);
  margin-bottom: 0.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.contact-val {
  font-weight: 500;
  font-size: 0.9rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.9rem 1.2rem;
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--accent);
}

.contact-form textarea {
  height: 130px;
  resize: vertical;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--muted);
}

.send-btn { text-align: center; }

/* ===== FOOTER ===== */
footer {
  padding: 1.8rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.82rem;
  flex-wrap: wrap;
  gap: 1rem;
}

footer a {
  color: var(--accent);
  text-decoration: none;
}

/* ===== FLOATING WHATSAPP ===== */
.wa-float {
  position: fixed;
  bottom: 1.8rem;
  right: 1.8rem;
  width: 54px; height: 54px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 20px rgba(37,211,102,0.4);
  z-index: 200;
  text-decoration: none;
  transition: transform 0.2s;
}

.wa-float:hover { transform: scale(1.1); }

/* ===== ANIMATIONS ===== */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  nav ul { display: none; }
  .about-grid { grid-template-columns: 1fr; gap: 3rem; }
  .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .stats { gap: 1.5rem; }
  h1 { letter-spacing: -1px; }
  section { padding: 4rem 5%; }
  .accent-box { bottom: -14px; right: -10px; }
}
