import { Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BootComponent } from '../v2/boot.component';

@Component({
  selector: 'app-root-v3',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, BootComponent],
  template: `
    @if (!booted()) {
      <app-boot (done)="onBootDone()" />
    } @else {
      <div class="site">
        <div class="ambient-orb ambient-orb-1"></div>
        <div class="ambient-orb ambient-orb-2"></div>
        <div class="ambient-orb ambient-orb-3"></div>
        <header class="topbar">
          <span class="topbar-name">Pravin Mane</span>
          <nav class="topbar-nav">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main class="scroll-container" (scroll)="onScroll($event)">
          <section id="hero" class="section hero-section">
            <div class="section-particles">
              @for (p of sectionParticles.hero; track p) {
              <span class="sparkle" [style.left]="p.x" [style.top]="p.y" [style.animation-delay]="p.delay" [style.animation-duration]="p.duration" [style.width]="p.size" [style.height]="p.size" [style.opacity]="p.opacity"></span>
              }
            </div>
            <div class="hero-inner">
              <div class="hero-portrait-wrap">
                <img ngSrc="/assets/hero_image.webp" width="180" height="180" class="hero-portrait" alt="Pravin Mane" priority />
                <div class="hero-portrait-ring"></div>
              </div>
              <p class="hero-tag">Software Engineer · JP Morgan Chase</p>
              <h1 class="hero-name">Pravin Mane</h1>
              <p class="hero-line">I build enterprise systems that scale.</p>
              <p class="hero-sub">Previously at SLB. Now building enterprise systems at JP Morgan Chase & Co.</p>
              <div class="hero-scroll-hint">
                <span class="scroll-arrow">↓</span>
                <span>Scroll to explore</span>
              </div>
            </div>
            <div class="hero-bg-orb"></div>
          </section>

          <section id="about" class="section about-section">
            <div class="section-particles">
              @for (p of sectionParticles.about; track p) {
              <span class="sparkle" [style.left]="p.x" [style.top]="p.y" [style.animation-delay]="p.delay" [style.animation-duration]="p.duration" [style.width]="p.size" [style.height]="p.size" [style.opacity]="p.opacity"></span>
              }
            </div>
            <div class="section-inner">
              <h2 class="section-head">About</h2>
              <p class="section-lead">I believe great engineering is invisible. When code works beautifully, nobody notices — they just move faster, make fewer mistakes, and trust the system.</p>
              <p class="section-text">I've been building full-stack web applications professionally since 2020. At <strong>SLB</strong>, I worked across the entire stack — Angular and TypeScript on the frontend, .NET Core and C# on the backend — leading component architecture redesigns and building API-driven modules handling real-time data streams.</p>
              <p class="section-text">Since 2024, at <strong>JP Morgan Chase & Co.</strong>, I build and maintain full-stack Angular + .NET systems at banking scale, where correctness, performance, and reliability aren't optional. I ship features end-to-end — from database to UI.</p>
              <p class="section-text">Before all this, I was the kid in 2014 teaching myself HTML and CSS on a borrowed laptop. That same curiosity still drives me today.</p>
              <div class="about-stats">
                <div class="stat"><span class="stat-num">5+</span><span class="stat-label">Years Experience</span></div>
                <div class="stat"><span class="stat-num">2</span><span class="stat-label">Enterprise Companies</span></div>
                <div class="stat"><span class="stat-num">10+</span><span class="stat-label">Production Apps</span></div>
              </div>
            </div>
          </section>

          <section id="work" class="section work-section">
            <div class="section-particles">
              @for (p of sectionParticles.work; track p) {
              <span class="sparkle" [style.left]="p.x" [style.top]="p.y" [style.animation-delay]="p.delay" [style.animation-duration]="p.duration" [style.width]="p.size" [style.height]="p.size" [style.opacity]="p.opacity"></span>
              }
            </div>
            <div class="section-inner">
              <h2 class="section-head">Selected Work</h2>
              @for (p of projects; track p.title) {
              <a [href]="p.live" target="_blank" class="project-card">
                <div class="project-img-wrap">
                  <img [src]="p.image" [alt]="p.title" loading="lazy" />
                </div>
                <div class="project-info">
                  <h3 class="project-name">{{ p.title }}</h3>
                  <p class="project-desc">{{ p.description }}</p>
                  <div class="project-tech">
                    @for (t of p.tech; track t) { <span>{{ t }}</span> }
                  </div>
                </div>
              </a>
              }
            </div>
          </section>

          <section id="philosophy" class="section philosophy-section">
            <div class="section-particles">
              @for (p of sectionParticles.philosophy; track p) {
              <span class="sparkle" [style.left]="p.x" [style.top]="p.y" [style.animation-delay]="p.delay" [style.animation-duration]="p.duration" [style.width]="p.size" [style.height]="p.size" [style.opacity]="p.opacity"></span>
              }
            </div>
            <div class="section-inner">
              <h2 class="section-head">Build Philosophy</h2>
              <div class="phil-grid">
                <div class="phil-card"><span class="phil-num">01</span><p>Performance is a <strong>feature</strong>, not an optimization. Every kilobyte must justify itself.</p></div>
                <div class="phil-card"><span class="phil-num">02</span><p><strong>Simple scales.</strong> Complexity is the enemy of reliability.</p></div>
                <div class="phil-card"><span class="phil-num">03</span><p>Design communicates <strong>trust</strong>. Every pixel builds or erodes confidence.</p></div>
                <div class="phil-card"><span class="phil-num">04</span><p><strong>Ship incrementally.</strong> Perfect is the enemy of shipped.</p></div>
              </div>
            </div>
          </section>

          <section id="journey" class="section journey-section">
            <div class="section-particles">
              @for (p of sectionParticles.journey; track p) {
              <span class="sparkle" [style.left]="p.x" [style.top]="p.y" [style.animation-delay]="p.delay" [style.animation-duration]="p.duration" [style.width]="p.size" [style.height]="p.size" [style.opacity]="p.opacity"></span>
              }
            </div>
            <div class="section-inner">
              <h2 class="section-head">Journey</h2>
              <div class="journey-track">
                @for (step of journeySteps; track step.year; let i = $index) {
                <div class="journey-node" [class.active]="activeJourneyStep() === i" [class.past]="activeJourneyStep() > i">
                  <span class="jn-year">{{ step.year }}</span>
                  <div class="jn-content">
                    <h3>{{ step.title }}</h3>
                    <p>{{ step.desc }}</p>
                  </div>
                </div>
                }
                <div class="journey-line"></div>
                <div class="journey-progress" [style.height]="journeyProgress() + '%'"></div>
              </div>
            </div>
          </section>

          <section id="contact" class="section contact-section">
            <div class="section-particles">
              @for (p of sectionParticles.contact; track p) {
              <span class="sparkle" [style.left]="p.x" [style.top]="p.y" [style.animation-delay]="p.delay" [style.animation-duration]="p.duration" [style.width]="p.size" [style.height]="p.size" [style.opacity]="p.opacity"></span>
              }
            </div>
            <div class="section-inner">
              <h2 class="section-head">Let's Build</h2>
              <p class="contact-lead">Something people remember.</p>
              <a [href]="'mailto:'+email" class="contact-email">{{ email }}</a>
              <div class="contact-links">
                <a href="https://linkedin.com/in/pravinmane1" target="_blank">LinkedIn</a>
                <span>/</span>
                <a href="https://github.com/pravinmane1" target="_blank">GitHub</a>
                <span>/</span>
                <a href="https://x.com/pravin_mane1" target="_blank">X</a>
              </div>
              <p class="contact-loc">Pune, India</p>
            </div>
          </section>

          <footer class="footer">
            <p>Pravin Mane · {{ currentYear }}</p>
          </footer>
        </main>

        <div class="statusbar">
          <span>⎇ main</span>
          <span>Angular · .NET Core · TypeScript · JP Morgan Chase</span>
        </div>
      </div>
    }
  `,
  styles: [`
    @import "../../styles.scss";

    .site { height: 100vh; display: flex; flex-flow: column; background: $clr-bg; position: relative; overflow: hidden; }

    // Ambient background animations
    .site::before {
      content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
      background-image: radial-gradient(circle, $clr-border 1px, transparent 1px);
      background-size: 40px 40px;
      animation: gridDrift 30s linear infinite;
      opacity: 0.4;
    }
    @keyframes gridDrift {
      0% { background-position: 0 0; }
      100% { background-position: 40px 40px; }
    }

    .ambient-orb { position: fixed; border-radius: 50%; pointer-events: none; z-index: 0; filter: blur(80px); opacity: 0.12; }
    .ambient-orb-1 { width: 500px; height: 500px; background: $clr-accent; top: -10%; right: -15%; animation: orbFloat1 20s ease-in-out infinite; }
    .ambient-orb-2 { width: 400px; height: 400px; background: $clr-string; bottom: -10%; left: -10%; animation: orbFloat2 25s ease-in-out infinite; }
    .ambient-orb-3 { width: 300px; height: 300px; background: $clr-function; top: 40%; right: 20%; animation: orbFloat3 18s ease-in-out infinite; opacity: 0.08; }
    @keyframes orbFloat1 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(-40px,30px)} 66%{transform:translate(20px,-20px)} }
    @keyframes orbFloat2 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(30px,-25px)} 66%{transform:translate(-20px,35px)} }
    @keyframes orbFloat3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,-20px)} }

    .scroll-container { flex: 1; overflow-y: auto; scroll-behavior: smooth; position: relative; z-index: 1; }

    // Top bar
    .topbar { display: flex; justify-content: space-between; align-items: center; padding: 0 $space-xl; height: 48px; flex-shrink: 0; background: $clr-bg; border-bottom: 1px solid $clr-border; font-size: $fs-sm; position: relative; z-index: 10; }
    .topbar-name { font-weight: $fw-semibold; color: $clr-text-primary; }
    .topbar-nav { display: flex; gap: $space-lg; a { color: $clr-text-tertiary; text-decoration: none; font-size: $fs-sm; transition: color $duration-fast; &:hover { color: $clr-text-primary; } } }
    @media (max-width: 600px) { .topbar-nav { display: none; } }

    .section { padding: $space-5xl $space-xl; min-height: 60vh; display: flex; align-items: center; position: relative; overflow: hidden; }
    .section-inner { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; width: 100%; }
    .section-head { font-size: $fs-xxl; font-weight: $fw-bold; margin-bottom: $space-xl; color: $clr-text-primary; }

    // Hero
    .hero-section { min-height: 85vh; text-align: center; justify-content: center; }
    .hero-inner { position: relative; z-index: 2; }
    .hero-portrait-wrap { position: relative; display: inline-block; margin-bottom: $space-xl; }
    .hero-portrait { border-radius: 50%; object-fit: cover; position: relative; z-index: 1; box-shadow: 0 0 60px $clr-accent-muted; }
    .hero-portrait-ring { position: absolute; inset: -4px; border-radius: 50%; border: 2px solid $clr-accent; opacity: 0.3; z-index: 0; animation: ringPulse 3s ease-in-out infinite; }
    @keyframes ringPulse { 0%,100%{opacity:0.2;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.04)} }
    .hero-tag { font-family: $ff-mono; font-size: $fs-mono; color: $clr-accent; text-transform: uppercase; letter-spacing: $ls-mono; margin-bottom: $space-lg; }
    .hero-name { font-size: $fs-hero; font-weight: $fw-bold; line-height: $lh-tight; color: $clr-text-primary; margin-bottom: $space-md; }
    .hero-line { font-size: $fs-xl; color: $clr-text-secondary; margin-bottom: $space-sm; }
    .hero-sub { font-size: $fs-base; color: $clr-text-tertiary; margin-bottom: $space-2xl; max-width: 500px; margin-left: auto; margin-right: auto; }
    .hero-scroll-hint { display: flex; flex-flow: column; align-items: center; gap: $space-xs; color: $clr-text-tertiary; font-size: $fs-sm; animation: bounce 2s ease-in-out infinite; }
    .scroll-arrow { font-size: $fs-lg; }
    @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
    .hero-bg-orb { position: absolute; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, $clr-accent-muted, transparent 70%); top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none; z-index: 1; opacity: 0.5; }

    // Section sparkles
    .section-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; overflow: hidden; }
    .sparkle { position: absolute; border-radius: 50%; background: $clr-accent; animation: sparkleFloat 6s ease-in-out infinite; }
    .sparkle:nth-child(odd) { background: $clr-function; border-radius: 1px; animation: sparkleFloat 7s ease-in-out infinite reverse; }
    .sparkle:nth-child(3n) { background: $clr-string; width: 2px !important; height: 8px !important; border-radius: 1px; animation: sparkleDrift 5s ease-in-out infinite; }
    .sparkle:nth-child(5n+2) { background: $clr-accent; border-radius: 50%; animation: sparkleFloat 9s ease-in-out infinite; }
    @keyframes sparkleFloat {
      0%,100% { transform: translate(0,0) scale(1); opacity: 0; }
      20% { opacity: 0.8; }
      50% { transform: translate(30px,-40px) scale(1.5); opacity: 0.5; }
      80% { opacity: 0; transform: translate(-20px,-80px) scale(0.5); }
    }
    @keyframes sparkleDrift {
      0%,100% { transform: translate(0,0) rotate(0deg); opacity: 0; }
      25% { opacity: 0.7; transform: translate(-25px,-30px) rotate(90deg); }
      50% { opacity: 0.3; transform: translate(15px,-60px) rotate(180deg); }
      75% { opacity: 0.7; transform: translate(-10px,-20px) rotate(270deg); }
    }

    // Hero
    .section-lead { font-size: $fs-xl; color: $clr-text-secondary; line-height: $lh-relaxed; margin-bottom: $space-lg; }
    .section-text { font-size: $fs-base; color: $clr-text-secondary; line-height: $lh-relaxed; margin-bottom: $space-md; strong { color: $clr-text-primary; } }
    .about-stats { display: flex; gap: $space-2xl; margin-top: $space-xl; }
    .stat { display: flex; flex-flow: column; }
    .stat-num { font-family: $ff-mono; font-size: $fs-xxl; color: $clr-accent; font-weight: $fw-semibold; }
    .stat-label { font-size: $fs-xs; color: $clr-text-tertiary; margin-top: $space-xs; }

    // Work
    .project-card { display: flex; gap: $space-lg; padding: $space-lg; border: 1px solid $clr-border; border-radius: $radius-lg; margin-bottom: $space-md; text-decoration: none; color: inherit; transition: border-color $duration-fast $ease-out, transform $duration-fast $ease-out;
      &:hover { border-color: $clr-accent; transform: translateX(4px); }
    }
    .project-img-wrap { width: 180px; height: 120px; border-radius: $radius-md; overflow: hidden; flex-shrink: 0; background: $clr-surface;
      img { width: 100%; height: 100%; object-fit: cover; }
    }
    .project-name { font-size: $fs-lg; font-weight: $fw-semibold; margin-bottom: $space-xs; }
    .project-desc { font-size: $fs-sm; color: $clr-text-secondary; line-height: $lh-relaxed; margin-bottom: $space-sm; }
    .project-tech { display: flex; gap: $space-xs; flex-wrap: wrap; span { font-family: $ff-mono; font-size: 10px; color: $clr-accent; padding: 2px $space-sm; border: 1px solid $clr-accent-muted; border-radius: $radius-sm; } }
    @media (max-width: 600px) { .project-card { flex-flow: column; } .project-img-wrap { width: 100%; height: 180px; } }

    // Philosophy
    .phil-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: $space-md; }
    .phil-card { background: $clr-surface; border: 1px solid $clr-border; border-radius: $radius-lg; padding: $space-lg; transition: border-color $duration-fast;
      &:hover { border-color: $clr-accent; }
      p { font-size: $fs-sm; color: $clr-text-secondary; line-height: $lh-relaxed; strong { color: $clr-text-primary; } }
    }
    .phil-num { font-family: $ff-mono; font-size: $fs-lg; color: $clr-accent; display: block; margin-bottom: $space-sm; }
    @media (max-width: 600px) { .phil-grid { grid-template-columns: 1fr; } }

    // Journey
    .journey-track { position: relative; padding-left: $space-xl; }
    .journey-line { position: absolute; left: 7px; top: 0; bottom: 0; width: 2px; background: $clr-border; }
    .journey-progress { position: absolute; left: 7px; top: 0; width: 2px; background: $clr-accent; transition: height 0.3s ease-out; }
    .journey-node { position: relative; padding-bottom: $space-xl; padding-left: $space-lg; opacity: 0.4; transition: opacity $duration-normal;
      &.active { opacity: 1; }
      &.past { opacity: 0.7; }
      &::before { content: ''; position: absolute; left: -21px; top: 4px; width: 10px; height: 10px; border-radius: 50%; background: $clr-border; border: 2px solid $clr-bg; transition: background $duration-normal; }
      &.active::before, &.past::before { background: $clr-accent; }
    }
    .jn-year { font-family: $ff-mono; font-size: $fs-sm; color: $clr-accent; display: block; margin-bottom: $space-xs; }
    .jn-content h3 { font-size: $fs-base; font-weight: $fw-semibold; margin-bottom: $space-xs; }
    .jn-content p { font-size: $fs-sm; color: $clr-text-secondary; line-height: $lh-relaxed; }

    // Contact
    .contact-section { text-align: center; }
    .contact-lead { font-size: $fs-xxl; font-weight: $fw-bold; color: $clr-text-primary; margin-bottom: $space-xl; }
    .contact-email { font-family: $ff-mono; font-size: $fs-base; color: $clr-accent; text-decoration: none; padding: $space-sm $space-lg; border: 1px solid $clr-accent-muted; border-radius: $radius-lg; display: inline-block; margin-bottom: $space-lg; transition: all $duration-fast; &:hover { border-color: $clr-accent; background: $clr-accent-muted; } }
    .contact-links { display: flex; gap: $space-sm; justify-content: center; align-items: center; margin-bottom: $space-md; font-size: $fs-sm; a { color: $clr-text-tertiary; text-decoration: none; &:hover { color: $clr-text-primary; } } span { color: $clr-border-hover; } }
    .contact-loc { font-size: $fs-xs; color: $clr-text-tertiary; }

    // Footer
    .footer { text-align: center; padding: $space-xl; border-top: 1px solid $clr-border; font-size: $fs-xs; color: $clr-text-tertiary; }

    // Statusbar
    .statusbar { display: flex; justify-content: space-between; padding: 0 $space-md; height: 28px; align-items: center; background: $clr-accent; color: $clr-bg; font-family: $ff-mono; font-size: 11px; font-weight: $fw-medium; flex-shrink: 0; }
    @media (max-width: 600px) { .statusbar span:last-child { display: none; } }

    @media (max-width: 600px) { .section { padding: $space-3xl $space-md; } }
  `]
})
export class AppV3Component {
  booted = signal(false);
  activeJourneyStep = signal(0);
  currentYear = new Date().getFullYear();
  email = 'manepravin11122@gmail.com';

