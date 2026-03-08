<template>
  <section class="sec" id="work" aria-label="Selected Work">

    <div class="sec-label" ref="labelEl"><span>03 — Selected Work</span></div>

    <div class="sec-title" ref="titleEl">
      <div class="sec-title-inner">Things I've <em>Built.</em></div>
    </div>

    <div class="tab-row" ref="tabsEl">
      <button class="stab" :class="{ on: activeTab === 'projects' }"       @click="setTab('projects')">Projects</button>
      <button class="stab" :class="{ on: activeTab === 'certifications' }" @click="setTab('certifications')">Certifications</button>
    </div>

    <div v-show="activeTab === 'projects'">
      <div class="proj-grid" ref="projGridEl">
        <a
          v-for="(p, i) in projects"
          :key="p.title"
          class="proj"
          href="#"
          @click.prevent="openModal(p)"
        >
          <div class="proj-idx">{{ String(i + 1).padStart(3,'0') }} / {{ p.year }}</div>
          <div class="proj-img">
            <img :src="p.image" :alt="p.title" />
            <div class="proj-img-overlay"></div>
          </div>
          <div class="proj-pills">
            <span class="proj-pill" v-for="tag in p.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="proj-title">{{ p.title }}</div>
          <p   class="proj-desc">{{ p.description }}</p>
          <div class="proj-foot">
            <span class="proj-cta">View Details</span>
            <span class="proj-arrow">↗</span>
          </div>
        </a>
      </div>
    </div>

    <div v-show="activeTab === 'certifications'" ref="certsWrapEl">
      <div class="certs-block">
        <div class="sub-label">Technical &amp; Development</div>
        <div class="sk-grid">
          <div class="cert-card" v-for="c in techCerts" :key="c.title">
            <div class="cert-card__bar"></div>
            <div class="cert-card__head">
              <span class="cert-card__badge">{{ c.issuer[0] }}</span>
              <span class="cert-card__date">{{ c.date }}</span>
            </div>
            <div class="cert-card__title">{{ c.title }}</div>
            <div class="cert-card__issuer">{{ c.issuer }}</div>
            <a :href="c.link" target="_blank" rel="noopener" class="cert-card__link">View Certificate <span>↗</span></a>
          </div>
        </div>
      </div>
      <div class="certs-block">
        <div class="sub-label">Design / UX</div>
        <div class="sk-grid">
          <div class="cert-card" v-for="c in designCerts" :key="c.title">
            <div class="cert-card__bar"></div>
            <div class="cert-card__head">
              <span class="cert-card__badge">{{ c.issuer[0] }}</span>
              <span class="cert-card__date">{{ c.date }}</span>
            </div>
            <div class="cert-card__title">{{ c.title }}</div>
            <div class="cert-card__issuer">{{ c.issuer }}</div>
            <a :href="c.link" target="_blank" rel="noopener" class="cert-card__link">View Certificate <span>↗</span></a>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div class="modal-overlay" v-if="selected" @click.self="closeModal">
          <div class="modal-box">
            <button class="modal-close" @click="closeModal" aria-label="Close">✕</button>
            <div class="modal-img">
              <img :src="selected.image" :alt="selected.title" />
            </div>
            <div class="modal-body">
              <p class="modal-cat">{{ selected.tech }}</p>
              <h2 class="modal-title">{{ selected.title }}</h2>
              <hr class="modal-rule" />
              <div class="modal-section" v-for="(s, i) in selected.details" :key="i">
                <h4 class="modal-section-label">{{ s.heading }}</h4>
                <p  class="modal-section-text">{{ s.text }}</p>
              </div>
              <div class="modal-actions">
                <a :href="selected.link" class="btn-p" target="_blank" rel="noopener">View Project ↗</a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import SplitSmart   from '../assets/images/splitsmart.png'
import NonTaMangan  from '../assets/images/nontamangan.png'
import BuffsChicken from '../assets/images/buffschicken.png'
import Pelikula     from '../assets/images/pelikula.png'

