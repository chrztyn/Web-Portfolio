<template>
  <section class="portfolio" id="portfolio" aria-label="Portfolio">
    <div class="portfolio__inner">

      <p class="portfolio__label">PORTFOLIO</p>

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
        <p class="portfolio__hint">click a card to view details</p>
        <div class="stack-container">
          <div
            class="card"
            v-for="(project, index) in projects"
            :key="project.title"
            :style="{ zIndex: projects.length - index }"
            @click="openModal(project)"
          >
            <div class="card__img">
              <img :src="project.image" :alt="project.title" />
              <div class="card__img-overlay">
                <span class="card__img-label">{{ project.tech }}</span>
              </div>
            </div>
            <div class="card__body">
              <p class="card__tech">{{ project.tech }}</p>
              <h3 class="card__title">{{ project.title }}</h3>
              <p class="card__desc">{{ project.description }}</p>
              <span class="card__btn">
                <span>View Details</span>
                <span class="card__btn-arrow">↗</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'certifications'" class="portfolio__certs">

        <div class="certs__section">
          <div class="certs__section-header">
            <span class="certs__section-line"></span>
            <p class="certs__category-label">TECHNICAL &amp; DEVELOPMENT</p>
          </div>
          <div class="certs__grid">
            <div class="cert__card" v-for="cert in techCerts" :key="cert.title">
              <div class="cert__accent"></div>
              <div class="cert__top">
                <span class="cert__badge">{{ cert.issuer[0] }}</span>
                <span class="cert__date">{{ cert.date }}</span>
              </div>
              <div class="cert__body">
                <h3 class="cert__title">{{ cert.title }}</h3>
                <p class="cert__issuer">{{ cert.issuer }}</p>
                <a :href="cert.link" target="_blank" rel="noopener" class="cert__btn">
                  <span>View Certificate</span>
                  <span class="cert__btn-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="certs__section">
          <div class="certs__section-header">
            <span class="certs__section-line"></span>
            <p class="certs__category-label">DESIGN / UX</p>
          </div>
          <div class="certs__grid">
            <div class="cert__card" v-for="cert in designCerts" :key="cert.title">
              <div class="cert__accent"></div>
              <div class="cert__top">
                <span class="cert__badge">{{ cert.issuer[0] }}</span>
                <span class="cert__date">{{ cert.date }}</span>
              </div>
              <div class="cert__body">
                <h3 class="cert__title">{{ cert.title }}</h3>
                <p class="cert__issuer">{{ cert.issuer }}</p>
                <a :href="cert.link" target="_blank" rel="noopener" class="cert__btn">
                  <span>View Certificate</span>
                  <span class="cert__btn-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div class="modal__overlay" v-if="selectedProject" @click.self="closeModal">
          <div class="modal__box">
            <button class="modal__close" @click="closeModal" aria-label="Close">✕</button>

            <div class="modal__img">
              <img :src="selectedProject.image" :alt="selectedProject.title" />
            </div>

            <div class="modal__content">
              <p class="modal__tech">{{ selectedProject.tech }}</p>
              <h2 class="modal__title">{{ selectedProject.title }}</h2>
              <hr class="modal__divider" />

              <div class="modal__section" v-for="(section, i) in selectedProject.details" :key="i">
                <h4 class="modal__section-title">{{ section.heading }}</h4>
                <p class="modal__section-text">{{ section.text }}</p>
              </div>

              <div class="modal__actions">
                <a :href="selectedProject.link" class="modal__btn" target="_blank" rel="noopener">
                  <span>View Project</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SplitSmart from '../assets/images/splitsmart.png'
import NonTaMangan from '../assets/images/nontamangan.png'
import BuffsChicken from '../assets/images/buffschicken.png'
import Pelikula from '../assets/images/pelikula.png'

const activeTab = ref('projects')
const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}

const handleKey = (e) => {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))

