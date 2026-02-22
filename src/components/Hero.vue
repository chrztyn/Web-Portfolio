<template>
  <section class="hero" aria-label="Hero introduction">
    <div class="hero__inner">

      <div class="hero__row-top">
        <h1 class="hero__hello">HELLO</h1>
        <div class="hero__badge" role="note" aria-label="Job title: back end developer">
          <span>back end</span>
          <span>developer</span>
        </div>
      </div>

      <div class="hero__row-mid" aria-hidden="false">
        <span class="hero__im">I'M</span>
        <span class="hero__asterisk" aria-hidden="true">✳</span>
        <span class="hero__name">CHRISTINE</span>
      </div>

      <div class="hero__row-bottom">
        <nav class="hero__cta" aria-label="Primary actions">
          <a href="#contact" class="hero__link" aria-label="Contact Christine Mae Yunun">
            <span class="hero__arrow" aria-hidden="true">↗</span>
            <span>CONTACT ME</span>
          </a>
          <a href="#portfolio" class="hero__link" aria-label="View Christine's portfolio">
            <span class="hero__arrow" aria-hidden="true">↗</span>
            <span>MY PORTFOLIO</span>
          </a>
        </nav>

        <div class="hero__bio">
          <p>
            Highly passionate backend-focused web developer with experience in system architecture, 
            database management, and RESTful API development. Skilled in building efficient, scalable, 
            and maintainable applications. Eager to solve problems and apply technical expertise 
            to real world projects.
          </p>
        </div>
      </div>

      <div class="hero__scroll" aria-hidden="true">
        <span>SCROLL</span>
        <div class="hero__scroll-line"></div>
      </div>

      <div class="hero__projects">
        <p class="hero__projects-label">FEATURED PROJECTS</p>
        <div class="hero__projects-grid">
          <a
            v-for="project in featuredProjects"
            :key="project.title"
            :href="project.link"
            class="hero__project-card"
          >
            <div class="hero__project-img">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="hero__project-info">
              <span class="hero__project-tech">{{ project.tech }}</span>
              <h3 class="hero__project-title">{{ project.title }}</h3>
              <p class="hero__project-desc">{{ project.desc }}</p>
            </div>
            <span class="hero__project-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const featuredProjects = [
  {
    title: 'SplitSmart',
    tech: 'Node.js · Express.js · MongoDB',
    desc: 'A web app that automates group expense tracking with RESTful APIs and authentication.',
    image: 'https://placehold.co/400x240/d9d9d9/888?text=SplitSmart',
    link: '#portfolio'
  },
  {
    title: 'Non Ta Mangan',
    tech: 'PHP · MySQL · JavaScript',
    desc: 'A restaurant picker and rating web app with spin-the-wheel and user account management.',
    image: 'https://placehold.co/400x240/d9d9d9/888?text=Non+Ta+Mangan',
    link: '#portfolio'
  },
  {
    title: 'Pelikula',
    tech: 'HTML · CSS · JavaScript',
    desc: 'A movie review and rating web prototype with responsive layout and UI consistency.',
    image: 'https://placehold.co/400x240/d9d9d9/888?text=Pelikula',
    link: '#portfolio'
  },
]
</script>

<style scoped>
.hero {
  --cream: #f5f0e8;
  --red:   #EC4D37;
  --ink:   #1a1a1a;
  --font-display: 'Satoshi-Regular', sans-serif;
  --font-body: 'Satoshi-Variable', sans-serif;

  font-family: var(--font-body);
  min-height: auto;
  display: flex;
  align-items: flex-start;       
  justify-content: flex-start;   
  padding: 2vh clamp(1rem, 8vw, 6rem);
  padding-top: 0.5rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.4;
  z-index: 0;
}

.hero__inner {
  width: 100%;
  max-width: 100%;   
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  z-index: 1;
}

.hero__row-top {
  display: flex;
  align-items: flex-end;
  gap: 3rem;
}

.hero__hello {
  font-family: var(--font-display);
  font-weight: 900;
  color: var(--red);
  font-size: clamp(5rem, 11vw, 13rem);
  line-height: 0.85;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -0.02em;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.1s forwards;
}

.hero__badge {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
  line-height: 0;            
  font-size: 0;           
  align-items: flex-start;
}

.hero__badge span {
  display: inline-flex;     
  align-items: center;
  background: var(--ink);
  color: #fff;
  width: max-content;
  white-space: nowrap;
  font-family: 'Satoshi-Regular';
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: -0.01em;
  font-size: clamp(1.3rem, 2.6vw, 2.4rem);
  line-height: 1;        
  padding: 0.5em 1em;        
  border-radius: 9999px;     
  margin: 0;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
              box-shadow 0.3s ease;
}

.hero__badge span:first-child {
  transform: rotate(-6deg);
  opacity: 0;
  animation: stackFirst 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
}

.hero__badge span:last-child {
  margin-top: -0.35em;
  margin-left: 3.3em;
  opacity: 0;
  animation: stackSecond 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s forwards;
}

