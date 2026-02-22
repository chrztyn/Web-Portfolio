<template>
  <section class="skills" id="skills" aria-label="Skills">
    <div class="skills__inner">

      <p class="skills__label">SKILLS</p>
      <hr class="skills__divider" />

      <div class="skills__layout">

        <nav class="skills__tabs" aria-label="Skill categories">
          <button
            v-for="cat in categories"
            :key="cat"
            class="skills__tab"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </nav>

        <div class="skills__grid-wrap">
          <div class="skills__grid">
            <div class="skills__col" v-for="(col, colIndex) in columns" :key="colIndex">
              <div
                v-for="(skill, rowIndex) in col"
                :key="rowIndex"
                class="skills__card"
                :class="{ empty: !skill }"
              >
                <template v-if="skill">
                  <div class="skills__icon-wrap">
                    <img :src="skill.icon" :alt="skill.name" class="skills__icon" />
                  </div>
                  <div class="skills__info">
                    <span class="skills__name">{{ skill.name }}</span>
                  </div>
                  <div class="skills__card-glow"></div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile grid (flat 4x2) -->
        <div class="skills__mobile-grid">
          <div
            v-for="skill in filteredSkills"
            :key="skill.name"
            class="skills__mobile-card"
          >
            <div class="skills__icon-wrap">
              <img :src="skill.icon" :alt="skill.name" class="skills__icon" />
            </div>
            <span class="skills__name">{{ skill.name }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['Frontend', 'Backend', 'Tools']
const activeCategory = ref('Frontend')

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 4, category: 'Frontend' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 3, category: 'Frontend' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 3, category: 'Frontend' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 2, category: 'Frontend' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', level: 2, category: 'Frontend' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 3, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 2, category: 'Frontend' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 2, category: 'Frontend' },

  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 3, category: 'Backend' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 3, category: 'Backend' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 2, category: 'Backend' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 2, category: 'Backend' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 3, category: 'Backend' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 2, category: 'Backend' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 3, category: 'Backend' },
  { name: 'RESTful APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', level: 3, category: 'Backend' },

  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 3, category: 'Tools' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', level: 3, category: 'Tools' },
  { name: 'XAMPP', icon: 'https://www.apachefriends.org/images/xampp-logo-ac950edf.svg', category: 'Tools' },  
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 2, category: 'Tools' },
]

const filteredSkills = computed(() =>
  skills.filter(s => s.category === activeCategory.value).slice(0, 8)
)

const columns = computed(() => {
  const s = filteredSkills.value
  const col1 = []
  const col2 = []
  const col3 = []

  for (let i = 0; i < s.length; i++) {
    if (i % 3 === 0) col1.push(s[i])
    else if (i % 3 === 1) col2.push(s[i])
    else col3.push(s[i])
  }

  col1.unshift(null)
  col3.unshift(null)

  const maxLen = Math.max(col1.length, col2.length, col3.length)
  while (col1.length < maxLen) col1.push(null)
  while (col2.length < maxLen) col2.push(null)
  while (col3.length < maxLen) col3.push(null)

  return [col1, col2, col3]
})
</script>

<style scoped>
.skills {
  background: var(--bg-alt);
  padding: 4rem 0 5rem;
  transition: background 0.3s ease;
}

.skills__inner {
  width: 100%;
  padding-left: clamp(2rem, 5vw, 5rem);
  padding-right: clamp(2rem, 5vw, 5rem);
}

.skills__label {
  font-size: 2rem;
  font-weight: 800;
  color: var(--red);
  margin: 0 0 0.8rem;
  font-family: 'Satoshi-Variable', sans-serif;
}

.skills__divider {
  border: none;
  border-top: 2px solid var(--ink);
  margin: 0 0 2rem;
  transition: border-color 0.3s ease;
}

.skills__layout {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

.skills__tabs {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 110px;
}

.skills__tab {
  background: none;
  border: none;
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  opacity: 0.4;
  cursor: pointer;
  text-align: left;
  padding: 0;
  transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.skills__tab.active {
  opacity: 1;
  color: var(--red);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

.skills__tab:hover {
  opacity: 0.8;
  transform: translateX(4px);
}

.skills__grid-wrap {
  flex: 1;
  overflow: hidden;
  min-width: 0;
  mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  align-items: start;
  padding: 1rem 0 2rem;
  width: 100%;
}

.skills__col {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.skills__col:nth-child(1),
.skills__col:nth-child(3) {
  margin-top: 0;
}

.skills__col:nth-child(2) {
  margin-top: -1.8rem;
}

.skills__card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1.5px solid var(--border);
  border-radius: 12px;
  padding: 0.9rem 1rem;
  background: var(--bg);
  min-height: 68px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease, background 0.3s ease;
}

.skills__card:hover:not(.empty) {
  border-color: var(--red);
  box-shadow: 0 4px 20px rgba(236, 77, 55, 0.15);
  transform: translateY(-3px);
}

.skills__card.empty {
  cursor: default;
  background: transparent;
  box-shadow: none;
  pointer-events: none;
}

.skills__card-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(236, 77, 55, 0.06) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.skills__card:hover:not(.empty) .skills__card-glow { 
  opacity: 1; 
}

.skills__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.skills__card:hover:not(.empty) .skills__icon-wrap {
  transform: scale(1.2) rotate(-5deg);
}

.skills__icon {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.skills__info {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.skills__name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink);
  transition: color 0.2s ease;
}

.skills__card:hover:not(.empty) .skills__name { 
  color: var(--red); 
}

.skills__mobile-grid { 
  display: none; 
}

@media (max-width: 768px) {
  .skills__layout { 
    flex-direction: column; 
    gap: 2rem; 
  }

  .skills__tabs { 
    flex-direction: row; 
    flex-wrap: wrap; 
    gap: 0.8rem; 
  }

  .skills__grid-wrap { 
    display: none; 
  }

  .skills__mobile-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.7rem;
    width: 100%;
  }

  .skills__mobile-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 0.9rem 0.5rem;
    background: var(--bg);
    text-align: center;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease, background 0.3s ease;
    cursor: default;
  }

  .skills__mobile-card:hover {
    border-color: var(--red);
    box-shadow: 0 4px 16px rgba(236, 77, 55, 0.15);
    transform: translateY(-3px);
  }

  .skills__mobile-card:hover .skills__icon-wrap { 
    transform: scale(1.2) rotate(-5deg); 
  }

  .skills__mobile-card:hover .skills__name { 
    color: var(--red); 
  }

  .skills__mobile-card .skills__icon { 
    width: 30px; height: 30px;
   }

  .skills__mobile-card .skills__name {
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--ink);
    transition: color 0.2s ease;
  }
}

@media (max-width: 480px) {
  .skills__mobile-grid { 
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem; 
  }

  .skills__mobile-card { 
    padding: 0.8rem 0.3rem; 
  }

  .skills__mobile-card .skills__icon { 
    width: 26px; 
    height: 26px; 
  }

  .skills__mobile-card .skills__name { 
    font-size: 0.62rem; 
  }
}
</style>