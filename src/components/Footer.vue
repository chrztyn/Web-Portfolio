<script setup>
import { Github, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer class="footer">
    <div class="footer-left">
      © 2025 Christine Mae Yunun
    </div>

    <div class="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </div>

    <div class="footer-socials">
      <a href="https://github.com/chrztyn" target="_blank" rel="noopener" aria-label="GitHub">
        <Github class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/christine-mae-yunun-106477377" target="_blank" rel="noopener" aria-label="LinkedIn">
        <Linkedin class="icon" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem clamp(2rem, 5vw, 5rem);
  background: var(--bg);
  border-top: 1px solid var(--border);
  transition: background 0.4s, color 0.4s;
}

.footer-left {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.1em;
  color: var(--ink3);
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 1.8rem;
}

.footer-links a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink3);
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--red);
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-socials a {
  color: var(--ink3);
  transition: color 0.2s;
}

.footer-socials a:hover {
  color: var(--red);
}

.icon {
  width: 16px;
  height: 16px;
  display: block;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
    text-align: center;
  }

  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .footer-socials {
    gap: 1rem;
  }
}
</style>