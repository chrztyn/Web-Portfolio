<template>
  <section class="skills" id="skills" aria-label="Skills">
    <div class="skills__inner">

      <div class="skills__label" ref="labelEl">
        <span>02 — Tech Stack</span>
      </div>

      <div class="skills__big" ref="bigEl">
        <span class="sb-ghost">MY</span>
        <span class="sb-fill">TECH</span>
        <span class="sb-red">STACK.</span>
      </div>

      <div class="skills__tabs">
        <button
          v-for="cat in categories"
          :key="cat"
          class="skills__tab"
          :class="{ on: activeCategory === cat }"
          @click="switchCategory(cat)"
        >
          {{ cat }}
        </button>
      </div>

      <div class="skills__grid" ref="gridEl">
        <div
          v-for="(skill, i) in filteredSkills"
          :key="skill.name"
          class="skills__card"
          :style="{ animationDelay: `${i * 0.06}s` }"
        >
          <img
            :src="skill.icon"
            :alt="skill.name"
            class="skills__icon"
            :style="skill.filter ? `filter: ${skill.filter}` : ''"
          />
          <span class="skills__name">{{ skill.name }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const categories    = ['Backend', 'Frontend', 'Tools']
const activeCategory = ref('Backend')
const labelEl       = ref(null)
const bigEl         = ref(null)
const gridEl        = ref(null)
const animating     = ref(false)

const skills = [
  { name: 'Node.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',           category: 'Backend'  },
  { name: 'Express.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',         category: 'Backend', filter: 'invert(1)' },
  { name: 'MySQL',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',             category: 'Backend'  },
  { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',         category: 'Backend'  },
  { name: 'PHP',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',                 category: 'Backend'  },
  { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',           category: 'Backend'  },
  { name: 'Java',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',               category: 'Backend'  },
  { name: 'REST APIs',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',         category: 'Backend'  },

  { name: 'HTML',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',             category: 'Frontend' },
  { name: 'CSS',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',               category: 'Frontend' },
  { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',   category: 'Frontend' },
  { name: 'Angular',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',     category: 'Frontend' },
  { name: 'Flutter',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',         category: 'Frontend' },
  { name: 'Bootstrap',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',     category: 'Frontend' },
  { name: 'Tailwind',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
  { name: 'Vue.js',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',             category: 'Frontend' },

  { name: 'GitHub',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',           category: 'Tools', filter: 'invert(1)' },
  { name: 'Postman',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',         category: 'Tools'    },
  { name: 'Figma',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',             category: 'Tools'    },
  { name: 'VS Code',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',           category: 'Tools'    },
]

const filteredSkills = computed(() =>
  skills.filter(s => s.category === activeCategory.value)
)

function switchCategory(cat) {
  if (cat === activeCategory.value || animating.value) return
  animating.value = true
  const grid = gridEl.value
  grid.classList.add('fade-out')
  setTimeout(() => {
    activeCategory.value = cat
    grid.classList.remove('fade-out')
    grid.classList.add('fade-in')
    setTimeout(() => {
      grid.classList.remove('fade-in')
      animating.value = false
    }, 400)
  }, 180)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible')
        observer.unobserve(e.target)
      }
    }),
    { threshold: 0.1 }
  )
  ;[labelEl, bigEl, gridEl].forEach(r => {
    if (r.value) observer.observe(r.value)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap');

.skills {
  background: var(--bg);
  transition: background 0.3s ease;
}

.skills__inner {
  width: 100%;
  padding: 4rem clamp(1.5rem, 5vw, 7rem) 5rem;
  box-sizing: border-box;
}

.skills__label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  color: var(--red);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.skills__label.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.skills__label::after {
  content: '';
  width: 36px;
  height: 1px;
  background: rgba(236, 77, 55, 0.3);
  flex-shrink: 0;
}

.skills__big {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(4rem, 9vw, 12rem);
  letter-spacing: -0.04em;
  line-height: 0.82;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.skills__big.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.sb-ghost {
  color: transparent;
  -webkit-text-stroke: 3px var(--ink);
  opacity: 0.2;
  display: block;
}

.sb-fill {
  color: var(--ink);
  display: block;
}

.sb-red {
  color: var(--red);
  display: block;
}

.skills__tabs {
  display: flex;
  gap: 0.35rem;
  margin-bottom: 3rem;
}

.skills__tab {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.36em 1.1em;
  border: 1px solid var(--border2);
  background: transparent;
  color: var(--ink2);
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.skills__tab.on,
.skills__tab:hover {
  background: var(--red);
  border-color: var(--red);
  color: #fff;
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.skills__grid.fade-out {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.skills__grid.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.skills__card {
  background: var(--bg);
  padding: 2.2rem 1.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  cursor: default;
  transition: background 0.25s;
  opacity: 0;
  transform: translateY(18px);
  animation: cardIn 0.38s ease forwards;
}

@keyframes cardIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skills__card::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: var(--red);
  transition: height 0.3s;
}

.skills__card:hover {
  background: var(--bg2);
}

.skills__card:hover::before {
  height: 2px;
}

.skills__card:hover .skills__icon {
  transform: scale(1.2) rotate(-8deg);
}

.skills__icon {
  width: 36px;
  height: 36px;
  object-fit: contain;
  transition: transform 0.3s;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

.skills__name {
  font-family: 'Syne', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--ink);
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .skills__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills__big {
    font-size: clamp(3rem, 14vw, 6rem);
  }
}

@media (max-width: 480px) {
  .skills__inner {
    padding: 3rem 1rem 3rem;
  }

  .skills__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills__card {
    padding: 1rem 0.85rem;
  }

  .skills__name {
    font-size: 0.68rem;
  }

  .skills__icon {
    width: 22px;
    height: 22px;
  }
}
</style>