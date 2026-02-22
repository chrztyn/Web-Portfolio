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
            </div>
            <div class="card__body">
              <h3 class="card__title">{{ project.title }}</h3>
              <p class="card__tech">{{ project.tech }}</p>
              <p class="card__desc">{{ project.description }}</p>
              <a :href="project.link" class="card__btn" target="_blank" rel="noopener">View Project</a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'certifications'" class="portfolio__certs">
        <p class="certs__category-label">TECHNICAL &amp; DEVELOPMENT</p>
        <div class="certs__grid">
          <div class="cert__card" v-for="cert in techCerts" :key="cert.title">
            <div class="cert__body">
              <h3 class="cert__title">{{ cert.title }}</h3>
              <p class="cert__issuer">{{ cert.issuer }}</p>
              <p class="cert__date">{{ cert.date }}</p>
            </div>
          </div>
        </div>

        <p class="certs__category-label" style="margin-top: 2rem;">DESIGN / UX</p>
        <div class="certs__grid">
          <div class="cert__card" v-for="cert in designCerts" :key="cert.title">
            <div class="cert__body">
              <h3 class="cert__title">{{ cert.title }}</h3>
              <p class="cert__issuer">{{ cert.issuer }}</p>
              <p class="cert__date">{{ cert.date }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('projects')

const projects = [
  {
    title: 'SplitSmart',
    tech: 'Node.js, Express.js, MongoDB',
    description: 'A web app that automates group expense tracking with RESTful APIs, database architecture, authentication, and CRUD operations.',
    image: 'https://placehold.co/600x400/d9d9d9/888?text=SplitSmart',
    link: '#'
  },
  {
    title: 'Non Ta Mangan',
    tech: 'PHP, MySQL, JavaScript',
    description: 'A restaurant picker and rating web app with a spin-the-wheel feature, rating system, and user account management.',
    image: 'https://placehold.co/600x400/d9d9d9/888?text=Non+Ta+Mangan',
    link: '#'
  },
  {
    title: 'Pelikula',
    tech: 'HTML, CSS, JavaScript',
    description: 'A static web prototype for browsing, rating, and reviewing movies with a focus on UI consistency and responsive layout.',
    image: 'https://placehold.co/600x400/d9d9d9/888?text=Pelikula',
    link: '#'
  },
]

const techCerts = [
  { title: 'Back-End Development and APIs', issuer: 'FreeCodeCamp', date: 'Oct 2025' },
  { title: 'Legacy JavaScript Algorithms and Data Structures', issuer: 'FreeCodeCamp', date: 'Sep 2025' },
  { title: 'JavaScript Essentials', issuer: 'Cisco', date: 'Oct 2024' },
  { title: 'CompTIA IT Fundamentals+ (ITF+)', issuer: 'CompTIA', date: 'Nov 2023' },
]

const designCerts = [
  { title: 'Design Thinking for Beginners', issuer: 'Simplilearn', date: 'Jul 2025' },
  { title: 'Introduction to Graphic Design & Basics of UI/UX', issuer: 'Simplilearn', date: 'Aug 2025' },
  { title: 'Legacy Responsive Design', issuer: 'FreeCodeCamp', date: 'Sept 2024' },
]
</script>

<style scoped>
.portfolio {
  --cream: #f5f0e8;
  --red: #EC4D37;
  --ink: #1a1a1a;
  background: var(--cream);
  min-height: 100vh;
  padding: 4rem 0 5rem;
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
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--ink);
  opacity: 0.35;
  cursor: pointer;
  padding: 0 0 0.5rem;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.portfolio__tab.active {
  opacity: 1;
  color: var(--red);
  border-bottom: 2px solid var(--red);
}

.portfolio__tab:hover { opacity: 0.7; }

.portfolio__divider {
  border: none;
  border-top: 1.5px solid #d0c9bc;
  margin: 0 0 3rem;
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
  height: 460px;
  padding: 0 1rem;
}

.card {
  position: relative;
  width: 320px;
  height: 420px;
  margin-left: -180px;
  border-radius: 16px;
  background: #e8e2d8;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.card:first-child { margin-left: 0; }

.card:hover {
  transform: translateY(-12px);
  z-index: 10 !important;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.25);
}

.card:hover ~ .card {
  transform: translateX(180px);
}

.stack-container:hover .card:not(:hover):has(~ .card:hover) {
  transform: translateX(-30px);
}

.card__img {
  width: 100%;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
}

.card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__body {
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
}

.card__title {
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
}

.card__tech {
  font-size: 0.72rem;
  color: var(--red);
  font-weight: 600;
  margin: 0;
}

.card__desc {
  font-size: 0.73rem;
  line-height: 1.5;
  color: var(--ink);
  opacity: 0.65;
  margin: 0;
  flex: 1;
}

.card__btn {
  display: inline-block;
  background: var(--ink);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  align-self: flex-start;
  transition: background 0.2s ease;
}

.card__btn:hover { background: var(--red); }

/* ===== CERTIFICATIONS ===== */
.certs__category-label {
  font-size: 0.78rem;
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
  border: 1.5px solid #d0c9bc;
  border-radius: 12px;
  padding: 1.2rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.cert__card:hover {
  border-color: var(--red);
  box-shadow: 0 4px 16px rgba(236, 77, 55, 0.1);
}

.cert__title {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.3rem;
  line-height: 1.4;
}

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

@media (max-width: 768px) {
  .stack-container {
    flex-direction: column;
    height: auto;
    gap: 1rem;
    padding: 0;
  }
  .card {
    margin-left: 0;
    width: 100%;
  }
  .card:hover ~ .card,
  .stack-container:hover .card:not(:hover):has(~ .card:hover) {
    transform: none;
  }
}
</style>