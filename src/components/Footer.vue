<script setup>
import { Github, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer class="footer">
    <div class="footer-left">
      © 2025 Christine Mae Yunun
    </div>

    <div class="footer-links">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#portfolio">PORTFOLIO</a>
      <a href="#contact">CONTACT</a>
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
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px clamp(2rem, 6vw, 8rem);
  background: var(--bg);
  border-top: 1px solid var(--ink);
  font-size: 14px;
  color: var(--ink);
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.footer-links a {
  margin: 0 10px;
  text-decoration: none;
  color: var(--ink);
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--red);
}

.footer-socials a {
  color: var(--ink);
  transition: color 0.2s ease;
}

.footer-socials a:hover {
  color: var(--red);
}

.icon {
  width: 22px;
  height: 22px;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    gap: 1.2rem;
    padding: 24px 1.5rem;
    text-align: center;
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .footer-links a {
    margin: 0;
  }

  .footer-socials {
    display: flex;
    gap: 1rem;
  }
}
</style>