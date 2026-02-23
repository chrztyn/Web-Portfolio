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
.contact {
  background: var(--bg);
  padding: 4rem 0 5rem;
  transition: background 0.3s ease;
}

.contact__inner {
  width: 100%;
  padding-left: clamp(2rem, 5vw, 5rem);
  padding-right: clamp(2rem, 5vw, 5rem);
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;
  box-sizing: border-box;
}

.contact__heading {
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: var(--ink);
  line-height: 1;
  margin: 0 0 1.5rem;
  letter-spacing: -0.01em;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}

.contact__heading::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0%;
  height: 3px;
  background: var(--red);
  transition: width 0.5s ease;
}

.contact__left:hover .contact__heading::after { 
  width: 100%; 
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
  gap: 0.8rem;
}

.contact__info li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  border: 1.5px solid transparent;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
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
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: var(--card);
  flex-shrink: 0;
  transition: background 0.25s ease;
}

.contact__info li:hover .contact__info-icon { background: var(--red); }
.contact__info li:hover .contact__icon { color: #fff; }

.contact__info a,
.contact__info span {
  font-size: 0.9rem;
  color: var(--ink);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact__info a {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contact__info a:hover { color: var(--red); }

.contact__icon {
  width: 16px;
  height: 16px;
  color: var(--ink);
  transition: color 0.2s ease;
  flex-shrink: 0;
}

.contact__socials {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}

.contact__socials a {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1.5px solid var(--border);
  color: var(--ink);
  transition: color 0.25s ease, border-color 0.25s ease,
              background 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.contact__socials a:hover {
  color: #fff;
  background: var(--red);
  border-color: var(--red);
  transform: translateY(-4px);
}

.contact__social-icon { 
  width: 18px; 
  height: 18px; 
}

.contact__form-wrap {
  background: var(--card);
  border-radius: 16px;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border: 1.5px solid transparent;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.contact__form-wrap:focus-within {
  border-color: var(--border);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
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
  transition: opacity 0.2s ease, color 0.2s ease;
}

.contact__field:focus-within label {
   opacity: 1; 
   color: var(--red); 
  }

.contact__field input,
.contact__field textarea {
  width: 100%;
  background: var(--card-dark);
  border: 1.5px solid transparent;
  border-radius: 8px;
  padding: 0.85rem 1rem;
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 0.9rem;
  color: var(--ink);
  outline: none;
  resize: none;
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.contact__field input::placeholder,
.contact__field textarea::placeholder {
  color: var(--ink);
  opacity: 0.35;
}

.contact__field input:hover,
.contact__field textarea:hover { background: var(--border); }

.contact__field input:focus,
.contact__field textarea:focus {
  background: var(--card-dark);
  border-color: var(--red);
  box-shadow: 0 0 0 3px rgba(236, 77, 55, 0.12);
}

.contact__submit-wrap {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.contact__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--ink);
  color: var(--bg);
  border: none;
  font-family: 'Satoshi-Variable', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  padding: 0.85rem 3rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease,
              transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), gap 0.2s ease;
}

.contact__btn:hover:not(:disabled) {
  background: var(--red);
  color: #fff;
  transform: translateY(-2px);
  gap: 0.8rem;
}

.contact__btn:disabled { 
  opacity: 0.6; 
  cursor: not-allowed; 
}

.contact__btn-arrow { 
  transition: transform 0.2s ease; 
}

.contact__btn:hover .contact__btn-arrow { 
  transform: translate(2px, -2px); 
}

.contact__success {
  text-align: center;
  font-size: 0.85rem;
  color: var(--red);
  font-weight: 600;
  margin: 0;
  animation: fadeUp 0.4s ease forwards;
}

.contact__error {
  text-align: center;
  font-size: 0.85rem;
  color: #e53e3e;
  font-weight: 600;
  margin: 0;
  animation: fadeUp 0.4s ease forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
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
     padding-left: 1.5rem; 
     padding-right: 1.5rem; 
    }
  .contact__form-wrap { 
    padding: 1.5rem; 
  }
}

@media (max-width: 480px) {
  .contact__inner { 
    padding-left: 1rem; 
    padding-right: 1rem; 
    gap: 2rem; 
  }

  .contact__heading { 
    font-size: 2.5rem;
   }

  .contact__form-wrap { 
    padding: 1.2rem 1rem; 
  }

  .contact__btn { 
    width: 100%; 
    justify-content: center; 
    padding: 0.85rem 1rem; 
  }
}
</style>