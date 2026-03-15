<template>
  <div id="preloader">
    <div class="pre-logo">
      <span class="pre-name-1">CHRISTINE</span>
      <span class="pre-name-2">YUNUN.</span>
    </div>
    <div class="pre-sub"><span>Backend Developer</span></div>
    <div class="pre-line" id="preLine"></div>
  </div>

  <div id="cur"></div>
  <div id="cur-ring"></div>

  <Navbar />

  <section id="home">
    <Hero />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="portfolio">
    <Portfolio />
  </section>

  <section id="beyond">
    <Beyond />
  </section>

  <section id="resume">
    <Resume/>
  </section>

  <section id="contact">
    <Contact />
  </section>

  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Beyond from './components/Beyond.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Christine Mae Yunun | Back End Developer',
  meta: [
    { name: 'description', content: 'Christine Mae Yunun is a backend-focused web developer skilled in system architecture, database management, and RESTful API development.' },
    { name: 'keywords', content: 'back end developer, web developer, REST API, system architecture, database management' },
    { property: 'og:title', content: 'Christine Mae Yunun | Back End Developer' },
    { property: 'og:description', content: 'Backend-focused web developer skilled in building efficient, scalable, and maintainable applications.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: '' },
  ],
  link: [
    { rel: 'canonical', href: '' }
  ]
})

onMounted(() => {
  const preloader = document.getElementById('preloader')
  const preLine   = document.getElementById('preLine')
  const logoSpan1 = document.querySelector('.pre-name-1')
  const logoSpan2 = document.querySelector('.pre-name-2')
  const subSpan   = document.querySelector('.pre-sub span')

  setTimeout(() => {
    if (logoSpan1) logoSpan1.style.transform = 'translateY(0)'
    if (logoSpan2) logoSpan2.style.transform = 'translateY(0)'
    if (subSpan)   subSpan.style.transform   = 'translateY(0)'
    if (preLine)   preLine.style.width       = '160px'
  }, 100)

  setTimeout(() => {
    if (preloader) {
      preloader.classList.add('preloader--out')
      setTimeout(() => { preloader.style.display = 'none' }, 1100)
    }
  }, 2200)

  const cur  = document.getElementById('cur')
  const ring = document.getElementById('cur-ring')
  let mx = 0, my = 0, rx = 0, ry = 0

  document.addEventListener('mousemove', e => {
    mx = e.clientX
    my = e.clientY
  })

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'))
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'))
  })

  ;(function tick() {
    if (cur && ring) {
      cur.style.left  = mx + 'px'
      cur.style.top   = my + 'px'
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
    }
    requestAnimationFrame(tick)
  })()
})
</script>

<style>
:root {
  --bg: #f5f0e8;
  --bg-alt: #ede8df;
  --ink: #1a1a1a;
  --red: #EC4D37;
  --border: #d0c9bc;
  --card: #e8e2d8;
  --card-dark: #d4cec5;
  --glass-bg: rgba(245, 240, 232, 0.45);
}

html.dark {
  --bg: #141414;
  --bg-alt: #1e1e1e;
  --ink: #f0ebe3;
  --red: #EC4D37;
  --border: #2e2e2e;
  --card: #1e1e1e;
  --card-dark: #252525;
  --glass-bg: rgba(20, 20, 20, 0.55);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

/* ── Cursor ── */
body {
  cursor: none;
}

#cur,
#cur-ring {
  position: fixed;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

#cur {
  width: 8px;
  height: 8px;
  background: var(--red);
}

#cur-ring {
  width: 34px;
  height: 34px;
  border: 1.5px solid rgba(236, 77, 55, 0.4);
  z-index: 99998;
  transition: width 0.28s, height 0.28s;
}

body.hovering #cur-ring {
  width: 54px;
  height: 54px;
}

#preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 1.1s cubic-bezier(0.76, 0, 0.24, 1);
}

#preloader.preloader--out {
  transform: translateY(-100%);
}

.pre-logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(1rem, 6.5vw, 7rem);
  letter-spacing: -0.01em;
  color: var(--ink);
  overflow: visible;
  line-height: 1.15;
  text-align: center;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.pre-name-1,
.pre-name-2 {
  display: block;
  transform: translateY(110%);
  text-align: center;
  width: 100%;
  line-height: 1;
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.pre-name-2 {
  color: var(--red);
  transition-delay: 0.08s;
}

.pre-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink);
  margin-top: 0.8rem;
  overflow: hidden;
  opacity: 0.5;
}

.pre-sub span {
  display: inline-block;
  transform: translateY(100%);
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s;
}

.pre-line {
  width: 0;
  height: 1px;
  background: var(--red);
  margin-top: 1.5rem;
  transition: width 1s ease 0.35s;
}

section {
  opacity: 0;
  filter: blur(6px);
  transform: translateY(16px);
  transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease;
}

section.in-view {
  opacity: 1;
  filter: blur(0px);
  transform: translateY(0);
}

.card,
.cert__card,
.resume__entry {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

section.in-view .card:nth-child(1),
section.in-view .cert__card:nth-child(1),
section.in-view .resume__entry:nth-child(1) { transition-delay: 0.3s; }

section.in-view .card:nth-child(2),
section.in-view .cert__card:nth-child(2),
section.in-view .resume__entry:nth-child(2) { transition-delay: 0.45s; }

section.in-view .card:nth-child(3),
section.in-view .cert__card:nth-child(3),
section.in-view .resume__entry:nth-child(3) { transition-delay: 0.6s; }

section.in-view .card:nth-child(4),
section.in-view .cert__card:nth-child(4),
section.in-view .resume__entry:nth-child(4) { transition-delay: 0.75s; }

section.in-view .card,
section.in-view .cert__card,
section.in-view .resume__entry {
  opacity: 1;
  transform: translateY(0);
}

body {
  font-family: 'Syne', sans-serif;
  background: var(--bg);
  color: var(--ink);
  transition: background 0.3s ease, color 0.3s ease;
}

section#home {
  padding: 5rem clamp(2rem, 6vw, 8rem);
  min-height: 100vh;
}

section#about {
  padding: 0;
  min-height: auto;
}

section#skills {
  padding: 3rem 0 5rem;
  min-height: auto;
  margin-top: 2.2rem;
}

section#portfolio {
  padding: 0;
  min-height: auto;
  margin-top: 0.5rem;
  margin-bottom: 4rem;
}

section#resume {
  padding: 2rem 0 5rem;
  min-height: auto;
  margin-top: -2rem;
}

section#contact {
  padding: 0;
  min-height: auto;
  margin-top: -4rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  #preloader {
    padding: 0 1.5rem;
    justify-content: center;
    align-items: center;
  }

  .pre-logo {
    font-size: clamp(1rem, 6vw, 3rem);
    letter-spacing: -0.01em;
    text-align: center;
  }

  .pre-sub {
    font-size: 0.52rem;
    letter-spacing: 0.18em;
    text-align: center;
  }

  .pre-line {
    margin-top: 1.2rem;
  }
}

@media (max-width: 480px) {
  .pre-logo {
    font-size: clamp(1rem, 5.5vw, 2.2rem);
    letter-spacing: -0.01em;
  }

  .pre-sub {
    font-size: 0.48rem;
    letter-spacing: 0.14em;
  }

  .pre-line {
    margin-top: 1rem;
  }
}

@media (max-width: 360px) {
  .pre-logo {
    font-size: clamp(0.9rem, 5vw, 1.8rem);
  }

  .pre-sub {
    font-size: 0.44rem;
    letter-spacing: 0.1em;
  }
}
</style>