.hero__badge:hover span:first-child {
  transform: rotate(-6deg) translateY(4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
}

.hero__badge:hover span:last-child {
  transform: translateY(4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
}

.hero__row-mid {
  display: flex;
  align-items: center;
  gap: clamp(0.6rem, 1.5vw, 1.5rem);
  margin-top: 0rem;
}

.hero__im {
  font-family: var(--font-display);
  font-weight: 900;
  color: var(--red);
  font-size: clamp(4rem, 9.5vw, 11rem);
  line-height: 0.88;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.5s forwards;
}

.hero__asterisk {
  color: var(--red);
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 1;
  animation: spin 10s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

.hero__name {
  font-family: var(--font-display);
  font-weight: 900;
  color: var(--red);
  font-size: clamp(4rem, 9.5vw, 11rem);
  line-height: 0.88;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.7s forwards;
}


@keyframes spin {
  to { transform: rotate(360deg); }
}

.hero__row-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 6.5rem;
  opacity: 0;
  animation: fadeUp 0.7s ease 1s forwards;
}

.hero__cta {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.hero__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--red);
  font-size: clamp(0.8rem, 1.1vw, 1rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  position: relative;
  transition: opacity 0.18s;
}

.hero__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--red);
  transition: width 0.3s ease;
}

.hero__link:hover::after {
  width: 100%;
}

.hero__arrow {
  font-size: 1.3em;
  line-height: 1;
}

.hero__bio {
  max-width: 580px;
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  line-height: 1.7;
  color: var(--ink);
  flex: 1;
}

.hero__bio p { 
  margin: 0;
  text-align: justify; 
}

.hero__scroll {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 2rem;
  opacity: 0;
  animation: fadeUp 0.7s ease 1.3s forwards;
}

.hero__scroll span {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: var(--ink);
  opacity: 0.35;
}

.hero__scroll-line {
  width: 40px;
  height: 1px;
  background: #c0b8ad;
  position: relative;
  overflow: hidden;
}

.hero__scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--red);
  animation: scrollSlide 1.5s ease infinite;
}

@keyframes scrollSlide {
  to { left: 100%; }
}

.hero__projects {
  margin-top: 4rem;
  opacity: 0;
  animation: fadeUp 0.7s ease 1.2s forwards;
}

.hero__projects-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--ink);
  opacity: 0.45;
  margin: 0 0 1.2rem;
}

.hero__projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.hero__project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1.5px solid #d0c9bc;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: var(--ink);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.hero__project-card:hover {
  border-color: var(--red);
  box-shadow: 0 4px 20px rgba(236, 77, 55, 0.12);
  transform: translateY(-4px);
}

.hero__project-img {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.hero__project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.hero__project-card:hover .hero__project-img img {
  transform: scale(1.05);
}

.hero__project-info {
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
}

.hero__project-tech {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--red);
  letter-spacing: 0.05em;
}

.hero__project-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
}

.hero__project-desc {
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--ink);
  opacity: 0.6;
  margin: 0;
}

.hero__project-arrow {
  position: absolute;
  top: 0.7rem;
  right: 0.8rem;
  font-size: 1rem;
  color: var(--red);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.hero__project-card:hover .hero__project-arrow {
  opacity: 1;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero__inner {
    padding-left: 1.5rem;
  }

  .hero__row-top {
    gap: 1.5rem;
    align-items: center;
  }

  .hero__row-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .hero__bio {
    max-width: 100%;
    text-align: left;
  }

  .hero__bio p {
    text-align: left;
  }

  .hero__projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1rem;
    padding-top: 0.5rem;
    overflow-x: hidden;
  }

  .hero__inner {
    padding-left: 0;
  }

  .hero__row-top {
    flex-direction: row;
    align-items: flex-end;
    gap: 0.8rem;
    flex-wrap: nowrap;
  }

  .hero__hello {
    font-size: clamp(2.8rem, 16vw, 4.5rem);
    flex-shrink: 0;
  }

  .hero__badge span {
    font-size: clamp(0.7rem, 3.5vw, 1rem);
    padding: 0.4em 0.8em;
  }

  .hero__badge span:last-child {
    margin-left: 2em;  
  }

  .hero__im,
  .hero__name {
    font-size: clamp(2.5rem, 14vw, 4rem);
  }

  .hero__asterisk {
    font-size: clamp(1.5rem, 7vw, 2.5rem);
  }

  .hero__row-mid {
    gap: 0.3rem;
    flex-wrap: nowrap;
  }

  .hero__row-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    margin-top: 1.5rem;
  }

  .hero__bio p {
    text-align: left;
    font-size: 0.88rem;
  }

  .hero__projects-grid {
    grid-template-columns: 1fr;
  }

  .hero__cta {
    flex-direction: column;  
    gap: 0.8rem;
  }
}

@media (min-width: 1400px) {
  .hero__inner {
    padding-left: clamp(5rem, 8vw, 10rem);
  }

  .hero__projects-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .hero__bio {
    max-width: 680px;
    font-size: 1rem;
  }
}
</style>

<style>
@keyframes stackFirst {
  from { opacity: 0; transform: rotate(-6deg) translateY(-50px); }
  to   { opacity: 1; transform: rotate(-6deg) translateY(0); }
}

@keyframes stackSecond {
  from { opacity: 0; transform: translateY(-50px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>