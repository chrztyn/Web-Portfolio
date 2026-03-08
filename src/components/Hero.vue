<template>
  <section id="hero" aria-label="Hero introduction">

    <canvas ref="canvasEl" class="hero-canvas" aria-hidden="true"></canvas>

    <div class="hero-inner">

      <div class="hero-left">

        <div class="hero-eyebrow" ref="eyebrowEl">
          <span class="eyebrow-line"></span>
          <span>Backend Developer · HAU · Philippines</span>
        </div>

        <div class="hero-heading">
          <div class="hero-hello-row" ref="helloEl">
            <h1 class="hero-hello">Hello,</h1>
            <div class="hero-badge">
              <span>back end</span>
              <span>developer</span>
            </div>
          </div>
          <div class="hero-name-row" ref="imEl">
            <h1 class="hero-im">I'm <em>Christine.</em></h1>
          </div>
        </div>

        <p class="hero-bio" ref="bioEl">
          Highly passionate backend web developer with experience in
          <strong>system architecture, database management,</strong> and
          <strong>RESTful API development.</strong>
        </p>

        <div class="hero-ctas" ref="ctasEl">
          <a href="#contact" class="btn-primary">Contact Me <span aria-hidden="true">↗</span></a>
          <a href="#portfolio" class="btn-ghost">View Work</a>
        </div>

        <div class="hero-hint" ref="hintEl">
          <span class="hint-dot" aria-hidden="true"></span>
          <span>Available for freelance &amp; full-time</span>
        </div>

      </div>

      <div class="hero-right-spacer" aria-hidden="true"></div>

    </div>

    <div class="hero-projects" ref="projectsEl">
      <p class="hero-projects-label">Featured Projects</p>
      <div class="hero-projects-grid">
        <a
          v-for="project in featuredProjects"
          :key="project.title"
          :href="project.link"
          class="hero-project-card"
        >
          <div class="hero-project-img">
            <img :src="project.image" :alt="project.title" loading="lazy" />
          </div>
          <div class="hero-project-info">
            <span class="hero-project-tech">{{ project.tech }}</span>
            <h3 class="hero-project-title">{{ project.title }}</h3>
            <p class="hero-project-desc">{{ project.desc }}</p>
          </div>
          <span class="hero-project-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import SplitSmart  from '../assets/images/splitsmart.png'
import NonTaMangan from '../assets/images/nontamangan.png'
import Pelikula    from '../assets/images/pelikula.png'

const eyebrowEl  = ref(null)
const helloEl    = ref(null)
const imEl       = ref(null)
const bioEl      = ref(null)
const ctasEl     = ref(null)
const hintEl     = ref(null)
const projectsEl = ref(null)
const canvasEl   = ref(null)

let renderer, animId

const featuredProjects = [
  {
    title: 'SplitSmart',
    tech: 'Node.js · Express.js · MongoDB',
    desc: 'A web app that automates group expense tracking with RESTful APIs and authentication.',
    image: SplitSmart,
    link: '#portfolio'
  },
  {
    title: 'Non Ta Mangan',
    tech: 'PHP · MySQL · JavaScript',
    desc: 'A restaurant picker and rating web app with spin-the-wheel and user account management.',
    image: NonTaMangan,
    link: '#portfolio'
  },
  {
    title: 'Pelikula',
    tech: 'HTML · CSS · JavaScript',
    desc: 'A movie review and rating web prototype with responsive layout and UI consistency.',
    image: Pelikula,
    link: '#portfolio'
  },
]

onMounted(() => {
  const items = [
    { el: eyebrowEl.value,  delay: 200  },
    { el: helloEl.value,    delay: 400  },
    { el: imEl.value,       delay: 560  },
    { el: bioEl.value,      delay: 750  },
    { el: ctasEl.value,     delay: 920  },
    { el: hintEl.value,     delay: 1060 },
    { el: projectsEl.value, delay: 1200 },
  ]
  items.forEach(({ el, delay }) => {
    if (!el) return
    setTimeout(() => el.classList.add('is-visible'), delay)
  })
  initThree()
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  renderer?.dispose()
})

