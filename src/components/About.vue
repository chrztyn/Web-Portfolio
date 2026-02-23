<template>
  <section class="about" id="about" aria-label="About Me">
    <div class="about__inner">

      <p class="about__label">ABOUT ME</p>

      <div class="about__grid">

        <div class="about__left">
          <h2 class="about__heading">
            Turning Ideas into
            <span class="about__highlight">Interactive,</span>
            <span class="about__highlight">Scalable,</span> and
            <span class="about__highlight">User-Friendly</span> Web Solutions.
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
              in developing APIs, simple content management systems (CMS), and application 
              logic that make websites reliable and easy to maintain.
            </p>
            <p>
              I'm passionate about learning, improving my skills, and turning ideas into 
              clean, functional, and practical web solutions.
            </p>
          </div>
        </div>

        <div class="about__right">
          <div class="about__img-main">
            <img src="../assets/images/christine.jpg" alt="Christine Mae Yunun" class="about__photo" />
            <div class="about__img-overlay">
              <span>Christine Mae Yunun</span>
            </div>
          </div>

          <div class="about__sub-section">
            <p class="about__sub-label">WHAT I'M DOING</p>
            <div class="about__img-row">
              <div class="about__doing-card" v-for="item in whatImDoing" :key="item.title">
                <div class="about__doing-card-front">
                  <component :is="item.icon" class="about__doing-icon" />
                  <h4>{{ item.title }}</h4>
                </div>
                <div class="about__doing-card-back">
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="about__sub-section">
            <p class="about__sub-label">WHAT I'M USING</p>
            <div class="about__tech-row">
              <div
                class="about__tech-icon"
                v-for="tech in techStack"
                :key="tech.name"
                :title="tech.name"
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
import { Globe, Palette, Server } from 'lucide-vue-next'

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
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
]
</script>

<style scoped>
.about {
  background: var(--bg);
  padding: 0;
  transition: background 0.3s ease;
}

.about__inner {
  width: 100%;
  max-width: 100%;
  padding-top: 3rem;
  padding-left: clamp(2rem, 5vw, 5rem);
  padding-right: clamp(2rem, 5vw, 5rem);
  padding-bottom: 1rem;
  box-sizing: border-box;
}

.about__label {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.10em;
  color: var(--red);
  margin: 0 0 0;
  text-transform: uppercase;
}

.about__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: end;
}

.about__heading {
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: clamp(2.2rem, 3.5vw, 3.2rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--ink);
  margin: 0 0 2rem;
  transition: color 0.3s ease;
}

.about__highlight {
  color: var(--red);
  font-weight: 800;
  position: relative;
  display: inline-block;
  transition: letter-spacing 0.3s ease;
}

.about__highlight:hover { letter-spacing: 0.03em; }

.about__highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--red);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.about__highlight:hover::after { width: 100%; }

.about__bio {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.about__bio p {
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  line-height: 1.75;
  color: var(--ink);
  margin: 0;
  opacity: 0.85;
  transition: opacity 0.3s ease, color 0.3s ease;
}

.about__bio p:hover { opacity: 1; }

.about__right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about__img-main {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

.about__img-main:hover {
  box-shadow: 0 8px 40px rgba(236, 77, 55, 0.35);
  transform: translateY(-4px);
}

.about__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.4s ease;
}

.about__img-main:hover .about__photo {
  transform: scale(1.06);
  filter: brightness(0.75);
}

.about__img-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1.2rem;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.about__img-overlay span {
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: rgba(236, 77, 55, 0.85);
  padding: 0.4em 1em;
  border-radius: 9999px;
  transform: translateY(8px);
  transition: transform 0.35s ease;
}

.about__img-main:hover .about__img-overlay { opacity: 1; }
.about__img-main:hover .about__img-overlay span { transform: translateY(0); }

.about__sub-section {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.about__sub-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--ink);
  opacity: 0.45;
  margin: 0;
  text-transform: uppercase;
}

.about__img-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
}

.about__doing-card {
  position: relative;
  aspect-ratio: 1 / 1.05;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  background: var(--card);
  transition: background 0.3s ease;
}

.about__doing-card-front {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem;
  text-align: center;
  transition: opacity 0.25s ease;
}

.about__doing-card:hover .about__doing-card-front { opacity: 0; }

.about__doing-card-front h4 {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.3;
}

.about__doing-card-back {
  position: absolute;
  inset: 0;
  background: var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.about__doing-card:hover .about__doing-card-back {
  opacity: 1;
  transform: translateY(0);
}

.about__doing-card-back p {
  font-size: 0.72rem;
  line-height: 1.5;
  color: #fff;
  margin: 0;
  text-align: center;
}

.about__doing-icon {
  width: 22px;
  height: 22px;
  stroke-width: 1.5;
  color: var(--ink);
}

.about__tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.about__tech-icon {
  position: relative;
  width: 35px;
  height: 35px;
  background: var(--card);
  border-radius: 8px;
  display: grid;
  place-items: center;
  padding: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.25s ease, background 0.3s ease;
  cursor: default;
  box-sizing: border-box;
}

.about__tech-icon:hover {
  transform: translateY(-5px) scale(1.12);
  box-shadow: 0 8px 20px rgba(236, 77, 55, 0.2);
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
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  white-space: nowrap;
  padding: 0.3em 0.65em;
  border-radius: 6px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease, background 0.3s ease;
  z-index: 10;
}

.about__tech-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: var(--ink);
}

.about__tech-icon:hover .about__tech-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (max-width: 900px) {
  .about__grid { 
    grid-template-columns: 1fr; gap: 2.5rem; 
  }

  .about__img-main {
     max-width: 260px; 
    }
}

@media (max-width: 768px) {
  .about__inner { 
    padding-left: 1.5rem; 
    padding-right: 1.5rem; 
  }

  .about__label { 
    font-size: 1.8rem; 
  }

  .about__img-row { 
    grid-template-columns: repeat(3, 1fr); 
  }
}

@media (max-width: 480px) {
  .about__inner { 
    padding-left: 1rem; 
    padding-right: 1rem; 
  }

  .about__label { 
    font-size: 1.4rem; 
  }

  .about__heading { 
    font-size: clamp(1.8rem, 7vw, 2.2rem); 
  }

  .about__bio p { 
    font-size: 0.9rem; 
  }

  .about__img-main { 
    max-width: 100%; 
  }

  .about__img-row {
     grid-template-columns: repeat(3, 1fr); 
     gap: 0.5rem; 
  }

  .about__doing-card-front h4 { 
    font-size: 0.62rem; 
  }

  .about__doing-card-back p { 
    font-size: 0.65rem; 
  }

  .about__tech-row { 
    display: grid; 
    grid-template-columns: repeat(5, 1fr); 
    gap: 0.5rem; 
  }

  .about__tech-icon { 
    width: 100%; 
    height: auto; 
    aspect-ratio: 1 / 1;
   }
}

@media (min-width: 1400px) {
  .about__inner {
    padding-left: clamp(5rem, 8vw, 10rem);
    padding-right: clamp(5rem, 8vw, 10rem);
  }

  .about__img-main {
     max-width: 360px; 
  }
}
</style>