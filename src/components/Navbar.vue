<script setup>
  import logo from '@/assets/img/images.js';
  import { ref, computed } from 'vue';
  import { RouterLink } from 'vue-router';

  const isMenuOpen = ref(false);

  //everytime hamburger-menu class item is clicked its states changes through true and false, and this affects the css with the .click event I set
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  //so I dont need to write this conditional every time on several buttons
  const toggledHamburger = computed(() => {
    return isMenuOpen.value ? 'none' : 'flex'
  });
</script>

<template>
  <header>
    <div class="menu">
      <RouterLink to="/"><img :src="logo.elpis" class="elpisL" alt="Home" :style="{ display: toggledHamburger }"></RouterLink>
      <nav class="nav-buttons">
        <RouterLink to="/reading" class="navButton" :style="{ display: toggledHamburger }">
          <img :src="logo.reading" class="navIcon" alt="Reading"> Reading
        </RouterLink>
        <RouterLink to="/songs" class="navButton" :style="{ display: toggledHamburger }">
          <img :src="logo.song" class="navIcon" alt="Songs"> Songs
        </RouterLink>
        <RouterLink to="/community" class="navButton" :style="{ display: toggledHamburger }">
          <img :src="logo.community" class="navIcon" alt="Community"> Community
        </RouterLink>
      </nav>
      <button class="hamburger-menu" @click="toggleMenu" :class="{ 'click': isMenuOpen }">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </div>
  </header>
</template>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }

  header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Distributes items */
    width: 100%; /* Ensure it fills the header */
    background-color: rgb(246, 240, 240);
    height: 59px;
    box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.366);
  }

  .nav-buttons {
    display: flex;
    justify-content: center; /* Center the buttons */
    flex-grow: 1; /* Allow to grow and take up space */
    white-space: nowrap; /* Prevent buttons from wrapping */
    gap: 35px;
    padding-bottom: 4px;
  }

  .navButton {
    margin: 0 20px; /* Space between buttons */
    display: flex;
    align-items: center;
    gap: 5px;
    flex-direction: column;
    text-align: center;
    flex-basis: 85px;
    border: 0;
    border-radius: 15%;
    background-color: rgba(255, 255, 255, 0);
    padding: 6px;
  }

  .navButton:hover {
    cursor: pointer;
    background-color: #ffffff73;
    filter: brightness(95%) invert(8%);
    transition-duration: 500ms;
  }

  .navIcon {
    width: 27px;
    height: 30px;
    object-fit: contain;
  }
  
  .elpisL {
    width: 60px;
    margin-left: 15px;
    transition: 250ms ease-in-out;
  }

  .elpisL:hover {
    filter: brightness(108%);
    rotate: -6deg;
  }

  .hamburger-menu { /* sets hamburger menu toggle button dimensions and properties */
    width: 55px;
    height: 35px;
    right: 20px;
    position: relative;
    border: 0;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
  }

  .bar {
    margin: 6px 7px; /* centered inside the button */
    width: 41px; /*adjust hamburger size*/
    height: 2.5px;
    background-color: black;
    position: relative;
    transition: 250ms ease-in-out;
  }

  @media (max-width: 768px) {
    .navButton {
      margin: 0 10px; /* Reduce spacing on smaller screens */
    }
  }

  .hamburger-menu.click .bar:nth-child(2) {
    opacity: 0;
    transform: translate(-10px);
  }

  .hamburger-menu.click .bar:nth-child(1) {
    transform: rotate(45deg) translate(1px, 10px);
  }

  .hamburger-menu.click .bar:nth-child(3) {
    transform: rotate(-45deg) translate(1px, -10px);
  }
</style>