  particles = Array.from({ length: 48 }, () => ({
    x: Math.random() * 100 + '%',
    y: Math.random() * 100 + '%',
    delay: -(Math.random() * 8).toFixed(2) + 's',
    duration: (4 + Math.random() * 8).toFixed(2) + 's',
    size: (2 + Math.random() * 4).toFixed(0) + 'px',
    opacity: (0.15 + Math.random() * 0.35).toFixed(2),
  }));

  // Fixed particle sets per section (generated once, stable)
  sectionParticles = {
    hero: this.genParticles(),
    about: this.genParticles(),
    work: this.genParticles(),
    philosophy: this.genParticles(),
    journey: this.genParticles(),
    contact: this.genParticles(),
  };

  private genParticles() {
    return Array.from({ length: 12 }, () => ({
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      delay: -(Math.random() * 8).toFixed(2) + 's',
      duration: (4 + Math.random() * 8).toFixed(2) + 's',
      size: (2 + Math.random() * 4).toFixed(0) + 'px',
      opacity: (0.2 + Math.random() * 0.4).toFixed(2),
    }));
  }

  projects = [
    { title:'E-Commerce Storefront', description:'Production-quality e-commerce UI with lazy loading, reactive forms, and standalone components.', tech:['Angular','TypeScript','SCSS','RxJS'], live:'https://ecomstore.pravinmane.com/', image:'https://i.ibb.co/d22K19S/ecom.png' },
    { title:'Configurable Calculator', description:'Modular, configuration-driven architecture with dependency injection and full test coverage.', tech:['Angular','TypeScript','Jasmine','SCSS'], live:'https://calculator.pravinmane.com/', image:'https://i.ibb.co/hWjh0Fk/calc.png' },
    { title:'Interactive Card Input', description:'Pixel-perfect, accessible credit card component with real-time validation.', tech:['Angular','TypeScript','Reactive Forms','SCSS'], live:'https://pravinmane1.github.io/login-card-challenge/', image:'https://i.ibb.co/vQXdxLh/card.png' },
  ];

