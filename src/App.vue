<template>
  <header class="header">
    <a href="https://maershaa.github.io/profile/" class="logo-link">
      <svg class="icon-logo">
        <use href="/sprite.svg#logo"></use>
      </svg>
    </a>
    <div class="header-container">
      <ul class="list nav-list">
        <li class="link"><a href="#about"> About </a></li>
        <li class="link"><a href="#tech_stack"> Tech Stack</a></li>
        <li class="link"><a href="#projects"> Projects</a></li>
        <li class="link"><a href="#contact"> Contact</a></li>
      </ul>

      <!-- Переключатель темы -->
      <div class="theme-toggle">
        <input type="checkbox" id="theme-switch" class="switch" />
        <label for="theme-switch" class="slider">
          <svg class="icon moon">
            <use href="/sprite.svg#moon-icon"></use>
          </svg>
          <svg class="icon sun">
            <use href="/sprite.svg#sun-icon"></use>
          </svg>
        </label>
      </div>
    </div>
  </header>

  <section id="hero" class="hero">
    <p class="greeting">
      Hi 👋, My name is Valeriia Yefremova I build things for web
    </p>

    <div class="animations">
      <img
        src="./assets/images/hero/hero-star.png"
        alt="star"
        class="animation-star"
      />

      <div class="animation-circle-blue"></div>
      <div class="animation-circle-pink"></div>
    </div>

    <img src="./assets/images/my-photo.jpg" alt="my photo" class="main-photo" />
  </section>

  <section id="about">
    <h2 class="section-title">About</h2>
    <h3 class="sectiom-descr">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione optio
      dicta consectetur culpa quisquam blanditiis suscipit ipsam alias commodi
      esse mollitia, quasi dolorum sunt qui quo ipsum, quod similique ex?
    </h3>
  </section>

  <main>
    <section id="tech_stack">
      <h2 class="section-title">My Tech Stack</h2>
      <h3 class="sectiom-descr">
        Technologies I’ve been working with recently
      </h3>
      <ul class="list technologies-list">
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#css-icon"></use>
          </svg>
        </li>
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#html-icon"></use>
          </svg>
        </li>
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#js-icon"></use>
          </svg>
        </li>
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#react-icon"></use>
          </svg>
        </li>
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#vscode-icon"></use>
          </svg>
        </li>
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#github-icon-dark"></use>
          </svg>
        </li>
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#html-icon"></use>
          </svg>
        </li>
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#html-icon"></use>
          </svg>
        </li>
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#html-icon"></use>
          </svg>
        </li>
        <li class="technologies-item">
          <svg class="technologies-icon">
            <use href="/sprite.svg#html-icon"></use>
          </svg>
        </li>
      </ul>
    </section>

    <section id="projects">
      <h2 class="section-title">Projects</h2>
      <h3 class="sectiom-descr">Things I’ve built so far</h3>

      <ul class="list projects-list">
        <li class="projects-item">
          <img
            src="./assets/images/projects/drinkyfy.png"
            alt="Drinkify - a virtual bar"
            class="projects-img"
          />

          <div class="projects-item-wpapper">
            <h3 class="project-title">Drinkify</h3>
            <p class="project-descr">
