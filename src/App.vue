<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Satoshi-Variable', sans-serif;
  background: #f5f0e8;
  color: #111;
}

section {
  padding:90px 80px;
  min-height: 100vh;
}

section#about {
  padding: 0;
  min-height: auto;
}

section#skills {
  padding: 0;
  min-height: auto;
    margin-top: 4rem;  

}

section#portfolio {
  padding: 0;
  min-height: auto;
    margin-top: 4rem; 

}

section#resume {
  padding: 0;
  min-height: auto;
    margin-top: 4rem; 

}
</style>

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