const activeTab   = ref('projects')
const selected    = ref(null)

const labelEl     = ref(null)
const titleEl     = ref(null)
const tabsEl      = ref(null)
const projGridEl  = ref(null)
const certsWrapEl = ref(null)

function fly(el, { x = 0, y = 0, delay = 0, dur = 800 } = {}) {
  if (!el) return
  el.style.opacity    = '0'
  el.style.transform  = `translate(${x}px,${y}px)`
  el.style.transition = 'none'
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.transition = `opacity ${dur}ms cubic-bezier(.16,1,.3,1) ${delay}ms, transform ${dur}ms cubic-bezier(.16,1,.3,1) ${delay}ms`
      el.style.opacity    = '1'
      el.style.transform  = 'translate(0,0)'
    })
  })
}

function animateCards() {
  nextTick(() => {
    projGridEl.value?.querySelectorAll('.proj').forEach((card, i) => {
      fly(card, { x: i % 2 === 0 ? -60 : 60, delay: i * 80, dur: 900 })
    })
  })
}

function animateCerts() {
  nextTick(() => {
    certsWrapEl.value?.querySelectorAll('.cert-card').forEach((el, i) => {
      fly(el, { y: 25, delay: i * 55, dur: 600 })
    })
  })
}

function setTab(tab) {
  activeTab.value = tab
  nextTick(() => {
    if (tab === 'projects') animateCards()
    else                    animateCerts()
  })
}

const openModal  = p  => { selected.value = p;   document.body.style.overflow = 'hidden' }
const closeModal = () => { selected.value = null; document.body.style.overflow = '' }
const onKey      = e  => { if (e.key === 'Escape') closeModal() }

onMounted(() => {
  window.addEventListener('keydown', onKey)

  const io = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return
      io.unobserve(target)
      if (target === labelEl.value)  fly(target, { x: -40, dur: 800 })
      if (target === titleEl.value)  fly(target, { y: 40, dur: 1000, delay: 60 })
      if (target === tabsEl.value) {
        fly(target, { y: 20, dur: 700, delay: 140 })
        animateCards()
      }
    })
  }, { threshold: 0.05 })

  nextTick(() => {
    ;[labelEl, titleEl, tabsEl].forEach(r => {
      if (!r.value) return
      r.value.style.opacity = '0'
      io.observe(r.value)
    })
  })
})

onUnmounted(() => window.removeEventListener('keydown', onKey))

const projects = [
  {
    title: 'SplitSmart',
    year: '2025',
    tech: 'Node.js · Express.js · MongoDB',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
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
    ],
  },
  {
    title: 'Non Ta Mangan',
    year: '2025',
    tech: 'PHP · MySQL · JavaScript',
    tags: ['PHP', 'MySQL', 'JavaScript'],
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
    ],
  },
  {
    title: 'Pelikula',
    year: '2024',
    tech: 'HTML · CSS · JavaScript',
    tags: ['HTML', 'CSS', 'JavaScript'],
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
    ],
  },
  {
    title: 'BuffsChicken',
    year: '2025',
    tech: 'Vue · Nuxt · Express.js',
    tags: ['Vue', 'Nuxt', 'Express.js'],
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
    ],
  },
]

const techCerts = [
  { title: 'Back-End Development and APIs',                    issuer: 'FreeCodeCamp', date: 'Oct 2025', link: 'https://drive.google.com/file/d/15wPQCdqs3RsGfXA4OPokfTBLY1oWzeEx/view' },
  { title: 'Legacy JavaScript Algorithms and Data Structures', issuer: 'FreeCodeCamp', date: 'Sep 2025', link: 'https://drive.google.com/file/d/1bwpne5Gk3jfvX6dk-6YxRZXVC4HUuACn/view' },
  { title: 'JavaScript Essentials',                            issuer: 'Cisco',        date: 'Oct 2024', link: 'https://www.credly.com/badges/7721bc03-5d6b-4fe9-bbaf-29adc9ec8c39/public_url' },
  { title: 'CompTIA IT Fundamentals+ (ITF+)',                  issuer: 'CompTIA',      date: 'Nov 2023', link: 'https://drive.google.com/file/d/1hjG3ss4832kyTWZx_V365_mP-ndKwfe7/view' },
]