const projects = [
  {
    title: 'SplitSmart',
    tech: 'Node.js · Express.js · MongoDB',
    description: 'A web app that automates group expense tracking with RESTful APIs, secure authentication, and full CRUD operations.',
    image: SplitSmart,
    link: '#',
    details: [
      {
        heading: 'Overview',
        text: 'SplitSmart is a web application designed to automate and simplify group expense tracking among friends, families, or teams.'
      },
      {
        heading: 'What I Did',
        text: 'I designed the RESTful API architecture and built the database schema in MongoDB to ensure efficient and scalable data handling. I implemented secure user authentication using JWT, and developed full CRUD operations to allow users to create, manage, and settle expenses seamlessly.'
      },
      {
        heading: 'Collaboration & Process',
        text: 'Working within an agile workflow, I collaborated closely with teammates to iteratively refine features, maintain clear communication through regular standups, and deliver a reliable solution on schedule.'
      },
    ]
  },
  {
    title: 'Non Ta Mangan',
    tech: 'PHP · MySQL · JavaScript',
    description: 'A restaurant picker and rating web app with a spin-the-wheel feature, rating system, and user account management.',
    image: NonTaMangan,
    link: '#',
    details: [
      {
        heading: 'Overview',
        text: 'Non Ta Mangan is a fun and interactive web app that helps users decide where to eat using a spin-the-wheel mechanic for restaurant selection.'
      },
      {
        heading: 'What I Did',
        text: 'I developed the spin-the-wheel feature using JavaScript to enhance user engagement with an interactive decision-making tool. I also built the restaurant rating system and a comprehensive user account management module, including secure login, registration, and session handling with PHP and MySQL.'
      },
      {
        heading: 'Collaboration & Process',
        text: 'Following agile practices within a team, I contributed to feature planning, iterative development, and QA to ensure a fully functional and user-friendly application at delivery.'
      },
    ]
  },
  {
    title: 'Pelikula',
    tech: 'HTML · CSS · JavaScript',
    description: 'A static web prototype for browsing, rating, and reviewing movies with a focus on UI consistency and responsive layout.',
    image: Pelikula,
    link: '#',
    details: [
      {
        heading: 'Overview',
        text: 'Pelikula is a static web prototype designed for browsing, rating, and reviewing movies — built with a strong emphasis on clean UI and responsiveness.'
      },
      {
        heading: 'What I Did',
        text: 'I designed and coded the entire interface using HTML, CSS, and vanilla JavaScript, focusing on UI consistency across all pages and ensuring the layout adapts seamlessly across different device sizes. Special attention was given to component reusability and visual coherence throughout the prototype.'
      },
      {
        heading: 'Key Focus',
        text: 'This project prioritized front-end fundamentals — semantic HTML structure, well-organized CSS, and accessible design patterns — to create an intuitive and smooth user experience.'
      },
    ]
  },
  {
    title: 'BuffsChicken',
    tech: 'Vue · Nuxt · Express.js',
    description: 'An SEO-focused e-commerce website for a chicken brand built with Nuxt for server-side rendering and Express.js backend.',
    image: BuffsChicken,
    link: '#',
    details: [
      {
        heading: 'Overview',
        text: 'BuffsChicken is an SEO-focused e-commerce website built for a chicken brand, designed to maximize online visibility while delivering a smooth shopping experience.'
      },
      {
        heading: 'What I Did',
        text: 'I designed the system architecture to ensure scalability and efficient feature integration. The backend was built with Express.js to provide a robust API for secure data handling and streamlined product management. I implemented server-side rendering using Nuxt to boost search engine performance and page load speed.'
      },
      {
        heading: 'Technical Highlights',
        text: 'The SSR setup with Nuxt significantly improved SEO scores compared to a traditional SPA approach. I also structured the Express.js API with clean RESTful conventions, making it easy to extend for future features like promotions or loyalty programs.'
      },
    ]
  },
]

const techCerts = [
  { title: 'Back-End Development and APIs', issuer: 'FreeCodeCamp', date: 'Oct 2025', link: 'https://drive.google.com/file/d/15wPQCdqs3RsGfXA4OPokfTBLY1oWzeEx/view' },
  { title: 'Legacy JavaScript Algorithms and Data Structures', issuer: 'FreeCodeCamp', date: 'Sep 2025', link: 'https://drive.google.com/file/d/1bwpne5Gk3jfvX6dk-6YxRZXVC4HUuACn/view' },
  { title: 'JavaScript Essentials', issuer: 'Cisco', date: 'Oct 2024', link: 'https://www.credly.com/badges/7721bc03-5d6b-4fe9-bbaf-29adc9ec8c39/public_url' },
  { title: 'CompTIA IT Fundamentals+ (ITF+)', issuer: 'CompTIA', date: 'Nov 2023', link: 'https://drive.google.com/file/d/1hjG3ss4832kyTWZx_V365_mP-ndKwfe7/view' },
]

const designCerts = [
  { title: 'Design Thinking for Beginners', issuer: 'Simplilearn', date: 'Jul 2025', link: 'https://drive.google.com/file/d/1HVL7HlnaBg6HvyOeWNJWL2evEIiDN1P-/view' },
  { title: 'Introduction to Graphic Design & Basics of UI/UX', issuer: 'Simplilearn', date: 'Aug 2025', link: 'https://drive.google.com/file/d/1UM49Lpav0jepMQ2xGJjtMF3xKLyovx_A/view' },
  { title: 'Legacy Responsive Design', issuer: 'FreeCodeCamp', date: 'Sept 2024', link: 'https://drive.google.com/file/d/1zzUSYnzWwdoUiIhWrqc6xW8EZP5izH9T/view' },
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

.portfolio__label {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--red);
  margin: 0 0 1.5rem;
  font-family: 'Satoshi-Variable', sans-serif;
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
  font-size: 1.3rem;
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
  margin: 0 0 1.5rem;
  transition: border-color 0.3s ease;
}

