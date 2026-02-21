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
  padding: 30px 80px;
  background: #f5f0e8;
  border-top: 1px solid #111;
  font-size: 14px;
}

.footer-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #111;
}

.footer-socials a {
  color: #111;
  transition: color 0.2s ease;
}

.footer-socials a:hover {
  color: #EC4D37;
}

.icon {
  width: 22px;
  height: 22px;
}

</style>