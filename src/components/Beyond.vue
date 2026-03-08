<template>
  <section class="beyond" id="notcoding" aria-label="When I'm Not Coding">
    <div class="beyond__inner">

      <div class="beyond__label" ref="labelEl">
        <span>04 — When I'm Not Coding</span>
      </div>

      <h2 class="beyond__title" ref="titleEl">
        <div class="beyond__title-inner">
          Beyond the <em>Terminal.</em>
        </div>
      </h2>

      <p class="beyond__intro" ref="introEl">
        Outside of writing code, I stay involved in orgs, events, and causes I actually
        care about — it's how I've grown just as much as a person as I have as a developer.
      </p>

      <div class="beyond__masonry" ref="masonryEl">

        <div class="beyond__pm-item">
          <img src="../assets/images/beyond1.jpg" alt="Running for student office" />
          <div class="beyond__pm-overlay">
            <div class="beyond__pm-title">Running for Student Office</div>
            <div class="beyond__pm-desc">Ran for SOC Councilor — and made it on the ballot.</div>
          </div>
        </div>

        <div class="beyond__pm-item">
          <img src="../assets/images/beyond2.jpg" alt="Tree planting outreach" />
          <div class="beyond__pm-overlay">
            <div class="beyond__pm-title">Tree Planting</div>
            <div class="beyond__pm-desc">Got off campus and did something that actually matters.</div>
          </div>
        </div>

        <div class="beyond__pm-item">
          <img src="../assets/images/beyond3.jpg" alt="Community outreach program" />
          <div class="beyond__pm-overlay">
            <div class="beyond__pm-title">Community Outreach</div>
            <div class="beyond__pm-desc">Met real people, heard real stories, did real work.</div>
          </div>
        </div>

        <div class="beyond__pm-item">
          <img src="../assets/images/beyond4.jpg" alt="Hosting a student workshop" />
          <div class="beyond__pm-overlay">
            <div class="beyond__pm-title">Student Workshop</div>
            <div class="beyond__pm-desc">Helped run a workshop that actually filled the room.</div>
          </div>
        </div>

        <div class="beyond__pm-item">
          <img src="../assets/images/beyond5.jpg" alt="Club leadership" />
          <div class="beyond__pm-overlay">
            <div class="beyond__pm-title">Club Leadership</div>
            <div class="beyond__pm-desc">VP of Code Geeks — keeping the team and the vision aligned.</div>
          </div>
        </div>

        <div class="beyond__pm-item">
          <img src="../assets/images/beyond6.jpg" alt="Facilitating a session" />
          <div class="beyond__pm-overlay">
            <div class="beyond__pm-title">Facilitating</div>
            <div class="beyond__pm-desc">Up front, running the session, making sure it flows.</div>
          </div>
        </div>

        <div class="beyond__pm-item">
          <img src="../assets/images/beyond7.jpg" alt="Working in the lab" />
          <div class="beyond__pm-overlay">
            <div class="beyond__pm-title">Lab Work</div>
            <div class="beyond__pm-desc">Reviewing materials before things kick off.</div>
          </div>
        </div>

        <div class="beyond__pm-item">
          <img src="../assets/images/beyond8.jpg" alt="Digital outreach project" />
          <div class="beyond__pm-overlay">
            <div class="beyond__pm-title">IMMFI Website Project</div>
            <div class="beyond__pm-desc">Helped rebuild a nonprofit's website from the ground up.</div>
          </div>
        </div>

        <div class="beyond__pm-item">
          <img src="../assets/images/beyond9.jpg" alt="Regional conference" />
          <div class="beyond__pm-overlay">
            <div class="beyond__pm-title">Regional Blockchain Conference</div>
            <div class="beyond__pm-desc">Volunteered and represented at a regional tech event.</div>
          </div>
        </div>

        <div class="beyond__bottom-row" ref="proseEl">
          <div class="beyond__pm-item beyond__pm-item--last">
            <img src="../assets/images/beyond10.png" alt="Student events" />
            <div class="beyond__pm-overlay">
              <div class="beyond__pm-title">University Days</div>
              <div class="beyond__pm-desc">Showed up, had fun, and still got stuff done.</div>
            </div>
          </div>

          <div class="beyond__prose">
            <div class="beyond__prose-tag">Soft Skills & Leadership</div>
            <p>
              I'm not just a developer who sits behind a screen. As
              <strong>Vice President of Code Geeks</strong>, I helped plan our club's
              direction, ran workshops, and looked after members who were just starting
              out — which honestly taught me more about communication than any class did.
            </p>
            <p>
              As <strong>Chief Relations Officer of AWS Cloud Club HAU</strong>, I handled
              partnerships and external communications — learned fast that professional
              writing and knowing how to talk to people are real skills worth having.
            </p>
            <p>
              Through the <strong>HAU SOC Student Council</strong> and
              <strong>GDG on Campus HAU</strong>, I helped coordinate events from start
              to finish — logistics, people, timelines, all of it. It gets stressful,
              but I've gotten good at keeping things together under pressure.
            </p>
            <ul class="beyond__skills-list">
              <li><span>Leadership & Team Management</span></li>
              <li><span>Stakeholder Communication</span></li>
              <li><span>Event Planning & Execution</span></li>
              <li><span>Mentorship & Knowledge Sharing</span></li>
              <li><span>Strategic Partnerships</span></li>
              <li><span>Cross-functional Collaboration</span></li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const labelEl   = ref(null)