const designCerts = [
  { title: 'Design Thinking for Beginners',                    issuer: 'Simplilearn',  date: 'Jul 2025', link: 'https://drive.google.com/file/d/1HVL7HlnaBg6HvyOeWNJWL2evEIiDN1P-/view' },
  { title: 'Introduction to Graphic Design & Basics of UI/UX', issuer: 'Simplilearn',  date: 'Aug 2025', link: 'https://drive.google.com/file/d/1UM49Lpav0jepMQ2xGJjtMF3xKLyovx_A/view' },
  { title: 'Legacy Responsive Design',                         issuer: 'FreeCodeCamp', date: 'Sep 2024', link: 'https://drive.google.com/file/d/1zzUSYnzWwdoUiIhWrqc6xW8EZP5izH9T/view' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap');

.sec {
  position: relative;
  z-index: 2;
  padding: 9rem clamp(2rem, 5vw, 5rem);
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  transition: background .4s, color .4s;
}

.sec-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem;
  letter-spacing: .22em;
  color: var(--red);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: .7rem;
  margin-bottom: 1.6rem;
}
.sec-label::after {
  content: '';
  width: 36px;
  height: 1px;
  background: rgba(236,77,55,.3);
  flex-shrink: 0;
}

.sec-title {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(2.2rem, 4.2vw, 4.8rem);
  letter-spacing: -.035em;
  line-height: 1.05;
  color: var(--ink);
  overflow: hidden;
  margin: 0 0 3rem;
}
.sec-title-inner {
  display: block;
}
.sec-title em {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--red);
}

.tab-row {
  display: flex;
  gap: .35rem;
  margin-bottom: 2.5rem;
}
.stab {
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: .36em 1.1em;
  border: 1px solid var(--border2);
  background: transparent;
  color: var(--ink2);
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s;
}
.stab.on,
.stab:hover {
  background: var(--red);
  border-color: var(--red);
  color: #fff;
}

.proj-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.proj {
  background: var(--bg);
  padding: 2.5rem;
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  transition: background .3s;
  cursor: pointer;
}
.proj:hover {
  background: var(--bg2);
}

.proj-idx {
  font-family: 'JetBrains Mono', monospace;
  font-size: .53rem;
  color: var(--ink3);
  margin-bottom: 1.1rem;
}

.proj-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
  margin-bottom: 1.4rem;
}
.proj-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: grayscale(15%);
  transition: transform .55s ease, filter .45s ease;
}
.proj:hover .proj-img img {
  transform: scale(1.05);
  filter: grayscale(0%);
}
.proj-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.26) 0%, transparent 55%);
  pointer-events: none;
}

.proj-pills {
  display: flex;
  flex-wrap: wrap;
  gap: .3rem;
  margin-bottom: .8rem;
}
.proj-pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: .52rem;
  letter-spacing: .06em;
  color: var(--red);
  border: 1px solid rgba(236,77,55,.3);
  padding: .18em .6em;
  border-radius: 2px;
  transition: background .2s, color .2s;
}
.proj:hover .proj-pill {
  background: var(--red);
  color: #fff;
}

.proj-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: .45rem;
  transition: color .2s;
}
.proj:hover .proj-title {
  color: var(--red);
}

.proj-desc {
  font-size: .76rem;
  line-height: 1.68;
  color: var(--ink2);
  margin: 0 0 1.4rem;
}

.proj-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding-top: 1rem;
}
.proj-cta {
  font-family: 'JetBrains Mono', monospace;
  font-size: .6rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ink3);
  transition: color .2s;
}
.proj:hover .proj-cta {
  color: var(--ink);
}
.proj-arrow {
  font-size: 1rem;
  color: var(--red);
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: all .22s;
}
.proj:hover .proj-arrow {
  opacity: 1;
  transform: translate(0, 0);
}

