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

      <ThemeToggle />
    </div>
  </header>
</template>

<script setup>
import ThemeToggle from "./ThemeToggle.vue";
</script>
