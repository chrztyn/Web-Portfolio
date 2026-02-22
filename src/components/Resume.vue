<template>
  <section class="resume" id="resume" aria-label="Resume">
    <div class="resume__inner">

      <p class="resume__label">RESUME</p>

      <div class="resume__summary">
        <p>Highly passionate backend-focused web development student with experience in system logic, database management, and RESTful APIs. Eager to build efficient, scalable applications and apply technical skills to real-world projects.</p>
      </div>

      <div class="resume__grid">

        <div class="resume__left">

          <div class="resume__section">
            <div class="resume__section-header">
              <span class="resume__line"></span>
              <h2 class="resume__section-title">EDUCATION</h2>
            </div>

            <div class="resume__entry">
              <span class="resume__date">2023 - PRESENT</span>
              <p class="resume__degree">BS INFORMATION TECHNOLOGY - WEB DEVELOPMENT</p>
              <p class="resume__school">Holy Angel University</p>
              <p class="resume__detail">Relevant Coursework: Database Management, OOP, Data Structure and Algorithms</p>
            </div>

            <div class="resume__entry">
              <span class="resume__date">2021 - 2023</span>
              <p class="resume__degree">SENIOR HIGH SCHOOL - STEM</p>
              <p class="resume__school">Holy Angel University</p>
            </div>
          </div>

          <div class="resume__section">
            <div class="resume__section-header">
              <span class="resume__line"></span>
              <h2 class="resume__section-title">EXPERIENCE</h2>
            </div>

            <div class="resume__entry" v-for="exp in experiences" :key="exp.role">
              <span class="resume__date">{{ exp.date }}</span>
              <p class="resume__degree">{{ exp.role }}</p>
              <ul class="resume__list">
                <li v-for="bullet in exp.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </div>

        </div>

        <div class="resume__right">
          <div class="resume__preview">
            <img src="../assets/images/resume.png" alt="Resume Preview" class="resume__img" />
          </div>
          <a
            href="/resume.pdf"
            class="resume__download"
            download="Yunun-Christine-Mae_Resume.pdf"
            aria-label="Download Resume"
          >
            DOWNLOAD <span class="resume__download-arrow">↓</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    date: '2025 - 2026',
    role: 'CODE GEEKS — Vice President',
    bullets: [
      'Spearheaded club strategy, events, and mentorship programs, boosting member engagement.'
    ]
  },
  {
    date: '2025 - 2026',
    role: 'AWS CLOUD CLUB HAU — Chief Relations Officer',
    bullets: [
      'Developed partnerships and led communications, increasing event reach and collaboration.'
    ]
  },
  {
    date: '2024 - 2025',
    role: 'HAU SOC COLLEGE STUDENT COUNCIL — Councilor for Community Extension Services',
    bullets: [
      'Organized community outreach and volunteer initiatives and student events.'
    ]
  },
  {
    date: '2024 - 2025',
    role: 'GOOGLE DEVELOPER GROUPS ON CAMPUS HAU — Operations Committee',
    bullets: [
      'Executed planning and logistics for events, ensuring seamless operations.'
    ]
  },
]
</script>

<style scoped>
.resume {
  background: var(--bg-alt);
  min-height: 100vh;
  padding: 4rem 0 5rem;
  transition: background 0.3s ease;
}

.resume__inner {
  width: 100%;
  padding-left: clamp(2rem, 5vw, 5rem);
  padding-right: clamp(2rem, 5vw, 5rem);
}

.resume__label {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--red);
  margin: 0 0 1.5rem;
  font-family: 'Satoshi-Variable', sans-serif;
}

.resume__summary {
  border-left: 4px solid var(--red);
  padding: 1rem 1.5rem;
  background: var(--card);
  border-radius: 0 8px 8px 0;
  margin-bottom: 2.5rem;
  max-width: 680px;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.resume__summary:hover {
  border-left-color: var(--ink);
  background: var(--card-dark);
}

.resume__summary p {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--ink);
  opacity: 0.8;
  margin: 0;
}

.resume__grid {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 4rem;
  align-items: start;
}

.resume__left {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.resume__section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.resume__section-header {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.resume__line {
  display: block;
  width: 50px;
  height: 3px;
  background: var(--border);
  flex-shrink: 0;
}

.resume__section-title {
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--ink);
  margin: 0;
  letter-spacing: 0.02em;
  position: relative;
  padding-bottom: 0.4rem;
  cursor: default;
  transition: color 0.3s ease;
}

.resume__section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--red);
  transition: width 0.3s ease;
}

.resume__section-title:hover::after { width: 100%; }

.resume__entry {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid var(--border);
  transition: transform 0.2s ease, border-color 0.2s ease;
  cursor: default;
}

.resume__entry::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--red);
  transition: transform 0.2s ease;
}

.resume__entry:hover { 
  transform: translateX(6px); border-left-color: var(--red); 
}

.resume__entry:hover::before { 
  transform: scale(1.5); 
}

.resume__date {
  display: inline-block;
  background: var(--red);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  letter-spacing: 0.08em;
  width: fit-content;
  margin-bottom: 0.2rem;
  transition: background 0.2s ease;
}

.resume__entry:hover .resume__date { 
  background: var(--ink); 
}

.resume__degree {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.resume__entry:hover .resume__degree { 
  color: var(--red); 
}

.resume__school {
  font-size: 0.85rem;
  color: var(--ink);
  opacity: 0.7;
  margin: 0;
}

.resume__detail {
  font-size: 0.82rem;
  color: var(--ink);
  opacity: 0.65;
  margin: 0.2rem 0 0;
  line-height: 1.5;
}

.resume__list {
  margin: 0.4rem 0 0;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.resume__list li {
  font-size: 0.83rem;
  line-height: 1.55;
  color: var(--ink);
  opacity: 0.75;
}

.resume__right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: sticky;
  top: 100px;
}

.resume__preview {
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s ease;
}

.resume__preview:hover {
  box-shadow: 0 0 25px 10px rgba(236, 77, 55, 0.35);
}

.resume__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px);
  transition: filter 0.3s ease;
}

.resume__preview:hover .resume__img { 
  filter: blur(0px); 
}

.resume__download {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--border);
  color: var(--ink);
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-decoration: none;
  padding: 0.8rem 3rem;
  border-radius: 999px;
  transition: background 0.2s ease, color 0.2s ease;
}

.resume__download:hover { 
  background: var(--red); color: #fff; 
}

.resume__download-arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}

.resume__download:hover .resume__download-arrow { 
  transform: translateY(3px); 
}

@media (max-width: 900px) {
  .resume__grid {
     grid-template-columns: 1fr; 
    }

  .resume__right { 
    position: static; 
  }
}
</style>