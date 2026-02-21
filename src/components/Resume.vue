<template>
  <section class="resume" id="resume" aria-label="Resume">
    <div class="resume__inner">

      <p class="resume__label">RESUME</p>

      <div class="resume__grid">

        <div class="resume__left">

          <div class="resume__section">
            <div class="resume__section-header">
              <span class="resume__line"></span>
              <h2 class="resume__section-title">EDUCATION</h2>
            </div>

            <div class="resume__entry">
              <p class="resume__date">2023 - PRESENT</p>
              <p class="resume__degree">BS INFORMATION TECHNOLOGY - WEB DEVELOPMENT</p>
              <p class="resume__school">Holy Angel University</p>
              <p class="resume__detail">Relevant Coursework: Database Management, OOP, Data Structure and Algorithms</p>
            </div>

            <div class="resume__entry">
              <p class="resume__date">2021 - 2023</p>
              <p class="resume__degree">SENIOR HIGH SCHOOL - STEM</p>
              <p class="resume__school">Holy Angel University</p>
            </div>
          </div>

          <!-- Experience -->
          <div class="resume__section">
            <div class="resume__section-header">
              <span class="resume__line"></span>
              <h2 class="resume__section-title">EXPERIENCE</h2>
            </div>

            <div class="resume__entry" v-for="exp in experiences" :key="exp.role">
              <p class="resume__date">{{ exp.date }}</p>
              <p class="resume__degree">{{ exp.role }}</p>
              <ul class="resume__list">
                <li v-for="bullet in exp.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </div>

        </div>

        <div class="resume__right">
          <div class="resume__preview">
            <div class="resume__img-placeholder">
              <span>Resume Preview</span>
            </div>
          </div>

          <a 
            href="/resume.pdf"             
            class="resume__download" 
            download="Yunun-Christine-Mae_Resume.pdf"        
            aria-label="Download Resume"
          >
            DOWNLOAD
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
  --cream: #f5f0e8;
  --red: #EC4D37;
  --ink: #1a1a1a;
  background: var(--cream);
  min-height: 100vh;
  padding: 4rem 0 5rem;
}

.resume__inner {
  width: 100%;
  padding-left: clamp(2rem, 5vw, 5rem);
  padding-right: clamp(2rem, 5vw, 5rem);
}

.resume__label {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: var(--ink);
  margin: 0 0 2.5rem;
  font-family: 'Satoshi-Variable', sans-serif;
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
  background: #c0b8ad;
  flex-shrink: 0;
}

.resume__section-title {
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--ink);
  margin: 0;
  letter-spacing: 0.02em;
}

.resume__entry {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.resume__date {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  letter-spacing: 0.05em;
  margin: 0;
}

.resume__degree {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0.3rem 0 0;
  letter-spacing: 0.02em;
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
  background: #d9d9d9;
  position: relative;
}

.resume__img-placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: #aaa;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  position: relative;
}

.resume__img-placeholder::before,
.resume__img-placeholder::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: #bbb;
  top: 50%;
}

.resume__img-placeholder::before { transform: rotate(35deg); }
.resume__img-placeholder::after  { transform: rotate(-35deg); }

.resume__download {
  display: inline-block;
  background: #c0b8ad;
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
  background: var(--red);
  color: #fff;
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