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
                  <img :src="skill.icon" :alt="skill.name" class="skills__icon" />
                  <div class="skills__info">
                    <span class="skills__name">{{ skill.name }}</span>
                  </div>
                </template>
              </div>
            </div>
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
  { name: 'XAMPP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xampp/xampp-original.svg', level: 3, category: 'Tools' },
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
  --cream: #f5f0e8;
  --red: #EC4D37;
  --ink: #1a1a1a;
  background: var(--cream);
  padding: 4rem 0 5rem;  
  padding-top: 50rem;     
  min-height: 100vh;  
}

.skills__inner {
  width: 100%;
  padding-left: clamp(2rem, 5vw, 5rem);
  padding-right: clamp(2rem, 5vw, 5rem);
}

.skills__label {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 0.8rem;
  font-family: 'Satoshi-Variable', sans-serif;
}

.skills__divider {
  border: none;
  border-top: 2px solid var(--ink);
  margin: 0 0 2rem;
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
  transition: opacity 0.2s ease, color 0.2s ease;
}

.skills__tab.active {
  opacity: 1;
  color: var(--red);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

.skills__tab:hover { opacity: 0.8; }

.skills__grid-wrap {
  flex: 1;
  overflow: hidden;
  min-width: 0;  
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 8%,
    black 88%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 8%,
    black 88%,
    transparent 100%
  );
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
  margin-top: -1.8rem;
}

.skills__col:nth-child(2) {
  margin-top: 1rem;
}

.skills__card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1.5px solid #d0c9bc;
  border-radius: 12px;
  padding: 0.9rem 1rem;
  background: transparent;
  min-height: 68px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.skills__card:hover:not(.empty) {
  border-color: var(--red);
  box-shadow: 0 2px 12px rgba(236, 77, 55, 0.1);
}

.skills__card.empty {
  cursor: default;
}

.skills__icon {
  width: 36px;
  height: 36px;
  object-fit: contain;
  flex-shrink: 0;
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
  .skills__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .skills__col:nth-child(1),
  .skills__col:nth-child(3) {
    margin-top: 0;
  }
  .skills__col:nth-child(2) {
    margin-top: 0;
  }
}
</style>