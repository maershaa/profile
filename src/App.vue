<template>
  <Sidebar />

  <Header />

  <Hero />

  <About />

  <main>
    <Technologies />

    <Projects />

    <Contacts />
  </main>

<footer class="footer">

    <p>Designed & built by  <a
      href="https://www.linkedin.com/in/valeriiayefremova/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Valeriia Y.
    </a> – Frontend Developer</p>
  <p>© 2025 All rights reserved</p>

</footer>

  
  </template>

<script setup>
import { onMounted } from "vue";
import { initThemeToggle } from "./helpers/themeToggle";

import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Technologies from "./components/Technologies.vue";
import Projects from "./components/Projects.vue";
import Contacts from "./components/Contacts.vue";

import Sidebar from "./components/Sidebar.vue";

onMounted(() => {
  initThemeToggle();
});
</script>

<style>
/* какие-то стили */
</style>