.portfolio__hint {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--ink);
  opacity: 0.4;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 1.5rem;
}

.portfolio__projects {
  display: flex;
  flex-direction: column;
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

.card:first-child { margin-left: 0; }

.card:hover {
  transform: translateY(-16px) rotate(-1deg);
  z-index: 10 !important;
  box-shadow: 0 28px 56px rgba(0, 0, 0, 0.22), 0 0 0 1.5px var(--red);
}

.card:hover ~ .card { transform: translateX(160px); }

.stack-container:hover .card:not(:hover):has(~ .card:hover) {
  transform: translateX(-30px);
}

.card__img {
  width: calc(100% - 2rem);
  height: 170px;
  margin: 1rem auto 0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
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

.card__img-overlay {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
}

.card__img-label {
  background: rgba(236, 77, 55, 0.9);
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.25em 0.7em;
  border-radius: 9999px;
}

.card__body {
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.card__tech {
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--red);
  letter-spacing: 0.05em;
  margin: 0;
}

.card__title {
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  transition: color 0.2s ease;
}

.card:hover .card__title { color: var(--red); }

.card__desc {
  font-size: 0.72rem;
  line-height: 1.55;
  color: var(--ink);
  opacity: 0.65;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  cursor: pointer;
}

.card:hover .card__btn {
  background: var(--red);
  color: #fff;
  gap: 0.6rem;
}

.card__btn-arrow { 
  transition: transform 0.2s ease; 
}

.card:hover .card__btn-arrow { 
  transform: translate(2px, -2px); 
}

.modal__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal__box {
  position: relative; 
  background: var(--bg);
  border-radius: 20px;
  width: 100%;
  max-width: 680px;
  max-height: 88vh;
  overflow-y: auto;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.3);
  border: 1.5px solid var(--border);
}

.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  float: none;
  margin: 0;
  background: rgba(0,0,0,0.4);
  border: none;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.8rem;
  display: grid;
  place-items: center;
  transition: background 0.2s;
  z-index: 2;
}

.modal__close:hover {
  background: var(--red);
}


.modal__img {
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  margin-top: 0;  
}

.modal__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.modal__content {
  padding: 1.8rem 2rem 2rem;
}

.modal__tech {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--red);
  letter-spacing: 0.08em;
  margin: 0 0 0.4rem;
}

.modal__title {
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--ink);
  margin: 0 0 1rem;
  letter-spacing: -0.01em;
}

.modal__divider {
  border: none;
  border-top: 1.5px solid var(--border);
  margin: 0 0 1.5rem;
}

.modal__section {
  margin-bottom: 1.2rem;
}

.modal__section-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--red);
  margin: 0 0 0.4rem;
}

.modal__section-text {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--ink);
  opacity: 0.8;
  margin: 0;
}

.modal__actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.8rem;
}

.modal__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--ink);
  color: var(--bg);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.7rem 1.8rem;
  border-radius: 999px;
  transition: background 0.2s ease, color 0.2s ease;
}

.modal__btn:hover {
  background: var(--red);
  color: #fff;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .modal__box,
.modal-leave-active .modal__box {
  transition: transform 0.3s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal__box,
.modal-leave-to .modal__box {
  transform: scale(0.92) translateY(20px);
  opacity: 0;
}

.certs__section {
  margin-bottom: 2.5rem;
}

.certs__section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.certs__section-line {
  display: block;
  width: 40px;
  height: 2px;
  background: var(--red);
  flex-shrink: 0;
}

.certs__category-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--ink);
  opacity: 0.6;
  margin: 0;
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
}

.cert__card:hover .cert__accent { 
  height: 100%; 
}

.cert__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.cert__badge {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--red);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 800;
  display: grid;
  place-items: center;
  font-family: 'Satoshi-Variable', sans-serif;
}

.cert__date {
  font-size: 0.7rem;
  color: var(--ink);
  opacity: 0.45;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.cert__title {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.3rem;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.cert__card:hover .cert__title { 
  color: var(--red); 
}

.cert__issuer {
  font-size: 0.75rem;
  color: var(--ink);
  opacity: 0.5;
  margin: 0;
  font-weight: 500;
}

.cert__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.9rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);
  border-bottom: 1.5px solid var(--border);
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
  .portfolio__tab { 
    font-size: 1.1rem; 
  }

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

  .modal__img { 
    height: 200px; 
  }

  .modal__content { 
    padding: 1.2rem 1.2rem 1.5rem; 
  }
  
  .modal__title { 
    font-size: 1.4rem; 
  }
}

@media (max-width: 480px) {
  .portfolio__tabs { 
    gap: 1.2rem; 
  }

  .portfolio__tab { 
    font-size: 0.95rem; 
  }

  .certs__grid { 
    grid-template-columns: 1fr; 
  }
}
</style>