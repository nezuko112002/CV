export const STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0a;
    --surface: #111111;
    --border: rgba(255,255,255,0.07);
    --text: #f0ede8;
    --muted: rgba(240,237,232,0.38);
    --accent: #c8f560;
    --accent2: #f5a623;
    --serif: 'Instrument Serif', Georgia, serif;
    --mono: 'DM Mono', monospace;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--mono);
    font-size: 13px;
    line-height: 1.7;
    cursor: none;
    overflow-x: hidden;
  }

  /* Custom cursor */
  .cursor-dot {
    position: fixed;
    width: 8px; height: 8px;
    background: var(--accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease, opacity 0.2s;
    transform: translate(-50%, -50%);
  }
  .cursor-ring {
    position: fixed;
    width: 36px; height: 36px;
    border: 1px solid rgba(200,245,96,0.4);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.08s linear, width 0.2s, height 0.2s, border-color 0.2s;
    transform: translate(-50%, -50%);
  }
  .cursor-ring.hover { width: 56px; height: 56px; border-color: var(--accent); }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); }

  /* Nav */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 24px 40px;
    border-bottom: 1px solid var(--border);
    background: rgba(10,10,10,0.8);
    backdrop-filter: blur(20px);
  }
  .nav-logo {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--serif);
    font-size: 18px;
    color: var(--text);
    text-decoration: none;
    font-style: italic;
  }
  .nav-logo-photo {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--border);
  }
  .nav-links {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 32px;
    list-style: none;
  }
  .nav-links a {
    color: var(--muted);
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: color 0.2s;
    position: relative;
  }
  .nav-links a::after {
    content: '';
    position: absolute; bottom: -2px; left: 0; right: 0; height: 1px;
    background: var(--accent);
    transform: scaleX(0);
    transition: transform 0.2s;
  }
  .nav-links a:hover { color: var(--text); }
  .nav-links a:hover::after { transform: scaleX(1); }
  .nav-status {
    display: flex; align-items: center; gap: 8px;
    font-size: 10px; color: var(--muted); letter-spacing: 0.05em;
  }
  .status-dot {
    width: 6px; height: 6px;
    background: var(--accent);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(1.3); }
  }

  /* Hero */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 40px 80px;
    position: relative;
    border-bottom: 1px solid var(--border);
    overflow: hidden;
    text-align: center;
  }
  .hero-bg-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(200,245,96,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,245,96,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  .hero-bg-orb {
    position: absolute;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(200,245,96,0.05) 0%, transparent 70%);
    top: -100px; right: -100px;
    pointer-events: none;
    animation: orbFloat 8s ease-in-out infinite;
  }
  @keyframes orbFloat {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-30px, 30px); }
  }
  .hero-eyebrow {
    font-size: 10px; letter-spacing: 0.3em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 32px;
    opacity: 0; animation: fadeUp 0.8s 0.2s forwards;
  }
  .hero-title {
    font-family: var(--serif);
    font-size: clamp(52px, 8vw, 120px);
    line-height: 0.92;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: var(--text);
    max-width: 1100px;
    margin-bottom: 48px;
    opacity: 0; animation: fadeUp 0.8s 0.4s forwards;
  }
  .hero-title em {
    font-style: italic;
    color: var(--accent);
  }
  .hero-sub {
    max-width: 540px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.8;
    margin-bottom: 56px;
    opacity: 0; animation: fadeUp 0.8s 0.6s forwards;
  }
  .hero-actions {
    display: flex; align-items: center; gap: 24px;
    opacity: 0; animation: fadeUp 0.8s 0.8s forwards;
  }
  .btn-primary {
    padding: 14px 28px;
    background: var(--accent);
    color: #0a0a0a;
    text-decoration: none;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 500;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(200,245,96,0.25);
  }
  .btn-ghost {
    padding: 14px 28px;
    border: 1px solid var(--border);
    color: var(--muted);
    text-decoration: none;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: border-color 0.2s, color 0.2s;
  }
  .btn-ghost:hover { border-color: var(--text); color: var(--text); }
  .btn-resume {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border-color: rgba(200,245,96,0.55);
    color: var(--accent);
    box-shadow: 0 0 0 rgba(200,245,96,0.35);
    animation: resumeGlow 2s ease-in-out infinite;
  }
  .btn-resume:hover {
    border-color: var(--accent);
    color: var(--text);
  }
  .resume-signal {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 0 rgba(200,245,96,0.6);
    animation: signalPulse 1.8s infinite;
  }
  @keyframes resumeGlow {
    0%, 100% { box-shadow: 0 0 0 rgba(200,245,96,0); }
    50% { box-shadow: 0 0 28px rgba(200,245,96,0.25); }
  }
  @keyframes signalPulse {
    0% { box-shadow: 0 0 0 0 rgba(200,245,96,0.65); }
    70% { box-shadow: 0 0 0 10px rgba(200,245,96,0); }
    100% { box-shadow: 0 0 0 0 rgba(200,245,96,0); }
  }

  .hero-scroll-indicator {
    position: absolute; bottom: 40px; right: 40px;
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    font-size: 9px; letter-spacing: 0.2em; color: var(--muted); text-transform: uppercase;
    opacity: 0; animation: fadeUp 0.8s 1.2s forwards;
  }
  .scroll-line {
    width: 1px; height: 48px;
    background: linear-gradient(to bottom, var(--accent), transparent);
    animation: scrollDrop 2s ease-in-out infinite;
  }
  @keyframes scrollDrop {
    0% { transform: scaleY(0); transform-origin: top; }
    50% { transform: scaleY(1); transform-origin: top; }
    51% { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Section base */
  section {
    border-bottom: 1px solid var(--border);
    padding: 80px 40px;
  }
  .section-inner { max-width: 1100px; margin: 0 auto; }
  .section-label {
    font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 64px;
    display: flex; align-items: center; gap: 16px;
  }
  .section-label::after {
    content: ''; flex: 1; height: 1px; background: var(--border);
  }

  /* About */
  .about-grid {
    display: grid; grid-template-columns: 1fr 1.6fr; gap: 80px; align-items: start;
  }
  .about-title {
    font-family: var(--serif);
    font-size: clamp(36px, 4vw, 56px);
    line-height: 1.05;
    font-weight: 400;
  }
  .about-photo-wrap {
    width: min(100%, 320px);
    margin-bottom: 28px;
    border: 1px solid var(--border);
    background: var(--surface);
    padding: 10px;
  }
  .about-photo {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: grayscale(10%);
  }
  .about-title em { font-style: italic; color: var(--accent); }
  .about-body { color: var(--muted); line-height: 1.9; }
  .about-body p + p { margin-top: 20px; }
  .about-stats {
    display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
    border: 1px solid var(--border);
    margin-top: 48px;
  }
  .stat {
    padding: 24px; border: 1px solid var(--border);
    background: var(--surface);
  }
  .stat-num {
    font-family: var(--serif);
    font-size: 40px;
    font-style: italic;
    color: var(--accent);
    line-height: 1;
    display: block;
  }
  .stat-label { font-size: 10px; letter-spacing: 0.1em; color: var(--muted); margin-top: 6px; }

  /* Skills */
  .skills-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
    border: 1px solid var(--border);
  }
  .skill-group {
    padding: 32px;
    background: var(--surface);
    border: 1px solid var(--border);
    transition: background 0.2s;
  }
  .skill-group:hover { background: rgba(200,245,96,0.04); }
  .skill-group-title {
    font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 20px;
  }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .skill-tag {
    padding: 4px 10px;
    border: 1px solid var(--border);
    font-size: 11px;
    color: var(--muted);
    transition: border-color 0.2s, color 0.2s;
  }
  .skill-group:hover .skill-tag { border-color: rgba(200,245,96,0.3); color: var(--text); }

  /* Experience */
  .exp-item {
    display: grid; grid-template-columns: 200px 1fr; gap: 48px;
    padding: 40px 0;
    border-bottom: 1px solid var(--border);
  }
  .exp-item:last-child { border-bottom: none; }
  .exp-meta { }
  .exp-date { font-size: 10px; color: var(--muted); letter-spacing: 0.05em; }
  .exp-company {
    font-family: var(--serif);
    font-size: 18px;
    font-style: italic;
    margin-top: 4px;
  }
  .exp-role { font-size: 11px; color: var(--accent); letter-spacing: 0.05em; margin-top: 4px; }
  .exp-desc { color: var(--muted); line-height: 1.8; }
  .exp-bullets { list-style: none; margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
  .exp-bullets li { padding-left: 16px; position: relative; color: var(--muted); font-size: 12px; }
  .exp-bullets li::before { content: '—'; position: absolute; left: 0; color: var(--accent); }

  /* Projects */
  .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; border: 1px solid var(--border); }
  .project-card {
    background: var(--surface);
    padding: 40px;
    border: 1px solid var(--border);
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
    group: true;
  }
  .project-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    transform: scaleX(0);
    transition: transform 0.4s;
  }
  .project-card:hover::before { transform: scaleX(1); }
  .project-card:hover { background: rgba(200,245,96,0.03); }
  .project-num { font-size: 10px; color: var(--muted); letter-spacing: 0.1em; margin-bottom: 20px; }
  .project-title {
    font-family: var(--serif);
    font-size: 26px;
    font-style: italic;
    margin-bottom: 12px;
    transition: color 0.2s;
  }
  .project-card:hover .project-title { color: var(--accent); }
  .project-desc { color: var(--muted); font-size: 12px; line-height: 1.8; margin-bottom: 24px; }
  .project-stack { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
  .stack-tag {
    font-size: 10px; letter-spacing: 0.05em;
    color: var(--accent); opacity: 0.7;
    border: 1px solid rgba(200,245,96,0.2);
    padding: 2px 8px;
  }
  .project-links { display: flex; gap: 16px; }
  .project-link {
    font-size: 11px; letter-spacing: 0.05em;
    color: var(--muted); text-decoration: none;
    display: flex; align-items: center; gap: 6px;
    transition: color 0.2s;
  }
  .project-link:hover { color: var(--accent); }
  .project-link-arrow { transition: transform 0.2s; }
  .project-link:hover .project-link-arrow { transform: translate(2px, -2px); }

  /* Contact */
  .contact-inner {
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end;
  }
  .contact-title {
    font-family: var(--serif);
    font-size: clamp(40px, 5vw, 72px);
    line-height: 1;
    font-weight: 400;
  }
  .contact-title em { font-style: italic; color: var(--accent); }
  .contact-links { display: flex; flex-direction: column; gap: 0; }
  .contact-link-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid var(--border);
    text-decoration: none; color: var(--text);
    transition: padding-left 0.2s;
  }
  .contact-link-row:hover { padding-left: 8px; }
  .contact-link-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); }
  .contact-link-value { font-family: var(--serif); font-style: italic; font-size: 16px; }
  .contact-link-arrow { color: var(--accent); font-size: 18px; transition: transform 0.2s; }
  .contact-link-row:hover .contact-link-arrow { transform: translate(4px, -4px); }

  /* Footer */
  footer {
    padding: 24px 40px;
    display: flex; align-items: center; justify-content: space-between;
    color: var(--muted); font-size: 10px; letter-spacing: 0.05em;
  }

  /* Fade-in on scroll */
  .reveal {
    opacity: 0; transform: translateY(32px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 768px) {
    nav { padding: 20px; }
    .hero { padding: 100px 24px 64px; }
    section { padding: 64px 24px; }
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .skills-grid { grid-template-columns: 1fr; }
    .exp-item { grid-template-columns: 1fr; gap: 16px; }
    .projects-grid { grid-template-columns: 1fr; }
    .contact-inner { grid-template-columns: 1fr; gap: 48px; }
    footer { padding: 20px 24px; flex-direction: column; gap: 8px; text-align: center; }
    body { cursor: auto; }
    .cursor-dot, .cursor-ring { display: none; }
  }
`;

