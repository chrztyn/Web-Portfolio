<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">

    <nav class="nav" aria-label="Primary Navigation">
      <a href="#home" class="nav-brand">
        <span class="nav-logo-wrap">
          <img :src="currentLogo" alt="Christine Mae Yunun Logo" class="nav-logo">
        </span>
        <span class="nav-name">Christine Mae Yunun</span>
      </a>

      <ul class="nav-links">
        <li><a href="#about"><User class="nav-icon" /><span>About</span></a></li>
        <li><a href="#skills"><CodeXml class="nav-icon" /><span>Skills</span></a></li>
        <li><a href="#portfolio"><Folder class="nav-icon" /><span>Portfolio</span></a></li>
        <li><a href="#resume"><File class="nav-icon" /><span>Resume</span></a></li>
        <li><a href="#contact"><Mail class="nav-icon" /><span>Contact</span></a></li>
      </ul>

      <div class="nav-right">
        <button class="nav-theme" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <Sun v-if="isDark" class="nav-icon" />
          <Moon v-else class="nav-icon" />
        </button>

        <button
          class="nav-hamburger"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
        >
          <span class="bar" :class="{ open: menuOpen }"></span>
          <span class="bar" :class="{ open: menuOpen }"></span>
          <span class="bar" :class="{ open: menuOpen }"></span>
        </button>
      </div>
    </nav>

    <div class="nav-mobile" :class="{ open: menuOpen }">
      <ul>
        <li><a href="#about" @click="menuOpen = false"><User class="nav-icon" /><span>About</span></a></li>
        <li><a href="#skills" @click="menuOpen = false"><CodeXml class="nav-icon" /><span>Skills</span></a></li>
        <li><a href="#portfolio" @click="menuOpen = false"><Folder class="nav-icon" /><span>Portfolio</span></a></li>
        <li><a href="#resume" @click="menuOpen = false"><File class="nav-icon" /><span>Resume</span></a></li>
        <li><a href="#contact" @click="menuOpen = false"><Mail class="nav-icon" /><span>Contact</span></a></li>
      </ul>
    </div>

  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { CodeXml, Folder, File, Mail, User, Sun, Moon } from 'lucide-vue-next'
import LogoLight from '../assets/images/logo.png'
import LogoDark from '../assets/images/logo-dark.png'

const currentLogo = computed(() => isDark.value ? LogoDark : LogoLight)
const isScrolled = ref(false)
const menuOpen = ref(false)
const isDark = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
  if (menuOpen.value) menuOpen.value = false
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: var(--bg);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 2px solid var(--ink);
  background: var(--bg);
  min-width: 0;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--ink);
  font-weight: 700;
  flex-shrink: 0;
  white-space: nowrap;
}

.nav-logo-wrap {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.nav-logo { width: 70%; height: 70%; object-fit: contain; }

.nav-name {
  font-family: 'Satoshi-Variable', Arial, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
}

.nav-links a {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: var(--ink);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover span { color: var(--red); }
.nav-icon { width: 20px; height: 20px; }

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.nav-theme {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  color: var(--ink);
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: background 0.2s ease, color 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}

.nav-theme:hover {
  background: var(--border);
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.bar:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
.bar:nth-child(2).open { opacity: 0; }
.bar:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

.nav-mobile {
  display: none;
  width: 100%;
  background: var(--bg);
  border-bottom: 2px solid var(--border);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
}

.nav-mobile.open { max-height: 400px; }

.nav-mobile ul {
  list-style: none;
  margin: 0;
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
}

.nav-mobile a {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: var(--ink);
  font-weight: 600;
  font-size: 1rem;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s ease, background 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}

.nav-mobile ul li:last-child a { border-bottom: none; }
.nav-mobile a:active { color: var(--red); background: var(--bg-alt); }

@media (min-width: 769px) {
  .site-header.scrolled {
    background: transparent;
    padding-top: 1.2rem;
  }

  .site-header.scrolled .nav {
    transform: translateZ(0);
    will-change: transform;
    width: fit-content;
    margin: 1rem auto 0;
    padding: 0.6rem 1.8rem;
    border-radius: 999px;
    border: 1.5px solid var(--border);
    background: var(--glass-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    box-shadow:
      0 4px 24px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(0, 0, 0, 0.04);
    justify-content: center;
    gap: 1.5rem;
    flex: unset;
  }

  .site-header.scrolled .nav-brand { flex-shrink: 0; }
  .site-header.scrolled .nav-name { display: none; }
  .site-header.scrolled .nav-links { flex: unset; gap: 1.5rem; }
  .site-header.scrolled .nav-links span { display: none; }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .nav { padding: 1rem 1.5rem; }
  .nav-links { gap: 1.2rem; }
  .nav-links a { font-size: 0.88rem; }
}

@media (max-width: 768px) {
  .site-header {
    background: var(--bg) !important;
    padding: 0 !important;
    transition: none !important;
  }

  .nav {
    width: 100%;
    padding: 0.85rem 1rem;
    border-bottom: 2px solid var(--border);
    background: var(--bg);
    justify-content: space-between;
  }

  .site-header.scrolled .nav {
    all: unset;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    padding: 0.85rem 1rem !important;
    border-bottom: 2px solid var(--border) !important;
    background: var(--bg) !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    transform: none !important;
  }

  .site-header.scrolled .nav-name {
    display: block !important;
    color: var(--ink) !important;
    font-weight: 700 !important;
    font-size: 1rem !important;
    white-space: nowrap !important;
  }

  .site-header.scrolled .nav-links { display: none !important; }
  .site-header.scrolled .nav-hamburger { display: flex !important; }
  .site-header.scrolled .nav-right { display: flex !important; }

  .nav-links { display: none; }
  .nav-hamburger { display: flex; }
  .nav-mobile { display: block; }
}

@media (max-width: 390px) {
  .nav { padding: 0.75rem 0.85rem; }
  .nav-name { font-size: 0.88rem; }
  .nav-logo-wrap { width: 24px; height: 24px; }
  .bar { width: 22px; }
}
</style>