  journeySteps = [
    { year:'2014', title:'The Beginning', desc:'Self-taught HTML and CSS on a borrowed laptop. Discovered the thrill of building things for the web.' },
    { year:'2016', title:'Engineering Years', desc:'Studied computer engineering. Built and freelanced Android applications as a side interest.' },
    { year:'2020', title:'Full-Stack Developer · SLB', desc:'Built end-to-end features — Angular frontends with .NET Core backends. Led component architecture and introduced NgRx.' },
    { year:'2024', title:'Software Engineer II · JP Morgan Chase', desc:'Full-stack Angular + .NET at banking scale. Shipping accessible, performant systems from database to UI.' },
  ];

  onBootDone() { this.booted.set(true); }

  journeyProgress() {
    const total = this.journeySteps.length - 1;
    return total === 0 ? 0 : (this.activeJourneyStep() / total) * 100;
  }

  onScroll(event: Event) {
    const el = event.target as HTMLElement;
    const journeyEl = el.querySelector('#journey');
    if (!journeyEl) return;
    const rect = journeyEl.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const journeyTop = rect.top - elRect.top + el.scrollTop;
    const viewMid = el.scrollTop + el.clientHeight / 2;
    const steps = this.journeySteps.length;
    const journeyHeight = rect.height;
    const relativePos = (viewMid - journeyTop) / journeyHeight;
    const stepIndex = Math.min(steps - 1, Math.max(0, Math.floor(relativePos * steps)));
    this.activeJourneyStep.set(stepIndex);
  }
}
