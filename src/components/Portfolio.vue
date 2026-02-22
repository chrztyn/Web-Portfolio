<template>
  <section class="portfolio" id="portfolio" aria-label="Portfolio">
    <div class="portfolio__inner">

      <div class="portfolio__tabs" role="tablist">
        <button
          class="portfolio__tab"
          :class="{ active: activeTab === 'projects' }"
          @click="activeTab = 'projects'"
          role="tab"
        >PROJECTS</button>
        <button
          class="portfolio__tab"
          :class="{ active: activeTab === 'certifications' }"
          @click="activeTab = 'certifications'"
          role="tab"
        >CERTIFICATIONS</button>
      </div>
      <hr class="portfolio__divider" />

      <div v-if="activeTab === 'projects'" class="portfolio__projects">
        <div class="stack-container">
          <div
            class="card"
            v-for="(project, index) in projects"
            :key="project.title"
            :style="{ zIndex: projects.length - index }"
          >
            <div class="card__img">
              <img :src="project.image" :alt="project.title" />
              <div class="card__img-overlay">
                <span class="card__img-label">{{ project.tech }}</span>
              </div>
            </div>
            <div class="card__body">
              <p class="card__tech">{{ project.tech }}</p>  <!-- add this here -->
              <h3 class="card__title">{{ project.title }}</h3>
              <p class="card__desc">{{ project.description }}</p>
              <a :href="project.link" class="card__btn" target="_blank" rel="noopener">
                <span>View Project</span>
                <span class="card__btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'certifications'" class="portfolio__certs">
        <p class="certs__category-label">TECHNICAL &amp; DEVELOPMENT</p>
        <div class="certs__grid">
          <div class="cert__card" v-for="cert in techCerts" :key="cert.title">
            <div class="cert__accent"></div>
            <div class="cert__body">
              <h3 class="cert__title">{{ cert.title }}</h3>
              <p class="cert__issuer">{{ cert.issuer }}</p>
              <p class="cert__date">{{ cert.date }}</p>
              <a :href="cert.link" target="_blank" rel="noopener" class="cert__btn">
                <span>View Certificate</span>
                <span class="cert__btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        <p class="certs__category-label" style="margin-top: 2rem;">DESIGN / UX</p>
        <div class="certs__grid">
          <div class="cert__card" v-for="cert in designCerts" :key="cert.title">
            <div class="cert__accent"></div>
            <div class="cert__body">
              <h3 class="cert__title">{{ cert.title }}</h3>
              <p class="cert__issuer">{{ cert.issuer }}</p>
              <p class="cert__date">{{ cert.date }}</p>
              <a :href="cert.link" target="_blank" rel="noopener" class="cert__btn">
                <span>View Certificate</span>
                <span class="cert__btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SplitSmart from '../assets/images/splitsmart.png'
import NonTaMangan from '../assets/images/nontamangan.png'
import BuffsChicken from '../assets/images/buffschicken.png'
import Pelikula from '../assets/images/pelikula.png'

const activeTab = ref('projects')

const projects = [
  {
    title: 'SplitSmart',
    tech: 'Node.js · Express.js · MongoDB',
    description: 'A web app that automates group expense tracking with RESTful APIs, database architecture, authentication, and CRUD operations.',
    image: SplitSmart,
    link: '#'
  },
  {
    title: 'Non Ta Mangan',
    tech: 'PHP · MySQL · JavaScript',
    description: 'A restaurant picker and rating web app with a spin-the-wheel feature, rating system, and user account management.',
    image: NonTaMangan,
    link: '#'
  },
  {
    title: 'Pelikula',
    tech: 'HTML · CSS · JavaScript',
    description: 'A static web prototype for browsing, rating, and reviewing movies with a focus on UI consistency and responsive layout.',
    image: Pelikula,
    link: '#'
  },
  {
    title: 'BuffsChicken',
    tech: 'Vue · Nuxt · Express.js',
    description: 'An SEO-focused e-commerce website for a chicken brand, built with Nuxt for server-side rendering and Express.js for the backend API.',
    image: BuffsChicken,
    link: '#'
  },
]

const techCerts = [
  { title: 'Back-End Development and APIs', issuer: 'FreeCodeCamp', date: 'Oct 2025', link: '#' },
  { title: 'Legacy JavaScript Algorithms and Data Structures', issuer: 'FreeCodeCamp', date: 'Sep 2025', link: '#' },
  { title: 'JavaScript Essentials', issuer: 'Cisco', date: 'Oct 2024', link: '#' },
  { title: 'CompTIA IT Fundamentals+ (ITF+)', issuer: 'CompTIA', date: 'Nov 2023', link: '#' },
]

const designCerts = [
  { title: 'Design Thinking for Beginners', issuer: 'Simplilearn', date: 'Jul 2025', link: '#' },
  { title: 'Introduction to Graphic Design & Basics of UI/UX', issuer: 'Simplilearn', date: 'Aug 2025', link: '#' },
  { title: 'Legacy Responsive Design', issuer: 'FreeCodeCamp', date: 'Sept 2024', link: '#' },
]
</script>

<style scoped>
.portfolio {
  background: var(--bg);
  min-height: 100vh;
  padding: 4rem 0 5rem;
  transition: background 0.3s ease;
}

