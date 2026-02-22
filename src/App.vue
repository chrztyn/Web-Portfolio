<template>
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

  <section id="resume">
    <Resume/>
  </section>

  <section id="contact">
    <Contact />
  </section>

  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
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
    { property: 'og:url', content: 'https://yourdomain.com' },
  ],
  link: [
    { rel: 'canonical', href: 'https://yourdomain.com' }
  ]
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

body {
  font-family: 'Satoshi-Variable', sans-serif;
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
}

section#contact {
  padding: 0;
  min-height: auto;
  margin-top: 2rem;
  margin-bottom: 7rem;
}
</style>