function getBreakpoint() {
  const w = window.innerWidth
  if (w < 480) return 'xs'
  if (w < 900) return 'sm'
  return 'lg'
}

function initThree() {
  const canvas = canvasEl.value
  if (!canvas) return

  const section = canvas.parentElement
  let W = section.clientWidth
  let H = section.clientHeight

  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(32, W / H, 0.1, 100)
  camera.position.set(0, 0, 13)

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(W, H)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)

  scene.add(new THREE.AmbientLight(0xffffff, 2.5))
  const dir = new THREE.DirectionalLight(0xffffff, 2.0)
  dir.position.set(5, 7, 5)
  scene.add(dir)
  const redPt = new THREE.PointLight(0xffffff, 1.0, 12)
  redPt.position.set(-3, 2, 3)
  scene.add(redPt)

  const matDark = new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.5, metalness: 0.65 })
  const matRed  = new THREE.MeshStandardMaterial({ color: 0xEC4D37, roughness: 0.4, metalness: 0.0 })
  const matWire = new THREE.MeshBasicMaterial({ color: 0xEC4D37, wireframe: true, transparent: true, opacity: 0.12 })

  const group = new THREE.Group()
  scene.add(group)

  function applyBreakpoint() {
    const bp = getBreakpoint()
    if (bp === 'xs') {
      group.position.set(0, 0.5, 0)
      group.scale.setScalar(0.36)
    } else if (bp === 'sm') {
      group.position.set(0, 0.8, 0)
      group.scale.setScalar(0.44)
    } else {
      group.position.set(1.8, 1.2, 0)
      group.scale.setScalar(0.88)
    }
    group.userData.baseY = group.position.y
  }
  applyBreakpoint()

  const serverGroup = new THREE.Group()
  const unitGeo     = new THREE.BoxGeometry(2.0, 0.34, 0.95)
  const leds        = []

  ;[-0.44, 0, 0.44].forEach((y, i) => {
    const unit = new THREE.Mesh(unitGeo, i % 2 === 0 ? matDark : matRed)
    unit.position.y = y
    serverGroup.add(unit)

    const led = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 8, 8),
      new THREE.MeshStandardMaterial({
        color: i === 1 ? 0xffffff : 0x00ffaa,
        emissive: i === 1 ? 0xffffff : 0x00ffaa,
        emissiveIntensity: 1.2
      })
    )
    led.position.set(0.78, y, 0.46)
    led.userData.phase = i * 1.1
    serverGroup.add(led)
    leds.push(led)

    for (let s = 0; s < 3; s++) {
      const slot = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.09, 0.9), matDark)
      slot.position.set(-0.55 + s * 0.2, y, 0.01)
      serverGroup.add(slot)
    }
  })

  serverGroup.add(new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.45, 1.1), matWire))
  group.add(serverGroup)

  const cubies  = []
  const cubeGeo = new THREE.BoxGeometry(0.22, 0.22, 0.22)
  ;[
    [-1.8,  1.4, 0.3, 0],
    [ 1.8,  1.2, 0.2, 1],
    [-1.6, -1.2, 0.5, 0],
    [ 1.8, -0.9, 0.2, 1],
    [-0.7,  1.9, 0.1, 0],
    [ 0.8, -1.9, 0.4, 1],
    [ 0.0,  2.0, 0.2, 0],
    [-1.5, -0.3, 0.8, 1],
  ].forEach(([x, y, z, t]) => {
    const m = new THREE.Mesh(cubeGeo, t === 0 ? matRed.clone() : matDark.clone())
    m.position.set(x, y, z)
    m.userData = { oy: y, sp: 0.35 + Math.random() * 0.55, ph: Math.random() * Math.PI * 2 }
    group.add(m)
    cubies.push(m)
  })

  ;[
    { r: 2.4, rx: Math.PI / 3, rz: 0,           speed:  0.20 },
    { r: 2.4, rx: Math.PI / 2, rz: Math.PI / 4, speed: -0.14 },
    { r: 1.6, rx: Math.PI / 6, rz: Math.PI / 3, speed:  0.28 },
  ].forEach(({ r, rx, rz, speed }) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(r, 0.011, 6, 90),
      new THREE.MeshBasicMaterial({ color: 0xEC4D37, transparent: true, opacity: 0.13 })
    )
    ring.rotation.x = rx
    ring.rotation.z = rz
    ring.userData.speed = speed
    group.add(ring)
  })

  const dotCount = 55
  const dPos     = new Float32Array(dotCount * 3)
  for (let i = 0; i < dotCount; i++) {
    dPos[i * 3]     = (Math.random() - 0.5) * 6
    dPos[i * 3 + 1] = (Math.random() - 0.5) * 5
    dPos[i * 3 + 2] = (Math.random() - 0.5) * 3
  }
  const dotGeo = new THREE.BufferGeometry()
  dotGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3))
  group.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({ color: 0xEC4D37, size: 0.04, transparent: true, opacity: 0.35 })))

  let mx = 0, my = 0
  const onMouse = e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2
    my = (e.clientY / window.innerHeight - 0.5) * 2
  }
  window.addEventListener('mousemove', onMouse)

  const onResize = () => {
    W = section.clientWidth
    H = section.clientHeight
    renderer.setSize(W, H)
    camera.aspect = W / H
    camera.updateProjectionMatrix()
    applyBreakpoint()
  }
  window.addEventListener('resize', onResize)

  const clock = new THREE.Clock()
  const animate = () => {
    animId = requestAnimationFrame(animate)
    const t  = clock.getElapsedTime()
    const bp = getBreakpoint()

    if (bp === 'lg') {
      group.rotation.y += (mx * 0.18 - group.rotation.y) * 0.04
      group.rotation.x += (-my * 0.10 - group.rotation.x) * 0.04
    } else {
      group.rotation.y += (0 - group.rotation.y) * 0.04
      group.rotation.x += (0 - group.rotation.x) * 0.04
    }

    group.position.y = group.userData.baseY + Math.sin(t * 0.55) * 0.1

    group.children.forEach(ch => {
      if (ch.userData.speed !== undefined && ch.geometry?.type === 'TorusGeometry') {
        ch.rotation.z += ch.userData.speed * 0.016
      }
    })

    cubies.forEach(c => {
      c.position.y = c.userData.oy + Math.sin(t * c.userData.sp + c.userData.ph) * 0.2
      c.rotation.x = t * 0.45 * c.userData.sp
      c.rotation.y = t * 0.65 * c.userData.sp
    })

    leds.forEach(l => {
      l.material.emissiveIntensity = 0.6 + 0.7 * Math.sin(t * 2.8 + l.userData.phase)
    })

    renderer.render(scene, camera)
  }
  animate()
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap');

#hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--bg);
  transition: background 0.4s;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  display: block;
  pointer-events: none;
  z-index: 0;
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  align-items: center;
  gap: 0;
  padding: 0 clamp(1.5rem, 5vw, 7rem);
}

.hero-right-spacer {
  min-height: 520px;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 2rem;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.5rem, 0.8vw, 0.62rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink3);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero-eyebrow.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.eyebrow-line {
  display: inline-block;
  width: 24px;
  height: 1px;
  background: var(--red);
  flex-shrink: 0;
}

.hero-heading {
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1;
}

.hero-hello-row {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-hello-row.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-name-row {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-name-row.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-hello,
.hero-im {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(3.2rem, 6vw, 7rem);
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--ink);
  margin: 0;
  white-space: nowrap;
}

.hero-im em {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--red);
}

.hero-badge {
  display: flex;
  flex-direction: column;
  gap: 0;
  align-self: flex-end;
  margin-bottom: 0.6rem;
  flex-shrink: 0;
}

.hero-badge span {
  display: inline-flex;
  align-items: center;
  background: var(--ink);
  color: var(--bg);
  width: max-content;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: 0.03em;
  font-size: clamp(0.55rem, 0.85vw, 0.68rem);
  padding: 0.35em 0.85em;
  border-radius: 999px;
  line-height: 1.3;
  transition: background 0.3s, color 0.3s;
}