.portfolio__inner {
  width: 100%;
  padding-left: clamp(2rem, 5vw, 5rem);
  padding-right: clamp(2rem, 5vw, 5rem);
}

.portfolio__tabs {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.portfolio__tab {
  background: none;
  border: none;
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--ink);
  opacity: 0.35;
  cursor: pointer;
  padding: 0 0 0.5rem;
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease;
}

.portfolio__tab.active {
  opacity: 1;
  color: var(--red);
  border-bottom: 2px solid var(--red);
}

.portfolio__tab:hover {
  opacity: 0.7;
  transform: translateY(-2px);
}

.portfolio__divider {
  border: none;
  border-top: 1.5px solid var(--border);
  margin: 0 0 3rem;
  transition: border-color 0.3s ease;
}

.portfolio__projects {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stack-container {
  display: flex;
  align-items: center;
  position: relative;
  height: 480px;
  padding: 0 1rem;
}

.card {
  position: relative;
  width: 300px;
  height: 440px;
  margin-left: -160px;
  border-radius: 16px;
  background: var(--card);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1),
              box-shadow 0.4s ease, background 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  cursor: pointer;
}

.card:first-child { 
  margin-left: 0; 
}

.card:hover {
  transform: translateY(-16px) rotate(-1deg);
  z-index: 10 !important;
  box-shadow: 0 28px 56px rgba(0, 0, 0, 0.22), 0 0 0 1.5px var(--red);
}

.card:hover ~ .card { 
  transform: translateX(160px); 
}

.stack-container:hover .card:not(:hover):has(~ .card:hover) {
  transform: translateX(-30px);
}

.card__img {
  width: calc(100% - 2rem);
  height: 170px;
  margin: 1rem auto 0;
  border-radius: 8px;
  overflow: hidden;
}

.card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s ease, filter 0.4s ease;
}

.card:hover .card__img img {
  transform: scale(1.07);
  filter: brightness(0.85);
}

.card__tech {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--red);
  letter-spacing: 0.05em;
  margin: 0;
}

.card__img-label {
  background: rgba(236, 77, 55, 0.9);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.3em 0.8em;
  border-radius: 9999px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.card__body {
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.card__title {
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  transition: color 0.2s ease;
}

.card:hover .card__title { 
  color: var(--red); 
}

.card__desc {
  font-size: 0.73rem;
  line-height: 1.55;
  color: var(--ink);
  opacity: 0.65;
  margin: 0;
  flex: 1;
}

.card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--ink);
  color: var(--bg);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  align-self: flex-start;
  transition: background 0.2s ease, gap 0.2s ease, color 0.2s ease;
}

.card__btn:hover {
  background: var(--red);
  color: #fff;
  gap: 0.6rem;
}

.card__btn-arrow {
   transition: transform 0.2s ease; 
}

.card__btn:hover .card__btn-arrow {
  transform: translate(2px, -2px); 
}

.certs__category-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--ink);
  opacity: 0.5;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

.certs__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.cert__card {
  border: 1.5px solid var(--border);
  border-radius: 12px;
  padding: 1.2rem;
  position: relative;
  overflow: hidden;
  background: var(--bg);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease, background 0.3s ease;
}

.cert__card:hover {
  border-color: var(--red);
  box-shadow: 0 4px 20px rgba(236, 77, 55, 0.12);
  transform: translateY(-3px);
}

.cert__accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 0%;
  background: var(--red);
  transition: height 0.3s ease;
  border-radius: 0 0 3px 0;
}

.cert__card:hover .cert__accent { height: 100%; }

.cert__title {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.3rem;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.cert__card:hover .cert__title { color: var(--red); }

.cert__issuer {
  font-size: 0.78rem;
  color: var(--red);
  margin: 0;
  font-weight: 600;
}

.cert__date {
  font-size: 0.73rem;
  color: var(--ink);
  opacity: 0.5;
  margin: 0.2rem 0 0;
}

.cert__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.7rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);
  border-bottom: 1.5px solid var(--ink);
  padding-bottom: 1px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.cert__btn:hover {
  color: var(--red);
  border-color: var(--red);
}

.cert__btn-arrow { 
  transition: transform 0.2s ease; 
}

.cert__btn:hover .cert__btn-arrow { 
  transform: translate(2px, -2px); 
}

@media (max-width: 768px) {
  .portfolio__tab { font-size: 1.4rem; }

  .stack-container {
    flex-direction: column;
    height: auto;
    gap: 1rem;
    padding: 0;
  }

  .card { 
    margin-left: 0; 
    width: 100%; 
    height: auto; 
  }

  .card__img { 
    height: 180px; 
  }

  .card:hover { 
    transform: translateY(-6px) rotate(0deg); 
  }

  .card:hover ~ .card,
  .stack-container:hover .card:not(:hover):has(~ .card:hover) { 
    transform: none; 
  }
}

@media (max-width: 480px) {
  .portfolio__tabs { 
    gap: 1.2rem; 
  }

  .portfolio__tab { 
    font-size: 1.1rem; 
  }

  .certs__grid { 
    grid-template-columns: 1fr; 
  }
}
</style>