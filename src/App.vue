<template>

  <Header />

  <Hero />

  <About />

  <main>
    <Technologies />

    <Projects />

    <Contacts />
  </main>

  <footer></footer>
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

onMounted(() => {
  initThemeToggle();
});
</script>

<style>
/* какие-то стили */
</style>
