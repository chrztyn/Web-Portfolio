<template>
  <section class="contact" id="contact" aria-label="Contact">
    <div class="contact__inner">

      <div class="contact__left">

        <p class="contact__label"><span>06 — Contact</span></p>

        <h2 class="contact__heading">Connect <em>With Me.</em></h2>

        <p class="contact__subtext">
          Have a project in mind or a question? Reach out and let's
          turn your ideas into reality.
        </p>

        <ul class="contact__info" aria-label="Contact information">
          <li>
            <div class="contact__info-icon">
              <Mail class="contact__icon" aria-hidden="true" />
            </div>
            <a href="mailto:christineyunun@gmail.com">christineyunun@gmail.com</a>
          </li>
          <li>
            <div class="contact__info-icon">
              <Phone class="contact__icon" aria-hidden="true" />
            </div>
            <a href="tel:+639293696884">0929 369 6884</a>
          </li>
          <li>
            <div class="contact__info-icon">
              <MapPin class="contact__icon" aria-hidden="true" />
            </div>
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
            <input id="name" v-model="form.name" type="text" autocomplete="name" placeholder="Your name" />
          </div>
          <div class="contact__field">
            <label for="email">EMAIL</label>
            <input id="email" v-model="form.email" type="email" autocomplete="email" placeholder="your@email.com" />
          </div>
          <div class="contact__field">
            <label for="subject">SUBJECT</label>
            <input id="subject" v-model="form.subject" type="text" placeholder="What's this about?" />
          </div>
          <div class="contact__field">
            <label for="message">MESSAGE</label>
            <textarea id="message" v-model="form.message" rows="7" placeholder="Tell me about your project..."></textarea>
          </div>
          <div class="contact__submit-wrap">
            <button class="contact__btn" @click="sendMessage" :disabled="sending">
              <span>{{ sending ? 'SENDING...' : 'SEND MESSAGE' }}</span>
              <span class="contact__btn-arrow" v-if="!sending">↗</span>
            </button>
          </div>
          <p v-if="sent" class="contact__success">✓ Message sent! I'll get back to you soon.</p>
          <p v-if="error" class="contact__error">✗ Something went wrong. Please try again.</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

const form = ref({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const sent = ref(false)
const error = ref(false)

const sendMessage = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) return

  sending.value = true
  sent.value = false
  error.value = false

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    sent.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (e) {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap');

.contact {
  background: var(--bg);
  transition: background 0.4s, color 0.4s;
}

.contact__inner {
  padding: 9rem clamp(2rem, 5vw, 5rem);
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;
  box-sizing: border-box;
}

.contact__label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  color: var(--red);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin: 0 0 1.6rem;
}
.contact__label::after {
  content: '';
  width: 36px;
  height: 1px;
  background: rgba(236, 77, 55, 0.3);
  flex-shrink: 0;
}

.contact__heading {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.2rem, 4.2vw, 4.8rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: var(--ink);
  margin: 0 0 1.5rem;
}
.contact__heading em {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--red);
}

.contact__subtext {
  font-family: 'Syne', sans-serif;
  font-size: 0.82rem;
  line-height: 1.78;
  color: var(--ink2);
  margin: 0 0 2rem;
  max-width: 320px;
}

.contact__info {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact__info li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid transparent;
  transition: border-color 0.25s, background 0.25s, transform 0.25s;
  cursor: default;
}

.contact__info li:hover {
  border-color: var(--border);
  background: rgba(236, 77, 55, 0.04);
  transform: translateX(6px);
}

.contact__info-icon {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  background: var(--card);
  flex-shrink: 0;
  transition: background 0.25s;
}

.contact__info li:hover .contact__info-icon { background: var(--red); }
.contact__info li:hover .contact__icon { color: #fff; }

.contact__info a,
.contact__info span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--ink2);
  text-decoration: none;
  transition: color 0.2s;
}
.contact__info a:hover { color: var(--red); }

.contact__icon {
  width: 15px;
  height: 15px;
  color: var(--ink2);
  transition: color 0.2s;
  flex-shrink: 0;
}

.contact__socials {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.contact__socials a {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--border2);
  color: var(--ink2);
  transition: color 0.25s, border-color 0.25s, background 0.25s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.contact__socials a:hover {
  color: #fff;
  background: var(--red);
  border-color: var(--red);
  transform: translateY(-4px);
}

.contact__social-icon {
  width: 16px;
  height: 16px;
}

.contact__form-wrap {
  background: var(--card);
  border: 1px solid var(--border);
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.contact__form-wrap:focus-within {
  border-color: var(--border2);
  box-shadow: 0 8px 32px var(--shadow);
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact__field label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--ink3);
  text-transform: uppercase;
  transition: color 0.2s;
}

.contact__field:focus-within label {
  color: var(--red);
}

.contact__field input,
.contact__field textarea {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 0.75rem 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--ink);
  outline: none;
  resize: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}

.contact__field input::placeholder,
.contact__field textarea::placeholder {
  color: var(--ink3);
  opacity: 0.6;
}

.contact__field input:focus,
.contact__field textarea:focus {
  border-color: var(--red);
  box-shadow: 0 0 0 3px rgba(236, 77, 55, 0.1);
}

.contact__submit-wrap {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
}

.contact__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--red);
  color: #fff;
  border: none;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s, gap 0.2s;
}

.contact__btn:hover:not(:disabled) {
  background: var(--red2, #ff6b52);
  transform: translateY(-2px);
  gap: 0.8rem;
}

.contact__btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact__btn-arrow {
  transition: transform 0.2s;
}

.contact__btn:hover .contact__btn-arrow {
  transform: translate(2px, -2px);
}

.contact__success {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--red);
  font-weight: 700;
  margin: 0;
  animation: fadeUp 0.4s ease forwards;
}

.contact__error {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #e53e3e;
  font-weight: 700;
  margin: 0;
  animation: fadeUp 0.4s ease forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .contact__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .contact__subtext {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .contact__inner {
    padding: 5.5rem 1.5rem;
  }
  .contact__form-wrap {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact__form-wrap {
    padding: 1.2rem 1rem;
  }
  .contact__btn {
    width: 100%;
    justify-content: center;
  }
}
</style>