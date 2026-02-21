<template>
  <section class="contact" id="contact" aria-label="Contact">
    <div class="contact__inner">

      <div class="contact__left">
        <h2 class="contact__heading">CONNECT<br />WITH ME</h2>

        <p class="contact__subtext">
          Have a project in mind or a question? Reach out and let's
          turn your <strong>ideas into reality.</strong>
        </p>

        <ul class="contact__info" aria-label="Contact information">
          <li>
            <Mail class="contact__icon" aria-hidden="true" />
            <a href="mailto:christineyunun@gmail.com">christineyunun@gmail.com</a>
          </li>
          <li>
            <Phone class="contact__icon" aria-hidden="true" />
            <a href="tel:+639293696884">0929 369 6884</a>
          </li>
          <li>
            <MapPin class="contact__icon" aria-hidden="true" />
            <span>San Fernando, Pampanga</span>
          </li>
        </ul>

        <div class="contact__socials" aria-label="Social media links">
          <a href="https://github.com/chrztyn" target="_blank" rel="noopener" aria-label="GitHub">
            <Github class="contact__social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/christine-mae-yunun-106477377" target="_blank" rel="noopener" aria-label="LinkedIn">
            <Linkedin class="contact__social-icon" />
          </a>
          <a href="https://instagram.com/ynchrztn" target="_blank" rel="noopener" aria-label="Instagram">
            <Instagram class="contact__social-icon" />
          </a>
        </div>
      </div>

      <div class="contact__right">
        <div class="contact__form-wrap">
          <div class="contact__field">
            <label for="name">NAME</label>
            <input id="name" v-model="form.name" type="text" autocomplete="name" />
          </div>
          <div class="contact__field">
            <label for="email">EMAIL</label>
            <input id="email" v-model="form.email" type="email" autocomplete="email" />
          </div>
          <div class="contact__field">
            <label for="subject">SUBJECT</label>
            <input id="subject" v-model="form.subject" type="text" />
          </div>
          <div class="contact__field">
            <label for="message">MESSAGE</label>
            <textarea id="message" v-model="form.message" rows="7"></textarea>
          </div>
          <div class="contact__submit-wrap">
            <button class="contact__btn" @click="sendMessage" :disabled="sending">
              {{ sending ? 'SENDING...' : 'SEND MESSAGE' }}
            </button>
          </div>
          <p v-if="sent" class="contact__success">Message sent! I'll get back to you soon.</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-vue-next'

const form = ref({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const sent = ref(false)

const sendMessage = () => {
  if (!form.value.name || !form.value.email || !form.value.message) return
  sending.value = true
  setTimeout(() => {
    sending.value = false
    sent.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 1500)
}
</script>

<style scoped>
.contact {
  --cream: #f5f0e8;
  --red: #EC4D37;
  --ink: #1a1a1a;
  background: var(--cream);
  min-height: 100vh;
  padding: 4rem 0 5rem;
}

.contact__inner {
  width: 100%;
  padding-left: clamp(2rem, 5vw, 5rem);
  padding-right: clamp(2rem, 5vw, 5rem);
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;
}

.contact__heading {
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: var(--ink);
  line-height: 1;
  margin: 0 0 1.5rem;
  letter-spacing: -0.01em;
}

.contact__subtext {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--ink);
  opacity: 0.75;
  margin: 0 0 2rem;
  max-width: 320px;
}

.contact__info {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact__info li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.contact__info a,
.contact__info span {
  font-size: 0.9rem;
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

.contact__info a:hover { color: var(--red); }

.contact__icon {
  width: 20px;
  height: 20px;
  color: var(--ink);
  flex-shrink: 0;
}

.contact__socials {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.contact__socials a {
  display: grid;
  place-items: center;
  color: var(--ink);
  transition: color 0.2s ease;
}

.contact__socials a:hover { color: var(--red); }

.contact__social-icon {
  width: 24px;
  height: 24px;
}

.contact__form-wrap {
  background: #e8e2d8;
  border-radius: 16px;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact__field label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--ink);
  opacity: 0.6;
}

.contact__field input,
.contact__field textarea {
  width: 100%;
  background: #d4cec5;
  border: none;
  border-radius: 8px;
  padding: 0.85rem 1rem;
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 0.9rem;
  color: var(--ink);
  outline: none;
  resize: none;
  transition: background 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.contact__field input:focus,
.contact__field textarea:focus {
  background: #cbc4ba;
  box-shadow: 0 0 0 2px var(--red);
}

.contact__submit-wrap {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.contact__btn {
  background: #c0b8ad;
  color: var(--ink);
  border: none;
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  padding: 0.8rem 3rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.contact__btn:hover:not(:disabled) {
  background: var(--red);
  color: #fff;
}

.contact__btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact__success {
  text-align: center;
  font-size: 0.85rem;
  color: var(--red);
  font-weight: 600;
  margin: 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .contact__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>