<template>
  <aside :class="{ 'is-expanded': is_expanded }">
    <a href="https://maershaa.github.io/profile/" class="logo-link">
      <svg class="icon-logo">
        <use href="/sprite.svg#logo"></use>
      </svg>
    </a>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <svg class="double-arrow-icon">
          <use href="/sprite.svg#double-arrow"></use>
        </svg>
      </button>
    </div>

    <h3 class="sidebar-title">Menu</h3>

    <ul class="list sidebar-nav-list">
      <li class="sidebar-nav-item">
        <a href="#about" class="link" @click="ToggleMenu">
          <svg class="sidebar-icon">
            <use href="/sprite.svg#person"></use>
          </svg>
          <span class="text">About</span>
        </a>
      </li>

      <li class="sidebar-nav-item">
        <a href="#tech_stack" class="link" @click="ToggleMenu">
          <svg class="sidebar-icon">
            <use href="/sprite.svg#stack"></use>
          </svg>
          <span class="text">Tech Stack</span>
        </a>
      </li>
      <li class="sidebar-nav-item">
        <a href="#projects" class="link" @click="ToggleMenu">
          <svg class="sidebar-icon">
            <use href="/sprite.svg#widgets"></use>
          </svg>
          <span class="text">Projects</span>
        </a>
      </li>
      <li class="sidebar-nav-item">
        <a href="#contact" class="link" @click="ToggleMenu">
          <svg class="sidebar-icon">
            <use href="/sprite.svg#contact"></use>
          </svg>
          <span class="text">Contact</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useSidebar } from "../helpers/useSidebar";
const { is_expanded, ToggleMenu } = useSidebar();

import ThemeToggle from "./ThemeToggle.vue";
</script>
