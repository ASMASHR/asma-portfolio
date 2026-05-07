"use client";

import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [formStatus, setFormStatus] = useState('Envoyer →');

  // Animation au scroll (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Nav active highlight
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-links a');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach((link) => {
        (link as HTMLElement).style.color = link.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projectsData = [
    {
      icon: "🤖",
      name: "Chatbot IA Client",
      desc: "Chatbot intelligent intégrant les LLMs d'OpenAI, développé avec Node.js et React. Automatise les interactions clients et améliore l'engagement utilisateur.",
      tags: ["Node.js", "React", "OpenAI API"],
      delay: "0s"
    },
    {
      icon: "📱",
      name: "App Mobile Cross-Platform",
      desc: "Application React Native avec intégration complète Symfony backend. Performance UI/UX optimisée, déployée sur iOS et Android.",
      tags: ["React Native", "Symfony API"],
      delay: "0.1s"
    },
    {
      icon: "🔄",
      name: "Migration PHP → Symfony",
      desc: "Refactorisation complète d'applications PHP legacy vers des architectures Symfony modernes. Amélioration mesurable de la stabilité et de la productivité.",
      tags: ["Symfony 7", "Doctrine ORM", "PHPUnit"],
      delay: "0.2s"
    },
    {
      icon: "🏗️",
      name: "Ecosystèmes WordPress Enterprise",
      desc: "Plugins et thèmes WordPress custom avec PHP OOP avancé. Solutions enterprise robustes, maintainables et scalables pour workflows complexes.",
      tags: ["WordPress", "PHP OOP", "MySQL"],
      delay: "0.3s"
    }
  ];

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus('Envoi en cours...');

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setFormStatus('✓ Message envoyé !');
      (e.target as HTMLFormElement).reset();
    } else {
      setFormStatus('❌ Erreur, réessayez');
    }
  } catch (error) {
    setFormStatus('❌ Erreur de connexion');
  }

  setTimeout(() => setFormStatus('Envoyer →'), 5000);
};

  return (
    <div className="portfolio-container">
      <div className="grid-bg"></div>

      {/* --- NAV --- */}
      <nav role="navigation">
        <a href="#hero" className="nav-logo">AS<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:Asmasahraoui25@hotmail.fr" className="nav-cta">Me contacter</a>
      </nav>

      {/* --- HERO --- */}
      <section id="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">Disponible pour de nouveaux projets</div>
            <h1 className="hero-title">
              Asma<br />
              <span className="accent">Sahraoui</span><br />
              <span className="accent2" style={{ fontSize: '60%', letterSpacing: '-0.01em' }}>Full Stack Engineer</span>
            </h1>
            <p className="hero-subtitle">
              Développeuse Full Stack avec <strong>4+ ans d'expérience</strong> dans la création d'applications web scalables et d'APIs RESTful. Spécialisée en <strong>PHP Symfony</strong>, <strong>React</strong> et <strong>Node.js</strong>.
            </p>
            <div className="hero-stack">
              <span className="tag tag-green">Symfony</span>
              <span className="tag tag-green">PHP 8+</span>
              <span className="tag tag-cyan">React.js</span>
              <span className="tag tag-cyan">React Native</span>
              <span className="tag tag-purple">Node.js</span>
              <span className="tag tag-purple">REST API</span>
              <span className="tag tag-green">Docker</span>
            </div>
            <div className="hero-ctas">
              <a href="#contact" className="btn-primary">Discutons →</a>
              <a href="#experience" className="btn-outline">Mon parcours</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-card">
              <div className="code-header">
                <div className="code-dot"></div>
                <div className="code-dot"></div>
                <div className="code-dot"></div>
                <span className="code-filename">AsmaController.php</span>
              </div>
              <div className="code-body">
                <div className="code-comment">// Symfony 7 · REST API</div>
                <div><span className="code-keyword">#[Route</span>(<span className="code-str">'/api/asma'</span>)]</div>
                <div><span className="code-keyword">class</span> <span className="code-fn">AsmaController</span></div>
                <div>{"{"}</div>
                <div className="code-indent"><span className="code-keyword">private</span> <span className="code-var">$skills</span> = [</div>
                <div className="code-indent2"><span className="code-str">'Symfony'</span>, <span className="code-str">'React'</span>,</div>
                <div className="code-indent2"><span className="code-str">'Node.js'</span>, <span className="code-str">'Docker'</span>,</div>
                <div className="code-indent">];</div>
                <br />
                <div className="code-indent"><span className="code-keyword">#[GET]</span></div>
                <div className="code-indent"><span className="code-keyword">public function</span> <span className="code-fn">getData</span>()</div>
                <div className="code-indent">{"{"}</div>
                <div className="code-indent2"><span className="code-keyword">return</span> <span className="code-fn">JsonResponse</span>([</div>
                <div className="code-indent2" style={{ paddingLeft: '4rem' }}><span className="code-str">'experience'</span> ={">"} <span className="code-num">4</span>,</div>
                <div className="code-indent2" style={{ paddingLeft: '4rem' }}><span className="code-str">'status'</span> ={">"} <span className="code-str">'open'</span>,</div>
                <div className="code-indent2">]);</div>
                <div className="code-indent">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-header">
                <p className="section-label">// 01 — À propos</p>
                <h2 className="section-title">Architecte du<br />web backend</h2>
              </div>
              <div className="about-text fade-in">
                <p>Passionnée par la création de systèmes <strong>robustes et performants</strong>, je transforme des besoins métier complexes en architectures propres et maintenables.</p>
                <p>Mon expertise couvre l'ensemble du cycle de développement : de la conception d'<strong>APIs RESTful sécurisées</strong> avec Symfony jusqu'aux interfaces React Native.</p>
                <p>Ouverte à la <strong>relocalisation</strong> · Bilingue FR/EN · Méthodologies Agile/Scrum</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="stat-grid">
                <div className="stat-item">
                  <div className="stat-num">4+</div>
                  <div className="stat-label">Années d'expérience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">7+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">3</div>
                  <div className="stat-label">Entreprises</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">∞</div>
                  <div className="stat-label">Curiosité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="skills">
        <div className="container">
          <div className="section-header fade-in">
            <p className="section-label">// 02 — Compétences</p>
            <h2 className="section-title">Stack technique</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card fade-in">
              <div className="skill-icon">⚙️</div>
              <h3 className="skill-title">Backend Development</h3>
              <div className="skill-tags">
                {['PHP 8+', 'Symfony 5/6/7', 'Doctrine ORM', 'REST API', 'JWT Auth'].map(s => (
                  <span key={s} className="tag tag-green">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-card fade-in" style={{ transitionDelay: '0.1s' }}>
              <div className="skill-icon">⚛️</div>
              <h3 className="skill-title">Frontend & Mobile</h3>
              <div className="skill-tags">
                {['React.js', 'React Native', 'Node.js', 'State Management'].map(s => (
                  <span key={s} className="tag tag-cyan">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-card fade-in" style={{ transitionDelay: '0.2s' }}>
              <div className="skill-icon">🗄️</div>
              <h3 className="skill-title">Data & DevOps</h3>
              <div className="skill-tags">
                {['MySQL', 'MongoDB', 'Docker', 'Git', 'Agile'].map(s => (
                  <span key={s} className="tag tag-purple">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section id="experience">
        <div className="container">
          <div className="section-header fade-in">
            <p className="section-label">// 03 — Expérience</p>
            <h2 className="section-title">Parcours professionnel</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Déc. 2023 — Présent</div>
              <h3 className="timeline-title">Full Stack Developer — PHP/Symfony & React.js</h3>
              <p className="timeline-company">Synexta · Tunis, Tunisie</p>
              <ul className="timeline-list">
                <li>Architecture APIs RESTful avec Symfony (v5/6/7)</li>
                <li>Développement applications mobiles React Native</li>
                <li>Conception chatbot IA avec OpenAI APIs</li>
              </ul>
            </article>
            <article className="timeline-item fade-in">
              <div className="timeline-dot" style={{ background: 'var(--accent3)' }}></div>
              <div className="timeline-date" style={{ color: 'var(--accent3)' }}>Avr. 2022 — Nov. 2023</div>
              <h3 className="timeline-title">PHP Software Engineer</h3>
              <p className="timeline-company">STRATIS worldwide · Tunis</p>
              <ul className="timeline-list">
                <li>Développement WordPress custom (PHP OOP)</li>
                <li>Architecture de plugins sur mesure</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" aria-label="Projets">
        <div className="container">
          <div className="section-header fade-in">
            <p className="section-label">// 04 — Projets</p>
            <h2 className="section-title">Réalisations clés</h2>
          </div>

          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <article 
                key={index} 
                className="project-card fade-in" 
                style={{ transitionDelay: project.delay }}
              >
                <div className="project-top">
                  <div className="project-icon">{project.icon}</div>
                  {project.name === "Chatbot IA Client" && (
                    <div className="project-links">
                      <span className="tag tag-purple">OpenAI</span>
                    </div>
                  )}
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="skill-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className={`tag ${
                        tag.includes('React') ? 'tag-cyan' : 
                        tag.includes('Symfony') || tag.includes('PHP') || tag.includes('WordPress') ? 'tag-green' : 
                        'tag-purple'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact">
        <div className="container">
          <div className="contact-inner">
            <div>
              <div className="section-header fade-in">
                <p className="section-label">// 05 — Contact</p>
                <h2 className="section-title">Travaillons<br />ensemble</h2>
              </div>
              <div className="contact-links fade-in">
                <a href="mailto:Asmasahraoui25@hotmail.fr" className="contact-link">
                  <span className="contact-link-icon">✉️</span> Asmasahraoui25@hotmail.fr
                </a>
                <a href="https://linkedin.com/in/asmashr" target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-link-icon">💼</span> LinkedIn
                </a>
              </div>
            </div>
            <form className="contact-form fade-in" onSubmit={handleSubmit}>
              <div className="form-group">
  <label className="form-label" htmlFor="name">Nom</label>
  <input className="form-input" type="text" id="name" name="name" required />
</div>
<div className="form-group">
  <label className="form-label" htmlFor="email">Email</label>
  <input className="form-input" type="email" id="email" name="email" required />
</div>
<div className="form-group">
  <label className="form-label" htmlFor="message">Message</label>
  <textarea className="form-textarea" id="message" name="message" required></textarea>
</div>
              <button type="submit" className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                {formStatus}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer style={{ padding: '2rem 3rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <p className="footer-text">© 2026 <span>Asma Sahraoui</span> — Built with Next.js</p>
      </footer>
    </div>
  );
};

export default Portfolio;