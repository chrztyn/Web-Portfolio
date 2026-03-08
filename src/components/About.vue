<template>
  <section class="about" id="about" aria-label="About Me">
    <div class="about__inner">

      <div class="about__eyebrow" ref="eyebrowEl">
        <span class="about__eyebrow-line"></span>
        <span>About Me</span>
      </div>

      <div class="about__grid">

        <div class="about__left" ref="leftEl">

          <h2 class="about__heading">
            Turning Ideas into
            <em>Interactive,</em>
            <em>Scalable,</em> and
            <em>User-Friendly</em>
            Web Solutions.
          </h2>

          <div class="about__bio">
            <p>
              Hi, I'm a student web developer with a strong focus on back-end development.
              I enjoy building secure and scalable server-side systems that support modern
              web applications. I work with technologies like Node.js and databases to handle
              data efficiently and ensure smooth application performance.
            </p>
            <p>
              While I mainly focus on the back end, I have basic knowledge of front-end
              technologies, which helps me collaborate on full-stack projects. I'm interested
              in developing APIs, simple content management systems, and application logic
              that make websites reliable and easy to maintain.
            </p>
            <p>
              I'm passionate about learning, improving my skills, and turning ideas into
              clean, functional, and practical web solutions.
            </p>
          </div>

          <div class="about__doing" ref="doingEl">
            <p class="about__sub-label">
              <span class="about__sub-line"></span>
              What I'm Doing
            </p>
            <div class="about__doing-grid">
              <div
                class="about__doing-card"
                v-for="item in whatImDoing"
                :key="item.title"
              >
                <component :is="item.icon" class="about__doing-icon" />
                <div class="about__doing-text">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="about__right" ref="rightEl">

          <div class="about__img-wrap">
            <div class="about__img-main">
              <img src="../assets/images/christine.jpg" alt="Christine Mae Yunun" class="about__photo" />
            </div>
            <div class="about__img-tag">
              <span class="about__img-tag-dot"></span>
              Christine Mae Yunun
            </div>
          </div>

          <div class="about__tech" ref="techEl">
            <p class="about__sub-label">
              <span class="about__sub-line"></span>
              What I'm Using
            </p>
            <div class="about__tech-row">
              <div
                class="about__tech-icon"
                v-for="tech in techStack"
                :key="tech.name"
              >
                <img :src="tech.icon" :alt="tech.name" />
                <span class="about__tech-tooltip">{{ tech.name }}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Globe, Palette, Server } from 'lucide-vue-next'

const eyebrowEl = ref(null)
const leftEl    = ref(null)
const rightEl   = ref(null)
const doingEl   = ref(null)
const techEl    = ref(null)

const whatImDoing = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building responsive websites using modern web technologies.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing clean, user-friendly interfaces using Figma.'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Developing REST APIs and databases using Node.js and MySQL.'
  }
]

const techStack = [
  { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Figma',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'GitHub',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Postman',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  ;[eyebrowEl, leftEl, rightEl, doingEl, techEl].forEach(r => {
    if (r.value) observer.observe(r.value)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap');

.about {
  background: var(--bg);
  transition: background 0.3s ease;
}

.about__inner {
  width: 100%;
  padding: 2rem clamp(1.5rem, 5vw, 7rem) 5rem;
  box-sizing: border-box;
}

.about__eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.5rem, 0.8vw, 0.62rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink3);
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.about__eyebrow.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.about__eyebrow-line {
  display: inline-block;
  width: 24px;
  height: 1px;
  background: var(--red);
  flex-shrink: 0;
}

.about__grid {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 5rem;
  align-items: start;
}

.about__left {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.about__left.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.about__heading {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2rem, 3.2vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--ink);
}

.about__heading em {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--red);
}

.about__bio {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-left: 2px solid var(--border2);
  padding-left: 1.5rem;
}

.about__bio p {
  font-family: 'Syne', sans-serif;
  font-size: clamp(0.82rem, 1vw, 0.95rem);
  line-height: 1.8;
  color: var(--ink2);
  margin: 0;
}

.about__doing {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
}

.about__doing.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.about__sub-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.48rem, 0.7vw, 0.58rem);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink3);
  margin: 0;
}

.about__sub-line {
  display: inline-block;
  width: 16px;
  height: 1px;
  background: var(--red);
  flex-shrink: 0;
}

.about__doing-grid {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.about__doing-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border: 1px solid var(--border2);
  border-radius: 8px;
  background: var(--card);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s, background 0.3s;
}

.about__doing-card:hover {
  border-color: var(--red);
  box-shadow: 0 4px 20px rgba(236, 77, 55, 0.1);
  transform: translateX(4px);
}

.about__doing-icon {
  width: 18px;
  height: 18px;
  color: var(--red);
  stroke-width: 1.5;
  flex-shrink: 0;
  margin-top: 2px;
}

.about__doing-text h4 {
  font-family: 'Syne', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.2rem;
  letter-spacing: -0.01em;
}

.about__doing-text p {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  line-height: 1.6;
  color: var(--ink2);
  margin: 0;
}

.about__right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 5rem;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.75s ease 0.1s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
}

.about__right.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.about__img-wrap {
  position: relative;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
}

.about__img-main {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border2);
}

.about__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.4s ease;
}

.about__img-main:hover .about__photo {
  transform: scale(1.04);
  filter: brightness(0.9);
}

.about__img-tag {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border2);
  padding: 0.4em 0.85em;
  border-radius: 999px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.about__img-tag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--red);
  flex-shrink: 0;
  animation: blink 1.9s ease infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.5);
  }
}

.about__tech {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
}

.about__tech.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.about__tech-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
}

.about__tech-icon {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--card);
  border: 1px solid var(--border2);
  border-radius: 8px;
  display: grid;
  place-items: center;
  padding: 7px;
  box-sizing: border-box;
  cursor: default;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.25s ease,
              border-color 0.2s,
              background 0.3s;
}

.about__tech-icon:hover {
  transform: translateY(-5px) scale(1.1);
  border-color: var(--red);
  box-shadow: 0 6px 18px rgba(236, 77, 55, 0.18);
}

.about__tech-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.about__tech-tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: var(--ink);
  color: var(--bg);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.5rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  white-space: nowrap;
  padding: 0.3em 0.65em;
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  z-index: 10;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.about__tech-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid transparent;
  border-top-color: var(--ink);
}

.about__tech-icon:hover .about__tech-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (max-width: 1024px) {
  .about__grid {
    gap: 3.5rem;
  }
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about__right {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .about__img-wrap {
    flex: 0 0 240px;
  }

  .about__tech {
    flex: 1;
    min-width: 200px;
  }
}

@media (max-width: 600px) {
  .about__inner {
    padding: 2rem 1rem 3rem;
  }

  .about__right {
    flex-direction: column;
  }

  .about__img-wrap {
    flex: none;
    width: 100%;
  }

  .about__img-main {
    aspect-ratio: 3 / 2;
  }

  .about__doing-card {
    flex-direction: column;
    gap: 0.6rem;
  }
}
</style>