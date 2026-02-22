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
            </div>

          <div class="about__sub-section">
            <p class="about__sub-label">WHAT I'M DOING</p>
<div class="about__img-row">
  <div class="about__doing-card" v-for="item in whatImDoing" :key="item.title">
    <component :is="item.icon" class="about__doing-icon" />
    <div class="about__doing-card-text">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>
    </div>
  </div>
</div>
          </div>
          <div class="about__sub-section">
            <p class="about__sub-label">WHAT I'M USING</p>
            <div class="about__tech-row">
              <div class="about__tech-icon" v-for="tech in techStack" :key="tech.name" :title="tech.name">
                <img :src="tech.icon" :alt="tech.name" />
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
  --cream: #f5f0e8;
  --red: #EC4D37;
  --ink: #1a1a1a;
  --font-display: 'Satoshi-Variable', sans-serif;

  background:  #f5f0e8;
  padding: 0;
}

.about__inner {
  width: 100%;
  max-width: 100%;
  padding-top: 0;  
  padding-left: clamp(2rem, 5vw, 5rem);
  padding-right: clamp(2rem, 5vw, 5rem);
}

.about__label {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.10em;
  color: var(--red);
  opacity: 0.5;
  margin: 0 0 1.5rem;
  text-transform: uppercase;
}

.about__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr; 
  gap: 4rem;
  align-items: start;
}

.about__heading {
  font-family: var(--font-display);
   font-size: clamp(2.2rem, 3.5vw, 3.2rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--ink);
  margin: 0 0 2rem;
}

.about__highlight {
  color: var(--red);
  font-weight: 800;
}

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
}

.about__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: box-shadow 0.3s ease;
}

.about__img-main {
  transition: box-shadow 0.3s ease;
}

.about__img-main:hover {
  box-shadow: 0 0 25px 10px rgba(236, 77, 55, 0.35);
}

.about__doing-card {
  background: #d9d9d9;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.about__doing-card p {
  position: absolute;
  inset: 0;
  background: #EC4D37;
  color: #fff;
  font-size: 0.75rem;
  line-height: 1.5;
  padding: 1rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.about__doing-card:hover p {
  opacity: 1;
}

.about__doing-icon {
  width: 18px;
  height: 18px;
  min-width: 18px;  
  min-height: 18px;
  stroke-width: 1.5;  
  color: var(--ink);
}

.about__right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about__img-main {
  width: 100%;
  max-width: 320px;  
  aspect-ratio: 0.5/0.5; 
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;   
}

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

.about__img-small {
  aspect-ratio: 4/3;
  background: #ddd;
  border-radius: 4px;
  display: grid;
  place-items: center;
  color: #bbb;
  font-size: 0.75rem;
  position: relative;
  overflow: hidden;
}

.about__img-small::before,
.about__img-small::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: #bbb;
  top: 50%;
}

.about__img-small::before { transform: rotate(36deg); }
.about__img-small::after  { transform: rotate(-36deg); }

.about__tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.about__tech-icon {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 8px;
  display: grid;
  place-items: center;
  padding: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;
}

.about__tech-icon:hover {
  transform: translateY(-2px);
}

.about__tech-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>