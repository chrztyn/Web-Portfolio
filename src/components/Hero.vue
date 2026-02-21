<template>
  <section class="hero" aria-label="Hero introduction">
    <div class="hero__inner">

      <div class="hero__row-top">
        <h1 class="hero__hello">HELLO</h1>
        <div class="hero__badge" role="note" aria-label="Job title: back end developer">
          <span>back end</span>
          <span>developer</span>
        </div>
      </div>

      <div class="hero__row-mid" aria-hidden="false">
        <span class="hero__im">I'M</span>
        <span class="hero__asterisk" aria-hidden="true">✳</span>
        <span class="hero__name">CHRISTINE</span>
      </div>

      <div class="hero__row-bottom">
        <nav class="hero__cta" aria-label="Primary actions">
          <a href="#contact" class="hero__link" aria-label="Contact Christine Mae Yunun">
            <span class="hero__arrow" aria-hidden="true">↗</span>
            <span>CONTACT ME</span>
          </a>
          <a href="#portfolio" class="hero__link" aria-label="View Christine's portfolio">
            <span class="hero__arrow" aria-hidden="true">↗</span>
            <span>MY PORTFOLIO</span>
          </a>
        </nav>

        <div class="hero__bio">
          <p>
            Highly passionate backend-focused web developer with experience in system architecture, 
            database management, and RESTful API development. Skilled in building efficient, scalable, 
            and maintainable applications. Eager to solve problems and apply technical expertise 
            to real world projects.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  --cream: #f5f0e8;
  --red:   #EC4D37;
  --ink:   #1a1a1a;
  --font-display: 'Satoshi-Regular', sans-serif;
  --font-body: 'Satoshi-Variable', sans-serif;

  font-family: var(--font-body);
  min-height: auto;
  display: flex;
  align-items: flex-start;       
  justify-content: flex-start;   
  padding: 2vh clamp(1rem, 8vw, 6rem);
  padding-top: 0.5rem;  
  
}

.hero__inner {
  width: 100%;
  max-width: 100%;   
  display: flex;
  flex-direction: column;
   padding-left: clamp(2rem, 5vw, 5rem);
  gap: 0;
}

.hero__row-top {
  display: flex;
  align-items: flex-end;
  gap: 3rem;
}

.hero__hello {
  font-family: var(--font-display);
  font-weight: 900;
  font-style: normal;
  color: var(--red);
  font-size: clamp(5rem, 11vw, 13rem);
  line-height: 0.85;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -0.02em;
}

.hero__badge {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 0;
  margin: 0;

  line-height: 0;            
  font-size: 0;           
  align-items: flex-start;
}

.hero__badge span {
  display: inline-flex;     
  align-items: center;

  background: var(--ink);
  color: #fff;

  width: max-content;
  white-space: nowrap;

  font-family: 'Satoshi-Regular';
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: -0.01em;

  font-size: clamp(1.3rem, 2.6vw, 2.4rem);
  line-height: 1;        

  padding: 0.5em 1em;        
  border-radius: 9999px;     

  margin: 0;                 
}

.hero__badge span:last-child {
  margin-top: -0.35em;
  margin-left: 3.3em;
}

.hero__row-mid {
  display: flex;
  align-items: center;
  gap: clamp(0.6rem, 1.5vw, 1.5rem);
  margin-top: 0rem;
}

.hero__im {
  font-family: var(--font-display);
  font-weight: 900;
  font-style: normal;
  color: var(--red);
  font-size: clamp(4rem, 9.5vw, 11rem);
  line-height: 0.88;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.hero__asterisk {
  color: var(--red);
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 1;
  animation: spin 10s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

.hero__name {
  font-family: var(--font-display);
  font-weight: 900;
  font-style: normal;
  color: var(--red);
  font-size: clamp(4rem, 9.5vw, 11rem);
  line-height: 0.88;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hero__row-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 6.5rem;
}

.hero__cta {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.hero__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--red);
  font-size: clamp(0.8rem, 1.1vw, 1rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1.5px;
  transition: opacity 0.18s;
}

.hero__link:hover { opacity: 0.6; }

.hero__arrow {
  font-size: 1.3em;
  line-height: 1;
}

.hero__bio {
  max-width:580px;
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  line-height: 1.7;
  color: var(--ink);
  text-align: justify;
  flex: 1;
}

.hero__bio p { 
    margin: 0;
    text-align: justify; 
}


@media (max-width: 700px) {
  .hero__row-top {
    flex-wrap: wrap;
    align-items: center;
  }

  .hero__row-mid {
    flex-wrap: wrap;
  }

  .hero__row-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
  }

  .hero__bio {
    text-align: center;
    max-width: 90%;
  }
}
</style>