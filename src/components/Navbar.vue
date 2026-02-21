
<template>
  <header class="site-header" :class="{ scrolled: isScrolled }" id="siteHeader" role="banner">
    <nav class="nav" role="navigation" aria-label="Primary Navigation">
      <a href="#home" class="nav-brand">
        <span class="nav-logo-wrap">
          <img src="../assets/images/logo.png" alt="Christine Mae Yunun Logo" class="nav-logo">
        </span>
        <span class="nav-name">Christine Mae Yunun</span>
      </a>

      <ul class="nav-links" role="list">
        <li>
          <a href="#about" aria-label="About">
            <User class="nav-icon" />
            <span>About</span>
          </a>
        </li>
<li>
  <a href="#skills" aria-label="Skills">
    <CodeXml class="nav-icon" />
    <span>Skills</span>
  </a>
</li>
<li>
  <a href="#portfolio" aria-label="Portfolio">
    <Folder class="nav-icon" />
    <span>Portfolio</span>
  </a>
</li>
<li>
  <a href="#resume" aria-label="Resume">
    <File class="nav-icon" />
    <span>Resume</span>
  </a>
</li>
<li>
  <a href="#contact" aria-label="Contact">
    <Mail class="nav-icon" />
    <span>Contact</span>
  </a>
</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

import { CodeXml, Folder, File, Mail, User } from 'lucide-vue-next'
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #f5f0e8; 
  transition: all 0.35s ease;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  min-height: 40px;
  border-bottom: 2px solid #1D1B1B;
  transition: all 0.35s ease;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #1D1B1B;
  font-weight: 700;
}

.nav-logo-wrap {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
  flex-shrink: 0;
}

.nav-logo {
  width: 70%;
  height: 70%;
  object-fit: contain;
}

.nav-name {
  font-family: 'Satoshi-Variable', Arial, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  transition: opacity 0.3s ease, transform 0.3s ease;
  white-space: nowrap;
}

.nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: flex;
  align-items: center;
}

.nav-links a {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: #1D1B1B;
  font-weight: 500;
  transition: color 0.3s ease, filter 0.3s ease;
}

.nav-links a:hover span {
  color: #EC4D37;
}

.nav-links a:hover img {
  filter: brightness(0.5) sepia(1) hue-rotate(-20deg) saturate(5);
}

.nav-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.site-header.scrolled {
  background-color: transparent;
  padding-top: 1rem;        
}

.site-header.scrolled .nav {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 999px;
  border: none;
  padding: 0.8rem 2rem;    
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  gap: 2rem;
  justify-content: center;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
}

.site-header.scrolled .nav-name {
  display: none;
}

.site-header.scrolled .nav-links {
  position: static;
  transform: none;
  gap: 1.8rem;
}

.site-header.scrolled .nav-links li span {
  display: none;
}

.site-header.scrolled .nav-contact a {
  background: none;
  border-radius: 0;
  width: auto;
  height: auto;
  display: flex;
}

.site-header.scrolled .nav-contact a img {
  filter: none;
  width: 20px;
  height: 20px;
}
</style>