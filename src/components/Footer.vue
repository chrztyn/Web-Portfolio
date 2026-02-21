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
      <div class="icon"></div>
      <div class="icon"></div>
    </div>
  </footer>
</template>

<script setup>
// No logic needed yet
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 80px;
  background: #f3f3f3;
  border-top: 1px solid #111;
  font-size: 14px;
}

.footer-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #111;
}

.footer-socials {
  display: flex;
  gap: 12px;
}

.icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #111;
}
</style>