.hero-badge span:first-child {
  transform: rotate(-5deg);
  align-self: flex-start;
}

.hero-badge span:last-child {
  margin-top: -0.25em;
  margin-left: 0.9em;
}

.hero-bio {
  font-size: clamp(0.82rem, 1vw, 0.95rem);
  line-height: 1.8;
  color: var(--ink2);
  max-width: 420px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.hero-bio.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-bio strong {
  color: var(--ink);
  font-weight: 700;
}

.hero-ctas {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.hero-ctas.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--red);
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.56rem, 0.8vw, 0.68rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.78em 1.7em;
  border-radius: 4px;
  transition: background 0.2s, transform 0.2s;
}

.btn-primary:hover {
  background: #d93f2b;
  transform: translateY(-2px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  border: 1.5px solid var(--border2);
  color: var(--ink2);
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.56rem, 0.8vw, 0.68rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.78em 1.7em;
  border-radius: 4px;
  transition: border-color 0.2s, color 0.2s;
}

.btn-ghost:hover {
  border-color: var(--ink);
  color: var(--ink);
}

.hero-hint {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.46rem, 0.65vw, 0.56rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink3);
  opacity: 0;
  transition: opacity 0.7s ease;
}

.hero-hint.is-visible {
  opacity: 1;
}

.hint-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--red);
  flex-shrink: 0;
  animation: blink 1.9s ease infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.65);
  }
}

.hero-projects {
  position: relative;
  z-index: 1;
  padding: 2.5rem clamp(1.5rem, 5vw, 7rem) 3rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.hero-projects.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-projects-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.48rem, 0.7vw, 0.58rem);
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink3);
  margin: 0 0 1.2rem;
}

.hero-projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.85rem;
}

.hero-project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border2);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: var(--ink);
  background: var(--card);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s, background 0.3s;
}

.hero-project-card:hover {
  border-color: var(--red);
  box-shadow: 0 4px 20px rgba(236, 77, 55, 0.12);
  transform: translateY(-4px);
}

.hero-project-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.hero-project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(15%);
  transition: transform 0.4s, filter 0.4s;
}

.hero-project-card:hover .hero-project-img img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.hero-project-info {
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.hero-project-tech {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  font-weight: 600;
  color: var(--red);
  letter-spacing: 0.04em;
}

.hero-project-title {
  font-family: 'Syne', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
}

.hero-project-desc {
  font-size: 0.7rem;
  line-height: 1.5;
  color: var(--ink2);
  margin: 0;
}

.hero-project-arrow {
  position: absolute;
  top: 0.65rem;
  right: 0.75rem;
  font-size: 0.9rem;
  color: var(--red);
  opacity: 0;
  transition: opacity 0.2s;
}

.hero-project-card:hover .hero-project-arrow {
  opacity: 1;
}

@media (max-width: 900px) {
  .hero-canvas {
    display: none;
  }
  .hero-inner {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
  }
  .hero-right-spacer {
    display: none;
  }
  .hero-left {
    padding-top: 5rem;
    padding-bottom: 3rem;
    padding-right: 0;
    gap: 1.4rem;
  }
  .hero-hello,
  .hero-im {
    white-space: normal;
  }
  .hero-projects {
    padding: 2rem 1.5rem;
  }
  .hero-projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .hero-inner {
    padding: 0 1rem;
  }
  .hero-left {
    gap: 1.2rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
  .hero-hello,
  .hero-im {
    font-size: clamp(2.4rem, 9vw, 3.5rem);
    white-space: normal;
  }
  .hero-badge span {
    font-size: 0.58rem;
  }
  .hero-ctas {
    flex-direction: column;
    align-items: stretch;
  }
  .btn-primary,
  .btn-ghost {
    justify-content: center;
  }
  .hero-projects {
    padding: 1.5rem 1rem;
  }
  .hero-projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>