.certs-block {
  margin-bottom: 2.8rem;
}

.sub-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem;
  color: var(--red);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: .7rem;
  margin-bottom: 1.3rem;
  margin-top: 2.3rem;
}
.sub-label::after {
  content: '';
  width: 28px;
  height: 1px;
  background: rgba(236,77,55,.3);
}

.sk-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.cert-card {
  background: var(--bg2);
  padding: 1.6rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: .3rem;
  position: relative;
  overflow: hidden;
  transition: background .25s;
  cursor: default;
}
.cert-card:hover {
  background: var(--bg3);
}

.cert-card__bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: var(--red);
  transition: height .3s;
}
.cert-card:hover .cert-card__bar {
  height: 2px;
}

.cert-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .55rem;
}
.cert-card__badge {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: var(--red);
  color: #fff;
  font-family: 'Syne', sans-serif;
  font-size: .85rem;
  font-weight: 800;
  display: grid;
  place-items: center;
}
.cert-card__date {
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem;
  color: var(--ink3);
}

.cert-card__title {
  font-family: 'Syne', sans-serif;
  font-size: .82rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.35;
  transition: color .2s;
}
.cert-card:hover .cert-card__title {
  color: var(--red);
}

.cert-card__issuer {
  font-family: 'JetBrains Mono', monospace;
  font-size: .6rem;
  color: var(--ink3);
  margin-top: .1rem;
}

.cert-card__link {
  display: inline-flex;
  align-items: center;
  gap: .25rem;
  margin-top: auto;
  padding-top: .75rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink2);
  border-top: 1px solid var(--border);
  transition: color .2s;
}
.cert-card__link:hover {
  color: var(--red);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}
.modal-box {
  position: relative;
  background: var(--bg);
  border: 1px solid var(--border2);
  border-radius: 4px;
  width: 100%;
  max-width: 680px;
  max-height: 88vh;
  overflow-y: auto;
  box-shadow: 0 32px 80px var(--shadow);
}
.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0,0,0,.45);
  border: none;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: .8rem;
  display: grid;
  place-items: center;
  z-index: 2;
  transition: background .2s;
}
.modal-close:hover {
  background: var(--red);
}

.modal-img {
  width: 100%;
  height: 220px;
  overflow: hidden;
}
.modal-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.modal-body {
  padding: 1.8rem 2rem 2rem;
}

.modal-cat {
  font-family: 'JetBrains Mono', monospace;
  font-size: .6rem;
  font-weight: 700;
  color: var(--red);
  letter-spacing: .1em;
  text-transform: uppercase;
  margin: 0 0 .4rem;
}
.modal-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 1rem;
  letter-spacing: -.02em;
}
.modal-rule {
  border: none;
  border-top: 1px solid var(--border);
  margin: 0 0 1.5rem;
}

.modal-section {
  margin-bottom: 1.2rem;
}
.modal-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: .6rem;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--red);
  margin: 0 0 .4rem;
}
.modal-section-text {
  font-size: .88rem;
  line-height: 1.72;
  color: var(--ink2);
  margin: 0;
}

.modal-actions {
  margin-top: 1.5rem;
}

.btn-p {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  background: var(--red);
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-size: .62rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: .68em 1.5em;
  border-radius: 3px;
  transition: all .2s;
}
.btn-p:hover {
  background: var(--red2, #ff6b52);
  transform: translateY(-2px);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity .3s ease;
}
.modal-enter-active .modal-box,
.modal-leave-active .modal-box {
  transition: transform .3s cubic-bezier(.34,1.2,.64,1), opacity .3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-box,
.modal-leave-to .modal-box {
  transform: scale(.92) translateY(20px);
  opacity: 0;
}

@media (max-width: 1024px) {
  .proj-grid { grid-template-columns: 1fr; }
  .sk-grid   { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .sec     { padding: 5.5rem 1.5rem; }
  .sk-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .sk-grid { grid-template-columns: 1fr; }
}
</style>