Drinkify was a collaborative project, aiming to create a virtual bar experience with several unique functionalities. It offered an extensive catalog of cocktail recipes covering various drink types. Additionally, it featured a random cocktail generator and the ability for users to create personal lists of favorite cocktails and their corresponding ingredients. Our team used technologies such as React for the frontend and Node.js for backend functionalities, implementing data storage and retrieval through APIs.
            </p>
            <p class="project-stack">
              Tech stack : <span>HTML5, CSS3, Adaptive layout, JavaScript </span>
            </p>
            <ul class="list project-link-list">
              <li class="project-link-item">
                <a href="https://maershaa.github.io/drinkify-team-project/" class="link" target="_blank" rel="noopener noreferrer">
                  <svg class="project-icon">
                    <use
                      class="icon-light"
                      href="/sprite.svg#chain-icon-light"
                    ></use>
                    <use class="icon-dark" href="/sprite.svg#chain-icon"></use>
                  </svg>
                  Live Preview
                </a>
              </li>

              <li class="project-link-item">
                <a href="https://github.com/maershaa/drinkify-team-project" class="link" target="_blank" rel="noopener noreferrer">
                  <svg class="project-icon">
                    <use href="/sprite.svg#github-icon-dark"></use>
                  </svg>
                  View Code
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li class="projects-item">
          <img
            src="./assets/images/projects/ulm.png"
            alt="ULM - a manufacturing company specializing in tin cans, metal trays, and other custom packaging products"
            class="projects-img"
          />

          <div class="projects-item-wpapper">
            <h3 class="project-title">ULM</h3>
            <p class="project-descr">
              Developed a responsive website for a manufacturing company specializing in tin cans, metal trays, and other custom packaging products. The site highlights the company's product range, production capabilities, and contact information, providing a clean and modern user experience across all devices.
            </p>
            <p class="project-stack">
              Tech stack : <span>HTML , JavaScript </span>
            </p>
            <ul class="list project-link-list">
              <li class="project-link-item">
                <a href="https://maershaa.github.io/ulm/" class="link" target="_blank" rel="noopener noreferrer">
                  <svg class="project-icon">
                    <use
                      class="icon-light"
                      href="/sprite.svg#chain-icon-light"
                    ></use>
                    <use class="icon-dark" href="/sprite.svg#chain-icon"></use>
                  </svg>
                  Live Preview
                </a>
              </li>

              <li class="project-link-item">
                <a href="https://github.com/maershaa/ulm" class="link" target="_blank" rel="noopener noreferrer">
                  <svg class="project-icon">
                    <use href="/sprite.svg#github-icon-dark"></use>
                  </svg>
                  View Code
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li class="projects-item">
          <img
            src="./assets/images/projects/webstudio.png"
            alt="WEBSTUDIO as a first personal project"
            class="projects-img"
          />

          <div class="projects-item-wpapper">
            <h3 class="project-title">WEBSTUDIO</h3>
            <p class="project-descr">
             It was my first personal endeavor where I delved into HTML, CSS, and learned to work with Figma. There's nothing more rewarding than observing the difference between where you started and where you've reached over time.This is why this project is so cherished and significant to me.
            </p>
            <p class="project-stack">
              Tech stack : <span>HTML5, CSS3, Adaptive layout, Git, Figma </span>
            </p>

            <ul class="list project-link-list">
              <li class="project-link-item">
                <a href="https://maershaa.github.io/goit-markup-hw-07/" class="link" target="_blank" rel="noopener noreferrer">
                  <svg class="project-icon">
                    <use
                      class="icon-light"
                      href="/sprite.svg#chain-icon-light"
                    ></use>
                    <use class="icon-dark" href="/sprite.svg#chain-icon"></use>
                  </svg>
                  Live Preview
                </a>
              </li>

              <li class="project-link-item">
                <a href="https://github.com/maershaa/goit-markup-hw-07" class="link" target="_blank" rel="noopener noreferrer">
                  <svg class="project-icon">
                    <use href="/sprite.svg#github-icon-dark"></use>
                  </svg>
                  View Code
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li class="projects-item">
          <img
            src="./assets/images/projects/movies.png"
            alt="Movie Search App"
            class="projects-img"
          />

          <div class="projects-item-wpapper">
            <h3 class="project-title">Movie Search App</h3>
            <p class="project-descr">
             This app provides a curated list of today's most popular movies on the homepage, allows users to search for movies by keywords, and offers comprehensive details about specific movies, including credits and reviews.
            </p>
            <p class="project-stack">
              Tech stack : <span>HTML5, CSS3, Adaptive layout, JavaScript, React, Webpack, Rest api</span>
            </p>
            <ul class="list project-link-list">
              <li class="project-link-item">
                <a href="https://maershaa.github.io/goit-react-hw-05-movies" class="link" target="_blank" rel="noopener noreferrer">
                  <svg class="project-icon">
                    <use
                      class="icon-light"
                      href="/sprite.svg#chain-icon-light"
                    ></use>
                    <use class="icon-dark" href="/sprite.svg#chain-icon"></use>
                  </svg>
                  Live Preview
                </a>
              </li>

              <li class="project-link-item">
                <a href="https://github.com/maershaa/goit-react-hw-05-movies" class="link" target="_blank" rel="noopener noreferrer">
                  <svg class="project-icon">
                    <use href="/sprite.svg#github-icon-dark"></use>
                  </svg>
                  View Code
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>

    <section id="contact">
      <h2 class="section-title">Contact</h2>
      <div class="contacts-wraper">
        <a href="tel:+91 12345 09876">+91 12345 09876 </a>
        <a href="mailto:info@example.com"> info@example.com </a>

        <ul class="list social-links-list">
          <li class="link">
            <a href="https://github.com/maershaa">
              <svg width="20" height="20" class="icon-logo">
                <use href="/sprite.svg#github-icon-dark"></use>
              </svg>
            </a>
          </li>

          <li class="link">
            <a href="https://www.linkedin.com/in/valeriiayefremova/">
              <svg width="20" height="20" class="icon-logo">
                <use href="/sprite.svg#linkedin-logo"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <footer></footer>
</template>

<script setup>
import { onMounted } from "vue";
import { initThemeToggle } from "./helpers/themeToggle";

onMounted(() => {
  initThemeToggle();
});
</script>

<style>
/* какие-то стили */
</style>