const titleEl   = ref(null)
const introEl   = ref(null)
const masonryEl = ref(null)
const proseEl   = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible')
        observer.unobserve(e.target)
      }
    }),
    { threshold: 0.08 }
  )
  ;[labelEl, titleEl, introEl, masonryEl, proseEl].forEach(r => {
    if (r.value) observer.observe(r.value)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap');

.beyond {
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s ease;
}

.beyond__inner {
  width: 100%;
  padding: 4rem clamp(1.5rem, 5vw, 7rem) 5rem;
  box-sizing: border-box;
}

.beyond__label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  color: var(--red);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.beyond__label.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.beyond__label::after {
  content: '';
  width: 36px;
  height: 1px;
  background: rgba(236, 77, 55, 0.3);
  flex-shrink: 0;
}

.beyond__title {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(2.2rem, 4.2vw, 4.8rem);
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: var(--ink);
  overflow: hidden;
  margin: 0 0 1.5rem;
}

.beyond__title-inner {
  display: block;
  transform: translateY(100%);
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.beyond__title.is-visible .beyond__title-inner {
  transform: translateY(0);
}

.beyond__title em {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--red);
}

.beyond__intro {
  font-family: 'Syne', sans-serif;
  font-size: 0.88rem;
  line-height: 1.78;
  color: var(--ink2);
  max-width: 540px;
  margin: 0 0 4rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
}

.beyond__intro.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.beyond__masonry {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 0.75rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
}

.beyond__masonry.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.beyond__masonry.is-visible .beyond__pm-item {
  animation: pmIn 0.7s ease forwards;
  opacity: 0;
}

.beyond__masonry.is-visible .beyond__pm-item:nth-child(1) { animation-delay: 0s; }
.beyond__masonry.is-visible .beyond__pm-item:nth-child(2) { animation-delay: 0.08s; }
.beyond__masonry.is-visible .beyond__pm-item:nth-child(3) { animation-delay: 0.16s; }
.beyond__masonry.is-visible .beyond__pm-item:nth-child(4) { animation-delay: 0.24s; }
.beyond__masonry.is-visible .beyond__pm-item:nth-child(5) { animation-delay: 0.32s; }
.beyond__masonry.is-visible .beyond__pm-item:nth-child(6) { animation-delay: 0.40s; }
.beyond__masonry.is-visible .beyond__pm-item:nth-child(7) { animation-delay: 0.48s; }
.beyond__masonry.is-visible .beyond__pm-item:nth-child(8) { animation-delay: 0.56s; }
.beyond__masonry.is-visible .beyond__pm-item:nth-child(9) { animation-delay: 0.64s; }
.beyond__masonry.is-visible .beyond__pm-item--last { animation-delay: 0.72s; }

@keyframes pmIn {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(24px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.beyond__bottom-row {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  gap: 0.75rem;
  align-items: stretch;
}

.beyond__pm-item {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border2);
  cursor: default;
  aspect-ratio: 4 / 3;
}

.beyond__pm-item:nth-child(1) {
  grid-row: span 2;
  aspect-ratio: unset;
}

.beyond__pm-item:nth-child(1) img {
  height: 100%;
  min-height: 280px;
}

.beyond__pm-item:nth-child(4) {
  grid-row: span 2;
  aspect-ratio: unset;
}

.beyond__pm-item:nth-child(4) img {
  height: 100%;
  min-height: 280px;
}

.beyond__pm-item:nth-child(7) {
  aspect-ratio: 4 / 3;
}

.beyond__pm-item:nth-child(7) img {
  height: 100%;
}

.beyond__pm-item:nth-child(8) {
  aspect-ratio: 4 / 3;
}

.beyond__pm-item:nth-child(8) img {
  height: 100%;
}

.beyond__pm-item:nth-child(9) {
  grid-column: span 2;
  aspect-ratio: 16 / 7;
}

.beyond__pm-item--last {
  aspect-ratio: 4 / 5;
  height: auto;
  min-height: 0;
}

.beyond__pm-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(20%);
  transition: transform 0.6s ease, filter 0.5s ease;
}

.beyond__pm-item:hover img {
  transform: scale(1.08);
  filter: grayscale(0%);
}

.beyond__pm-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.2rem;
}

.beyond__pm-item:hover .beyond__pm-overlay {
  opacity: 1;
}

.beyond__pm-title {
  font-family: 'Syne', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.15rem;
}

.beyond__pm-desc {
  font-size: 0.68rem;
  line-height: 1.45;
  color: rgba(255,255,255,0.65);
}

.beyond__prose {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2.2rem;
  border: 1px solid var(--border2);
  background: var(--bg2);
  justify-content: center;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
}

.beyond__masonry.is-visible .beyond__prose {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.78s;
}

.beyond__prose-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.54rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.beyond__prose-tag::after {
  content: '';
  height: 1px;
  width: 28px;
  background: rgba(236, 77, 55, 0.35);
}

.beyond__prose p {
  font-family: 'Syne', sans-serif;
  font-size: clamp(0.82rem, 1vw, 0.95rem);
  line-height: 1.82;
  color: var(--ink2);
  margin: 0;
}

.beyond__prose strong {
  color: var(--ink);
  font-weight: 700;
}

.beyond__skills-list {
  list-style: none;
  margin: 0.4rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.beyond__skills-list li span {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.06em;
  color: var(--ink2);
  border: 1px solid var(--border2);
  padding: 0.28rem 0.7rem;
  border-radius: 999px;
  transition: border-color 0.25s, color 0.25s;
}

.beyond__skills-list li span:hover {
  border-color: var(--red);
  color: var(--red);
}

@media (max-width: 900px) {
  .beyond__masonry {
    grid-template-columns: repeat(2, 1fr);
  }
  .beyond__pm-item:nth-child(1),
  .beyond__pm-item:nth-child(4) {
    grid-row: auto;
    aspect-ratio: 4 / 3;
  }
  .beyond__pm-item:nth-child(1) img,
  .beyond__pm-item:nth-child(4) img {
    min-height: auto;
  }
  .beyond__pm-item:nth-child(9) {
    grid-column: auto;
    aspect-ratio: 4 / 3;
  }
  .beyond__bottom-row {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .beyond__inner {
    padding: 3rem 1rem 3rem;
  }
  .beyond__masonry {
    grid-template-columns: repeat(2, 1fr);
  }
  .beyond__pm-item {
    aspect-ratio: 4 / 3;
  }
  .beyond__pm-item:nth-child(n) {
    grid-row: auto;
    grid-column: auto;
    aspect-ratio: 4 / 3;
  }
  .beyond__pm-item:nth-child(n) img {
    min-height: auto;
    height: 100%;
  }
  .beyond__bottom-row {
    grid-template-columns: 1fr;
  }
  .beyond__pm-item--last {
    min-height: 200px;
  }
  .beyond__prose {
    padding: 1.5rem 1.2rem;
  }
}
</style>