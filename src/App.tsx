import { useState, useEffect, useRef } from "react";
import type { MouseEvent as AnchorMouseEvent } from "react";
import { STYLE } from "./style";
import { portfolioData } from "./portfolioData";
import { publicUrl } from "./publicUrl";

const data = portfolioData;

const RESUME_FILE = "Juevesano Resume.pdf";

export default function App() {
  const cursorDot = useRef<HTMLDivElement | null>(null);
  const cursorRing = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);
  const resumeHref = publicUrl(RESUME_FILE);

  const handleResumeClick = async (e: AnchorMouseEvent<HTMLAnchorElement>) => {
    try {
      const res = await fetch(resumeHref);
      if (!res.ok) return;
      const blob = await res.blob();
      e.preventDefault();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "Juevesano-Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      /* fall through to normal link (new tab / open PDF) */
    }
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorDot.current) {
        cursorDot.current.style.left = e.clientX + "px";
        cursorDot.current.style.top = e.clientY + "px";
      }
      if (cursorRing.current) {
        cursorRing.current.style.left = e.clientX + "px";
        cursorRing.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);

    // Reveal on scroll
    const revealEls = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
    }, { threshold: 0.1 });
    revealEls.forEach(el => obs.observe(el));

    // Cursor hover on interactive els
    const hoverEls = document.querySelectorAll("a, button");
    hoverEls.forEach(el => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <style>{STYLE}</style>
      <div ref={cursorDot} className="cursor-dot" />
      <div ref={cursorRing} className={`cursor-ring ${hovering ? "hover" : ""}`} />

      {/* Nav */}
      <nav>
        <a href="#top" className="nav-logo">
          <img src={publicUrl(data.photo)} alt={data.name} className="nav-logo-photo" />
          <span>{data.name}</span>
        </a>
        <ul className="nav-links">
          {["About", "Skills", "Work", "Projects", "Contact"].map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section id="top" className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-bg-orb" />
        <p className="hero-eyebrow">Frontend Web Developer</p>
        <h1 className="hero-title">
          Crafting <em>interfaces</em><br />
          that feel<br />
          <em>inevitable</em>
        </h1>
        <p className="hero-sub">
          {data.bio[0]}
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
          <a
            href={resumeHref}
            className="btn-ghost btn-resume"
            download="Juevesano-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeClick}
          >
            <span className="resume-signal" />
            Download my resume here
          </a>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="section-inner">
          <p className="section-label reveal">About</p>
          <div className="about-grid">
            <div className="reveal">
              <div className="about-photo-wrap">
                <img src={publicUrl("2x2.png")} alt={data.name} className="about-photo" />
              </div>
              <h2 className="about-title">
                Crisjay S.<br /><em>Juevesano</em>
              </h2>
            </div>
            <div className="reveal" style={{transitionDelay: "0.15s"}}>
              <div className="about-body">
                {data.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="about-stats">
                {data.stats.map((s, i) => (
                  <div className="stat" key={i}>
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="section-inner">
          <p className="section-label reveal">Skills</p>
          <div className="skills-grid reveal">
            {data.skills.map((g, i) => (
              <div className="skill-group" key={i}>
                <p className="skill-group-title">{g.title}</p>
                <div className="skill-tags">
                  {g.tags.map((t, j) => <span className="skill-tag" key={j}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="work">
        <div className="section-inner">
          <p className="section-label reveal">Experience</p>
          {data.experience.map((e, i) => (
            <div className="exp-item reveal" key={i} style={{transitionDelay: `${i * 0.1}s`}}>
              <div className="exp-meta">
                <p className="exp-date">{e.date}</p>
                <p className="exp-company">{e.company}</p>
                <p className="exp-role">{e.role}</p>
              </div>
              <div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="section-inner">
          <p className="section-label reveal">Selected Projects</p>
          <div className="projects-grid reveal">
            {data.projects.map((p, i) => (
              <div className="project-card" key={i}>
                <p className="project-num">{p.num}</p>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s, j) => <span className="stack-tag" key={j}>{s}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.live} className="project-link">
                    Live <span className="project-link-arrow">↗</span>
                  </a>
                  <a href={p.code} className="project-link">
                    Code <span className="project-link-arrow">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="section-inner">
          <p className="section-label reveal">Contact</p>
          <div className="contact-inner">
            <div className="reveal">
              <h2 className="contact-title">
                Let's build<br />something<br /><em>great.</em>
              </h2>
            </div>
            <div className="contact-links reveal" style={{transitionDelay: "0.15s"}}>
              {data.contact.map((c, i) => (
                <a href={c.href} className="contact-link-row" key={i} target="_blank" rel="noreferrer">
                  <div>
                    <p className="contact-link-label">{c.label}</p>
                    <p className="contact-link-value">{c.value}</p>
                  </div>
                  <span className="contact-link-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>{data.name} · Frontend Developer</span>
        <span>© {new Date().getFullYear()} — Designed & built with care</span>
      </footer>
    </>
  );
}